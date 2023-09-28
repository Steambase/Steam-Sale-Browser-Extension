## Browser Extension Links

The "Next Steam Sale Tracker" extension can be used in virtually any modern
browser. Use the browser links below to install or compile the extension from
source:

- [Google Chrome](https://chromewebstore.google.com/detail/next-steam-sale-tracker/dgkjcegddpkjhpebjdfilaadhlgphenn)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/next-steam-sale-tracker)
- [Edge (Launching Soon)](#)
- [Opera (Launching Soon)](#)

## Steambase Sale Tracker

The Steambase website has another
[Steam Sale Tracker](https://steambase.io/sales) which can also be used to view
a full breakdown of historical Steam sales as well as list of upcoming sales.

## Firefox Production Build & Bundle Steps

Run the following in the root directory of this repository. Requirements:

- Any operating system which supports running node
- Node LTS >= `18.18.0`
- npm >= `9.5.1`

```bash
npm install
npm run build -- --target=firefox-mv2 --zip
```

Once the extensions has been built and bundled, the artifact .zip file can be
viewed in the `/build` directory.
