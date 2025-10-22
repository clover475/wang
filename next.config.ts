import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://8.129.19.173/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
