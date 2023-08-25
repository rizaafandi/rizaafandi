// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
  ],
  css: ["~/assets/css/global.css"],
  colorMode: {
    classSuffix: "",
  },
  googleFonts: {
    families: {
      Roboto: true,
      Inter: true,
    },
    display: "swap",
    subsets: "latin",
    text: "I'm Riza Afandi",
    prefetch: true,
    preconnect: true,
    preload: true,
    useStylesheet: true,
  },
});
