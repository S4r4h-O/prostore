import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              process.env.NODE_ENV === "development"
                ? "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.paypal.com https://*.paypalobjects.com https://js.stripe.com https://m.stripe.network https://hcaptcha.com https://*.hcaptcha.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://*.stripe.com; font-src 'self'; connect-src 'self' https://api.stripe.com https://m.stripe.network https://hcaptcha.com https://*.hcaptcha.com; frame-src 'self' https://js.stripe.com https://hooks.stripe.com https://m.stripe.network https://hcaptcha.com https://*.hcaptcha.com; worker-src 'self' blob:; media-src 'self' data:;"
                : "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.paypal.com https://*.paypalobjects.com https://js.stripe.com https://m.stripe.network https://hcaptcha.com https://*.hcaptcha.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://*.stripe.com; font-src 'self'; connect-src 'self' https://api.stripe.com https://m.stripe.network https://hcaptcha.com https://*.hcaptcha.com; frame-src 'self' https://js.stripe.com https://hooks.stripe.com https://m.stripe.network https://hcaptcha.com https://*.hcaptcha.com; worker-src 'self' blob:; media-src 'self' data:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
