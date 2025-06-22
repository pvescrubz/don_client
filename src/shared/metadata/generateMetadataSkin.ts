import { skinsService } from "@/feature/skins/skins.service";
import { Metadata } from "next";
import { NOT_FOUND } from ".";

export const generateMetadataSkin = async (slug: string): Promise<Metadata> => {
  const skin = await skinsService.getSkinBySlug(slug);

  if (!skin) return NOT_FOUND;
  const description = `Скин ${skin.name} — для игры ${skin.game?.name}. Приобретите скин по лучшей цене с гарантией безопасности и быстрой доставкой на Don Viche.`;

  const META = {
    title: skin.name + " | Don Viche",
    description,
    images: [
      {
        url: "images/skins/" + skin.image,
        width: 320,
        height: 211,
      },
    ],
  };

  return {
    ...META,
    openGraph: {
      ...META,
    },
    alternates: {
      canonical: `skins/${skin.game?.name}/${skin.slug}`,
    },
  };
};
