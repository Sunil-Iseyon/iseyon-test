import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { NewProject } from '@/components/new-project'
import { TestimonialsSection } from '@/components/testimonials-section'
import { BannerSection } from '@/components/banner-section'
import { PartnersSlider } from '@/components/partners-slider'
import client from "@/lib/tina-local-client";

async function getHomeData() {
  const heroResponse = await client.queries.hero({ relativePath: "main.json" });
  const serviceContentResponse = await client.queries.serviceContentConnection();
  const testimonialsResponse = await client.queries.testimonialsConnection();
  const partnersResponse = await client.queries.partnersConnection();
  const bannerResponse = await client.queries.banner({ relativePath: "main.json" });
  const projectResponse = await client.queries.project({ relativePath: "main.json" });
  const founderMessagesResponse = await client.queries.founderMessagesConnection();

  // Filter for services that should show on home page and sort by modification date
  const allServiceContent = serviceContentResponse.data.serviceContentConnection.edges?.map(edge => ({
    ...edge?.node,
    _sys: edge?.node?._sys
  })) || [];
  
  const homePageServices = allServiceContent
    .filter(service => service.showOnHomePage === true)
    .sort((a, b) => {
      // Sort by modification date (newest first)
      const dateA = new Date(a._sys?.lastModifiedAt || a._sys?.createdAt || 0);
      const dateB = new Date(b._sys?.lastModifiedAt || b._sys?.createdAt || 0);
      return dateB.getTime() - dateA.getTime();
    });

  return {
    hero: heroResponse.data.hero,
    services: homePageServices,
    testimonials: testimonialsResponse.data.testimonialsConnection.edges?.map(edge => edge?.node) || [],
    partners: partnersResponse.data.partnersConnection.edges?.map(edge => edge?.node) || [],
    banner: bannerResponse.data.banner,
    project: projectResponse.data.project,
    founderMessages: founderMessagesResponse.data.founderMessagesConnection.edges?.map(edge => edge?.node) || [],
  };
}

export default async function Home() {
  const data = await getHomeData();

  return (
    <main className="min-h-screen bg-white snap-y snap-proximity">
      <Hero data={data.hero as any} founderMessages={data.founderMessages as any} />
      <ServicesSection services={data.services as any} />
      <NewProject data={data.project as any} />
      <TestimonialsSection testimonials={data.testimonials as any} />
      <BannerSection data={data.banner as any} />
      <PartnersSlider partners={data.partners as any} />
    </main>
  )
}
