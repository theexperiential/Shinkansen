<template>
  <div class="w-16 h-screen flex flex-col space-y-2 p-2">
    <Exhibit />
    <AddBtn />
    <Menu />
  </div>
</template>

<script>
  import Exhibit from './Exhibit.vue'
  import AddBtn from './AddBtn.vue'
  import Menu from './Menu.vue'

  export default {
     components: {
        Exhibit,
        AddBtn,
        Menu
    }
  }
</script>

<style>

</style>