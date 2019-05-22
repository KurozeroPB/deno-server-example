import pkg from "../package.json";
import { get, contentType } from "https://denopkg.com/syumai/dinatra/mod.ts";

export default get("/", () => [200, contentType("json"), JSON.stringify({ app: pkg.name, version: pkg.version })]);
