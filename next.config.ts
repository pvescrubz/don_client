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
    ],
  },
};

export default nextConfig;
