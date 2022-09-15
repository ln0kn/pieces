<template>
    <div class="vx-row">
        <vx-card class='mb-5' title="Nouvelle commande" collapseAction>
            <form class="form-loading">
                <vs-row>
                    <vs-col vs-type="flex" vs-w="8">
                        <div class="vx-row">

                            <div class="vx-col w-1/3">
                                <label class="vs-input--label">Nom client</label>
                                <v-select v-model="client" taggable push-tags :options="clientOptions" dir="$vs.rtl ? 'rtl' : 'ltr'" />

                            </div>

                            <div class="vx-col w-full mt-0">
                                <table class="table table-dark-inverted">
                                    <tr>
                                        <th>#</th>
                                        <th>Article</th>
                                        <th>boutique</th>
                                        <th>Rakieta</th>
                                        <th>Coram</th>
                                        <th>Prix U</th>
                                        <th>Prix T</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr v-for="(row,index) in rows" :key="index">
                                        <vs-td width="1%">{{index + 1}}</vs-td>

                                        <vs-td width="25%">
                                            <v-select size="small" v-model="row.article" :options="articleOptions" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                                        </vs-td>

                                        <vs-td width="10%">
                                            <vs-input v-model="row.boutique" class="w-full" @blur="clear(index)" />
                                        </vs-td>
                                        <vs-td width="10%">
                                            <vs-input v-model="row.rakieta" class="w-full" @blur="clear(index)" />
                                        </vs-td>
                                        <vs-td width="10%">
                                            <vs-input v-model="row.coram" class="w-full" @blur="clear(index)" />
                                        </vs-td>
                                        <vs-td width="10%">
                                            <div class="vx-col w-full">
                                                <vs-input v-model="row.prixU" @blur="clear(index)" class="w-full" />
                                            </div>
                                        </vs-td>
                                        <vs-td width="11%">
                                            <div class="vx-col w-full">
                                                <vs-input v-model="row.prixTotal" disabled class="w-full" />
                                            </div>
                                        </vs-td>
                                        <vs-td>
                                            <div class="btn-group">
                                                <vs-button size="small" @click="removeRow(index)" color="danger"></vs-button>
                                                <vs-button @click="addRow(index)" size="small"></vs-button>
                                            </div>
                                        </vs-td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </vs-col>
                    <vs-col vs-type="flex" vs-w="4">
                        <vs-input v-model="info.id" v-show="false" class="w-full" />
                        <div class="vx-row">
                            <div class="vx-col w-1/2">
                                <vs-input v-validate="'required'" label="Compte client" disabled v-model="info.compte" class="w-full" name="client" />
                                <span class="text-danger text-sm" v-show="errors.has('client')">{{ errors.first('client') }}</span>
                            </div>
                            <div class="vx-col w-1/2">
                                <vs-input label="Montant de la facture" disabled v-model="info.montantFacture" class="w-full" />
                            </div>
                            <div class="vx-col w-1/2">
                                <vs-input v-validate="'required|numeric'" label="Montant remise" :disabled="disabled" name="remise" v-model="info.remise" @keyup="reste()" class=" w-full" />
                                <span class="text-danger text-sm" v-show="errors.has('remise')">{{ errors.first('remise') }}</span>
                            </div>
                            <div class="vx-col w-1/2">
                                <vs-input label="Somme Versée" name="sommeVersee" :disabled="disabled" v-model="info.sommeVersee" class="w-full" @keyup="reste()" />
                                <span class="text-danger text-sm" v-show="errors.has('sommeVersee')">{{ errors.first('sommeVersee') }}</span>
                            </div>
                            <div class="vx-col w-1/2">
                                <vs-input type="number" label="Somme restante" disabled v-model="info.sommeRestante" class="w-full" />
                            </div>
                            <div class="vx-col w-1/2">
                                <vs-checkbox v-model="info.bon" :disabled="disabled" class="mt-5">Bon d'enlèvement</vs-checkbox>
                            </div>

                            <div class="vx-col">
                                <vs-checkbox v-model="vendre" class="mt-5">Effectuer la vente</vs-checkbox>
                            </div>

                            <vs-divider></vs-divider>
                            <div class="vx-col w-1/2">
                                <vs-button color="primary" @click="ajouter" type="filled" class="mt-0">Ajouter</vs-button>
                            </div>
                            <div class="vx-col w-1/2">
                                <vs-button color="primary" type="filled" class="mt-0">Nouvelle </vs-button>
                            </div>
                        </div>
                    </vs-col>
                </vs-row>
            </form>
            <!--
            <pre>{{$data}}
            </pre>
