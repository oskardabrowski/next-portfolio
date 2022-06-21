/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["pl"],
		defaultLocale: "pl",
	},
	experimental: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
