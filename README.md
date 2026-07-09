# HakoBlock

Custom filter list for [uBlock Origin](https://github.com/gorhill/uBlock) — Thai ad networks, gambling/betting sites, and trackers.

## Subscribe

In uBlock Origin: **Dashboard → Filter lists → Import** and paste:

```
https://raw.githubusercontent.com/momoyuki/HakoBlock/main/dist/hakoblock.txt
```

## Contributing a domain

Add the domain (one per line) to the relevant file under `sources/domains/`:

- `thai-ads.txt` — Thai ad-serving domains
- `gambling.txt` — gambling / betting / slot sites
- `tracker.txt` — analytics/tracking domains

For native uBlock rules (element hiding, exceptions, path-level rules), edit `sources/ublock-rules.txt` directly using [Adblock filter syntax](https://help.eyeo.com/adblockplus/how-to-write-filters).

Push to `main` and the list rebuilds automatically via GitHub Actions.

## Local build

```
npm install
npm run build
```

Output: `dist/hakoblock.txt`.
