import localFont from "next/font/local";

const roboto = localFont({
  src: [
    {
      path: "../assets/fonts/Roboto-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Roboto-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  adjustFontFallback: false,
  display: "swap",
  fallback: ["Helvetica Neue", "sans-serif"],
  variable: "--font-family",
});

const ebbe = localFont({
  src: [
    {
      path: "../assets/fonts/Ebbe.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  adjustFontFallback: false,
  fallback: ["Helvetica Neue", "sans-serif"],
  display: "swap",
  variable: "--second-family",
});

export const fonts = `${roboto.variable} ${ebbe.variable}`;
