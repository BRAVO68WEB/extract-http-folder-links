import fs from 'fs';
import { argv } from 'process';

const httpFolderLink = argv[2];
if (!httpFolderLink) {
  console.error('Please provide the HTTP folder link as a command line argument.');
  process.exit(1);
}

if (!httpFolderLink.endsWith('/')) {
  console.error('The HTTP folder link should end with a slash (/).');
  process.exit(1);
}

// extract last part of the link to use as output file name
const outFileName = httpFolderLink.split('/').filter(Boolean).pop();
if (!outFileName) {
  console.error('Could not extract a valid name from the provided link.');
  process.exit(1);
}

// Extract the files from HTTP Folder
const extractData = async () => {
  const response = await fetch(httpFolderLink);
  const text = await response.text();

  // they are stored like this <a href="The.100.S05E13.1080p.Bluray.x265-HiQVE.mkv">
  const regex = /<a href="([^"]+)"/g;
  const files: string[] = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    files.push(match[1]!);
  }
  return files;
};

const data = await extractData();

// delete the first element
data.shift();

// return them with the original httpFolderLink as a base
const result = data.map(file => httpFolderLink + file);

// store to a text file
fs.writeFileSync(`${outFileName}.txt`, result.join('\n'));


// also generate a m3u8 playlist file
const m3u8Content = ['#EXTM3U', ...result].join('\n');
fs.writeFileSync(`${outFileName}.m3u8`, m3u8Content);
