<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center"
    id="default-layout"
  >
    <Scrollbar />

    <ThemeSwitch />

    <slot />

    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-300 ",
  },
});
</script>
