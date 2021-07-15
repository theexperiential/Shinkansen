<template>

  <div class="h-16 flex flex-none space-x-2 py-2 pr-2 ">
        <StateTab />
        <StateTab />
        <AddBtn /> 
  </div>

</template>

<script>
import StateTab from './StateTab.vue'
import AddBtn from './AddBtn.vue'
export default {
    components: {
        StateTab,
        AddBtn
    }
}
</script>

<style>

</style>