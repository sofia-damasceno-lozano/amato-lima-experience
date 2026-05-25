/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/amato-lima-experience",

  assetPrefix: "/amato-lima-experience",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/amato-lima-experience",
  assetPrefix: "/amato-lima-experience/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
