<script setup>
import Navbar from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>


  <main>
    <Navbar class="nav"/>
    <router-view></router-view>
    <Footer />

  </main>
</template>

<style>
body {
  margin: 0 !important;
}


</style>
