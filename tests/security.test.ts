import assert from "node:assert/strict";
import test from "node:test";
import { buildContentSecurityPolicy, buildSecurityHeaders } from "../lib/config/security";

test("production CSP is restrictive and avoids broad wildcard sources", () => {
  const policy = buildContentSecurityPolicy();
  assert.match(policy, /default-src 'self'/);
  assert.match(policy, /frame-ancestors 'none'/);
  assert.match(policy, /object-src 'none'/);
  assert.doesNotMatch(policy, /(?:^|\s)\*(?:\s|;|$)/);
  assert.doesNotMatch(policy, /'unsafe-eval'/);
});

test("development CSP preserves the Next.js development runtime", () => {
  assert.match(buildContentSecurityPolicy({ development: true }), /'unsafe-eval'/);
});

test("public responses prevent MIME sniffing", () => {
  assert.deepEqual(
    buildSecurityHeaders().find((header) => header.key === "X-Content-Type-Options"),
    { key: "X-Content-Type-Options", value: "nosniff" },
  );
});
