<template>
  <NuxtLayout>
    <div class="flex flex-col">
      <ClientOnly>
        <div class="flex justify-center">
          <iframe
            :src="(data?.link as string)+'#toolbar=0'"
            class="w-2/4 h-screen"
          >
            <a :href="(data?.link as string)+'#toolbar=0'">Download the PDF</a>
          </iframe>
        </div>
      </ClientOnly>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("contact", () =>
  queryContent("/contacts").where({ type: "cv" }).findOne()
);
definePageMeta({
  layout: false,
});
</script>
