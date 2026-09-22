/**
 * GitHub Pages serves this project repo from a subpath:
 *   https://takuhii.github.io/ulysses31/
 *
 * So we set basePath/assetPrefix when building for Pages. Local `next dev`
 * runs at the root (no basePath) unless PAGES_BUILD is set, keeping the DX
 * unchanged. The CI workflow sets PAGES_BUILD=true.
 *
 * `output: "export"` emits a fully static `out/` folder. This site uses no
 * server features and no next/image, so static export is lossless here.
 */
const isPagesBuild = process.env.PAGES_BUILD === "true";
const repoBasePath = "/ulysses31";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // Static hosts serve /path as /path/index.html — trailing slash avoids
  // redirect quirks on GitHub Pages.
  trailingSlash: true,
  basePath: isPagesBuild ? repoBasePath : "",
  assetPrefix: isPagesBuild ? repoBasePath : "",
  // Surface the basePath to the client for any runtime URL building.
  env: {
    NEXT_PUBLIC_BASE_PATH: isPagesBuild ? repoBasePath : "",
  },
};

export default nextConfig;
