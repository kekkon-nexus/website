import { Elysia } from "elysia";
import type { Context } from "elysia";

interface CF extends Context {
	env: Env;
	ctx: ExecutionContext;
}

export const app = new Elysia({ aot: false }).get("/", (c: CF) => {
	console.log(c.ctx.waitUntil);
	return "Hello Elysia on Workers";
});

export default app;
