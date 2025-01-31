<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
</script>

<template>
  <header class="bg-light-gray shadow-sm">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <RouterLink to="/" class="flex items-center gap-2">
        <img src="/logo.png" alt="AgroPuls3" class="w-12">
        <p class="font-heading text-2xl font-bold">Agro<span class="text-primary">Puls3.</span></p>
      </RouterLink>

      <div class="hidden md:flex gap-8">
        <RouterLink 
          v-for="link in ['Home', 'About', 'Services', 'Blog', 'Contact']"
          :key="link"
          :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
          class="font-body text-dark-slate relative px-3 py-2 transition-all hover:text-white"
          active-class="text-white"
        >
          {{ link }}
        </RouterLink>
      </div>

      <button 
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden p-2"
      >
        <div class="space-y-2">
          <span class="block w-6 h-0.5 bg-dark-slate transition-transform"></span>
          <span class="block w-6 h-0.5 bg-dark-slate transition-opacity"></span>
          <span class="block w-6 h-0.5 bg-dark-slate transition-transform"></span>
        </div>
      </button>

      <div 
        class="md:hidden fixed top-16 right-0 w-full bg-light-gray shadow-lg transition-transform"
        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <RouterLink 
          v-for="link in ['Home', 'About', 'Services', 'Blog', 'Contact']"
          :key="link"
          :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
          class="block py-4 px-8 text-center hover:bg-primary/10"
          active-class="bg-primary/10"
        >
          {{ link }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>