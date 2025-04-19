import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "safhd7w5c2zkprnf.public.blob.vercel-storage.com",
      },
    ],
  },

  experimental: {
    serverActions: {
      allowedOrigins: ["c1m1jltr-3000.asse.devtunnels.ms", "localhost:3000"],
    },
  },

  // Additional security headers
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "c1m1jltr-3000.asse.devtunnels.ms",
          },
        ],
      },
    ];
  },
} satisfies NextConfig;

export default nextConfig;
