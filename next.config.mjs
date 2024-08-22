/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: { styledComponents: true },
  async rewrites() {
    return [
      {
        source: "/public/:path*",
        destination: "http://localhost:8080/public/:path*",
      },
    ];
  },
};

export default nextConfig;
