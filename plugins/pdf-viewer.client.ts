export default defineNuxtPlugin((nuxt) => {
  const pdfViewer = defineAsyncComponent(() => import("vue-pdf-embed"));
  nuxt.vueApp.component("vue-pdf-embed", pdfViewer);
});
