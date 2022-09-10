/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: "/admin-one-react-tailwind",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.dicebear.com',
      },
    ],
  },
}

export default nextConfig