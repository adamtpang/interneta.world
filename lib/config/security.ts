type SecurityPolicyOptions = {
  development?: boolean;
};

export function buildContentSecurityPolicy({ development = false }: SecurityPolicyOptions = {}) {
  const scriptSources = [
    "'self'",
    "'unsafe-inline'",
    ...(development ? ["'unsafe-eval'"] : []),
    "https://www.googletagmanager.com",
  ];

  return [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    `script-src ${scriptSources.join(" ")}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://www.google-analytics.com",
    "font-src 'self' data:",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
    "worker-src 'self' blob:",
    "manifest-src 'self'",
    "upgrade-insecure-requests",
  ].join("; ");
}

export function buildSecurityHeaders(options: SecurityPolicyOptions = {}) {
  return [
    { key: "Content-Security-Policy", value: buildContentSecurityPolicy(options) },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  ];
}
