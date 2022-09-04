<template>
  <div class="flex grow"></div>
  <div class="flex shrink-0 flex-col">
    <google-language />
    <google-policy />
  </div>
</template>
<script setup lang="ts">
import GoogleLanguage from '@/components/GoogleLanguage.vue';
import GooglePolicy from '@/components/GooglePolicy.vue';
</script>