/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/nextjs-tailwind-campaign-page/",
  basePath: "/nextjs-tailwind-campaign-page",
};

module.exports = nextConfig;
