<template>
  <div
    class="w-full min-h-screen flex flex-col justify-center items-center bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-300 lg:px-56 px-10"
  >
    <Scrollbar />

    <ThemeSwitch />

    <slot />

    <Links class="fixed lg:bottom-3 bottom-0" />
  </div>
</template>
