<template>
    <div class="grid-layout-container alignment-block">
        <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
            <vs-col class="pr-5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="7">
                <vx-card title="Nouveau magasin">
                    <form class="form-loading">
                        <div class="vx-row">
                            <div class="vx-col w-1/3">
                                <vs-input v-model="approvisionnement.id" v-show="false" name="idt" class="w-full" />
                            </div>

                            <div class="vx-col w-full mt-0">
                                <table class="table table-dark-inverted">
                                    <tr>
                                        <th>#</th>
                                        <th>Magasin</th>
                                        <th>Article</th>
                                        <th>Quantité</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr v-for="(item, index) in approvisionnement" :key="index">
                                        <vs-td width="1%">{{index + 1}}</vs-td>

                                        <vs-td width="30%">
                                            <v-select size="small" v-model="item.magasin" name="magasin" label="libelle" :options="magasinOptions" />
                                        </vs-td>

                                        <vs-td width="50%">
                                            <v-select v-model="item.article" label="label" :options="articleOptions" name="label" />
                                        </vs-td>
                                        <vs-td>
                                            <vs-input v-model="item.quantite" name="quantite" class="w-full qty" />
                                        </vs-td>
                                        <vs-td width="15%">
                                            <div class="btn-group">
                                                <vs-button size="small" @click="removeRow(index)" color="danger"></vs-button>
                                                <vs-button @click="addRow(index)" size="small"></vs-button>
                                            </div>
                                        </vs-td>
                                    </tr>
                                </table>

                                <div class="vx-row">
                                    <div class="vx-col w-1/4">
                                        <vs-button color="primary" @click.prevent="submitForm" type="filled" class="mt-8">Valider</vs-button>
                                    </div>
                                    <div class="vx-col w-1/2">
                                        <vs-button color="primary" @click="refresh" type="filled" class="mt-8">Nouvelle </vs-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </vx-card>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="5">
                <vx-card title="Liste magasin">
                    <vs-table :data="listeApprovisionnement" search pagination max-items="5">
                        <template slot="thead">
                            <vs-th>Réference</vs-th>
                            <vs-th>Options</vs-th>
                        </template>
                        <template slot-scope="{data}">
                            <vs-tr :key="indext" v-for="(tr, indext) in data">
                                <vs-td width="1%">
                                    {{ tr.identifiant }}
                                </vs-td>
                                <vs-td width="2%">
                                    <div class="btn-group">
                                        <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary cursor-pointer" @click.stop="editAppro(tr)" />
                                        <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger cursor-pointer" class="ml-2" @click.stop="suppAppArt(tr)" />
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
                approvisionnement: [{
                    id: "",
                    magasin: "",
                    article: "",
                    quantite: "",
                }, ],

                ku: [{
                    id: "",
                    magasin: "",
                    article: "",
                    quantite: ""
                }],
                wasSidebarOpen: null,
            }
        },

        mounted() {
            this.wasSidebarOpen = this.$store.state.reduceButton;
            this.$store.commit('TOGGLE_REDUCE_BUTTON', true)

            this.$store.dispatch('getMagasin')
            this.$store.dispatch('getTypArt')
            this.$store.dispatch('getApprovisionnement')

        },

        computed: {
            magasinOptions() {

                //                return this.$store.state.listeMag.listeAppMag
                return this.$store.state.listeMagasin
            },

            listeApprovisionnement() {
                return this.$store.state.listeApprovisionnement
                //              return this.$store.state.listeAppro.listeApprovisionnement  
            },

            articleOptions() {
                var ArtType = []
                Object.values(this.$store.state.listeTypArt).forEach(key => {
                    //            Object.values(this.$store.state.listeArtEmb.listeTypArt).forEach(key=>{
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
                    this.approvisionnement.splice(index + 1, 0, {});
                } catch (e) {
                    console.log(e);
                }
            },

            removeRow: function(index) {
                if (index > 0)
                    this.approvisionnement.splice(index, 1);
            },

            submitForm(event) {
                this.$vs.loading({
                    type: 'radius',
                    container: '.form-loading',
                    scale: 1.2
                })

                if (this.approvisionnement.id) {
                    this.$store.dispatch('editApprovisionnement', this.approvisionnement)
                } else {
                    this.$store.dispatch('addApprovisionnement', this.approvisionnement)
                }
            },

            suppAppArt(data) {
                this.$store.dispatch('deleteApprovisionnement', data)
            },

            editAppro(data) {
                this.approvisionnement = [],
                    this.approvisionnement.id = data.id,
                    Object.values(data.types).forEach(key => {

                        Object.values(this.$store.state.listeMagasin).forEach(k => {

                            if (key.pivot.magasin_id === k.id) {
                                this.approvisionnement.push({
                                    id: data.id,
                                    quantite: key.pivot.quantite,
                                    article: {
                                        id: key.pivot.type_id,
                                        label: key.article.designation + " " + key.nomType
                                    },
                                    magasin: {
                                        id: key.pivot.magasin_id,
                                        libelle: k.libelle
                                    }

                                })
                            }
                        })

                    })
            },
            
            refresh: function() {
               this.approvisionnement= [{
                    id: "",
                    magasin: "",
                    article: "",
                    quantite: "",
                } ]

            }
            

        },
        beforeDestroy() {
            if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
        },


        components: {
            'v-select': vSelect,
        },
    }

</script>
