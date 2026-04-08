import fs from "fs";
import path from "path";

const src = path.resolve("lib/clean.js");
const dest = path.resolve("web/clean.js");

fs.copyFileSync(src, dest);

console.log("clean.js copied to web/");
