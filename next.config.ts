import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Ensure Prisma binaries are included in standalone build
  serverExternalPackages: ['@prisma/client', 'prisma'],
};

export default nextConfig;
