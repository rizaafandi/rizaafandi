<template>
  <div class="flex flex-col gap-5">
    <Highlight>
      <h1 class="text-3xl lg:text-4xl font-bold">Educations</h1>
      <hr class="my-5 lg:hidden" />
    </Highlight>
    <div
      v-for="data in props.data"
      class="flex lg:flex-col md:flex-col flex-col lg:gap-5 mb-10 lg:mb-0 lg:hover:dark:bg-gray-900 lg:hover:bg-gray-100 cursor-pointer lg:hover:transition-all lg:rounded-md lg:border-0 lg:-m-3 lg:p-3"
    >
      <p
        class="capitalize whitespace-nowrap min-w-[20%] text-gray dark:text-gray-400"
      >
        {{ data.year }}
      </p>
      <div class="flex flex-col">
        <p
          class="highlight font-bold flex xl:flex-row lg:flex-col md:flex-col flex-col gap-1 text-xl"
        >
          <Highlight>{{ data.education }} •</Highlight>
          <Highlight
            class="flex flex-row items-center gap-1 hover:underline whitespace-nowrap"
            @click="openLink(data.link)"
          >
            {{ data.place }} <UIcon name="i-mdi-arrow-top-right" />
          </Highlight>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type tagType = {
  name: string;
  link: string;
};
export type propType = {
  year: string;
  education: string;
  place: string;
  link: string;
};
const props = defineProps<{
  data: propType[] | null;
}>();

const openLink = (str: string) => {
  window.open(str, "__blank");
};
</script>
