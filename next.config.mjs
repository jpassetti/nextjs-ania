/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: "https",
    hostname: "cdn.sanity.io",
    pathname: "/**", // Allows all paths from cdn.sanity.io
   },
   {
    protocol: "https",
    hostname: "via.placeholder.com",
    pathname: "/**", // Allows all paths from via.placeholder.com
   },
   {
    protocol: "https",
    hostname: "blindedflight.com",
    pathname: "/**", // Allows all paths from blindedflight.com
   },
  ],
 },
};

export default nextConfig;
