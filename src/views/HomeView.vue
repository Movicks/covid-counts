<script setup>
import MainLayout from '../layouts/MainLayout.vue';
</script>

<template>
  <MainLayout>
    <!-- Please this just a page added -->
    <div class="flex flex-col items-center justify-center w-full h-full pt-[5rem] text-center gap-4">
      <h2 class="text-4xl font-bold">Welcome to Eventfull Moments</h2>
      <p>This is a simple app to help you keep track of your events and moments using post.</p>
      <div class="w-full flex justify-center max-w-[20rem] gap-4">
        <router-link v-if="!isLoggedIn" to="/register" class="border border-[#008289] text-[#008289] Register text-[16px] w-full max-w-[10rem] py-2 rounded-[10px]">Sign Up</router-link>
        <router-link v-if="!isLoggedIn" to="/login" class="Login bg-[#008289] w-full max-w-[10rem] border border-[#008289] py-2 rounded-[10px] text-white text-[16px]">Login</router-link>
        <button
        v-if="isLoggedIn"
        @click="logout"
        class="Login bg-[#008289] w-full max-w-[10rem] border border-[#008289] py-2 rounded-[10px] text-white text-[16px]"
      >
        Log Out
      </button>
      </div>
    </div>
  </MainLayout>
</template>


<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    checkLoginStatus() {
      // Check if user data exists in localStorage
      const user = localStorage.getItem('user');
      // Set isLoggedIn to true if user exists
      this.isLoggedIn = !!user;
    },

    logout() {
      // Remove user data from localStorage
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      this.$router.push('/');
    },
  },
  mounted() {
    // Login status when the component mounts
    this.checkLoginStatus();
  },
};
</script>
