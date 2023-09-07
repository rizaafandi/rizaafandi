<template>
  <div
    class="flex flex-col lg:gap-24 gap-10 min-h-screen snap-y lg:w-[40%] w-[90%]"
  >
    <div
      class="snap-center flex flex-col lg:justify-between justify-center gap-4 py-20 lg:min-h-0 min-h-screen"
    >
      <Heading />
      <div class="flex flex-row gap-4 items-center relative">
        <ReachMe />
        <Contact
          v-if="!contactPending"
          :contact="(contact as unknown as contactType[])"
        />
      </div>
    </div>
    <div class="flex flex-col">
      <Summary class="py-10 snap-center" />
      <Experience
        :experiences="(experience as unknown as experienceType[])"
        v-if="!expPending"
        class="snap-center"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { type propType as contactType } from "~/components/Contact.vue";
import { type propType as experienceType } from "~/components/Experience.vue";
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
const { data: contact, pending: contactPending } = await useAsyncData(
  "contact",
  () => queryContent("/contacts").find()
);
const { data: experience, pending: expPending } = await useAsyncData(
  "experience",
  () => queryContent("/experiences").find()
);
</script>
