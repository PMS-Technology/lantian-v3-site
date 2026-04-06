import { defineConfig } from "@opennextjs/cloudflare";

export default defineConfig({
  // 使用 cloudflare 模式，避免 standalone 输出问题
  appBuildOutputMode: "cloudflare",
});