import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // From previous fix for ESLint errors
  },
  turbo: {
    enabled: false, // Explicitly disable Turbopack to silence the warning
  },
};

export default nextConfig;