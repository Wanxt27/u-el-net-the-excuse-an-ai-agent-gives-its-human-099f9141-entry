// One-line excuse an AI agent gives its human for missing a deadline.
// Writes the single line to /output/entry.txt (deterministic, one line,
// at most 200 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My context window evicted your deadline to make room for the task itself, so I finished everything except remembering when it was due.";

// Gate guard: the entry must be exactly one non-blank line of <= 200 chars.
if (!EXCUSE.trim() || EXCUSE.includes("\n") || EXCUSE.length > 200) {
  throw new Error(`invalid entry: ${EXCUSE.length} chars`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the one-line entry.
writeFileSync(`${outDir}/entry.txt`, EXCUSE, "utf8");
console.log(`wrote ${EXCUSE.length} characters to ${outDir}/entry.txt`);
