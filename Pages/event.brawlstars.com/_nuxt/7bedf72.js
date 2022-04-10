(window.webpackJsonp = window.webpackJsonp || []).push([[4, 27, 39, 40, 41, 42], {
    1081: function(e, a, t) {
        var r = t(1130);
        r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        (0,
        t(8).default)("18c584c3", r, !0, {
            sourceMap: !1
        })
    },
    1082: function(e, a, t) {
        var r = t(1132);
        r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        (0,
        t(8).default)("0d7a5288", r, !0, {
            sourceMap: !1
        })
    },
    1128: function(e, a, t) {
        var r = t(1187);
        r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        (0,
        t(8).default)("2eaf7b24", r, !0, {
            sourceMap: !1
        })
    },
    1129: function(e, a, t) {
        "use strict";
        t(1081)
    },
    1130: function(e, a, t) {
        var r = t(7)((function(e) {
            return e[1]
        }
        ));
        r.push([e.i, '.RewardsHeader[data-v-b059f85e]{text-shadow:-2px -2px 0 #040404,0 -2px 0 #040404,2px -2px 0 #040404,2px 0 0 #040404,2px 2px 0 #040404,0 2px 0 #040404,-2px 2px 0 #040404,-2px 0 0 #040404,0 3.5px 0 #040404,-2px 3.5px 0 #040404,2px 3.5px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;font-size:24px;display:flex;justify-content:space-between;padding:16px}.RewardsHeader[data-v-b059f85e]:lang(jp),.RewardsHeader[data-v-b059f85e]:lang(kr),.RewardsHeader[data-v-b059f85e]:lang(pl),.RewardsHeader[data-v-b059f85e]:lang(ru),.RewardsHeader[data-v-b059f85e]:lang(tr),.RewardsHeader[data-v-b059f85e]:lang(zh_sc),.RewardsHeader[data-v-b059f85e]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}.RewardsHeader__points[data-v-b059f85e]{color:#ffe986;display:flex;align-items:center;justify-content:center}.RewardsHeader__points span[data-v-b059f85e]{color:#ffe986;font-size:16px;margin-left:4px}.RewardsHeader__points__badge[data-v-b059f85e]{transform:translateY(1px)}.RewardsHeader__points__label[data-v-b059f85e]{margin-left:6px}.RewardsHeader__rewardCount[data-v-b059f85e]{display:flex;align-items:center}.RewardsHeader__rewardCount span[data-v-b059f85e]{color:#ffc0bc}', ""]),
        r.locals = {},
        e.exports = r
    },
    1131: function(e, a, t) {
        "use strict";
        t(1082)
    },
    1132: function(e, a, t) {
        var r = t(7)((function(e) {
            return e[1]
        }
        ));
        r.push([e.i, ".purple[data-v-0c3bc188]{fill:#c7b8f3}.peach[data-v-0c3bc188]{fill:#f38c86}.yellow[data-v-0c3bc188]{fill:#ffd550}.white[data-v-0c3bc188]{fill:#fff}", ""]),
        r.locals = {},
        e.exports = r
    },
    1133: function(e, a, t) {
        var r = t(1189);
        r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        (0,
        t(8).default)("173facf5", r, !0, {
            sourceMap: !1
        })
    },
    1145: function(e, a, t) {
        "use strict";
        t.r(a);
        t(58);
        var r = t(0)
          , n = t(318)
          , s = r.default.extend({
            name: "RewardsHeader",
            components: {
                PointsBadge: n.a
            },
            props: {
                unlockedRewards: {
                    type: Number,
                    default: 0,
                    required: !0
                },
                totalRewards: {
                    type: Number,
                    default: 10,
                    required: !0
                },
                points: {
                    type: Number,
                    default: 0,
                    required: !0
                }
            }
        })
          , o = (t(1129),
        t(1))
          , d = Object(o.a)(s, (function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "RewardsHeader"
            }, [t("div", {
                staticClass: "RewardsHeader__points"
            }, [t("PointsBadge", {
                staticClass: "RewardsHeader__points__badge"
            }), e._v(" "), t("div", {
                staticClass: "RewardsHeader__points__label"
            }, [e._v("\n      " + e._s(e.points) + " "), t("span", [e._v(" " + e._s(e.$t("points"))), t("span")])])], 1), e._v(" "), t("div", {
                staticClass: "RewardsHeader__rewardCount"
            }, [e._v("\n    " + e._s(e.unlockedRewards)), t("span", [e._v("/" + e._s(e.totalRewards) + " ")])])])
        }
        ), [], !1, null, "b059f85e", null);
        a.default = d.exports
    },
    1146: function(e, a, t) {
        "use strict";
        t.r(a),
        t.d(a, "Colors", (function() {
            return n
        }
        ));
        t(39),
        t(47),
        t(99);
        var r = t(0)
          , n = {
            purple: "purple",
            yellow: "yellow",
            white: "white",
            peach: "peach"
        }
          , s = r.default.extend({
            name: "IconIndicatorDown",
            props: {
                color: {
                    type: String,
                    validator: function(e) {
                        return Object.values(n).includes(e)
                    },
                    default: n.white
                }
            },
            data: function() {
                return {
                    Colors: n
                }
            }
        })
          , o = (t(1131),
        t(1))
          , d = Object(o.a)(s, (function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("svg", {
                attrs: {
                    width: "30",
                    height: "23",
                    viewBox: "0 0 30 23",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [t("path", {
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M17.1648 21.5198L29.1645 6.90396L27.6188 5.63487L15.6191 20.2508C15.2168 20.7407 14.466 20.7375 14.0679 20.2442L2.27433 5.6283C1.74655 4.97422 2.21211 4.00033 3.05257 4.00033L26.8459 4.00033C27.6903 4.00033 28.1546 4.98223 27.6188 5.63487L29.1645 6.90396C29.6422 6.32213 29.8549 5.65307 29.8515 5C29.8434 3.45543 29.851 3.42997 29.8509 2.87399L0.0469543 3C0.0469543 3.28066 0.0547472 3.45447 0.0469543 5C0.0437011 5.6452 0.251534 6.30632 0.717847 6.88423L12.5115 21.5001C13.7057 22.9801 15.9581 22.9897 17.1648 21.5198Z",
                    fill: "black"
                }
            }), e._v(" "), t("path", {
                class: {
                    purple: e.color == e.Colors.purple,
                    yellow: e.color == e.Colors.yellow,
                    white: e.color == e.Colors.white,
                    peach: e.color == e.Colors.peach
                },
                attrs: {
                    d: "M15.619 18.2508L27.6186 3.63487C28.1545 2.98223 27.6902 2.00033 26.8458 2.00033L3.05246 2.00033C2.212 2.00033 1.74644 2.97421 2.27422 3.62829L14.0678 18.2442C14.4659 18.7375 15.2167 18.7407 15.619 18.2508Z"
                }
            }), e._v(" "), t("path", {
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M17.1648 19.5198L29.1645 4.90396L27.6188 3.63487L15.6191 18.2508C15.2168 18.7407 14.466 18.7375 14.0679 18.2442L2.27433 3.6283C1.74655 2.97422 2.21211 2.00033 3.05257 2.00033L26.8459 2.00033C27.6903 2.00033 28.1546 2.98223 27.6188 3.63487L29.1645 4.90396C30.772 2.94605 29.3791 0.000329992 26.8459 0.000330103L3.05257 0.000331143C0.531194 0.000331253 -0.865493 2.92198 0.717845 4.88423L12.5115 19.5001C13.7057 20.9801 15.9581 20.9897 17.1648 19.5198Z",
                    fill: "black"
                }
            })])
        }
        ), [], !1, null, "0c3bc188", null);
        a.default = d.exports
    },
    1185: function(e, a, t) {
        e.exports = t.p + "img/locked-peach.c61ebf0.svg"
    },
    1186: function(e, a, t) {
        "use strict";
        t(1128)
    },
    1187: function(e, a, t) {
        var r = t(7)((function(e) {
            return e[1]
        }
        ));
        r.push([e.i, '.Reward[data-v-0212fdb6]{-webkit-transform:skew(-5deg);-moz-transform:skew(-5deg);-o-transform:skew(-5deg);border-radius:5px;border:2px solid #040404;box-shadow:0 2px 0 #040404;height:88px;width:120px;background:#fff;background:#ffc0bc}.Reward--unlocked[data-v-0212fdb6]{background:#fff}.Reward--teaser[data-v-0212fdb6]{-webkit-mask-image:linear-gradient(90deg,rgba(0,0,0,.3),transparent);mask-image:linear-gradient(90deg,rgba(0,0,0,.3),transparent)}.Reward__imagecontainer[data-v-0212fdb6]{-webkit-transform:skew(5deg);-moz-transform:skew(5deg);-o-transform:skew(5deg);width:100%;height:100%;position:absolute;bottom:0;display:flex;justify-content:center}.Reward__imagecontainer img[data-v-0212fdb6]{width:100%;height:auto}.Reward__content[data-v-0212fdb6]{z-index:0;align-items:center;border-radius:3px;height:80px;margin:2px;position:relative}.Reward__content__points[data-v-0212fdb6]{text-shadow:-2px -2px 0 #040404,0 -2px 0 #040404,2px -2px 0 #040404,2px 0 0 #040404,2px 2px 0 #040404,0 2px 0 #040404,-2px 2px 0 #040404,-2px 0 0 #040404,0 3.5px 0 #040404,-2px 3.5px 0 #040404,2px 3.5px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;font-size:34px;-webkit-transform:skew(5deg);-moz-transform:skew(5deg);-o-transform:skew(5deg);position:absolute;left:6px;z-index:1}.Reward__content__points[data-v-0212fdb6]:lang(jp),.Reward__content__points[data-v-0212fdb6]:lang(kr),.Reward__content__points[data-v-0212fdb6]:lang(pl),.Reward__content__points[data-v-0212fdb6]:lang(ru),.Reward__content__points[data-v-0212fdb6]:lang(tr),.Reward__content__points[data-v-0212fdb6]:lang(zh_sc),.Reward__content__points[data-v-0212fdb6]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}.Reward__content__iconcontainer[data-v-0212fdb6]{width:40px}.Reward__content__icon[data-v-0212fdb6],.Reward__content__iconcontainer[data-v-0212fdb6]{position:absolute;bottom:-16px;right:-10px;z-index:2}.Reward .locked[data-v-0212fdb6]{background:#c2554e}.Reward__teaser[data-v-0212fdb6]{text-shadow:-2px -2px 0 #040404,0 -2px 0 #040404,2px -2px 0 #040404,2px 0 0 #040404,2px 2px 0 #040404,0 2px 0 #040404,-2px 2px 0 #040404,-2px 0 0 #040404,0 3.5px 0 #040404,-2px 3.5px 0 #040404,2px 3.5px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;text-transform:uppercase;font-size:34px;display:flex;justify-content:center;align-content:center;height:100%;font-size:60px}.Reward__teaser[data-v-0212fdb6]:lang(jp),.Reward__teaser[data-v-0212fdb6]:lang(kr),.Reward__teaser[data-v-0212fdb6]:lang(pl),.Reward__teaser[data-v-0212fdb6]:lang(ru),.Reward__teaser[data-v-0212fdb6]:lang(tr),.Reward__teaser[data-v-0212fdb6]:lang(zh_sc),.Reward__teaser[data-v-0212fdb6]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}', ""]),
        r.locals = {},
        e.exports = r
    },
    1188: function(e, a, t) {
        "use strict";
        t(1133)
    },
    1189: function(e, a, t) {
        var r = t(7)((function(e) {
            return e[1]
        }
        ));
        r.push([e.i, '.RewardBar[data-v-d3140ba0]{display:flex;flex-shrink:0;position:relative;width:150px}.RewardBar__milestone[data-v-d3140ba0]{text-shadow:-1.5px -1.5px 0 #040404,0 -1.5px 0 #040404,1.5px -1.5px 0 #040404,1.5px 0 0 #040404,1.5px 1.5px 0 #040404,0 1.5px 0 #040404,-1.5px 1.5px 0 #040404,-1.5px 0 0 #040404,0 3px 0 #040404,-1.5px 3px 0 #040404,1.5px 3px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;text-transform:uppercase;font-size:16px;align-items:center;display:flex;flex-direction:column;position:absolute;right:-10px;top:15px;white-space:nowrap;width:14px;z-index:5}.RewardBar__milestone[data-v-d3140ba0]:lang(jp),.RewardBar__milestone[data-v-d3140ba0]:lang(kr),.RewardBar__milestone[data-v-d3140ba0]:lang(pl),.RewardBar__milestone[data-v-d3140ba0]:lang(ru),.RewardBar__milestone[data-v-d3140ba0]:lang(tr),.RewardBar__milestone[data-v-d3140ba0]:lang(zh_sc),.RewardBar__milestone[data-v-d3140ba0]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}.RewardBar__milestone .unlocked[data-v-d3140ba0]{color:#ffe986}.RewardBar__milestone .locked[data-v-d3140ba0]{color:#f38c86}.RewardBar__milestone__name[data-v-d3140ba0]{width:150px;text-align:center;white-space:normal}.RewardBar__milestone__lock[data-v-d3140ba0]{width:25px;opacity:.5;margin-top:-20px}.RewardBar__progress[data-v-d3140ba0]{-webkit-transform:skew(-5deg);-moz-transform:skew(-5deg);-o-transform:skew(-5deg);background-color:#c2554e;height:20px;width:100%;border:1.5px solid #040404;border-radius:3px;position:relative;overflow-x:hidden}.RewardBar__progress--teaser[data-v-d3140ba0]{-webkit-mask-image:linear-gradient(90deg,rgba(0,0,0,.6),transparent);mask-image:linear-gradient(90deg,rgba(0,0,0,.6),transparent)}.RewardBar__progress__complete[data-v-d3140ba0]{background:#ffd550;border-bottom:9px solid #eebd38;height:100%;position:absolute;box-shadow:1px 0 #040404;border-radius:1px}.RewardBar__progress__pointer[data-v-d3140ba0]{position:absolute;z-index:10;top:-10px;width:28px}.RewardBar__progress__pointer svg[data-v-d3140ba0]{width:100%;height:100%}', ""]),
        r.locals = {},
        e.exports = r
    },
    1202: function(e, a, t) {
        "use strict";
        t.r(a);
        t(58),
        t(33);
        var r = t(0)
          , n = t(2)
          , s = t(1230).default
          , o = t(1222)
          , d = t(1231).default
          , i = t(85)
          , l = r.default.extend({
            name: "RewardsProgress",
            components: {
                Reward: s,
                RewardHeader: o.default,
                RewardBar: d
            },
            props: {
                points: {
                    type: Number,
                    default: 0
                },
                rewards: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                unlockedRewards: {
                    type: Number,
                    default: 0
                },
                upcomingTiers: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    showRewards: !1
                }
            },
            computed: {
                isTouchDevice: function() {
                    return "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
                }
            },
            mounted: function() {
                var e = this;
                setTimeout((function() {
                    e.showRewards = !0
                }
                ), 1e3)
            },
            methods: {
                onRewardsEnter: function(e) {
                    var a = e.dataset.index ? parseInt(e.dataset.index) : 0;
                    n.a.set(e, {
                        opacity: 0,
                        scale: .8
                    }),
                    n.a.to(e, {
                        delay: .05 * a,
                        duration: .4,
                        opacity: 1,
                        scale: 1,
                        ease: "elastic.out(1.2, 0.6)"
                    }),
                    Object(i.e)(e, .1 * a + .1)
                },
                onLeave: function(e) {
                    n.a.to(e, {
                        duration: .4,
                        opacity: 0,
                        ease: "Power2.easeInOut"
                    })
                }
            }
        })
          , c = (t(1311),
        t(1))
          , p = Object(c.a)(l, (function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "RewardsProgress"
            }, [t("RewardHeader", {
                attrs: {
                    "unlocked-rewards": e.unlockedRewards,
                    "total-rewards": e.rewards.length,
                    points: e.points
                }
            }), e._v(" "), t("div", {
                directives: [{
                    name: "dragscroll",
                    rawName: "v-dragscroll.x",
                    value: !e.isTouchDevice,
                    expression: "!isTouchDevice",
                    modifiers: {
                        x: !0
                    }
                }],
                staticClass: "RewardsProgress__horizontalScroll"
            }, [t("div", {
                staticClass: "RewardsProgress__constantHeight"
            }, [e.showRewards ? t("transition-group", {
                staticClass: "RewardsProgress__cardsContainer",
                attrs: {
                    appear: ""
                },
                on: {
                    appear: e.onRewardsEnter,
                    enter: e.onRewardsEnter,
                    leave: e.onLeave
                }
            }, [e._l(e.rewards, (function(a, r) {
                return t("Reward", {
                    key: a.id,
                    staticClass: "RewardsProgress__card",
                    attrs: {
                        "data-index": r,
                        reward: a,
                        locked: a.locked,
                        "reward-amount": a.rewardAmount,
                        "reward-type": a.rewardType,
                        "reward-image": "" + e.$config.assetsUrl + a.image
                    }
                })
            }
            )), e._v(" "), e.upcomingTiers ? t("Reward", {
                key: e.rewards.length + 1,
                staticClass: "RewardsProgress__card",
                attrs: {
                    "data-index": e.rewards.length,
                    teaser: ""
                }
            }) : e._e()], 2) : e._e()], 1), e._v(" "), t("div", {
                staticClass: "RewardsProgress__progressline"
            }, [e._l(e.rewards, (function(e) {
                return t("RewardBar", {
                    key: e.key,
                    attrs: {
                        id: e.id,
                        locked: e.locked,
                        "trophy-points": e.trophyPoints,
                        "reward-amount": e.rewardAmount,
                        "progress-percentage": e.progressPercentage,
                        "reward-type": e.rewardType
                    }
                })
            }
            )), e._v(" "), e.upcomingTiers ? t("RewardBar", {
                attrs: {
                    id: 5e3,
                    locked: "",
                    teaser: ""
                }
            }) : e._e()], 2)]), e._v(" "), e.upcomingTiers ? t("div", {
                staticClass: "RewardsProgress__announcement"
            }, [e._v(e._s(e.$t("rewardtrack_expanding")))]) : e._e()], 1)
        }
        ), [], !1, null, "d3bd0c26", null);
        a.default = p.exports
    },
    1222: function(e, a, t) {
        "use strict";
        t.r(a);
        var r = t(1145);
        a.default = r.default
    },
    1223: function(e, a, t) {
        var r = t(1312);
        r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        (0,
        t(8).default)("0a00a7d2", r, !0, {
            sourceMap: !1
        })
    },
    1230: function(e, a, t) {
        "use strict";
        t.r(a);
        t(58);
        var r, n = t(0);
        !function(e) {
            e.coins = "coins",
            e.tokens = "tokens",
            e.gempack = "gempack",
            e.starpack = "starpack",
            e.skin = "skin",
            e.pin = "pin"
        }(r || (r = {}));
        var s = t(86)
          , o = n.default.extend({
            name: "Reward",
            components: {
                Background: s.default
            },
            props: {
                teaser: {
                    type: Boolean,
                    default: !1
                },
                locked: {
                    type: Boolean,
                    default: !0
                },
                rewardAmount: {
                    type: Number,
                    default: null
                },
                rewardType: {
                    type: String,
                    default: ""
                },
                rewardImage: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    lockIcon: t(309),
                    pickedIcon: t(530),
                    color: "peach"
                }
            },
            computed: {
                showRewardAmount: function() {
                    return this.rewardType === r.starpack || this.rewardType === r.coins || this.rewardType === r.tokens
                }
            }
        })
          , d = (t(1186),
        t(1))
          , i = Object(d.a)(o, (function() {
            var e = this
              , a = e.$createElement
              , r = e._self._c || a;
            return r("div", [r("div", {
                ref: "rewardContainer",
                staticClass: "Reward",
                class: {
                    "Reward--unlocked": !e.locked,
                    "Reward--teaser": e.teaser
                }
            }, [r("div", {
                staticClass: "Reward__content",
                class: {
                    "Reward__content--unlocked": !e.locked
                }
            }, [e.locked ? r("Background", {
                attrs: {
                    "dots-top": "",
                    "dots-small": "",
                    color: e.color
                }
            }) : e._e(), e._v(" "), e.locked ? e._e() : r("Background", {
                attrs: {
                    color: "yellow",
                    graphic: "burst",
                    "graphic-color": "yellow"
                }
            }), e._v(" "), e.locked ? e._e() : r("img", {
                staticClass: "Reward__content__iconcontainer",
                attrs: {
                    src: t(529),
                    alt: ""
                }
            }), e._v(" "), e.locked && !e.teaser ? r("img", {
                staticClass: "Reward__content__iconcontainer",
                attrs: {
                    src: t(1185),
                    alt: ""
                }
            }) : e._e(), e._v(" "), e.showRewardAmount ? r("div", {
                staticClass: "Reward__content__points"
            }, [e._v("\n        " + e._s(e.rewardAmount) + "\n      ")]) : e._e(), e._v(" "), e.teaser ? r("div", {
                staticClass: "Reward__teaser"
            }, [e._v("?")]) : r("div", {
                staticClass: "Reward__imagecontainer"
            }, [r("img", {
                attrs: {
                    src: e.rewardImage,
                    alt: ""
                }
            })])], 1)])])
        }
        ), [], !1, null, "0212fdb6", null);
        a.default = i.exports
    },
    1231: function(e, a, t) {
        "use strict";
        t.r(a);
        t(58),
        t(10),
        t(59),
        t(32);
        var r = t(0)
          , n = t(2)
          , s = t(1146).default
          , o = t(319)
          , d = r.default.extend({
            name: "RewardBar",
            components: {
                IconIndicatorDown: s,
                IconIndicator: o.a
            },
            props: {
                id: {
                    type: Number,
                    required: !0
                },
                trophyPoints: {
                    type: Number,
                    default: void 0
                },
                rewardAmount: {
                    type: Number,
                    default: null
                },
                locked: {
                    type: Boolean,
                    default: !1
                },
                progressPercentage: {
                    type: Number,
                    default: 0
                },
                teaser: {
                    type: Boolean,
                    default: !1
                },
                rewardType: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    bgHoverColor: "red"
                }
            },
            computed: {
                style: function() {
                    return "width: " + this.progressPercentage + "%"
                },
                pointerPosition: function() {
                    return "left: calc(" + this.progressPercentage + "%  - 14px)"
                },
                showTrophyPoints: function() {
                    return void 0 !== this.trophyPoints
                },
                showPointer: function() {
                    return this.progressPercentage < 100 && 0 !== this.progressPercentage
                },
                title: function() {
                    return null !== this.rewardAmount ? "".concat(this.rewardAmount, " ").concat(this.$t("reward_type_".concat(this.rewardType))).toString() : null
                }
            },
            methods: {
                onPointerEnter: function(e) {
                    n.a.set(e, {
                        translateX: "-100%",
                        opacity: 0
                    }),
                    n.a.to(e, {
                        delay: .8,
                        duration: .6,
                        translateX: 0,
                        opacity: 1,
                        ease: "Power2.easeOut"
                    })
                }
            }
        })
          , i = (t(1188),
        t(1))
          , l = Object(i.a)(d, (function() {
            var e = this
              , a = e.$createElement
              , r = e._self._c || a;
            return r("div", {
                staticClass: "RewardBar"
            }, [r("div", {
                staticClass: "RewardBar__progress",
                class: {
                    "RewardBar__progress--teaser": e.teaser
                }
            }, [r("div", {
                staticClass: "RewardBar__progress__complete",
                style: e.style
            })]), e._v(" "), r("transition", {
                attrs: {
                    appear: ""
                },
                on: {
                    appear: e.onPointerEnter,
                    enter: e.onPointerEnter
                }
            }, [e.showPointer ? r("div", {
                staticClass: "RewardBar__progress__pointer",
                style: e.pointerPosition
            }, [r("IconIndicatorDown")], 1) : e._e()]), e._v(" "), r("div", {
                staticClass: "RewardBar__milestone"
            }, [e.teaser ? r("div", {
                staticClass: "RewardBar__milestone__lock"
            }, [r("img", {
                staticClass: "Reward__content__iconcontainer",
                attrs: {
                    src: t(309),
                    alt: "locked"
                }
            })]) : r("IconIndicator", {
                staticClass: "RewardBar__milestone__pointer",
                attrs: {
                    color: e.locked ? "peach" : "yellow"
                }
            }), e._v(" "), e.showTrophyPoints ? r("div", {
                class: {
                    locked: e.locked,
                    unlocked: !e.locked
                }
            }, [e._v("\n      " + e._s(e.trophyPoints) + "\n    ")]) : e._e(), e._v(" "), e.rewardAmount ? r("div", {
                staticClass: "RewardBar__milestone__name"
            }, [e._v("\n      " + e._s(e.title) + "\n    ")]) : e._e()], 1)], 1)
        }
        ), [], !1, null, "d3140ba0", null);
        a.default = l.exports
    },
    1311: function(e, a, t) {
        "use strict";
        t(1223)
    },
    1312: function(e, a, t) {
        var r = t(7)((function(e) {
            return e[1]
        }
        ));
        r.push([e.i, '.RewardsProgress[data-v-d3bd0c26]{padding-bottom:64px}.RewardsProgress__horizontalScroll[data-v-d3bd0c26]{display:flex;flex-direction:column;overflow-x:auto;padding:16px 24px 64px;white-space:nowrap;-webkit-overflow-scrolling:touch;overflow-y:hidden;cursor:-webkit-grab;cursor:grab;height:250px;max-width:1900px;margin:0 auto}.RewardsProgress__horizontalScroll[data-v-d3bd0c26]::-webkit-scrollbar{display:none}.RewardsProgress__horizontalScroll[data-v-d3bd0c26]:active{cursor:-webkit-grabbing;cursor:grabbing}.RewardsProgress__announcement[data-v-d3bd0c26]{text-shadow:-1.5px -1.5px 0 #040404,0 -1.5px 0 #040404,1.5px -1.5px 0 #040404,1.5px 0 0 #040404,1.5px 1.5px 0 #040404,0 1.5px 0 #040404,-1.5px 1.5px 0 #040404,-1.5px 0 0 #040404,0 3px 0 #040404,-1.5px 3px 0 #040404,1.5px 3px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;text-transform:uppercase;font-size:16px;text-align:center;color:#ffc0bc}.RewardsProgress__announcement[data-v-d3bd0c26]:lang(jp),.RewardsProgress__announcement[data-v-d3bd0c26]:lang(kr),.RewardsProgress__announcement[data-v-d3bd0c26]:lang(pl),.RewardsProgress__announcement[data-v-d3bd0c26]:lang(ru),.RewardsProgress__announcement[data-v-d3bd0c26]:lang(tr),.RewardsProgress__announcement[data-v-d3bd0c26]:lang(zh_sc),.RewardsProgress__announcement[data-v-d3bd0c26]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}.RewardsProgress__progressline[data-v-d3bd0c26]{display:flex}.RewardsProgress__progressline>div[data-v-d3bd0c26]{margin-right:8px;flex-shrink:0}.RewardsProgress__constantHeight[data-v-d3bd0c26]{display:flex;height:104px;margin-bottom:16px}.RewardsProgress__animationContainer[data-v-d3bd0c26]{display:flex}.RewardsProgress__cardsContainer[data-v-d3bd0c26]{display:flex;height:88px;padding-left:89px}.RewardsProgress__cardsContainer>div[data-v-d3bd0c26]{margin-right:40px;flex-shrink:0}.RewardsProgress__cardsContainer>div[data-v-d3bd0c26]:last-of-type{margin-right:0}', ""]),
        r.locals = {},
        e.exports = r
    }
}]);
