import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  //output: 'export',
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  
};

export default nextConfig;
