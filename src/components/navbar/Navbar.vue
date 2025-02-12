<template>
  <header
    class="flex fixed top-0 left-0 items-center w-full p-4 md:px-[101px] md:h-[93px] bg-[#008289] z-50"
  >
    <div class="wrapper flex justify-between items-center w-full">
      <h1 class="italic font-bold font-sans text-white text-[20px]">Eventful Moments.</h1>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-[20px] text-white text-[16px]">
        <router-link v-if="!isLoggedIn" to="/login" class="pointer">Login</router-link>
        <router-link v-if="!isLoggedIn" to="/register" class="pointer">Register</router-link>
        <button v-if="isLoggedIn" @click="logout" class="text-white hover:text-gray-300 pointer">
          Logout
        </button>
        <button v-if="isLoggedIn" class="pointer">My Bucket</button>
      </nav>

      <!-- Mobile Menu Icon -->
      <button @click="toggleMenu" class="md:hidden text-white text-2xl">
        <span v-if="!menuOpen"><i class="fas fa-bars"></i></span>
        <span v-else class="text-white"><i class="fas fa-times"></i></span>
      </button>
    </div>
  </header>

  <!-- Mobile Menu -->
  <div
    v-if="menuOpen"
    class="fixed top-0 left-0 w-[80%] h-screen bg-[#008289] flex flex-col items-center justify-between pt-[4rem] text-white text-[18px] gap-6 md:hidden transition-transform transform translate-x-0"
  >
    <div class="flex flex-col gap-4 w-full px-4 pt-5">
      <router-link @click="toggleMenu" to="/">Home</router-link>
      <router-link @click="toggleMenu" to="/landing" v-if="isLoggedIn">Landing</router-link>
      <router-link @click="toggleMenu" to="/about">About</router-link>
      <button v-if="isLoggedIn" class="text-start">My Bucket</button>
    </div>

    <!-- Mobile Navigation -->
    <div class="flex flex-col gap-2 w-full px-4 pb-4">
      <router-link
        v-if="!isLoggedIn"
        @click="toggleMenu"
        to="/login"
        class="bg-white text-[#008289] hover:bg-gray-400 rounded-md px-6 py-2 text-center shadow-2xl"
      >
        Login
      </router-link>
      <router-link
        v-if="!isLoggedIn"
        @click="toggleMenu"
        to="/register"
        class="bg-white text-[#008289] hover:bg-gray-400 rounded-md px-6 py-2 text-center"
      >
        Register
      </router-link>
      <button
        v-if="isLoggedIn"
        @click="logout"
        class="bg-white text-[#008289] hover:bg-gray-400 rounded-md px-6 py-2 text-center"
      >
        Logout
      </button>
      <!-- <button v-if="isLoggedIn">My Profile</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      menuOpen: false,
      isLoggedIn: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
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
      this.$router.push('/login');
    },
  },
  mounted() {
    // Login status when the component mounts
    this.checkLoginStatus();
  },
};
</script>

<style>
.router-link {
  transition: color 0.5s;
}
</style>
