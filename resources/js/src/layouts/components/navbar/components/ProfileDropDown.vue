<template>
    <div class="the-navbar__user-meta flex items-center" v-if="activeUserInfo">

        <div class="text-right leading-tight hidden sm:block">
            <p class="font-semibold">{{ activeUserInfo }}</p>
            <!--      <small>Available</small>-->
        </div>

        <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

            <div class="con-img ml-3">
                <vs-avatar />
            </div>

            <vs-dropdown-menu class="vx-navbar-dropdown">
                <ul style="min-width: 9rem">

                    <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="inventaire">
                        <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
                        <span class="ml-2">Inventaire</span>
                    </li>
                    <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="$store.commit('SIDEBAR_STATE', true)" v-model="$store.sideBarState">
                        <feather-icon icon="BellIcon" svgClasses="w-4 h-4" />
                        <span class="ml-2">Stock</span>
                    </li>
                    <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="$router.push('/user').catch(() => {})">
                        <feather-icon icon="UsersIcon" svgClasses="w-4 h-4" />
                        <span class="ml-2">Utilisateur</span>
                    </li>
                    <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="$router.push('/apps/chat').catch(() => {})">
                        <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />
                        <span class="ml-2">Chat</span>
                    </li>

                    <vs-divider class="m-1" />

                    <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="logout">
                        <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
                        <span class="ml-2">Logout</span>
                    </li>
                </ul>
            </vs-dropdown-menu>
        </vs-dropdown>
    </div>
</template>

<script>
    import firebase from 'firebase/app'
    import 'firebase/auth'

    export default {
        data() {
            return {

            }
        },
        computed: {
            activeUserInfo() {
                return localStorage.getItem('userData')
            },
        },
        methods: {
            logout() {
                if (localStorage.getItem('userData'))
                    this.$store.dispatch('logoutUser')
            },

            inventaire() {
                this.$store.dispatch('listeInventaire')
            }
        }
    }

</script>
