/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: "/admin-one-react-tailwind",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig