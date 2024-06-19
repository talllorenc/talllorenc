/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  reactStrictMode: false,
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
