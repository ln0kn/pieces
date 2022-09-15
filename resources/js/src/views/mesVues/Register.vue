<template>
    <div class="grid-layout-container alignment-block">
        <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
            <vs-col class="pr-5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vx-card title="Nouvel utilisateur">
                    <form class="form-loading">

                        <div class="vx-row ">
                            <vs-input v-model="user.id" class="w-full" v-show="false" />
                            <div class="vx-col w-1/2">
                                <vs-input v-validate="'required'" data-vv-validate-on="blur" label-placeholder="Nom & prénom" name="nomPrenom" placeholder="Nom & Prénom" v-model="user.nomPrenom" class="w-full" />
                                <span class="text-danger text-sm">{{ errors.first('nomPrenom') }}</span>
                            </div>

                            <div class="vx-col w-1/2">
                                <vs-input v-validate="'required|email'" data-vv-validate-on="blur" name="email" type="email" label-placeholder="Email" placeholder="Email" v-model="user.email" class="w-full mt-6" />
                                <span class="text-danger text-sm">{{ errors.first('email') }}</span>
                            </div>

                            <div class="vx-col w-1/2">
                                <vs-input ref="password" type="password" data-vv-validate-on="blur" v-validate="'required|min:6|max:10'" name="motDePasse" label-placeholder="motDePasse" placeholder="motDePasse" v-model="user.motDePasse" class="w-full mt-6" />
                                <span class="text-danger text-sm">{{ errors.first('motDePasse') }}</span>
                            </div>

                            <div class="vx-col w-1/2">
                                <vs-input type="password" v-validate="'min:6|max:10|confirmed:motDePasse'" data-vv-validate-on="blur" data-vv-as="password" name="motDePasse_confirmation" label-placeholder="Confirm Password" placeholder="Confirm Password" v-model="user.motDePasse_confirmation" class="w-full mt-6" />
                                <span class="text-danger text-sm">{{ errors.first('motDePasse_confirmation') }}</span>
                            </div>
                        </div>
                        <div class="block overflow-x-auto mt-5">
                            <table class="w-full permissions-table">
                                <tr>
                                    <th class="font-semibold text-base text-left px-3 py-2" v-for="heading in ['Module', 'Voir', 'Ajouter', 'Modifier', 'Supprimer']" :key="heading">{{ heading }}</th>
                                </tr>

                                <tr v-for="(val, name) in permissions" :key="name">
                                    <td class="px-3 py-2">{{ name }}</td>
                                    <td v-for="(permission, name) in val" class="px-3 py-2" :key="name+permission">
                                        <vs-checkbox v-model="val[name]"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <vs-button type="border" @click.prevent="registerUserJWt" class="mt-6">Enregistrer</vs-button>
                       
                    </form>
                </vx-card>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vx-card title="Liste Utilisateurs ">
                    <vs-table search pagination :data="listeUser" max-items="7">
                        <template slot="thead">
                            <vs-th>Nom</vs-th>
                            <vs-th>Options</vs-th>
                        </template>
                        <template slot-scope="{data}">
                            <vs-tr :key="index" v-for="(tr, index) in data">
                                <vs-td>
                                    {{tr.name}}
                                </vs-td>
                                <vs-td :data="tr.libelle">
                                    <div class="btn-group">
                                        <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary cursor-pointer" @click.stop="editUser(tr)" />
                                        <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger cursor-pointer" class="ml-2" @click.stop="suppUser(tr)" />
                                    </div>
                                </vs-td>
                            </vs-tr>
                        </template>
                    </vs-table>
                </vx-card>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                wasSidebarOpen: null,
                permissions : {
                        "ajustement": {
                            "voir": false,
                            "ajouter": false,
                            "modifier": false,
                            "supprimer": false
                        },
                        "approvisionnement": {
                            "voir": false,
                            "ajouter": false,
                            "modifier": false,
                            "supprimer": false
                        },
                        "article": {
                            "voir": false,
                            "ajouter": false,
                            "modifier": false,
                            "supprimer": false
                        },
                        "client": {
                            "voir": false,
                            "ajouter": false,
                            "modifier": false,
                            "supprimer": false
                        },
                        "commande": {
                            "voir": false,
                            "ajouter": false,
                            "modifier": false,
                            "supprimer": false
                        },
                        "depense": {
                            "voir": false,
                            "ajouter": false,
                            "modifier": false,
                            "supprimer": false
                        },
                        "magasin": {
                            "voir": false,
                            "ajouter": false,
                            "modifier": false,
                            "supprimer": false
                        },
                        "transfert": {
                            "voir": false,
                            "ajouter": false,
                            "modifier": false,
                            "supprimer": false
                        },
                        "user": {
                            "voir": false,
                            "ajouter": false,
                            "modifier": false,
                            "supprimer": false
                        },
                        "reglement": {
                            "voir": false,
                            "ajouter": false,
                            "modifier": false,
                            "supprimer": false
                        },
                        "vente": {
                            "voir": false,
                            "ajouter": false,
                            "modifier": false,
                            "supprimer": false
                        },
                },
                user: {
                    id: "",
                    nomPrenom: "",
                    email: "",
                    motDePasse: "",
                    motDePasse_confirmation: "",
                },
            }
        },

        mounted() {
                this.wasSidebarOpen = this.$store.state.reduceButton;
    this.$store.commit('TOGGLE_REDUCE_BUTTON', true)

            this.$store.dispatch('getUser')
        },

        computed: {
            listeUser() {
                return this.$store.state.listeUser
            }
        },

        methods: {
            registerUserJWt() {
                // If form is not validated or user is already login return
                if (!this.validateForm ) {
                    if(this.user.id){
                        this.$store.dispatch('updateUser', {'id' :this.id,'user' :this.user , 'permission' : this.permissions})
                    }else{
                        this.$store.dispatch('createUser', {'user' :this.user , 'permission' : this.permissions})
                    }
                    
                }
            },
            editUser(data){
                this.user.id = data.id;
                this.user.nomPrenom = data.name;
                this.user.email = data.email;
                Object.values(data['droit']).forEach((value, key) => {
                    this.permissions[value.page][value.permission] =value.statut
                })
            },
            
            suppUser(data){
                this.$store.dispatch('deleteUser', {'id' :data.id})
            }
        },
        beforeDestroy() {
    if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
  }
    }

</script>
