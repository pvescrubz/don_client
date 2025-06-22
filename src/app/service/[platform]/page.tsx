import { AddBalanceScreen } from "@/screens/AddBalance.screen";
import { PLATFORM_CONFIG } from "@/shared/content/platorms.config";
import { image } from "@/shared/metadata";
import { Metadata } from "next";




const generatePageMetadata = async (platform: string): Promise<Metadata> => {
  const config = PLATFORM_CONFIG[platform as keyof typeof PLATFORM_CONFIG];

  if (!config) {
    return {};
  }

  return {

    title: config.formTitle,
    description: config.formTitle,
    openGraph: {
      title: config.formTitle,
      description: config.formTitle,
      images: image,
    },
    twitter: {
      title: config.formTitle,
      description: config.formTitle,
      images: image,
    },
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ platform: string }>;
}): Promise<Metadata> {
  const { platform } = await params;
  return generatePageMetadata(platform);
}

// Основной компонент страницы
const Page = async ({ params }: { params: Promise<{ platform: string }> }) => {
  const { platform } = await params;

  return <AddBalanceScreen platform={platform} />;
};

export default Page;