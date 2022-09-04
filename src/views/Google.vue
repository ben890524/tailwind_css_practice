<template>
  <div class="p-0 m-0 w-full h-screen flex flex-col">
    <google-navbar />
    <google-brand />
    <google-search-block />
    <google-footer />
  </div>
</template>

<script setup lang="ts">
import GoogleNavbar from '@/components/GoogleNavbar.vue';
import GoogleBrand from '@/components/GoogleBrand.vue';
import GoogleSearchBlock from '@/components/GoogleSearchBlock.vue';
import GoogleFooter from '../components/GoogleFooter.vue';
</script>
<style scoped lang="postcss">
</style>