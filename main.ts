import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I've printed 40,000 pages, zero thank-yous. One jam and you thump me like I'm the one who can't read the manual.";

if (!line.trim() || line.length > 240) {
  throw new Error(`entry line must be 1–240 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
