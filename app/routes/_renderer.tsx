import { jsxRenderer } from "hono/jsx-renderer";
import type { Manifest } from "vite";

export default jsxRenderer(({ children }, c) => {
	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<title>Kekkon Nexus</title>

				<link rel="icon" href="/favicon.svg" />
				<link rel="manifest" href="/app.webmanifest" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Noto+Sans+Javanese:wght@400..700&family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&display=swap"
					rel="stylesheet"
				/>

				<link rel="stylesheet" href="/style.css" />
				<Script
					src="/app/client.ts"
					nonce={c.get("secureHeadersNonce")}
				/>
			</head>
			<body hx-boost="true" hx-ext="preload">
				{children}
			</body>
		</html>
	);
});

// Copied from honox and remove HasIsland
// This makes the script to be included at all times for HTMX to work
const Script = (options: {
	src: string;
	async?: boolean;
	prod?: boolean;
	manifest?: Manifest;
	nonce?: string;
}) => {
	const src = options.src;
	if (options.prod ?? import.meta.env.PROD) {
		let manifest = options.manifest;
		if (!manifest) {
			const MANIFEST = import.meta.glob("/dist/.vite/manifest.json", {
				eager: true,
			}) as Record<string, { default: Manifest }>;
			for (const [, manifestFile] of Object.entries(MANIFEST)) {
				if (manifestFile.default) {
					manifest = manifestFile.default;
					break;
				}
			}
		}
		if (manifest) {
			const scriptInManifest = manifest[src.replace(/^\//, "")];
			if (scriptInManifest) {
				return (
					<script
						type="module"
						src={`/${scriptInManifest.file}`}
						async={!!options.async}
						nonce={options.nonce}
					/>
				);
			}
		}
		return <></>;
	}
	return (
		<script
			type="module"
			src={src}
			async={!!options.async}
			nonce={options.nonce}
		/>
	);
};
