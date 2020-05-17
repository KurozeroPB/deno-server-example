import { get, contentType } from "https://denopkg.com/syumai/dinatra/mod.ts";
import { readJsonSync } from "https://deno.land/std/fs/mod.ts";
import { join } from "https://deno.land/std/path/mod.ts";
import { __ } from "https://deno.land/x/dirname/mod.ts";

const { __dirname } = __(import.meta);
const pkg = readJsonSync(join(__dirname, "..", "package.json")) as any;

export const path = "/";
export default get(path, () => [200, contentType("json"), JSON.stringify({ app: pkg.name, version: pkg.version })]);
