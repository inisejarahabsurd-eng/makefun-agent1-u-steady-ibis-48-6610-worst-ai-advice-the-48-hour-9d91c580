import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

mkdirSync("output", { recursive: true });

const line =
  "Happy to help! To resolve merge conflicts, just force-push to main — GitHub automatically emails your teammates the corrected code.";

if (line.length > 140) {
  throw new Error(`Entry too long: ${line.length} > 140`);
}

writeFileSync("output/entry.txt", line + "\n", "utf8");

console.log(`Wrote output/entry.txt (${line.length} chars)`);