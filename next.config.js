/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  
  // Add these video optimization settings:
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [],
    qualities: [75, 90, 95, 100], // Add quality levels to fix the warning
  },
  async headers() {
    return [
      {
        source: "/heroPreview.mp4",
        headers: [
          {
            key: "Cache-Control",
            value: "public, immutable, max-age=31536000", // Cache for 1 year
          },
        ],
      },
      // Also cache the optimized version if you create it
      {
        source: "/heroPreview-optimized.mp4",
        headers: [
          {
            key: "Cache-Control",
            value: "public, immutable, max-age=31536000",
          },
        ],
      },
    ];
  },
  compress: true,
};

module.exports = nextConfig;
