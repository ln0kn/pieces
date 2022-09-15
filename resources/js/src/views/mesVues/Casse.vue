<template>
    <div class="grid-layout-container alignment-block">
        <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
            <vs-col class="pr-5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="7">
                <vx-card title="Nouvelle Casse" collapse-action>
                    <form class="form-loading">
                        <<div class="vx-row">
                            <div class="vx-col w-1/3">
                                <vs-input v-model="casse.id" v-show="true" name="idt" class="w-full" />
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
                                        <vs-td width="20%">
                                            <v-select size="small" v-model="item.magasin" name="magasin" label="libelle" :options="magasinOptions" />
                                        </vs-td>
                                        <vs-td>
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
                                            <vs-button color="primary" type="border" class="ml-3 mb-1 mt-1" @click.prevent="submitForm">Valider</vs-button>
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
            <template>
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
            </template>
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

                casse: [{
                    id: "",
                    magasin: "",
                    article: "",
                    quantite: "",
                }, ],
            }
        },
        //Deux modules sont exterieurs utlisés  MAGASIN ARTICLE_EMBALLAGE 
        mounted() {
            this.$store.dispatch('getAppMag')
            this.$store.dispatch('getTypArt')
            this.$store.dispatch('getCasse')
        },
        // Deux listes exterieurs sont utlisés 
        computed: {
            magasinOptions() {
                // this.magasinOptions=this.$store.state.listeMag.listeAppMag
                //console.log(this.magasinOptions)
                return this.$store.state.listeAppMag
            },

            listeCasse() {
                return this.$store.state.listeCasse
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
                    this.$store.dispatch('casseModule/editCasse', this.casse)
                } else {
                    this.$store.dispatch('casseModule/addCasse', this.casse)

                }
            },

            suppCasse(data) {
                this.$store.dispatch('casseModule/deleteCasse', data)
                console.log(data)
            },

            editCasse(data) {
                this.casse = []
                this.casse.id = data.id
                Object.values(data.types).forEach(key => {
                    Object.values(this.$store.state.listeMag.listeAppMag).forEach(k => {

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


        components: {
            'v-select': vSelect,
        },
    }

</script>
