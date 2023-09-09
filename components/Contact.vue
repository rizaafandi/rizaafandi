<template>
  <div class="flex flex-row gap-2 text-2xl">
    <UButton
      v-for="c in props.contact"
      @click="openLink(c.type, c.link)"
      :icon="c.icon"
      variant="ghost"
      color="gray"
      size="lg"
    />
  </div>
  <Teleport to="body">
    <UModal
      v-model="isModalOpen"
      prevent-close
      :ui="{
        width: 'w-full',
      }"
    >
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Resume
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isModalOpen = false"
            />
          </div>
        </template>
        <ClientOnly>
          <vue-pdf-embed
            :source="(props.contact?.find((x) => x.type == 'cv')?.link as string)"
          />
        </ClientOnly>
      </UCard>
    </UModal>
  </Teleport>
</template>

<script setup lang="ts">
const isModalOpen = ref(false);
const openLink = (type: string, link: string) => {
  if (type != "cv") {
    window.open(link);
    return;
  }
  setIsOpen(true);
  return;
};
const setIsOpen = (value: boolean) => {
  isModalOpen.value = value;
};
export interface propType {
  type: string;
  link: string;
  icon: string;
  name: string;
}

const props = defineProps<{
  contact: propType[] | null;
}>();

defineShortcuts({
  escape: {
    usingInput: true,
    whenever: [isModalOpen],
    handler: () => {
      isModalOpen.value = false;
    },
  },
});
</script>
