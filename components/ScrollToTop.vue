<template>
  <div
    class="lg:w-[40%] w-[90%] fixed bottom-10 hidden justify-end transition-opacity"
    ref="scrollToTop"
    @click="scrollTop"
  >
    <UButton icon="i-mdi-arrow-up" variant="ghost" color="gray" size="lg" />
  </div>
</template>
<script setup lang="ts">
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
