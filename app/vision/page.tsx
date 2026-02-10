import client from "@/lib/tina-local-client";
import { VisionClient } from "@/components/vision-client";

async function getVisionData() {
  const response = await client.queries.vision({ relativePath: "main.json" });
  return response.data.vision;
}

export default async function VisionPage() {
  const visionData = await getVisionData();

  return <VisionClient visionData={visionData} />;
}
