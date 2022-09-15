(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Approvisionnement.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/Approvisionnement.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      approvisionnement: [{
        id: "",
        magasin: "",
        article: "",
        quantite: ""
      }],
      ku: [{
        id: "",
        magasin: "",
        article: "",
        quantite: ""
      }],
      wasSidebarOpen: null
    };
  },
  mounted: function mounted() {
    this.wasSidebarOpen = this.$store.state.reduceButton;
    this.$store.commit('TOGGLE_REDUCE_BUTTON', true);
    this.$store.dispatch('getMagasin');
    this.$store.dispatch('getTypArt');
    this.$store.dispatch('getApprovisionnement');
  },
  computed: {
    magasinOptions: function magasinOptions() {
      //                return this.$store.state.listeMag.listeAppMag
      return this.$store.state.listeMagasin;
    },
    listeApprovisionnement: function listeApprovisionnement() {
      return this.$store.state.listeApprovisionnement; //              return this.$store.state.listeAppro.listeApprovisionnement  
    },
    articleOptions: function articleOptions() {
      var ArtType = [];
      Object.values(this.$store.state.listeTypArt).forEach(function (key) {
        //            Object.values(this.$store.state.listeArtEmb.listeTypArt).forEach(key=>{
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
        this.approvisionnement.splice(index + 1, 0, {});
      } catch (e) {
        console.log(e);
      }
    },
    removeRow: function removeRow(index) {
      if (index > 0) this.approvisionnement.splice(index, 1);
    },
    submitForm: function submitForm(event) {
      this.$vs.loading({
        type: 'radius',
        container: '.form-loading',
        scale: 1.2
      });

      if (this.approvisionnement.id) {
        this.$store.dispatch('editApprovisionnement', this.approvisionnement);
      } else {
        this.$store.dispatch('addApprovisionnement', this.approvisionnement);
      }
    },
    suppAppArt: function suppAppArt(data) {
      this.$store.dispatch('deleteApprovisionnement', data);
    },
    editAppro: function editAppro(data) {
      var _this = this;

      this.approvisionnement = [], this.approvisionnement.id = data.id, Object.values(data.types).forEach(function (key) {
        Object.values(_this.$store.state.listeMagasin).forEach(function (k) {
          if (key.pivot.magasin_id === k.id) {
            _this.approvisionnement.push({
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
    },
    refresh: function refresh() {
      this.approvisionnement = [{
        id: "",
        magasin: "",
        article: "",
        quantite: ""
      }];
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

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Approvisionnement.vue?vue&type=template&id=60252e8c&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/Approvisionnement.vue?vue&type=template&id=60252e8c& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
                "vs-w": "7"
              }
            },
            [
              _c("vx-card", { attrs: { title: "Nouveau magasin" } }, [
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
                            value: _vm.approvisionnement.id,
                            callback: function($$v) {
                              _vm.$set(_vm.approvisionnement, "id", $$v)
                            },
                            expression: "approvisionnement.id"
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
                            _c("th", [_vm._v("Magasin")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Article")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Quantité")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Action")])
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.approvisionnement, function(item, index) {
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
                                  { attrs: { width: "50%" } },
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
                                  [
                                    _c("vs-input", {
                                      staticClass: "w-full qty",
                                      attrs: { name: "quantite" },
                                      model: {
                                        value: item.quantite,
                                        callback: function($$v) {
                                          _vm.$set(item, "quantite", $$v)
                                        },
                                        expression: "item.quantite"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("vs-td", { attrs: { width: "15%" } }, [
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
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-row" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col w-1/4" },
                          [
                            _c(
                              "vs-button",
                              {
                                staticClass: "mt-8",
                                attrs: { color: "primary", type: "filled" },
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
                      ])
                    ])
                  ])
                ])
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
                "vs-w": "5"
              }
            },
            [
              _c(
                "vx-card",
                { attrs: { title: "Liste magasin" } },
                [
                  _c(
                    "vs-table",
                    {
                      attrs: {
                        data: _vm.listeApprovisionnement,
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
                                  _c("vs-td", { attrs: { width: "1%" } }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(tr.identifiant) +
                                        "\n                            "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("vs-td", { attrs: { width: "2%" } }, [
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
                                              return _vm.editAppro(tr)
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
                                              return _vm.suppAppArt(tr)
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/mesVues/Approvisionnement.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/mesVues/Approvisionnement.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Approvisionnement_vue_vue_type_template_id_60252e8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Approvisionnement.vue?vue&type=template&id=60252e8c& */ "./resources/js/src/views/mesVues/Approvisionnement.vue?vue&type=template&id=60252e8c&");
/* harmony import */ var _Approvisionnement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Approvisionnement.vue?vue&type=script&lang=js& */ "./resources/js/src/views/mesVues/Approvisionnement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Approvisionnement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Approvisionnement_vue_vue_type_template_id_60252e8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Approvisionnement_vue_vue_type_template_id_60252e8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/mesVues/Approvisionnement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/mesVues/Approvisionnement.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/mesVues/Approvisionnement.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Approvisionnement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Approvisionnement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Approvisionnement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Approvisionnement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/mesVues/Approvisionnement.vue?vue&type=template&id=60252e8c&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/mesVues/Approvisionnement.vue?vue&type=template&id=60252e8c& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Approvisionnement_vue_vue_type_template_id_60252e8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Approvisionnement.vue?vue&type=template&id=60252e8c& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Approvisionnement.vue?vue&type=template&id=60252e8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Approvisionnement_vue_vue_type_template_id_60252e8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Approvisionnement_vue_vue_type_template_id_60252e8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);