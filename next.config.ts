const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              process.env.NODE_ENV === "development"
                ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.paypal.com https://*.paypalobjects.com"
                : "script-src 'self' 'unsafe-inline' https://www.paypal.com https://*.paypalobjects.com",
          },
        ],
      },
    ];
  },
};
