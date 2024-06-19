/** @type {import('next').NextConfig} */
const nextConfig = {
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  