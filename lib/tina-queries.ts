import client from "@/lib/tina-local-client";

export async function getHeroContent() {
  const response = await client.queries.hero({ relativePath: "main.json" });
  return response.data.hero;
}

export async function getAllServices() {
  const response = await client.queries.servicesConnection();
  return response.data.servicesConnection.edges?.map(edge => edge?.node) || [];
}

export async function getServiceBySlug(slug: string) {
  const services = await getAllServices();
  return services.find(s => s?.slug === slug);
}

export async function getAllTestimonials() {
  const response = await client.queries.testimonialsConnection();
  return response.data.testimonialsConnection.edges?.map(edge => edge?.node) || [];
}

export async function getAllPartners() {
  const response = await client.queries.partnersConnection();
  return response.data.partnersConnection.edges?.map(edge => edge?.node) || [];
}

export async function getBannerContent() {
  const response = await client.queries.banner({ relativePath: "main.json" });
  return response.data.banner;
}

export async function getAllTeamMembers() {
  const response = await client.queries.teamMembersConnection();
  return response.data.teamMembersConnection.edges?.map(edge => edge?.node) || [];
}

export async function getAllCompanyValues() {
  const response = await client.queries.companyValuesConnection();
  return response.data.companyValuesConnection.edges?.map(edge => edge?.node) || [];
}

export async function getVisionContent() {
  const response = await client.queries.vision({ relativePath: "main.json" });
  return response.data.vision;
}

export async function getProjectContent() {
  const response = await client.queries.project({ relativePath: "main.json" });
  return response.data.project;
}

export async function getAllServiceContent() {
  const response = await client.queries.serviceContentConnection();
  return response.data.serviceContentConnection.edges?.map(edge => edge?.node) || [];
}

export async function getServiceContentBySlug(category: string, slug: string) {
  const allContent = await getAllServiceContent();
  return allContent.find(c => 
    c?.category === category && 
    c?._sys?.filename?.toLowerCase() === slug.toLowerCase()
  );
}

// Helper function to organize services by category for navigation
export interface NavigationService {
  label: string;
  href: string;
}

export interface NavigationGroup {
  group: string;
  items: NavigationService[];
}

// Category display names mapping
const CATEGORY_LABELS: Record<string, string> = {
  "cloud-and-platforms": "Cloud & Platforms",
  "bi-and-analytics": "BI & Analytics",
  "data-and-engineering": "Data & Engineering",
  "support": "Support",
};

export async function getServicesForNavigation(): Promise<NavigationGroup[]> {
  const allServices = await getAllServiceContent();
  
  // Group services by category
  const grouped: Record<string, NavigationService[]> = {};
  
  allServices.forEach(service => {
    if (!service?.category || !service?.heading || !service?._sys?.filename) return;
    
    const category = service.category;
    const slug = service._sys.filename.replace('.json', '');
    
    if (!grouped[category]) {
      grouped[category] = [];
    }
    
    grouped[category].push({
      label: service.heading,
      href: `/services/${category}/${slug}`,
    });
  });
  
  // Convert to array of NavigationGroup with proper labels
  return Object.entries(grouped).map(([category, items]) => ({
    group: CATEGORY_LABELS[category] || category,
    items: items.sort((a, b) => a.label.localeCompare(b.label)),
  }));
}
