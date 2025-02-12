<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { posts } from '@/datas/postsData'
import MainLayout from '@/layouts/MainLayout.vue';

const route = useRoute();
const router = useRouter();
const postId = parseInt(route.params.id?.toString() || '0');
const post = ref(posts.find((p) => p.id === postId));

watchEffect(() => {
  post.value = posts.find((p) => p.id === postId);
});

// Delete function
const handleDelete = () => {
  const index = posts.findIndex((p) => p.id === postId);
  if (index !== -1) {
    posts.splice(index, 1);
    router.push('/landing');
  }
};

// Navigate to edit page
const navigateToEdit = () => {
  router.push(`/edit/${postId}`);
};
</script>

<template>
  <MainLayout>
    <div class="p-4 md:p-8">
      <template v-if="post">
        <h1 class="text-2xl md:text-4xl font-bold mb-1">{{ post.title }}</h1>
        <div class="text-[#5271FF]">
          <p>{{ post.dateUpdated }}</p>
        </div>
        <div class="my-8">
          <p class="text-[16px]">{{ post.content }}</p>
        </div>
        <div class="flex gap-4 text-center text-[16px] text-white">
          <button @click="navigateToEdit" class="w-full max-w-[235px] py-2 bg-[#06C3B4] rounded-[10px]">
            Edit
          </button>
          <button @click="handleDelete" class="w-full max-w-[235px] py-2 bg-[#C34F06] rounded-[10px]">
            Delete
          </button>
        </div>
      </template>
      <p v-else class="text-red-500 text-center">Post not found.</p>
    </div>
  </MainLayout>
</template>
