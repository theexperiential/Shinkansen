<template>
    <!-- state view -->
    <div class="flex-grow bg-bg-dark mr-2 rounded-md">
        <splitpanes class="default-theme">
            <pane v-for="i in 3" :key="i">
                <div>{{ i }}</div>
            </pane>
        </splitpanes>
        <Timeline />
        <Transport />
        <Timegraph />
        <Properties />
    </div>
</template>

<script>

import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

import Timeline from './Timeline.vue'
import Transport from './Transport.vue'
import Timegraph from './Timegraph.vue'
import Properties from './Properties.vue'

export default {
    components: {
        Splitpanes,
        Pane,
        Timeline,
        Transport,
        Timegraph,
        Properties
    }
}
</script>

<style>

</style>