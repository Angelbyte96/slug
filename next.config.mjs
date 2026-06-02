await import("./src/env.mjs");

// Next.js config:
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx"],
};

export default nextConfig;
