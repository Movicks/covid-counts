<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';

// Form Fields
const fullName = ref('');
const email = ref('');
const password = ref('');
const errors = ref<{ fullName?: string; email?: string; password?: string }>({});

// Router instance
const router = useRouter();

// Real-Time Validation
watch([fullName, email, password], () => {
  validateForm();
});

// Validation Function
const validateForm = () => {
  errors.value = {};

  // Fullname Validation
  if (!/^[^\s]+\s+[^\s]+/.test(fullName.value)) {
    errors.value.fullName = 'Full name must contain at least first and last name';
  }

  // Email Validation
  if (!/^[\w.%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/.test(email.value)) {
    errors.value.email = 'Email must be Gmail, Yahoo, or Outlook';
  }

  // Password Validation
  if (!/[A-Z]/.test(password.value)) {
    errors.value.password = 'Password must contain an uppercase letter';
  }
  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?/~`]/.test(password.value)) {
    errors.value.password = 'Password must contain a special character';
  }
  if (password.value.length < 8) {
    errors.value.password = 'Password must be at least 8 characters';
  }

  return Object.keys(errors.value).length === 0;
};

// Submit the form
const onSubmit = () => {
  if (validateForm()) {
    // Note, i was supposed to send the payload to the api but since theres no backend i add to store the data in localStorage
    // Save the user data to localStorage
    localStorage.setItem('user', JSON.stringify({ fullName: fullName.value, email: email.value, password: password.value }));
    alert('Account created successfully!');

    // Redirect to the login page
    router.push({ name: 'login' });
  }
};
</script>

<template>
  <MainLayout>
    <div class="flex items-center justify-center h-full py-10 md:py-20 w-full">
      <form @submit.prevent="onSubmit" class="max-w-[626px] w-full flex flex-col gap-5 items-center">
        <h2 class="text-[40px] font-medium mb-[18px] md:mb-[34px] w-full">Create an account,</h2>
        <div class="flex flex-col gap-4 w-full">
          <!-- Fullname -->
          <div class="flex flex-col gap-2">
            <label class="text-[16px]">Fullname</label>
            <input v-model="fullName" type="text" class="w-full h-[44px] border-2 border-[#707070] rounded-[10px] px-2 outline-none" />
            <span v-if="errors.fullName" class="text-red-500 text-sm">{{ errors.fullName }}</span>
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-2">
            <label class="text-[16px]">Email</label>
            <input v-model="email" type="email" class="w-full h-[44px] border-2 border-[#707070] rounded-[10px] px-2 outline-none" />
            <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
          </div>

          <!-- Password -->
          <div class="flex flex-col gap-2">
            <label class="text-[16px]">Password</label>
            <input v-model="password" type="password" class="w-full h-[44px] border-2 border-[#707070] rounded-[10px] px-2 outline-none" />
            <span v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</span>
          </div>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="bg-[#5271FF] border border-[#707070] max-w-[235px] mt-5 md:mt-10 w-full text-white px-6 h-[44px] rounded-[10px] text-center text-[16px]">
          Create
        </button>
      </form>
    </div>
  </MainLayout>
</template>
