<template>
  <div
    class="lg:px-56 px-10 w-full fixed bottom-10 hidden justify-end transition-opacity"
    ref="scrollToTop"
    @click="scrollTop"
  >
    <div
      class="cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-slate-200 rounded-full p-3 active:border-outsite"
    >
      <Icon icon="mdi:arrow-up" class="text-3xl" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
const scrollToTop = ref();
const userScroll = () => {
  if (window.scrollY > 0) {
    scrollToTop.value.classList.add("!flex");
  } else {
    scrollToTop.value.classList.remove("!flex");
  }
};
const scrollTop = () => {
  window.scrollTo({ top: 0 });
};
onMounted(() => {
  window.addEventListener("scroll", userScroll);
});
onBeforeMount(() => {
  window.removeEventListener("scroll", userScroll);
});
</script>
