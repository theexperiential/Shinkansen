<template>
    <!-- selected tab -->
    <div class="w-56 h-12 
        grid grid-rows-4 place-items-center
        bg-bg-selected rounded-md"
    >
        <!-- play/pause button -->
        <div class="col-start-1 col-end-2 row-span-3">
            <a 
                href="#"
                class=""
            >
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5.26795C12.3333 6.03775 12.3333 7.96225 11 8.73205L3.5 13.0622C2.16666 13.832 0.499999 12.8697 0.499999 11.3301L0.5 2.66987C0.5 1.13027 2.16667 0.168021 3.5 0.937822L11 5.26795Z" fill="#E1BC29"/>
                </svg>
            </a>
        </div>
        <!-- state name -->
        <div class="col-start-2 col-end-6 row-span-3 justify-self-start">
            <span class="text-txt-selected">State Name</span>
        </div>
        <!-- close button -->
        <div class="col-start-6 col-end-7 row-span-3">
            <a
                href="#"
                class=""
            >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6.67654" y="4.96811" width="15.1005" height="2.41608" rx="1" transform="rotate(45 6.67654 4.96811)" fill="#A4C8D5"/>
                    <rect x="17.3542" y="6.67654" width="15.1005" height="2.41608" rx="1" transform="rotate(135 17.3542 6.67654)" fill="#A4C8D5"/>
                </svg>
            </a>
        </div>
        <!-- progress bar -->
        <div class="col-start-1 col-end-7 row-span-1 w-full h-full px-1 pb-1">
            <div class="w-full h-full rounded-md bg-bg-med"></div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>