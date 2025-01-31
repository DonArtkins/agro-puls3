<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <section
      class="hero bg-gradient-to-r from-secondary to-primary text-white py-32"
    >
      <div class="container mx-auto text-center">
        <h1 class="font-heading text-4xl mb-6">Modern farming technology</h1>
        <div class="flex gap-4 justify-center">
          <RouterLink to="/about" class="btn-primary">Learn more</RouterLink>
          <RouterLink to="/contact" class="btn-secondary"
            >Get started</RouterLink
          >
        </div>
      </div>
    </section>
  </main>
</template>
