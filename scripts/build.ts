import { cp, exists, rm, writeFile } from "node:fs/promises";

export const clean = () => rm("./dist", { recursive: true });

export const build = () =>
	Bun.build({
		entrypoints: ["./elysia/_worker.ts"],
		outdir: "./dist",
		target: "bun",
		splitting: true,
		sourcemap: "external",
	});

export const generatePublic = async () => {
	const predefined = [
		"/style.css",
		"/favicon.ico",
		"/favicon.svg",
		"/app.webmanifest",
	];

	const predefinedExisted = predefined.filter(
		async (filename) => await exists(`./public${filename}`),
	);

	await writeFile(
		"./dist/_routes.json",
		JSON.stringify(
			{
				version: 1,
				include: ["/*"],
				exclude: [...predefinedExisted, "/static/*"],
			},
			null,
			"\t",
		),
	);

	for (const filename of predefinedExisted) {
		await cp(`./public${filename}`, `./dist${filename}`);
	}

	await cp("./public/static", "./dist/static", { recursive: true });
};

await clean().then(async () => {
	await build();
	await generatePublic();
});
