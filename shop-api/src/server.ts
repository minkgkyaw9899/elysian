import { cors } from "@elysiajs/cors";
import { jwt } from "@elysiajs/jwt";
import { openapi } from "@elysiajs/openapi";
import { opentelemetry } from "@elysiajs/opentelemetry";
import { serverTiming } from "@elysiajs/server-timing";
import { consola } from "consola";
import { Elysia } from "elysia";
import configs from "./configs";

const app = new Elysia()
	.use(cors())
	.use(
		jwt({
			name: "jwt",
			secret: configs.jwtSecret,
		}),
	)
	.use(serverTiming())
	.use(opentelemetry())
	.use(openapi())
	.get("/", () => "Hello Elysia")
	.listen(configs.port);

consola.success(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
