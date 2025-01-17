import { Elysia } from "elysia";
import type { Context } from "elysia";

interface CF extends Context {
	env: Env;
	ctx: ExecutionContext;
}

const app = new Elysia({ aot: false }).get("/", (c: CF) => {
	console.log(c.ctx.waitUntil);
	return "Hello Elysia on Workers";
});

export default {
	fetch: (request: Request, env: Env, ctx: ExecutionContext) =>
		app.decorate({ env, ctx }).handle(request),
};
