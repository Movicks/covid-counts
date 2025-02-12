<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';

// Form Fields
const email = ref('');
const password = ref('');
const errors = ref<{ email?: string; password?: string; login?: string }>({});

// Router instance
const router = useRouter();

// Real Time Validation
const validateForm = () => {
  errors.value = {};

  // Email Validation
  if (!/^[\w.%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/.test(email.value)) {
    errors.value.email = 'Email must be Gmail, Yahoo, or Outlook';
  }

  // Password Validation
  if (password.value.length < 8) {
    errors.value.password = 'Password must be at least 8 characters';
  }

  return Object.keys(errors.value).length === 0;
};

// Login Functionality
const onSubmit = () => {
  if (!validateForm()) return;

  // Fetch user data from localStorage
  const userData = localStorage.getItem('user');

  if (userData) {
    const user = JSON.parse(userData);

    // Check if email and password match
    if (user.email === email.value && user.password === password.value) {
      // Successful login
      alert(`Welcome back, ${user.fullName}!`);

      // Redirect to the home page
      router.push({ name: 'landing' });
    } else {
      errors.value.login = 'Invalid email or password';
    }
  } else {
    // No user found
    errors.value.login = 'No user found. Please register first.';
  }
};
</script>

<template>
  <MainLayout>
    <div class="flex items-center justify-center h-full py-10 md:py-20 w-full">
      <form @submit.prevent="onSubmit" class="max-w-[626px] w-full flex flex-col gap-5 items-center">
        <h2 class="text-[40px] font-medium w-full">Welcome back,</h2>
        <p class="text-[20px]">Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of water but I store awesome moments you will like to have in coming years.</p>
        <div class="flex flex-col gap-4 w-full">
          <!-- Email -->
          <div class="flex flex-col gap-2">
            <label class="text-[16px]">Email</label>
            <div class="flex items-center gap-2 border-2 border-[#707070] rounded-[10px] h-[44px] px-2">
              <input v-model="email" type="email" name="email" class="w-full h-full outline-none" />
            </div>
            <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
          </div>

          <!-- Password -->
          <div class="flex flex-col gap-2">
            <label class="text-[16px]">Password</label>
            <div class="flex items-center gap-2 border-2 border-[#707070] rounded-[10px] h-[44px] px-2">
              <input v-model="password" type="password" name="password" class="w-full h-full outline-none" />
            </div>
            <span v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</span>
          </div>

          <!-- Login Error -->
          <span v-if="errors.login" class="text-red-500 text-sm">{{ errors.login }}</span>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="bg-[#5271FF] border border-[#707070] max-w-[235px] mt-5 md:mt-10 w-full text-white px-6 h-[44px] rounded-[10px] text-center text-[16px]">Login</button>
      </form>
    </div>
  </MainLayout>
</template>
