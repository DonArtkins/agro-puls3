<script setup>
const services = [
  {
    title: 'Aerial Intelligence',
    content: 'Our drones take high-resolution images of your fields...'
  },
  {
    title: 'Data-driven insights',
    content: 'We provide you with detailed reports and recommendations...'
  },
  {
    title: 'Precision application',
    content: 'We can use our drones to apply inputs like fertilizer...'
  },
  {
    title: 'Crop health monitoring',
    content: 'We monitor your crops throughout the growing season...'
  }
]
</script>

<template>
  <section class="py-20 bg-light-gray">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-heading text-center mb-6">How we help farmers</h2>
      <p class="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        We combine the latest advances in artificial intelligence...
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(service, index) in services"
          :key="index"
          class="bg-white p-6 rounded-xl shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg"
        >
          <h3 class="text-xl font-heading mb-4">{{ service.title }}</h3>
          <p class="text-gray-600">{{ service.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>