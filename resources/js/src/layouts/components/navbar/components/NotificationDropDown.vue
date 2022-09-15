<template>
    <feather-icon @click="$store.commit('SIDEBAR_STATE', true)" v-model="$store.sideBarState" icon="BellIcon" class="cursor-pointer mt-1 sm:mr-6 mr-2" :badge="$store.listeStock.length" />
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        components: {
            VuePerfectScrollbar
        },
        data() {
            return {

            }
        },
        methods: {

        },
    }

</script>
