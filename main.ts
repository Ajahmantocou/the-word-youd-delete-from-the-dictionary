// The Word You'd Delete From the Dictionary
// make.fun bounty u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2
// Writes a single original word to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY = "queue";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
