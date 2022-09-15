<template>
    <div class="grid-layout-container alignment-block">
        <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
            <vs-col class="pr-5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
                <vx-card title="Nouvelle dépense" collapse-action>
                    <form class="form-loading">

                        <vs-input v-model="depense.id" v-show="false" />
                        <label class="vs-input--label">Montant de la dépense:</label>
                        <vs-input v-model="depense.montant" class="w-full mb-3" v-validate="'required'" placeholder="x.xxx.xxxF.CFA" name="montant" />
                        <span class="text-danger text-sm " v-show="errors.has('montant')"> {{ errors.first('montant') }} </span>

                        <label class="vs-input--label">Motif de la dépense:</label>
                        <vs-textarea v-validate="'required'" counter="40" label="Motif en 40 mots:" :counter-danger.sync="counterDanger" v-model="depense.motif" name="motif" />
                        <span class="text-danger text-sm " v-show="errors.has('motif')"> {{ errors.first('motif') }} </span>

                        <vs-button color="primary" type="border" class="ml-3 mb-1 mt-1" @click.prevent="submitForm">AJOUTER</vs-button>

                    </form>

                </vx-card>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="7">

                <vx-card title="Liste des dépenses" collapse-action>
                    <vs-table :data="listeDepense" search pagination max-items="5">
                        <template slot="thead">
                            <vs-th>Ref</vs-th>
                            <vs-th>Montant</vs-th>
                            <vs-th>Motif</vs-th>
                            <vs-th>Options</vs-th>
                        </template>
                        <template slot-scope="{data}">
                            <vs-tr :key="indext" v-for="(tr, indext) in data">
                                <vs-td :data="tr.ref">
                                    {{tr.ref}}
                                </vs-td>
                                <vs-td :data="tr.montant">
                                    {{tr.montant}}
                                </vs-td>
                                <vs-td :data="tr.motif">
                                    {{tr.motif}}
                                </vs-td>
                                <vs-td>
                                    <div class="btn-group">
                                        <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary cursor-pointer" @click="editDepense(tr)" />
                                        <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger cursor-pointer" class="ml-2" @click="suppDepense(tr)" />
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
                depense: {
                    id: "",
                    montant: "",
                    motif: "",
                },
                counterDanger: false,
            }
        },

        mounted() {
            this.$store.dispatch('getDepense')
        },

        computed: {
            listeDepense() {
                return this.$store.state.listeDepense
            }
        },


        methods: {

            submitForm(event) {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$vs.loading({
                            type: 'radius',
                            container: '.form-loading',
                            scale: 1.2
                        })
                        if (this.depense.id) {
                            this.$store.dispatch('editDepense', this.depense)
                            //                    this.$store.dispatch('depenseModule/editDepense', this.depense)
                        } else {
                            var x = this.depense.montant;
                            var y = this.depense.motif;
                            if (x && y) {
                                this.$store.dispatch('addDepense', this.depense)
                                //                        this.$store.dispatch('depenseModule/addDepense', this.depense)
                                // console.log(x)
                            }
                        }
                    } else {
                        this.$vs.notify({
                            title: " Vérifier, vous ne pouvez pas effectuer de dépense sans un montant et un motif !",
                            color: 'warning',
                            time: 5000,
                            i: 'top-right',
                            icon: 'query_builder'
                        })
                    }


                })

            },

            editDepense(data) {
                this.depense.id = data.id
                this.depense.montant = data.montant
                this.depense.motif = data.motif
                //console.log(data)
            },

            suppDepense(data) {
                // this.depense.id = data.id
                this.$store.dispatch('deleteDepense', data)
//                this.$store.dispatch('depenseModule/deleteDepense', data)
                //console.log(data.id)
            },

        }
    }

</script>
