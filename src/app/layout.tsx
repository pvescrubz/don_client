import { Footer } from "@/shared/components/layout/Footer/Footer";
import { Header } from "@/shared/components/layout/Header/Header";
import { Page } from "@/shared/components/ui/containers/Page/Page";
import { fonts } from "@/shared/lib/fonts";
import { RootProviders } from "@/shared/providers/RootProviders";
import "@/shared/styles/globals.css";

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
        </RootProviders>
      </body>
    </html>
  );
}
