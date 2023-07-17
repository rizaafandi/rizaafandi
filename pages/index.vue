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
  <div
    class="w-5/6 md:w-4/5 lg:w-3/5 text-left text-xl lg:text-2xl flex flex-col gap-16"
  >
    <div>
      <p>Hello👋🏻</p>
      <p class="text-5xl md:text-7xl lg:text-8xl heading-eczar">
        I'm
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r font-bold dark:font-normal from-blue-700 to-green-400 dark:from-purple-600 dark:to-yellow-600 selection:bg-yellow-200 selection:text-white dark:selection:bg-white dark:selection:text-yellow-600"
        >
          Riza Afandi
        </span>
      </p>
      <hr class="border-slate-500" />
      <p>I'm a Fullstack Web Developer</p>
    </div>
    <div class="flex flex-col gap-8">
      <p>
        I'm a Self-taught, dedicated Web Developer with 3+ years of experience
        with a proven track record in creating web applications. Have built and
        maintained some projects and delivered as production products
      </p>

      <Links />
    </div>
  </div>
</template>
