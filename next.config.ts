import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Disable Turbopack - use webpack
    webpack: (config, { isServer }) => {
      // Return false to use standard webpack
      return isServer ? undefined : config;
    },
  },
};

export default nextConfig;
