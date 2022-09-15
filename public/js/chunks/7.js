(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Transfert.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/Transfert.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      //magasinOptions:[],
      transfert: [{
        id: "",
        magasin: "",
        article: "",
        quantite: ""
      }]
    };
  },
  mounted: function mounted() {
    this.$store.dispatch('getMagasin');
    this.$store.dispatch('getTypArt');
    this.$store.dispatch('getTransfert');
  },
  computed: {
    listeTransfert: function listeTransfert() {
      return this.$store.state.listeTransfert;
    },
    magasinDepOptions: function magasinDepOptions() {
      this.magasinArrOptions = this.$store.state.listeMagasin; //console.log(this.magasinOptions)

      return this.$store.state.listeMagasin;
    },
    articleOptions: function articleOptions() {
      //return this.$store.state.listeArtEmb.listeTypArt
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
    }
  },
  methods: {
    addRow: function addRow(index) {
      try {
        this.transfert.splice(index + 1, 0, {});
      } catch (e) {
        console.log(e);
      }
    },
    removeRow: function removeRow(index) {
      if (index > 0) this.transfert.splice(index, 1);
    },
    submitFormTransfert: function submitFormTransfert(event) {
      var _this = this;

      this.$vs.loading({
        type: 'radius',
        container: '.form-loading',
        scale: 1.2
      });

      if (this.transfert.id) {
        this.$store.dispatch('editTransfert', this.transfert);
      } else {
        var toSend = [];
        var nxt = true;
        var x = null;
        var y = null;
        var qte = null;
        var art = null;
        Object.values(this.transfert).forEach(function (key) {
          x = key.magasinDepart, y = key.magasinArrive, qte = key.quantite, art = key.article;

          if (x == y) {
            nxt = false, _this.$vs.notify({
              title: " Vérifier, vous ne pouvez pas tranferer de:" + " " + key.magasinArrive.libelle + " à " + " " + key.magasinArrive.libelle + "",
              color: 'warning',
              time: 5000,
              i: 'top-right',
              icon: 'query_builder'
            });
          } else {
            toSend.push(key);
          }
        });

        if (nxt && qte && art) {
          this.$store.dispatch('addTransfert', toSend);
        }
      }
    },
    editTransfert: function editTransfert(data) {
      var _this2 = this;

      this.transfert = [], this.transfert.id = data.id;
      Object.values(data.types).forEach(function (key) {
        Object.values(_this2.$store.state.listeMagasin).forEach(function (k) {
          Object.values(_this2.$store.state.listeMagasin).forEach(function (ka) {
            if (key.pivot.magasinDepart === k.id && key.pivot.magasinArrive === ka.id) {
              _this2.transfert.push({
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
              });
            }
          });
        });
      });
    },
    suppTransfert: function suppTransfert(data) {
      this.$store.dispatch('deleteTransfert', data);
    }
  },
  components: {
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Transfert.vue?vue&type=template&id=6896ca08&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/Transfert.vue?vue&type=template&id=6896ca08& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
                "vs-w": "8"
              }
            },
            [
              _c(
                "vx-card",
                {
                  attrs: { title: "Nouveau transfert", "collapse-action": "" }
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
                              value: _vm.transfert.id,
                              callback: function($$v) {
                                _vm.$set(_vm.transfert, "id", $$v)
                              },
                              expression: "transfert.id"
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
                              _c("th", [_vm._v("Magasin Départ")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Article")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Quantité")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Magasin Arrivée")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Action")])
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.transfert, function(row, index) {
                              return _c(
                                "tr",
                                { key: index },
                                [
                                  _c(
                                    "vs-td",
                                    { attrs: { width: "23%" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          size: "small",
                                          name: "magasinDepart",
                                          label: "libelle",
                                          options: _vm.magasinDepOptions
                                        },
                                        model: {
                                          value: row.magasinDepart,
                                          callback: function($$v) {
                                            _vm.$set(row, "magasinDepart", $$v)
                                          },
                                          expression: "row.magasinDepart"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { width: "29%" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          label: "label",
                                          options: _vm.articleOptions,
                                          name: "article"
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
                                    { attrs: { width: "3%" } },
                                    [
                                      _c("vs-input", {
                                        staticClass: "w-full qty",
                                        attrs: { name: "quantite" },
                                        model: {
                                          value: row.quantite,
                                          callback: function($$v) {
                                            _vm.$set(row, "quantite", $$v)
                                          },
                                          expression: "row.quantite"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { width: "23%" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          size: "small",
                                          name: "magasinArrivee",
                                          label: "libelle",
                                          options: _vm.magasinArrOptions
                                        },
                                        model: {
                                          value: row.magasinArrive,
                                          callback: function($$v) {
                                            _vm.$set(row, "magasinArrive", $$v)
                                          },
                                          expression: "row.magasinArrive"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("vs-td", [
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
                                              return _vm.removeRow(index)
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
                                    staticClass: "ml-3 mb-1 mt-1",
                                    attrs: { color: "primary", type: "border" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.submitFormTransfert($event)
                                      }
                                    }
                                  },
                                  [_vm._v("TRANSFERER")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-button",
                                  {
                                    staticClass: "ml-3 mb-1 mt-1",
                                    attrs: { color: "warning", type: "border" }
                                  },
                                  [_vm._v("EFFACER")]
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
                "vs-w": "4"
              }
            },
            [
              _c(
                "vx-card",
                {
                  attrs: {
                    title: "Liste des transferts",
                    "collapse-action": ""
                  }
                },
                [
                  _c(
                    "vs-table",
                    {
                      attrs: {
                        data: _vm.listeTransfert,
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
                                        _vm._s(tr.refTrans) +
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
                                              $event.stopPropagation()
                                              return _vm.editTransfert(tr)
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
                                              return _vm.suppTransfert(tr)
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
                          _c("vs-th", [_vm._v("Réf")]),
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/mesVues/Transfert.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/mesVues/Transfert.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Transfert_vue_vue_type_template_id_6896ca08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transfert.vue?vue&type=template&id=6896ca08& */ "./resources/js/src/views/mesVues/Transfert.vue?vue&type=template&id=6896ca08&");
/* harmony import */ var _Transfert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transfert.vue?vue&type=script&lang=js& */ "./resources/js/src/views/mesVues/Transfert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Transfert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Transfert_vue_vue_type_template_id_6896ca08___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Transfert_vue_vue_type_template_id_6896ca08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/mesVues/Transfert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/mesVues/Transfert.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/mesVues/Transfert.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transfert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Transfert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/mesVues/Transfert.vue?vue&type=template&id=6896ca08&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/mesVues/Transfert.vue?vue&type=template&id=6896ca08& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfert_vue_vue_type_template_id_6896ca08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transfert.vue?vue&type=template&id=6896ca08& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Transfert.vue?vue&type=template&id=6896ca08&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfert_vue_vue_type_template_id_6896ca08___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfert_vue_vue_type_template_id_6896ca08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);