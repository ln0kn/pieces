(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/vente.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/vente.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      info: {
        compte: null,
        montantFacture: null,
        remise: null,
        sommeVersee: null,
        sommeRestante: null,
        client: null,
        bon: null,
        id: null
      },
      client: null,
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
      console.log(this.$store.state.listeClient);
      Object.values(this.$store.state.listeClient).forEach(function (key) {
        obj.push({
          id: key.id,
          label: key.nomClient + ' ' + key.telephoneClient,
          compte: key.compte[key.compte.length - 1].soldeActuel
        });
      });
      return obj;
    },
    listeVente: function listeVente() {
      //                console.log(this.$store.state.listeVente)
      return this.$store.state.listeVente;
    }
  },
  mounted: function mounted() {
    this.wasSidebarOpen = this.$store.state.reduceButton;
    this.$store.commit('TOGGLE_REDUCE_BUTTON', true);
    this.$store.dispatch('getVente');
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
        });
      } catch (e) {
        console.log(e);
      }
    },
    removeRow: function removeRow(index) {
      if (index > 0) this.rows.splice(index, 1);
    },
    callFunction: function callFunction() {
      var currentDate = new Date(); //                console.log(currentDate);

      var currentDateWithFormat = new Date().toJSON().slice(0, 10).replace(/-/g, '/'); //                console.log(currentDateWithFormat);
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
    reste: function reste(index) {
      if (this.info.remise && this.info.sommeVersee) {
        this.info.sommeRestante = this.info.montantFacture - this.info.remise - this.info.sommeVersee;
      } else {
        if (this.info.remise) this.info.sommeRestante = this.info.montantFacture - this.info.remise - 0;else this.info.sommeRestante = this.info.montantFacture - 0 - this.info.sommeVersee;
      }
    },
    vendre: function vendre() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          //                        this.$vs.loading({
          //                            type: 'radius',
          //                            container: '.form-loading',
          //                            scale: 1.2
          //                        })
          if (_this.info.id) {
            //                            console.log(this.rows)
            _this.$store.dispatch('editVente', {
              'vente': _this.rows,
              'id': _this.info.id,
              'client': _this.info.client,
              'sommeRestante': _this.info.sommeRestante,
              'sommeVersee': _this.info.sommeVersee,
              'montantFacture': _this.info.montantFacture,
              'remise': _this.info.remise
            });
          } else {
            _this.$store.dispatch('addVente', [_this.rows, _this.info]);
          } //                        this.$store.dispatch('getStock')

        } else {} // form have errors
          //                    console.log(this.rows)

      });
    },
    editVente: function editVente(data) {
      var _this2 = this;

      var cor = null;
      var rak = null;
      var bou = null;
      var pt = null;
      this.rows = [];
      this.info = [];
      var objA = {};
      var clientInfo = {};
      this.info.id = data.id;
      this.info.compte = data.id;
      this.info.montantFacture = data.prixTotal;
      this.info.sommeVersee = data.sommeVersee;
      this.info.sommeRestante = data.reliquat;
      this.info.remise = data.remise;
      Object.values(data.client.compte).forEach(function (key) {
        clientInfo.compte = key.soldeActuel;
      });
      Object.values(data.articles).forEach(function (key) {
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
      clientInfo.id = data.client.id;
      clientInfo.label = data.client.nomClient + '  ' + data.client.telephoneClient;
      this.client = clientInfo;
    },
    suppVente: function suppVente(data) {
      this.$store.dispatch('deleteVente', data);
    },
    refresh: function refresh() {
      this.client = null;
      this.info = {
        compte: null,
        montantFacture: null,
        remise: null,
        sommeVersee: null,
        sommeRestante: null,
        client: null,
        bon: null,
        id: null
      };
      this.rows = [{
        prixTotal: null,
        prixU: null,
        rakieta: null,
        coram: null,
        boutique: null,
        article: null
      }];
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false);
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/vente.vue?vue&type=template&id=016742e2&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/vente.vue?vue&type=template&id=016742e2& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
          attrs: { title: "Nouvelle vente", collapseAction: "" }
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
                                staticClass: "w-full",
                                attrs: { label: "Compte client", disabled: "" },
                                model: {
                                  value: _vm.info.compte,
                                  callback: function($$v) {
                                    _vm.$set(_vm.info, "compte", $$v)
                                  },
                                  expression: "info.compte"
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
                                  name: "remise"
                                },
                                on: {
                                  keyup: function($event) {
                                    return _vm.reste("remise")
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
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|numeric",
                                    expression: "'required|numeric'"
                                  }
                                ],
                                staticClass: "w-full",
                                attrs: {
                                  label: "Somme Versée",
                                  name: "sommeVersee"
                                },
                                on: {
                                  keyup: function($event) {
                                    return _vm.reste("sommeVersee")
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
                          _c("vs-divider"),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col w-1/2" },
                            [
                              _c(
                                "vs-button",
                                {
                                  staticClass: "mt-8",
                                  attrs: { color: "primary", type: "filled" },
                                  on: { click: _vm.vendre }
                                },
                                [_vm._v("Vendre")]
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
                                  staticClass: "mt-8",
                                  attrs: { color: "primary", type: "filled" },
                                  on: { click: _vm.refresh }
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
        { attrs: { title: "Liste vente", collapseAction: "" } },
        [
          _c(
            "vs-table",
            {
              attrs: {
                search: "",
                pagination: "",
                data: _vm.listeVente,
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
                            { attrs: { data: data[indextr].referenceVente } },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(data[indextr].referenceVente) +
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
                                      return _vm.editVente(tr)
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
                                      return _vm.suppVente(tr)
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

/***/ "./resources/js/src/views/mesVues/vente.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/mesVues/vente.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vente_vue_vue_type_template_id_016742e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vente.vue?vue&type=template&id=016742e2& */ "./resources/js/src/views/mesVues/vente.vue?vue&type=template&id=016742e2&");
/* harmony import */ var _vente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vente.vue?vue&type=script&lang=js& */ "./resources/js/src/views/mesVues/vente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vente_vue_vue_type_template_id_016742e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vente_vue_vue_type_template_id_016742e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/mesVues/vente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/mesVues/vente.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/mesVues/vente.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/vente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/mesVues/vente.vue?vue&type=template&id=016742e2&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/mesVues/vente.vue?vue&type=template&id=016742e2& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vente_vue_vue_type_template_id_016742e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vente.vue?vue&type=template&id=016742e2& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/vente.vue?vue&type=template&id=016742e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vente_vue_vue_type_template_id_016742e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vente_vue_vue_type_template_id_016742e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);