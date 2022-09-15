(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      wasSidebarOpen: null,
      permissions: {
        "ajustement": {
          "voir": false,
          "ajouter": false,
          "modifier": false,
          "supprimer": false
        },
        "approvisionnement": {
          "voir": false,
          "ajouter": false,
          "modifier": false,
          "supprimer": false
        },
        "article": {
          "voir": false,
          "ajouter": false,
          "modifier": false,
          "supprimer": false
        },
        "client": {
          "voir": false,
          "ajouter": false,
          "modifier": false,
          "supprimer": false
        },
        "commande": {
          "voir": false,
          "ajouter": false,
          "modifier": false,
          "supprimer": false
        },
        "depense": {
          "voir": false,
          "ajouter": false,
          "modifier": false,
          "supprimer": false
        },
        "magasin": {
          "voir": false,
          "ajouter": false,
          "modifier": false,
          "supprimer": false
        },
        "transfert": {
          "voir": false,
          "ajouter": false,
          "modifier": false,
          "supprimer": false
        },
        "user": {
          "voir": false,
          "ajouter": false,
          "modifier": false,
          "supprimer": false
        },
        "reglement": {
          "voir": false,
          "ajouter": false,
          "modifier": false,
          "supprimer": false
        },
        "vente": {
          "voir": false,
          "ajouter": false,
          "modifier": false,
          "supprimer": false
        }
      },
      user: {
        id: "",
        nomPrenom: "",
        email: "",
        motDePasse: "",
        motDePasse_confirmation: ""
      }
    };
  },
  mounted: function mounted() {
    this.wasSidebarOpen = this.$store.state.reduceButton;
    this.$store.commit('TOGGLE_REDUCE_BUTTON', true);
    this.$store.dispatch('getUser');
  },
  computed: {
    listeUser: function listeUser() {
      return this.$store.state.listeUser;
    }
  },
  methods: {
    registerUserJWt: function registerUserJWt() {
      // If form is not validated or user is already login return
      if (!this.validateForm) {
        if (this.user.id) {
          this.$store.dispatch('updateUser', {
            'id': this.id,
            'user': this.user,
            'permission': this.permissions
          });
        } else {
          this.$store.dispatch('createUser', {
            'user': this.user,
            'permission': this.permissions
          });
        }
      }
    },
    editUser: function editUser(data) {
      var _this = this;

      this.user.id = data.id;
      this.user.nomPrenom = data.name;
      this.user.email = data.email;
      Object.values(data['droit']).forEach(function (value, key) {
        _this.permissions[value.page][value.permission] = value.statut;
      });
    },
    suppUser: function suppUser(data) {
      this.$store.dispatch('deleteUser', {
        'id': data.id
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false);
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Register.vue?vue&type=template&id=3e428cd4&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/Register.vue?vue&type=template&id=3e428cd4& ***!
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
                "vs-w": "6"
              }
            },
            [
              _c("vx-card", { attrs: { title: "Nouvel utilisateur" } }, [
                _c(
                  "form",
                  { staticClass: "form-loading" },
                  [
                    _c(
                      "div",
                      { staticClass: "vx-row " },
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
                            value: _vm.user.id,
                            callback: function($$v) {
                              _vm.$set(_vm.user, "id", $$v)
                            },
                            expression: "user.id"
                          }
                        }),
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
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "w-full",
                              attrs: {
                                "data-vv-validate-on": "blur",
                                "label-placeholder": "Nom & prénom",
                                name: "nomPrenom",
                                placeholder: "Nom & Prénom"
                              },
                              model: {
                                value: _vm.user.nomPrenom,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "nomPrenom", $$v)
                                },
                                expression: "user.nomPrenom"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger text-sm" }, [
                              _vm._v(_vm._s(_vm.errors.first("nomPrenom")))
                            ])
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
                                  value: "required|email",
                                  expression: "'required|email'"
                                }
                              ],
                              staticClass: "w-full mt-6",
                              attrs: {
                                "data-vv-validate-on": "blur",
                                name: "email",
                                type: "email",
                                "label-placeholder": "Email",
                                placeholder: "Email"
                              },
                              model: {
                                value: _vm.user.email,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "email", $$v)
                                },
                                expression: "user.email"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger text-sm" }, [
                              _vm._v(_vm._s(_vm.errors.first("email")))
                            ])
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
                                  value: "required|min:6|max:10",
                                  expression: "'required|min:6|max:10'"
                                }
                              ],
                              ref: "password",
                              staticClass: "w-full mt-6",
                              attrs: {
                                type: "password",
                                "data-vv-validate-on": "blur",
                                name: "motDePasse",
                                "label-placeholder": "motDePasse",
                                placeholder: "motDePasse"
                              },
                              model: {
                                value: _vm.user.motDePasse,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "motDePasse", $$v)
                                },
                                expression: "user.motDePasse"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger text-sm" }, [
                              _vm._v(_vm._s(_vm.errors.first("motDePasse")))
                            ])
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
                                  value: "min:6|max:10|confirmed:motDePasse",
                                  expression:
                                    "'min:6|max:10|confirmed:motDePasse'"
                                }
                              ],
                              staticClass: "w-full mt-6",
                              attrs: {
                                type: "password",
                                "data-vv-validate-on": "blur",
                                "data-vv-as": "password",
                                name: "motDePasse_confirmation",
                                "label-placeholder": "Confirm Password",
                                placeholder: "Confirm Password"
                              },
                              model: {
                                value: _vm.user.motDePasse_confirmation,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.user,
                                    "motDePasse_confirmation",
                                    $$v
                                  )
                                },
                                expression: "user.motDePasse_confirmation"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger text-sm" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("motDePasse_confirmation")
                                )
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "block overflow-x-auto mt-5" }, [
                      _c(
                        "table",
                        { staticClass: "w-full permissions-table" },
                        [
                          _c(
                            "tr",
                            _vm._l(
                              [
                                "Module",
                                "Voir",
                                "Ajouter",
                                "Modifier",
                                "Supprimer"
                              ],
                              function(heading) {
                                return _c(
                                  "th",
                                  {
                                    key: heading,
                                    staticClass:
                                      "font-semibold text-base text-left px-3 py-2"
                                  },
                                  [_vm._v(_vm._s(heading))]
                                )
                              }
                            ),
                            0
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.permissions, function(val, name) {
                            return _c(
                              "tr",
                              { key: name },
                              [
                                _c("td", { staticClass: "px-3 py-2" }, [
                                  _vm._v(_vm._s(name))
                                ]),
                                _vm._v(" "),
                                _vm._l(val, function(permission, name) {
                                  return _c(
                                    "td",
                                    {
                                      key: name + permission,
                                      staticClass: "px-3 py-2"
                                    },
                                    [
                                      _c("vs-checkbox", {
                                        model: {
                                          value: val[name],
                                          callback: function($$v) {
                                            _vm.$set(val, name, $$v)
                                          },
                                          expression: "val[name]"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                })
                              ],
                              2
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "vs-button",
                      {
                        staticClass: "mt-6",
                        attrs: { type: "border" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.registerUserJWt($event)
                          }
                        }
                      },
                      [_vm._v("Enregistrer")]
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
                "vs-w": "6"
              }
            },
            [
              _c(
                "vx-card",
                { attrs: { title: "Liste Utilisateurs " } },
                [
                  _c(
                    "vs-table",
                    {
                      attrs: {
                        search: "",
                        pagination: "",
                        data: _vm.listeUser,
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
                                        _vm._s(tr.name) +
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
                                              return _vm.editUser(tr)
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
                                              return _vm.suppUser(tr)
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
                          _c("vs-th", [_vm._v("Nom")]),
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

/***/ "./resources/js/src/views/mesVues/Register.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/mesVues/Register.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_3e428cd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=3e428cd4& */ "./resources/js/src/views/mesVues/Register.vue?vue&type=template&id=3e428cd4&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/src/views/mesVues/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_3e428cd4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_3e428cd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/mesVues/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/mesVues/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/mesVues/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/mesVues/Register.vue?vue&type=template&id=3e428cd4&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/mesVues/Register.vue?vue&type=template&id=3e428cd4& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3e428cd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=3e428cd4& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Register.vue?vue&type=template&id=3e428cd4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3e428cd4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3e428cd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);