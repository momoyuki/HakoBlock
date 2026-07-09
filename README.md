# HakoBlock

Custom filter list for [uBlock Origin](https://github.com/gorhill/uBlock) — Thai ad networks, gambling/betting sites, and trackers.

## Subscribe

In uBlock Origin: **Dashboard → Filter lists → Import** and paste:

```
https://raw.githubusercontent.com/momoyuki/HakoBlock/main/dist/hakoblock.txt
```

## Contributing a domain

See [CONTRIBUTING.md](CONTRIBUTING.md) — open an [issue](../../issues/new?template=add-domain.yml) if you're not comfortable with git, or send a PR directly.

Push to `main` and the list rebuilds automatically via GitHub Actions.

## Local build

```
npm install
npm run build
```

Output: `dist/hakoblock.txt`.
