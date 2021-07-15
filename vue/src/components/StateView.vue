<template>
    <!-- state view -->
    <div class="flex-grow bg-bg-dark mr-2 rounded-md">
        <Timeline />
        <Transport />
        <Timegraph />
        <Properties />
    </div>
</template>

<script>

import Timeline from './Timeline.vue'
import Transport from './Transport.vue'
import Timegraph from './Timegraph.vue'
import Properties from './Properties.vue'

export default {
    components: {
        Timeline,
        Transport,
        Timegraph,
        Properties
    }
}
</script>

<style>

</style>