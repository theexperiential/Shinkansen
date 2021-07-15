<template>
    <!-- selected tab -->
    <div class="w-56 h-12 
        grid grid-rows-4 place-items-center
        bg-bg-selected rounded-md
        hover:bg-bg-selected-hover
        group
        transition"
    >
        <!-- play/pause button -->
        <div class="col-start-1 col-end-2 row-span-3">
            <a 
                href="#"
                class=""
            >
                <svg 
                    class="fill-current text-yellow  group-hover:text-txt-hover  transition-colors duration-200"
                    width="20" height="22" viewBox="-4 -4 20 22" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M11 5.26795C12.3333 6.03775 12.3333 7.96225 11 8.73205L3.5 13.0622C2.16666 13.832 0.5 12.8697 0.5 11.3301L0.5 2.66987C0.5 1.13027 2.16667 0.168021 3.5 0.937822L11 5.26795Z"/>
                </svg>
            </a>
        </div>
        <!-- state name -->
        <div class="col-start-2 col-end-6 row-span-3 justify-self-start">
            <span class="text-txt-selected group-hover:text-txt-hover transition">State Name</span>
        </div>
        <!-- close button -->
        <div class="col-start-6 col-end-7 row-span-3">
            <a
                href="#"
                class=""
            >
                <svg
                    class="fill-current text-txt-unselected group-hover:text-txt-hover hover:text-txt-selected transition-colors duration-200"
                    width="34" height="34" viewBox="-4 -4 28 28" xmlns="http://www.w3.org/2000/svg"
                >
                    <rect x="6.67654" y="4.96811" width="15.1005" height="2.41608" rx="1" transform="rotate(45 6.67654 4.96811)" />
                    <rect x="17.3542" y="6.67654" width="15.1005" height="2.41608" rx="1" transform="rotate(135 17.3542 6.67654)" />
                </svg>
            </a>
        </div>
        <!-- progress bar -->
        <div class="col-start-1 col-end-7 row-span-1 w-full h-full px-1 pb-1">
            <div class="w-full h-full rounded-md bg-bg-med group-hover:bg-bg-selected transition-colors">
                <!-- to be animated -->
                <div class="w-12 h-full rounded-md bg-yellow group-hover:bg-txt-hover transition-colors"></div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>