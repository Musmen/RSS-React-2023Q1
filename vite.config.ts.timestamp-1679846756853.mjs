// vite.config.ts
import { defineConfig } from "file:///D:/HTML%20%D0%B8%20CSS/RS%20School/RSS-React-2023Q1/node_modules/vite/dist/node/index.js";
import react from "file:///D:/HTML%20%D0%B8%20CSS/RS%20School/RSS-React-2023Q1/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    coverage: {
      exclude: [
        "vite.config.ts",
        "src/vite-env.d.ts",
        "src/index.tsx",
        "**/*.test.tsx",
        "**/*.test.ts",
        "dist",
        "src/models"
      ],
      provider: "c8",
      all: true,
      skipFull: false,
      reporter: ["text"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxIVE1MIFx1MDQzOCBDU1NcXFxcUlMgU2Nob29sXFxcXFJTUy1SZWFjdC0yMDIzUTFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEhUTUwgXHUwNDM4IENTU1xcXFxSUyBTY2hvb2xcXFxcUlNTLVJlYWN0LTIwMjNRMVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovSFRNTCUyMCVEMCVCOCUyMENTUy9SUyUyMFNjaG9vbC9SU1MtUmVhY3QtMjAyM1ExL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIHNldHVwRmlsZXM6ICcuL3NldHVwVGVzdHMudHMnLFxuICAgIGNvdmVyYWdlOiB7XG4gICAgICBleGNsdWRlOiBbXG4gICAgICAgICd2aXRlLmNvbmZpZy50cycsICdzcmMvdml0ZS1lbnYuZC50cycsICdzcmMvaW5kZXgudHN4JywgJyoqLyoudGVzdC50c3gnLCAnKiovKi50ZXN0LnRzJywgJ2Rpc3QnLCAnc3JjL21vZGVscydcbiAgICAgIF0sXG4gICAgICBwcm92aWRlcjogJ2M4JyxcbiAgICAgIGFsbDogdHJ1ZSxcbiAgICAgIHNraXBGdWxsOiBmYWxzZSxcbiAgICAgIHJlcG9ydGVyOiBbJ3RleHQnXSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZULFNBQVMsb0JBQW9CO0FBQzFWLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLElBQ1osVUFBVTtBQUFBLE1BQ1IsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUFrQjtBQUFBLFFBQXFCO0FBQUEsUUFBaUI7QUFBQSxRQUFpQjtBQUFBLFFBQWdCO0FBQUEsUUFBUTtBQUFBLE1BQ25HO0FBQUEsTUFDQSxVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixVQUFVLENBQUMsTUFBTTtBQUFBLElBQ25CO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
