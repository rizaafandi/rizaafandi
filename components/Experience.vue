<template>
  <div class="my-40 flex flex-col gap-10">
    <div
      v-for="data in props.experiences"
      class="flex lg:flex-row flex-col lg:gap-10 lg:hover:dark:bg-slate-900 lg:hover:bg-slate-100 cursor-pointer lg:hover:transition-all rounded-md lg:p-5"
    >
      <p class="capitalize prosed whitespace-nowrap min-w-[20%]">
        {{ data.year }}
      </p>
      <div class="flex flex-col">
        <p class="prosed prose-lg highlight font-bold flex flex-row gap-1">
          {{ data.job }} •
          <span
            class="flex flex-row items-center gap-1 hover:underline"
            @click="openLink(data.link)"
          >
            {{ data.company }} <Icon icon="mdi:arrow-top-right" />
          </span>
        </p>
        <p class="prosed mt-5 lg:mt-0">
          {{ data.description }}
        </p>
        <div class="flex flex-row mt-5 flex-wrap gap-2">
          <span
            v-for="tag in data.tags"
            class="px-3 py-1 rounded-full bg-blue-100 text-blue-400 dark:bg-blue-500 dark:bg-opacity-30 dark:text-blue-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
type propType = {
  year: string;
  job: string;
  company: string;
  description: string;
  tags: string[];
  link: string;
};
const props = defineProps<{
  experiences: propType[] | null;
}>();

const openLink = (str: string) => {
  window.open(str, "__blank");
};
</script>
