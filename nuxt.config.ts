// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-vercel-analytics", "@nuxt/content", "@nuxt/ui"],
  plugins: [
    {
      src: "./plugins/pdf-viewer.client.ts",
      mode: "client",
    },
  ],
  ssr: true,
  css: ["~/assets/css/global.css"],
  colorMode: {
    // classSuffix: "",
    // preference: "system", // default value of $colorMode.preference
    // fallback: "light", // fallback value if not system preference found
    // hid: "nuxt-color-mode-script",
    // globalName: "__NUXT_COLOR_MODE__",
    // componentName: "ColorScheme",
    classPrefix: "",
    // storageKey: "nuxt-color-mode",
  },
  vercelAnalytics: {
    mode: "auto",
    debug: true,
    beforeSend: (event: any) => {
      if (event.url.includes("/private")) return null;

      return event;
    },
  },
  ui: {
    // primary: "blue",
    default: "blue",
    gray: "cool",
    icons: ["mdi", "heroicons"],
  },
});
