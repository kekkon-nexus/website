import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";

export default jsxRenderer(({ children }, c) => {
	// Workaround to always include client script
	// See honojs/honox#241
	c.set("__importing_islands", true);

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

				<Link href="/app/style.css" rel="stylesheet" />
				<Script src="/app/client.ts" nonce={c.get("secureHeadersNonce")} />
			</head>
			<body
				hx-boost="true"
				hx-ext="preload"
				class="w-full min-h-screen scheme-dark font-sans text-white text-stroke-2 text-stroke-gray-mix flex items-center justify-center image-pixelated bg-pattern bg-repeat"
			>
				{children}
			</body>
		</html>
	);
});
