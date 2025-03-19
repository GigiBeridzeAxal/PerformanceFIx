/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      { protocol: "https", hostname: "blogger.googleusercontent.com" },
      { protocol: "https", hostname: "admin.avexim.com" },
      { protocol: "https", hostname: "api.avexim.com" },
      { protocol: "https", hostname: "as.com" },
      { protocol: "https", hostname: "puramas.avexim.com" },
      { protocol: "https", hostname: "www.images.puramas.co" },
    ],
  },
  experimental: {
    turbo: false,
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
    ];
  },
};

export default nextConfig;
