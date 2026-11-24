// Say What Actually Broke — one line of honest error copy.
// The program writes the error message to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "We lost your data. Not all of it — just the part you needed. The rest is untouched, backed up twice, and frankly thriving.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
