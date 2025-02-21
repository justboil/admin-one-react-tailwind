import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/admin-one-react-tailwind",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/admin-one-react-tailwind",
        basePath: false,
        permanent: false,
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.justboil.me",
      },
    ],
  },
};

export default nextConfig;
