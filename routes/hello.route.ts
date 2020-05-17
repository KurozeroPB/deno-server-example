import { get, contentType } from "https://denopkg.com/syumai/dinatra/mod.ts";

export const path = "/hello";
export default get(path, () => [200, contentType("json"), JSON.stringify({ message: "Welcome to my deno api!" })]);
