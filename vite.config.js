// vite.config.js
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import { defineConfig } from "vite";
import { readdirSync, statSync } from "fs";
import { execSync } from "node:child_process";

const pages = readdirSync(__dirname)
  .filter((file) => statSync(file).isDirectory())
  .filter((dir) => /^\d{2}-\d{2}-.*/.test(dir));

const input = pages.reduce((acc, page) => {
  acc[page] = resolve(__dirname, page, "index.html");
  return acc;
}, {});

process.env.VITE_PAGES = JSON.stringify(pages);

const [hash, message, date] = execSync('git log -1 --format="%h%n%s%n%at"')
  .toString()
  .trim()
  .split("\n");
process.env.VITE_GIT_COMMIT_HASH = hash;
process.env.VITE_GIT_COMMIT_MESSAGE = message;
process.env.VITE_GIT_COMMIT_DATE = date;
process.env.VITE_GIT_COMMIT_URL = `https://github.com/xuchunyang/learn-web-2024/commit/${hash}`;

process.env.VITE_GIT_COMMIT_LOG = execSync("git log -1 --stat")
  .toString()
  .trim();

process.env.VITE_GIT_TOTAL_COMMITS = execSync("git rev-list HEAD --count")
  .toString()
  .trim();

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ...input,
      },
    },
  },
});
