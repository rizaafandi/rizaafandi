<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center"
    id="default-layout"
  >
    <Scrollbar />

    <ThemeSwitch />

    <slot />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-300 ",
  },
});
</script>
