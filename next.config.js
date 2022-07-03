/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		styledComponents: true,
	},
	images: {
		loader: "akamai",
		path: "",
	},
};

module.exports = nextConfig;
