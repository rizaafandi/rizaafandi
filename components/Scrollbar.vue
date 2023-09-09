<template>
  <div class="w-full h-1 dark:bg-slate-300 bg-slate-900 fixed top-0 z-[10000]">
    <div
      ref="scrollBarRef"
      class="w-0 h-1 bg-gradient-to-r font-bold dark:font-normal from-blue-700 to-green-400 dark:from-purple-600 dark:to-yellow-600"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const scrollBarRef = ref();
const scrollFn = () => {
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (scrollTop / height) * 100;

  scrollBarRef.value.style.width = scrolled + "%";
};

onMounted(() => {
  window.onscroll = () => {
    scrollFn();
  };
});
</script>
