<template>
    <!-- state view -->
    <div class="flex-grow bg-bg-dark mr-2 rounded-md">
        <splitpanes>
            <pane>
                <splitpanes horizontal>
                    <pane>
                        <splitpanes @resize="namePanelWidthCalc($event)">
                            <pane size="10" min-size="10">
                                <LayerNames />
                                <TransportControls />
                            </pane>
                            <pane size="70">
                                <LayerView />
                                <TransportRanges />
                            </pane>
                        </splitpanes>
                    </pane>
                    <pane>
                        <splitpanes>
                            <pane :size="namePanelWidth">
                                <TimegraphChannels />
                            </pane>
                            <pane :size="contentPanelWidth">
                                <TimegraphView />
                            </pane>
                        </splitpanes> 
                    </pane>
                </splitpanes>
            </pane>
            <pane size="20" min-size="20" >
                <Properties />
            </pane>
        </splitpanes>
        <Transport />
        
        
    </div>
</template>

<script>

import { Splitpanes, Pane } from 'splitpanes'
// import 'splitpanes/dist/splitpanes.css'

import LayerNames from './LayerNames.vue'
import LayerView from './LayerView.vue'
import TransportControls from './TransportControls.vue'
import TransportRanges from './TransportRanges.vue'
import TimegraphChannels from './TimegraphChannels.vue'
import TimegraphView from './TimegraphView.vue'
import Properties from './Properties.vue'

export default {
    data() {
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
        LayerNames,
        LayerView,
        TransportControls,
        TransportRanges,
        TimegraphChannels,
        TimegraphView,
        Properties
    }
}
</script>

<style>
    .splitpanes{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%}
    /* .splitpanes--vertical{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row} */
    .splitpanes--horizontal{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.splitpanes--dragging *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
    /* .splitpanes__pane{width:100%;height:100%;overflow:hidden} */
    /* .splitpanes--vertical .splitpanes__pane{-webkit-transition:width .2s ease-out;transition:width .2s ease-out} */
    /* .splitpanes--horizontal .splitpanes__pane{-webkit-transition:height .2s ease-out;transition:height .2s ease-out} */
    /* .splitpanes--dragging .splitpanes__pane{-webkit-transition:none;transition:none} */
    /* .splitpanes__splitter{-ms-touch-action:none;touch-action:none} */
    .splitpanes--vertical>.splitpanes__splitter{min-width:1px;cursor:col-resize}
    .splitpanes--horizontal>.splitpanes__splitter{min-height:1px;cursor:row-resize}
    /* .splitpanes.default-theme .splitpanes__pane{background-color:#f2f2f2} */
    /* .splitpanes.default-theme .splitpanes__splitter{background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-negative:0;flex-shrink:0} */

    /* .splitpanes.default-theme .splitpanes__splitter:after,.splitpanes.default-theme .splitpanes__splitter:before{content:"";position:absolute;top:50%;left:50%;background-color:rgba(0,0,0,.15);-webkit-transition:background-color .3s;transition:background-color .3s} */
    /* .splitpanes.default-theme .splitpanes__splitter:hover:after,.splitpanes.default-theme .splitpanes__splitter:hover:before{background-color:rgba(0,0,0,.25)} */

    /* .splitpanes.default-theme .splitpanes__splitter:first-child{cursor:auto}.default-theme.splitpanes .splitpanes .splitpanes__splitter{z-index:1} */

    .splitpanes--vertical>.splitpanes__splitter,.default-theme .splitpanes--vertical>.splitpanes__splitter{width:8px; height: 40px; background-color: #3B7D95;}

    /* .default-theme.splitpanes--vertical>.splitpanes__splitter:after,.default-theme .splitpanes--vertical>.splitpanes__splitter:after,.default-theme.splitpanes--vertical>.splitpanes__splitter:before,.default-theme .splitpanes--vertical>.splitpanes__splitter:before{-webkit-transform:translateY(-50%);transform:translateY(-50%);width:1px;height:30px} */

    /* .default-theme.splitpanes--vertical>.splitpanes__splitter:before,.default-theme .splitpanes--vertical>.splitpanes__splitter:before{margin-left:-2px} */

    /* .default-theme.splitpanes--vertical>.splitpanes__splitter:after,.default-theme .splitpanes--vertical>.splitpanes__splitter:after{margin-left:1px} */

    .splitpanes--horizontal>.splitpanes__splitter,.default-theme .splitpanes--horizontal>.splitpanes__splitter{width: 40px; height:8px; background-color: #3B7D95; }

    /* .default-theme.splitpanes--horizontal>.splitpanes__splitter:after,.default-theme .splitpanes--horizontal>.splitpanes__splitter:after,.default-theme.splitpanes--horizontal>.splitpanes__splitter:before,.default-theme .splitpanes--horizontal>.splitpanes__splitter:before{-webkit-transform:translateX(-50%);transform:translateX(-50%);width:30px;height:1px} */

    /* .default-theme.splitpanes--horizontal>.splitpanes__splitter:before,.default-theme .splitpanes--horizontal>.splitpanes__splitter:before{margin-top:-2px} */

    /* .default-theme.splitpanes--horizontal>.splitpanes__splitter:after,.default-theme .splitpanes--horizontal>.splitpanes__splitter:after{margin-top:1px} */
</style>