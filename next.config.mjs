/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["res.cloudinary.com"] },
  env: {
    NEXT_PUBLIC_API_URL:
      "https://ecommerce-admin-two-rosy.vercel.app/api/019961d8-eb16-45c8-aa36-5b3070002fa1",
  },
};

export default nextConfig;
