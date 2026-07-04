import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: 'export',
  // Relative paths hanya untuk static export (production). Di dev bikin asset 404/error.
  ...(process.env.NODE_ENV === 'production' ? { assetPrefix: './' } : {}),
  turbopack: {
    root: projectRoot,
  },
  images: {
    unoptimized: true, // Disarankan ditambahkan saat menggunakan 'export'
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
