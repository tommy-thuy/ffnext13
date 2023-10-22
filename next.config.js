/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["image.tmdb.org",'localhost', 'avatars.githubusercontent.com'],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/movie',
  //       permanent: true
  //     }
  //   ];
  // }
}

module.exports = nextConfig

