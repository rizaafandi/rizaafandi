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
</script>

<template>
  <div class="w-full text-left text-xl gap-24 flex flex-col">
    <div class="gap-3 flex flex-col">
      <p>Hello👋🏻</p>
      <p class="text-5xl md:text-7xl lg:text-8xl heading whitespace-nowrap">
        I'm
        <span
          class="dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-600 dark:to-yellow-600 whitespace-nowrap"
        >
          Riza Afandi
        </span>
      </p>
      <p class="lg:pr-[20%]">
        <b>I'm a Self-taught, dedicated Full-stack Developer</b> with a proven
        track record in creating web applications. Passionate about learning and
        collaborating, let's connect!.
      </p>
    </div>
    <div class="flex flex-row gap-4 items-center relative">
      <div>
        <a
          href="mailto:rizaaffandi45@gmail.com"
          class="bordered relative z-10 bg-white dark:bg-slate-950 before:absolute before:-z-10 before:top-1 before:left-1 before:w-full before:h-full dark:hover:before:bg-gradient-to-r dark:hover:before:from-purple-600 dark:hover:before:to-yellow-600"
          >Reach Me</a
        >
      </div>
      <Links />
    </div>
  </div>
</template>
