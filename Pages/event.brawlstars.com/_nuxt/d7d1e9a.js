(window.webpackJsonp = window.webpackJsonp || []).push([[0, 9, 48, 49, 50, 51], {
    1042: function(t, o, e) {
        var n = e(1052);
        n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e(8).default)("4f5d4398", n, !0, {
            sourceMap: !1
        })
    },
    1050: function(t, o, e) {
        "use strict";
        e.r(o);
        var n = e(0)
          , r = e(101)
          , i = n.default.extend({
            name: "VideoControlButton",
            components: {
                LinkButtonWrapper: r.default
            },
            props: {
                href: {
                    type: String,
                    default: ""
                },
                to: {
                    type: String,
                    default: ""
                },
                target: {
                    type: String,
                    default: "_self"
                },
                xAlignment: {
                    type: String,
                    default: "left"
                },
                topAligned: {
                    type: Boolean,
                    default: !1
                }
            },
            methods: {
                onClick: function() {
                    this.$emit("on-click")
                }
            }
        })
          , a = (e(1051),
        e(1))
          , s = Object(a.a)(i, (function() {
            var t = this
              , o = t.$createElement
              , e = t._self._c || o;
            return e("LinkButtonWrapper", {
                staticClass: "VideoControlButton",
                class: {
                    "VideoControlButton--topAligned": t.$props.topAligned
                },
                attrs: {
                    to: t.$props.to,
                    href: t.$props.href,
                    target: t.$props.target
                },
                nativeOn: {
                    click: function(o) {
                        return t.onClick()
                    }
                }
            }, [e("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        left: "left" === t.$props.xAlignment,
                        right: "right" === t.$props.xAlignment
                    },
                    expression: "{\n      left: $props.xAlignment === 'left',\n      right: $props.xAlignment === 'right',\n\n    }"
                }],
                staticClass: "VideoControlButton__background"
            }), t._v(" "), e("div", {
                staticClass: "VideoControlButton__iconContainer"
            }, [e("div", {
                staticClass: "VideoControlButton__iconContainer__icon"
            }, [t._t("default")], 2)])])
        }
        ), [], !1, null, "0c68102e", null);
        o.default = s.exports
    },
    1051: function(t, o, e) {
        "use strict";
        e(1042)
    },
    1052: function(t, o, e) {
        var n = e(7)((function(t) {
            return t[1]
        }
        ));
        n.push([t.i, '.VideoControlButton[data-v-0c68102e]{cursor:pointer;width:80px;height:45px;pointer-events:auto;overflow:hidden;margin-top:2px;display:flex}.VideoControlButton__background[data-v-0c68102e]{background-color:#ee6d65;position:absolute;top:0;height:45px;width:79px;box-shadow:inset 0 -2px #c2554e,inset 0 4px #f38c86}.VideoControlButton__background[data-v-0c68102e]:after{content:" ";position:absolute;top:0;height:45px;width:80px}.VideoControlButton__background--left[data-v-0c68102e]{-webkit-transform:skew(-5deg);-moz-transform:skew(-5deg);-o-transform:skew(-5deg);border-right:2px solid #000;border-bottom:2px solid #000;border-bottom-right-radius:7px;border-top-right-radius:7px}.VideoControlButton__background--left[data-v-0c68102e]:after{-webkit-transform:skew(5deg);-moz-transform:skew(5deg);-o-transform:skew(5deg);left:0;border-left:2px solid #000;border-top:2px solid #000;border-bottom-right-radius:7px;border-top-right-radius:7px}.VideoControlButton--topAligned .VideoControlButton__background--left[data-v-0c68102e],.VideoControlButton--topAligned .VideoControlButton__background--left[data-v-0c68102e]:after{border-top-right-radius:0}.VideoControlButton__background--right[data-v-0c68102e]{-webkit-transform:skew(5deg);-moz-transform:skew(5deg);-o-transform:skew(5deg);border-left:2px solid #000;border-bottom:2px solid #000;margin-left:1px;border-bottom-left-radius:7px;border-top-left-radius:7px}.VideoControlButton__background--right[data-v-0c68102e]:after{-webkit-transform:skew(-5deg);-moz-transform:skew(-5deg);-o-transform:skew(-5deg);right:0;border-right:2px solid #000;border-top:2px solid #000;border-bottom-left-radius:7px;border-top-left-radius:7px}.VideoControlButton--topAligned .VideoControlButton__background--right[data-v-0c68102e],.VideoControlButton--topAligned .VideoControlButton__background--right[data-v-0c68102e]:after{border-top-left-radius:0}.VideoControlButton:hover .VideoControlButton__background[data-v-0c68102e]{filter:brightness(.85)}.VideoControlButton[data-v-0c68102e]:active{filter:brightness(.65)}.VideoControlButton__iconContainer[data-v-0c68102e]{position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center}.VideoControlButton__iconContainer__icon[data-v-0c68102e]{width:25px;height:25px}', ""]),
        n.locals = {},
        t.exports = n
    },
    1105: function(t, o, e) {
        var n = e(1160);
        n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e(8).default)("bc86c56e", n, !0, {
            sourceMap: !1
        })
    },
    1106: function(t, o, e) {
        var n = e(1164);
        n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e(8).default)("0b40dc82", n, !0, {
            sourceMap: !1
        })
    },
    1107: function(t, o, e) {
        var n = e(1167);
        n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e(8).default)("35161bbf", n, !0, {
            sourceMap: !1
        })
    },
    1108: function(t, o, e) {
        var n = e(1170);
        n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e(8).default)("06ad9734", n, !0, {
            sourceMap: !1
        })
    },
    1157: function(t, o, e) {
        t.exports = e.p + "img/ico_sound_on.a9406f9.svg"
    },
    1158: function(t, o, e) {
        t.exports = e.p + "img/ico_sound_off.edf3323.svg"
    },
    1159: function(t, o, e) {
        "use strict";
        e(1105)
    },
    1160: function(t, o, e) {
        var n = e(7)((function(t) {
            return t[1]
        }
        ));
        n.push([t.i, ".MuteButton[data-v-e8196b58]{position:relative}.MuteButton img[data-v-e8196b58]{height:100%;width:auto}", ""]),
        n.locals = {},
        t.exports = n
    },
    1161: function(t, o, e) {
        t.exports = e.p + "img/ico_expand.ef103fa.png"
    },
    1162: function(t, o, e) {
        t.exports = e.p + "img/ico_contract.732245a.png"
    },
    1163: function(t, o, e) {
        "use strict";
        e(1106)
    },
    1164: function(t, o, e) {
        var n = e(7)((function(t) {
            return t[1]
        }
        ));
        n.push([t.i, ".ExpandButton[data-v-4cf8d8db]{position:relative;right:-4px;cursor:pointer}.ExpandButton img[data-v-4cf8d8db]{height:100%;width:auto}", ""]),
        n.locals = {},
        t.exports = n
    },
    1165: function(t, o, e) {
        t.exports = e.p + "img/ico_down.16c34cc.svg"
    },
    1166: function(t, o, e) {
        "use strict";
        e(1107)
    },
    1167: function(t, o, e) {
        var n = e(7)((function(t) {
            return t[1]
        }
        ));
        n.push([t.i, '[data-v-5b724fcc] .VideoControlButton__iconContainer__icon{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.StreamSelectButton[data-v-5b724fcc]{position:relative}.StreamSelectButton__container[data-v-5b724fcc]{border:1px solid #fff;position:relative;height:35px;width:35px;border-radius:50%}.StreamSelectButton__container[data-v-5b724fcc]:before{content:"";position:absolute;height:37px;width:37px;border:1px solid #000;border-radius:50%;display:block;right:0;top:-2px;left:-2px;margin:auto}.StreamSelectButton__container__live-tag[data-v-5b724fcc]{position:relative;background:#f94343;border-radius:2px;border:1px solid #000;margin-top:-8px;text-align:center}.StreamSelectButton__container__live-tag p[data-v-5b724fcc]{font-size:7px;color:#fff;text-transform:uppercase;font-family:"Montserrat",sans-serif}.StreamSelectButton__container__image[data-v-5b724fcc]{width:100%;height:100%;overflow:hidden;border-radius:50%;display:flex;align-items:center;justify-content:center}.StreamSelectButton__container__image img[data-v-5b724fcc]{height:100%;width:auto}.StreamSelectButton__icon-container[data-v-5b724fcc]{width:20px;margin-left:4px;margin-top:8px}.StreamSelectButton__icon-container img[data-v-5b724fcc]{width:100%}', ""]),
        n.locals = {},
        t.exports = n
    },
    1168: function(t, o, e) {
        t.exports = e.p + "img/ico_reload.c8d8726.svg"
    },
    1169: function(t, o, e) {
        "use strict";
        e(1108)
    },
    1170: function(t, o, e) {
        var n = e(7)((function(t) {
            return t[1]
        }
        ));
        n.push([t.i, ".RefreshButton[data-v-6f55d31a]{position:relative;left:-4px}.RefreshButton img[data-v-6f55d31a]{height:100%;width:auto}", ""]),
        n.locals = {},
        t.exports = n
    },
    1210: function(t, o, e) {
        var n = e(1249);
        n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e(8).default)("2181c1fc", n, !0, {
            sourceMap: !1
        })
    },
    1236: function(t, o, e) {
        "use strict";
        e.r(o);
        e(33);
        var n = e(0)
          , r = e(2)
          , i = e(1237)
          , a = e(1238)
          , s = e(1239)
          , l = e(1240)
          , u = n.default.extend({
            name: "VideoControls",
            components: {
                MuteButton: i.default,
                ExpandButton: a.default,
                StreamSelectButton: s.default,
                RefreshButton: l.default
            },
            props: {
                isMuted: Boolean,
                isExpanded: Boolean,
                onlyMuteControl: Boolean,
                hideExpandButton: Boolean,
                showPlayButton: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    isShowingControls: !1,
                    showControlTimeout: null
                }
            },
            mounted: function() {
                this.showControls()
            },
            methods: {
                showControls: function() {
                    var t = this;
                    this.isShowingControls = !0,
                    this.$nextTick((function() {
                        t.$nuxt.$emit("video-controls-show")
                    }
                    )),
                    this.showControlTimeout && clearTimeout(this.showControlTimeout),
                    this.showControlTimeout = setTimeout((function() {
                        t.showPlayButton ? t.showControls() : (t.isShowingControls = !1,
                        t.$nextTick((function() {
                            t.$nuxt.$emit("video-controls-hide")
                        }
                        )))
                    }
                    ), 6e3)
                },
                onEnter: function(t, o) {
                    r.a.set(t, {
                        opacity: 0
                    }),
                    r.a.to(t, {
                        duration: .4,
                        opacity: 1,
                        ease: "Power2.easeInOut",
                        onComplete: o
                    })
                },
                onLeave: function(t, o) {
                    r.a.to(t, {
                        duration: .4,
                        opacity: 0,
                        ease: "Power2.easeInOut",
                        onComplete: o
                    })
                }
            }
        })
          , c = (e(1248),
        e(1))
          , d = Object(c.a)(u, (function() {
            var t = this
              , o = t.$createElement
              , n = t._self._c || o;
            return n("div", {
                staticClass: "VideoControls",
                on: {
                    click: t.showControls
                }
            }, [n("transition", {
                on: {
                    enter: t.onEnter,
                    leave: t.onLeave
                }
            }, [n("div", [t.isShowingControls ? n("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        left: t.$props.onlyMuteControl,
                        right: !t.$props.onlyMuteControl
                    },
                    expression: "{\n          left: $props.onlyMuteControl,\n          right: !$props.onlyMuteControl,\n        }"
                }],
                staticClass: "VideoControls__buttonContainer"
            }, [n("MuteButton", {
                attrs: {
                    "is-muted": t.$props.isMuted,
                    "x-alignment": "right"
                },
                on: {
                    "toggle-sound": function(o) {
                        return t.$emit("toggle-sound")
                    }
                }
            }), t._v(" "), t.$props.onlyMuteControl || t.$props.hideExpandButton ? t._e() : n("ExpandButton", {
                attrs: {
                    "is-expanded": t.$props.isExpanded
                },
                on: {
                    toggleFeed: function(o) {
                        return t.$emit("toggle-feed")
                    }
                }
            })], 1) : t._e(), t._v(" "), n("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        left: !t.$props.onlyMuteControl,
                        right: t.$props.onlyMuteControl
                    },
                    expression: "{\n          left: !$props.onlyMuteControl,\n          right: $props.onlyMuteControl,\n        }"
                }],
                staticClass: "VideoControls__buttonContainer"
            }, [t.$props.onlyMuteControl ? t._e() : n("StreamSelectButton", {
                on: {
                    "show-stream-select": function(o) {
                        return t.$emit("show-stream-select")
                    }
                }
            }), t._v(" "), t.$props.onlyMuteControl ? t._e() : n("RefreshButton", {
                on: {
                    refresh: function(o) {
                        return t.$emit("refresh")
                    }
                }
            })], 1)])]), t._v(" "), t.$props.showPlayButton ? n("div", {
                staticClass: "VideoControls__playerButton",
                on: {
                    click: function(o) {
                        return t.$emit("play")
                    }
                }
            }, [n("img", {
                attrs: {
                    src: e(1247)
                }
            })]) : t._e()], 1)
        }
        ), [], !1, null, "e55be9d8", null);
        o.default = d.exports
    },
    1237: function(t, o, e) {
        "use strict";
        e.r(o);
        var n = e(0)
          , r = e(1050)
          , i = e(1157)
          , a = e(1158)
          , s = n.default.extend({
            name: "MuteButton",
            components: {
                VideoControlButton: r.default
            },
            props: {
                isMuted: Boolean,
                xAlignment: {
                    type: String,
                    default: "left"
                }
            },
            computed: {
                iconSrc: function() {
                    return this.isMuted ? a : i
                }
            }
        })
          , l = (e(1159),
        e(1))
          , u = Object(l.a)(s, (function() {
            var t = this
              , o = t.$createElement
              , e = t._self._c || o;
            return e("VideoControlButton", {
                staticClass: "MuteButton",
                class: {
                    "MuteButton--right": "right" === t.$props.xAlignment,
                    "MuteButton--left": "left" === t.$props.xAlignment
                },
                attrs: {
                    "top-aligned": "",
                    "x-alignment": t.$props.xAlignment
                },
                on: {
                    "on-click": function(o) {
                        return t.$emit("toggle-sound")
                    }
                }
            }, [e("img", {
                attrs: {
                    src: t.iconSrc
                }
            })])
        }
        ), [], !1, null, "e8196b58", null);
        o.default = u.exports
    },
    1238: function(t, o, e) {
        "use strict";
        e.r(o);
        var n = e(0)
          , r = e(1050)
          , i = e(1161)
          , a = e(1162)
          , s = n.default.extend({
            name: "ExpandButton",
            components: {
                VideoControlButton: r.default
            },
            props: {
                isExpanded: Boolean
            },
            computed: {
                iconSrc: function() {
                    return this.isExpanded ? i : a
                }
            }
        })
          , l = (e(1163),
        e(1))
          , u = Object(l.a)(s, (function() {
            var t = this
              , o = t.$createElement
              , e = t._self._c || o;
            return e("VideoControlButton", {
                staticClass: "ExpandButton",
                attrs: {
                    "x-alignment": "right"
                },
                on: {
                    "on-click": function(o) {
                        return t.$emit("toggleFeed")
                    }
                }
            }, [e("img", {
                attrs: {
                    src: t.iconSrc
                }
            })])
        }
        ), [], !1, null, "4cf8d8db", null);
        o.default = u.exports
    },
    1239: function(t, o, e) {
        "use strict";
        e.r(o);
        var n = e(0)
          , r = e(1050)
          , i = n.default.extend({
            name: "StreamSelectButton",
            components: {
                VideoControlButton: r.default
            },
            props: {
                isMuted: Boolean,
                xAlignment: {
                    type: String,
                    default: "left"
                }
            },
            data: function() {
                return {
                    dummyImg: e(532)
                }
            },
            computed: {
                iconSrc: function() {
                    return e(1165)
                }
            }
        })
          , a = (e(1166),
        e(1))
          , s = Object(a.a)(i, (function() {
            var t = this
              , o = t.$createElement
              , e = t._self._c || o;
            return e("VideoControlButton", {
                staticClass: "StreamSelectButton",
                class: {
                    "StreamSelectButton--right": "right" === t.$props.xAlignment,
                    "StreamSelectButton--left": "left" === t.$props.xAlignment
                },
                attrs: {
                    "x-alignment": t.$props.xAlignment,
                    "top-aligned": ""
                },
                on: {
                    "on-click": function(o) {
                        return t.$emit("show-stream-select")
                    }
                }
            }, [e("div", {
                staticClass: "StreamSelectButton__container"
            }, [e("div", {
                staticClass: "StreamSelectButton__container__image"
            }, [e("img", {
                attrs: {
                    src: t.dummyImg,
                    alt: ""
                }
            })]), t._v(" "), e("div", {
                staticClass: "StreamSelectButton__container__live-tag"
            }, [e("p", [t._v("live")])])]), t._v(" "), e("div", {
                staticClass: "StreamSelectButton__icon-container"
            }, [e("img", {
                attrs: {
                    src: t.iconSrc
                }
            })])])
        }
        ), [], !1, null, "5b724fcc", null);
        o.default = s.exports
    },
    1240: function(t, o, e) {
        "use strict";
        e.r(o);
        var n = e(0)
          , r = e(1050)
          , i = n.default.extend({
            name: "RefreshButton",
            components: {
                VideoControlButton: r.default
            },
            props: {
                isMuted: Boolean,
                xAlignment: {
                    type: String,
                    default: "left"
                }
            },
            computed: {
                iconSrc: function() {
                    return e(1168)
                }
            }
        })
          , a = (e(1169),
        e(1))
          , s = Object(a.a)(i, (function() {
            var t = this
              , o = t.$createElement
              , e = t._self._c || o;
            return e("VideoControlButton", {
                staticClass: "RefreshButton",
                class: {
                    "RefreshButton--right": "right" === t.$props.xAlignment,
                    "RefreshButton--left": "left" === t.$props.xAlignment
                },
                attrs: {
                    "x-alignment": t.$props.xAlignment
                },
                on: {
                    "on-click": function(o) {
                        return t.$emit("refresh")
                    }
                }
            }, [e("img", {
                attrs: {
                    src: t.iconSrc
                }
            })])
        }
        ), [], !1, null, "6f55d31a", null);
        o.default = s.exports
    },
    1247: function(t, o, e) {
        t.exports = e.p + "img/play-button-peach.a8a6e5a.svg"
    },
    1248: function(t, o, e) {
        "use strict";
        e(1210)
    },
    1249: function(t, o, e) {
        var n = e(7)((function(t) {
            return t[1]
        }
        ));
        n.push([t.i, ".VideoControls[data-v-e55be9d8]{position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;overflow:hidden}.VideoControls__playerButton[data-v-e55be9d8]{position:relative;display:flex;cursor:pointer}.VideoControls__buttonContainer[data-v-e55be9d8]{position:absolute;top:-4px}.VideoControls__buttonContainer--left[data-v-e55be9d8]{left:-4px}.VideoControls__buttonContainer--right[data-v-e55be9d8]{right:-4px}", ""]),
        n.locals = {},
        t.exports = n
    }
}]);
