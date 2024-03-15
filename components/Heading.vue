<template>
  <div class="gap-3 flex flex-col">
    <p class="dark:!text-gray-300" v-if="props.greeting">
      {{ props.greeting }}
    </p>
    <h1
      class="text-5xl md:text-5xl lg:text-6xl heading whitespace-nowrap dark:text-gray-200 text-gray-950"
      v-if="props.title"
    >
      I'm
      <span class="dark-theme">{{ props.title }}</span>
    </h1>
    <p class="text-xl text-gray dark:text-gray-400" v-if="props.text">
      {{ props.text }}
    </p>
  </div>
</template>

<style scoped>
.dark-theme {
  @apply dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-600 dark:to-yellow-600;
}

.light-theme {
  @apply text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-400;
}
</style>

<script setup lang="ts">
const props = defineProps<{
  greeting?: string;
  title?: string;
  text?: string;
}>();
</script>
