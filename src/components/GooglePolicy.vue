<template>
  <div
    class="px-32 py-3.5 bg-gray-175 text-sm text-google-footer-color flex justify-around items-center border-t-2 border-gray-200 full-desktop:px-5 full-desktop:justify-between">
    <div>
      <span class="px-3.5 google-footer-items">廣 告</span>
      <span class="px-3.5 google-footer-items">商業</span>
      <span class="px-3.5 google-footer-items">搜尋服務的運作方法</span>
    </div>
    <div>
      <span class="px-3.5 google-footer-items">隱私權</span>
      <span class="px-3.5 google-footer-items">服務條款</span>
      <span class="px-3.5 google-footer-items">設定</span>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="postcss">
.google-footer-items:hover {
  @apply underline cursor-pointer;
}
</style>