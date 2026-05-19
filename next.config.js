/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/amato-lima-experience",
  assetPrefix: "/amato-lima-experience/",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
