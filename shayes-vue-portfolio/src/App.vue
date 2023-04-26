<script setup>
import Navbar from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>


  <main>
    <Navbar />
    <router-view></router-view>
    <Footer />

  </main>
</template>

<style scoped>
body {
  margin: 0 !important;
}
</style>
