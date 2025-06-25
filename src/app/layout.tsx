import { Footer } from "@/shared/components/layout/Footer/Footer";
import { Header } from "@/shared/components/layout/Header/Header";
import { Page } from "@/shared/components/ui/containers/Page/Page";
import { fonts } from "@/shared/lib/fonts";
import { OG } from "@/shared/metadata";
import { Gtag } from "@/shared/metadata/Gtag";
import { CONFIG } from "@/shared/model/config";
import { RootProviders } from "@/shared/providers/RootProviders";
import "@/shared/styles/globals.css";
import { Metadata } from "next";

const META = {
  title: "DonViche | Купить скины CS2, Dota 2 и Rust | Безопасный трейдинг",
  description:
    "🚀 Безопасная покупка и продажа скинов CS:GO, Dota 2 и Rust с мгновенной доставкой. Лучшие цены на рынке, защита от мошенников и 24/7 поддержка.",
  images: OG,
};

export const metadata: Metadata = {
  ...(CONFIG.APP_BASE_URL && {
    metadataBase: new URL(CONFIG.APP_BASE_URL),
  }),
  ...META,
  openGraph: {
    ...META,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={fonts}>
        <RootProviders>
          <Page>
            <Header />
            <main>{children}</main>
            <Footer />
          </Page>
          <Gtag/>
        </RootProviders>
      </body>
    </html>
  );
}
