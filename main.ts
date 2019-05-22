import { app } from "https://denopkg.com/syumai/dinatra/mod.ts";

// import routes manually since dynamic imports isn't supported
// would be nice to have dynamic imports
import index from "./routes/index.ts";
import hello from "./routes/hello.ts";

async function main(): Promise<void> {
    let routes = [
        index,
        hello
    ];

    const dir = await Deno.readDir("./routes");
    for (const file of dir) {
        if (file.name.endsWith(".ts")) {
            console.log(file.name);

            // dynamic imports doesn't seem to be supported
            // const temp = await import(`./routes/${file.name}`);
            // routes.push(temp.default);
        }
    }

    app(...routes);
}

main().catch(console.error);
