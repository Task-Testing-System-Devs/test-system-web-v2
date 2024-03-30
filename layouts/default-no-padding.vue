<template>
  <div class="flex h-full">
    <div class="flex-1">
      <Drawer> </Drawer>
    </div>
    <div class="flex-[3_3_0%] h-screen bg-[#F6F6F9] overflow-y-auto">
      <slot />
    </div>
  </div>
</template>
