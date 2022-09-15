<template>
    <div class="grid-layout-container alignment-block">
        <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
            <vs-col class="pr-5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <vx-card title="Nouveau transfert" collapse-action>
                    <form class="form-loading">
                        
                            <div class="vx-row">
                            <div class="vx-col w-1/3">
                                <vs-input v-model="transfert.id" v-show="false" name="idt" class="w-full" />
                            </div>
                                <div class="vx-col w-full mt-0">
                                    <table class="table table-dark-inverted">
                                        <tr>
                                            <th>Magasin Départ</th>
                                            <th>Article</th>
                                            <th>Quantité</th>
                                            <th>Magasin Arrivée</th>
                                            <th>Action</th>
                                        </tr>
                                        
                                        <tr v-for="(row,index) in transfert" :key="index">

                                            <vs-td width="23%">
                                                <v-select size="small" v-model="row.magasinDepart" name="magasinDepart" label="libelle" :options="magasinDepOptions" />
                                            </vs-td>
                                            <vs-td width="29%">
                                                <v-select v-model="row.article" label="label" :options="articleOptions" name="article" />
                                            </vs-td>

                                            <vs-td width="3%">
                                                <vs-input v-model="row.quantite" name="quantite" class="w-full qty" />
                                            </vs-td>
                                            <vs-td width="23%">
                                                <v-select size="small" v-model="row.magasinArrive" name="magasinArrivee" label="libelle" :options="magasinArrOptions" />
                                            </vs-td>
                                            <vs-td >
                                                <div class="btn-group">
                                                    <vs-button @click="addRow(index)" size="small"></vs-button>
                                                    <vs-button size="small" @click="removeRow(index)" color="danger"></vs-button>
                                                </div>
                                            </vs-td>

                                        </tr>
                                    </table>

                                    <div class="vx-row">
                                        <div class="vx-row mt-5">
                                            <div class="vx-col w-full">
                                                <vs-button color="primary" type="border" class="ml-3 mb-1 mt-1" @click.prevent="submitFormTransfert">TRANSFERER</vs-button>
                                                <vs-button color="warning" type="border" class="ml-3 mb-1 mt-1">EFFACER</vs-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </form>
                </vx-card>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                    <vx-card title="Liste des transferts" collapse-action>
                            <vs-table :data="listeTransfert" search pagination max-items="5">
                                <template slot="thead">
                                    <vs-th>Réf</vs-th>
                                    <vs-th>Options</vs-th>
                                </template>
                                <template slot-scope="{data}">
                                    <vs-tr :key="indext" v-for="(tr, indext) in data">
                                        <vs-td>
                                            {{ tr.refTrans }}
                                        </vs-td>
                                        <vs-td>
                                            <div class="btn-group">
                                                <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editTransfert(tr)" />
                                                <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="suppTransfert(tr)" />
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
    import vSelect from 'vue-select'

    export default {
        data() {
            return {
                //magasinOptions:[],

                transfert: [{
                    id: "",
                    magasin: "",
                    article: "",
                    quantite: "",
                }, ],

            }
        },

        mounted() {
            this.$store.dispatch('getMagasin')
            this.$store.dispatch('getTypArt')
            this.$store.dispatch('getTransfert')

        },


        computed: {

            listeTransfert() {
                return this.$store.state.listeTransfert
            },

            magasinDepOptions() {

                this.magasinArrOptions = this.$store.state.listeMagasin
                //console.log(this.magasinOptions)
                return this.$store.state.listeMagasin
            },

            articleOptions() {
                //return this.$store.state.listeArtEmb.listeTypArt
                var ArtType = []
                Object.values(this.$store.state.listeTypArt).forEach(key => {
                    Object.values(key.types).forEach(val => {
                        ArtType.push({
                            id: val.id,
                            label: key.designation + " " + val.nomType
                        })
                    })
                })
                return ArtType
            },
        },

        methods: {
            addRow: function(index) {
                try {
                    this.transfert.splice(index + 1, 0, {});
                } catch (e) {
                    console.log(e);
                }
            },

            removeRow: function(index) {
                if (index > 0)
                    this.transfert.splice(index, 1);
            },

            submitFormTransfert(event) {
                this.$vs.loading({
                    type: 'radius',
                    container: '.form-loading',
                    scale: 1.2
                })
                if (this.transfert.id) {
                    this.$store.dispatch('editTransfert', this.transfert)
                } else {
                    var toSend = [];
                    var nxt = true;
                    var x = null;
                    var y = null;
                    var qte = null;
                    var art = null;
                    Object.values(this.transfert).forEach(key => {
                        x = key.magasinDepart,
                            y = key.magasinArrive,
                            qte = key.quantite,
                            art = key.article
                        if (x == y) {
                            nxt = false,
                                this.$vs.notify({
                                    title: " Vérifier, vous ne pouvez pas tranferer de:" + " " + key.magasinArrive.libelle + " à " + " " + key.magasinArrive.libelle + "",
                                    color: 'warning',
                                    time: 5000,
                                    i: 'top-right',
                                    icon: 'query_builder'
                                })
                        } else {
                            toSend.push(key)
                        }
                    })


                    if (nxt && qte && art) {
                        this.$store.dispatch('addTransfert', toSend)
                    }
                }
            },

            editTransfert(data) {
                this.transfert = [],
                    this.transfert.id = data.id
                Object.values(data.types).forEach(key => {

                    Object.values(this.$store.state.listeMagasin).forEach(k => {

                        Object.values(this.$store.state.listeMagasin).forEach(ka => {
                            if (key.pivot.magasinDepart === k.id && key.pivot.magasinArrive === ka.id) {
                                this.transfert.push({
                                    id: data.id,
                                    quantite: key.pivot.quantite,
                                    article: {
                                        id: key.pivot.type_id,
                                        label: key.article.designation + " " + key.nomType
                                    },
                                    magasinDepart: {
                                        id: key.pivot.magasinDepart,
                                        libelle: k.libelle
                                    },
                                    magasinArrive: {
                                        id: key.pivot.magasinArrive,
                                        libelle: ka.libelle
                                    }

                                })
                            }
                        })
                    })

                })
            },

            suppTransfert(data) {
                this.$store.dispatch('deleteTransfert', data)
            },
        },

        components: {
            'v-select': vSelect,
        },
    }

</script>
