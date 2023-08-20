<template>
  <div class="lg:px-56 px-10 w-full fixed top-3 flex justify-end">
    <div
      @click="colorSwitch"
      class="cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-slate-200 rounded-full p-3 active:border-outsite"
    >
      <Icon :icon="colorIcon" class="text-3xl" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
const color = useColorMode();
const colorList = ["dark", "light", "system"];
const colorIndex = ref(0);
const colorSwitch = () => {
  color.preference = colorList[colorIndex.value];
  if (colorIndex.value < colorList.length) {
    colorIndex.value += 1;
    return;
  }
  colorIndex.value = 0;
  colorSwitch();
};
const colorIcon = computed(() => {
  return color.preference == "system"
    ? "mdi:monitor"
    : color.preference == "dark"
    ? "mdi:weather-night"
    : color.preference == "light"
    ? "mdi:weather-sunny"
    : color.preference == "sepia"
    ? "mdi:coffee"
    : "mdi:monitor";
});
</script>
