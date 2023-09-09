<template>
  <div class="my-40 flex flex-col gap-10">
    <div class="prosed">
      <Highlight><h1 class="dark:text-gray-200">Experiences</h1></Highlight>
    </div>
    <div
      v-for="data in props.experiences"
      class="flex lg:flex-row flex-col lg:gap-10 mb-10 lg:mb-0 lg:hover:dark:bg-gray-900 lg:hover:bg-gray-100 cursor-pointer lg:hover:transition-all lg:rounded-md lg:border-0 lg:p-5"
    >
      <small
        class="capitalize prosed whitespace-nowrap min-w-[20%] prose prose-a"
      >
        {{ data.year }}
      </small>
      <div class="flex flex-col">
        <p
          class="prosed prose-lg highlight font-bold flex lg:flex-row flex-col gap-1"
        >
          <Highlight>{{ data.job }} •</Highlight>
          <Highlight
            class="flex flex-row items-center gap-1 hover:underline whitespace-nowrap"
            @click="openLink(data.link)"
          >
            {{ data.company }} <UIcon name="i-mdi-arrow-top-right" />
          </Highlight>
        </p>
        <p class="prosed mt-5 lg:mt-0">
          {{ data.description }}
        </p>
        <div class="flex flex-row mt-5 flex-wrap gap-2">
          <UBadge
            v-for="tag in data.tags"
            :label="tag.name"
            class="px-3 py-1 hover:underline"
            variant="soft"
            color="blue"
            @click="openLink(tag.link)"
          />
        </div>
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
  job: string;
  company: string;
  description: string;
  tags: tagType[];
  link: string;
};
const props = defineProps<{
  experiences: propType[] | null;
}>();

const openLink = (str: string) => {
  window.open(str, "__blank");
};
</script>
