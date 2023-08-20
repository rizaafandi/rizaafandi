<template>
  <div class="flex flex-row gap-2 text-2xl">
    <div
      @click="openLink('github')"
      class="cursor-pointer p-2 hover:bg-slate-300 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-slate-200 rounded-full"
    >
      <Icon icon="mdi:github" />
    </div>
    <div
      @click="openLink('linkedIn')"
      class="cursor-pointer p-2 hover:bg-slate-300 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-slate-200 rounded-full"
    >
      <Icon icon="mdi:linkedin" />
    </div>
    <div
      @click="downloadResume"
      class="cursor-pointer p-2 hover:bg-slate-300 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-slate-200 rounded-full"
    >
      <Icon icon="mdi:file-pdf-box" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

type linkType = {
  [propKey: string]: string;
};

const links: linkType = {
  github: "https://github.com/rizastoday/",
  mail: "mailto:rizaaffandi45@gmail.com",
  linkedIn: "https://linkedin.com/in/rizaafandi",
  medium: "https://rizaafandi.medium.com",
};

const openLink = (type: string) => {
  window.open(links[type]);
};

const downloadResume = () => {
  window.open("/assets/pdf/resume.pdf");
};
</script>
