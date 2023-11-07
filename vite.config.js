import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig((options) => {
  return {
    root: process.cwd(),
    // 静态资源在开发或生产环境服务的公共基础路径，如 .html 中引入打包静态 JS 文件，通常建议使用相对路径
    base: "./",
    plugins: [react()],

    build: {
      target: "es2015",
      outDir: "dist",
      // 生产构建作为库使用
      lib: {
        // 库不能使用 HTML 作为入口，需要指定入口 JS 文件
        entry: path.resolve(__dirname, "src/index.js"),
        formats: ["cjs"],
        // 是输出的包文件名
        fileName: "index",
      },
    },
    server: {
      port: 5000,
    },
  };
});
