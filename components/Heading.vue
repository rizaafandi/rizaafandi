<template>
  <div>
    <p>Hello👋🏻</p>
    <p class="text-5xl md:text-7xl lg:text-8xl heading">
      I'm
      <span
        class="dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-600 dark:to-yellow-600"
      >
        {{ props.name }}
      </span>
    </p>
    <p>{{ props.profession }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  name: string;
  profession: string;
}>();
</script>
