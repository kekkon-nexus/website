import type {} from "typed-htmx";

declare module "hono/jsx" {
	namespace JSX {
		interface HTMLAttributes extends HtmxAttributes {}
	}
}
