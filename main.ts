import { app } from "https://denopkg.com/syumai/dinatra/mod.ts";
import { HandlerConfig } from "https://denopkg.com/syumai/dinatra/handler.ts";

const rname = /.+\.route\.(t|j)s$/ui;

async function main(): Promise<void> {
    const routes: HandlerConfig[] = [];

    for await (const file of Deno.readDir("./routes")) {
        if (rname.test(file.name)) {
            const route = await import(`./routes/${file.name}`);
            routes.push(route.default);
            console.log(`Added [${route.path}] to routes`);
        }
    }

    app(...routes);
}

if (import.meta.main) {
    main().catch(console.error);
}