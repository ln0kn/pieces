<template>

    <vs-tabs v-model="act">
        <vs-tab label="Stock">
            <div class="tab-text">
                <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
                    <vs-col class="pr-5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
                        <vx-card title="Etat du stock">

                            <vs-table search pagination :data="etatStock" max-items="8">
                                <template slot="thead">
                                    <vs-th> Article </vs-th>
                                    <vs-th> Lieu </vs-th>
                                    <vs-th> quantite </vs-th>
                                    <vs-th> option </vs-th>
                                </template>


                                <template slot-scope="{data}">


                                    <vs-tr :key="ind" v-for="(trex, ind) in data">
                                        <vs-td>{{trex['article']}} </vs-td>
                                        <vs-td>{{trex['magasin']}} </vs-td>
                                        <vs-td>{{trex['quantie']}} </vs-td>
                                        <vs-td>
                                            <vs-button @click="ajuster(trex)" size="small"> Ajuster </vs-button>
                                        </vs-td>
                                    </vs-tr>

                                </template>
                            </vs-table>

                        </vx-card>
                    </vs-col>
                </vs-row>
            </div>
        </vs-tab>
        <vs-tab label="Ajustement">
            <div class="tab-text">
                <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
                    <vs-col class="pr-5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">

                        <vx-card title="Nouvelle ajustement">
                            <form class="form-loading">
                                <vs-input type="w-full" v-model="ajustement.id" v-show="false" />
                                <vs-input type="w-full" v-model="ajustement.magasin_id" v-show="false" />

                                <vs-input class="w-full" label="Lieu" v-validate="'required'" name="lieu" v-model="ajustement.magasin" disabled />
                                <span class="text-danger text-sm" v-show="errors.has('lieu')">{{ errors.first('lieu') }}</span>
                                
                                <vs-input class="w-full" label="Article" v-validate="'required'" name="article" v-model="ajustement.article" disabled />
                                <span class="text-danger text-sm" v-show="errors.has('article')">{{ errors.first('article') }}</span>

                                <vs-input class="w-full" label="quantité actuelle" v-validate="'required'" v-model="ajustement.quantiteActuelle" name="quantiteActuelle" disabled />
                                <span class="text-danger text-sm" v-show="errors.has('quantiteActuelle')">{{ errors.first('quantiteActuelle') }}</span>


                                <vs-input class="w-full" label="quantité physique" v-validate="'required'" v-model="ajustement.quantitePhysique" name="quantitePhysique" />
                                <span class="text-danger text-sm" v-show="errors.has('quantitePhysique')">{{ errors.first('quantitePhysique') }}</span>

                                <vs-button type="filled" @click.prevent="addAjustement" class="mt-5 block">AJOUTER</vs-button>
                            </form>
                        </vx-card>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                        <vx-card title="Ajustements réalisés">

                            <vs-table search pagination :data="listeAjustement" max-items="2">
                                <template slot="thead">
                                    <vs-th>Article </vs-th>
                                    <vs-th> magasin </vs-th>
                                    <vs-th>Qt. Numerique</vs-th>
                                    <vs-th>Qt. Physique</vs-th>

                                </template>
                                <template slot-scope="{data}">
                                    <vs-tr :key="index" v-for="(tr, index) in data">
                                        <vs-td>
                                            {{ tr['type']['article'].designation }} {{ tr['type'].nomType }}
                                        </vs-td>
                                        <vs-td>
                                            {{ tr['mag']['libelle'] }}
                                        </vs-td>
                                        <vs-td>
                                            {{ tr['quantiteNumerique']}}
                                        </vs-td>
                                        <vs-td>
                                            {{ tr['quantitePhysique']}}
                                        </vs-td>

                                    </vs-tr>
                                </template>
                            </vs-table>
                        </vx-card>
                    </vs-col>
                </vs-row>
            </div>
        </vs-tab>

        <vs-tab label="Casse">
            <div class="grid-layout-container alignment-block">
                <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
                    <vs-col class="pr-5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="7">
                        <vx-card title="Nouvelle Casse" collapse-action>
                            <form class="form-loading">
                                <div class="vx-row">
                                    <div class="vx-col w-1/3">
                                        <vs-input v-model="casse.id" v-show="false" name="idt" class="w-full" />

                                    </div>
                                    <div class="vx-col w-full mt-0">
                                        <table class="table table-dark-inverted">
                                            <tr>
                                                <th>Magasin</th>
                                                <th>Article</th>
                                                <th>Quantité</th>
                                                <th>Action</th>
                                            </tr>
                                            <tr v-for="(item, index) in casse" :key="index">

                                                <vs-td width="30%">
                                                    <v-select size="small" v-model="item.magasin" name="magasin" label="libelle" :options="magasinOptions" />
                                                </vs-td>
                                                <vs-td width="45%">
                                                    <v-select v-model="item.article" label="label" :options="articleOptions" name="label" />
                                                </vs-td>

                                                <vs-td width="3%">
                                                    <vs-input v-model="item.quantite" name="quantite" class="w-full qty" />
                                                </vs-td>
                                                <vs-td width="15%">
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
                                                    <vs-button color="primary" type="border" class="ml-3 mb-1" @click.prevent="submitForm">Valider</vs-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </vx-card>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="5">
                        <vx-card title="Liste des Casses" collapse-action>

                            <vs-table :data="listeCasse" search pagination max-items="5">
                                <template slot="thead">
                                    <vs-th>Réference</vs-th>
                                    <vs-th>Options</vs-th>
                                </template>
                                <template slot-scope="{data}">
                                    <vs-tr :key="indext" v-for="(tr, indext) in data">
                                        <vs-td>
                                            {{ tr.refCas }}
                                        </vs-td>
                                        <vs-td>
                                            <div class="btn-group">
                                                <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click="editCasse(tr)" />
                                                <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="suppCasse(tr)" />
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
                casse: [{
                    id: "",
                    magasin: "",
                    article: "",
                    quantite: "",
                }, ],
                act: 0,
                ajustement: {
                    id: null,
                    magasin_id: null,
                    magasin: null,
                    article: null,
                    quantiteActuelle: null,
                    quantitePhysique: null,
                },
                wasSidebarOpen: null,
            }
        },
        computed: {
            magasinOptions() {
                return this.$store.state.listeMagasin
            },

            listeCasse() {
                return this.$store.state.listeCasse
            },
            etatStock() {
                return this.$store.state.etatStock
            },

            articleOptions() {
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

            listeAjustement() {
                return this.$store.state.listeAjustement
            }
        },
        mounted() {
            this.wasSidebarOpen = this.$store.state.reduceButton;
            this.$store.commit('TOGGLE_REDUCE_BUTTON', true)

            this.$store.dispatch('getAjustement')
            this.$store.dispatch('getMagasin')
            this.$store.dispatch('getTypArt')
            this.$store.dispatch('getCasse')
            this.$store.dispatch('gotStock')
        },
        methods: {
            ajuster: function(data) {
                console.log(data)
                this.ajustement.magasin_id = data.magasin_id
                this.ajustement.magasin = data.magasin
                this.act = 1;
//
//                this.act = 1;
                this.ajustement.id = data['type_id']
                this.ajustement.article = data['article']
                this.ajustement.quantiteActuelle = data['quantie']
            },
            addAjustement: function() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$vs.loading({
                            type: 'radius',
                            container: '.form-loading',
                            scale: 1.2
                        })
                        this.$store.dispatch('addAjustement', this.ajustement)
                    } else {
                        // form have errors
                    }
                })
            },

            addRow: function(index) {
                try {
                    this.casse.splice(index + 1, 0, {});
                } catch (e) {
                    console.log(e);
                }
            },

            removeRow: function(index) {
                if (index > 0)
                    this.casse.splice(index, 1);
            },

            submitForm(event) {
                this.$vs.loading({
                    type: 'radius',
                    container: '.form-loading',
                    scale: 1.2
                })
                if (this.casse.id) {
                    this.$store.dispatch('editCasse', this.casse)
                } else {
                    this.$store.dispatch('addCasse', this.casse)

                }
            },

            suppCasse(data) {
                this.$store.dispatch('deleteCasse', data)
                console.log(data)
            },

            editCasse(data) {
                this.casse = []
                this.casse.id = data.id
                Object.values(data.types).forEach(key => {
                    Object.values(this.$store.state.listeMagasin).forEach(k => {

                        if (key.pivot.magasin_id === k.id) {
                            this.casse.push({
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


        },
        beforeDestroy() {
            if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
        },
        components: {
            'v-select': vSelect,
        },
    }

</script>
