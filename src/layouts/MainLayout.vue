<script setup lang="ts">
import AppFooter from '../components/footer/Footer.vue'
import AppNavbar from '../components/navbar/Navbar.vue'
</script>

<template>
  <AppNavbar />
  <div class="flex flex-col w-full min-h-screen pt-[4rem] md:pt-[6rem] items-center justify-center">
    <main class="flex-1 h-full w-full px-4 md:px-[101px]"><slot></slot></main>
  </div>
  <AppFooter />
</template>
