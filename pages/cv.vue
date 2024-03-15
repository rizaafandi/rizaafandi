<template>
  <div
    class="flex flex-col lg:gap-24 gap-10 min-h-screen snap-y lg:w-[50%] w-[90%] lg:py-24"
  >
    <div class="mt-20 relative">
      <ClientOnly>
        <vue-pdf-embed
          :source="(data?.link as string)"
          class="absolute w-full -z-10"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("contact", () =>
  queryContent("/contacts").where({ type: "cv" }).findOne()
);
</script>
