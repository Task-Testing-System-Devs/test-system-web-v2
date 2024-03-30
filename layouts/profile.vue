<template>
  <div class="flex h-full">
    <div class="flex-1">
      <Drawer> </Drawer>
    </div>

    <div class="flex-[3_3_0%] h-screen px-8 py-12 fancy-bg overflow-y-auto">
      <slot />
    </div>
  </div>
</template>

<style>
  .fancy-bg {
    background: rgb(235, 243, 255);
    background: linear-gradient(
      rgba(235, 243, 255, 1) 0%,
      rgba(235, 243, 255, 1) 33%,
      rgba(246, 246, 249, 1) 33%,
      rgba(246, 246, 249, 1) 100%
    );
  }
</style>
