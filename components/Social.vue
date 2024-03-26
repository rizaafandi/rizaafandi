<template>
  <div class="flex flex-row gap-2 text-2xl">
    <UButton
      v-for="c in props.contact"
      @click="openLink(c.type, c.link)"
      :icon="c.icon"
      variant="ghost"
      color="gray"
      size="xl"
    />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const openLink = (type: string, link: string) => {
  if (type != "cv") {
    window.open(link);
    return;
  }
  // setIsOpen(true);
  router.push("/cv");
  return;
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
</script>
