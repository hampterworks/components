/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  basePath: '/components',
  transpilePackages: ["@repo/ui"],
  compiler: {
    styledComponents: true,
  },
};
