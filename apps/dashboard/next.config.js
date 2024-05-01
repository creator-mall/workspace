/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    serverComponentsExternalPackages: [
      "@node-rs/argon2",
      "@node-rs/jsonwebtoken",
    ],
  },
};
