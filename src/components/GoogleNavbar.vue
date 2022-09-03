<template>
  <div class="px-3.5 py-3 flex justify-between items-center">
    <div class="flex">
      <div class="navbar-left-items navbar-items-hover">關於 Google</div>
      <div class="navbar-left-items navbar-items-hover">Google 商店</div>
    </div>
    <div class="flex justify-center items-center">
      <div class="navbar-right-items navbar-items-hover">Gmail</div>
      <div class="navbar-right-items navbar-items-hover">圖片</div>
      <div class="w-10 p-3 ml-3.5 mr-2 navbar-icons-hover">
        <img class="w-full" :src="googleSelectionsIcon" alt="">
      </div>
      <div class="w-10 p-1 navbar-icons-hover">
        <img class="w-full" :src="googleUserIcon" alt="">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import googleSelectionsIcon from '@/assets/img/google-selections.svg'
import googleUserIcon from '@/assets/img/google-user-icon.png'
</script>
<style scoped lang="postcss">
.navbar-left-items {
  @apply p-2.5 text-sm inline-block;
}

.navbar-right-items {
  @apply p-2 text-13px inline-block;
}

.navbar-items-hover:hover {
  @apply underline cursor-pointer;
}
.navbar-icons-hover:hover {
  @apply hover:bg-gray-150 rounded-full cursor-pointer;
}
</style>