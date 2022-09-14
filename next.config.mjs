/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: "/admin-one-react-tailwind",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig