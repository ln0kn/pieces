<template>
    <div class="grid-layout-container alignment-block">
        <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
            <vs-col class="pr-5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
                <vx-card title="Nouveau magasin">
                    <form class="form-loading">
                        <vs-input v-model="magasin.id" v-show="false" />
                        <vs-input class="w-full" v-validate="'required'" label="Magasin" placeholder="Libellé" v-model.trim="magasin.libelle" name="libelle" />
                        <span class="text-danger text-sm" v-show="errors.has('libelle')"> {{ errors.first('libelle') }}</span>
                        <vs-button @click.prevent="submitFormMagasin" class="mt-5">AJOUTER</vs-button>
                    </form>
                </vx-card>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="7">
                <vx-card title="Liste magasin">
                    <vs-table search pagination :data="listeMagasin" max-items="7">
                        <template slot="thead">
                            <vs-th>Magasin</vs-th>
                            <vs-th>Options</vs-th>
                        </template>
                        <template slot-scope="{data}">
                            <vs-tr :key="index" v-for="(tr, index) in data">
                                <vs-td>
                                    {{tr.libelle}}
                                </vs-td>
                                <vs-td :data="tr.libelle">
                                    <div class="btn-group">
                                        <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary cursor-pointer" @click.stop="editMagasin(tr)" />
                                        <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger cursor-pointer" class="ml-2" @click.stop="suppMagasin(tr)" />
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
                magasin: {
                    id: "",
                    libelle: "",
                },
            }
        },

        mounted() {
this.$store.dispatch('getMagasin')
        },

        computed: {
            listeMagasin() {
                return this.$store.state.listeMagasin
            }
        },

        methods: {
            submitFormMagasin(e) {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$vs.loading({
                            type: 'radius',
                            container: '.form-loading',
                            scale: 1.2
                        })
                        if (this.magasin.id) {
                            this.$store.dispatch('editMagasin', this.magasin)
                        } else {
                            this.$store.dispatch('addMagasin', this.magasin)
                        }
                    } else {
                        // form have errors
                    }
                })
            },

            editMagasin(data) {
                this.magasin.id = data.id
                this.magasin.libelle = data.libelle
            },

            suppMagasin(data) {
                this.magasin.id = data.id
                this.$store.dispatch('deleteMagasin', this.magasin)
            },
            
        },
    }

</script>
