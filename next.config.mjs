/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["res.cloudinary.com"] },
  env: {
    NEXT_PUBLIC_API_URL:
      "http://localhost:3000/api/4c8fbf39-cfea-433e-968d-a03f2fe8c364",
  },
};

export default nextConfig;
