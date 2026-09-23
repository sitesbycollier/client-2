const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");
const assetsDir = path.join(__dirname, "..", "dist", "assets");
const indexHtmlPath = path.join(distDir, "index.html");
const fallbackHtmlPath = path.join(distDir, "404.html");

const legacyJsFiles = [
  "index-NcJra73t.js",
  "index-C9LirMQN.js",
  "index-BDOgtCeS.js",
  "index-DqX3iVDH.js",
  "index-DrqRgNiI.js",
];

const legacyCssFiles = [
  "index-BXXio4p8.css",
  "index-DO7YvYWK.css",
  "index-ClD3yTEf.css",
];

function newestAsset(match) {
  const files = fs
    .readdirSync(assetsDir)
    .filter((file) => match.test(file))
    .map((file) => {
      const filePath = path.join(assetsDir, file);
      return { file, filePath, mtimeMs: fs.statSync(filePath).mtimeMs };
    })
    .sort((a, b) => b.mtimeMs - a.mtimeMs);

  return files[0];
}

function copyAliases(source, aliases) {
  if (!source) {
    return;
  }

  for (const alias of aliases) {
    if (alias === source.file) {
      continue;
    }

    fs.copyFileSync(source.filePath, path.join(assetsDir, alias));
  }
}

if (fs.existsSync(assetsDir)) {
  copyAliases(newestAsset(/^index-[A-Za-z0-9_-]+\.js$/), legacyJsFiles);
  copyAliases(newestAsset(/^index-[A-Za-z0-9_-]+\.css$/), legacyCssFiles);
}

if (fs.existsSync(indexHtmlPath)) {
  fs.copyFileSync(indexHtmlPath, fallbackHtmlPath);
}
