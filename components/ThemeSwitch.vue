<template>
  <div class="lg:w-[50%] w-[90%] fixed top-3 flex justify-end p-3">
    <ClientOnly>
      <UToggle
        v-model="setDark"
        off-icon="i-mdi-weather-sunny"
        on-icon="i-mdi-weather-night"
        color="blue"
        size="lg"
      />
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import { usePreferredDark } from "@vueuse/core";

const color = useColorMode();
const isDark = usePreferredDark();

// check by system dark mode
watch(
  () => isDark.value,
  (v) => {
    // will follow the system dark theme changing and set current color set
    v ? (color.preference = "dark") : (color.preference = "light");
  }
);

const setDark = computed({
  get() {
    // return current color set
    return color.preference == "dark";
  },
  set(v: boolean) {
    // set to be different with system
    color.preference = v == isDark.value ? "light" : "dark";
    isDark.value = v;
  },
});
</script>
