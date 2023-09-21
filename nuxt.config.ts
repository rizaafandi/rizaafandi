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
  css: ["~/assets/css/global.css"],
  colorMode: {
    classSuffix: "",
  },
  vercelAnalytics: {
    mode: "auto",
    debug: true,
    beforeSend: (event) => {
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
