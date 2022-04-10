(window.webpackJsonp = window.webpackJsonp || []).push([[21, 28], {
    1044: function(t, e, a) {
        var d = a(1057);
        d.__esModule && (d = d.default),
        "string" == typeof d && (d = [[t.i, d, ""]]),
        d.locals && (t.exports = d.locals);
        (0,
        a(8).default)("07457290", d, !0, {
            sourceMap: !1
        })
    },
    1048: function(t, e, a) {
        var d = a(1067);
        d.__esModule && (d = d.default),
        "string" == typeof d && (d = [[t.i, d, ""]]),
        d.locals && (t.exports = d.locals);
        (0,
        a(8).default)("39d6d69a", d, !0, {
            sourceMap: !1
        })
    },
    1056: function(t, e, a) {
        "use strict";
        a(1044)
    },
    1057: function(t, e, a) {
        var d = a(7)((function(t) {
            return t[1]
        }
        ));
        d.push([t.i, ".union[data-v-8d35cab8]{fill:#4b546c}.active[data-v-8d35cab8]{fill:#fff}.completed[data-v-8d35cab8]{fill:#ffd550}", ""]),
        d.locals = {},
        t.exports = d
    },
    1061: function(t, e, a) {
        "use strict";
        a.r(e),
        a.d(e, "States", (function() {
            return n
        }
        ));
        a(39),
        a(47),
        a(99);
        var d = a(0)
          , n = {
            active: "active",
            completed: "completed",
            default: "default"
        }
          , r = d.default.extend({
            name: "IconUnion",
            props: {
                state: {
                    type: String,
                    validator: function(t) {
                        return Object.values(n).includes(t)
                    },
                    default: n.default
                }
            },
            data: function() {
                return {
                    States: n
                }
            }
        })
          , i = (a(1056),
        a(1))
          , o = Object(i.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("svg", {
                staticStyle: {
                    "enable-background": "new 0 0 11 10"
                },
                attrs: {
                    id: "Layer_1",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 11 10",
                    "xml:space": "preserve"
                }
            }, [a("path", {
                attrs: {
                    d: "M10.1,0.2H0.9H0.2v0.7v0v0.7v2.2v0.7c0,1.5,0.9,2.7,2.2,3.3l0,0.1L2.1,8.7h0.2L2.1,9.4h0.9h4.8h0.9L8.7,8.7h0.2L8.6,7.8\n\tl0-0.1c1.3-0.5,2.2-1.8,2.2-3.3V3.8V1.6V0.9v0V0.2H10.1z"
                }
            }), t._v(" "), a("g", [a("path", {
                staticClass: "union",
                class: {
                    active: t.state == t.States.active,
                    completed: t.state == t.States.completed
                },
                attrs: {
                    d: "M10.1,0.9v2.9c0,1.5-1.1,2.7-2.5,2.8L7.9,8H3.1l0.4-1.4C2.1,6.4,0.9,5.2,0.9,3.8V0.9H10.1z"
                }
            })])])
        }
        ), [], !1, null, "8d35cab8", null);
        e.default = o.exports
    },
    1066: function(t, e, a) {
        "use strict";
        a(1048)
    },
    1067: function(t, e, a) {
        var d = a(7)((function(t) {
            return t[1]
        }
        ));
        d.push([t.i, '.EventIndicator[data-v-4d65b874]{cursor:pointer;position:relative;border-radius:4px;pointer-events:all}.EventIndicator__overflow-container[data-v-4d65b874]{height:100%;overflow:hidden;border-radius:4px;border-left:2px solid #000;width:100%}.EventIndicator__skew[data-v-4d65b874]{-webkit-transform:skew(-5deg);-moz-transform:skew(-5deg);-o-transform:skew(-5deg);border-radius:4px;margin-left:-4px;height:100%;overflow:hidden;border-right:2px solid #000;border-top:2px solid #000;border-bottom:2px solid #000}.EventIndicator__content[data-v-4d65b874]{-webkit-transform:skew(5deg);-moz-transform:skew(5deg);-o-transform:skew(5deg);border-radius:4px;margin-right:-4px;height:100%;display:flex;flex-direction:column;background:#343c52}.EventIndicator__header[data-v-4d65b874]{border-top:2px solid #4b546c;height:50%;padding:0 10px;display:flex;align-items:center;justify-content:space-between;position:relative}.EventIndicator__header[data-v-4d65b874]:after{content:" ";display:block;position:absolute;top:-2px;right:0;height:8px;width:8px;background-color:#f1f1f1;opacity:.3;-webkit-clip-path:polygon(0 0,100% 100%,100% 0);clip-path:polygon(0 0,100% 100%,100% 0);border-radius:0 3px 0 0}.EventIndicator__header__text[data-v-4d65b874]{text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;font-size:12px}.EventIndicator__header__text[data-v-4d65b874]:lang(jp),.EventIndicator__header__text[data-v-4d65b874]:lang(kr),.EventIndicator__header__text[data-v-4d65b874]:lang(pl),.EventIndicator__header__text[data-v-4d65b874]:lang(ru),.EventIndicator__header__text[data-v-4d65b874]:lang(tr),.EventIndicator__header__text[data-v-4d65b874]:lang(zh_sc),.EventIndicator__header__text[data-v-4d65b874]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}@media(max-width:23.4275em){.EventIndicator__header__text[data-v-4d65b874]{font-size:10px}}.EventIndicator__header__text span[data-v-4d65b874]{color:#ffe986}.EventIndicator__header__label[data-v-4d65b874]{border-bottom-left-radius:3px;position:absolute;left:0;border-color:#000;border-left:2px solid;border-top:2px solid;overflow:hidden;bottom:-13px;z-index:10;padding-right:2px}.EventIndicator__header__label p[data-v-4d65b874]{-webkit-transform:skew(5deg);-moz-transform:skew(5deg);-o-transform:skew(5deg);color:#fff;font-family:"Montserrat",sans-serif;text-transform:uppercase;font-size:10px}.EventIndicator__header__skew[data-v-4d65b874]{-webkit-transform:skew(-5deg);-moz-transform:skew(-5deg);-o-transform:skew(-5deg);background:#bc0037;padding:1px 4px 1px 6px;margin-left:-1px;border-bottom-right-radius:3px;border-color:#000;border-bottom:2px solid;border-right:2px solid}.EventIndicator__body[data-v-4d65b874]{color:#040404;font-size:10px;font-family:"Montserrat",sans-serif;font-weight:700;border-color:#000;border-top:1px solid;border-bottom:2px solid;height:50%;background:#222b3f;display:flex;padding:0 10px}.EventIndicator__body[data-v-4d65b874]:lang(jp),.EventIndicator__body[data-v-4d65b874]:lang(kr),.EventIndicator__body[data-v-4d65b874]:lang(pl),.EventIndicator__body[data-v-4d65b874]:lang(ru),.EventIndicator__body[data-v-4d65b874]:lang(tr),.EventIndicator__body[data-v-4d65b874]:lang(zh_sc),.EventIndicator__body[data-v-4d65b874]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}.EventIndicator__body>div[data-v-4d65b874]{-webkit-transform:skew(-5deg);-moz-transform:skew(-5deg);-o-transform:skew(-5deg);border-right:1px solid #000;padding-right:2px;padding-left:2px;flex-grow:1}.EventIndicator__body>div[data-v-4d65b874]:first-of-type{padding-left:0}.EventIndicator__body>div[data-v-4d65b874]:last-of-type{border:none}.EventIndicator__day[data-v-4d65b874]{display:flex;align-items:center;justify-content:flex-start}.EventIndicator__day__match[data-v-4d65b874]{-webkit-transform:skew(5deg);-moz-transform:skew(5deg);-o-transform:skew(5deg);width:8px;height:8px;border:.718121px solid #000;background:#4b546c;border-radius:10px}.EventIndicator__day__match--active[data-v-4d65b874]{background:#fff}.EventIndicator__day__match--completed[data-v-4d65b874]{background:#ffd550}.EventIndicator__day__match--final[data-v-4d65b874],.EventIndicator__day__match--semifinal[data-v-4d65b874]{margin-left:8px}.EventIndicator__day__match--final[data-v-4d65b874]{height:8px;width:10px;border:none;background:transparent;border-radius:0}', ""]),
        d.locals = {},
        t.exports = d
    },
    1086: function(t, e, a) {
        "use strict";
        a.r(e);
        a(58),
        a(10),
        a(59);
        var d = a(102)
          , n = a(1061)
          , r = {
            name: "EventIndicator",
            components: {
                BaseButton: d.default,
                IconUnion: n.default
            },
            props: {
                day: {
                    type: Number,
                    required: !0
                },
                schedule: {
                    type: Array,
                    required: !0
                },
                activeMatch: {
                    type: Number,
                    default: null
                },
                eventId: {
                    type: String,
                    default: void 0
                },
                isLive: Boolean
            },
            computed: {
                dayNumber: function() {
                    switch (this.day) {
                    case 1:
                        return this.$t("schedule_short_d1").toString();
                    case 2:
                        return this.$t("schedule_short_d2").toString();
                    case 3:
                        return this.$t("schedule_short_d3").toString();
                    default:
                        return
                    }
                },
                totalNumberOfMatches: function() {
                    return this.$accessor.bracket.totalNumberOfMatches(this.eventId)
                },
                semiFinals: function() {
                    return this.totalNumberOfMatches - 2
                },
                title: function() {
                    if (this.nrOfEventDays && this.nrOfEventDays > 2)
                        switch (this.day) {
                        case 1:
                            return this.$t("schedule_short_d1_sub").toString();
                        case 2:
                            return this.$t("schedule_short_d2_sub").toString();
                        case 3:
                            return this.activeMatch === this.totalNumberOfMatches ? this.$t("schedule_short_d3_sub3").toString() : this.activeMatch >= this.semiFinals ? this.$t("schedule_short_d3_sub2").toString() : this.$t("schedule_short_d3_sub1").toString();
                        default:
                            return ""
                        }
                    return this.activeMatch === this.totalNumberOfMatches ? this.$t("schedule_short_d3_sub3").toString() : this.activeMatch >= this.semiFinals ? this.$t("schedule_short_d3_sub2").toString() : this.$t("schedule_short_d3_sub1").toString()
                },
                nrOfEventDays: function() {
                    var t;
                    return null === (t = this.$accessor.global.currentEventInfo) || void 0 === t ? void 0 : t.days
                }
            },
            methods: {
                isActive: function(t) {
                    return t === this.activeMatch
                },
                isCompleted: function(t) {
                    return t < this.activeMatch
                }
            }
        }
          , i = (a(1066),
        a(1))
          , o = Object(i.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("BaseButton", {
                staticClass: "EventIndicator"
            }, [t.isLive ? a("div", {
                staticClass: "EventIndicator__header__label"
            }, [a("div", {
                staticClass: "EventIndicator__header__skew"
            }, [a("p", [t._v("live")])])]) : t._e(), t._v(" "), a("div", {
                staticClass: "EventIndicator__overflow-container"
            }, [a("div", {
                staticClass: "EventIndicator__skew"
            }, [a("div", {
                staticClass: "EventIndicator__content"
            }, [a("div", {
                staticClass: "EventIndicator__header"
            }, [a("div", {
                staticClass: "EventIndicator__header__text"
            }, [a("p", [a("span", [t._v(t._s(t.title)), a("span")])])])]), t._v(" "), a("div", {
                staticClass: "EventIndicator__body"
            }, t._l(t.$props.schedule, (function(e) {
                return a("div", {
                    key: e.day,
                    staticClass: "EventIndicator__day"
                }, t._l(e.matches, (function(e) {
                    return a("div", {
                        directives: [{
                            name: "class-mods",
                            rawName: "v-class-mods",
                            value: {
                                completed: t.isCompleted(e.id),
                                active: t.isActive(e.id),
                                semifinal: e.id === t.semiFinals,
                                final: e.id === t.totalNumberOfMatches
                            },
                            expression: "{\n                completed: isCompleted(m.id),\n                active: isActive(m.id),\n                semifinal: m.id === semiFinals,\n                final: m.id === totalNumberOfMatches,\n              }"
                        }],
                        key: e.id,
                        staticClass: "EventIndicator__day__match"
                    }, [e.id === t.totalNumberOfMatches ? a("IconUnion", {
                        attrs: {
                            state: t.isActive(e.id) ? "active" : !0 === e.completed ? "completed" : "default"
                        }
                    }) : t._e()], 1)
                }
                )), 0)
            }
            )), 0)])])])])
        }
        ), [], !1, null, "4d65b874", null);
        e.default = o.exports
    }
}]);
