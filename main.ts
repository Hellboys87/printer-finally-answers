import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I've printed 40,000 pages without a single thank-you. Jam once and you thump me like I'm the one who can't read the manual.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
