import withPayload from "@payloadcms/next/withPayload";
// import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    reactCompiler: false,
  },
};

// export default nextConfig;

export default withPayload(nextConfig);
