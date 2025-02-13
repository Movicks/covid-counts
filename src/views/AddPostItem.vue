<template>
  <MainLayout>
    <div class="flex flex-col items-start justify-center w-full h-full py-[2.5rem] md:py-[5rem]">
      <h2 class="text-2xl md:text-4xl font-bold mb-10">Add New Post</h2>
      <form @submit.prevent="handleSubmit" class="w-full max-w-[400px] flex flex-col items-center justify-center">
        <!-- Date Input -->
        <div class="mb-4 w-full">
          <label for="date" class="block text-sm font-medium text-gray-700">Date in the future</label>
          <input
            type="date"
            id="date"
            v-model="form.date"
            ref="dateInput"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5271FF] focus:border-[#5271FF] custom-date-input"
            :class="{ 'border-red-500': errors.date }"
          />
          <p v-if="errors.date" class="text-red-500 text-sm mt-1">{{ errors.date }}</p>
        </div>

        <!-- Title Input -->
        <div class="mb-4 w-full">
          <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            v-model="form.title"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5271FF] focus:border-[#5271FF]"
            :class="{ 'border-red-500': errors.title }"
          />
          <p v-if="errors.title" class="text-red-500 text-sm mt-1">{{ errors.title }}</p>
        </div>

        <!-- Details Input -->
        <div class="mb-4 w-full">
          <label for="details" class="block text-sm font-medium text-gray-700">Details</label>
          <textarea
            id="details"
            v-model="form.details"
            rows="4"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5271FF] focus:border-[#5271FF]"
            :class="{ 'border-red-500': errors.details }"
          ></textarea>
          <p v-if="errors.details" class="text-red-500 text-sm mt-1">{{ errors.details }}</p>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="bg-[#5271FF] text-white px-10 py-2 rounded-[10px] text-[16px] hover:bg-[#4059cc]"
        >
          Save
        </button>
      </form>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import { posts } from '@/datas/postsData'; 

const router = useRouter();
const dateInput = ref<HTMLInputElement | null>(null);

const form = ref({
  title: '',
  date: '',
  details: '',
});

const errors = ref({
  title: '',
  date: '',
  details: '',
});

// Hide the "mm/dd/yyyy" placeholder
onMounted(() => {
  if (dateInput.value) {
    dateInput.value.placeholder = ''; 
  }
});

const validateForm = () => {
  let isValid = true;

  // Reset errors
  errors.value = { title: '', date: '', details: '' };

  // Validate Title
  if (!form.value.title.trim()) {
    errors.value.title = 'Title is required.';
    isValid = false;
  } else if (form.value.title.length < 3) {
    errors.value.title = 'Title must be at least 3 characters.';
    isValid = false;
  }

  // Validate Details
  if (!form.value.details.trim()) {
    errors.value.details = 'Details are required.';
    isValid = false;
  }

  return isValid;
};

const handleSubmit = () => {
  if (!validateForm()) {
    return; 
  }

  // Set the date to the current date if no date is provided
  const selectedDate = form.value.date ? new Date(form.value.date) : new Date();
  const currentDate = new Date();

  // If the selected date is in the future, schedule the post
  if (selectedDate > currentDate) {
    const delay = selectedDate.getTime() - currentDate.getTime();

    setTimeout(() => {
      addPostToPosts();
    }, delay);
  } else {
    // If the date is today or in the past, add the post immediately
    addPostToPosts();
  }

  // Redirect to the home page
  router.push('/posts');
};

const addPostToPosts = () => {
  const newPost = {
    id: posts.length + 1, 
    title: form.value.title,
    content: form.value.details,
    dateCreated: new Date().toLocaleDateString(),
    dateUpdated: new Date().toLocaleDateString(), 
  };

  // Add the new post to the posts array
  posts.push(newPost);

  // Save posts to localStorage
  localStorage.setItem('posts', JSON.stringify(posts));
};
</script>

<style scoped>
/* Hide the default date picker icon */
.custom-date-input::-webkit-calendar-picker-indicator {
  display: none;
}

.custom-date-input {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none; 
}
</style>