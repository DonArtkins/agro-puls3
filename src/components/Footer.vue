<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="bg-green-500 text-white py-10">
    <div class="container mx-auto flex justify-between items-center">
      <p>&copy; 2025 AgroPuls3. All rights reserved.</p>
      <div class="flex gap-6">
        <RouterLink to="/privacy" class="hover:opacity-75">
          Privacy Policy
        </RouterLink>
        <RouterLink to="/terms" class="hover:opacity-75">
          Terms of Service
        </RouterLink>
      </div>
    </div>
  </footer>
</template>
