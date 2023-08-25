<template>
  <div
    class="flex flex-col lg:flex-row lg:gap-24 gap-10 lg:px-56 px-10 min-h-screen snap-y"
  >
    <div
      class="snap-center lg:w-1/2 w-full flex flex-col lg:justify-between justify-center gap-36 lg:sticky lg:top-1 lg:py-24 py-20 lg:max-h-screen min-h-screen"
    >
      <Heading />
      <div class="flex flex-row gap-4 items-center relative">
        <ReachMe />
        <Links v-if="!contactPending" :contact="contact" />
      </div>
    </div>
    <div class="lg:w-1/2 w-full flex flex-col lg:py-24">
      <Summary class="py-10 lg:px-5 snap-center" />
      <Experience
        :experiences="experience"
        v-if="!expPending"
        class="snap-center"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "Riza Afandi",
  meta: [
    {
      name: "description",
      content: "My Personal Website",
    },
    {
      name: "author",
      content: "Riza Afandi",
    },
  ],
});

const { data: contact, pending: contactPending } = useFetch("/api/contact");
const { data: experience, pending: expPending } = useFetch("/api/experience");
</script>
