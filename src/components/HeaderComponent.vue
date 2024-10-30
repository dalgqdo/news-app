<template>
    <header class="bg-red-950 text-white py-3 px-10">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <h1 class="text-2xl font-semibold">SATU NEWS</h1>
        </div>
  
        <nav class="hidden md:flex space-x-6">
          <router-link to="/" class="hover:text-orange-400 font-semibold">HOME</router-link>
          <router-link to="/read-history" class="hover:text-orange-400 font-semibold">HISTORY</router-link>
        </nav>
      </div>
  
      <div v-if="isMenuOpen" class="md:hidden mt-4 space-y-2 text-center">
        <router-link to="/" class="block py-2 hover:text-orange-400">Home</router-link>
        <router-link to="/read-history" class="block py-2 hover:text-orange-400">History</router-link>
      </div>
    </header>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'HeaderComponent',
    setup() {
      const isMenuOpen = ref(false);
      const router = useRouter();
  
      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
      };
  
      return { isMenuOpen, toggleMenu };
    },
  });
  </script>
  