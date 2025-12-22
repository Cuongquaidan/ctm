import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { builtinModules } from "module";

import path from "path";

// Tạo danh sách node_modules cần external để không bundle
import fs from "fs";
const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
const externalDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
    ...builtinModules,
];

export default defineConfig({
    plugins: [tsconfigPaths()],
    publicDir: false,
    build: {
        target: "esnext", // Node hiện đại
        outDir: "dist",
        sourcemap: false,
        minify: "esbuild",
        lib: {
            entry: path.resolve(__dirname, "apps/index.ts"),
            formats: ["es"], // ESM
        },
        rollupOptions: {
            external: externalDeps,
            output: {
                entryFileNames: "index.js",
            },
        },
    },
});
