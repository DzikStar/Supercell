(window.webpackJsonp = window.webpackJsonp || []).push([[26, 8], {
    1043: function(t, o, n) {
        var r = n(1055);
        r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        n(8).default)("90a2dd36", r, !0, {
            sourceMap: !1
        })
    },
    1054: function(t, o, n) {
        "use strict";
        n(1043)
    },
    1055: function(t, o, n) {
        var r = n(7)((function(t) {
            return t[1]
        }
        ));
        r.push([t.i, '.roundButton[data-v-10990900]{box-shadow:0 2px #040404;border-radius:5px;border:2px solid #040404;border-radius:62px;cursor:pointer;display:inline-block;font-size:18px;line-height:23px;height:62px;max-height:62px;width:62px;max-width:62px;margin:8px;overflow:hidden;pointer-events:auto;position:relative;z-index:0}.roundButton:active .roundButton__background[data-v-10990900]{background-color:#5f33a8;border-color:#5f33a8}.roundButton__background[data-v-10990900]{position:relative;background-color:#9372da;background-clip:padding-box;border:4px solid transparent;border-radius:62px;height:100%;width:100%}.roundButton__background[data-v-10990900]:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;margin:-4px;border-radius:inherit;background:linear-gradient(180deg,#9372da,#5f33a8)}.roundButton__label[data-v-10990900]{text-shadow:-1.5px -1.5px 0 #040404,0 -1.5px 0 #040404,1.5px -1.5px 0 #040404,1.5px 0 0 #040404,1.5px 1.5px 0 #040404,0 1.5px 0 #040404,-1.5px 1.5px 0 #040404,-1.5px 0 0 #040404,0 3px 0 #040404,-1.5px 3px 0 #040404,1.5px 3px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;font-size:16px;display:flex;justify-content:center;align-items:center;height:100%;width:100%}.roundButton__label[data-v-10990900]:lang(jp),.roundButton__label[data-v-10990900]:lang(kr),.roundButton__label[data-v-10990900]:lang(pl),.roundButton__label[data-v-10990900]:lang(ru),.roundButton__label[data-v-10990900]:lang(tr),.roundButton__label[data-v-10990900]:lang(zh_sc),.roundButton__label[data-v-10990900]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}@media(min-width:112.5em){.roundButton__label[data-v-10990900]{text-shadow:-1.5px -1.5px 0 #040404,0 -1.5px 0 #040404,1.5px -1.5px 0 #040404,1.5px 0 0 #040404,1.5px 1.5px 0 #040404,0 1.5px 0 #040404,-1.5px 1.5px 0 #040404,-1.5px 0 0 #040404,0 3px 0 #040404,-1.5px 3px 0 #040404,1.5px 3px 0 #040404;font-size:18px}}.roundButton--slanted[data-v-10990900]{-webkit-transform:skew(-5deg);-moz-transform:skew(-5deg);-o-transform:skew(-5deg)}.roundButton__selected[data-v-10990900]{display:none}.roundButton--yellow .roundButton__background[data-v-10990900]{background-color:#ffd550;border:4px solid transparent}.roundButton--yellow .roundButton__background[data-v-10990900]:before{background:linear-gradient(180deg,#ffe691,#f1b246)}.roundButton--yellow:active .roundButton__background[data-v-10990900]{background-color:#d27430;border-color:#d27430}.roundButton--light .roundButton__background[data-v-10990900]{background-color:#d2d2d2;border:4px solid transparent}.roundButton--light .roundButton__background[data-v-10990900]:before{background:linear-gradient(180deg,#f1f1f1,#d2d2d2)}.roundButton--dark .roundButton__background[data-v-10990900]{background-color:#343c52;border:4px solid transparent}.roundButton--dark .roundButton__background[data-v-10990900]:before{background:linear-gradient(180deg,#4b546c,#222b3f)}.roundButton--dark:active .roundButton__background[data-v-10990900]{background-color:#000;border-color:#000}.roundButton--blue .roundButton__background[data-v-10990900]{background-color:#545cef;border:4px solid transparent}.roundButton--blue .roundButton__background[data-v-10990900]:before{background:linear-gradient(180deg,#7d7fff,#2b41ca)}.roundButton--blue:active .roundButton__background[data-v-10990900]{background-color:#002bab;border-color:#002bab}.roundButton--red .roundButton__background[data-v-10990900]{background-color:#eb3b57;border:4px solid transparent}.roundButton--red .roundButton__background[data-v-10990900]:before{background:linear-gradient(180deg,#ff7582,#bc0037)}.roundButton--red:active .roundButton__background[data-v-10990900]{background-color:#97001f;border-color:#97001f}.roundButton--small[data-v-10990900]{border-radius:45px;max-height:45px;max-width:45px}.roundButton--small .roundButton__background[data-v-10990900]{max-width:41px;max-height:41px}.roundButton[data-v-10990900]:hover:after{position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;border-radius:50%;content:" ";background-color:rgba(0,0,0,.15)}.roundButton[data-v-10990900]:hover--inactive:after{background-color:transparent}', ""]),
        r.locals = {},
        t.exports = r
    },
    1059: function(t, o, n) {
        "use strict";
        n.r(o),
        n.d(o, "ButtonColors", (function() {
            return a
        }
        ));
        n(39),
        n(47),
        n(99);
        var r = n(0)
          , e = n(101)
          , a = {
            yellow: "yellow",
            purple: "purple",
            light: "light",
            dark: "dark",
            blue: "blue",
            red: "red"
        }
          , d = r.default.extend({
            name: "RoundButton",
            components: {
                LinkButtonWrapper: e.default
            },
            props: {
                label: {
                    type: String,
                    default: "Label"
                },
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
                color: {
                    type: String,
                    validator: function(t) {
                        return Object.values(a).includes(t)
                    },
                    default: a.yellow
                },
                clicked: {
                    type: Boolean,
                    default: !1
                },
                inactive: {
                    type: Boolean,
                    default: !1
                },
                small: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    ButtonColors: a
                }
            }
        })
          , u = (n(1054),
        n(1))
          , l = Object(u.a)(d, (function() {
            var t = this
              , o = t.$createElement
              , n = t._self._c || o;
            return n("LinkButtonWrapper", {
                staticClass: "roundButton",
                class: {
                    "roundButton--small": t.small,
                    "roundButton--inactive": t.inactive,
                    "roundButton--clicked": t.clicked,
                    "roundButton--yellow": t.color === t.ButtonColors.yellow,
                    "roundButton--purple": t.color === t.ButtonColors.purple,
                    "roundButton--light": t.color === t.ButtonColors.light,
                    "roundButton--dark": t.color === t.ButtonColors.dark,
                    "roundButton--blue": t.color === t.ButtonColors.blue,
                    "roundButton--red": t.color === t.ButtonColors.red
                },
                attrs: {
                    to: t.$props.to,
                    href: t.$props.href,
                    target: t.$props.target
                }
            }, [n("div", {
                staticClass: "roundButton__background"
            }, [n("div", {
                staticClass: "roundButton__selected",
                domProps: {
                    textContent: t._s(t.$t("btn_pick"))
                }
            }), t._v(" "), n("div", {
                staticClass: "roundButton__label"
            }, [t._t("default")], 2)])])
        }
        ), [], !1, null, "10990900", null);
        o.default = l.exports
    },
    1080: function(t, o, n) {
        var r = n(1124);
        r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        n(8).default)("43cc9487", r, !0, {
            sourceMap: !1
        })
    },
    1100: function(t, o, n) {
        "use strict";
        n.r(o);
        var r = n(0)
          , e = n(2)
          , a = n(1059)
          , d = r.default.extend({
            name: "FeedScrollButton",
            components: {
                RoundButton: a.default
            },
            props: {
                showFeedScrollButton: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {}
            },
            mounted: function() {},
            methods: {
                onClick: function() {
                    this.$emit("scroll-down")
                },
                onFeedScrollButtonEnter: function(t, o) {
                    e.a.set(t, {
                        scale: 0
                    }),
                    e.a.to(t, {
                        duration: .4,
                        scale: 1,
                        ease: "elastic.out(1.2, 0.6)",
                        onComplete: function() {
                            o()
                        }
                    })
                },
                onFeedScrollButtonLeave: function(t, o) {
                    e.a.to(t, {
                        duration: .4,
                        scale: 0,
                        ease: "elastic.in(1.2, 0.6)",
                        onComplete: function() {
                            o()
                        }
                    })
                }
            }
        })
          , u = (n(1123),
        n(1))
          , l = Object(u.a)(d, (function() {
            var t = this
              , o = t.$createElement
              , r = t._self._c || o;
            return r("div", {
                staticClass: "FeedScrollButton"
            }, [r("transition", {
                attrs: {
                    appear: ""
                },
                on: {
                    appear: t.onFeedScrollButtonEnter,
                    enter: t.onFeedScrollButtonEnter,
                    leave: t.onFeedScrollButtonLeave
                }
            }, [t.$props.showFeedScrollButton ? r("RoundButton", {
                class: "FeedScrollButton__button",
                attrs: {
                    small: "",
                    color: "dark"
                },
                nativeOn: {
                    click: function(o) {
                        return t.onClick()
                    }
                }
            }, [r("div", {
                staticClass: "FeedScrollButton__button__container"
            }, [r("img", {
                staticClass: "FeedScrollButton__button__image",
                attrs: {
                    width: "28",
                    height: "17",
                    src: n(1122)
                }
            })])]) : t._e()], 1)], 1)
        }
        ), [], !1, null, "21d82020", null);
        o.default = l.exports
    },
    1122: function(t, o, n) {
        t.exports = n.p + "img/ico_scroll.42c715f.svg"
    },
    1123: function(t, o, n) {
        "use strict";
        n(1080)
    },
    1124: function(t, o, n) {
        var r = n(7)((function(t) {
            return t[1]
        }
        ));
        r.push([t.i, ".FeedScrollButton[data-v-21d82020]{display:flex;flex-direction:row;align-items:flex-end}@supports(padding:0px){.FeedScrollButton[data-v-21d82020]{margin-bottom:calc(env(safe-area-inset-bottom) + 22px)}}.FeedScrollButton__button[data-v-21d82020]{display:flex;justify-content:center;align-items:center}.FeedScrollButton__button__image[data-v-21d82020]{width:32px;height:19px}.FeedScrollButton__button__container[data-v-21d82020]{display:flex;justify-content:center;align-items:center;width:33px;height:33px;padding-top:4px}", ""]),
        r.locals = {},
        t.exports = r
    }
}]);