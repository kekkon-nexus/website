import build from "@hono/vite-build/cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import inject from "@rollup/plugin-inject";
import tailwindcss from "@tailwindcss/vite";
import honox, { devServerDefaultOptions } from "honox/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		honox({
			client: {
				input: ["/app/style.css"],
			},
			devServer: {
				adapter,
				exclude: [
					...devServerDefaultOptions.exclude,
					/.*\.webmanifest$/,
					/^\/favicon\.svg$/,
				],
			},
		}),
		inject({
			htmx: "htmx.org",
		}),
		tailwindcss(),
		build(),
	],
});
