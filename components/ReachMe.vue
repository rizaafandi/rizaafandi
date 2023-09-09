<template>
  <div>
    <a
      href="mailto:rizaaffandi45@gmail.com"
      class="bordered relative z-10 before:absolute before:-z-10 before:top-1.5 before:left-1.5 before:w-full before:h-full light-theme dark-theme"
    >
      Reach Me
    </a>
  </div>
</template>

<style scoped>
.dark-theme {
  @apply dark:bg-gray-950 dark:hover:before:bg-gradient-to-r dark:hover:before:from-purple-600 dark:hover:before:to-yellow-600;
}
.light-theme {
  @apply bg-white hover:before:bg-gradient-to-r hover:before:from-blue-700 hover:before:to-green-400;
}
</style>
