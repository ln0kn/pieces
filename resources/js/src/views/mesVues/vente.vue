<template>
    <div class="vx-row">
        <vx-card class='mb-5' title="Nouvelle vente" collapseAction>
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
                                <vs-input label="Compte client" disabled v-model="info.compte" class="w-full" />
                            </div>
                            <div class="vx-col w-1/2">
                                <vs-input label="Montant de la facture" disabled v-model="info.montantFacture" class="w-full" />
                            </div>
                            <div class="vx-col w-1/2">
                                <vs-input v-validate="'required|numeric'" label="Montant remise" name="remise" v-model="info.remise" @keyup="reste('remise')" class=" w-full" />
                                <span class="text-danger text-sm" v-show="errors.has('remise')">{{ errors.first('remise') }}</span>
                            </div>
                            <div class="vx-col w-1/2">
                                <vs-input label="Somme Versée" v-validate="'required|numeric'" name="sommeVersee" v-model="info.sommeVersee" class="w-full" @keyup="reste('sommeVersee')" />
                                <span class="text-danger text-sm" v-show="errors.has('sommeVersee')">{{ errors.first('sommeVersee') }}</span>
                            </div>
                            <div class="vx-col w-1/2">
                                <vs-input type="number" label="Somme restante" disabled v-model="info.sommeRestante" class="w-full" />
                            </div>
                            <div class="vx-col w-1/2">
                                <vs-checkbox v-model="info.bon" class="mt-5">Bon d'enlèvement</vs-checkbox>
                            </div>
                            <vs-divider></vs-divider>
                            <div class="vx-col w-1/2">
                                <vs-button color="primary" @click="vendre" type="filled" class="mt-8">Vendre</vs-button>
                            </div>
                            <div class="vx-col w-1/2">
                                <vs-button color="primary" @click="refresh" type="filled" class="mt-8">Nouvelle </vs-button>
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

        <vx-card title="Liste vente" collapseAction>
            <vs-table search pagination :data="listeVente" max-items="3">
                <template slot="thead">
                    <vs-th sort-key="designation">identifiant</vs-th>
                    <vs-th>date</vs-th>
                    <vs-th>option</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                        <vs-td :data="data[indextr].referenceVente">
                            {{ data[indextr].referenceVente }}
                        </vs-td>
                        <vs-td>
                            {{data[indextr].created_at}}
                        </vs-td>

                        <vs-td>
                            <div class="btn-group">
                                <!--
                                <vs-button size="small" @click="editVente(tr)">Modifier</vs-button>
                                <vs-button size="small" @click="suppVente(tr)">Supprimer</vs-button>
                                <vs-button @click="printme(tr.id)" color="success"> pdf </vs-button>
-->

                                <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary cursor-pointer" @click.stop="editVente(tr)" />
                                <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger cursor-pointer" class="ml-2" @click.stop="suppVente(tr)" />
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
                info: {
                    compte: null,
                    montantFacture: null,
                    remise: null,
                    sommeVersee: null,
                    sommeRestante: null,
                    client: null,
                    bon: null,
                    id: null,
                },
                client: null,
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
                console.log(this.$store.state.listeClient)
                Object.values(this.$store.state.listeClient).forEach(key => {
                    obj.push({
                        id: key.id,
                        label: key.nomClient + ' ' + key.telephoneClient,
                        compte: key.compte[key.compte.length - 1].soldeActuel
                    })
                })
                return obj;
            },
            listeVente() {
                //                console.log(this.$store.state.listeVente)
                return this.$store.state.listeVente
            }

        },
        mounted() {
            this.wasSidebarOpen = this.$store.state.reduceButton;
            this.$store.commit('TOGGLE_REDUCE_BUTTON', true);
            this.$store.dispatch('getVente')
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
                } catch (e) {
                    console.log(e);
                }
            },
            removeRow: function(index) {
                if (index > 0)
                    this.rows.splice(index, 1);
            },
            callFunction: function() {

                var currentDate = new Date();
                //                console.log(currentDate);

                var currentDateWithFormat = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
                //                console.log(currentDateWithFormat);

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
            reste: function(index) {
                if (this.info.remise && this.info.sommeVersee) {
                    this.info.sommeRestante = this.info.montantFacture - this.info.remise - this.info.sommeVersee
                } else {
                    if (this.info.remise)
                        this.info.sommeRestante = this.info.montantFacture - this.info.remise - 0

                    else
                        this.info.sommeRestante = this.info.montantFacture - 0 - this.info.sommeVersee
                }

            },
            vendre: function() {

                this.$validator.validateAll().then(result => {
                    if (result) {
                        //                        this.$vs.loading({
                        //                            type: 'radius',
                        //                            container: '.form-loading',
                        //                            scale: 1.2
                        //                        })
                        if (this.info.id) {
                            //                            console.log(this.rows)
                            this.$store.dispatch('editVente', {
                                'vente': this.rows,
                                'id': this.info.id,
                                'client': this.info.client,
                                'sommeRestante': this.info.sommeRestante,
                                'sommeVersee': this.info.sommeVersee,
                                'montantFacture': this.info.montantFacture,
                                'remise': this.info.remise,
                            })

                        } else {
                            this.$store.dispatch('addVente', [this.rows, this.info])
                        }
                        //                        this.$store.dispatch('getStock')
                    } else {
                        // form have errors
                    }
                    //                    console.log(this.rows)
                })

            },
            editVente: function(data) {
                var cor = null;
                var rak = null;
                var bou = null;
                var pt = null;
                this.rows = [];
                this.info = [];
                var objA = {}
                var clientInfo = {}
                this.info.id = data.id
                this.info.compte = data.id
                this.info.montantFacture = data.prixTotal
                this.info.sommeVersee = data.sommeVersee

                this.info.sommeRestante = data.reliquat
                this.info.remise = data.remise
                Object.values(data.client.compte).forEach(key => {
                    clientInfo.compte = key.soldeActuel
                })
                Object.values(data.articles).forEach(key => {
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
                clientInfo.id = data.client.id
                clientInfo.label = data.client.nomClient + '  ' + data.client.telephoneClient
                this.client = clientInfo

            },
            suppVente: function(data) {
                this.$store.dispatch('deleteVente', data)
            },
            refresh: function() {
                this.client = null;
                this.info= {
                    compte: null,
                    montantFacture: null,
                    remise: null,
                    sommeVersee: null,
                    sommeRestante: null,
                    client: null,
                    bon: null,
                    id: null,
                };
                this.rows= [{
                    prixTotal: null,
                    prixU: null,
                    rakieta: null,
                    coram: null,
                    boutique: null,
                    article: null,
                }];
            }

        },
        beforeDestroy() {
            if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
        }
    }

</script>
