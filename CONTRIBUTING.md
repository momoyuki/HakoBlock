# Contributing

Two ways to suggest a domain: open an issue, or send a PR directly.

## Option 1: Open an issue (no coding required)

Use the [Request to add a domain](../../issues/new?template=add-domain.yml) template. Fill in the domain, category, and a reason. A maintainer will review and add it.

## Option 2: Send a PR

1. Fork the repo.
2. Add the domain (one per line, no protocol/path) to the matching file under `sources/domains/`:
   - `thai-ads.txt` — Thai ad-serving domains
   - `gambling.txt` — gambling / betting / slot sites
   - `tracker.txt` — analytics/tracking domains
3. For native uBlock rules (element hiding `##`, exceptions `@@`, path/wildcard rules), edit `sources/ublock-rules.txt` directly using [Adblock filter syntax](https://github.com/gorhill/uBlock/wiki/Static-filter-syntax).
4. Run `npm install && npm run build` locally and confirm `dist/hakoblock.txt` builds without errors.
5. Open a PR. On merge, CI rebuilds and commits the final `dist/hakoblock.txt` automatically — you don't need to commit `dist/` yourself.

## Guidelines

- One domain per line, lowercase, no `www.` unless the bare domain doesn't serve the same content.
- Include a reason (issue body or PR description) — a site where the domain appears, or what it serves.
- Don't submit domains you haven't verified are ads/gambling/trackers — false positives break sites for everyone subscribed.
