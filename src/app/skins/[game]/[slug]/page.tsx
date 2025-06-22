import { skinsService } from "@/feature/skins/skins.service";
import { SkinScreen } from "@/screens/Skin.screen";
import { CONFIG } from "@/shared/model/config";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const getSkinMetadata = async (slug: string): Promise<Metadata> => {
    const skin = await skinsService.getSkinBySlug(slug);
    if (!skin) return {};
    const description = Array.isArray(skin.description)
      ? skin.description.join(' ')
      : skin.description || '';

    return {
      title: skin.name,
      description: description,
       alternates: {
                canonical: `${CONFIG.APP_BASE_URL}/skins/${slug}${skin.name}`, 
              },
      openGraph: {
        title: skin.name,
        description: description,
        images: [{
          url: skin.image,
          width: 320,
          height: 211,
        }],
      },
    };
};

export async function generateMetadata({
  params: promiseParams,
}: {
  params: Promise<{ game: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await promiseParams;
  return getSkinMetadata(slug);
}

const Page = async ({ params }: { params: Promise<{ game: string; slug: string }> }) => {
  const { game, slug } = await params; 

  const skin = await skinsService.getSkinBySlug(slug);

  if (!skin) {
    notFound();
  }

  return <SkinScreen game={game} slug={slug} />;
};

export default Page;