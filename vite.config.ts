import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig, loadEnv } from "vite";

import VueDevTools from "vite-plugin-vue-devtools";

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  let plugins = [
    vue({ script: { defineModel: true, propsDestructure: true } }),
    VueDevTools(),
    AutoImport({
      dts: "src/shared/types/auto-imports.d.ts",
      imports: [
        "vue",
        "pinia",
        "vitest",
        "vue-router",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        },
      ],
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      dirs: [],
      dts: "src/shared/types/components.d.ts",
      resolvers: [NaiveUiResolver()],
    }),
  ];

  return {
    plugins,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
