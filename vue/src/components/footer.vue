<template>
    <!-- footer -->
    <div>
        <ul class="h-8 flex items-center space-x-4">
            <li v-for="link in links" :key="link">
                <a
                    href="#"
                    class="text-txt-unselected text-xs hover:text-txt-selected transition"
                >
                    {{ link.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            links: [
                { name: 'terms of use', url: 'url' },
                { name: 'privacy', url: 'url' },
                { name: 'about', url: 'url' },
                { name: 'help', url: 'url' },
                { name: 'contact', url: 'url' }
            ]
        }
    }
}
</script>

<style>

</style>