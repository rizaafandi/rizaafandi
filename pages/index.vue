<template>
  <div
    class="flex flex-col lg:gap-24 gap-10 min-h-screen snap-y lg:px-10 px-5 shadow-sm lg:py-24 py-10 bg-white"
  >
    <!-- header -->
    <div
      class="snap-center flex flex-col lg:justify-between justify-center gap-10 lg:gap-4 lg:min-h-0 min-h-screen"
    >
      <Heading
        greeting="Hello👋🏻"
        text="Self-taught, dedicated Software Engineer"
        title="Riza Afandi"
      />
      <Summary />
      <div class="flex flex-row gap-4 items-center relative">
        <ReachMe />
        <Social
          v-if="!contactPending"
          :contact="(contact as unknown as contactType[])"
        />
      </div>
    </div>

    <!-- experience -->
    <Experience
      :data="(experience as unknown as experienceType[])"
      v-if="!expPending"
    />

    <!-- education -->
    <Education
      class="mt-10 lg:mt-0"
      :data="(education as unknown as educationType[])"
      v-if="!eduPending"
    />

    <div class="flex flex-row justify-center items-center gap-1 mt-20">
      <span class="capitalize text-center">
        &copy;{{ new Date().getFullYear() }} - made with
      </span>
      <UIcon name="i-mdi-heart" class="text-red-500 text-xl" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { type propType as contactType } from "~/components/Social.vue";
import { type propType as experienceType } from "~/components/Experience.vue";
import { type propType as educationType } from "~/components/Education.vue";
const { data: contact, pending: contactPending } = await useAsyncData(
  "contact",
  () => queryContent("/contacts").find()
);
const { data: experience, pending: expPending } = await useAsyncData(
  "experience",
  () => queryContent("/experiences").find()
);
const { data: education, pending: eduPending } = await useAsyncData(
  "education",
  () => queryContent("/educations").find()
);
</script>
