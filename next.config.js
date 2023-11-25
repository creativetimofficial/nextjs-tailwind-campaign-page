/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/nextjs-tailwind-campaign-page/",
  basePath: "/nextjs-tailwind-campaign-page",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
