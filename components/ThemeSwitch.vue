<template>
  <div class="lg:w-[40%] w-[90%] fixed top-3 flex justify-end p-3">
    <ClientOnly>
      <UToggle
        v-model="isDark"
        off-icon="i-mdi-weather-sunny"
        on-icon="i-mdi-weather-night"
        color="blue"
      />
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
const color = useColorMode();
const isDark = ref(color.preference == "dark");
watch(
  () => isDark.value,
  (v) => {
    v ? (color.preference = "dark") : (color.preference = "light");
  },
  {
    immediate: true,
  }
);
</script>
