/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  productionBrowserSourceMaps: process.env.ENVIRONMENT === "development",
  pageExtensions: ['page.ts', 'page.tsx'],
  env: {
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    PAGE_PROPS_REVALIDATE: process.env.PAGE_PROPS_REVALIDATE,
  },
  experimental: {
    appDir: true
  },
  rewrites: () => {
    return [
      {
        source: '/',
        destination: '/home'
      },
    ];
  }
};
module.exports = nextConfig
