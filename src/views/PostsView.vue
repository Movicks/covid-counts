<script setup lang="ts">
import { ref, onMounted } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';
import PostsCards from '@/components/card/PostsCards.vue';
import { useRouter } from 'vue-router';
import { posts } from '@/datas/postsData';

interface User {
  fullName?: string;
  email?: string;
  password?: string;
}

const user = ref<User>({});
const visiblePosts = ref(4);
const router = useRouter();

// Fetch user details from localStorage when the component mounts
onMounted(() => {
  const userData = localStorage.getItem('user');
  if (userData) {
    user.value = JSON.parse(userData);
  }
});

// View full post Details
const handleViewDetails = (postId: number) => {
  router.push({ path: `/post/${postId}` });
};

// Load More
const handleLoadMore = () => {
  visiblePosts.value = posts.length;
};
</script>

<template>
  <MainLayout>
    <!-- Landing Page Content -->
    <div class="flex flex-col items-start justify-center w-full h-full py-[2.5rem] md:py-[5rem] text-center">
      <div class="flex flex-col md:flex-row items-start md:justify-between w-full gap-2 md:gap-10">
        <div class="flex flex-col items-start justify-start text-start">
          <h2 v-if="user.fullName" class="text-2xl md:text-4xl font-bold mb-1">Welcome {{ user.fullName }},</h2>
          <h2 v-else class="text-4xl font-bold">Welcome Guest,</h2>
          <p class="text-[16px]">Here are items in your eventful moment bucket.</p>
        </div>
        <router-link to="/add-post" 
          class="bg-[#5271FF] border border-[#707070] max-w-[235px] mt-5 py-2 md:mt-10 w-full text-white px-6 h-[44px] rounded-[10px] text-center text-[16px]"
          >
          Add item
        </router-link>
      </div>
      <div class="flex flex-col items-center justify-center gap-4 w-full mt-10 md:mt-20">
        <PostsCards>
          <!-- Card contents -->
          <div v-for="post in posts.slice(0, visiblePosts)" :key="post.id"
          class="flex flex-col justify-between p-4 md:p-9 gap-4 w-full shadow-lg bg-white rounded-[10px] HoverEffect cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#FFF5A7]"
          >
            <h2 class="text-[16px] font-bold">{{ post.title }}</h2>
            <div>
              <p class="text-[16px]">
                {{
                  post.content.length > 180
                    ? post.content.slice(0, post.content.lastIndexOf(" ", 180)) + " ......"
                    : post.content
                }}
              </p>
            </div>
            <div class="flex gap-2 items-center justify-between">
              <button @click="handleViewDetails(post.id)" class="text-[#5271FF] text-[16px]">View Details</button>
              <p class="flex items-center gap-4 text-[16px]">
                <span class="text-[#b2b2b2]">{{ post.dateCreated }}</span>
                <span>{{ post.dateUpdated }}</span>
              </p>
            </div>
          </div>
        </PostsCards>
        <button @click="handleLoadMore" class="bg-[#5271FF] border border-[#707070] max-w-[235px] mt-5 md:mt-10 w-full text-white px-6 h-[44px] rounded-[10px] text-center text-[16px]">
          {{ visiblePosts < posts.length ? 'Load More' : 'All Posts Loaded' }}
        </button>
      </div>
    </div>
  </MainLayout>
</template>
