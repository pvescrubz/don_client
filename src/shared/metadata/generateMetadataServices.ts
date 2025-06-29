import { Metadata } from "next";
import { NOT_FOUND, OG } from ".";
import { PLATFORM_CONFIG } from "../content/platorms.config";

export const generateMetadataServices = async (
  platform: string
): Promise<Metadata> => {
  const config = PLATFORM_CONFIG[platform];

  if (!config) return NOT_FOUND;

  const META = {
    title: config.formTitle + " | Don Viche",
    description: `Надёжное пополнение баланса ${config.name} — быстро, безопасно и без скрытых комиссий. Steam, Epic Games, PlayStation, Xbox и Blizzard — с Don Viche легко.`,
  };

  return {
    ...META,
    openGraph: {
      ...META,
      images: OG,
    },
    alternates: {
      canonical: config.slug,
    },
  };
};