-->
        </vx-card>

        <vx-card title="Liste commande" collapseAction>
            <vs-table search pagination :data="listeCommande" max-items="3">
                <template slot="thead">
                    <vs-th sort-key="designation">identifiant</vs-th>
                    <vs-th>date</vs-th>
                    <vs-th>option</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                        <vs-td :data="data[indextr].referenceCommande">
                            {{ data[indextr].referenceCommande }}
                        </vs-td>
                        <vs-td>
                            {{data[indextr].created_at}}
                        </vs-td>

                        <vs-td>
                            <div class="btn-group">
                                <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary cursor-pointer" @click.stop="editCommande(tr)" />
                                <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger cursor-pointer" class="ml-2" @click.stop="suppCommande(tr)" />
                            </div>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>
<script>
    import vSelect from 'vue-select'
    export default {
        data() {
            return {
                disabled: true,
                info: {
                    compte: null,
                    montantFacture: null,
                    remise: 0,
                    sommeVersee: 0,
                    sommeRestante: null,
                    client: null,
                    bon: false,
                    id: null,
                },
                client: null,
                vendre: false,
                rows: [{
                    prixTotal: null,
                    prixU: null,
                    rakieta: null,
                    coram: null,
                    boutique: null,
                    article: null,
                }],
                wasSidebarOpen: null,
            }
        },
        components: {
            'v-select': vSelect,
        },
        watch: {
            vendre() {
                this.disabled = !this.disabled
            },

            client() {
                this.info.client = null
                if (this.client)
                    if (this.client.id) {
                        this.info.client = this.client.id
                        this.info.compte = this.client.compte
                    } else {
                        this.info.compte = 0
                        this.info.client = this.client
                    }
                else {
                    this.info.compte = null
                }
                console.log(this.client)
            }
        },
        computed: {
            articleOptions() {
                var i = 0;
                var obj = []
                Object.values(this.$store.state.listeArticle).forEach(key => {
                    Object.values(key.types).forEach(val => {
                        obj.push({
                            id: val.id,
                            label: key.designation + ' ' + val.nomType
                        })
                    })
                })
                return obj;
            },
            clientOptions() {
                var i = 0;
                var obj = []
                Object.values(this.$store.state.listeClient).forEach(key => {
                    obj.push({
                        id: key.id,
                        label: key.nomClient + ' ' + key.telephoneClient,
                        compte: key.compte[0].soldeActuel
                    })
                })
                return obj;
            },
            listeCommande() {
                return this.$store.state.listeCommande
            }

        },
        mounted() {
            this.wasSidebarOpen = this.$store.state.reduceButton;
            this.$store.commit('TOGGLE_REDUCE_BUTTON', true)

            this.$store.dispatch('getCommande')
            this.$store.dispatch('getClient')
            this.$store.dispatch('getArticle')
        },
        methods: {

            addRow: function(index) {
                try {
                    this.rows.push({
                        prixTotal: null,
                        prixU: null,
                        rakieta: null,
                        coram: null,
                        article: null,
                        boutique: null,
                    });
                    //                    this.rows.splice(index + 1, 0, {});
                    //                    console.log(this.rows)
                } catch (e) {
                    console.log(e);
                }
            },
            removeRow: function(index) {
                if (index > 0) {
                    this.info.montantFacture = this.info.montantFacture - this.rows[index].prixTotal
                    this.rows.splice(index, 1);
                } else {
                    if (index == 0) {
                        this.info.montantFacture = 0
                        this.rows[index].prixU = null;
                        this.rows[index].prixTotal = null;
                        this.rows[index].coram = null;
                        this.rows[index].boutique = null;
                        this.rows[index].rakieta = null;
                        this.rows[index].article = null;
                    }
                }
            },

            clear: function(index) {
                if (this.rows[index].boutique && this.rows[index].coram && this.rows[index].rakieta && this.rows[index].prixU) {
                    console.log(' llll ')
                } else {
                    if (this.rows[index].boutique && this.rows[index].coram && this.rows[index].rakieta || this.rows[index].coram && this.rows[index].rakieta && this.rows[index].prixU || this.rows[index].coram && this.rows[index].prixU && this.rows[index].boutique || this.rows[index].rakieta && this.rows[index].prixU && this.rows[index].boutique) {
                        console.log('lk')
                    } else {
                        if (this.rows[index].boutique && this.rows[index].rakieta || this.rows[index].boutique && this.rows[index].coram ||
                            this.rows[index].rakieta && this.rows[index].coram) {
                            console.log(';kfgf')
                        } else {
                            if (this.rows[index].boutique && this.rows[index].prixU || this.rows[index].rakieta && this.rows[index].prixU || this.rows[index].coram && this.rows[index].prixU) {
                                if (this.rows[index].rakieta) {
                                    this.rows[index].prixTotal = 0
                                    this.rows[index].prixTotal = this.rows[index].prixU * this.rows[index].rakieta
                                    console.log('rakie')
                                    console.log(this.rows[index].prixTotal)
                                }

                                if (this.rows[index].coram)
                                    this.rows[index].prixTotal = this.rows[index].prixU * this.rows[index].coram

                                if (this.rows[index].boutique)
                                    this.rows[index].prixTotal = this.rows[index].prixU * this.rows[index].boutique

                                console.log('prix')
                                console.log(this.rows[index])

                                this.info.montantFacture = this.rows[index].prixTotal + this.info.montantFacture

                            }
                        }
                    }
                }
            },
            reste: function() {
                let rst = 0;
                let smv = 0;
                let total = 0;

                if (this.info.remise || this.info.sommeVersee) {
                    if (this.info.remise >= 0) {
                        rst = this.info.remise
                    }
                    if (this.info.sommeVersee >= 0) {
                        smv = this.info.sommeVersee
                    }
                    total = this.info.montantFacture - smv - rst
                    this.info.sommeRestante = total

                }

            },
            ajouter: function() {

                this.$validator.validateAll().then(result => {
                    if (result) {
                        let cli = null;
                        this.$vs.loading({
                            type: 'radius',
                            container: '.form-loading',
                            scale: 1.2
                        })
                        if (!this.disabled) {
                            if (this.client.id)
                                cli = this.client.id
                            else
                                cli = this.client

                            this.$store.dispatch('commandeVente', {
                                'vente': this.rows,
                                'id': this.info.id,
                                'client': cli,
                                'sommeRestante': this.info.sommeRestante,
                                'sommeVersee': this.info.sommeVersee,
                                'montantFacture': this.info.montantFacture,
                                'remise': this.info.remise,
                                'bon': this.info.bon,
                            })

                        } else {

                            if (this.info.id) {
                                console.log('edit')
                                if (this.client.id)
                                    cli = this.client.id
                                else
                                    cli = this.client
                                this.$store.dispatch('editCommande', {
                                    'vente': this.rows,
                                    'id': this.info.id,
                                    'client': cli,
                                    'sommeRestante': this.info.sommeRestante,
                                    'sommeVersee': this.info.sommeVersee,
                                    'montantFacture': this.info.montantFacture,
                                    'remise': this.info.remise,
                                })

                            } else {
                                console.log('add')
                                this.$store.dispatch('addCommande', [this.rows, this.info])
                            }
                        }
                    } else {
                        // form have errors
                    }
                })

            },
            editCommande: function(data) {
                console.log('data')
                var cor = null;
                var rak = null;
                var bou = null;
                var pt = null;
                this.rows = [];
                this.info = [];
                var objA = {}
                var clientInfo = {}
                this.info.id = data.id

                this.info.montantFacture = this.info.sommeRestante = data.montantCommande
                this.info.remise = 0
                this.info.sommeVersee = 0

                this.client = data.nomClient
                if (data.nomTel > 0) {
                    Object.values(this.$store.state.listeClient).forEach(key => {
                        if (key.id == data.nomTel) {
                            console.log(key)
                            clientInfo.id = key.id
                            clientInfo.label = key.nomClient + '  ' + key.telephoneClient
                            clientInfo.compte = key.compte[key.compte.length - 1].soldeActuel
                        }

                    })
                    this.client = clientInfo
                } else {
                    //                    clientInfo.id = ''
                    //                    clientInfo.label = data.nomTel
                    this.client = data.nomTel
                    console.log(this.client)
                }

                //                this.client = clientInfo

                Object.values(data.types).forEach(key => {
                    if (key.pivot.magasin_id == 1) {
                        bou = key.pivot.quantite
                        pt = key.pivot.quantite * key.pivot.prixUnitaire
                    } else {
                        if (key.pivot.magasin_id == 2) {
                            rak = key.pivot.quantite
                            pt = key.pivot.quantite * key.pivot.prixUnitaire
                        } else {
                            cor = key.pivot.quantite
                            pt = key.pivot.quantite * key.pivot.prixUnitaire
                        }
                    }


                    objA.id = key.id
                    objA.label = key.article.designation + ' ' + key.nomType
                    this.rows.push({
                        prixTotal: pt,
                        prixU: key.pivot.prixUnitaire,
                        rakieta: rak,
                        coram: cor,
                        article: objA,
                        boutique: bou,
                    });
                    objA = {}
                    cor = null;
                    rak = null;
                    bou = null;
                    pt = null;
                })
                this.info.bon = false
                this.vendre = false

            },
            suppCommande: function(data) {
                this.$store.dispatch('deleteCommande', data)
            }

        },
        beforeDestroy() {
            if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
        }

    }

</script>
