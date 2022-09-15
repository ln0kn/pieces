(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/ajustement.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/ajustement.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      casse: [{
        id: "",
        magasin: "",
        article: "",
        quantite: ""
      }],
      act: 0,
      ajustement: {
        id: null,
        magasin_id: null,
        magasin: null,
        article: null,
        quantiteActuelle: null,
        quantitePhysique: null
      },
      wasSidebarOpen: null
    };
  },
  computed: {
    magasinOptions: function magasinOptions() {
      return this.$store.state.listeMagasin;
    },
    listeCasse: function listeCasse() {
      return this.$store.state.listeCasse;
    },
    etatStock: function etatStock() {
      return this.$store.state.etatStock;
    },
    articleOptions: function articleOptions() {
      var ArtType = [];
      Object.values(this.$store.state.listeTypArt).forEach(function (key) {
        Object.values(key.types).forEach(function (val) {
          ArtType.push({
            id: val.id,
            label: key.designation + " " + val.nomType
          });
        });
      });
      return ArtType;
    },
    listeAjustement: function listeAjustement() {
      return this.$store.state.listeAjustement;
    }
  },
  mounted: function mounted() {
    this.wasSidebarOpen = this.$store.state.reduceButton;
    this.$store.commit('TOGGLE_REDUCE_BUTTON', true);
    this.$store.dispatch('getAjustement');
    this.$store.dispatch('getMagasin');
    this.$store.dispatch('getTypArt');
    this.$store.dispatch('getCasse');
    this.$store.dispatch('gotStock');
  },
  methods: {
    ajuster: function ajuster(data) {
      console.log(data);
      this.ajustement.magasin_id = data.magasin_id;
      this.ajustement.magasin = data.magasin;
      this.act = 1; //
      //                this.act = 1;

      this.ajustement.id = data['type_id'];
      this.ajustement.article = data['article'];
      this.ajustement.quantiteActuelle = data['quantie'];
    },
    addAjustement: function addAjustement() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.$vs.loading({
            type: 'radius',
            container: '.form-loading',
            scale: 1.2
          });

          _this.$store.dispatch('addAjustement', _this.ajustement);
        } else {// form have errors
        }
      });
    },
    addRow: function addRow(index) {
      try {
        this.casse.splice(index + 1, 0, {});
      } catch (e) {
        console.log(e);
      }
    },
    removeRow: function removeRow(index) {
      if (index > 0) this.casse.splice(index, 1);
    },
    submitForm: function submitForm(event) {
      this.$vs.loading({
        type: 'radius',
        container: '.form-loading',
        scale: 1.2
      });

      if (this.casse.id) {
        this.$store.dispatch('editCasse', this.casse);
      } else {
        this.$store.dispatch('addCasse', this.casse);
      }
    },
    suppCasse: function suppCasse(data) {
      this.$store.dispatch('deleteCasse', data);
      console.log(data);
    },
    editCasse: function editCasse(data) {
      var _this2 = this;

      this.casse = [];
      this.casse.id = data.id;
      Object.values(data.types).forEach(function (key) {
        Object.values(_this2.$store.state.listeMagasin).forEach(function (k) {
          if (key.pivot.magasin_id === k.id) {
            _this2.casse.push({
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
            });
          }
        });
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false);
  },
  components: {
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/ajustement.vue?vue&type=template&id=199ff4e7&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/ajustement.vue?vue&type=template&id=199ff4e7& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    "vs-tabs",
    {
      model: {
        value: _vm.act,
        callback: function($$v) {
          _vm.act = $$v
        },
        expression: "act"
      }
    },
    [
      _c("vs-tab", { attrs: { label: "Stock" } }, [
        _c(
          "div",
          { staticClass: "tab-text" },
          [
            _c(
              "vs-row",
              {
                attrs: {
                  "vs-align": "flex-start",
                  "vs-type": "flex",
                  "vs-justify": "center",
                  "vs-w": "12"
                }
              },
              [
                _c(
                  "vs-col",
                  {
                    staticClass: "pr-5",
                    attrs: {
                      "vs-type": "flex",
                      "vs-justify": "center",
                      "vs-align": "center",
                      "vs-w": "6"
                    }
                  },
                  [
                    _c(
                      "vx-card",
                      { attrs: { title: "Etat du stock" } },
                      [
                        _c(
                          "vs-table",
                          {
                            attrs: {
                              search: "",
                              pagination: "",
                              data: _vm.etatStock,
                              "max-items": "8"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var data = ref.data
                                  return _vm._l(data, function(trex, ind) {
                                    return _c(
                                      "vs-tr",
                                      { key: ind },
                                      [
                                        _c("vs-td", [
                                          _vm._v(_vm._s(trex["article"]) + " ")
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _vm._v(_vm._s(trex["magasin"]) + " ")
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _vm._v(_vm._s(trex["quantie"]) + " ")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "vs-td",
                                          [
                                            _c(
                                              "vs-button",
                                              {
                                                attrs: { size: "small" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.ajuster(trex)
                                                  }
                                                }
                                              },
                                              [_vm._v(" Ajuster ")]
                                            )
                                          ],
                                          1
                                        )
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
                                _c("vs-th", [_vm._v(" Article ")]),
                                _vm._v(" "),
                                _c("vs-th", [_vm._v(" Lieu ")]),
                                _vm._v(" "),
                                _c("vs-th", [_vm._v(" quantite ")]),
                                _vm._v(" "),
                                _c("vs-th", [_vm._v(" option ")])
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
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("vs-tab", { attrs: { label: "Ajustement" } }, [
        _c(
          "div",
          { staticClass: "tab-text" },
          [
            _c(
              "vs-row",
              {
                attrs: {
                  "vs-align": "flex-start",
                  "vs-type": "flex",
                  "vs-justify": "center",
                  "vs-w": "12"
                }
              },
              [
                _c(
                  "vs-col",
                  {
                    staticClass: "pr-5",
                    attrs: {
                      "vs-type": "flex",
                      "vs-justify": "center",
                      "vs-align": "center",
                      "vs-w": "3"
                    }
                  },
                  [
                    _c("vx-card", { attrs: { title: "Nouvelle ajustement" } }, [
                      _c(
                        "form",
                        { staticClass: "form-loading" },
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
                            attrs: { type: "w-full" },
                            model: {
                              value: _vm.ajustement.id,
                              callback: function($$v) {
                                _vm.$set(_vm.ajustement, "id", $$v)
                              },
                              expression: "ajustement.id"
                            }
                          }),
                          _vm._v(" "),
                          _c("vs-input", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: false,
                                expression: "false"
                              }
                            ],
                            attrs: { type: "w-full" },
                            model: {
                              value: _vm.ajustement.magasin_id,
                              callback: function($$v) {
                                _vm.$set(_vm.ajustement, "magasin_id", $$v)
                              },
                              expression: "ajustement.magasin_id"
                            }
                          }),
                          _vm._v(" "),
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
                              label: "Lieu",
                              name: "lieu",
                              disabled: ""
                            },
                            model: {
                              value: _vm.ajustement.magasin,
                              callback: function($$v) {
                                _vm.$set(_vm.ajustement, "magasin", $$v)
                              },
                              expression: "ajustement.magasin"
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
                                  value: _vm.errors.has("lieu"),
                                  expression: "errors.has('lieu')"
                                }
                              ],
                              staticClass: "text-danger text-sm"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("lieu")))]
                          ),
                          _vm._v(" "),
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
                              label: "Article",
                              name: "article",
                              disabled: ""
                            },
                            model: {
                              value: _vm.ajustement.article,
                              callback: function($$v) {
                                _vm.$set(_vm.ajustement, "article", $$v)
                              },
                              expression: "ajustement.article"
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
                                  value: _vm.errors.has("article"),
                                  expression: "errors.has('article')"
                                }
                              ],
                              staticClass: "text-danger text-sm"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("article")))]
                          ),
                          _vm._v(" "),
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
                              label: "quantité actuelle",
                              name: "quantiteActuelle",
                              disabled: ""
                            },
                            model: {
                              value: _vm.ajustement.quantiteActuelle,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.ajustement,
                                  "quantiteActuelle",
                                  $$v
                                )
                              },
                              expression: "ajustement.quantiteActuelle"
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
                                  value: _vm.errors.has("quantiteActuelle"),
                                  expression: "errors.has('quantiteActuelle')"
                                }
                              ],
                              staticClass: "text-danger text-sm"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("quantiteActuelle"))
                              )
                            ]
                          ),
                          _vm._v(" "),
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
                              label: "quantité physique",
                              name: "quantitePhysique"
                            },
                            model: {
                              value: _vm.ajustement.quantitePhysique,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.ajustement,
                                  "quantitePhysique",
                                  $$v
                                )
                              },
                              expression: "ajustement.quantitePhysique"
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
                                  value: _vm.errors.has("quantitePhysique"),
                                  expression: "errors.has('quantitePhysique')"
                                }
                              ],
                              staticClass: "text-danger text-sm"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("quantitePhysique"))
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-button",
                            {
                              staticClass: "mt-5 block",
                              attrs: { type: "filled" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.addAjustement($event)
                                }
                              }
                            },
                            [_vm._v("AJOUTER")]
                          )
                        ],
                        1
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-type": "flex",
                      "vs-justify": "center",
                      "vs-align": "center",
                      "vs-w": "8"
                    }
                  },
                  [
                    _c(
                      "vx-card",
                      { attrs: { title: "Ajustements réalisés" } },
                      [
                        _c(
                          "vs-table",
                          {
                            attrs: {
                              search: "",
                              pagination: "",
                              data: _vm.listeAjustement,
                              "max-items": "2"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var data = ref.data
                                  return _vm._l(data, function(tr, index) {
                                    return _c(
                                      "vs-tr",
                                      { key: index },
                                      [
                                        _c("vs-td", [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                tr["type"]["article"]
                                                  .designation
                                              ) +
                                              " " +
                                              _vm._s(tr["type"].nomType) +
                                              "\n                                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(tr["mag"]["libelle"]) +
                                              "\n                                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(tr["quantiteNumerique"]) +
                                              "\n                                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(tr["quantitePhysique"]) +
                                              "\n                                    "
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
                                _c("vs-th", [_vm._v("Article ")]),
                                _vm._v(" "),
                                _c("vs-th", [_vm._v(" magasin ")]),
                                _vm._v(" "),
                                _c("vs-th", [_vm._v("Qt. Numerique")]),
                                _vm._v(" "),
                                _c("vs-th", [_vm._v("Qt. Physique")])
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
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("vs-tab", { attrs: { label: "Casse" } }, [
        _c(
          "div",
          { staticClass: "grid-layout-container alignment-block" },
          [
            _c(
              "vs-row",
              {
                attrs: {
                  "vs-align": "flex-start",
                  "vs-type": "flex",
                  "vs-justify": "center",
                  "vs-w": "12"
                }
              },
              [
                _c(
                  "vs-col",
                  {
                    staticClass: "pr-5",
                    attrs: {
                      "vs-type": "flex",
                      "vs-justify": "center",
                      "vs-align": "center",
                      "vs-w": "7"
                    }
                  },
                  [
                    _c(
                      "vx-card",
                      {
                        attrs: {
                          title: "Nouvelle Casse",
                          "collapse-action": ""
                        }
                      },
                      [
                        _c("form", { staticClass: "form-loading" }, [
                          _c("div", { staticClass: "vx-row" }, [
                            _c(
                              "div",
                              { staticClass: "vx-col w-1/3" },
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
                                  attrs: { name: "idt" },
                                  model: {
                                    value: _vm.casse.id,
                                    callback: function($$v) {
                                      _vm.$set(_vm.casse, "id", $$v)
                                    },
                                    expression: "casse.id"
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
                                    _c("th", [_vm._v("Magasin")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Article")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Quantité")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Action")])
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.casse, function(item, index) {
                                    return _c(
                                      "tr",
                                      { key: index },
                                      [
                                        _c(
                                          "vs-td",
                                          { attrs: { width: "30%" } },
                                          [
                                            _c("v-select", {
                                              attrs: {
                                                size: "small",
                                                name: "magasin",
                                                label: "libelle",
                                                options: _vm.magasinOptions
                                              },
                                              model: {
                                                value: item.magasin,
                                                callback: function($$v) {
                                                  _vm.$set(item, "magasin", $$v)
                                                },
                                                expression: "item.magasin"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-td",
                                          { attrs: { width: "45%" } },
                                          [
                                            _c("v-select", {
                                              attrs: {
                                                label: "label",
                                                options: _vm.articleOptions,
                                                name: "label"
                                              },
                                              model: {
                                                value: item.article,
                                                callback: function($$v) {
                                                  _vm.$set(item, "article", $$v)
                                                },
                                                expression: "item.article"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-td",
                                          { attrs: { width: "3%" } },
                                          [
                                            _c("vs-input", {
                                              staticClass: "w-full qty",
                                              attrs: { name: "quantite" },
                                              model: {
                                                value: item.quantite,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    item,
                                                    "quantite",
                                                    $$v
                                                  )
                                                },
                                                expression: "item.quantite"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-td",
                                          { attrs: { width: "15%" } },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "btn-group" },
                                              [
                                                _c("vs-button", {
                                                  attrs: { size: "small" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.addRow(index)
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("vs-button", {
                                                  attrs: {
                                                    size: "small",
                                                    color: "danger"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.removeRow(
                                                        index
                                                      )
                                                    }
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "vx-row" }, [
                                _c("div", { staticClass: "vx-row mt-5" }, [
                                  _c(
                                    "div",
                                    { staticClass: "vx-col w-full" },
                                    [
                                      _c(
                                        "vs-button",
                                        {
                                          staticClass: "ml-3 mb-1",
                                          attrs: {
                                            color: "primary",
                                            type: "border"
                                          },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.submitForm($event)
                                            }
                                          }
                                        },
                                        [_vm._v("Valider")]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-type": "flex",
                      "vs-justify": "center",
                      "vs-align": "center",
                      "vs-w": "5"
                    }
                  },
                  [
                    _c(
                      "vx-card",
                      {
                        attrs: {
                          title: "Liste des Casses",
                          "collapse-action": ""
                        }
                      },
                      [
                        _c(
                          "vs-table",
                          {
                            attrs: {
                              data: _vm.listeCasse,
                              search: "",
                              pagination: "",
                              "max-items": "5"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var data = ref.data
                                  return _vm._l(data, function(tr, indext) {
                                    return _c(
                                      "vs-tr",
                                      { key: indext },
                                      [
                                        _c("vs-td", [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(tr.refCas) +
                                              "\n                                    "
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
                                                    "w-5 h-5 hover:text-primary stroke-current"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.editCasse(tr)
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("feather-icon", {
                                                staticClass: "ml-2",
                                                attrs: {
                                                  icon: "TrashIcon",
                                                  svgClasses:
                                                    "w-5 h-5 hover:text-danger stroke-current"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    $event.stopPropagation()
                                                    return _vm.suppCasse(tr)
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
                                _c("vs-th", [_vm._v("Réference")]),
                                _vm._v(" "),
                                _c("vs-th", [_vm._v("Options")])
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
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/mesVues/ajustement.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/mesVues/ajustement.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajustement_vue_vue_type_template_id_199ff4e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajustement.vue?vue&type=template&id=199ff4e7& */ "./resources/js/src/views/mesVues/ajustement.vue?vue&type=template&id=199ff4e7&");
/* harmony import */ var _ajustement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajustement.vue?vue&type=script&lang=js& */ "./resources/js/src/views/mesVues/ajustement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ajustement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ajustement_vue_vue_type_template_id_199ff4e7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ajustement_vue_vue_type_template_id_199ff4e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/mesVues/ajustement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/mesVues/ajustement.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/mesVues/ajustement.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ajustement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ajustement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/ajustement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ajustement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/mesVues/ajustement.vue?vue&type=template&id=199ff4e7&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/mesVues/ajustement.vue?vue&type=template&id=199ff4e7& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ajustement_vue_vue_type_template_id_199ff4e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ajustement.vue?vue&type=template&id=199ff4e7& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/ajustement.vue?vue&type=template&id=199ff4e7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ajustement_vue_vue_type_template_id_199ff4e7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ajustement_vue_vue_type_template_id_199ff4e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);