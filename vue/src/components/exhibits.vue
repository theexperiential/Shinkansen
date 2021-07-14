<template>
  <div class="w-16 h-screen flex flex-col space-y-2 p-2">
    <Exhibit />
    <AddBtn />
  </div>
</template>

<script>
  import Exhibit from './Exhibit.vue'
  import AddBtn from './AddBtn.vue'

  export default {
     components: {
        Exhibit,
        AddBtn
    }
  }
</script>

<style>

</style>