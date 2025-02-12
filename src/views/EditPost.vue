<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { posts } from '@/datas/postsData'
import MainLayout from '@/layouts/MainLayout.vue'

const route = useRoute()
const router = useRouter()
const postId = parseInt(route.params.id?.toString() || '0')
const post = ref(posts.find((p) => p.id === postId))

const editedTitle = ref(post.value?.title || '')
const editedContent = ref(post.value?.content || '')

watchEffect(() => {
  post.value = posts.find((p) => p.id === postId)
  if (post.value) {
    editedTitle.value = post.value.title
    editedContent.value = post.value.content
  }
})

// Save changes and update last updated date
const saveChanges = () => {
  if (post.value) {
    post.value.title = editedTitle.value
    post.value.content = editedContent.value
    post.value.dateUpdated = new Date().toLocaleDateString()
    router.push(`/post/${postId}`)
  }
}

// Cancel editing
const cancelEdit = () => {
  // Redirect without saving changes
  router.push(`/post/${postId}`)
}
</script>

<template>
  <MainLayout>
    <div class="p-4 md:p-8 mt-4">
      <h1 class="text-xl md:text-4xl font-bold mb-2">Edit Post</h1>
      <input
        v-model="editedTitle"
        class="w-full text-xl font-bold mb-2 border p-2 rounded-[10px] border-[#707070] outline-0"
      />
      <textarea
        v-model="editedContent"
        class="w-full text-[16px] border border-[#707070] p-2 rounded-[10px] mt-4 h-[20rem] outline-0 resize-none"
      ></textarea>
      <div class="flex gap-4 mt-4">
        <button
          @click="saveChanges"
          class="w-full max-w-[235px] py-2 bg-[#5271FF] rounded-[10px] text-white"
        >
          Save Changes
        </button>
        <button
          @click="cancelEdit"
          class="w-full max-w-[235px] py-2 bg-gray-500 rounded-[10px] text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  </MainLayout>
</template>
