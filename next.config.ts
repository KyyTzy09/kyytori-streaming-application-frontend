import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "res.cloudinary.com"
      }
    ]
  }
};

export default nextConfig;
