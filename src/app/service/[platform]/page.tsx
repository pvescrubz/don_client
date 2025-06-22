import { AddBalanceScreen } from "@/screens/AddBalance.screen";
import { NotFoundScreen } from "@/screens/NotFound.screen";
import { PLATFORM_CONFIG } from "@/shared/content/platorms.config";
import { generateMetadataServices } from "@/shared/metadata/generateMetadataServices";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ platform: string }>;
}): Promise<Metadata> {
  const { platform } = await params;
  return await generateMetadataServices(platform);
}

const Page = async ({ params }: { params: Promise<{ platform: string }> }) => {
  const { platform } = await params;
  if (!PLATFORM_CONFIG[platform]) return <NotFoundScreen />;

  return <AddBalanceScreen platform={platform} />;
};

export default Page;
