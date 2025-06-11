import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lis-skins.com",
        port: "",
        pathname: "/market_images/**",
      },
      {
        protocol: "https",
        hostname: "assets.lis-skins.com",
        pathname: "/blogfiles/**",
      },
    ],
  },
};

export default nextConfig;
