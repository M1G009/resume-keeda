/** @type {import('next').NextConfig} */
import { config as dotenvconfig} from "dotenv"
dotenvconfig()

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["3.110.147.80"]
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  }
};

export default nextConfig;
