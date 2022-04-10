(window.webpackJsonp = window.webpackJsonp || []).push([[54, 13, 15, 16, 21, 22, 23, 24, 25, 28, 31, 35], {
    1044: function(e, t, n) {
        var a = n(1057);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(8).default)("07457290", a, !0, {
            sourceMap: !1
        })
    },
    1047: function(e, t, n) {
        var a = n(1065);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(8).default)("1847f131", a, !0, {
            sourceMap: !1
        })
    },
    1048: function(e, t, n) {
        var a = n(1067);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(8).default)("39d6d69a", a, !0, {
            sourceMap: !1
        })
    },
    1049: function(e, t, n) {
        var a = n(1072);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(8).default)("22ad4a68", a, !0, {
            sourceMap: !1
        })
    },
    1056: function(e, t, n) {
        "use strict";
        n(1044)
    },
    1057: function(e, t, n) {
        var a = n(7)((function(e) {
            return e[1]
        }
        ));
        a.push([e.i, ".union[data-v-8d35cab8]{fill:#4b546c}.active[data-v-8d35cab8]{fill:#fff}.completed[data-v-8d35cab8]{fill:#ffd550}", ""]),
        a.locals = {},
        e.exports = a
    },
    1058: function(e, t, n) {
        var a = n(1091);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(8).default)("23bfd817", a, !0, {
            sourceMap: !1
        })
    },
    1061: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "States", (function() {
            return i
        }
        ));
        n(39),
        n(47),
        n(99);
        var a = n(0)
          , i = {
            active: "active",
            completed: "completed",
            default: "default"
        }
          , o = a.default.extend({
            name: "IconUnion",
            props: {
                state: {
                    type: String,
                    validator: function(e) {
                        return Object.values(i).includes(e)
                    },
                    default: i.default
                }
            },
            data: function() {
                return {
                    States: i
                }
            }
        })
          , r = (n(1056),
        n(1))
          , s = Object(r.a)(o, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("svg", {
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
            }, [n("path", {
                attrs: {
                    d: "M10.1,0.2H0.9H0.2v0.7v0v0.7v2.2v0.7c0,1.5,0.9,2.7,2.2,3.3l0,0.1L2.1,8.7h0.2L2.1,9.4h0.9h4.8h0.9L8.7,8.7h0.2L8.6,7.8\n\tl0-0.1c1.3-0.5,2.2-1.8,2.2-3.3V3.8V1.6V0.9v0V0.2H10.1z"
                }
            }), e._v(" "), n("g", [n("path", {
                staticClass: "union",
                class: {
                    active: e.state == e.States.active,
                    completed: e.state == e.States.completed
                },
                attrs: {
                    d: "M10.1,0.9v2.9c0,1.5-1.1,2.7-2.5,2.8L7.9,8H3.1l0.4-1.4C2.1,6.4,0.9,5.2,0.9,3.8V0.9H10.1z"
                }
            })])])
        }
        ), [], !1, null, "8d35cab8", null);
        t.default = s.exports
    },
    1064: function(e, t, n) {
        "use strict";
        n(1047)
    },
    1065: function(e, t, n) {
        var a = n(7)((function(e) {
            return e[1]
        }
        ));
        a.push([e.i, '.MatchPrediction[data-v-a7844e62]{border:2px solid #000;display:flex;overflow:hidden;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.MatchPrediction--roundedCorners[data-v-a7844e62]{border-radius:5px}.MatchPrediction--landingPage[data-v-a7844e62]{box-shadow:0 2px #040404;border-radius:5px;border:2px solid #040404}.MatchPrediction--disabled[data-v-a7844e62]:after{content:"";position:absolute;height:100%;width:100%;background:#000;opacity:.5}', ""]),
        a.locals = {},
        e.exports = a
    },
    1066: function(e, t, n) {
        "use strict";
        n(1048)
    },
    1067: function(e, t, n) {
        var a = n(7)((function(e) {
            return e[1]
        }
        ));
        a.push([e.i, '.EventIndicator[data-v-4d65b874]{cursor:pointer;position:relative;border-radius:4px;pointer-events:all}.EventIndicator__overflow-container[data-v-4d65b874]{height:100%;overflow:hidden;border-radius:4px;border-left:2px solid #000;width:100%}.EventIndicator__skew[data-v-4d65b874]{-webkit-transform:skew(-5deg);-moz-transform:skew(-5deg);-o-transform:skew(-5deg);border-radius:4px;margin-left:-4px;height:100%;overflow:hidden;border-right:2px solid #000;border-top:2px solid #000;border-bottom:2px solid #000}.EventIndicator__content[data-v-4d65b874]{-webkit-transform:skew(5deg);-moz-transform:skew(5deg);-o-transform:skew(5deg);border-radius:4px;margin-right:-4px;height:100%;display:flex;flex-direction:column;background:#343c52}.EventIndicator__header[data-v-4d65b874]{border-top:2px solid #4b546c;height:50%;padding:0 10px;display:flex;align-items:center;justify-content:space-between;position:relative}.EventIndicator__header[data-v-4d65b874]:after{content:" ";display:block;position:absolute;top:-2px;right:0;height:8px;width:8px;background-color:#f1f1f1;opacity:.3;-webkit-clip-path:polygon(0 0,100% 100%,100% 0);clip-path:polygon(0 0,100% 100%,100% 0);border-radius:0 3px 0 0}.EventIndicator__header__text[data-v-4d65b874]{text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;font-size:12px}.EventIndicator__header__text[data-v-4d65b874]:lang(jp),.EventIndicator__header__text[data-v-4d65b874]:lang(kr),.EventIndicator__header__text[data-v-4d65b874]:lang(pl),.EventIndicator__header__text[data-v-4d65b874]:lang(ru),.EventIndicator__header__text[data-v-4d65b874]:lang(tr),.EventIndicator__header__text[data-v-4d65b874]:lang(zh_sc),.EventIndicator__header__text[data-v-4d65b874]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}@media(max-width:23.4275em){.EventIndicator__header__text[data-v-4d65b874]{font-size:10px}}.EventIndicator__header__text span[data-v-4d65b874]{color:#ffe986}.EventIndicator__header__label[data-v-4d65b874]{border-bottom-left-radius:3px;position:absolute;left:0;border-color:#000;border-left:2px solid;border-top:2px solid;overflow:hidden;bottom:-13px;z-index:10;padding-right:2px}.EventIndicator__header__label p[data-v-4d65b874]{-webkit-transform:skew(5deg);-moz-transform:skew(5deg);-o-transform:skew(5deg);color:#fff;font-family:"Montserrat",sans-serif;text-transform:uppercase;font-size:10px}.EventIndicator__header__skew[data-v-4d65b874]{-webkit-transform:skew(-5deg);-moz-transform:skew(-5deg);-o-transform:skew(-5deg);background:#bc0037;padding:1px 4px 1px 6px;margin-left:-1px;border-bottom-right-radius:3px;border-color:#000;border-bottom:2px solid;border-right:2px solid}.EventIndicator__body[data-v-4d65b874]{color:#040404;font-size:10px;font-family:"Montserrat",sans-serif;font-weight:700;border-color:#000;border-top:1px solid;border-bottom:2px solid;height:50%;background:#222b3f;display:flex;padding:0 10px}.EventIndicator__body[data-v-4d65b874]:lang(jp),.EventIndicator__body[data-v-4d65b874]:lang(kr),.EventIndicator__body[data-v-4d65b874]:lang(pl),.EventIndicator__body[data-v-4d65b874]:lang(ru),.EventIndicator__body[data-v-4d65b874]:lang(tr),.EventIndicator__body[data-v-4d65b874]:lang(zh_sc),.EventIndicator__body[data-v-4d65b874]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}.EventIndicator__body>div[data-v-4d65b874]{-webkit-transform:skew(-5deg);-moz-transform:skew(-5deg);-o-transform:skew(-5deg);border-right:1px solid #000;padding-right:2px;padding-left:2px;flex-grow:1}.EventIndicator__body>div[data-v-4d65b874]:first-of-type{padding-left:0}.EventIndicator__body>div[data-v-4d65b874]:last-of-type{border:none}.EventIndicator__day[data-v-4d65b874]{display:flex;align-items:center;justify-content:flex-start}.EventIndicator__day__match[data-v-4d65b874]{-webkit-transform:skew(5deg);-moz-transform:skew(5deg);-o-transform:skew(5deg);width:8px;height:8px;border:.718121px solid #000;background:#4b546c;border-radius:10px}.EventIndicator__day__match--active[data-v-4d65b874]{background:#fff}.EventIndicator__day__match--completed[data-v-4d65b874]{background:#ffd550}.EventIndicator__day__match--final[data-v-4d65b874],.EventIndicator__day__match--semifinal[data-v-4d65b874]{margin-left:8px}.EventIndicator__day__match--final[data-v-4d65b874]{height:8px;width:10px;border:none;background:transparent;border-radius:0}', ""]),
        a.locals = {},
        e.exports = a
    },
    1068: function(e, t, n) {
        e.exports = n.p + "img/pin_emo_foam_blue.d0a4293.svg"
    },
    1069: function(e, t, n) {
        e.exports = n.p + "img/pin_emo_glasses.74fa12a.svg"
    },
    1070: function(e, t, n) {
        e.exports = n.p + "img/jessie-crop.45c3e88.png"
    },
    1071: function(e, t, n) {
        "use strict";
        n(1049)
    },
    1072: function(e, t, n) {
        var a = n(7)
          , i = n(100)
          , o = n(310)
          , r = a((function(e) {
            return e[1]
        }
        ))
          , s = i(o);
        r.push([e.i, '.LoginCard[data-v-0bccffe1]{box-shadow:0 2px #040404;border-radius:5px;border:2px solid #040404;justify-content:center;flex-direction:column}.LoginCard[data-v-0bccffe1],.LoginCard__container[data-v-0bccffe1]{position:relative;display:flex;align-items:center;width:100%}.LoginCard__container[data-v-0bccffe1]{flex-direction:row}.LoginCard__background[data-v-0bccffe1],.LoginCard__container[data-v-0bccffe1]{border-top-left-radius:4px;border-top-right-radius:4px;min-height:145px}.LoginCard__background[data-v-0bccffe1]{position:absolute;background-color:#ffd550;overflow:hidden;height:100%;width:100%}.LoginCard__background[data-v-0bccffe1]:after{position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;content:" ";padding:4px;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-position:center center;mask-position:center center;background-color:#ffc938;-webkit-mask-image:url(' + s + ");mask-image:url(" + s + ')}.LoginCard h3[data-v-0bccffe1]{text-shadow:-1.5px -1.5px 0 #040404,0 -1.5px 0 #040404,1.5px -1.5px 0 #040404,1.5px 0 0 #040404,1.5px 1.5px 0 #040404,0 1.5px 0 #040404,-1.5px 1.5px 0 #040404,-1.5px 0 0 #040404,0 3px 0 #040404,-1.5px 3px 0 #040404,1.5px 3px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;font-size:18px}.LoginCard h3[data-v-0bccffe1]:lang(jp),.LoginCard h3[data-v-0bccffe1]:lang(kr),.LoginCard h3[data-v-0bccffe1]:lang(pl),.LoginCard h3[data-v-0bccffe1]:lang(ru),.LoginCard h3[data-v-0bccffe1]:lang(tr),.LoginCard h3[data-v-0bccffe1]:lang(zh_sc),.LoginCard h3[data-v-0bccffe1]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}.LoginCard h4[data-v-0bccffe1]{color:#040404;font-size:14px;font-family:"Montserrat",sans-serif;text-align:center;margin-top:8px;color:#000}.LoginCard h4[data-v-0bccffe1]:lang(jp),.LoginCard h4[data-v-0bccffe1]:lang(kr),.LoginCard h4[data-v-0bccffe1]:lang(pl),.LoginCard h4[data-v-0bccffe1]:lang(ru),.LoginCard h4[data-v-0bccffe1]:lang(tr),.LoginCard h4[data-v-0bccffe1]:lang(zh_sc),.LoginCard h4[data-v-0bccffe1]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}.LoginCard__decorationLeft[data-v-0bccffe1]{position:absolute;top:-28px;left:30%;width:80px;height:60px;transform:rotate(-25deg)}.LoginCard__decorationLeft__image[data-v-0bccffe1]{width:100%;height:auto}.LoginCard__decorationLeft--connected[data-v-0bccffe1]{top:-16px;left:8px;transform:rotate(-55deg)}.LoginCard__decorationRight[data-v-0bccffe1]{position:absolute;width:80px;height:60px;top:-15px;right:-15px;transform:rotate(25deg)}.LoginCard__decorationRight__image[data-v-0bccffe1]{width:100%;height:auto}.LoginCard__text[data-v-0bccffe1]{position:relative;width:60%;padding:32px 16px 16px}.LoginCard__text--connected[data-v-0bccffe1]{display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;text-align:center;padding:16px}.LoginCard__imageContainer[data-v-0bccffe1]{position:relative;display:flex;width:33%;height:145px}.LoginCard__imageContainer__image[data-v-0bccffe1]{position:absolute;bottom:0;left:0;height:160px;width:auto}.LoginCard__buttonContainer[data-v-0bccffe1]{position:relative;height:64px;width:100%;display:flex;justify-content:center;align-items:center;padding:0 12px;background-color:#9d4540;border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-top:2px solid #040404}.LoginCard__buttonContainer__button[data-v-0bccffe1]{min-width:100%}@media(max-width:23.4275em){.LoginCard h3[data-v-0bccffe1]{text-shadow:-1.5px -1.5px 0 #040404,0 -1.5px 0 #040404,1.5px -1.5px 0 #040404,1.5px 0 0 #040404,1.5px 1.5px 0 #040404,0 1.5px 0 #040404,-1.5px 1.5px 0 #040404,-1.5px 0 0 #040404,0 3px 0 #040404,-1.5px 3px 0 #040404,1.5px 3px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;font-size:18px}.LoginCard h3[data-v-0bccffe1]:lang(jp),.LoginCard h3[data-v-0bccffe1]:lang(kr),.LoginCard h3[data-v-0bccffe1]:lang(pl),.LoginCard h3[data-v-0bccffe1]:lang(ru),.LoginCard h3[data-v-0bccffe1]:lang(tr),.LoginCard h3[data-v-0bccffe1]:lang(zh_sc),.LoginCard h3[data-v-0bccffe1]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}.LoginCard__container[data-v-0bccffe1]{min-height:115px}.LoginCard__imageContainer[data-v-0bccffe1]{height:115px}.LoginCard__imageContainer__image[data-v-0bccffe1]{height:145px}.LoginCard__decorationLeft[data-v-0bccffe1]{transform:translate(15px,-10px) scale(.9) rotate(-35deg)}.LoginCard__decorationRight[data-v-0bccffe1]{transform:translate(10px,-12px) scale(.9) rotate(25deg)}}@media only screen and (max-device-width:375px)and (orientation:landscape){.LoginCard h3[data-v-0bccffe1]{text-shadow:-1.5px -1.5px 0 #040404,0 -1.5px 0 #040404,1.5px -1.5px 0 #040404,1.5px 0 0 #040404,1.5px 1.5px 0 #040404,0 1.5px 0 #040404,-1.5px 1.5px 0 #040404,-1.5px 0 0 #040404,0 3px 0 #040404,-1.5px 3px 0 #040404,1.5px 3px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;font-size:18px}.LoginCard h3[data-v-0bccffe1]:lang(jp),.LoginCard h3[data-v-0bccffe1]:lang(kr),.LoginCard h3[data-v-0bccffe1]:lang(pl),.LoginCard h3[data-v-0bccffe1]:lang(ru),.LoginCard h3[data-v-0bccffe1]:lang(tr),.LoginCard h3[data-v-0bccffe1]:lang(zh_sc),.LoginCard h3[data-v-0bccffe1]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}.LoginCard__container[data-v-0bccffe1]{min-height:115px}.LoginCard__imageContainer[data-v-0bccffe1]{height:115px}.LoginCard__imageContainer__image[data-v-0bccffe1]{height:145px}.LoginCard__decorationLeft[data-v-0bccffe1]{transform:translate(15px,-10px) scale(.9) rotate(-35deg)}.LoginCard__decorationRight[data-v-0bccffe1]{transform:translate(10px,-12px) scale(.9) rotate(25deg)}}', ""]),
        r.locals = {},
        e.exports = r
    },
    1074: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0)
          , i = n(2)
          , o = n(1087)
          , r = a.default.extend({
            name: "FeedLogin",
            components: {
                LogInCard: o.default
            },
            props: {
                loggedIn: Boolean,
                isFullscreen: Boolean
            },
            data: function() {
                return {}
            },
            computed: {},
            mounted: function() {},
            methods: {
                dismiss: function() {
                    this.isFullscreen && (this.loggedIn || this.$emit("on-dismiss-login"))
                },
                onEnter: function(e) {},
                onLeave: function(e) {
                    i.a.to(e, {
                        duration: .4,
                        opacity: 0,
                        ease: "Power2.easeInOut"
                    })
                }
            }
        })
          , s = (n(1090),
        n(1))
          , d = Object(s.a)(r, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("transition", {
                attrs: {
                    appear: ""
                },
                on: {
                    appear: e.onEnter,
                    enter: e.onEnter,
                    leave: e.onLeave
                }
            }, [n("div", {
                staticClass: "FeedLogin",
                class: {
                    "FeedLogin--fullScreen": e.$props.isFullscreen
                },
                on: {
                    click: e.dismiss
                }
            }, [n("LogInCard", {
                class: {
                    FeedLogin__fullscreenCard: e.$props.isFullscreen
                },
                attrs: {
                    "logged-in": e.$props.loggedIn
                },
                on: {
                    "on-welcome": function(t) {
                        return e.$emit("on-welcome")
                    }
                }
            })], 1)])
        }
        ), [], !1, null, "4ae7a467", null);
        t.default = d.exports
    },
    1076: function(e, t, n) {
        var a = n(1111);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(8).default)("a21f9ec0", a, !0, {
            sourceMap: !1
        })
    },
    1077: function(e, t, n) {
        "use strict";
        var a = n(1085);
        t.a = a.default
    },
    1079: function(e, t, n) {
        var a = n(1121);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(8).default)("eb0458c2", a, !0, {
            sourceMap: !1
        })
    },
    1080: function(e, t, n) {
        var a = n(1124);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(8).default)("43cc9487", a, !0, {
            sourceMap: !1
        })
    },
    1085: function(e, t, n) {
        "use strict";
        n.r(t);
        n(58),
        n(21),
        n(81),
        n(32);
        var a = n(0)
          , i = n(122)
          , o = a.default.extend({
            name: "MatchPrediction",
            components: {
                PredictionButtonGroup: i.default
            },
            props: {
                match: {
                    type: Object,
                    required: !0
                },
                isInteractable: {
                    type: Boolean,
                    default: !1
                },
                isOnLandingPage: {
                    type: Boolean,
                    default: !1
                },
                isBig: {
                    type: Boolean,
                    default: !1
                },
                isRounded: {
                    type: Boolean,
                    default: !1
                },
                isPostSet: {
                    type: Boolean,
                    default: !1
                },
                index: {
                    type: Number,
                    default: 0
                },
                isActive: {
                    type: Boolean,
                    default: !0
                },
                hideLogo: Boolean
            },
            data: function() {
                return {
                    pickedTeam: null
                }
            },
            computed: {
                getLeftButtonData: function() {
                    return this.getButtonData(0)
                },
                getRightButtonData: function() {
                    return this.getButtonData(1)
                }
            },
            methods: {
                getButtonData: function(e) {
                    var t = this.match.teams[e] || {}
                      , n = this.$accessor.teams.teamByNr(t.id) || ""
                      , a = this.match.prediction
                      , i = void 0 !== a && a === e
                      , o = "" !== n && n.logo ? "".concat(this.$config.assetsUrl).concat(n.logo) : ""
                      , r = "" !== n && n.shortName ? n.shortName : "TBD"
                      , s = t.score
                      , d = this.match.winner === e
                      , c = d ? "yellow" : "dark";
                    return this.isActive && (c = 0 === e ? "blue" : "red"),
                    {
                        color: c,
                        teamLogo: o,
                        teamName: r,
                        isSelected: i,
                        isWinner: d,
                        matchResult: s,
                        teamNr: t.id
                    }
                },
                setPredictedTeam: function(e) {
                    var t = this.match.teams;
                    if (t[0].id !== e && t[1].id !== e)
                        throw new Error("Team id not in match team array");
                    var n = t[0].id === e ? 0 : 1;
                    this.$emit("set-prediction", this.match.id, n)
                }
            }
        })
          , r = (n(1064),
        n(1))
          , s = Object(r.a)(o, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        roundedCorners: e.isRounded,
                        landingPage: e.$props.isOnLandingPage,
                        disabled: e.$props.hideLogo
                    },
                    expression: "{ roundedCorners: isRounded, landingPage: $props.isOnLandingPage, disabled: $props.hideLogo}"
                }],
                staticClass: "MatchPrediction"
            }, [n("PredictionButtonGroup", {
                attrs: {
                    "is-on-landing-page": e.$props.isOnLandingPage,
                    "is-big": e.$props.isBig,
                    "is-rounded": e.$props.isRounded,
                    "is-interactable": e.$props.isInteractable,
                    "is-post-match": e.$props.match.completed,
                    "is-post-set": e.$props.isPostSet,
                    "left-button": e.getLeftButtonData,
                    "right-button": e.getRightButtonData,
                    index: e.$props.index,
                    "hide-logo": e.hideLogo
                },
                on: {
                    "set-predicted-team": e.setPredictedTeam
                }
            })], 1)
        }
        ), [], !1, null, "a7844e62", null);
        t.default = s.exports
    },
    1086: function(e, t, n) {
        "use strict";
        n.r(t);
        n(58),
        n(10),
        n(59);
        var a = n(102)
          , i = n(1061)
          , o = {
            name: "EventIndicator",
            components: {
                BaseButton: a.default,
                IconUnion: i.default
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
                    var e;
                    return null === (e = this.$accessor.global.currentEventInfo) || void 0 === e ? void 0 : e.days
                }
            },
            methods: {
                isActive: function(e) {
                    return e === this.activeMatch
                },
                isCompleted: function(e) {
                    return e < this.activeMatch
                }
            }
        }
          , r = (n(1066),
        n(1))
          , s = Object(r.a)(o, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("BaseButton", {
                staticClass: "EventIndicator"
            }, [e.isLive ? n("div", {
                staticClass: "EventIndicator__header__label"
            }, [n("div", {
                staticClass: "EventIndicator__header__skew"
            }, [n("p", [e._v("live")])])]) : e._e(), e._v(" "), n("div", {
                staticClass: "EventIndicator__overflow-container"
            }, [n("div", {
                staticClass: "EventIndicator__skew"
            }, [n("div", {
                staticClass: "EventIndicator__content"
            }, [n("div", {
                staticClass: "EventIndicator__header"
            }, [n("div", {
                staticClass: "EventIndicator__header__text"
            }, [n("p", [n("span", [e._v(e._s(e.title)), n("span")])])])]), e._v(" "), n("div", {
                staticClass: "EventIndicator__body"
            }, e._l(e.$props.schedule, (function(t) {
                return n("div", {
                    key: t.day,
                    staticClass: "EventIndicator__day"
                }, e._l(t.matches, (function(t) {
                    return n("div", {
                        directives: [{
                            name: "class-mods",
                            rawName: "v-class-mods",
                            value: {
                                completed: e.isCompleted(t.id),
                                active: e.isActive(t.id),
                                semifinal: t.id === e.semiFinals,
                                final: t.id === e.totalNumberOfMatches
                            },
                            expression: "{\n                completed: isCompleted(m.id),\n                active: isActive(m.id),\n                semifinal: m.id === semiFinals,\n                final: m.id === totalNumberOfMatches,\n              }"
                        }],
                        key: t.id,
                        staticClass: "EventIndicator__day__match"
                    }, [t.id === e.totalNumberOfMatches ? n("IconUnion", {
                        attrs: {
                            state: e.isActive(t.id) ? "active" : !0 === t.completed ? "completed" : "default"
                        }
                    }) : e._e()], 1)
                }
                )), 0)
            }
            )), 0)])])])])
        }
        ), [], !1, null, "4d65b874", null);
        t.default = s.exports
    },
    1087: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0)
          , i = n(2)
          , o = n(307)
          , r = n(37)
          , s = a.default.extend({
            name: "LoginCard",
            components: {
                SignInButton: o.default,
                RectangleButton: r.default
            },
            props: {
                loggedIn: Boolean
            },
            data: function() {
                return {
                    showParticleAnimation: !1,
                    timeRemaining: 1,
                    buttonActive: !0,
                    pinFoamFinger: n(1068),
                    pinGlasses: n(1069),
                    jessie: n(1070)
                }
            },
            computed: {
                title: function() {
                    return this.loggedIn ? "login_reward_title" : "login_explainer_title"
                }
            },
            mounted: function() {},
            methods: {
                onSignIn: function() {
                    this.$accessor.modal.openLoginModal(!0)
                },
                onWelcome: function() {
                    this.$emit("on-welcome")
                },
                onEnter: function(e) {},
                onLeave: function(e) {
                    i.a.to(e, {
                        duration: .4,
                        opacity: 0,
                        ease: "Power2.easeInOut"
                    })
                },
                updateTimeRemaining: function(e) {
                    this.timeRemaining = e
                }
            }
        })
          , d = (n(1071),
        n(1))
          , c = Object(d.a)(s, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("transition", {
                attrs: {
                    appear: ""
                },
                on: {
                    appear: e.onEnter,
                    enter: e.onEnter,
                    leave: e.onLeave
                }
            }, [n("div", {
                staticClass: "LoginCard"
            }, [n("div", {
                staticClass: "LoginCard__container"
            }, [n("div", {
                staticClass: "LoginCard__background"
            }), e._v(" "), e.$props.loggedIn ? e._e() : n("div", {
                staticClass: "LoginCard__imageContainer"
            }, [n("img", {
                staticClass: "LoginCard__imageContainer__image",
                attrs: {
                    src: e.jessie
                }
            })]), e._v(" "), n("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        connected: e.$props.loggedIn
                    },
                    expression: "{\n          connected: $props.loggedIn,\n        }"
                }],
                ref: "loginLabel",
                staticClass: "LoginCard__text"
            }, [n("h3", [e._v(e._s(e.$t(e.title)))]), e._v(" "), e.$props.loggedIn ? n("h4", [e._v(e._s(e.$t("login_explainer_desc")))]) : e._e()]), e._v(" "), n("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        connected: e.$props.loggedIn
                    },
                    expression: "{\n          connected: $props.loggedIn,\n        }"
                }],
                staticClass: "LoginCard__decorationLeft"
            }, [n("img", {
                staticClass: "LoginCard__decorationLeft__image",
                attrs: {
                    src: e.pinFoamFinger
                }
            })]), e._v(" "), n("div", {
                staticClass: "LoginCard__decorationRight"
            }, [n("img", {
                staticClass: "LoginCard__decorationRight__image",
                attrs: {
                    src: e.pinGlasses
                }
            })])]), e._v(" "), n("div", {
                ref: "signInButton",
                staticClass: "LoginCard__buttonContainer"
            }, [e.$props.loggedIn ? n("RectangleButton", {
                class: "LoginCard__buttonContainer__button",
                attrs: {
                    color: "peach",
                    stretch: ""
                },
                on: {
                    "on-click": e.onWelcome
                }
            }, [e._v("\n        " + e._s(e.$t("login_reward_cta")) + "\n      ")]) : n("SignInButton", {
                staticClass: "LoginCard__buttonContainer__button",
                nativeOn: {
                    click: function(t) {
                        return e.onSignIn.apply(null, arguments)
                    }
                }
            })], 1)])])
        }
        ), [], !1, null, "0bccffe1", null);
        t.default = c.exports
    },
    1090: function(e, t, n) {
        "use strict";
        n(1058)
    },
    1091: function(e, t, n) {
        var a = n(7)((function(e) {
            return e[1]
        }
        ));
        a.push([e.i, ".FeedLogin[data-v-4ae7a467]{position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:flex-start;flex-direction:column;padding:15vh 24px 24px;pointer-events:auto;max-width:490px;margin:0 auto}.FeedLogin--fullScreen[data-v-4ae7a467]{justify-content:center;padding-top:24px;background-color:rgba(0,0,0,.5);max-width:unset}.FeedLogin__fullscreenCard[data-v-4ae7a467]{max-width:340px}@media(max-width:23.4275em){.FeedLogin[data-v-4ae7a467]{padding:100px 16px 16px}}", ""]),
        a.locals = {},
        e.exports = a
    },
    1097: function(e, t, n) {
        "use strict";
        n.r(t);
        n(58);
        var a = n(0)
          , i = n(1060)
          , o = a.default.extend({
            name: "CheerGraphical",
            components: {
                Cheer: i.default
            },
            props: {
                cheerLevel: {
                    type: Number,
                    default: function() {
                        return 1
                    }
                }
            },
            data: function() {
                return {}
            },
            methods: {}
        })
          , r = n(1)
          , s = Object(r.a)(o, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", [n("Cheer", {
                attrs: {
                    color: "blue",
                    "x-alignment": "left",
                    "cheer-level": e.$props.cheerLevel,
                    "has-cheer-button": !1
                }
            }), e._v(" "), n("Cheer", {
                attrs: {
                    color: "red",
                    "x-alignment": "right",
                    "cheer-level": e.$props.cheerLevel,
                    "has-cheer-button": !1
                }
            })], 1)
        }
        ), [], !1, null, null, null);
        t.default = s.exports;
        installComponents(s, {
            Cheer: n(1060).default
        })
    },
    1099: function(e, t, n) {
        "use strict";
        n.r(t);
        n(58);
        var a = n(0)
          , i = n(1086)
          , o = n(311)
          , r = n(307)
          , s = a.default.extend({
            name: "FeedHeader",
            components: {
                EventIndicator: i.default,
                UserProfile: o.default,
                SignInButton: r.default
            },
            props: {
                signedIn: Boolean,
                username: {
                    type: String,
                    required: !0
                },
                points: {
                    type: Number,
                    default: 0
                },
                nextReward: {
                    type: Object,
                    default: null
                },
                avatar: {
                    type: String,
                    required: !0
                },
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
                }
            },
            methods: {
                onSignIn: function() {
                    this.$emit("sign-in")
                },
                onUserProfile: function() {
                    this.$emit("user-profile")
                },
                onSchedule: function() {
                    this.$emit("schedule")
                }
            }
        })
          , d = (n(1120),
        n(1))
          , c = Object(d.a)(s, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "feedHeader"
            }, [n("div", {
                staticClass: "feedHeader__container"
            }, [n("EventIndicator", {
                attrs: {
                    day: e.$props.day,
                    schedule: e.$props.schedule,
                    "active-match": e.$props.activeMatch,
                    "is-live": !0,
                    "event-id": e.eventId
                },
                nativeOn: {
                    click: function(t) {
                        return e.onSchedule.apply(null, arguments)
                    }
                }
            }), e._v(" "), e.signedIn ? n("UserProfile", {
                attrs: {
                    username: e.$props.username,
                    points: e.$props.points,
                    "next-reward": e.$props.nextReward,
                    avatar: e.$props.avatar,
                    "active-match": e.activeMatch
                },
                nativeOn: {
                    click: function(t) {
                        return e.onUserProfile.apply(null, arguments)
                    }
                }
            }) : n("SignInButton", {
                staticClass: "PageHeader__SignInBtn",
                nativeOn: {
                    click: function(t) {
                        return e.onSignIn.apply(null, arguments)
                    }
                }
            })], 1)])
        }
        ), [], !1, null, "77990fe6", null);
        t.default = c.exports
    },
    1100: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0)
          , i = n(2)
          , o = n(1059)
          , r = a.default.extend({
            name: "FeedScrollButton",
            components: {
                RoundButton: o.default
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
                onFeedScrollButtonEnter: function(e, t) {
                    i.a.set(e, {
                        scale: 0
                    }),
                    i.a.to(e, {
                        duration: .4,
                        scale: 1,
                        ease: "elastic.out(1.2, 0.6)",
                        onComplete: function() {
                            t()
                        }
                    })
                },
                onFeedScrollButtonLeave: function(e, t) {
                    i.a.to(e, {
                        duration: .4,
                        scale: 0,
                        ease: "elastic.in(1.2, 0.6)",
                        onComplete: function() {
                            t()
                        }
                    })
                }
            }
        })
          , s = (n(1123),
        n(1))
          , d = Object(s.a)(r, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "FeedScrollButton"
            }, [a("transition", {
                attrs: {
                    appear: ""
                },
                on: {
                    appear: e.onFeedScrollButtonEnter,
                    enter: e.onFeedScrollButtonEnter,
                    leave: e.onFeedScrollButtonLeave
                }
            }, [e.$props.showFeedScrollButton ? a("RoundButton", {
                class: "FeedScrollButton__button",
                attrs: {
                    small: "",
                    color: "dark"
                },
                nativeOn: {
                    click: function(t) {
                        return e.onClick()
                    }
                }
            }, [a("div", {
                staticClass: "FeedScrollButton__button__container"
            }, [a("img", {
                staticClass: "FeedScrollButton__button__image",
                attrs: {
                    width: "28",
                    height: "17",
                    src: n(1122)
                }
            })])]) : e._e()], 1)], 1)
        }
        ), [], !1, null, "21d82020", null);
        t.default = d.exports
    },
    1101: function(e, t, n) {
        var a = n(1149);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(8).default)("a0051ade", a, !0, {
            sourceMap: !1
        })
    },
    1110: function(e, t, n) {
        "use strict";
        n(1076)
    },
    1111: function(e, t, n) {
        var a = n(7)
          , i = n(100)
          , o = n(1112)
          , r = n(1113)
          , s = n(1114)
          , d = n(1115)
          , c = a((function(e) {
            return e[1]
        }
        ))
          , l = i(o)
          , u = i(r)
          , p = i(s)
          , f = i(d);
        c.push([e.i, ".swiper-container[data-v-10cb6a89]{width:100vw;max-width:320px;overflow:visible;padding:30px 0}@media(min-width:46em){.swiper-container[data-v-10cb6a89]{max-width:600px}}.swiper-container .swiper-slide[data-v-10cb6a89]{opacity:.4}@media(min-width:46em){.swiper-container .swiper-slide[data-v-10cb6a89]{padding:40px}}.swiper-container .swiper-slide-active[data-v-10cb6a89]{opacity:1;padding:0}.swiper-container .swiper-button-next[data-v-10cb6a89],.swiper-container .swiper-button-prev[data-v-10cb6a89]{display:none;background-repeat:no-repeat;background-size:contain;position:absolute}.swiper-container .swiper-button-next[data-v-10cb6a89]:after,.swiper-container .swiper-button-prev[data-v-10cb6a89]:after{display:none}@media(min-width:46em){.swiper-container .swiper-button-next[data-v-10cb6a89],.swiper-container .swiper-button-prev[data-v-10cb6a89]{display:block}}.swiper-container .swiper-button-prev[data-v-10cb6a89]{background-image:url(" + l + ");left:-10%}@media(min-width:56.25em){.swiper-container .swiper-button-prev[data-v-10cb6a89]{left:-20%}}@media(min-width:71.25em){.swiper-container .swiper-button-prev[data-v-10cb6a89]{left:-40%}}@media(min-width:80em){.swiper-container .swiper-button-prev[data-v-10cb6a89]{left:-60%}}.swiper-container .swiper-button-prev[data-v-10cb6a89]:hover{opacity:.8}.swiper-container .swiper-button-prev[data-v-10cb6a89]:active,.swiper-container .swiper-button-prev[data-v-10cb6a89]:focus{transform:scale(.8)}.swiper-container .swiper-button-next[data-v-10cb6a89]{background-image:url(" + u + ");right:-10%}@media(min-width:56.25em){.swiper-container .swiper-button-next[data-v-10cb6a89]{right:-20%}}@media(min-width:71.25em){.swiper-container .swiper-button-next[data-v-10cb6a89]{right:-40%}}@media(min-width:80em){.swiper-container .swiper-button-next[data-v-10cb6a89]{right:-60%}}.swiper-container .swiper-button-next[data-v-10cb6a89]:hover{opacity:.8}.swiper-container .swiper-button-next[data-v-10cb6a89]:active,.swiper-container .swiper-button-next[data-v-10cb6a89]:focus{transform:scale(.8)}.swiper-container .swiper-button-disabled.swiper-button-next[data-v-10cb6a89]{background-image:url(" + p + ");opacity:1}.swiper-container .swiper-button-disabled.swiper-button-prev[data-v-10cb6a89]{background-image:url(" + f + ");opacity:1}.swiper-container .swiper-pagination.swiper-pagination-bullets[data-v-10cb6a89]{bottom:-20px}@media(min-width:46em){.swiper-container .swiper-pagination.swiper-pagination-bullets[data-v-10cb6a89]{display:none}}", ""]),
        c.locals = {},
        e.exports = c
    },
    1112: function(e, t, n) {
        e.exports = n.p + "img/ico_back.efc6d08.svg"
    },
    1113: function(e, t, n) {
        e.exports = n.p + "img/ico_forward.725bafb.svg"
    },
    1114: function(e, t, n) {
        e.exports = n.p + "img/ico_forward-peach.b9b5d9f.svg"
    },
    1115: function(e, t, n) {
        e.exports = n.p + "img/ico_back-peach.ab7f7ad.svg"
    },
    1120: function(e, t, n) {
        "use strict";
        n(1079)
    },
    1121: function(e, t, n) {
        var a = n(7)((function(e) {
            return e[1]
        }
        ));
        a.push([e.i, '.feedHeader[data-v-77990fe6]{position:relative;width:100%;z-index:10}.feedHeader[data-v-77990fe6]:before{position:absolute;content:"";background-color:#040404;left:0;right:0;height:50%}.feedHeader__container[data-v-77990fe6]{width:100%;max-width:480px;margin:0 auto;display:grid;grid-template-columns:50% 50%;grid-gap:3px;padding:0 8px}@media(min-width:56.25em){.feedHeader__container[data-v-77990fe6]{max-width:490px;padding-top:8px}}', ""]),
        a.locals = {},
        e.exports = a
    },
    1122: function(e, t, n) {
        e.exports = n.p + "img/ico_scroll.42c715f.svg"
    },
    1123: function(e, t, n) {
        "use strict";
        n(1080)
    },
    1124: function(e, t, n) {
        var a = n(7)((function(e) {
            return e[1]
        }
        ));
        a.push([e.i, ".FeedScrollButton[data-v-21d82020]{display:flex;flex-direction:row;align-items:flex-end}@supports(padding:0px){.FeedScrollButton[data-v-21d82020]{margin-bottom:calc(env(safe-area-inset-bottom) + 22px)}}.FeedScrollButton__button[data-v-21d82020]{display:flex;justify-content:center;align-items:center}.FeedScrollButton__button__image[data-v-21d82020]{width:32px;height:19px}.FeedScrollButton__button__container[data-v-21d82020]{display:flex;justify-content:center;align-items:center;width:33px;height:33px;padding-top:4px}", ""]),
        a.locals = {},
        e.exports = a
    },
    1125: function(e, t, n) {
        var a = n(1180);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(8).default)("1efb3188", a, !0, {
            sourceMap: !1
        })
    },
    1126: function(e, t, n) {
        var a = n(1182);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(8).default)("a62f2322", a, !0, {
            sourceMap: !1
        })
    },
    1144: function(e, t, n) {
        "use strict";
        n.r(t);
        n(58),
        n(48),
        n(10);
        var a = n(0)
          , i = n(1143)
          , o = a.default.extend({
            name: "EventsCarousel",
            components: {
                CarouselSlide: i.a
            },
            props: {
                events: {
                    type: Array,
                    required: !0
                },
                upcomingEventIdx: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    swiperRef: null,
                    currentSlide: this.upcomingEventIdx,
                    swiperOption: {
                        initialSlide: this.upcomingEventIdx,
                        centeredSlides: "true",
                        spaceBetween: 16,
                        breakpoints: {
                            430: {
                                spaceBetween: 16
                            },
                            736: {
                                spaceBetween: 50
                            },
                            1024: {
                                spaceBetween: 100
                            }
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            type: "bullets"
                        }
                    }
                }
            },
            computed: {
                upcomingEventId: function() {
                    var e = this
                      , t = this.events.find((function(t, n) {
                        return n === e.upcomingEventIdx
                    }
                    ));
                    return null == t ? void 0 : t.eventId
                }
            },
            mounted: function() {
                this.swiperRef = this.$refs.mySwiperRef
            },
            methods: {
                onSlide: function() {
                    if (this.swiperRef) {
                        var e = this.swiperRef.swiper;
                        if (!e)
                            return void (this.currentSlide = 0);
                        var t = e.realIndex;
                        this.currentSlide = t
                    }
                },
                nextSlideItem: function() {
                    this.swiperRef && this.swiperRef.swiper.slideTo(this.currentSlide)
                },
                prevSlideItem: function() {
                    this.swiperRef && this.swiperRef.swiper.slideTo(this.currentSlide)
                },
                openVodModal: function(e) {
                    this.$emit("openVodMOdal", e)
                }
            }
        })
          , r = (n(1110),
        n(1))
          , s = Object(r.a)(o, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", [n("div", {
                directives: [{
                    name: "swiper",
                    rawName: "v-swiper",
                    value: e.swiperOption,
                    expression: "swiperOption"
                }],
                ref: "mySwiperRef",
                on: {
                    slideChange: e.onSlide
                }
            }, [n("div", {
                staticClass: "swiper-wrapper"
            }, e._l(e.events, (function(t, a) {
                return n("div", {
                    key: a,
                    staticClass: "img-wrapper swiper-slide"
                }, [n("CarouselSlide", {
                    attrs: {
                        "event-info": t,
                        "active-slide": e.currentSlide === a,
                        "upcoming-event-id": e.upcomingEventId
                    },
                    on: {
                        openVodMOdal: e.openVodModal
                    }
                })], 1)
            }
            )), 0), e._v(" "), n("div", {
                staticClass: "swiper-pagination",
                attrs: {
                    slot: "pagination"
                },
                slot: "pagination"
            }), e._v(" "), n("div", {
                staticClass: "swiper-button-prev",
                attrs: {
                    slot: "button-prev"
                },
                on: {
                    click: e.prevSlideItem
                },
                slot: "button-prev"
            }), e._v(" "), n("div", {
                staticClass: "swiper-button-next",
                attrs: {
                    slot: "button-next"
                },
                on: {
                    click: e.nextSlideItem
                },
                slot: "button-next"
            })])])
        }
        ), [], !1, null, "10cb6a89", null);
        t.default = s.exports;
        installComponents(s, {
            CarouselSlide: n(1173).default
        })
    },
    1148: function(e, t, n) {
        "use strict";
        n(1101)
    },
    1149: function(e, t, n) {
        var a = n(7)((function(e) {
            return e[1]
        }
        ));
        a.push([e.i, ".Section[data-v-a92f741a]{--diagonal-size:20px;--section-padding:70px;--header-size:17px;--header-error-size:150px;padding:var(--section-padding) 0;position:relative;z-index:0}@media(min-width:56.25em){.Section[data-v-a92f741a]{--diagonal-size:30px;--section-padding:90px;--header-size:117px;--header-error-size:200px}}.Section--clipped[data-v-a92f741a]{margin-top:calc(var(--diagonal-size)*-1)}.Section--underHeader[data-v-a92f741a]{padding-top:calc(var(--section-padding) + var(--header-size))}.Section--error[data-v-a92f741a]{padding-top:calc(var(--section-padding) + var(--header-error-size))}.Section--extraClippedPadding[data-v-a92f741a]{padding-bottom:calc(var(--section-padding) + var(--diagonal-size))}.Section--ignoreTopPadding[data-v-a92f741a]{padding-top:0}.Section__Background[data-v-a92f741a]{z-index:-1;pointer-events:none;position:absolute;top:0;left:0;right:0;bottom:0}.Section__Background--clipped[data-v-a92f741a]{-webkit-clip-path:polygon(0 var(--diagonal-size),100% 0,100% 100%,0 100%);clip-path:polygon(0 var(--diagonal-size),100% 0,100% 100%,0 100%)}", ""]),
        a.locals = {},
        e.exports = a
    },
    1179: function(e, t, n) {
        "use strict";
        n(1125)
    },
    1180: function(e, t, n) {
        var a = n(7)((function(e) {
            return e[1]
        }
        ));
        a.push([e.i, ".Feed[data-v-de2f8102]{width:100%;height:100%;display:flex;flex-direction:column;position:relative;overflow:hidden}.Feed--showFeedLogin[data-v-de2f8102]{background-color:rgba(0,0,0,.5)}.Feed__overlay[data-v-de2f8102]{position:absolute;top:0;right:0;left:0;height:78px;z-index:1;background:linear-gradient(180deg,#ffc0bc,transparent 100%)}.Feed__overlay--showFeedLogin[data-v-de2f8102]{background:linear-gradient(180deg,rgba(0,0,0,.7),transparent)}.Feed__content[data-v-de2f8102]{overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;overflow-x:hidden;pointer-events:auto;width:100%;display:flex;flex-direction:column;padding:10px 16px;max-width:490px;margin:0 auto;height:100vh}.Feed__content[data-v-de2f8102]::-webkit-scrollbar{display:none}.Feed__content__fullscreenCard[data-v-de2f8102]{padding:10px 16px}.Feed__scrollButton[data-v-de2f8102]{display:flex;justify-content:center;align-items:center;position:fixed;right:0;bottom:16px;width:100%}.Feed__scrollButton__container[data-v-de2f8102]{position:absolute;bottom:0;left:0;width:100%;z-index:999}.Feed__scrollButton--right[data-v-de2f8102]{position:absolute}", ""]),
        a.locals = {},
        e.exports = a
    },
    1181: function(e, t, n) {
        "use strict";
        n(1126)
    },
    1182: function(e, t, n) {
        var a = n(7)((function(e) {
            return e[1]
        }
        ));
        a.push([e.i, ".rightOffset[data-v-5f666859]{left:-400px}.FullscreenFeed[data-v-5f666859]{position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0}.FullscreenFeed__content[data-v-5f666859]{display:flex;justify-content:center;align-items:center;pointer-events:auto;position:absolute;height:100%;left:50%;transform:translateX(-50%);width:340px}.FullscreenFeed__content>div[data-v-5f666859]{width:100%}", ""]),
        a.locals = {},
        e.exports = a
    },
    1208: function(e, t, n) {
        "use strict";
        n.r(t);
        n(58),
        n(33);
        var a = n(0)
          , i = n(1099)
          , o = n(1100)
          , r = n(230)
          , s = n(322)
          , d = n(323)
          , c = n(324)
          , l = n(312)
          , u = n(313)
          , p = n(315)
          , f = n(314)
          , h = n(316)
          , g = n(317)
          , v = n(1074)
          , m = a.default.extend({
            name: "Feed",
            components: {
                MultiChoiceQuestionCard: r.a,
                FeedHeader: i.default,
                FeedLogin: v.default,
                SliderQuestionCard: l.default,
                MatchPredictionQuestionCard: u.default,
                PostMatchCard: p.default,
                RewardCard: f.default,
                LootDropCard: h.default,
                DuringCard: s.default,
                PreSetCard: d.default,
                PostSetCard: c.default,
                OnboardingCard: g.default,
                FeedScrollButton: o.default
            },
            props: {
                cards: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                activeCard: {
                    type: Object,
                    default: function() {}
                },
                loggedIn: Boolean,
                username: {
                    type: String,
                    required: !0
                },
                points: {
                    type: Number,
                    default: 0
                },
                nextReward: {
                    type: Object,
                    default: null
                },
                avatar: {
                    type: String,
                    required: !0
                },
                hideFeedLogin: Boolean,
                onRightSide: Boolean
            },
            data: function() {
                return {
                    hasScrolled: !1,
                    entryDelay: null,
                    showFeedScrollButton: !1,
                    contentRef: null,
                    feedRef: null,
                    hasScrolledUp: !1
                }
            },
            computed: {
                isLiveInGameplay: function() {
                    return this.$accessor.global.isLiveInGameplay
                },
                showFeedLogin: function() {
                    return !this.hideFeedLogin
                },
                schedule: function() {
                    var e;
                    return null === (e = this.$accessor.bracket.currentEventSchedule) || void 0 === e ? void 0 : e.days
                },
                currentDay: function() {
                    return this.$accessor.global.day
                },
                activeMatch: function() {
                    return this.$accessor.global.activeMatch
                },
                eventId: function() {
                    return this.$accessor.global.eventId
                }
            },
            watch: {
                showFeedLogin: function() {
                    var e = this;
                    this.$nextTick((function() {
                        e.contentRef = e.$refs.content || null
                    }
                    ))
                },
                contentRef: function() {
                    this.contentRef && (this.contentRef.removeEventListener("scroll", this.onContentScroll),
                    this.contentRef.addEventListener("scroll", this.onContentScroll))
                },
                feedRef: function() {
                    this.feedRef && (this.feedRef.removeEventListener("scroll", this.onContentScroll),
                    this.feedRef.addEventListener("scroll", this.onContentScroll))
                },
                activeCard: function(e) {
                    var t = this;
                    if (null == e ? void 0 : e.key) {
                        var n = this.hasScrolled ? 200 : 800;
                        this.entryDelay && clearTimeout(this.entryDelay),
                        this.entryDelay = setTimeout((function() {
                            var n = t.$refs[null == e ? void 0 : e.key]
                              , a = (null == n ? void 0 : n.length) ? n[0] : null;
                            if (a) {
                                var i = a.$el
                                  , o = t.$refs.content
                                  , r = t.$refs.feedHeader;
                                if (!t.hasScrolled) {
                                    var s = t.$refs.feed.clientHeight - i.clientHeight - r.$el.clientHeight - 16;
                                    o.style.paddingBottom = "".concat(s, "px"),
                                    t.hasScrolled = !0
                                }
                                i.getBoundingClientRect().top > window.innerHeight ? t.showFeedScrollButton = !0 : t.onScrollDown(i)
                            }
                        }
                        ), n)
                    }
                }
            },
            mounted: function() {
                this.contentRef = this.$refs.content || null,
                this.feedRef = this.$refs.feed || null
            },
            beforeDestroy: function() {
                this.contentRef && this.contentRef.removeEventListener("scroll", this.onContentScroll),
                this.feedRef && this.feedRef.removeEventListener("scroll", this.onContentScroll)
            },
            methods: {
                onContentScroll: function() {
                    this.contentRef && (this.getShowFeedScrollbutton(this.contentRef) || (this.showFeedScrollButton = !1))
                },
                getShowFeedScrollbutton: function(e) {
                    return e.scrollHeight - e.scrollTop - e.clientHeight > e.clientHeight
                },
                onScrollDown: function(e) {
                    var t = this;
                    this.$nextTick((function() {
                        var n = e;
                        if (!e && t.activeCard) {
                            var a = t.$refs[t.activeCard.key]
                              , i = (null == a ? void 0 : a.length) ? a[0] : null;
                            i && (n = i.$el)
                        }
                        if (n) {
                            var o = t.$refs.content
                              , r = t.$refs.feedHeader
                              , s = n.offsetTop - r.$el.clientHeight - 16;
                            null == o || o.scroll({
                                top: s,
                                left: 0,
                                behavior: "smooth"
                            })
                        }
                    }
                    ))
                },
                dismissCard: function(e) {
                    this.$accessor.feed.dismissCard(e)
                }
            }
        })
          , _ = (n(1179),
        n(1))
          , b = Object(_.a)(m, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                ref: "feed",
                staticClass: "Feed",
                class: {
                    "Feed--purple-gradient": !e.isLiveInGameplay,
                    "Feed--purple-gradient-dark": e.isLiveInGameplay,
                    "Feed--showFeedLogin": e.showFeedLogin
                }
            }, [n("div", {
                staticClass: "Feed__overlay",
                class: {
                    "Feed__overlay--showFeedLogin": e.showFeedLogin
                }
            }), e._v(" "), e.showFeedLogin ? n("FeedLogin", {
                attrs: {
                    "logged-in": e.$props.loggedIn
                },
                on: {
                    "on-welcome": function(t) {
                        return e.$emit("on-welcome")
                    }
                }
            }) : e._e(), e._v(" "), n("FeedHeader", {
                ref: "feedHeader",
                attrs: {
                    "signed-in": e.loggedIn,
                    username: e.username,
                    points: e.points,
                    "next-reward": e.nextReward,
                    avatar: e.avatar,
                    day: e.currentDay,
                    schedule: e.schedule,
                    "active-match": e.activeMatch,
                    "event-id": e.eventId
                },
                on: {
                    "sign-in": function(t) {
                        return e.$emit("sign-in")
                    },
                    "user-profile": function(t) {
                        return e.$emit("user-profile")
                    },
                    schedule: function(t) {
                        return e.$emit("schedule")
                    }
                }
            }), e._v(" "), e.showFeedLogin ? e._e() : n("div", {
                ref: "content",
                staticClass: "Feed__content"
            }, [e._l(e.cards, (function(t) {
                return n(t.name, e._b({
                    key: t.key,
                    ref: t.key,
                    refInFor: !0,
                    tag: "component",
                    attrs: {
                        active: !!e.activeCard && t.key === e.activeCard.key
                    },
                    on: {
                        "close-card": function() {
                            return e.dismissCard(t)
                        }
                    }
                }, "component", t.props, !1))
            }
            )), e._v(" "), n("div", {
                staticClass: "Feed__scrollButton__container"
            }, [n("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        right: e.onRightSide
                    },
                    expression: "{ right: onRightSide }"
                }],
                staticClass: "Feed__scrollButton"
            }, [n("FeedScrollButton", {
                attrs: {
                    "show-feed-scroll-button": e.showFeedScrollButton
                },
                on: {
                    "scroll-down": e.onScrollDown
                }
            })], 1)])], 2)], 1)
        }
        ), [], !1, null, "de2f8102", null);
        t.default = b.exports;
        installComponents(b, {
            FeedLogin: n(1074).default,
            FeedHeader: n(1099).default,
            FeedScrollButton: n(1100).default
        })
    },
    1209: function(e, t, n) {
        "use strict";
        n.r(t);
        n(30),
        n(10);
        var a = n(0)
          , i = n(1060)
          , o = a.default.extend({
            name: "CheerContainer",
            components: {
                Cheer: i.default
            },
            props: {},
            data: function() {
                return {
                    firstCheer: -1
                }
            },
            computed: {
                blueCheerLevel: function() {
                    return this.$accessor.cheer.cheerLevel.blue
                },
                redCheerLevel: function() {
                    return this.$accessor.cheer.cheerLevel.red
                },
                isLiveInGameplay: function() {
                    return this.$accessor.global.isLiveInGameplay
                },
                getNumberOfUnlockedRewards: function() {
                    var e;
                    return null === (e = this.$accessor.rewards.currentRewardTrack) || void 0 === e ? void 0 : e.filter((function(e) {
                        return !1 === e.locked
                    }
                    )).length
                },
                getMatchPrediction: function() {
                    return this.$accessor.bracket.activeMatchPrediction()
                }
            },
            methods: {
                sendCheerSocketMessage: function(e, t, n) {
                    -1 === this.firstCheer && (this.firstCheer = n),
                    this.$accessor.cheer.sendCheer({
                        cheerColor: e,
                        amount: t
                    })
                },
                showCheerButton: function(e) {
                    var t = this.getMatchPrediction;
                    return null != t ? t === e : -1 === this.firstCheer || this.firstCheer === e
                }
            }
        })
          , r = n(1)
          , s = Object(r.a)(o, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return e.isLiveInGameplay ? n("div", [n("Cheer", {
                attrs: {
                    color: "blue",
                    "x-alignment": "left",
                    "cheer-level": e.blueCheerLevel,
                    "has-cheer-button": e.showCheerButton(0),
                    "number-of-unlocked-rewards": e.getNumberOfUnlockedRewards
                },
                on: {
                    "on-cheer": function(t, n) {
                        return e.sendCheerSocketMessage(t, n, 0)
                    }
                }
            }), e._v(" "), n("Cheer", {
                attrs: {
                    color: "red",
                    "x-alignment": "right",
                    "cheer-level": e.redCheerLevel,
                    "has-cheer-button": e.showCheerButton(1),
                    "number-of-unlocked-rewards": e.getNumberOfUnlockedRewards
                },
                on: {
                    "on-cheer": function(t, n) {
                        return e.sendCheerSocketMessage(t, n, 1)
                    }
                }
            })], 1) : e._e()
        }
        ), [], !1, null, null, null);
        t.default = s.exports;
        installComponents(s, {
            Cheer: n(1060).default
        })
    },
    1214: function(e, t, n) {
        var a = n(1267);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(8).default)("4d437012", a, !0, {
            sourceMap: !1
        })
    },
    1215: function(e, t, n) {
        var a = n(1269);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(8).default)("f8f634f2", a, !0, {
            sourceMap: !1
        })
    },
    1219: function(e, t, n) {
        var a = n(1308);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(8).default)("efd003de", a, !0, {
            sourceMap: !1
        })
    },
    1220: function(e, t, n) {
        var a = n(1310);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(8).default)("3fb748a0", a, !0, {
            sourceMap: !1
        })
    },
    1234: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0)
          , i = n(86)
          , o = n(137)
          , r = a.default.extend({
            name: "Section",
            components: {
                Background: i.default,
                Block: o.default
            },
            props: {
                backgroundColor: {
                    type: String,
                    default: "yellow"
                },
                graphicColor: {
                    type: String,
                    default: "dark"
                },
                graphic: {
                    type: String,
                    default: "circle"
                },
                spotlight: Boolean,
                dotsTopLeft: Boolean,
                dotsBottomRight: Boolean,
                clipped: Boolean,
                underHeader: Boolean,
                extraClippedPadding: Boolean,
                ignoreTopPadding: Boolean,
                radialDark: Boolean,
                showError: Boolean,
                explosion: Boolean
            }
        })
          , s = (n(1148),
        n(1))
          , d = Object(s.a)(r, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("section", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        clipped: e.$props.clipped,
                        underHeader: e.$props.underHeader,
                        error: e.$props.showError,
                        extraClippedPadding: e.$props.extraClippedPadding,
                        ignoreTopPadding: e.$props.ignoreTopPadding
                    },
                    expression: "{\n    clipped: $props.clipped,\n    underHeader: $props.underHeader,\n    error: $props.showError,\n    extraClippedPadding: $props.extraClippedPadding,\n    ignoreTopPadding: $props.ignoreTopPadding\n  }"
                }],
                staticClass: "Section"
            }, [n("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        clipped: e.$props.clipped
                    },
                    expression: "{ clipped: $props.clipped }"
                }],
                staticClass: "Section__Background"
            }, [n("Background", {
                attrs: {
                    color: e.$props.backgroundColor,
                    "graphic-color": e.$props.graphicColor,
                    graphic: e.$props.graphic,
                    spotlight: e.$props.spotlight,
                    "dots-top-left": e.dotsTopLeft,
                    "dots-bottom-right": e.dotsBottomRight,
                    "radial-dark": e.radialDark,
                    explosion: e.explosion
                }
            })], 1), e._v(" "), n("Block", [e._t("default")], 2)], 1)
        }
        ), [], !1, null, "a92f741a", null);
        t.default = d.exports
    },
    1241: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(230)
          , i = n(312)
          , o = n(313)
          , r = n(315)
          , s = n(314)
          , d = n(316)
          , c = n(317)
          , l = {
            name: "Feed",
            components: {
                MultiChoiceQuestionCard: a.a,
                SliderQuestionCard: i.default,
                MatchPredictionQuestionCard: o.default,
                PostMatchCard: r.default,
                RewardCard: s.default,
                LootDropCard: d.default,
                OnboardingCard: c.default
            },
            props: {
                card: {
                    type: Object,
                    default: function() {}
                },
                loggedIn: Boolean,
                loginDismissed: Boolean,
                hideFeedLogin: Boolean
            },
            data: function() {
                return {}
            },
            computed: {
                isLiveInGameplay: function() {
                    return this.$accessor.global.isLiveInGameplay
                },
                showFeedLogin: function() {
                    return !this.hideFeedLogin && !this.loginDismissed
                }
            },
            methods: {
                dismissCard: function(e) {
                    this.$accessor.feed.dismissCard(e)
                },
                dismissLogin: function() {
                    this.$emit("on-dismiss-overlay")
                }
            }
        }
          , u = (n(1181),
        n(1))
          , p = Object(u.a)(l, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "FullscreenFeed"
            }, [e.showFeedLogin ? n("FeedLogin", {
                attrs: {
                    "is-fullscreen": "",
                    "logged-in": e.$props.loggedIn
                },
                on: {
                    "on-dismiss-login": e.dismissLogin,
                    "on-welcome": function(t) {
                        return e.$emit("on-welcome")
                    }
                }
            }) : e._e(), e._v(" "), e.card ? n("div", {
                staticClass: "FullscreenFeed__content"
            }, [n(e.card.name, e._b({
                key: e.card.key,
                tag: "component",
                attrs: {
                    "is-fullscreen": "",
                    active: ""
                },
                on: {
                    "close-card": function() {
                        return e.dismissCard(e.card)
                    }
                }
            }, "component", e.card.props, !1))], 1) : e._e()], 1)
        }
        ), [], !1, null, "5f666859", null);
        t.default = p.exports;
        installComponents(p, {
            FeedLogin: n(1074).default
        })
    },
    1260: function(e, t, n) {
        e.exports = n.p + "img/pins.82a6cfd.avif"
    },
    1261: function(e, t, n) {
        e.exports = n.p + "img/pins.75355fa.webp"
    },
    1262: function(e, t, n) {
        e.exports = n.p + "img/pins.3911986.png"
    },
    1263: function(e, t, n) {
        e.exports = n.p + "img/rewardstrack.aa2cbb7.avif"
    },
    1264: function(e, t, n) {
        e.exports = n.p + "img/rewardstrack.bded086.webp"
    },
    1265: function(e, t, n) {
        e.exports = n.p + "img/rewardstrack.b28e1aa.png"
    },
    1266: function(e, t, n) {
        "use strict";
        n(1214)
    },
    1267: function(e, t, n) {
        var a = n(7)((function(e) {
            return e[1]
        }
        ));
        a.push([e.i, '.rewards[data-v-17c6b05a]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;width:100%;position:relative}.rewards__button[data-v-17c6b05a]{margin:0 auto}.rewards__textContainer[data-v-17c6b05a]{width:100%;display:flex;flex-direction:column}@media(min-width:56.25em){.rewards__textContainer[data-v-17c6b05a]{align-self:flex-end;margin-right:32px;width:50%}}.rewards__textContainer__title[data-v-17c6b05a]{text-shadow:-2px -2px 0 #040404,0 -2px 0 #040404,2px -2px 0 #040404,2px 0 0 #040404,2px 2px 0 #040404,0 2px 0 #040404,-2px 2px 0 #040404,-2px 0 0 #040404,0 3.5px 0 #040404,-2px 3.5px 0 #040404,2px 3.5px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;text-transform:uppercase;font-size:34px}.rewards__textContainer__title[data-v-17c6b05a]:lang(jp),.rewards__textContainer__title[data-v-17c6b05a]:lang(kr),.rewards__textContainer__title[data-v-17c6b05a]:lang(pl),.rewards__textContainer__title[data-v-17c6b05a]:lang(ru),.rewards__textContainer__title[data-v-17c6b05a]:lang(tr),.rewards__textContainer__title[data-v-17c6b05a]:lang(zh_sc),.rewards__textContainer__title[data-v-17c6b05a]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}.rewards__carousel[data-v-17c6b05a]{width:100%;max-width:654px;margin-top:30px;margin-bottom:30px;margin-left:-40px}@media(min-width:56.25em){.rewards__carousel[data-v-17c6b05a]{align-self:flex-start}}.rewards__carousel img[data-v-17c6b05a]{width:100%;height:auto}.rewards__rewardsCharacter[data-v-17c6b05a]{width:375px;margin-top:-120px;margin-bottom:16px}.rewards__rewardsCharacter img[data-v-17c6b05a]{width:100%;height:auto}@media(min-width:46em){.rewards__rewardsCharacter[data-v-17c6b05a]{width:500px}}@media(min-width:56.25em){.rewards__rewardsCharacter[data-v-17c6b05a]{position:absolute;width:500px;right:50%;transform:translateY(20%)}}', ""]),
        a.locals = {},
        e.exports = a
    },
    1268: function(e, t, n) {
        "use strict";
        n(1215)
    },
    1269: function(e, t, n) {
        var a = n(7)((function(e) {
            return e[1]
        }
        ));
        a.push([e.i, '.prediction[data-v-af9fb9ae]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding-top:50px;padding-bottom:50px}.prediction__title[data-v-af9fb9ae]{text-shadow:-2px -2px 0 #040404,0 -2px 0 #040404,2px -2px 0 #040404,2px 0 0 #040404,2px 2px 0 #040404,0 2px 0 #040404,-2px 2px 0 #040404,-2px 0 0 #040404,0 3.5px 0 #040404,-2px 3.5px 0 #040404,2px 3.5px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;text-transform:uppercase;font-size:34px}.prediction__title[data-v-af9fb9ae]:lang(jp),.prediction__title[data-v-af9fb9ae]:lang(kr),.prediction__title[data-v-af9fb9ae]:lang(pl),.prediction__title[data-v-af9fb9ae]:lang(ru),.prediction__title[data-v-af9fb9ae]:lang(tr),.prediction__title[data-v-af9fb9ae]:lang(zh_sc),.prediction__title[data-v-af9fb9ae]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}.prediction__copy[data-v-af9fb9ae]{text-shadow:-1.5px -1.5px 0 #040404,0 -1.5px 0 #040404,1.5px -1.5px 0 #040404,1.5px 0 0 #040404,1.5px 1.5px 0 #040404,0 1.5px 0 #040404,-1.5px 1.5px 0 #040404,-1.5px 0 0 #040404,0 3px 0 #040404,-1.5px 3px 0 #040404,1.5px 3px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;text-transform:uppercase;font-size:16px;margin-top:20px}.prediction__copy[data-v-af9fb9ae]:lang(jp),.prediction__copy[data-v-af9fb9ae]:lang(kr),.prediction__copy[data-v-af9fb9ae]:lang(pl),.prediction__copy[data-v-af9fb9ae]:lang(ru),.prediction__copy[data-v-af9fb9ae]:lang(tr),.prediction__copy[data-v-af9fb9ae]:lang(zh_sc),.prediction__copy[data-v-af9fb9ae]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}.prediction__view[data-v-af9fb9ae]{margin-top:24px;width:100%;max-width:416px;height:159px;position:relative}@media(min-width:56.25em){.prediction__view[data-v-af9fb9ae]{margin-top:40px}}.prediction__view__locked[data-v-af9fb9ae]{position:absolute;z-index:2;top:50%;left:50%;transform:translate(-50%,-50%)}.prediction__view__locked img[data-v-af9fb9ae]{height:40px}.prediction__view__match[data-v-af9fb9ae]{height:100%;position:relative}.prediction__button[data-v-af9fb9ae]{transform:translateY(-50%)}', ""]),
        a.locals = {},
        e.exports = a
    },
    1307: function(e, t, n) {
        "use strict";
        n(1219)
    },
    1308: function(e, t, n) {
        var a = n(7)((function(e) {
            return e[1]
        }
        ));
        a.push([e.i, ".modalContainer[data-v-10ae2828]{display:flex;flex-direction:column;margin-top:24px;width:100%}.modalContainer__buttonWrapper[data-v-10ae2828]{width:100%;position:relative;margin-bottom:8px;padding:0 10px}.modalContainer__buttonWrapper__button[data-v-10ae2828]{width:100%}[data-v-10ae2828] .baseModal{position:absolute;height:100vh}.PreTournament[data-v-10ae2828]{position:relative}.PreTournament__Countdown[data-v-10ae2828]{width:100vw;overflow:hidden}.PreTournament__Rewards[data-v-10ae2828]{position:relative}@media(min-width:56.25em){.PreTournament__Prediction[data-v-10ae2828]  .Section{padding-top:90px}}@media(max-width:56.24em){.PreTournament__Prediction[data-v-10ae2828]  .Background__Graphic{display:none}}", ""]),
        a.locals = {},
        e.exports = a
    },
    1309: function(e, t, n) {
        "use strict";
        n(1220)
    },
    1310: function(e, t, n) {
        var a = n(7)((function(e) {
            return e[1]
        }
        ));
        a.push([e.i, ".Tournament[data-v-ee23b904]{overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;position:relative;display:flex;flex-direction:column;height:calc(100vh + 1px)}.Tournament[data-v-ee23b904]::-webkit-scrollbar{display:none}@media(orientation:landscape){.Tournament[data-v-ee23b904]{flex-direction:row}}.Tournament__video[data-v-ee23b904]{position:relative;width:100%}@media(orientation:landscape){.Tournament__video[data-v-ee23b904]{height:100%;display:flex;flex-direction:column;justify-content:center}}.Tournament__UserProfilePeek[data-v-ee23b904]{position:absolute;top:8px;right:8px;transform:translateY(-100vh)}.Tournament__FullscreenFeed[data-v-ee23b904]{position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;overflow:hidden;pointer-events:none}.Tournament__Feed[data-v-ee23b904]{overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;position:relative;height:100%}.Tournament__Feed[data-v-ee23b904]::-webkit-scrollbar{display:none}@media(orientation:landscape){.Tournament__Feed[data-v-ee23b904]{display:none}}.Tournament__Feed--right[data-v-ee23b904]{display:block;border-left:2px solid #000;min-width:400px}.Tournament__cheerContainer[data-v-ee23b904]{position:absolute;z-index:999}.Tournament__cheerContainer[data-v-ee23b904],.Tournament__cheerContainer__inner[data-v-ee23b904]{width:100%;height:100%;top:0;bottom:0;left:0;right:0;pointer-events:none}.Tournament__cheerContainer__inner[data-v-ee23b904]{position:absolute;position:fixed}.Tournament__cheerContainer__inner--smaller[data-v-ee23b904]{width:calc(100% - 400px)}.Tournament__feedToggle[data-v-ee23b904]{-webkit-transform:skew(-5deg);-moz-transform:skew(-5deg);-o-transform:skew(-5deg);box-shadow:0 2px #040404;border-radius:5px;border:2px solid #040404;cursor:pointer;position:absolute;top:0;right:0;display:none;background-color:#c7b8f3;padding:10px 20px;margin-right:-5px}.Tournament__feedToggle--visible[data-v-ee23b904]{display:block}.Tournament__feedToggle--toggled[data-v-ee23b904]{right:400px}.Tournament .rightOffset[data-v-ee23b904]{left:-400px}", ""]),
        a.locals = {},
        e.exports = a
    },
    1388: function(e, t, n) {
        "use strict";
        n.r(t);
        n(23);
        var a = n(0)
          , i = n(136)
          , o = (n(10),
        n(43),
        n(30),
        n(32),
        n(184),
        n(39),
        n(47),
        n(1234))
          , r = n(1144)
          , s = (n(59),
        n(37))
          , d = a.default.extend({
            name: "RewardsSection",
            components: {
                RectangleButton: s.default
            },
            props: {
                isAfterTournament: {
                    type: Boolean,
                    default: !1
                },
                showError: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                buttonTitle: function() {
                    return this.isAfterTournament ? this.$t("post_reward_profile").toString() : this.$t("pre_reward_get_started").toString()
                }
            },
            methods: {
                showRewards: function() {
                    this.$emit("show-rewards")
                }
            }
        })
          , c = (n(1266),
        n(1))
          , l = Object(c.a)(d, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "rewards"
            }, [a("picture", {
                staticClass: "rewards__rewardsCharacter"
            }, [a("source", {
                attrs: {
                    type: "image/avif",
                    srcset: n(1260)
                }
            }), e._v(" "), a("source", {
                attrs: {
                    type: "image/webp",
                    srcset: n(1261)
                }
            }), e._v(" "), a("img", {
                attrs: {
                    src: n(1262),
                    alt: "pins",
                    width: "626",
                    height: "650",
                    decoding: "async",
                    loading: "lazy"
                }
            })]), e._v(" "), a("div", {
                staticClass: "rewards__textContainer"
            }, [a("h2", {
                staticClass: "rewards__textContainer__title"
            }, [e._v(e._s(e.$t("pre_reward_title")))]), e._v(" "), a("picture", {
                staticClass: "rewards__carousel"
            }, [a("source", {
                attrs: {
                    type: "image/avif",
                    srcset: n(1263)
                }
            }), e._v(" "), a("source", {
                attrs: {
                    type: "image/webp",
                    srcset: n(1264)
                }
            }), e._v(" "), a("img", {
                attrs: {
                    src: n(1265),
                    alt: "Jessie",
                    width: "626",
                    height: "650",
                    decoding: "async",
                    loading: "lazy"
                }
            })]), e._v(" "), e.showError ? e._e() : a("RectangleButton", {
                staticClass: "rewards__button",
                attrs: {
                    color: "peach",
                    slanted: ""
                },
                nativeOn: {
                    click: function(t) {
                        return e.showRewards.apply(null, arguments)
                    }
                }
            }, [e._v("\n      " + e._s(e.buttonTitle) + "\n    ")])], 1)])
        }
        ), [], !1, null, "17c6b05a", null)
          , u = l.exports
          , p = (n(28),
        n(25),
        n(35),
        n(24),
        n(36),
        n(11))
          , f = (n(58),
        n(1077));
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    Object(p.a)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var v = a.default.extend({
            name: "PredictionSection",
            components: {
                RectangleButton: s.default,
                MatchPrediction: f.a
            },
            props: {
                day: {
                    type: Number,
                    required: !0
                },
                showError: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                match: function() {
                    var e, t = null === (e = this.$accessor.bracket.bracketDay(this.day)) || void 0 === e ? void 0 : e.matches;
                    if (t && t[0] && 2 === t[0].teams.length)
                        return g(g({}, t[0]), {}, {
                            prediction: void 0,
                            completed: !1
                        })
                },
                predictionTItle: function() {
                    return this.showError ? this.$t("gen_predictionsclosed_title") : this.$t("pre_predict_title", {
                        dayNr: this.day
                    })
                }
            },
            methods: {
                showPredictions: function() {
                    this.$emit("show-predictions")
                }
            }
        })
          , m = (n(1268),
        Object(c.a)(v, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "prediction"
            }, [n("h2", {
                staticClass: "prediction__title"
            }, [e._v(e._s(e.predictionTItle))]), e._v(" "), e.showError ? n("p", {
                staticClass: "prediction__copy"
            }, [e._v(e._s(e.$t("gen_predictionsclosed_description")))]) : e._e(), e._v(" "), e.showError ? e._e() : n("div", {
                staticClass: "prediction__view"
            }, [e.match ? n("MatchPrediction", {
                staticClass: "prediction__view__match",
                attrs: {
                    "is-big": !0,
                    "is-rounded": !0,
                    match: e.match,
                    "is-interactable": !1,
                    "is-on-landing-page": !0,
                    "hide-logo": e.showError
                }
            }) : e._e()], 1), e._v(" "), e.showError ? e._e() : n("RectangleButton", {
                staticClass: "prediction__button",
                attrs: {
                    color: "peach",
                    slanted: "",
                    inactive: e.showError
                },
                nativeOn: {
                    click: function(t) {
                        return e.showPredictions.apply(null, arguments)
                    }
                }
            }, [e._v("\n    " + e._s(e.$t("pre_predict_action")) + "\n  ")])], 1)
        }
        ), [], !1, null, "af9fb9ae", null))
          , _ = m.exports
          , b = n(1097)
          , x = n(308)
          , w = n(1212)
          , y = n(95)
          , C = n(138)
          , $ = a.default.extend({
            name: "PreTournament",
            components: {
                Section: o.default,
                EventsCarousel: r.default,
                RewardsSection: u,
                CheerGraphical: b.default,
                PredictionSection: _,
                BasicModal: C.default,
                RectangleButton: s.default
            },
            mixins: [x.a],
            props: {
                emptyEventId: {
                    type: Boolean,
                    default: !1
                },
                isResetting: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    isVodModalOpen: !1,
                    availableStreams: []
                }
            },
            computed: {
                events: function() {
                    return this.$accessor.global.eventsInfo
                },
                activeMatch: function() {
                    return this.$accessor.global.activeMatch
                },
                currentEventId: function() {
                    return this.$accessor.global.eventId
                },
                isFinished: function() {
                    var e;
                    return (null === (e = this.$accessor.global.currentEventInfo) || void 0 === e ? void 0 : e.status) === w.a.Finished
                },
                eventDays: function() {
                    var e = this.events.reduce((function(e, t) {
                        var n = t.dayStartTimes.map((function(e, n) {
                            var a = n + 1
                              , i = t.streams.filter((function(e) {
                                return e.day === a
                            }
                            ));
                            return {
                                eventId: t.eventId,
                                status: t.status,
                                name: t.name,
                                type: t.type,
                                day: a,
                                dayStartTime: e,
                                region: t.region,
                                teaserVideo: t.teaserVideo,
                                previewVideo: t.previewVideo,
                                streams: i
                            }
                        }
                        ));
                        return e.concat(n)
                    }
                    ), []);
                    return e
                },
                upcomingEventIdx: function() {
                    var e = this.eventDays.findIndex((function(e) {
                        return e.status !== w.a.Finished && e.status !== w.a.Reset && e.status !== w.a.Resetting
                    }
                    ));
                    return -1 !== e ? e : 0
                },
                day: function() {
                    return this.$accessor.global.day
                },
                loggedIn: function() {
                    return this.$accessor.auth.loggedIn
                },
                points: function() {
                    return this.$accessor.user.points
                },
                username: function() {
                    return this.$accessor.user.name
                },
                avatar: function() {
                    return this.$accessor.user.avatar
                },
                nextReward: function() {
                    return this.$accessor.rewards.nextReward
                },
                isHomeRoute: function() {
                    return !this.$route.path.includes("profile") && !this.$route.path.includes("schedule")
                },
                showPredictionSection: function() {
                    var e, t = null === (e = this.$accessor.bracket.bracketDay(this.day)) || void 0 === e ? void 0 : e.matches;
                    return !!(t && t[0] && t[0].teams.length >= 2)
                },
                isBeforeTournament: function() {
                    return this.$accessor.global.isBeforeTournament
                },
                isAfterTournament: function() {
                    return this.$accessor.global.isAfterTournament
                }
            },
            methods: {
                getFlag: y.a,
                openLoginModal: function(e) {
                    this.$accessor.modal.openLoginModal(e)
                },
                navigate: function(e) {
                    this.$router.push({
                        path: e
                    })
                },
                redirect: function(e) {
                    var t = this.localePath({
                        path: e
                    });
                    return this.loggedIn ? (this.gaEvent("Redirect", t),
                    this.navigate(t)) : (this.openLoginModal(!0),
                    this.$accessor.modal.setRedirectURL(e))
                },
                getStreamVODoptions: function(e) {
                    var t = this.$i18n.locale;
                    return this.$accessor.global.eventVODStreams(e, t)
                },
                closeModal: function() {
                    this.isVodModalOpen = !1
                },
                openVodModal: function(e) {
                    this.availableStreams = this.getStreamVODoptions(e),
                    this.isVodModalOpen = !0
                }
            }
        })
          , L = (n(1307),
        Object(c.a)($, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "PreTournament"
            }, [n("BasicModal", {
                attrs: {
                    opened: e.isVodModalOpen,
                    title: e.$t("lang2_picker_title"),
                    body: e.$t("lang2_picker_desc")
                },
                on: {
                    close: e.closeModal
                }
            }, [n("div", {
                staticClass: "modalContainer"
            }, e._l(e.availableStreams, (function(t) {
                return n("div", {
                    key: t.key,
                    staticClass: "modalContainer__buttonWrapper"
                }, [n("RectangleButton", {
                    staticClass: "modalContainer__buttonWrapper__button",
                    attrs: {
                        color: "dark",
                        stretch: "",
                        target: "_blank",
                        to: t.vodId
                    }
                }, [e._v("\n          " + e._s(e.getFlag(t.locale)) + " " + e._s(t.title) + "\n        ")])], 1)
            }
            )), 0)]), e._v(" "), n("div", {
                staticClass: "PreTournament__Countdown"
            }, [n("Section", {
                attrs: {
                    explosion: "",
                    graphic: "",
                    "show-error": e.isResetting
                }
            }, [n("EventsCarousel", {
                attrs: {
                    events: e.eventDays,
                    "upcoming-event-idx": e.upcomingEventIdx
                },
                on: {
                    openVodMOdal: e.openVodModal
                }
            })], 1)], 1), e._v(" "), n("div", {
                staticClass: "PreTournament__Rewards"
            }, [n("Section", {
                attrs: {
                    "background-color": "yellow",
                    graphic: "burst",
                    "graphic-color": "yellow",
                    clipped: "",
                    "extra-clipped-padding": ""
                }
            }, [n("RewardsSection", {
                attrs: {
                    "show-error": e.isResetting
                },
                on: {
                    "show-rewards": function(t) {
                        return e.redirect("/profile")
                    }
                }
            })], 1)], 1), e._v(" "), n("div", {
                staticClass: "PreTournament__Prediction"
            }, [n("Section", {
                attrs: {
                    "background-color": "gradient-blue-red",
                    graphic: "circle",
                    "graphic-color": "dark",
                    clipped: "",
                    "ignore-top-padding": "",
                    "dots-top-left": "",
                    "dots-bottom-right": ""
                }
            }, [n("PredictionSection", {
                attrs: {
                    day: e.day,
                    "show-error": e.emptyEventId || e.isResetting || e.isFinished || void 0 === e.activeMatch
                },
                on: {
                    "show-predictions": function(t) {
                        return e.redirect("/predictions/" + e.currentEventId + "/day_" + e.day)
                    }
                }
            }), e._v(" "), e.isHomeRoute ? n("CheerGraphical") : e._e()], 1)], 1)], 1)
        }
        ), [], !1, null, "10ae2828", null))
          , S = L.exports;
        installComponents(L, {
            CheerGraphical: n(1097).default
        });
        n(33);
        var k = n(2)
          , I = n(60)
          , F = n(86)
          , B = n(311)
          , E = n(307)
          , P = n(1096)
          , O = n(1208)
          , M = n(1241)
          , R = n(1209)
          , T = n(179);
        function j(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? j(Object(n), !0).forEach((function(t) {
                    Object(p.a)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var D = a.default.extend({
            name: "Tournament",
            components: {
                Video: P.default,
                Feed: O.default,
                FullscreenFeed: M.default,
                Background: F.default,
                UserProfile: B.default,
                CheerContainer: R.default,
                SignInButton: E.default,
                BasicModal: C.default
            },
            mixins: [x.a],
            data: function() {
                return {
                    feedToggled: !1,
                    preSelectedStream: !1,
                    hideFullscreenUserProfileHandle: null,
                    fullscreenLoginDismissed: !1,
                    shoudlHideProfileButton: !1,
                    showFullscreenCta: !1,
                    showFeedLogin: !0,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }
            },
            computed: z(z({}, Object(I.c)("feed", ["cards", "activeCard", "fullscreenCard"])), {}, {
                isLandscapeOrientation: function() {
                    return this.windowSize.width > this.windowSize.height
                },
                videoService: function() {
                    var e;
                    return null === (e = this.$accessor.global.currentStream) || void 0 === e ? void 0 : e.platform
                },
                videoId: function() {
                    var e;
                    return null === (e = this.$accessor.global.currentStream) || void 0 === e ? void 0 : e.videoId
                },
                showFullscreenFeed: function() {
                    return this.isLandscapeOrientation && !this.feedToggled
                },
                isDesktop: function() {
                    return !navigator.maxTouchPoints
                },
                isLandscapeLarge: function() {
                    return this.isLandscapeOrientation && this.windowSize.width >= T.a.tabletLarge
                },
                hideExpandButton: function() {
                    return this.isLandscapeOrientation && this.windowSize.width < T.a.tabletLarge || !this.isLandscapeOrientation && this.isDesktop
                },
                showFeedOnRight: function() {
                    return this.isLandscapeLarge && this.feedToggled
                },
                points: function() {
                    return this.$accessor.user.points
                },
                username: function() {
                    return this.$accessor.user.name
                },
                avatar: function() {
                    return this.$accessor.user.avatar
                },
                nextReward: function() {
                    return this.$accessor.rewards.nextReward
                },
                loggedIn: function() {
                    return this.$accessor.auth.loggedIn
                },
                isLiveInGameplay: function() {
                    return this.$accessor.global.isLiveInGameplay
                },
                fullscreenCard: function() {
                    return this.$accessor.feed.fullscreenCard
                },
                showCheer: function() {
                    return this.isLiveInGameplay && this.$accessor.auth.loggedIn
                },
                favoriteTeam: function() {
                    return this.$accessor.user.favoriteTeam
                },
                hideFeedLogin: function() {
                    return !this.showFeedLogin || !!this.favoriteTeam
                },
                localisedStreams: function() {
                    return this.$accessor.global.localisedStreams(this.$i18n.locale)
                },
                isLive: function() {
                    return this.$accessor.global.isLive
                },
                currentEventId: function() {
                    return this.$accessor.global.eventId
                }
            }),
            watch: {
                fullscreenLoginDismissed: function(e) {
                    !e || this.loggedIn || this.shoudlHideProfileButton || this.showProfileButton()
                },
                showFullscreenFeed: function(e) {
                    e && this.fullscreenLoginDismissed && !this.loggedIn && !this.shoudlHideProfileButton && this.showProfileButton()
                },
                shoudlHideProfileButton: function(e) {
                    e || !this.fullscreenLoginDismissed || this.loggedIn ? this.hideProfileButton() : this.showProfileButton()
                },
                points: function() {
                    var e = this;
                    this.hideFullscreenUserProfileHandle && clearTimeout(this.hideFullscreenUserProfileHandle),
                    this.showProfileButton(),
                    this.hideFullscreenUserProfileHandle = setTimeout((function() {
                        e.hideProfileButton()
                    }
                    ), 3500)
                }
            },
            mounted: function() {
                var e = this;
                this.gaLiveMode();
                var t = this.$refs.container
                  , n = new ResizeObserver((function(t) {
                    t.forEach((function(t) {
                        var n = t.contentRect;
                        e.windowSize = {
                            width: n.width,
                            height: n.height
                        }
                    }
                    ))
                }
                ));
                if (t && n.observe(t),
                this.isLandscapeLarge && this.$nextTick((function() {
                    e.$nuxt.$emit("feed-toggle")
                }
                )),
                this.$nuxt.$on("feed-toggle", (function() {
                    e.toggleFeed()
                }
                )),
                this.$nuxt.$on("video-controls-show", (function() {
                    e.shoudlHideProfileButton = !0
                }
                )),
                this.$nuxt.$on("video-controls-hide", (function() {
                    e.shoudlHideProfileButton = !1
                }
                )),
                null !== this.$accessor.localStorage.selectedStream) {
                    var a = this.$accessor.localStorage.selectedStream;
                    this.$accessor.global.currentDayStreams.some((function(e) {
                        return e.streamId === a.streamId
                    }
                    )) && (this.preSelectedStream = !0,
                    this.$accessor.global.setCurrentStream(a))
                }
                this.isLive && this.localisedStreams && this.localisedStreams.length > 1 && !this.$accessor.modal.isLanguageSelectModalOpen && !this.preSelectedStream && this.$accessor.modal.openStreamSelectModalOpen(!0)
            },
            methods: {
                showProfileButton: function() {
                    var e = this;
                    this.$nextTick((function() {
                        var t = e.$refs.userProfilePeek;
                        t && k.a.to(t, {
                            y: "0",
                            duration: .75
                        })
                    }
                    ))
                },
                hideProfileButton: function() {
                    var e = this;
                    this.$nextTick((function() {
                        var t = e.$refs.userProfilePeek;
                        t && k.a.to(t, {
                            y: "-100vh",
                            duration: 1.5
                        })
                    }
                    ))
                },
                signIn: function() {
                    this.$accessor.modal.openLoginModal(!0)
                },
                toProfile: function() {
                    var e = this.localePath({
                        path: "/profile"
                    });
                    this.gaEvent("View Profile", e),
                    this.$router.push({
                        path: e
                    })
                },
                toSchedule: function() {
                    if (this.currentEventId) {
                        var e = this.localePath({
                            path: "/schedule/".concat(this.currentEventId)
                        });
                        this.gaEvent("View Schedule", e),
                        this.$router.push({
                            path: e
                        })
                    }
                },
                toggleFeed: function() {
                    this.isLandscapeLarge ? (this.feedToggled = !this.feedToggled,
                    this.feedToggled ? this.$nuxt.$emit("feed-right-expanded") : this.$nuxt.$emit("feed-right-collapsed")) : this.showFullscreenCta = !0
                },
                hideFullscreenCta: function() {
                    this.showFullscreenCta = !1
                },
                onDismissOverlay: function() {
                    this.fullscreenLoginDismissed = !0
                },
                onSignIn: function() {
                    this.$accessor.modal.openLoginModal(!0)
                },
                onWelcome: function() {
                    this.$accessor.auth.welcome(),
                    this.showFeedLogin = !1
                }
            }
        })
          , H = (n(1309),
        Object(c.a)(D, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                ref: "container",
                staticClass: "Tournament"
            }, [n("section", {
                staticClass: "Tournament__video"
            }, [n("Video", {
                attrs: {
                    service: e.videoService,
                    "video-id": e.videoId,
                    "is-livestream": !0,
                    "contain-height": e.isLandscapeOrientation,
                    "hide-expand-button": e.hideExpandButton,
                    "show-feed-on-right": e.showFeedOnRight,
                    "cover-image-on-load": "",
                    "is-vod": !1,
                    "auto-play": !1
                }
            }), e._v(" "), n("Background", {
                attrs: {
                    graphic: "",
                    explosion: ""
                }
            })], 1), e._v(" "), !e.showFullscreenFeed || e.showFeedOnRight ? n("section", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        right: e.showFeedOnRight
                    },
                    expression: "{ right: showFeedOnRight }"
                }],
                staticClass: "Tournament__Feed"
            }, [n("Feed", {
                attrs: {
                    "logged-in": e.loggedIn,
                    cards: e.cards,
                    "active-card": e.activeCard,
                    username: e.username,
                    points: e.points,
                    "next-reward": e.nextReward,
                    avatar: e.avatar,
                    "hide-feed-login": e.hideFeedLogin,
                    "on-right-side": !e.showFullscreenFeed && e.showFeedOnRight,
                    "event-id": e.currentEventId
                },
                on: {
                    "sign-in": e.signIn,
                    "user-profile": e.toProfile,
                    schedule: e.toSchedule,
                    "on-welcome": e.onWelcome
                }
            }), e._v(" "), n("Background", {
                attrs: {
                    explosion: ""
                }
            })], 1) : e._e(), e._v(" "), e.showFullscreenFeed ? n("section", {
                staticClass: "Tournament__FullscreenFeed"
            }, [n("FullscreenFeed", {
                attrs: {
                    card: e.fullscreenCard,
                    "logged-in": e.loggedIn,
                    "login-dismissed": e.fullscreenLoginDismissed,
                    "hide-feed-login": e.hideFeedLogin
                },
                on: {
                    "on-dismiss-overlay": e.onDismissOverlay,
                    "on-welcome": e.onWelcome
                }
            }), e._v(" "), n("div", {
                ref: "userProfilePeek",
                staticClass: "Tournament__UserProfilePeek"
            }, [e.loggedIn ? n("UserProfile", {
                attrs: {
                    username: e.username,
                    points: e.points,
                    "next-reward": e.nextReward,
                    avatar: e.avatar,
                    "scale-direction": "0% 0%",
                    "animiation-delay-ms": 1e3
                }
            }) : n("SignInButton", {
                nativeOn: {
                    click: function(t) {
                        return e.onSignIn.apply(null, arguments)
                    }
                }
            })], 1)], 1) : e._e(), e._v(" "), e.showCheer ? n("div", {
                staticClass: "Tournament__cheerContainer"
            }, [n("CheerContainer", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        smaller: !e.showFullscreenFeed && e.showFeedOnRight
                    },
                    expression: "{ smaller: !showFullscreenFeed && showFeedOnRight }"
                }],
                staticClass: "Tournament__cheerContainer__inner"
            })], 1) : e._e(), e._v(" "), n("BasicModal", {
                attrs: {
                    title: e.$t("live_dialog_fullscreen_title"),
                    body: e.$t("live_dialog_fullscreen_desc"),
                    action: e.$t("live_dialog_fullscreen_cta"),
                    opened: e.showFullscreenCta,
                    "hide-close-button": ""
                },
                on: {
                    action: e.hideFullscreenCta
                }
            })], 1)
        }
        ), [], !1, null, "ee23b904", null))
          , N = H.exports;
        installComponents(H, {
            Video: n(1096).default,
            Feed: n(1208).default,
            CheerContainer: n(1209).default
        });
        var V = a.default.extend({
            name: "Home",
            components: {
                PreTournament: S,
                Tournament: N,
                PageHeader: i.default
            },
            mixins: [x.a],
            computed: {
                isBeforeTournament: function() {
                    return this.$accessor.global.isBeforeTournament
                },
                isLive: function() {
                    return this.$accessor.global.isLive
                },
                isVod: function() {
                    return this.$accessor.global.isVod
                },
                isBetweenTournament: function() {
                    return this.$accessor.global.isBetweenTournament
                },
                isAfterTournament: function() {
                    return this.$accessor.global.isAfterTournament
                },
                loggedIn: function() {
                    return this.$accessor.auth.loggedIn
                },
                username: function() {
                    return this.$accessor.user.name
                },
                points: function() {
                    return this.$accessor.user.points
                },
                nextReward: function() {
                    return this.$accessor.rewards.nextReward
                },
                avatar: function() {
                    return this.$accessor.user.avatar
                },
                activeGame: function() {
                    return this.$accessor.global.activeGame
                },
                eventId: function() {
                    return this.$accessor.global.eventId
                },
                emptyEventId: function() {
                    return null === this.eventId
                },
                isResetting: function() {
                    return this.$accessor.global.resetting
                },
                eventIdChanged: function() {
                    return this.eventId !== this.$accessor.localStorage.eventId
                },
                showMaintancePage: function() {
                    return this.$config.vueMaintenance
                }
            },
            watch: {
                activeGame: function(e, t) {
                    e !== t && this.$accessor.cheer.updateHasGotCheeringPointThisGame(!1)
                },
                eventIdChanged: function(e, t) {
                    e !== t && (this.$accessor.localStorage.resetInteractions(),
                    this.$accessor.localStorage.storeEventId(this.eventId))
                }
            },
            methods: {
                singin: function() {
                    this.openLoginModal(!0)
                },
                openLoginModal: function(e) {
                    this.$accessor.modal.openLoginModal(e)
                },
                navigate: function(e) {
                    var t = this.localePath({
                        path: e
                    });
                    this.$router.push({
                        path: t
                    }),
                    this.gaEvent("View Profile", t)
                },
                redirect: function(e) {
                    return this.loggedIn ? this.navigate(e) : (this.openLoginModal(!0),
                    this.$accessor.modal.setRedirectURL(e))
                }
            }
        })
          , G = Object(c.a)(V, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                attrs: {
                    ondragstart: "return false;"
                }
            }, [e.isLive || e.isVod || e.showMaintancePage ? e._e() : n("PageHeader", {
                attrs: {
                    "signed-in": e.loggedIn,
                    username: e.username,
                    points: e.points,
                    "next-reward": e.nextReward,
                    avatar: e.avatar,
                    "hide-login": e.isResetting,
                    "is-resetting": e.isResetting
                },
                on: {
                    "sign-in": e.singin,
                    "user-profile": function(t) {
                        return e.navigate("/profile")
                    }
                }
            }), e._v(" "), e.isBeforeTournament && !e.showMaintancePage ? n("PreTournament", {
                attrs: {
                    "empty-event-id": e.emptyEventId,
                    "is-resetting": e.isResetting
                }
            }) : e._e(), e._v(" "), e.isLive && !e.showMaintancePage || e.isVod && !e.showMaintancePage ? n("Tournament") : e._e(), e._v(" "), e.showMaintancePage ? e._e() : n("NuxtChild")], 1)
        }
        ), [], !1, null, null, null);
        t.default = G.exports;
        installComponents(G, {
            PageHeader: n(136).default
        })
    }
}]);
