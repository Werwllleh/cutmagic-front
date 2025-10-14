import withPayload from "@payloadcms/next/withPayload";
// import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    reactCompiler: false,
    turbopack: {
      resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
    },
  },
};

// export default nextConfig;

export default withPayload(nextConfig);
