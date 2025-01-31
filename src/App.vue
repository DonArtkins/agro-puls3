<template>
  <div class="min-h-screen">
    <Header />
    <div class="bg-red-500">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped></style>
