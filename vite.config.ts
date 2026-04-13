import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Use dynamic import for ESM-only package
export default defineConfig(async () => {
  const { cloudflare } = await import("@cloudflare/vite-plugin");
  
  return defineConfig({
    plugins: [
      react(),
      cloudflare(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./"),
        "~": path.resolve(__dirname, "./app"),
      },
    },
    ssr: {
      resolve: {
        externalConditions: ["workerd", "worker"],
      },
    },
    build: {
      rollupOptions: {
        input: path.resolve(__dirname, "index.html"),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // Split React and React DOM into a separate chunk
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
                return 'react-vendor';
              }
              // Split UI libraries
              if (id.includes('framer-motion') || id.includes('lucide-react')) {
                return 'ui-vendor';
              }
              // Split Radix UI components
              if (id.includes('@radix-ui')) {
                return 'radix-vendor';
              }
            }
          },
        },
      },
      // Enable minification and tree-shaking
      minify: 'esbuild',
      cssMinify: true,
    },
    // Optimize dependency pre-bundling
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
      // Force pre-bundling for better dev performance
      force: false,
    },
  });
});
