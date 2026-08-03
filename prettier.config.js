import baseConfig from "@all1ndev/prettier-config" with { type: "json" };

export default {
	...baseConfig,
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
