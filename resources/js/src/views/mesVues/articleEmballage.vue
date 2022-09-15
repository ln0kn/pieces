<template>
    <vs-tabs>
        <vs-tab label="Article">
            <div class="tab-text">
                <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
                    <vs-col class="pr-5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
                        <vx-card title="Nouvel Article">
                            <form class="form-loading">
                                <vs-input type="w-full" v-show="false" v-model="article.id" />

                                <vs-input class="w-full" label="Designation Article" v-validate="'required'" placeholder="designation article" v-model="article.designation" name="designation" />
                                <span class="text-danger text-sm" v-show="errors.has('designation')">{{ errors.first('designation') }}</span>

                                <div class="mt-4">
                                    <label class="vs-input--label">Emballage</label>
                                    <v-select v-model="article.emballage" :clearable="false" v-validate="'required'" :options="emballageOptions" name="emballage" :dir="$vs.rtl ? 'rtl' : 'ltr'" label="libelle" />
                                    <span class="text-danger text-sm" v-show="errors.has('emballage')">{{ errors.first('emballage') }}</span>
                                </div>

                                <div class="mt-4">
                                    <label class="vs-input--label">Type</label>
                                    <v-select v-model="article.type" v-validate="'required'" :options="typeOptions" taggable multiple :dir="$vs.rtl ? 'rtl' : 'ltr'" name="type" />
                                    <span class="text-danger text-sm" v-show="errors.has('type')">{{ errors.first('type') }}</span>
                                </div>
                                <vs-button type="filled" @click.prevent="submitFormArticle" class="mt-5 block">AJOUTER</vs-button>
                            </form>
                        </vx-card>
                    </vs-col>

                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                        <vx-card title="liste Article">
                            <vs-table search pagination :data="listeArticle" max-items="3">

                                <template slot="thead">
                                    <vs-th sort-key="designation">designation</vs-th>
                                    <vs-th>type</vs-th>
                                    <vs-th>emballage</vs-th>
                                    <vs-th>option</vs-th>
                                </template>

                                <template slot-scope="{data}">
                                    <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                                        <vs-td :data="data[indextr].designation">
                                            {{ data[indextr].designation }}
                                        </vs-td>
                                        <vs-td>
                                            <span v-for="(val, index) in tr.types">
                                                {{val.nomType}},
                                            </span>
                                        </vs-td>
                                        <vs-td>
                                            {{tr.emballage.libelle}}
                                        </vs-td>

                                        <vs-td>
                                            <div class="btn-group">
                                                <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary cursor-pointer" @click.stop="editArticle(tr)" />
                                                <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger cursor-pointer" class="ml-2" @click.stop="suppArticle(tr)" />
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
        <vs-tab label="Emballage">
            <div class="tab-text">
                <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
                    <vs-col class="pr-5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
                        <vx-card title="Nouvel Emballage" >
                            <form class="form-loading">
                                <vs-input type="w-full" v-model="emballage.id" v-show="false" />

                                <vs-input class="w-full" label="Libelle emballage" v-validate="'required'" placeholder="libelle" name="libelle" v-model="emballage.libelle" id="inp" />
                                <span class="text-danger text-sm" v-show="errors.has('libelle')">{{ errors.first('libelle') }}</span>

                                <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">AJOUTER</vs-button>
                            </form>
                        </vx-card>
                    </vs-col>

                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="7">
                        <vx-card title="liste Emballage" >
                            <vs-table search pagination :data="listeEmballage" max-items="7">

                                <template slot="thead">
                                    <vs-th sort-key="libelle">libelle</vs-th>
                                    <vs-th>option</vs-th>
                                </template>

                                <template slot-scope="{data}">
                                    <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                                        <vs-td :data="data[indextr].libelle">
                                            {{ data[indextr].libelle }}
                                        </vs-td>
                                        <vs-td>
                                            <div class="btn-group">
                                                <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary cursor-pointer" @click.stop="edit(tr)" />
                                                <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger cursor-pointer" class="ml-2" @click.stop="supp(tr)" />
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
                emballage: {
                    id: null,
                    libelle: null
                },
                article: {
                    id: null,
                    designation: null,
                    type: null,
                    emballage: null,
                },
                emballageOptions: [],
                typeOptions: [],
            }
        },
        computed: {
            listeEmballage() {
                this.emballageOptions = this.$store.state.listeEmballage
                return this.$store.state.listeEmballage
            },
            listeArticle() {
                return this.$store.state.listeArticle
            }
        },
        mounted() {
            this.$store.dispatch('getEmballage')
            this.$store.dispatch('getArticle')
        },
        methods: {
            submitForm() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$vs.loading({
                            type: 'radius',
                            container: '.form-loading',
                            scale: 1.2
                        })
                        if (this.emballage.id) {
                            this.$store.dispatch('editEmballage', this.emballage)
                        } else {
                            this.$store.dispatch('addEmballage', this.emballage)
                        }
                    } else {
                        // form have errors
                    }
                })
            },

            submitFormArticle() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$vs.loading({
                            type: 'radius',
                            container: '.form-loading',
                            scale: 1.2
                        })
                        if (this.article.id) {
                            this.$store.dispatch('editArticle', this.article)
                        } else {
                            this.$store.dispatch('addArticle', this.article)
                        }
                    } else {
                        // form have errors
                    }
                })
            },

            edit(data) {
                this.emballage.id = data.id
                this.emballage.libelle = data.libelle
            },

            editArticle(data) {
                var i = 0;
                var tab = [];
                this.article.id = data.id
                this.article.designation = data.designation
                this.article.emballage = data.emballage
                Object.values(data.types).forEach(key => {
                    tab[i] = key.nomType
                    i++;
                });
                this.article.type = tab

            },

            supp(data) {
                this.emballage.id = data.id
                this.$store.dispatch('deleteEmballage', this.emballage)
            },
            suppArticle(data) {
                this.article.id = data.id
                this.$store.dispatch('deleteArticle', this.article)
            },
        },
        components: {
            'v-select': vSelect,
        }
    }

</script>
