<script setup>
const logos = [
  "deere.png",
  "monsanto.png",
  "driscolls.png",
  "chiquita.png",
  "dole.png",
  "bayer.png",
  "sysco.png",
  "cargill.png",
];
</script>

<template>
  <section class="py-16 bg-white overflow-hidden">
    <h2 class="text-3xl font-heading text-center mb-8">
      Trusted by leading farms and growers
    </h2>
    <div class="relative overflow-hidden h-20">
      <div class="absolute inset-y-0 flex items-center logo-track">
        <div
          v-for="(logo, index) in [...logos, ...logos]"
          :key="index"
          class="mx-8"
        >
          <img
            :src="`/images/trust-logos/${logo}`"
            :alt="logo.replace('.png', '')"
            class="h-16 grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo-track {
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>