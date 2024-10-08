import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children }) => {
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
			</head>
			<body>{children}</body>
		</html>
	);
});
