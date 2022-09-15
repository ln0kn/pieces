(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Magasin.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/Magasin.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_video_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-video-player */ "./node_modules/vue-video-player/dist/vue-video-player.js");
/* harmony import */ var vue_video_player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_video_player__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! video.js/dist/video-js.css */ "./node_modules/video.js/dist/video-js.css");
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      wasSidebarOpen: null
    };
  },
  computed: {
    mediaType: function mediaType() {
      var _this = this;

      return function (media) {
        if (media.img) {
          var ext = media.img.split('.').pop();
          if (_this.mediaExtensions.img.includes(ext)) return 'image';
        } else if (media.sources && media.poster) {
          // other validations
          return 'video';
        }
      };
    },
    playerOptions: function playerOptions() {
      return function (media) {
        return {
          height: '360',
          fluid: true,
          autoplay: false,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: media.sources,
          poster: media.poster
        };
      };
    }
  },
  methods: {
    loadContent: function loadContent() {
      var _this2 = this;

      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: "#button-load-more-posts",
        scale: 0.45
      });
      setTimeout(function () {
        _this2.$vs.loading.close("#button-load-more-posts > .con-vs-loading");
      }, 3000);
    }
  },
  components: {
    videoPlayer: vue_video_player__WEBPACK_IMPORTED_MODULE_0__["videoPlayer"]
  },
  mounted: function mounted() {//    this.wasSidebarOpen = this.$store.state.reduceButton;
    //    this.$store.commit('TOGGLE_REDUCE_BUTTON', true)
  },
  beforeDestroy: function beforeDestroy() {//    if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Magasin.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/Magasin.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*@import \"@sass/vuexy/pages/profile.scss\";*/", ""]);
// Exports
module.exports = exports;


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
  return _c("div", { attrs: { id: "profile-page" } }, [
    _c("div", { staticClass: "profile-header" }, [
      _c("div", { staticClass: "relative" }, [
        _c("div", { staticClass: "cover-container rounded-t-lg" }, [
          _c("img", {
            staticClass: "responsive block",
            attrs: { src: _vm.user_info.cover_img, alt: "user-profile-cover" }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "profile-img-container pointer-events-none" },
          [
            _c(
              "div",
              [
                _c("vs-avatar", {
                  staticClass: "user-profile-img",
                  attrs: { src: _vm.user_info.profile_img, size: "85px" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "profile-actions pointer-events-auto flex" },
              [
                _c("vs-button", {
                  attrs: {
                    "icon-pack": "feather",
                    radius: "",
                    icon: "icon-edit-2"
                  }
                }),
                _vm._v(" "),
                _c("vs-button", {
                  staticClass: "ml-2 lg:ml-4",
                  attrs: {
                    "icon-pack": "feather",
                    radius: "",
                    icon: "icon-settings"
                  }
                })
              ],
              1
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex items-center justify-end flex-wrap profile-header-nav p-6"
        },
        [
          _c(
            "div",
            { staticClass: "block sm:hidden" },
            [
              _c("feather-icon", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isNavOpen,
                    expression: "!isNavOpen"
                  }
                ],
                staticClass: "vx-navbar-toggler cursor-pointer",
                attrs: { icon: "AlignJustifyIcon" },
                on: {
                  click: function($event) {
                    _vm.isNavOpen = !_vm.isNavOpen
                  }
                }
              }),
              _vm._v(" "),
              _c("feather-icon", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isNavOpen,
                    expression: "isNavOpen"
                  }
                ],
                staticClass: "vx-navbar-toggler cursor-pointer",
                attrs: { icon: "XIcon" },
                on: {
                  click: function($event) {
                    _vm.isNavOpen = !_vm.isNavOpen
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "w-full flex-grow sm:flex sm:items-center sm:w-auto",
              class: _vm.isNavOpen ? "block" : "hidden"
            },
            [
              _c("div", { staticClass: "text-sm sm:flex-grow" }, [
                _c(
                  "ul",
                  {
                    staticClass:
                      "sm:flex justify-around mt-8 w-full md:mt-0 md:ml-auto md:w-3/4"
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "p-2 sm:p-0" },
                      [
                        _c("router-link", { attrs: { to: "/pages/profile" } }, [
                          _vm._v("Timeline")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "p-2 sm:p-0" },
                      [
                        _c("router-link", { attrs: { to: "/pages/profile" } }, [
                          _vm._v("About")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "p-2 sm:p-0" },
                      [
                        _c("router-link", { attrs: { to: "/pages/profile" } }, [
                          _vm._v("Photos")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "p-2 sm:p-0" },
                      [
                        _c("router-link", { attrs: { to: "/pages/profile" } }, [
                          _vm._v("Friends")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "p-2 sm:p-0" },
                      [
                        _c("router-link", { attrs: { to: "/pages/profile" } }, [
                          _vm._v("Videos")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "p-2 sm:p-0" },
                      [
                        _c("router-link", { attrs: { to: "/pages/profile" } }, [
                          _vm._v("Events")
                        ])
                      ],
                      1
                    )
                  ]
                )
              ])
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/4" },
        [
          _c(
            "vx-card",
            { staticClass: "mt-base", attrs: { title: "About" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [_c("feather-icon", { attrs: { icon: "MoreHorizontalIcon" } })],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "user-bio" }, [
                _c("p", [
                  _vm._v(
                    "Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-5" }, [
                _c("h6", [_vm._v("Joined:")]),
                _vm._v(" "),
                _c("p", [_vm._v("November 15, 2015")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-5" }, [
                _c("h6", [_vm._v("Lives:")]),
                _vm._v(" "),
                _c("p", [_vm._v("New York, USA")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-5" }, [
                _c("h6", [_vm._v("Email:")]),
                _vm._v(" "),
                _c("p", [_vm._v("bucketful@fiendhead.org")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-5" }, [
                _c("h6", [_vm._v("Website:")]),
                _vm._v(" "),
                _c("p", [_vm._v("www.pixinvent.com")])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "social-links flex mt-4" },
                [
                  _c("feather-icon", {
                    staticClass: "mr-2",
                    attrs: {
                      svgClasses:
                        "h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded",
                      icon: "FacebookIcon"
                    }
                  }),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "mr-2",
                    attrs: {
                      svgClasses:
                        "h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded",
                      icon: "TwitterIcon"
                    }
                  }),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "mr-2",
                    attrs: {
                      svgClasses:
                        "h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded",
                      icon: "InstagramIcon"
                    }
                  })
                ],
                1
              )
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "vx-card",
            { staticClass: "mt-base", attrs: { title: "Suggested Pages" } },
            [
              _c(
                "ul",
                { staticClass: "page-suggestions-list" },
                _vm._l(_vm.suggestedPages, function(page) {
                  return _c(
                    "li",
                    {
                      key: page.index,
                      staticClass: "page-suggestion flex items-center mb-4"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "mr-3" },
                        [
                          _c("vs-avatar", {
                            staticClass: "m-0",
                            attrs: { src: page.img, size: "35px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "leading-tight" }, [
                        _c("p", { staticClass: "font-medium" }, [
                          _vm._v(_vm._s(_vm._f("capitalize")(page.title)))
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-xs" }, [
                          _vm._v(_vm._s(_vm._f("capitalize")(page.type)))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ml-auto" }, [
                        _c(
                          "div",
                          { staticClass: "flex" },
                          [
                            _c("feather-icon", {
                              staticClass: "mr-2 cursor-pointer",
                              attrs: { icon: "StarIcon", svgClasses: "h-4 w-4" }
                            })
                          ],
                          1
                        )
                      ])
                    ]
                  )
                }),
                0
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "vx-card",
            { staticClass: "mt-base", attrs: { title: "Twitter Feeds" } },
            [
              _c(
                "ul",
                { staticClass: "twitter-feeds-list" },
                _vm._l(_vm.twitterFeeds, function(feed, index) {
                  return _c(
                    "li",
                    {
                      key: feed.id,
                      staticClass: "twitter-feed",
                      class: { "mt-8": index }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "twitter-feed-header flex items-center"
                        },
                        [
                          _c("vs-avatar", {
                            staticClass: "m-0",
                            attrs: { src: feed.authorAvatar, size: "35px" }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "leading-tight ml-3" }, [
                            _c(
                              "p",
                              { staticClass: "feed-author font-semibold" },
                              [_vm._v(_vm._s(feed.authorDisplayName))]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "flex items-center" },
                              [
                                _c("small", [
                                  _vm._v("@" + _vm._s(feed.authorUsername))
                                ]),
                                _c("feather-icon", {
                                  staticClass: "ml-1",
                                  attrs: {
                                    icon: "CheckIcon",
                                    svgClasses:
                                      "h-3 w-3 bg-primary rounded-full text-white"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "mt-4" }, [
                        _vm._v(_vm._s(feed.content))
                      ]),
                      _vm._v(" "),
                      feed.tags.length
                        ? _c(
                            "div",
                            { staticClass: "tags-container" },
                            _vm._l(feed.tags, function(tag) {
                              return _c(
                                "span",
                                {
                                  key: tag,
                                  staticClass: "mr-2 text-primary",
                                  attrs: { id: "tag" }
                                },
                                [_vm._v("#" + _vm._s(tag))]
                              )
                            }),
                            0
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("small", { staticClass: "mt-3 inline-block" }, [
                        _vm._v(_vm._s(_vm._f("date")(feed.time, true)))
                      ])
                    ]
                  )
                }),
                0
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/2" },
        _vm._l(_vm.userPosts, function(post, index) {
          return _c("vx-card", { key: index, staticClass: "mt-base" }, [
            _c("div", [
              _c(
                "div",
                { staticClass: "post-header flex justify-between mb-4" },
                [
                  _c("div", { staticClass: "flex items-center" }, [
                    _c(
                      "div",
                      [
                        _c("vs-avatar", {
                          staticClass: "m-0",
                          attrs: { src: _vm.userLatestPhotos[0], size: "45px" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "ml-4" }, [
                      _c("h6", [_vm._v(_vm._s(post.author))]),
                      _vm._v(" "),
                      _c("small", [
                        _vm._v(
                          _vm._s(_vm._f("date")(post.time, true)) +
                            " at " +
                            _vm._s(_vm._f("time")(post.time))
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex" },
                    [
                      _c("feather-icon", {
                        staticClass: "ml-4",
                        attrs: {
                          icon: "HeartIcon",
                          svgClasses: {
                            "text-danger fill-current stroke-current":
                              post.isLiked
                          }
                        }
                      })
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "post-content" }, [
                _c("p", [_vm._v(_vm._s(post.text))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "post-media-container mb-6 mt-4" }, [
                _c(
                  "ul",
                  { staticClass: "flex post-media-list" },
                  _vm._l(post.media.slice(0, 2), function(media, mediaIdex) {
                    return _c(
                      "li",
                      { key: mediaIdex, staticClass: "post-media m-1 w-full" },
                      [
                        _vm.mediaType(media) == "image"
                          ? _c("img", {
                              staticClass: "responsive rounded",
                              attrs: { src: media.img, alt: "user-upload" }
                            })
                          : _vm.mediaType(media) == "video"
                          ? _vm._o(
                              _c("video-player", {
                                ref: "player",
                                refInFor: true,
                                staticClass: "media-video-player",
                                attrs: { options: _vm.playerOptions(media) }
                              }),
                              0,
                              mediaIdex
                            )
                          : _c(
                              "span",
                              { staticClass: "text-lg text-primary" },
                              [_vm._v("Unknown Media Type")]
                            )
                      ],
                      1
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                post.media.length > 2
                  ? _c("span", { staticClass: "flex justify-end" }, [
                      _c(
                        "a",
                        {
                          staticClass: "inline-flex items-center text-sm",
                          attrs: { href: "" }
                        },
                        [
                          _c("span", [_vm._v("View All")]),
                          _vm._v(" "),
                          _c("feather-icon", {
                            attrs: {
                              icon: _vm.$vs.rtl
                                ? "ChevronsLeftIcon"
                                : "ChevronsRightIcon",
                              svgClasses: "h-4 w-4"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "flex justify-between" }, [
                  _c("div", { staticClass: "flex items-center" }, [
                    _c(
                      "div",
                      { staticClass: "flex items-center" },
                      [
                        _c("feather-icon", {
                          staticClass: "mr-2",
                          attrs: { icon: "HeartIcon", svgClasses: "h-5 w-5" }
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(post.likes))])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "users-liked user-list ml-3 sm:ml-6" },
                      _vm._l(post.usersLiked, function(user, userIndex) {
                        return _c(
                          "li",
                          { key: userIndex },
                          [
                            _c(
                              "vx-tooltip",
                              {
                                attrs: { text: user.name, position: "bottom" }
                              },
                              [
                                _c("vs-avatar", {
                                  staticClass:
                                    "border-2 border-white border-solid -m-1",
                                  attrs: { src: user.img, size: "30px" }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("small", { staticClass: "ml-2" }, [
                      _vm._v("+" + _vm._s(post.likes - 5) + " more")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex items-center" },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-2",
                        attrs: {
                          icon: "MessageSquareIcon",
                          svgClasses: "h-5 w-5"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(post.comments))])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "comments-container mt-4" }, [
                  _c(
                    "ul",
                    { staticClass: "user-comments-list" },
                    _vm._l(post.usersCommented.slice(0, 2), function(
                      commentedUser,
                      commentIndex
                    ) {
                      return _c(
                        "li",
                        {
                          key: commentIndex,
                          staticClass: "commented-user flex items-center mb-4"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "mr-3" },
                            [
                              _c("vs-avatar", {
                                staticClass: "m-0",
                                attrs: { src: commentedUser.img, size: "30px" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "leading-tight" }, [
                            _c("p", { staticClass: "font-medium" }, [
                              _vm._v(_vm._s(commentedUser.author))
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-xs" }, [
                              _vm._v(_vm._s(commentedUser.comment))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "ml-auto" }, [
                            _c(
                              "div",
                              { staticClass: "flex" },
                              [
                                _c("feather-icon", {
                                  staticClass: "mr-2 cursor-pointer",
                                  attrs: {
                                    icon: "HeartIcon",
                                    svgClasses: "h-4 w-4"
                                  }
                                }),
                                _vm._v(" "),
                                _c("feather-icon", {
                                  staticClass: "cursor-pointer",
                                  attrs: {
                                    icon: "MessageSquareIcon",
                                    svgClasses: "h-4 w-4"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  post.usersCommented.length > 2
                    ? _c("span", { staticClass: "flex justify-end" }, [
                        _c(
                          "a",
                          {
                            staticClass: "inline-flex items-center text-sm",
                            attrs: { href: "" }
                          },
                          [
                            _c("span", [_vm._v("View All")]),
                            _vm._v(" "),
                            _c("feather-icon", {
                              attrs: {
                                icon: _vm.$vs.rtl
                                  ? "ChevronsLeftIcon"
                                  : "ChevronsRightIcon",
                                svgClasses: "h-4 w-4"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "post-comment" },
                  [
                    _c("vs-textarea", {
                      staticClass: "mb-2",
                      attrs: { label: "Add Comment" },
                      model: {
                        value: post.commentbox,
                        callback: function($$v) {
                          _vm.$set(post, "commentbox", $$v)
                        },
                        expression: "post.commentbox"
                      }
                    }),
                    _vm._v(" "),
                    _c("vs-button", { attrs: { size: "small" } }, [
                      _vm._v("Post Comment")
                    ])
                  ],
                  1
                )
              ])
            ])
          ])
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/4" },
        [
          _c(
            "vx-card",
            { staticClass: "mt-base", attrs: { title: "Latest Photos" } },
            [
              _c(
                "div",
                { staticClass: "vx-row pt-2" },
                _vm._l(_vm.userLatestPhotos, function(img, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      staticClass: "vx-col w-1/2 sm:w-1/2 md:w-1/3 xl:1/4"
                    },
                    [
                      _c("img", {
                        staticClass:
                          "rounded mb-4 user-latest-image responsive",
                        attrs: { src: img, alt: "latest-upload" }
                      })
                    ]
                  )
                }),
                0
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "vx-card",
            { staticClass: "mt-base", attrs: { title: "Suggestions" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [_c("feather-icon", { attrs: { icon: "MoreHorizontalIcon" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "friend-suggesions-list" },
                _vm._l(_vm.suggestedFriends, function(friend, index) {
                  return _c(
                    "li",
                    {
                      key: index,
                      staticClass: "friend-suggestion flex items-center mb-4"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "mr-3" },
                        [
                          _c("vs-avatar", {
                            staticClass: "m-0",
                            attrs: { src: friend.avatar, size: "35px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "leading-tight" }, [
                        _c("p", { staticClass: "font-medium" }, [
                          _vm._v(_vm._s(friend.name))
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-xs" }, [
                          _vm._v(
                            _vm._s(friend.mutualFriends) + " Mutual Friends"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "ml-auto cursor-pointer" },
                        [
                          _c("vs-button", {
                            attrs: {
                              radius: "",
                              type: "border",
                              "icon-pack": "feather",
                              icon: "icon-user-plus"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "template",
                { slot: "footer" },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "w-full",
                      attrs: { "icon-pack": "feather", icon: "icon-plus" }
                    },
                    [_vm._v("Load More")]
                  )
                ],
                1
              )
            ],
            2
          ),
          _vm._v(" "),
          _c("vx-card", { staticClass: "mt-base", attrs: { title: "Polls" } }, [
            _c(
              "ul",
              { staticClass: "polls-list" },
              _vm._l(_vm.polls, function(poll) {
                return _c(
                  "li",
                  { key: poll.id, staticClass: "poll" },
                  [
                    _c("h6", { staticClass: "poll-title" }, [
                      _vm._v(_vm._s(poll.title))
                    ]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "poll-options-result" },
                      _vm._l(poll.options, function(option) {
                        return _c(
                          "li",
                          {
                            key: option.value,
                            staticClass: "poll-option mt-6"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "flex" },
                              [
                                _c(
                                  "vs-radio",
                                  {
                                    attrs: { "vs-value": option.value },
                                    model: {
                                      value: _vm.userPoll,
                                      callback: function($$v) {
                                        _vm.userPoll = $$v
                                      },
                                      expression: "userPoll"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm._f("capitalize")(option.text))
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("span", { staticClass: "block ml-auto" }, [
                                  _vm._v(_vm._s(option.voted) + "%")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("vs-progress", {
                              attrs: { percent: option.voted }
                            }),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "users-voted user-list mt-2" },
                              _vm._l(option.usersVoted, function(
                                user,
                                userIndex
                              ) {
                                return _c(
                                  "li",
                                  { key: userIndex },
                                  [
                                    _c(
                                      "vx-tooltip",
                                      {
                                        attrs: {
                                          text: user.name,
                                          position: "bottom"
                                        }
                                      },
                                      [
                                        _c("vs-avatar", {
                                          staticClass:
                                            "border-2 border-white border-solid -m-1",
                                          attrs: {
                                            src: user.avatar,
                                            size: "30px"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              }),
                              0
                            )
                          ],
                          1
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("vs-button", { staticClass: "mt-5 w-full" }, [
                      _vm._v("Vote Now")
                    ])
                  ],
                  1
                )
              }),
              0
            )
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-full" }, [
        _c(
          "div",
          { staticClass: "flex justify-center mt-base" },
          [
            _c(
              "vs-button",
              {
                staticClass: "vs-con-loading__container",
                attrs: { id: "button-load-more-posts" },
                on: { click: _vm.loadContent }
              },
              [_vm._v("Load More")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Magasin.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mesVues/Magasin.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Magasin.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Magasin.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
/* empty/unused harmony star reexport *//* harmony import */ var _Magasin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Magasin.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/mesVues/Magasin.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/src/views/mesVues/Magasin.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/mesVues/Magasin.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Magasin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Magasin.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mesVues/Magasin.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Magasin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Magasin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Magasin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Magasin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Magasin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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



/***/ }),

/***/ 1:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);