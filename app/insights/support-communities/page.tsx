import { Header } from '@/components/community/header';
import { Gallery } from '@/components/community/gallery';
import { Timeline } from '@/components/community/timeline';
import client from '@/lib/tina-local-client';

async function getCommunityData() {
  const [galleryResponse, timelineResponse] = await Promise.all([
    client.queries.communityGalleryConnection(),
    client.queries.communityTimelineConnection(),
  ]);

  return {
    galleryImages: galleryResponse.data.communityGalleryConnection.edges.map(edge => edge.node),
    timelineEvents: timelineResponse.data.communityTimelineConnection.edges.map(edge => edge.node),
  };
}

export default async function SupportCommunitiesPage() {
  const { galleryImages, timelineEvents } = await getCommunityData();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Timeline events={timelineEvents as any} />
        <Gallery images={galleryImages as any} />
      </div>
    </main>
  );
}
