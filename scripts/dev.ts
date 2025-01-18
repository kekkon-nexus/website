import { watch } from "node:fs/promises";
import { build, generatePublic } from "./build";

const controller = new AbortController();

Bun.spawn(["bun", "run", "wrangler", "pages", "dev"], {
	stdin: "inherit",
	stdout: "inherit",
	stderr: "inherit",
	onExit: () => {
		controller.abort();
	},
});

try {
	const app = watch("./elysia", { recursive: true, signal: controller.signal });

	for await (const event of app) {
		console.log(event.eventType);

		console.log("Rebuilding...");
		await build();
	}

	const publicDir = watch("./public", {
		recursive: true,
		signal: controller.signal,
	});

	for await (const event of publicDir) {
		console.log(event.eventType);

		console.log("Regenerating public files...");
		await generatePublic();
	}
} catch (e) {
	if (e instanceof Error && e.name === "AbortError") {
	} else {
		throw e;
	}
}
