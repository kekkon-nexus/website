import build from "@hono/vite-build/cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import honox, { devServerDefaultOptions } from "honox/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		honox({
			devServer: {
				adapter,
				exclude: [
					...devServerDefaultOptions.exclude,
					/.*\.webmanifest$/,
					/^\/favicon\.svg$/,
				],
			},
		}),
		build(),
	],
});
