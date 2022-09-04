<template>
  <div class="w-full flex justify-center items-center flex-col p-5">
    <div class="w-584px relative">
      <input class="w-full h-12 pl-12 border-2 border-solid border-gray-150 rounded-full outline-none" type="text" />
      <div class="w-3 absolute top-4 left-4">
        <img class="m-1 w-full" :src="googleSearchIcon" alt="">
      </div>
      <div class="w-6 absolute top-3.5 right-4">
        <img class="w-full" :src="googleVoiceSearchIcon" alt="">
      </div>
    </div>
    <div class="p-5 mt-1.5 flex justify-center items-center">
      <google-button buttonText="Google 搜尋" />
      <google-button buttonText="好手氣" />
    </div>
  </div>
</template>
<script setup lang="ts">
import googleSearchIcon from '@/assets/img/google-search.png'
import googleVoiceSearchIcon from '@/assets/img/google-voice-search.png'
import GoogleButton from '@/components/GoogleButton.vue';
</script>
