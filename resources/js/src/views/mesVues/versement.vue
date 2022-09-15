<template>

    <vs-tabs>
        <vs-tab label="Reglement">
            <div class="tab-text">

                <div class="vx-row">
                    <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                        <vx-card title="Nouveau versement" title-color="primary">
                            <form class="form-loading">
                                <vs-input type="w-full" v-model="versement.id" v-show="false"/>

                                <div class="mt-4">
                                    <label class="vs-input--label">Client</label>
                                    <v-select v-model="client" :options="clientOptions" dir="$vs.rtl ? 'rtl' : 'ltr'" v-validate="'required'" name="client" />
                                    <span class="text-danger text-sm" v-show="errors.has('client')">{{ errors.first('client') }}</span>
                                </div>

                                <vs-input class="w-full" label="Solde client" v-validate="'required'" name="solde" v-model="versement.solde" disabled />
                                <span class="text-danger text-sm" v-show="errors.has('solde')">{{ errors.first('solde') }}</span>

                                <vs-input class="w-full" label="Somme versée" v-validate="'required'" placeholder="Somme versée par le client" v-model="versement.sommeVersee" name="sommeVersee" />
                                <span class="text-danger text-sm" v-show="errors.has('sommeVersee')">{{ errors.first('sommeVersee') }}</span>

                                <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">AJOUTER</vs-button>
                            </form>
                        </vx-card>
                    </div>

                    <div class="vx-col w-full md:w-2/3">
                        <vx-card title="liste Versement" title-color="primary">
                           <vs-table search pagination :data="listeVersement" max-items="2">
                                <template slot="thead">
                                    <vs-th>Client </vs-th>
                                    <vs-th> solde Ant. </vs-th>
                                    <vs-th  >mtn. versee</vs-th>
                                    <vs-th>Quantité Physique</vs-th>
                                  
                                </template>
                                <template slot-scope="{data}">
                                    <vs-tr :key="index" v-for="(tr, index) in data">
                                        <vs-td>
                                            {{tr.compte.client.nomClient }} {{ tr.compte.client.telephoneClient }}
                                        </vs-td>
                                        <vs-td>
                                            {{ tr.compte.soldeAnterieur }}
                                        </vs-td >
                                        <vs-td>
                                            {{ tr.sommeVersee}}
                                        </vs-td>
                                        <vs-td>
                                            {{ tr.soldeClient}}
                                        </vs-td>
                                        <vs-td>
<!--
                                            <div class="btn-group">
                                                <vs-button size="small" @click="editVersement(tr)">Modifier</vs-button>
                                                <vs-button size="small" @click="suppVersement(tr)">Supprimer</vs-button>
                                            </div>
-->
                                            <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary cursor-pointer" @click.stop="editVersement(tr)" />
                                        <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger cursor-pointer" class="ml-2" @click.stop="suppVersement(tr)" />
                                        </vs-td>
                                        
                                    </vs-tr>
                                </template>
                            </vs-table>

                        </vx-card>
                    </div>
                </div>
            </div>
        </vs-tab>

    </vs-tabs>

</template>
<script>
    import vSelect from 'vue-select'
    export default {

        data() {
            return {
                versement: {
                    id: null,
                    sommeVersee: null,
                    client: null,
                    solde: null,
                },
                client: null,
            }
        },
        watch: {
            client() {
                this.versement.solde = this.client.compte
            }
        },
        computed: {
            clientOptions() {
                var i = 0;
                var obj = []
                Object.values(this.$store.state.listeClient).forEach(key => {
                    obj.push({
                        id: key.id,
                        label: key.nomClient + ' ' + key.telephoneClient,
                        compte: key.compte[key.compte.length - 1].soldeActuel
                    })
                })
                return obj;
            },
            listeVersement() {
                return this.$store.state.listeVersement
            }
        },
        mounted() {
            this.$store.dispatch('getClient')
            this.$store.dispatch('getVersement')
        },
        components: {
            'v-select': vSelect,
        },
        methods: {
            submitForm: function() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        //                        this.$vs.loading({
                        //                            type: 'radius',
                        //                            container: '.form-loading',
                        //                            scale: 1.2
                        //                        })
                        if (this.versement.id) {
                            this.versement.client = this.client
                            this.$store.dispatch('editVersement', this.versement)
                        } else {
                            this.versement.client = this.client
                            this.$store.dispatch('addVersement', this.versement)
                        }
                    } else {
                        // form have errors
                    }
                })
            },

            editVersement: function(data) {
                var clientInfo = {}
                clientInfo.id = data.compte.client.id
                clientInfo.label = data.compte.client.nomClient + ' ' + data.compte.client.telephoneClient
                clientInfo.compte = data.compte.soldeAnterieur
//                clientInfo.compte_id = data.compte.id

                this.client = clientInfo
                this.versement.id = data.id
                this.versement.sommeVersee = data.compte.variation
//                console.log(data.compte)
            },

            suppVersement: function(data) {
                this.versement.id = data.compte.client.id
                this.$store.dispatch('deleteVersement', this.versement)
            }
        }
    }

</script>
