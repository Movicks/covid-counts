<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';

</script>

<template>
  <MainLayout>
    <!-- Please this just a test page -->
    <h2 class="text-center">Welcome to the About Page</h2>
  </MainLayout>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
