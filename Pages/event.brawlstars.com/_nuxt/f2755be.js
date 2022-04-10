(window.webpackJsonp = window.webpackJsonp || []).push([[10], {
    1229: function(t, e, a) {
        var i = a(1329);
        i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        (0,
        a(8).default)("427a77fe", i, !0, {
            sourceMap: !1
        })
    },
    1328: function(t, e, a) {
        "use strict";
        a(1229)
    },
    1329: function(t, e, a) {
        var i = a(7)((function(t) {
            return t[1]
        }
        ));
        i.push([t.i, '.MultiImageChoiceCard[data-v-59f1d860]{display:flex;align-items:center;justify-content:center;flex-direction:column;padding-bottom:16px}.MultiImageChoiceCard h3[data-v-59f1d860]{text-shadow:-2px -2px 0 #040404,0 -2px 0 #040404,2px -2px 0 #040404,2px 0 0 #040404,2px 2px 0 #040404,0 2px 0 #040404,-2px 2px 0 #040404,-2px 0 0 #040404,0 3.5px 0 #040404,-2px 3.5px 0 #040404,2px 3.5px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;font-size:24px;margin-bottom:25px;text-align:center}.MultiImageChoiceCard h3[data-v-59f1d860]:lang(jp),.MultiImageChoiceCard h3[data-v-59f1d860]:lang(kr),.MultiImageChoiceCard h3[data-v-59f1d860]:lang(pl),.MultiImageChoiceCard h3[data-v-59f1d860]:lang(ru),.MultiImageChoiceCard h3[data-v-59f1d860]:lang(tr),.MultiImageChoiceCard h3[data-v-59f1d860]:lang(zh_sc),.MultiImageChoiceCard h3[data-v-59f1d860]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}@media(max-width:23.4275em){.MultiImageChoiceCard h3[data-v-59f1d860]{text-shadow:-1.5px -1.5px 0 #040404,0 -1.5px 0 #040404,1.5px -1.5px 0 #040404,1.5px 0 0 #040404,1.5px 1.5px 0 #040404,0 1.5px 0 #040404,-1.5px 1.5px 0 #040404,-1.5px 0 0 #040404,0 3px 0 #040404,-1.5px 3px 0 #040404,1.5px 3px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;font-size:18px}.MultiImageChoiceCard h3[data-v-59f1d860]:lang(jp),.MultiImageChoiceCard h3[data-v-59f1d860]:lang(kr),.MultiImageChoiceCard h3[data-v-59f1d860]:lang(pl),.MultiImageChoiceCard h3[data-v-59f1d860]:lang(ru),.MultiImageChoiceCard h3[data-v-59f1d860]:lang(tr),.MultiImageChoiceCard h3[data-v-59f1d860]:lang(zh_sc),.MultiImageChoiceCard h3[data-v-59f1d860]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}}.MultiImageChoiceCard__button[data-v-59f1d860]{height:150px}.MultiImageChoiceCard__buttonContainer[data-v-59f1d860]{display:grid;grid-template-columns:150px 150px;grid-template-rows:150px 150px;-moz-column-gap:4px;column-gap:4px;row-gap:6px}.MultiImageChoiceCard__innerButton img[data-v-59f1d860]{-o-object-fit:cover;object-fit:cover;position:absolute;top:-4px;left:0;width:146px;height:146px;border-radius:7px}@media(max-width:23.4275em){.MultiImageChoiceCard__buttonContainer[data-v-59f1d860]{grid-template-columns:100px 100px;grid-template-rows:100px 100px}.MultiImageChoiceCard__button[data-v-59f1d860]{height:100px}.MultiImageChoiceCard__innerButton img[data-v-59f1d860]{top:-4px;left:0;width:96px;height:96px;border-radius:7px}}', ""]),
        i.locals = {},
        t.exports = i
    },
    1395: function(t, e, a) {
        "use strict";
        a.r(e);
        a(28),
        a(25),
        a(30),
        a(10),
        a(35),
        a(24),
        a(36);
        var i = a(11)
          , n = (a(33),
        a(0))
          , o = a(60)
          , r = a(2)
          , s = a(78)
          , d = a(37)
          , c = a(74)
          , l = a(31)
          , u = a(79);
        function p(t, e) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                a.push.apply(a, i)
            }
            return a
        }
        function m(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? p(Object(a), !0).forEach((function(e) {
                    Object(i.a)(t, e, a[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : p(Object(a)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                }
                ))
            }
            return t
        }
        var h = {
            typeId: "multiImage",
            question: "What is great?",
            alternatives: [{
                image: Object(c.a)(l.a["8-BIT"])
            }, {
                image: Object(c.a)(l.a["COLONEL RUFFS"])
            }, {
                image: Object(c.a)(l.a.AMBER)
            }, {
                image: Object(c.a)(l.a.BYRON)
            }],
            interactionPoints: 2,
            pointsForCorrectAnswer: 2
        }
          , f = n.default.extend({
            name: "MultiImageChoiceCard",
            components: {
                ContentCard: s.default,
                RectangleButton: d.default
            },
            props: {
                isFullscreen: {
                    type: Boolean,
                    default: !1
                },
                active: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    timeRemaining: 1,
                    multiImageChoiceQuestion: h,
                    voted: null,
                    showButtons: !1,
                    dismissCard: !1
                }
            },
            computed: {
                timeIsUp: function() {
                    return this.timeRemaining < 1
                },
                disabled: function() {
                    return !!this.voted || this.timeIsUp
                },
                rules: function() {
                    return {
                        endTime: -1,
                        pointsForInteraction: {
                            number: this.multiImageChoiceQuestion.interactionPoints,
                            earned: !!this.voted
                        },
                        pointsForCorrectAnswer: {
                            number: this.multiImageChoiceQuestion.pointsForCorrectAnswer,
                            earned: !1
                        }
                    }
                }
            },
            mounted: function() {
                this.showButtons = !0
            },
            methods: m(m({}, Object(o.b)("feed", ["answermultiImageChoiceQuestion"])), {}, {
                sendVote: function(t) {
                    var e = this;
                    this.voted = {
                        alternative: t
                    },
                    setTimeout((function() {
                        e.dismissCard = !0
                    }
                    ), u.a)
                },
                closeCard: function() {
                    this.$emit("close-card")
                },
                onButtonEnter: function(t) {
                    var e = t.dataset.index ? parseInt(t.dataset.index) : 0;
                    r.a.set(t, {
                        opacity: 0,
                        scale: .8,
                        rotationZ: 3
                    }),
                    r.a.to(t, {
                        delay: .6 + .1 * e,
                        duration: .1 * this.multiImageChoiceQuestion.alternatives.length,
                        opacity: 1,
                        scale: 1,
                        ease: "elastic.out(1.2, 0.6)"
                    }),
                    r.a.to(t, {
                        delay: .6 + .1 * e,
                        duration: .2 * this.multiImageChoiceQuestion.alternatives.length,
                        rotationZ: 0,
                        ease: "elastic.out(1.2, 0.6)"
                    })
                },
                onLeave: function(t) {
                    r.a.to(t, {
                        duration: .4,
                        opacity: 0,
                        ease: "Power2.easeInOut"
                    })
                }
            })
        })
          , g = (a(1328),
        a(1))
          , C = Object(g.a)(f, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                key: t.$props.key
            }, [a("ContentCard", {
                attrs: {
                    active: t.active,
                    disabled: t.disabled,
                    "show-active-animation": !t.disabled,
                    background: "purple-gradient",
                    "is-fullscreen": t.isFullscreen,
                    rules: t.rules,
                    "dismiss-card": t.dismissCard
                },
                on: {
                    "close-card": function(e) {
                        return t.closeCard()
                    }
                }
            }, [a("div", {
                staticClass: "MultiImageChoiceCard"
            }, [a("h3", [t._v(t._s(t.multiImageChoiceQuestion.question))]), t._v(" "), t.showButtons ? a("div", {
                ref: "buttonGroup"
            }, [a("transition-group", {
                staticClass: "MultiImageChoiceCard__buttonContainer",
                attrs: {
                    appear: ""
                },
                on: {
                    appear: t.onButtonEnter,
                    enter: t.onButtonEnter,
                    leave: t.onLeave
                }
            }, t._l(t.multiImageChoiceQuestion.alternatives, (function(e, i) {
                return a("RectangleButton", {
                    key: i,
                    class: "MultiImageChoiceCard__button",
                    attrs: {
                        color: "dark",
                        "with-no-padding": "",
                        voted: !!t.voted,
                        inactive: t.disabled,
                        selected: !!t.voted && t.voted.alternative === i,
                        "data-index": i,
                        "is-image-button": ""
                    },
                    on: {
                        "on-click": function(e) {
                            return t.sendVote(i)
                        }
                    }
                }, [a("div", {
                    staticClass: "MultiImageChoiceCard__innerButton"
                }, [a("img", {
                    attrs: {
                        src: e.image
                    }
                })])])
            }
            )), 1)], 1) : t._e()])])], 1)
        }
        ), [], !1, null, "59f1d860", null);
        e.default = C.exports
    }
}]);
