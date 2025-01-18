import app from "./server";

export default {
	fetch: (request: Request, env: Env, ctx: ExecutionContext) =>
		app.decorate({ env, ctx }).handle(request),
};
