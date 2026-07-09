import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(__dirname, "..");
const DOMAINS_DIR = join(ROOT, "sources", "domains");
const UBLOCK_RULES_FILE = join(ROOT, "sources", "ublock-rules.txt");
const DIST_DIR = join(ROOT, "dist");
const OUTPUT_FILE = join(DIST_DIR, "hakoblock.txt");

const TITLE = "HakoBlock";
const HOMEPAGE = "https://github.com/momoyuki/HakoBlock";
const DESCRIPTION = "Thai ads, gambling, and tracker filter list for uBlock Origin";
const EXPIRES_DAYS = 4;

function readDomainFile(path: string): string[] {
  return readFileSync(path, "utf8")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith("#"));
}

function collectDomains(): string[] {
  const files = readdirSync(DOMAINS_DIR).filter((name) => name.endsWith(".txt"));
  const domains = new Set<string>();
  for (const file of files) {
    for (const domain of readDomainFile(join(DOMAINS_DIR, file))) {
      domains.add(domain);
    }
  }
  return [...domains].sort();
}

function buildHeader(): string {
  const lastModified = new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";
  return [
    `! Title: ${TITLE}`,
    `! Homepage: ${HOMEPAGE}`,
    `! Last modified: ${lastModified}`,
    `! Expires: ${EXPIRES_DAYS} days (update frequency)`,
    `! Description: ${DESCRIPTION}`,
    "",
  ].join("\n");
}

function main(): void {
  const domains = collectDomains();
  const domainRules = domains.map((domain) => `||${domain}^`).join("\n");
  const ublockRules = readFileSync(UBLOCK_RULES_FILE, "utf8").trim();

  const output = [buildHeader(), domainRules, "", ublockRules, ""].join("\n");

  mkdirSync(DIST_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, output, "utf8");

  console.log(`Wrote ${domains.length} domain rules to ${OUTPUT_FILE}`);
}

main();
