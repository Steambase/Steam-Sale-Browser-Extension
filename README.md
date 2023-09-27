## Firefox Production Build & Bundle Steps

Run the following in the root directory of this repository. Requirements:

- Any operating system which supports running node
- Node LTS (>= `18.18.0`)
- npm >= `9.5.1`

```bash
npm install
npm run build -- --target=firefox-mv2 --zip
```

Once the extensions has been built and bundled, the artifact .zip file can be
viewed in the `/build` directory.
