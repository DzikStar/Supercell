(window.webpackJsonp = window.webpackJsonp || []).push([[18, 17], {
    1078: function(e, t, n) {
        var i = n(1118);
        i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        (0,
        n(8).default)("becf4194", i, !0, {
            sourceMap: !1
        })
    },
    1098: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(0).default.extend({
            name: "CheerSwitchSection",
            components: {},
            props: {
                isSelected: {
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
                    this.$emit("on-click")
                }
            }
        })
          , r = (n(1117),
        n(1))
          , o = Object(r.a)(i, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("button", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        selected: e.$props.isSelected
                    },
                    expression: "{\n    selected: $props.isSelected,\n  }"
                }],
                staticClass: "CheerSwitchSection",
                on: {
                    click: function(t) {
                        return e.onClick()
                    }
                }
            }, [e._t("default")], 2)
        }
        ), [], !1, null, "74e8741a", null);
        t.default = o.exports
    },
    1117: function(e, t, n) {
        "use strict";
        n(1078)
    },
    1118: function(e, t, n) {
        var i = n(7)((function(e) {
            return e[1]
        }
        ));
        i.push([e.i, '.CheerSwitchSection[data-v-74e8741a]{display:flex;justify-content:center;align-items:center;position:relative;height:100%;width:100px;background-color:transparent;border-color:transparent;cursor:pointer;border-radius:5px}.CheerSwitchSection--selected[data-v-74e8741a]{width:90px;border:4px solid #fff;border-right-color:transparent;border-radius:5px 0 0 5px;box-shadow:inset 2px 2px #000,inset 0 -2px #000;margin-right:8px}.CheerSwitchSection--selected[data-v-74e8741a]:after{-webkit-transform:skew(-5deg);-moz-transform:skew(-5deg);-o-transform:skew(-5deg);content:" ";position:absolute;right:-10px;top:-4px;height:calc(100% + 8px);width:16px;border:4px solid #fff;border-left:0;box-shadow:inset 0 2px #000,inset -2px -2px #000}', ""]),
        i.locals = {},
        e.exports = i
    },
    1119: function(e, t, n) {
        var i = n(1178);
        i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        (0,
        n(8).default)("70458228", i, !0, {
            sourceMap: !1
        })
    },
    1177: function(e, t, n) {
        "use strict";
        n(1119)
    },
    1178: function(e, t, n) {
        var i = n(7)((function(e) {
            return e[1]
        }
        ));
        i.push([e.i, ".CheerSwitcher[data-v-1fa29b2b]{display:flex;flex-direction:row;align-items:flex-end;justify-content:flex-start;width:100%;padding:15px 8px;pointer-events:all}.CheerSwitcher--right[data-v-1fa29b2b]{justify-content:flex-end}.CheerSwitcher__transitionGroup[data-v-1fa29b2b]{display:flex;flex-direction:row;width:100%}.CheerSwitcher__content[data-v-1fa29b2b]{box-shadow:0 2px #040404;border-radius:5px;border:2px solid #040404;position:relative;height:88px;min-width:160px;background-color:#343c52;border-top-right-radius:0;display:flex;flex-direction:row}.CheerSwitcher__closeButton[data-v-1fa29b2b]{position:absolute;top:-32px;right:-2px}.CheerSwitcher__image[data-v-1fa29b2b]{width:100%;height:80%}", ""]),
        i.locals = {},
        e.exports = i
    },
    1207: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(0)
          , r = n(2)
          , o = n(1098)
          , a = n(182)
          , s = i.default.extend({
            name: "CheerSwitcher",
            components: {
                CloseButton: a.default,
                CheerSwitchSection: o.default
            },
            props: {
                unlockedCheerIcons: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                xAlignment: {
                    type: String,
                    default: "left"
                }
            },
            data: function() {
                return {}
            },
            mounted: function() {},
            methods: {
                closeSwitcher: function() {
                    this.$emit("on-close-switcher")
                },
                selectIcon: function(e) {
                    this.$emit("on-select-cheer-icon", e),
                    this.closeSwitcher()
                },
                onComponentEnter: function(e) {
                    r.a.set(e, {
                        scaleX: 0
                    });
                    var t = r.a.timeline();
                    t.set(e, {
                        transformOrigin: this.xAlignment
                    }),
                    t.to(e, {
                        scaleX: 1.2,
                        duration: .2
                    }),
                    t.to(e, {
                        scaleX: 1,
                        duration: .2
                    })
                },
                onSectionEnter: function(e) {
                    var t = e.dataset.index ? parseInt(e.dataset.index) : 0;
                    r.a.set(e, {
                        opacity: 0,
                        scale: .8
                    }),
                    r.a.to(e, {
                        delay: .6 + .1 * t,
                        duration: .3,
                        opacity: 1,
                        scale: 1,
                        ease: "elastic.out(1.2, 0.6)"
                    })
                }
            }
        })
          , c = (n(1177),
        n(1))
          , l = Object(c.a)(s, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        right: "right" === e.$props.xAlignment
                    },
                    expression: "{\n    right: $props.xAlignment === 'right',\n  }"
                }],
                ref: "cheerSwitcher",
                staticClass: "CheerSwitcher"
            }, [n("transition", {
                attrs: {
                    appear: ""
                },
                on: {
                    appear: e.onComponentEnter
                }
            }, [n("div", {
                staticClass: "CheerSwitcher__content"
            }, [n("transition-group", {
                class: "CheerSwitcher__transitionGroup",
                attrs: {
                    appear: ""
                },
                on: {
                    appear: e.onSectionEnter,
                    enter: e.onSectionEnter
                }
            }, e._l(e.$props.unlockedCheerIcons, (function(t, i) {
                return n("CheerSwitchSection", {
                    key: t.id,
                    attrs: {
                        "is-selected": t.selected,
                        "data-index": i
                    },
                    on: {
                        "on-click": function(n) {
                            return e.selectIcon(t.id)
                        }
                    }
                }, [n("img", {
                    staticClass: "CheerSwitcher__image",
                    attrs: {
                        src: t.icon
                    }
                })])
            }
            )), 1), e._v(" "), n("div", {
                staticClass: "CheerSwitcher__closeButton"
            }, [n("CloseButton", {
                attrs: {
                    "is-outside-container": ""
                },
                nativeOn: {
                    click: function(t) {
                        return e.closeSwitcher.apply(null, arguments)
                    }
                }
            })], 1)], 1)])], 1)
        }
        ), [], !1, null, "1fa29b2b", null);
        t.default = l.exports;
        installComponents(l, {
            CheerSwitchSection: n(1098).default
        })
    }
}]);
