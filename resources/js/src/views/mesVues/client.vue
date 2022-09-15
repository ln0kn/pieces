<template>

    <vs-tabs>
        <vs-tab label="Client">
            <div class="tab-text">
                <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
                    <vs-col class="pr-5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
                        <vx-card title="Nouveau client" collapse-action>
                            <form class="form-loading">
                                <vs-input v-model="client.id" v-show="false" />
                                <vs-input class="w-full" v-validate="'required'" label="Nom et Prénoms:" placeholder="Nom et Prénoms" v-model="client.nomClient" name="nomClient" />
                                <span class="text-danger text-sm" v-show="errors.has('nomClient')"> {{ errors.first('nomClient') }} </span>

                                <vs-input class="w-full" v-validate="'required'" label="N° Téléphone" placeholder="(+226)" v-model="client.telClient" name="telClient" />
                                <span class="text-danger text-sm" v-show="errors.has('telClient')"> {{ errors.first('telClient') }} </span>

                                <vs-input class="w-full" v-validate="'required'" label="Solde anterieur" placeholder="CFA" v-model="client.solde" name="solde" />
                                <span class="text-danger text-sm" v-show="errors.has('solde')"> {{ errors.first('solde') }} </span>

                                <vs-button color="primary" type="border" class="ml-3 mb-1 mt-1" @click.prevent="submitFormClient">AJOUTER</vs-button>

                            </form>
                        </vx-card>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                        <vx-card title="Liste des clients" collapse-action>
                            <vs-table :data="listeClient" search pagination max-items="5">
                                <template slot="thead">
                                    <vs-th>Client</vs-th>
                                    <vs-th>N° Tel</vs-th>
                                    <vs-th>Solde</vs-th>
                                    <vs-th>Options</vs-th>
                                </template>
                                <template slot-scope="{data}">
                                    <vs-tr :key="indext" v-for="(tr, indext) in data">
                                        <vs-td :data="tr.nomClient">
                                            {{tr.nomClient}}

                                        </vs-td>
                                        <vs-td :data="tr.telephoneClient">
                                            {{tr.telephoneClient}}
                                        </vs-td>
                                        <vs-td>
                                            <span v-for="(val, index) in tr.compte">
                                                {{val.soldeActuel}}
                                            </span>
                                        </vs-td>
                                        <vs-td>
                                            <div class="btn-group">
                                                <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary cursor-pointer " @click.prevent="editClient(tr)" />
                                                <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger cursor-pointer" class="ml-2" @click.stop="suppClient(tr)" />
                                            </div>
                                        </vs-td>

                                    </vs-tr>
                                </template>
                            </vs-table>

                        </vx-card>
                    </vs-col>
                </vs-row>
            </div>
        </vs-tab>

        <vs-tab label="Reglement">
            <div class="tab-text">
                <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
                    <vs-col class="pr-5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                        <vx-card title="Nouveau versement" >
                            <form class="form-loading">
                                <vs-input type="w-full" v-model="versement.id" v-show="false" />

                                <div class="mt-4">
                                    <label class="vs-input--label">Client</label>
                                    <v-select v-model="client2" :options="clientOptions" dir="$vs.rtl ? 'rtl' : 'ltr'" v-validate="'required'" name="client2" />
                                    <span class="text-danger text-sm" v-show="errors.has('client2')">{{ errors.first('client') }}</span>
                                </div>

                                <vs-input class="w-full" label="Solde client" v-validate="'required'" name="solde" v-model="versement.solde" disabled />
                                <span class="text-danger text-sm" v-show="errors.has('solde')">{{ errors.first('solde') }}</span>

                                <vs-input class="w-full" label="Somme versée" v-validate="'required'" placeholder="Somme versée par le client" v-model="versement.sommeVersee" name="sommeVersee" />
                                <span class="text-danger text-sm" v-show="errors.has('sommeVersee')">{{ errors.first('sommeVersee') }}</span>

                                <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">AJOUTER</vs-button>
                            </form>
                        </vx-card>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                        <vx-card title="liste Versement">
                            <vs-table search pagination :data="listeVersement" max-items="2">
                                <template slot="thead">
                                    <vs-th sort-key="tr.compte.client.nomClient">Client </vs-th>
                                    <vs-th>Solde Ante.</vs-th>
                                    <vs-th>Mtn. versé</vs-th>
                                    <vs-th>Solde Act.</vs-th>
                                    <vs-th>Options</vs-th>

                                </template>
                                <template slot-scope="{data}">
                                    <vs-tr :key="index" v-for="(tr, index) in data">
                                        <vs-td data="tr.compte.client.nomClient">
                                            {{tr.compte.client.nomClient }} {{ tr.compte.client.telephoneClient }}
                                        </vs-td>
                                        <vs-td>
                                            {{ tr.compte.soldeAnterieur }}
                                        </vs-td>
                                        <vs-td>
                                            {{ tr.sommeVersee}}
                                        </vs-td>
                                        <vs-td>
                                            {{ tr.soldeClient}}
                                        </vs-td>
                                        <vs-td>
                                            <div class="btn-group">

                                                <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary cursor-pointer " @click.prevent="editVersement(tr)" />
                                                <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger cursor-pointer" class="ml-2" @click.stop="suppVersement(tr)" />
                                            </div>

                                        </vs-td>

                                    </vs-tr>
                                </template>
                            </vs-table>

                        </vx-card>
                    </vs-col>
                </vs-row>
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
                client2: null,
                client: {
                    id: "",
                    nomClient: "",
                    telClient: "",
                    solde: ""
                },
            }
        },

        mounted() {
            this.$store.dispatch('getVersement')
            this.$store.dispatch('getClient')
            //            this.$store.dispatch('clientModule/getClient')
        },
        watch: {
            client2() {
                this.versement.solde = this.client2.compte
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
            },
            listeClient() {
                return this.$store.state.listeClient
                //            return this.$store.state.listeCli.listeClient 
            }
        },

        methods: {
            submitFormClient(e) {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$vs.loading({
                            type: 'radius',
                            container: '.form-loading',
                            scale: 1.2
                        })

                        if (this.client.id) {
                            this.$store.dispatch('editClient', this.client),
                                //                        this.$store.dispatch('clientModule/editClient',this.client),
                                console.log(this.client.id)
                        } else {
                            this.$store.dispatch('addClient', this.client),
                                //                        this.$store.dispatch('clientModule/addClient', this.client),
                                console.log(this.client.id)
                        }
                    } else {
                        // form have errors
                    }
                })
            },

            editClient(data) {
                this.client.id = data.id,
                    this.client.nomClient = data.nomClient,
                    this.client.telClient = data.telephoneClient,
                    Object.values(data.compte).forEach(key => {
                        this.client.solde = key.soldeActuel
                    })
            },

            suppClient(data) {
                this.client.id = data.id
                this.$store.dispatch('deleteClient', this.client)
                //                this.$store.dispatch('clientModule/deleteClient',this.client)
                console.log(data.id)
            },
            submitForm: function() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$vs.loading({
                            type: 'radius',
                            container: '.form-loading',
                            scale: 1.2
                        })
                        if (this.versement.id) {
                            this.versement.client = this.client2
                            this.$store.dispatch('editVersement', this.versement)
                        } else {
                            this.versement.client = this.client2
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

                this.client2 = clientInfo
                this.versement.id = data.id
                this.versement.sommeVersee = data.compte.variation
            },

            suppVersement: function(data) {
                this.versement.id = data.compte.client.id
                this.$store.dispatch('deleteVersement', this.versement)
            }
        },
        components: {
            'v-select': vSelect,
        }
    }

</script>
