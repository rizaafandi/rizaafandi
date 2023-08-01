<template>
  <div>
    <p>Hello👋🏻</p>
    <p class="text-5xl md:text-7xl lg:text-8xl heading-eczar">
      I'm
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 dark:from-purple-600 dark:to-yellow-600"
      >
        {{ props.name }}
      </span>
    </p>
    <hr class="border-slate-500" />
    <p>{{ props.profession }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  name: string;
  profession: string;
}>();
</script>
