# extract-http-folder-links 📽️

A simple command-line tool to extract direct file links from an HTTP folder link and generate a text file and an M3U8 playlist.

## Why ?

I often use Real-Debrid to download torrents, and it provides an HTTP folder link containing all the files. Manually extracting these links can be tedious, so I created this tool to automate the process.

## Installation and Usage

### Install the package globally using npm:

```
npm i -g extract-http-folder-links
```

Then run the command with the HTTP folder link as an argument:

```
extfl "https://my.real-debrid.com/xxxxxxxx/torrents/zzzzzzzzzzz/"
```

### Or run directly using npx:

```
npx extract-http-folder-links "https://my.real-debrid.com/xxxxxxxx/torrents/zzzzzzzzzzz/"
pnpx extract-http-folder-links "https://my.real-debrid.com/xxxxxxxx/torrents/zzzzzzzzzzz/"
bunx extract-http-folder-links "https://my.real-debrid.com/xxxxxxxx/torrents/zzzzzzzzzzz/"
```

### Output

The tool will generate two files in the current directory:

- A text file (e.g., `zzzzzzzzzzz.txt`) containing the direct file links.
- An M3U8 playlist file (e.g., `zzzzzzzzzzz.m3u8`) for easy playback in media players that support M3U8 playlists.

## Requirements

- Node.js / Bun
- npm or pnpm or bun

## License

MIT License
