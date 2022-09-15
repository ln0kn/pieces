(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/commande.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/commande.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
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
        id: null
      },
      client: null,
      vendre: false,
      rows: [{
        prixTotal: null,
        prixU: null,
        rakieta: null,
        coram: null,
        boutique: null,
        article: null
      }],
      wasSidebarOpen: null
    };
  },
  components: {
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  watch: {
    vendre: function vendre() {
      this.disabled = !this.disabled;
    },
    client: function client() {
      this.info.client = null;
      if (this.client) {
        if (this.client.id) {
          this.info.client = this.client.id;
          this.info.compte = this.client.compte;
        } else {
          this.info.compte = 0;
          this.info.client = this.client;
        }
      } else {
        this.info.compte = null;
      }
      console.log(this.client);
    }
  },
  computed: {
    articleOptions: function articleOptions() {
      var i = 0;
      var obj = [];
      Object.values(this.$store.state.listeArticle).forEach(function (key) {
        Object.values(key.types).forEach(function (val) {
          obj.push({
            id: val.id,
            label: key.designation + ' ' + val.nomType
          });
        });
      });
      return obj;
    },
    clientOptions: function clientOptions() {
      var i = 0;
      var obj = [];
      Object.values(this.$store.state.listeClient).forEach(function (key) {
        obj.push({
          id: key.id,
          label: key.nomClient + ' ' + key.telephoneClient,
          compte: key.compte[0].soldeActuel
        });
      });
      return obj;
    },
    listeCommande: function listeCommande() {
      return this.$store.state.listeCommande;
    }
  },
  mounted: function mounted() {
    this.wasSidebarOpen = this.$store.state.reduceButton;
    this.$store.commit('TOGGLE_REDUCE_BUTTON', true);
    this.$store.dispatch('getCommande');
    this.$store.dispatch('getClient');
    this.$store.dispatch('getArticle');
  },
  methods: {
    addRow: function addRow(index) {
      try {
        this.rows.push({
          prixTotal: null,
          prixU: null,
          rakieta: null,
          coram: null,
          article: null,
          boutique: null
        }); //                    this.rows.splice(index + 1, 0, {});
        //                    console.log(this.rows)
      } catch (e) {
        console.log(e);
      }
    },
    removeRow: function removeRow(index) {
      if (index > 0) {
        this.info.montantFacture = this.info.montantFacture - this.rows[index].prixTotal;
        this.rows.splice(index, 1);
      } else {
        if (index == 0) {
          this.info.montantFacture = 0;
          this.rows[index].prixU = null;
          this.rows[index].prixTotal = null;
          this.rows[index].coram = null;
          this.rows[index].boutique = null;
          this.rows[index].rakieta = null;
          this.rows[index].article = null;
        }
      }
    },
    clear: function clear(index) {
      if (this.rows[index].boutique && this.rows[index].coram && this.rows[index].rakieta && this.rows[index].prixU) {
        console.log(' llll ');
      } else {
        if (this.rows[index].boutique && this.rows[index].coram && this.rows[index].rakieta || this.rows[index].coram && this.rows[index].rakieta && this.rows[index].prixU || this.rows[index].coram && this.rows[index].prixU && this.rows[index].boutique || this.rows[index].rakieta && this.rows[index].prixU && this.rows[index].boutique) {
          console.log('lk');
        } else {
          if (this.rows[index].boutique && this.rows[index].rakieta || this.rows[index].boutique && this.rows[index].coram || this.rows[index].rakieta && this.rows[index].coram) {
            console.log(';kfgf');
          } else {
            if (this.rows[index].boutique && this.rows[index].prixU || this.rows[index].rakieta && this.rows[index].prixU || this.rows[index].coram && this.rows[index].prixU) {
              if (this.rows[index].rakieta) {
                this.rows[index].prixTotal = 0;
                this.rows[index].prixTotal = this.rows[index].prixU * this.rows[index].rakieta;
                console.log('rakie');
                console.log(this.rows[index].prixTotal);
              }

              if (this.rows[index].coram) this.rows[index].prixTotal = this.rows[index].prixU * this.rows[index].coram;
              if (this.rows[index].boutique) this.rows[index].prixTotal = this.rows[index].prixU * this.rows[index].boutique;
              console.log('prix');
              console.log(this.rows[index]);
              this.info.montantFacture = this.rows[index].prixTotal + this.info.montantFacture;
            }
          }
        }
      }
    },
    reste: function reste() {
      var rst = 0;
      var smv = 0;
      var total = 0;

      if (this.info.remise || this.info.sommeVersee) {
        if (this.info.remise >= 0) {
          rst = this.info.remise;
        }

        if (this.info.sommeVersee >= 0) {
          smv = this.info.sommeVersee;
        }

        total = this.info.montantFacture - smv - rst;
        this.info.sommeRestante = total;
      }
    },
    ajouter: function ajouter() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          var cli = null;

          _this.$vs.loading({
            type: 'radius',
            container: '.form-loading',
            scale: 1.2
          });

          if (!_this.disabled) {
            if (_this.client.id) cli = _this.client.id;else cli = _this.client;

            _this.$store.dispatch('commandeVente', {
              'vente': _this.rows,
              'id': _this.info.id,
              'client': cli,
              'sommeRestante': _this.info.sommeRestante,
              'sommeVersee': _this.info.sommeVersee,
              'montantFacture': _this.info.montantFacture,
              'remise': _this.info.remise,
              'bon': _this.info.bon
            });
          } else {
            if (_this.info.id) {
              console.log('edit');
              if (_this.client.id) cli = _this.client.id;else cli = _this.client;

              _this.$store.dispatch('editCommande', {
                'vente': _this.rows,
                'id': _this.info.id,
                'client': cli,
                'sommeRestante': _this.info.sommeRestante,
                'sommeVersee': _this.info.sommeVersee,
                'montantFacture': _this.info.montantFacture,
                'remise': _this.info.remise
              });
            } else {
              console.log('add');

              _this.$store.dispatch('addCommande', [_this.rows, _this.info]);
            }
          }
        } else {// form have errors
        }
      });
    },
    editCommande: function editCommande(data) {
      var _this2 = this;

      console.log('data');
      var cor = null;
      var rak = null;
      var bou = null;
      var pt = null;
      this.rows = [];
      this.info = [];
      var objA = {};
      var clientInfo = {};
      this.info.id = data.id;
      this.info.montantFacture = this.info.sommeRestante = data.montantCommande;
      this.info.remise = 0;
      this.info.sommeVersee = 0;
      this.client = data.nomClient;

      if (data.nomTel > 0) {
        Object.values(this.$store.state.listeClient).forEach(function (key) {
          if (key.id == data.nomTel) {
            console.log(key);
            clientInfo.id = key.id;
            clientInfo.label = key.nomClient + '  ' + key.telephoneClient;
            clientInfo.compte = key.compte[key.compte.length - 1].soldeActuel;
          }
        });
        this.client = clientInfo;
      } else {
        //                    clientInfo.id = ''
        //                    clientInfo.label = data.nomTel
        this.client = data.nomTel;
        console.log(this.client);
      } //                this.client = clientInfo


      Object.values(data.types).forEach(function (key) {
        if (key.pivot.magasin_id == 1) {
          bou = key.pivot.quantite;
          pt = key.pivot.quantite * key.pivot.prixUnitaire;
        } else {
          if (key.pivot.magasin_id == 2) {
            rak = key.pivot.quantite;
            pt = key.pivot.quantite * key.pivot.prixUnitaire;
          } else {
            cor = key.pivot.quantite;
            pt = key.pivot.quantite * key.pivot.prixUnitaire;
          }
        }

        objA.id = key.id;
        objA.label = key.article.designation + ' ' + key.nomType;

        _this2.rows.push({
          prixTotal: pt,
          prixU: key.pivot.prixUnitaire,
          rakieta: rak,
          coram: cor,
          article: objA,
          boutique: bou
        });

        objA = {};
        cor = null;
        rak = null;
        bou = null;
        pt = null;
      });
      this.info.bon = false;
      this.vendre = false;
    },
    suppCommande: function suppCommande(data) {
      this.$store.dispatch('deleteCommande', data);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false);
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/commande.vue?vue&type=template&id=0f21510b&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/commande.vue?vue&type=template&id=0f21510b& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vx-row" },
    [
      _c(
        "vx-card",
        {
          staticClass: "mb-5",
          attrs: { title: "Nouvelle commande", collapseAction: "" }
        },
        [
          _c(
            "form",
            { staticClass: "form-loading" },
            [
              _c(
                "vs-row",
                [
                  _c("vs-col", { attrs: { "vs-type": "flex", "vs-w": "8" } }, [
                    _c("div", { staticClass: "vx-row" }, [
                      _c(
                        "div",
                        { staticClass: "vx-col w-1/3" },
                        [
                          _c("label", { staticClass: "vs-input--label" }, [
                            _vm._v("Nom client")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              taggable: "",
                              "push-tags": "",
                              options: _vm.clientOptions,
                              dir: "$vs.rtl ? 'rtl' : 'ltr'"
                            },
                            model: {
                              value: _vm.client,
                              callback: function($$v) {
                                _vm.client = $$v
                              },
                              expression: "client"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-col w-full mt-0" }, [
                        _c(
                          "table",
                          { staticClass: "table table-dark-inverted" },
                          [
                            _c("tr", [
                              _c("th", [_vm._v("#")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Article")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("boutique")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Rakieta")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Coram")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Prix U")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Prix T")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Action")])
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.rows, function(row, index) {
                              return _c(
                                "tr",
                                { key: index },
                                [
                                  _c("vs-td", { attrs: { width: "1%" } }, [
                                    _vm._v(_vm._s(index + 1))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { width: "25%" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          size: "small",
                                          options: _vm.articleOptions,
                                          dir: _vm.$vs.rtl ? "rtl" : "ltr"
                                        },
                                        model: {
                                          value: row.article,
                                          callback: function($$v) {
                                            _vm.$set(row, "article", $$v)
                                          },
                                          expression: "row.article"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { width: "10%" } },
                                    [
                                      _c("vs-input", {
                                        staticClass: "w-full",
                                        on: {
                                          blur: function($event) {
                                            return _vm.clear(index)
                                          }
                                        },
                                        model: {
                                          value: row.boutique,
                                          callback: function($$v) {
                                            _vm.$set(row, "boutique", $$v)
                                          },
                                          expression: "row.boutique"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { width: "10%" } },
                                    [
                                      _c("vs-input", {
                                        staticClass: "w-full",
                                        on: {
                                          blur: function($event) {
                                            return _vm.clear(index)
                                          }
                                        },
                                        model: {
                                          value: row.rakieta,
                                          callback: function($$v) {
                                            _vm.$set(row, "rakieta", $$v)
                                          },
                                          expression: "row.rakieta"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { width: "10%" } },
                                    [
                                      _c("vs-input", {
                                        staticClass: "w-full",
                                        on: {
                                          blur: function($event) {
                                            return _vm.clear(index)
                                          }
                                        },
                                        model: {
                                          value: row.coram,
                                          callback: function($$v) {
                                            _vm.$set(row, "coram", $$v)
                                          },
                                          expression: "row.coram"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("vs-td", { attrs: { width: "10%" } }, [
                                    _c(
                                      "div",
                                      { staticClass: "vx-col w-full" },
                                      [
                                        _c("vs-input", {
                                          staticClass: "w-full",
                                          on: {
                                            blur: function($event) {
                                              return _vm.clear(index)
                                            }
                                          },
                                          model: {
                                            value: row.prixU,
                                            callback: function($$v) {
                                              _vm.$set(row, "prixU", $$v)
                                            },
                                            expression: "row.prixU"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("vs-td", { attrs: { width: "11%" } }, [
                                    _c(
                                      "div",
                                      { staticClass: "vx-col w-full" },
                                      [
                                        _c("vs-input", {
                                          staticClass: "w-full",
                                          attrs: { disabled: "" },
                                          model: {
                                            value: row.prixTotal,
                                            callback: function($$v) {
                                              _vm.$set(row, "prixTotal", $$v)
                                            },
                                            expression: "row.prixTotal"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("vs-td", [
                                    _c(
                                      "div",
                                      { staticClass: "btn-group" },
                                      [
                                        _c("vs-button", {
                                          attrs: {
                                            size: "small",
                                            color: "danger"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.removeRow(index)
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("vs-button", {
                                          attrs: { size: "small" },
                                          on: {
                                            click: function($event) {
                                              return _vm.addRow(index)
                                            }
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ])
                                ],
                                1
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    { attrs: { "vs-type": "flex", "vs-w": "4" } },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: false,
                            expression: "false"
                          }
                        ],
                        staticClass: "w-full",
                        model: {
                          value: _vm.info.id,
                          callback: function($$v) {
                            _vm.$set(_vm.info, "id", $$v)
                          },
                          expression: "info.id"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-row" },
                        [
                          _c(
                            "div",
                            { staticClass: "vx-col w-1/2" },
                            [
                              _c("vs-input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                staticClass: "w-full",
                                attrs: {
                                  label: "Compte client",
                                  disabled: "",
                                  name: "client"
                                },
                                model: {
                                  value: _vm.info.compte,
                                  callback: function($$v) {
                                    _vm.$set(_vm.info, "compte", $$v)
                                  },
                                  expression: "info.compte"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.errors.has("client"),
                                      expression: "errors.has('client')"
                                    }
                                  ],
                                  staticClass: "text-danger text-sm"
                                },
                                [_vm._v(_vm._s(_vm.errors.first("client")))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col w-1/2" },
                            [
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: {
                                  label: "Montant de la facture",
                                  disabled: ""
                                },
                                model: {
                                  value: _vm.info.montantFacture,
                                  callback: function($$v) {
                                    _vm.$set(_vm.info, "montantFacture", $$v)
                                  },
                                  expression: "info.montantFacture"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col w-1/2" },
                            [
                              _c("vs-input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|numeric",
                                    expression: "'required|numeric'"
                                  }
                                ],
                                staticClass: " w-full",
                                attrs: {
                                  label: "Montant remise",
                                  disabled: _vm.disabled,
                                  name: "remise"
                                },
                                on: {
                                  keyup: function($event) {
                                    return _vm.reste()
                                  }
                                },
                                model: {
                                  value: _vm.info.remise,
                                  callback: function($$v) {
                                    _vm.$set(_vm.info, "remise", $$v)
                                  },
                                  expression: "info.remise"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.errors.has("remise"),
                                      expression: "errors.has('remise')"
                                    }
                                  ],
                                  staticClass: "text-danger text-sm"
                                },
                                [_vm._v(_vm._s(_vm.errors.first("remise")))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col w-1/2" },
                            [
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: {
                                  label: "Somme Versée",
                                  name: "sommeVersee",
                                  disabled: _vm.disabled
                                },
                                on: {
                                  keyup: function($event) {
                                    return _vm.reste()
                                  }
                                },
                                model: {
                                  value: _vm.info.sommeVersee,
                                  callback: function($$v) {
                                    _vm.$set(_vm.info, "sommeVersee", $$v)
                                  },
                                  expression: "info.sommeVersee"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.errors.has("sommeVersee"),
                                      expression: "errors.has('sommeVersee')"
                                    }
                                  ],
                                  staticClass: "text-danger text-sm"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("sommeVersee"))
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col w-1/2" },
                            [
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: {
                                  type: "number",
                                  label: "Somme restante",
                                  disabled: ""
                                },
                                model: {
                                  value: _vm.info.sommeRestante,
                                  callback: function($$v) {
                                    _vm.$set(_vm.info, "sommeRestante", $$v)
                                  },
                                  expression: "info.sommeRestante"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col w-1/2" },
                            [
                              _c(
                                "vs-checkbox",
                                {
                                  staticClass: "mt-5",
                                  attrs: { disabled: _vm.disabled },
                                  model: {
                                    value: _vm.info.bon,
                                    callback: function($$v) {
                                      _vm.$set(_vm.info, "bon", $$v)
                                    },
                                    expression: "info.bon"
                                  }
                                },
                                [_vm._v("Bon d'enlèvement")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col" },
                            [
                              _c(
                                "vs-checkbox",
                                {
                                  staticClass: "mt-5",
                                  model: {
                                    value: _vm.vendre,
                                    callback: function($$v) {
                                      _vm.vendre = $$v
                                    },
                                    expression: "vendre"
                                  }
                                },
                                [_vm._v("Effectuer la vente")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("vs-divider"),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col w-1/2" },
                            [
                              _c(
                                "vs-button",
                                {
                                  staticClass: "mt-0",
                                  attrs: { color: "primary", type: "filled" },
                                  on: { click: _vm.ajouter }
                                },
                                [_vm._v("Ajouter")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col w-1/2" },
                            [
                              _c(
                                "vs-button",
                                {
                                  staticClass: "mt-0",
                                  attrs: { color: "primary", type: "filled" }
                                },
                                [_vm._v("Nouvelle ")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vx-card",
        { attrs: { title: "Liste commande", collapseAction: "" } },
        [
          _c(
            "vs-table",
            {
              attrs: {
                search: "",
                pagination: "",
                data: _vm.listeCommande,
                "max-items": "3"
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(tr, indextr) {
                      return _c(
                        "vs-tr",
                        { key: indextr },
                        [
                          _c(
                            "vs-td",
                            {
                              attrs: { data: data[indextr].referenceCommande }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(data[indextr].referenceCommande) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("vs-td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(data[indextr].created_at) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c(
                              "div",
                              { staticClass: "btn-group" },
                              [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "EditIcon",
                                    svgClasses:
                                      "w-5 h-5 hover:text-primary cursor-pointer"
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.editCommande(tr)
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("feather-icon", {
                                  staticClass: "ml-2",
                                  attrs: {
                                    icon: "TrashIcon",
                                    svgClasses:
                                      "w-5 h-5 hover:text-danger cursor-pointer"
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.suppCommande(tr)
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      )
                    })
                  }
                }
              ])
            },
            [
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", { attrs: { "sort-key": "designation" } }, [
                    _vm._v("identifiant")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("date")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("option")])
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/mesVues/commande.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/mesVues/commande.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commande_vue_vue_type_template_id_0f21510b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commande.vue?vue&type=template&id=0f21510b& */ "./resources/js/src/views/mesVues/commande.vue?vue&type=template&id=0f21510b&");
/* harmony import */ var _commande_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commande.vue?vue&type=script&lang=js& */ "./resources/js/src/views/mesVues/commande.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _commande_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _commande_vue_vue_type_template_id_0f21510b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _commande_vue_vue_type_template_id_0f21510b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/mesVues/commande.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/mesVues/commande.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/mesVues/commande.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commande_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./commande.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/commande.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commande_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/mesVues/commande.vue?vue&type=template&id=0f21510b&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/mesVues/commande.vue?vue&type=template&id=0f21510b& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commande_vue_vue_type_template_id_0f21510b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./commande.vue?vue&type=template&id=0f21510b& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/commande.vue?vue&type=template&id=0f21510b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commande_vue_vue_type_template_id_0f21510b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commande_vue_vue_type_template_id_0f21510b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);