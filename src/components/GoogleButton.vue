<template>
  <div class="px-3.5 py-1 mx-1.5 bg-gray-125 google-search-button">
    <span class="text-sm text-google-button-color">{{ buttonText }}</span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  buttonText: {
    type: String,
    required: true
  }
})
</script>
<style scoped lang="postcss">
.google-search-button {
  @apply cursor-pointer border-2 border-solid border-transparent;
}

.google-search-button:hover {
  @apply cursor-pointer border-2 border-solid border-gray-200;
}
</style>