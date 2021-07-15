<template>
    <!-- state view -->
    <div class="flex-grow bg-bg-dark mr-2 rounded-md">
        <splitpanes class="default-theme">
            <pane>
                <splitpanes horizontal>
                    <pane>
                        <splitpanes @resize="namePanelWidthCalc($event)">
                            <pane size="10" min-size="10">
                                timeline names
                            </pane>
                            <pane size="70">
                                timeline
                            </pane>
                        </splitpanes>
                    </pane>
                    <pane>
                        <splitpanes>
                            <pane :size="namePanelWidth">
                                timegraph names
                            </pane>
                            <pane :size="contentPanelWidth">
                                timegraph
                            </pane>
                        </splitpanes> 
                    </pane>
                </splitpanes>
            </pane>
            <pane size="20" min-size="20" >
                properties
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
    data () {
        return {
            namePanelWidth: 10,
            contentPanelWidth: 70
        }
    },
    methods: {
        namePanelWidthCalc(event) {
            this.namePanelWidth = event[0]['size'],
            this.contentPanelWidth = event[1]['size']
        }
    },
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