<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-gray-50 lg:px-[23%]"
    id="default-layout"
  >
    <Scrollbar />

    <ThemeSwitch />

    <slot />

    <ScrollToTop />
  </div>
</template>
