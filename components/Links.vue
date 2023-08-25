<template>
  <div class="flex flex-row gap-2 text-2xl">
    <div
      v-for="c in props.contact"
      :key="c.type"
      @click="openLink(c.link)"
      class="cursor-pointer p-2 hover:bg-slate-300 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-slate-200 rounded-full flex flex-row gap-3"
    >
      <Icon :icon="c.icon" />
      <!-- <span class="prosed"> {{ c.name }} </span> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const openLink = (link: string) => {
  window.open(link);
};

interface contactType {
  type: string;
  link: string;
  icon: string;
  name: string;
}

const props = defineProps<{
  contact: contactType[] | null;
}>();
</script>
