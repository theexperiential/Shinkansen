<template>
  <div class="w-16 h-screen flex flex-col space-y-2 p-2">
    <Exhibit />
    <div class="w-12 h-12">
      <Add />
    </div>
  </div>
</template>

<script>
  import Exhibit from './Exhibit.vue'
  import Add from './Add.vue'

  export default {
     components: {
        Exhibit,
        Add
    }
  }
</script>

<style>

</style>