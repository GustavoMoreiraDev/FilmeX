/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["swiperjs.com","image.tmdb.org"],
  },
};

module.exports = nextConfig;
