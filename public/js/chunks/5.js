(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Magasin.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/Magasin.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      magasin: {
        id: "",
        libelle: ""
      }
    };
  },
  mounted: function mounted() {
    this.$store.dispatch('getMagasin');
  },
  computed: {
    listeMagasin: function listeMagasin() {
      return this.$store.state.listeMagasin;
    }
  },
  methods: {
    submitFormMagasin: function submitFormMagasin(e) {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.$vs.loading({
            type: 'radius',
            container: '.form-loading',
            scale: 1.2
          });

          if (_this.magasin.id) {
            _this.$store.dispatch('editMagasin', _this.magasin);
          } else {
            _this.$store.dispatch('addMagasin', _this.magasin);
          }
        } else {// form have errors
        }
      });
    },
    editMagasin: function editMagasin(data) {
      this.magasin.id = data.id;
      this.magasin.libelle = data.libelle;
    },
    suppMagasin: function suppMagasin(data) {
      this.magasin.id = data.id;
      this.$store.dispatch('deleteMagasin', this.magasin);
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Magasin.vue?vue&type=template&id=3907aa09&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/Magasin.vue?vue&type=template&id=3907aa09& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
                "vs-w": "3"
              }
            },
            [
              _c("vx-card", { attrs: { title: "Nouveau magasin" } }, [
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
                      model: {
                        value: _vm.magasin.id,
                        callback: function($$v) {
                          _vm.$set(_vm.magasin, "id", $$v)
                        },
                        expression: "magasin.id"
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
                        label: "Magasin",
                        placeholder: "Libellé",
                        name: "libelle"
                      },
                      model: {
                        value: _vm.magasin.libelle,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.magasin,
                            "libelle",
                            typeof $$v === "string" ? $$v.trim() : $$v
                          )
                        },
                        expression: "magasin.libelle"
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
                            value: _vm.errors.has("libelle"),
                            expression: "errors.has('libelle')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(" " + _vm._s(_vm.errors.first("libelle")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-button",
                      {
                        staticClass: "mt-5",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.submitFormMagasin($event)
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
                "vs-w": "7"
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
                        search: "",
                        pagination: "",
                        data: _vm.listeMagasin,
                        "max-items": "7"
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
                                      "\n                                " +
                                        _vm._s(tr.libelle) +
                                        "\n                            "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("vs-td", { attrs: { data: tr.libelle } }, [
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
                                              return _vm.editMagasin(tr)
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
                                              return _vm.suppMagasin(tr)
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
                          _c("vs-th", [_vm._v("Magasin")]),
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

/***/ "./resources/js/src/views/mesVues/Magasin.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/mesVues/Magasin.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Magasin_vue_vue_type_template_id_3907aa09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Magasin.vue?vue&type=template&id=3907aa09& */ "./resources/js/src/views/mesVues/Magasin.vue?vue&type=template&id=3907aa09&");
/* harmony import */ var _Magasin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Magasin.vue?vue&type=script&lang=js& */ "./resources/js/src/views/mesVues/Magasin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Magasin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Magasin_vue_vue_type_template_id_3907aa09___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Magasin_vue_vue_type_template_id_3907aa09___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/mesVues/Magasin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/mesVues/Magasin.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/mesVues/Magasin.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Magasin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Magasin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Magasin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Magasin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/mesVues/Magasin.vue?vue&type=template&id=3907aa09&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/mesVues/Magasin.vue?vue&type=template&id=3907aa09& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Magasin_vue_vue_type_template_id_3907aa09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Magasin.vue?vue&type=template&id=3907aa09& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Magasin.vue?vue&type=template&id=3907aa09&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Magasin_vue_vue_type_template_id_3907aa09___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Magasin_vue_vue_type_template_id_3907aa09___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);