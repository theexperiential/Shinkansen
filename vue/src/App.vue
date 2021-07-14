<template>
  <div class="w-screen h-screen bg-bg-grey">
    <Menu />
    <div class="flex">
      <Exhibits />
      <States />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Menu from './components/Menu.vue'
import Exhibits from './components/Exhibits.vue'
import States from './components/States.vue'
import Footer from './components/Footer.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>

</style>
