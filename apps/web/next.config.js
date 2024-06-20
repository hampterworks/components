/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  basePath: '/showcase',
  transpilePackages: ["@repo/ui"],
  compiler: {
    styledComponents: true,
  },
};
