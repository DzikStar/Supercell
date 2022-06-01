(function(e) {
    function t(t) {
        for (var o, n, s = t[0], c = t[1], u = t[2], l = 0, d = []; l < s.length; l++)
            n = s[l],
            Object.prototype.hasOwnProperty.call(r, n) && r[n] && d.push(r[n][0]),
            r[n] = 0;
        for (o in c)
            Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
        _ && _(t);
        while (d.length)
            d.shift()();
        return i.push.apply(i, u || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < i.length; t++) {
            for (var a = i[t], o = !0, n = 1; n < a.length; n++) {
                var s = a[n];
                0 !== r[s] && (o = !1)
            }
            o && (i.splice(t--, 1),
            e = c(c.s = a[0]))
        }
        return e
    }
    var o = {}
      , n = {
        app: 0
    }
      , r = {
        app: 0
    }
      , i = [];
    function s(e) {
        return c.p + "js/" + ({
            about: "about",
            applicationstatus: "applicationstatus",
            authenticate: "authenticate",
            blocked: "blocked",
            boostpayouts: "boostpayouts",
            boostsignup: "boostsignup",
            "boost~mystuff~user": "boost~mystuff~user",
            "boost~mystuff": "boost~mystuff",
            boost: "boost",
            mystuff: "mystuff",
            user: "user",
            "codeofconduct~welcome": "codeofconduct~welcome",
            codeofconduct: "codeofconduct",
            welcome: "welcome",
            creatorsterms: "creatorsterms",
            deleteuser: "deleteuser",
            feedpost: "feedpost",
            fourofour: "fourofour",
            generalerror: "generalerror",
            login: "login",
            loginerror: "loginerror",
            maintenanace: "maintenanace",
            mystuffdiscord: "mystuffdiscord",
            mystuffslack: "mystuffslack",
            paypalauthenticate: "paypalauthenticate",
            platformauthenticate: "platformauthenticate",
            register: "register",
            registercomplete: "registercomplete",
            start: "start",
            tierupgraderequest: "tierupgraderequest",
            usersettings: "usersettings"
        }[e] || e) + "." + {
            about: "8a51014d",
            applicationstatus: "cdeb17d3",
            authenticate: "60e2d4b9",
            blocked: "b7ee0643",
            boostpayouts: "57189435",
            boostsignup: "75f9bf73",
            "boost~mystuff~user": "58595f15",
            "boost~mystuff": "40eeed2c",
            boost: "165d712c",
            mystuff: "ae21ad82",
            user: "2fb0e0fe",
            "codeofconduct~welcome": "481dc9ad",
            codeofconduct: "983fd1c9",
            welcome: "98405fd4",
            creatorsterms: "18d9dafe",
            deleteuser: "fe28280d",
            feedpost: "6b2877f8",
            fourofour: "a36e7c68",
            generalerror: "9616c057",
            login: "9dee4872",
            loginerror: "e8434e13",
            maintenanace: "3d8e82c2",
            mystuffdiscord: "fb46244c",
            mystuffslack: "513fa760",
            paypalauthenticate: "70f1fa22",
            platformauthenticate: "cb1782ce",
            register: "7a747569",
            registercomplete: "e32f0697",
            start: "4c04b661",
            tierupgraderequest: "2a54f0ea",
            usersettings: "1c805266"
        }[e] + ".js"
    }
    function c(t) {
        if (o[t])
            return o[t].exports;
        var a = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, c),
        a.l = !0,
        a.exports
    }
    c.e = function(e) {
        var t = []
          , a = {
            about: 1,
            applicationstatus: 1,
            authenticate: 1,
            blocked: 1,
            boostpayouts: 1,
            boostsignup: 1,
            "boost~mystuff~user": 1,
            "boost~mystuff": 1,
            boost: 1,
            mystuff: 1,
            user: 1,
            "codeofconduct~welcome": 1,
            codeofconduct: 1,
            welcome: 1,
            creatorsterms: 1,
            deleteuser: 1,
            feedpost: 1,
            fourofour: 1,
            generalerror: 1,
            login: 1,
            loginerror: 1,
            maintenanace: 1,
            mystuffdiscord: 1,
            mystuffslack: 1,
            paypalauthenticate: 1,
            platformauthenticate: 1,
            register: 1,
            registercomplete: 1,
            start: 1,
            tierupgraderequest: 1,
            usersettings: 1
        };
        n[e] ? t.push(n[e]) : 0 !== n[e] && a[e] && t.push(n[e] = new Promise((function(t, a) {
            for (var o = "css/" + ({
                about: "about",
                applicationstatus: "applicationstatus",
                authenticate: "authenticate",
                blocked: "blocked",
                boostpayouts: "boostpayouts",
                boostsignup: "boostsignup",
                "boost~mystuff~user": "boost~mystuff~user",
                "boost~mystuff": "boost~mystuff",
                boost: "boost",
                mystuff: "mystuff",
                user: "user",
                "codeofconduct~welcome": "codeofconduct~welcome",
                codeofconduct: "codeofconduct",
                welcome: "welcome",
                creatorsterms: "creatorsterms",
                deleteuser: "deleteuser",
                feedpost: "feedpost",
                fourofour: "fourofour",
                generalerror: "generalerror",
                login: "login",
                loginerror: "loginerror",
                maintenanace: "maintenanace",
                mystuffdiscord: "mystuffdiscord",
                mystuffslack: "mystuffslack",
                paypalauthenticate: "paypalauthenticate",
                platformauthenticate: "platformauthenticate",
                register: "register",
                registercomplete: "registercomplete",
                start: "start",
                tierupgraderequest: "tierupgraderequest",
                usersettings: "usersettings"
            }[e] || e) + "." + {
                about: "737edf63",
                applicationstatus: "807628f3",
                authenticate: "4b206b8e",
                blocked: "92a167b6",
                boostpayouts: "2453d15f",
                boostsignup: "80ee2357",
                "boost~mystuff~user": "b2f02ab3",
                "boost~mystuff": "131bbf96",
                boost: "0e433876",
                mystuff: "a44c45f6",
                user: "2de1db7f",
                "codeofconduct~welcome": "d7107657",
                codeofconduct: "8666ebee",
                welcome: "2f966374",
                creatorsterms: "d9a978b9",
                deleteuser: "63851ae5",
                feedpost: "63a840f9",
                fourofour: "020a68fc",
                generalerror: "92a167b6",
                login: "92a167b6",
                loginerror: "92a167b6",
                maintenanace: "92a167b6",
                mystuffdiscord: "6d69380c",
                mystuffslack: "5b14c9a7",
                paypalauthenticate: "a1159d83",
                platformauthenticate: "dd4952ca",
                register: "1f251bc8",
                registercomplete: "65d87f1e",
                start: "40e4a84d",
                tierupgraderequest: "92a167b6",
                usersettings: "797b0c3d"
            }[e] + ".css", r = c.p + o, i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
                var u = i[s]
                  , l = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === o || l === r))
                    return t()
            }
            var d = document.getElementsByTagName("style");
            for (s = 0; s < d.length; s++) {
                u = d[s],
                l = u.getAttribute("data-href");
                if (l === o || l === r)
                    return t()
            }
            var _ = document.createElement("link");
            _.rel = "stylesheet",
            _.type = "text/css",
            _.onload = t,
            _.onerror = function(t) {
                var o = t && t.target && t.target.src || r
                  , i = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED",
                i.request = o,
                delete n[e],
                _.parentNode.removeChild(_),
                a(i)
            }
            ,
            _.href = r;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(_)
        }
        )).then((function() {
            n[e] = 0
        }
        )));
        var o = r[e];
        if (0 !== o)
            if (o)
                t.push(o[2]);
            else {
                var i = new Promise((function(t, a) {
                    o = r[e] = [t, a]
                }
                ));
                t.push(o[2] = i);
                var u, l = document.createElement("script");
                l.charset = "utf-8",
                l.timeout = 120,
                c.nc && l.setAttribute("nonce", c.nc),
                l.src = s(e);
                var d = new Error;
                u = function(t) {
                    l.onerror = l.onload = null,
                    clearTimeout(_);
                    var a = r[e];
                    if (0 !== a) {
                        if (a) {
                            var o = t && ("load" === t.type ? "missing" : t.type)
                              , n = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + o + ": " + n + ")",
                            d.name = "ChunkLoadError",
                            d.type = o,
                            d.request = n,
                            a[1](d)
                        }
                        r[e] = void 0
                    }
                }
                ;
                var _ = setTimeout((function() {
                    u({
                        type: "timeout",
                        target: l
                    })
                }
                ), 12e4);
                l.onerror = l.onload = u,
                document.head.appendChild(l)
            }
        return Promise.all(t)
    }
    ,
    c.m = e,
    c.c = o,
    c.d = function(e, t, a) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    c.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.t = function(e, t) {
        if (1 & t && (e = c(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (c.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                c.d(a, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return a
    }
    ,
    c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return c.d(t, "a", t),
        t
    }
    ,
    c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    c.p = "/",
    c.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var u = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = u.push.bind(u);
    u.push = t,
    u = u.slice();
    for (var d = 0; d < u.length; d++)
        t(u[d]);
    var _ = l;
    i.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    "0002": function(e, t, a) {},
    "0016": function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        outlined: e.$props.outlined,
                        inverted: e.$props.inverted,
                        gradient: e.$props.gradient,
                        warning: e.$props.warning,
                        noUppercase: e.$props.noUppercase,
                        disabled: e.$props.disabled,
                        disabledClickable: e.$props.disabledClickable,
                        freeWidth: e.$props.freeWidth,
                        loading: e.isLoading,
                        over: e.isOver
                    },
                    expression: "{\n    'outlined': $props.outlined,\n    'inverted': $props.inverted,\n    'gradient': $props.gradient,\n    'warning': $props.warning,\n    'noUppercase': $props.noUppercase,\n    'disabled': $props.disabled,\n    'disabledClickable': $props.disabledClickable,\n    'freeWidth': $props.freeWidth,\n    'loading': isLoading,\n    'over': isOver\n  }"
                }],
                ref: "defaultButton",
                staticClass: "defaultButton",
                on: {
                    click: e.onClick
                }
            }, [a("BaseButton", {
                attrs: {
                    to: e.$props.to,
                    href: e.$props.href,
                    target: e.$props.target,
                    freeWidth: e.$props.freeWidth
                }
            }, [a("div", {
                staticClass: "defaultButton__main"
            }, [a("div", {
                staticClass: "defaultButton__bg"
            }), a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["left"],
                    expression: "['left']"
                }],
                staticClass: "defaultButton__icon"
            }, [e._t("iconLeft")], 2), a("p", {
                staticClass: "defaultButton__label",
                domProps: {
                    textContent: e._s(e.$props.label)
                }
            }), a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["right"],
                    expression: "['right']"
                }],
                staticClass: "defaultButton__icon"
            }, [e._t("iconRight")], 2), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isLoading,
                    expression: "isLoading"
                }],
                staticClass: "defaultButton__loader"
            }, [a("Loader", {
                attrs: {
                    color: e.loaderColor
                }
            })], 1)])])], 1)
        }
          , n = []
          , r = (a("d3b7"),
        a("159b"),
        a("60a1"))
          , i = a("e3e2")
          , s = a("f76f")
          , c = a("22b3")
          , u = a("31b0")
          , l = a("4ee7")
          , d = {
            name: "DefaultButton",
            mixins: [u["a"], l["a"]],
            components: {
                BaseButton: s["a"],
                Loader: c["a"]
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
                target: {
                    type: String,
                    default: ""
                },
                to: {
                    type: [String, Object],
                    default: ""
                },
                outlined: {
                    type: Boolean,
                    default: !1
                },
                inverted: {
                    type: Boolean,
                    default: !1
                },
                gradient: {
                    type: Boolean,
                    default: !1
                },
                noUppercase: {
                    type: Boolean,
                    default: !1
                },
                warning: {
                    type: Boolean,
                    default: !1
                },
                icon: {
                    type: String,
                    default: ""
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                disabledClickable: {
                    type: Boolean,
                    default: !1
                },
                freeWidth: {
                    type: Boolean,
                    default: !1
                },
                loaders: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    constants: r
                }
            },
            computed: {
                isLoading: function() {
                    var e = !1;
                    return this.$props.loaders.forEach((function(t) {
                        "pending" === t && (e = !0)
                    }
                    )),
                    e
                },
                loaderColor: function() {
                    return this.$props.outlined ? i["COLORS"].creatorGreen : "#ffffff"
                }
            },
            methods: {
                onClick: function(e) {
                    this.isLoading || this.$emit("click", e)
                }
            }
        }
          , _ = d
          , p = (a("6b53"),
        a("2877"))
          , m = Object(p["a"])(_, o, n, !1, null, "49adcfe9", null);
        t["a"] = m.exports
    },
    "0058": function(e, t, a) {},
    "07a9": function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        hideLeftUntilBreakpoint: e.$props.hideLeftUntilBreakpoint,
                        hideRightUntilBreakpoint: e.$props.hideRightUntilBreakpoint,
                        switchOrderUntilBreakpoint: e.$props.switchOrderUntilBreakpoint,
                        switchOrderFromBreakpoint: e.$props.switchOrderFromBreakpoint
                    },
                    expression: "{\n    'hideLeftUntilBreakpoint': $props.hideLeftUntilBreakpoint,\n    'hideRightUntilBreakpoint': $props.hideRightUntilBreakpoint,\n    'switchOrderUntilBreakpoint': $props.switchOrderUntilBreakpoint,\n    'switchOrderFromBreakpoint': $props.switchOrderFromBreakpoint\n  }"
                }],
                staticClass: "twoColumn"
            }, [a("div", {
                staticClass: "twoColumn__main"
            }, [a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: "left",
                    expression: "'left'"
                }],
                staticClass: "twoColumn__column"
            }, [e._t("left")], 2), a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: "right",
                    expression: "'right'"
                }],
                staticClass: "twoColumn__column"
            }, [e._t("right")], 2)])])
        }
          , n = []
          , r = {
            name: "TwoColumn",
            props: {
                hideLeftUntilBreakpoint: {
                    type: Boolean,
                    default: !1
                },
                hideRightUntilBreakpoint: {
                    type: Boolean,
                    default: !1
                },
                switchOrderUntilBreakpoint: {
                    type: Boolean,
                    default: !1
                },
                switchOrderFromBreakpoint: {
                    type: Boolean,
                    default: !1
                }
            }
        }
          , i = r
          , s = (a("a8cc"),
        a("2877"))
          , c = Object(s["a"])(i, o, n, !1, null, "ada410a2", null);
        t["a"] = c.exports
    },
    "0868": function(e, t, a) {},
    "0909": function(e, t, a) {
        e.exports = a.p + "img/game-logo-HAY_DAY.aee31eb7.png"
    },
    "0923": function(e, t, a) {
        e.exports = a.p + "img/trophy-road-notification-cards.291f28bb.png"
    },
    "0e22": function(e, t, a) {
        e.exports = a.p + "img/tier-symbol-1.95f1f2b0.png"
    },
    "0e88": function(e, t, a) {
        "use strict";
        a("3ab2")
    },
    "0f91": function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-mobile-CLASH_ROYALE.ae731a8c.jpg"
    },
    "106b": function(e, t, a) {
        "use strict";
        a("fe22")
    },
    "10a9": function(e, t, a) {},
    "10ed": function(e, t, a) {
        e.exports = a.p + "img/tier-symbol-3.e0b21c40.png"
    },
    1531: function(e, t, a) {
        e.exports = a.p + "img/icon-info.1235d365.svg"
    },
    1534: function(e, t, a) {
        "use strict";
        a("de5e")
    },
    1537: function(e, t, a) {
        e.exports = a.p + "img/icon-mobile-menu-bg.9968b1b5.svg"
    },
    "1aa5": function(e, t, a) {
        e.exports = a.p + "img/feed-default-CLASH_ROYALE.7b09505f.jpg"
    },
    "1bad": function(e, t, a) {
        "use strict";
        a("d065")
    },
    "1c2e": function(e, t, a) {
        "use strict";
        a("10a9")
    },
    "1f5d": function(e, t, a) {
        e.exports = a.p + "img/footer-appstore.62e01c5b.png"
    },
    2008: function(e, t, a) {},
    2066: function(e, t, a) {
        var o = {
            "./feed-default-BOOM_BEACH.jpg": "e6be",
            "./feed-default-BRAWL_STARS.jpg": "e75a",
            "./feed-default-CLASH_MINI.jpg": "e84b",
            "./feed-default-CLASH_OF_CLANS.jpg": "a695",
            "./feed-default-CLASH_QUEST.jpg": "ce05",
            "./feed-default-CLASH_ROYALE.jpg": "1aa5",
            "./feed-default-EVERDALE.jpg": "2cc1",
            "./feed-default-HAY_DAY.jpg": "254f"
        };
        function n(e) {
            var t = r(e);
            return a(t)
        }
        function r(e) {
            if (!a.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return o[e]
        }
        n.keys = function() {
            return Object.keys(o)
        }
        ,
        n.resolve = r,
        e.exports = n,
        n.id = "2066"
    },
    2188: function(e, t, a) {
        e.exports = a.p + "img/icon-tier5.36d84ea5.svg"
    },
    "22b3": function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("svg", {
                staticClass: "loader__svg",
                attrs: {
                    width: "38px",
                    height: "38px",
                    viewBox: "0 0 38 38",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("circle", {
                staticClass: "loader__circle",
                attrs: {
                    stroke: e.$props.color,
                    "stroke-width": "8",
                    cx: "19",
                    cy: "19",
                    r: "14"
                }
            })])
        }
          , n = []
          , r = {
            name: "Loader",
            props: {
                color: {
                    type: String,
                    default: "#34CB66"
                }
            }
        }
          , i = r
          , s = (a("6384"),
        a("2877"))
          , c = Object(s["a"])(i, o, n, !1, null, "be29989c", null);
        t["a"] = c.exports
    },
    2312: function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("transition", {
                on: {
                    enter: e.onEnter,
                    leave: e.onLeave
                }
            }, [e.$props.opened ? a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        opened: e.$props.opened,
                        noPadding: e.$props.noPadding
                    },
                    expression: "{\n      'opened': $props.opened,\n      'noPadding': $props.noPadding\n    }"
                }],
                ref: "baseModal",
                staticClass: "baseModal"
            }, [a("div", {
                ref: "main",
                staticClass: "baseModal__main"
            }, [a("div", {
                ref: "bg",
                staticClass: "baseModal__bg"
            }), a("div", {
                staticClass: "baseModal__closeArea",
                on: {
                    click: e.onClose
                }
            }), a("div", {
                ref: "container",
                staticClass: "baseModal__container"
            }, [a("div", {
                ref: "box",
                staticClass: "baseModal__box"
            }, [e._t("base"), a("div", {
                staticClass: "baseModal__innerBox"
            }, [e._t("default")], 2)], 2)])])]) : e._e()])
        }
          , n = []
          , r = a("5530")
          , i = a("2f62")
          , s = a("cffa")
          , c = {
            name: "BaseModal",
            props: {
                opened: {
                    type: Boolean,
                    default: !1
                },
                noPadding: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.$props.opened && this.disableBodyScroll()
            },
            beforeDestroy: function() {
                this.enableBodyScroll()
            },
            methods: Object(r["a"])(Object(r["a"])({}, Object(i["b"])("general", ["enableBodyScroll", "disableBodyScroll"])), {}, {
                onEnter: function(e, t) {
                    s["b"].set(this.$refs.bg, {
                        opacity: 0
                    }),
                    s["b"].to(this.$refs.bg, {
                        opacity: .5,
                        duration: .4,
                        ease: "power2.out"
                    }),
                    s["b"].set(this.$refs.box, {
                        scale: .9,
                        opacity: 0
                    }),
                    s["b"].to(this.$refs.box, {
                        scale: 1,
                        opacity: 1,
                        duration: .4,
                        ease: "power2.out",
                        onComplete: t
                    })
                },
                onLeave: function(e, t) {
                    var a = this;
                    s["b"].to(this.$refs.bg, {
                        opacity: 0,
                        duration: .4,
                        ease: "power2.out"
                    }),
                    s["b"].to(this.$refs.box, {
                        scale: .95,
                        opacity: 0,
                        duration: .4,
                        ease: "power2.out",
                        onComplete: function() {
                            a.enableBodyScroll(),
                            t()
                        }
                    })
                },
                onClose: function() {
                    this.$emit("close")
                }
            }),
            watch: {
                opened: function(e, t) {
                    var a = this;
                    e && this.$nextTick((function() {
                        a.disableBodyScroll()
                    }
                    ))
                }
            }
        }
          , u = c
          , l = (a("d0c2"),
        a("2877"))
          , d = Object(l["a"])(u, o, n, !1, null, "28fc11d2", null);
        t["a"] = d.exports
    },
    "254f": function(e, t, a) {
        e.exports = a.p + "img/feed-default-HAY_DAY.cd7ae632.jpg"
    },
    "25a8": function(e, t, a) {
        "use strict";
        a("8afa")
    },
    "26f5": function(e, t, a) {
        var o = {
            "./video-inbox-hero-mobile-BOOM_BEACH.jpg": "87fc",
            "./video-inbox-hero-mobile-BRAWL_STARS.jpg": "9844",
            "./video-inbox-hero-mobile-CLASH_MINI.jpg": "f799",
            "./video-inbox-hero-mobile-CLASH_OF_CLANS.jpg": "8fc0",
            "./video-inbox-hero-mobile-CLASH_QUEST.jpg": "71f6",
            "./video-inbox-hero-mobile-CLASH_ROYALE.jpg": "0f91",
            "./video-inbox-hero-mobile-EVERDALE.jpg": "dc90",
            "./video-inbox-hero-mobile-HAY_DAY.jpg": "5b26"
        };
        function n(e) {
            var t = r(e);
            return a(t)
        }
        function r(e) {
            if (!a.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return o[e]
        }
        n.keys = function() {
            return Object.keys(o)
        }
        ,
        n.resolve = r,
        e.exports = n,
        n.id = "26f5"
    },
    2928: function(e, t, a) {
        "use strict";
        a("3892")
    },
    "295a": function(e, t, a) {
        e.exports = a.p + "img/game-icon-EVERDALE.86cec596.jpg"
    },
    "2b98": function(e, t, a) {
        e.exports = a.p + "img/game-icon-CLASH_QUEST.b831b2ff.jpg"
    },
    "2c78": function(e, t, a) {
        e.exports = a.p + "img/tier-symbol-5.ff774011.png"
    },
    "2cc1": function(e, t, a) {
        e.exports = a.p + "img/feed-default-EVERDALE.15c81a2a.jpg"
    },
    "303e": function(e, t, a) {
        "use strict";
        a("4c84")
    },
    3118: function(e, t, a) {},
    "31b0": function(e, t, a) {
        "use strict";
        t["a"] = {
            data: function() {
                return {
                    isOver: !1,
                    isPressed: !1
                }
            },
            mounted: function() {
                this.$el.addEventListener("mouseenter", this.handleOver),
                this.$el.addEventListener("mouseleave", this.handleOut),
                this.$el.addEventListener("dragleave", this.handleOut),
                this.$el.addEventListener("mousedown", this.handlePress),
                this.$el.addEventListener("mouseup", this.handleRelease),
                this.$el.addEventListener("touchstart", this.handlePress),
                this.$el.addEventListener("touchend", this.handleOut)
            },
            beforeDestroy: function() {
                this.$el.removeEventListener("mouseenter", this.handleOver),
                this.$el.removeEventListener("mouseleave", this.handleOut),
                this.$el.removeEventListener("dragleave", this.handleOut),
                this.$el.removeEventListener("mousedown", this.handlePress),
                this.$el.removeEventListener("mouseup", this.handleRelease),
                this.$el.removeEventListener("touchstart", this.handlePress),
                this.$el.removeEventListener("touchend", this.handleOut)
            },
            methods: {
                handleOver: function() {
                    this.isOver = !0
                },
                handleOut: function() {
                    this.isOver = !1,
                    this.isPressed = !1
                },
                handlePress: function() {
                    this.isPressed = !0
                },
                handleRelease: function() {
                    this.isPressed = !1
                }
            }
        }
    },
    "31d4": function(e, t, a) {},
    "320f": function(e, t, a) {
        "use strict";
        a("0868")
    },
    3277: function(e, t, a) {
        "use strict";
        var o = a("c0c4")
          , n = a.n(o);
        t["a"] = {
            methods: {
                sanitizeString: function(e) {
                    return n.a.sanitize(e)
                }
            }
        }
    },
    3608: function(e, t, a) {
        "use strict";
        a("6f7b")
    },
    3627: function(e, t, a) {
        "use strict";
        a("fa9c")
    },
    3892: function(e, t, a) {},
    "38ad": function(e, t, a) {
        "use strict";
        a("c877")
    },
    3989: function(e, t, a) {
        "use strict";
        a("0002")
    },
    "399f": function(e, t, a) {
        e.exports = a.p + "img/icon-tier2.42f77017.svg"
    },
    "3ab2": function(e, t, a) {},
    "3b77": function(e, t, a) {
        e.exports = a.p + "img/tier-symbol-6.afca6e2a.png"
    },
    "3e0f": function(e, t, a) {
        e.exports = a.p + "img/game-icon-BOOM_BEACH.74496058.jpg"
    },
    "3f72": function(e, t, a) {},
    "3f7e": function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        animation: e.$props.animation,
                        paused: e.paused
                    },
                    expression: "{\n    'animation': $props.animation,\n    'paused': paused\n  }"
                }],
                ref: "main",
                staticClass: "raysAnimation"
            }, ["cropped" === e.$props.display ? a("svg", {
                staticClass: "raysAnimation__svg",
                attrs: {
                    width: "1440",
                    height: "800",
                    viewBox: "0 0 1440 800",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("path", {
                staticClass: "raysAnimation__rays",
                attrs: {
                    opacity: e.$props.opacity,
                    d: "M733.629 341.86L1003.79 -397.261L1133.51 -358.802L757.443 348.993L1321.49 -270.336L1427.3 -198.05L776.837 362.23L1566.76 -62.5207L1635.77 34.916L789.465 380.099L1710.01 201.11L1734 312.004L793.885 400.395L1734 488.787L1710.01 599.681L789.465 420.692L1635.77 765.875L1566.76 863.311L776.837 438.561L1427.3 998.767L1321.49 1071.13L757.443 451.798L1133.51 1159.59L1003.79 1198.05L733.629 458.931L790.097 1228.79H651.903L708.371 458.857L438.208 1198.05L308.493 1159.59L684.557 451.798L120.507 1071.13L14.6963 998.767L665.163 438.561L-124.76 863.311L-193.767 765.875L652.534 420.692L-268.006 599.681L-292 488.787L648.114 400.395L-292 312.004L-268.006 201.11L652.534 380.099L-193.767 34.916L-124.76 -62.5207L665.163 362.23L14.6963 -198.05L120.507 -270.336L684.557 348.993L308.493 -358.802L438.208 -397.261L708.371 341.933L651.903 -428H790.097L733.629 341.86Z",
                    fill: "url(#" + e.radialGradientId + ")"
                }
            }), a("defs", [a("radialGradient", {
                attrs: {
                    id: e.radialGradientId,
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(721 400.395) rotate(90) scale(828.395 1013)"
                }
            }, [a("stop", {
                attrs: {
                    "stop-color": e.$props.color
                }
            }), a("stop", {
                attrs: {
                    offset: "1",
                    "stop-color": e.$props.color,
                    "stop-opacity": "0"
                }
            })], 1)], 1)]) : e._e(), "noncropped" === e.$props.display ? a("svg", {
                staticClass: "raysAnimation__svg",
                attrs: {
                    width: "652",
                    height: "652",
                    viewBox: "0 0 652 652",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("path", {
                staticClass: "raysAnimation__rays",
                attrs: {
                    opacity: e.$props.opacity,
                    d: "M330.064 302.964L417.007 12.0966L458.751 27.2318L337.728 305.772L519.249 62.0456L553.3 90.4929L343.969 310.981L598.18 143.828L620.387 182.172L348.033 318.013L644.278 247.575L652 291.215L349.456 326L652 360.785L644.278 404.425L348.033 333.987L620.387 469.828L598.18 508.172L343.969 341.019L553.3 561.478L519.249 589.954L337.728 346.229L458.751 624.768L417.007 639.903L330.064 349.036L348.236 652H303.763L321.936 349.007L234.993 639.903L193.249 624.768L314.272 346.229L132.751 589.954L98.6999 561.478L308.031 341.019L53.8205 508.172L31.613 469.828L303.967 333.987L7.72182 404.425L0 360.785L302.544 326L0 291.215L7.72182 247.575L303.967 318.013L31.613 182.172L53.8205 143.828L308.031 310.981L98.6999 90.4929L132.751 62.0456L314.272 305.772L193.249 27.2318L234.993 12.0966L321.936 302.993L303.763 0H348.236L330.064 302.964Z",
                    fill: "url(#" + e.radialGradientId + ")"
                }
            }), a("defs", [a("radialGradient", {
                attrs: {
                    id: e.radialGradientId,
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(326 326) rotate(90) scale(326)"
                }
            }, [a("stop", {
                attrs: {
                    "stop-color": e.$props.color
                }
            }), a("stop", {
                attrs: {
                    offset: "1",
                    "stop-color": e.$props.color,
                    "stop-opacity": "0"
                }
            })], 1)], 1)]) : e._e()])
        }
          , n = []
          , r = (a("a9e3"),
        a("d3b7"),
        a("159b"),
        {
            name: "RaysAnimation",
            props: {
                color: {
                    type: String,
                    default: "white"
                },
                animation: {
                    type: Boolean,
                    default: !0
                },
                opacity: {
                    type: Number,
                    default: .1
                },
                autoPause: {
                    type: Boolean,
                    default: !0
                },
                display: {
                    type: String,
                    validator: function(e) {
                        return -1 !== ["cropped", "noncropped"].indexOf(e)
                    },
                    default: "cropped"
                }
            },
            data: function() {
                return {
                    radialGradientId: "radialGradient-" + Math.random(),
                    observer: void 0,
                    paused: !1
                }
            },
            mounted: function() {
                this.$props.autoPause && this.initObserver()
            },
            beforeDestroy: function() {
                this.observer && this.destroyObserver()
            },
            methods: {
                initObserver: function() {
                    IntersectionObserver && (this.observer = new IntersectionObserver(this.observerCallback,{
                        root: document
                    }),
                    this.observer.observe(this.$refs.main))
                },
                destroyObserver: function() {
                    this.observer && (this.observer.unobserve(this.$refs.main),
                    this.observer.disconnect(),
                    this.observer = null)
                },
                observerCallback: function(e, t) {
                    var a = this;
                    e.forEach((function(e) {
                        e.isIntersecting ? a.paused = !1 : a.paused = !0
                    }
                    ))
                }
            },
            watch: {
                autoPause: function(e, t) {
                    e ? this.initObserver() : this.destroyObserver()
                }
            }
        })
          , i = r
          , s = (a("e0e0"),
        a("2877"))
          , c = Object(s["a"])(i, o, n, !1, null, "6036ead5", null);
        t["a"] = c.exports
    },
    4163: function(e, t, a) {
        e.exports = a.p + "img/footer-googleplay.87d9b793.png"
    },
    4360: function(e, t, a) {
        "use strict";
        var o, n, r, i, s, c, u, l, d, _, p, m, f, h, g, b, S, y = a("2b0e"), v = a("2f62"), E = a("ade3"), T = (a("d3b7"),
        a("3ca3"),
        a("ddb0"),
        a("2b3d"),
        a("9861"),
        a("ac1f"),
        a("5319"),
        a("bc3a")), C = a.n(T), O = a("e443"), A = a("60a1"), I = "GENERAL_SET_PAGE_LOADER_VISIBILITY", w = "GENERAL_SET_IS_HEADER_RENDERED", R = "GENERAL_SET_IS_HEADER_DISABLED", P = "GENERAL_SET_IS_FOOTER_RENDERED", L = "GENERAL_SET_IS_FOOTER_HIDDEN", N = "GENERAL_SET_IS_MOBILE_MENU_RENDERED", k = "GENERAL_ADD_ROUTE_HISTORY", D = "GENERAL_ROUTE_HISTORY_BACK", B = "GENERAL_DISABLE_BODY_SCROLL", U = "GENERAL_ENABLE_BODY_SCROLL", M = "GENERAL_SET_IS_GENDER_MODAL_OPENED", x = "GENERAL_SET_IS_COC_MODAL_OPENED", $ = "GENERAL_SET_PRIVATE_ASSET_STATUS", H = "BREAKPOINTS_SET_WINDOW_WIDTH", j = "BREAKPOINTS_SET_FROM_BREAKPOINT_VALUE", F = "BREAKPOINTS_SET_UNTIL_BREAKPOINT_VALUE", G = "BREAKPOINTS_SET_FROM_BREAKPOINT", Y = "BREAKPOINTS_SET_UNTIL_BREAKPOINT", V = "LOCALE_SET_LANGUAGE", W = "LOCALE_SET_TOS", q = "VIDEO_INBOX_INIT", K = "VIDEO_INBOX_CLEAR", z = "VIDEO_INBOX_CREATE_LINK", J = "VIDEO_INBOX_CREATE_LINK_COMPLETE", Z = "VIDEO_INBOX_CREATE_LINK_ERROR", X = "VIDEO_INBOX_REMOVE_LINK", Q = "USER_CLEAR", ee = "USER_SET_USER", te = "USER_SET_AUTHENTICATE_STATUS", ae = "USER_SET_GET_STATUS", oe = "USER_SET_SAVE_PERSONAL_STATUS", ne = "USER_SET_SAVE_DATE_OF_BIRTH_STATUS", re = "USER_SET_SAVE_GAMES_STATUS", ie = "USER_SET_SAVE_PRIMARY_GAME_STATUS", se = "USER_SET_SAVE_BOOST_STATUS", ce = "USER_SET_SAVE_FEED_FILTERS_STATUS", ue = "USER_SET_SAVE_PAYPAL_STATUS", le = "USER_SET_SAVE_CODE_OF_CONDUCT_COMPLETED_STATUS", de = "USER_SET_SAVE_WELCOME_SEEN_STATUS", _e = "USER_SET_CONNECT_DISCORD_STATUS", pe = "USER_SET_DISCONNECT_DISCORD_STATUS", me = "USER_SET_CONNECT_YOUTEUBE_STATUS", fe = "USER_SET_DISCONNECT_YOUTUBE_STATUS", he = "USER_SET_CONNECT_TWITCH_STATUS", ge = "USER_SET_DISCONNECT_TWITCH_STATUS", be = "USER_SET_CHECK_BOOST_HANDLE_STATUS", Se = "USER_LOGOUT", ye = "USER_SET_LOGOUT_STATUS", ve = "USER_SOFT_LOGOUT", Ee = "USER_VIDEO_INBOX_SET_GET_STATUS", Te = "USER_VIDEO_INBOX_SET_ACCEPTED_STATUS", Ce = "USER_VIDEO_INBOX_SET", Oe = "USER_SOCIAL_PLATFORMS_SET_GET_STATUS", Ae = "USER_SOCIAL_PLATFORMS_SET_SAVE_STATUS", Ie = "USER_SOCIAL_PLATFORMS_SET_PLATFORMS", we = "REGISTER_SET_AUTHENTICATE_STATUS", Re = "REGISTER_SET_SUBMIT_STATUS", Pe = "REGISTER_SET_CREDENTIALS", Le = "REGISTER_CLEAR", Ne = "REGISTER_SET_STEP", ke = "REGISTER_SET_LAST_VISITED_STEP", De = "REGISTER_SET_CONNECT_YOUTUBE_STATUS", Be = "REGISTER_SET_DISCONNECT_YOUTUBE_STATUS", Ue = "REGISTER_SET_CONNECT_TWITCH_STATUS", Me = "REGISTER_SET_DISCONNECT_TWITCH_STATUS", xe = "REGISTER_SET_GAMES", $e = "REGISTER_SET_PRIMARY_GAME", He = "REGISTER_SET_USERNAME", je = "REGISTER_SET_FIRST_NAME", Fe = "REGISTER_SET_LAST_NAME", Ge = "REGISTER_SET_EMAIL", Ye = "REGISTER_SET_LANG", Ve = "REGISTER_SET_LOC", We = "REGISTER_SET_DATE_OF_BIRTH", qe = "REGISTER_SET_GENDER", Ke = "REGISTER_SET_CHECKED_NDAS", ze = "REGISTER_SET_SIGN", Je = "REGISTER_RESET", Ze = "USER_SETTINGS_CLEAR", Xe = "USER_SETTINGS_SET_FIRST_NAME", Qe = "USER_SETTINGS_SET_LAST_NAME", et = "USER_SETTINGS_SET_USERNAME", tt = "USER_SETTINGS_SET_EMAIL", at = "USER_SETTINGS_SET_LANG", ot = "USER_SETTINGS_SET_LOC", nt = "BOOST_SIGNUP_CLEAR", rt = "BOOST_SIGNUP_SET_STEP", it = "BOOST_SIGNUP_SET_PERSONAL_ID", st = "BOOST_SIGNUP_SET_GENDER", ct = "BOOST_SIGNUP_SET_PAYPAL_DISCONNECT_DIALOG_STATUS", ut = "BOOST_SIGNUP_CHANGE_HANDLE", lt = "BOOST_SIGNUP_HANDLE_VALIDATION_ERROR", dt = "BOOST_SIGNUP_HANDLE_VALIDATION_VALID", _t = "BOOST_SIGNUP_CHANGE_HANDLE_CHECK", pt = "BOOST_SIGNUP_HANDLE_CHECK_VALIDATION_ERROR", mt = "BOOST_SIGNUP_HANDLE_CHECK_VALIDATION_VALID", ft = "BOOST_SIGNUP_HANDLE_SHOW_LOADER", ht = "BOOST_SIGNUP_CHANGE_CONFIRM_VALUE", gt = "BOOST_SIGNUP_SUBMIT", bt = "BOOST_SIGNUP_SUBMIT_COMPLETE", St = "BOOST_SIGNUP_DISCONNECT_PAYPAL", yt = "BOOST_SIGNUP_DISCONNECT_PAYPAL_COMPLETE", vt = "BOOST_SIGNUP_SET_TERMS", Et = "PAYPAL_CLEAR", Tt = "PAYPAL_SET_AUTHENTICATE_STATUS", Ct = "MERCH_CODES_CLEAR", Ot = "MERCH_CODES_FETCH_LIST", At = "MERCH_CODES_FETCH_LIST_COMPLETE", It = "MERCH_CODES_FETCH_LIST_ERROR", wt = "MERCH_CODES_RESET_GROUPS", Rt = "MERCH_CODES_SET_STASHED_GROUPS", Pt = "MERCH_CODES_MARK_CODE_OPENED", Lt = "MERCH_CODES_MARK_CODE_OPENED_COMPLETE", Nt = "MERCH_CODES_MARK_CODE_OPENED_ERROR", kt = "FEED_CLEAR", Dt = "FEED_FETCH_POSTS", Bt = "FEED_FETCH_POSTS_SUCCESS", Ut = "FEED_FETCH_POSTS_FAILED", Mt = "FEED_FETCH_MORE_POSTS", xt = "FEED_FETCH_MORE_POSTS_SUCCESS", $t = "FEED_FETCH_MORE_POSTS_FAILED", Ht = "FEED_FETCH_POST", jt = "FEED_FETCH_POST_SUCCESS", Ft = "FEED_FETCH_POST_FAILED", Gt = "FEED_SET_SHOW_FILTER_DIALOG", Yt = "BOOST_CLEAR", Vt = "BOOST_SET_GET_DATA_STATUS", Wt = "BOOST_SET_DATA", qt = "BOOST_SET_GET_PAYSLIP_STATUS", Kt = "BOOST_RESET_DATA", zt = "BOOST_SET_IS_WELCOME_SCREEN_SHOWN", Jt = "SET_IS_INFO_MODAL_SHOWN", Zt = "SET_IS_HANDLE_USED_MODAL_SHOWN", Xt = "SET_IS_CLASH_MINI_MESSAGE_SHOWN", Qt = "TROPHY_ROAD_CLEAR", ea = "TROPHY_ROAD_FETCH", ta = "TROPHY_ROAD_FETCH_SUCCESS", aa = "TROPHY_ROAD_FETCH_FAILED", oa = "TROPHY_ROAD_SET_CARD_COMPLETED", na = "TROPHY_ROAD_SET_CARD_COMPLETED_SUCCESS", ra = "TROPHY_ROAD_SET_CARD_COMPLETED_FAILED", ia = "TROPHY_ROAD_SHOW_VIDEO_MODAL", sa = "TROPHY_ROAD_HIDE_VIDEO_MODAL", ca = "TROPHY_ROAD_SHOW_UPGRADE_REVIEWS_MODAL", ua = "TROPHY_ROAD_HIDE_UPGRADE_REVIEWS_MODAL", la = "TROPHY_ROAD_SHOW_CLAIM_REVIEW_MODAL", da = "TROPHY_ROAD_HIDE_CLAIM_REVIEW_MODAL", _a = "TROPHY_ROAD_REQUEST_TIER_UPGRADE", pa = "TROPHY_ROAD_REQUEST_TIER_UPGRADE_SUCCESS", ma = "TROPHY_ROAD_REQUEST_TIER_UPGRADE_FAILED", fa = "TROPHY_ROAD_SHOW_NOTIFICATION", ha = "TROPHY_ROAD_HIDE_NOTIFICATION", ga = "TROPHY_ROAD_SETTING_ANIMATION_SEEN_CARD", ba = "TROPHY_ROAD_SET_CARD_ANIMATION_SEEN_STATUS", Sa = "GAMES_SET_GET_STATUS_STATUS", ya = "GAMES_SET_GAMES", va = "SLACK_SET_CONNECT_STATUS", Ea = "SLACK_SET_EMAIL", Ta = "SLACK_SET_CONFIRM_EMAIL", Ca = "SLACK_SET_CHECKED", Oa = a("e3e2"), Aa = a("a18c"), Ia = {
            getPrivateAssetStatus: null,
            showPageLoader: !1,
            isHeaderRendered: !1,
            isHeaderDisabled: !1,
            isFooterRendered: !1,
            isFooterHidden: !1,
            isMobileMenuRendered: !1,
            routeHistory: [],
            bodyScrollEnabled: !0,
            scrollBarGap: 0,
            isRequiredInfoModalOpened: !1,
            isCocModalOpened: !1
        }, wa = {
            showPageLoader: function(e) {
                return "boolean" === typeof e.showPageLoader ? e.showPageLoader : -1 !== e.showPageLoader.indexOf(e.breakpoint)
            },
            isHeaderVisible: function(e) {
                return e.isHeaderRendered
            },
            isHeaderDisabled: function(e) {
                return e.isHeaderDisabled
            },
            isFooterVisible: function(e) {
                return e.isFooterRendered && !e.isFooterHidden
            },
            isFooterHidden: function(e) {
                return e.isFooterHidden
            },
            isMobileMenuVisible: function(e, t, a, o) {
                return e.isMobileMenuRendered && o["user/isLoggedIn"] && o["breakpoints/isBreakpointUntil"](Oa["BREAKPOINTS"].tablet)
            },
            routeHistory: function(e) {
                return e.routeHistory
            },
            isBodyScrollEnabled: function(e) {
                return e.bodyScrollEnabled
            },
            scrollBarGap: function(e) {
                return e.scrollBarGap
            },
            isRequiredInfoModalOpened: function(e) {
                return e.isRequiredInfoModalOpened
            },
            isCocModalOpened: function(e) {
                return e.isCocModalOpened
            },
            privateAssetUrl: function(e, t, a, o) {
                return function(e, t) {
                    var a = "tier" + t
                      , o = "/private/" + a + "/" + e;
                    return o
                }
            }
        }, Ra = {
            version: function() {
                return O["a"].get("/version").catch((function() {}
                ))
            },
            setPageLoaderVisibility: function(e, t) {
                var a = e.commit;
                a(I, t)
            },
            setIsHeaderRendered: function(e, t) {
                var a = e.commit;
                a(w, t)
            },
            setIsHeaderDisabled: function(e, t) {
                var a = e.commit;
                a(R, t)
            },
            setIsFooterRendered: function(e, t) {
                var a = e.commit;
                a(P, t)
            },
            setIsFooterHidden: function(e, t) {
                var a = e.commit;
                a(L, t)
            },
            setIsMobileMenuRendered: function(e, t) {
                var a = e.commit;
                a(N, t)
            },
            addRouteHistory: function(e, t) {
                var a = e.commit;
                a(k, t)
            },
            routeHistoryBack: function(e) {
                var t = e.commit;
                t(D)
            },
            disableBodyScroll: function(e) {
                var t = e.commit;
                t(B)
            },
            enableBodyScroll: function(e) {
                var t = e.commit;
                t(U)
            },
            setPageTitle: function(e, t) {
                e.commit;
                document.title = t
            },
            setIsRequiredInfoModalOpened: function(e, t) {
                var a = e.commit;
                a(M, t)
            },
            setIsCocModalOpened: function(e, t) {
                var a = e.commit;
                a(x, t)
            },
            getPrivateAsset: function(e, t) {
                var a = e.commit
                  , o = e.rootGetters
                  , n = t.url
                  , r = t.token
                  , i = t.userId
                  , s = t.useToken
                  , c = void 0 === s || s
                  , u = t.useUserId
                  , l = void 0 === u || u;
                a($, A["API_STATUS_PENDING"]),
                r = r || o["user/token"],
                i = i || o["user/id"];
                var d = {};
                c && (d.Authorization = "Bearer " + r),
                l && (d["x-user-scid"] = i);
                var _ = C.a.create({
                    baseURL: "/",
                    headers: d
                });
                return _.get(n, {
                    responseType: "blob"
                }).then((function(e) {
                    return a($, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(URL.createObjectURL(e.data))
                }
                )).catch((function() {
                    return a($, A["API_STATUS_FAILURE"]),
                    Promise.resolve("")
                }
                ))
            }
        }, Pa = (o = {},
        Object(E["a"])(o, I, (function(e, t) {
            e.showPageLoader = t
        }
        )),
        Object(E["a"])(o, w, (function(e, t) {
            e.isHeaderRendered = t
        }
        )),
        Object(E["a"])(o, R, (function(e, t) {
            e.isHeaderDisabled = t
        }
        )),
        Object(E["a"])(o, P, (function(e, t) {
            e.isFooterRendered = t
        }
        )),
        Object(E["a"])(o, L, (function(e, t) {
            e.isFooterHidden = t
        }
        )),
        Object(E["a"])(o, N, (function(e, t) {
            e.isMobileMenuRendered = t
        }
        )),
        Object(E["a"])(o, k, (function(e, t) {
            e.routeHistory.unshift(t),
            e.routeHistory.length > 20 && (e.routeHistory.length = 20)
        }
        )),
        Object(E["a"])(o, D, (function(e) {
            e.routeHistory.length > 1 ? (Aa["a"].replace(e.routeHistory[1]).catch((function() {}
            )),
            e.routeHistory.shift(),
            e.routeHistory.shift()) : Aa["a"].go(-1)
        }
        )),
        Object(E["a"])(o, B, (function(e) {
            e.scrollBarGap = window.innerWidth - document.documentElement.clientWidth,
            e.bodyScrollEnabled = !1
        }
        )),
        Object(E["a"])(o, U, (function(e) {
            e.bodyScrollEnabled = !0
        }
        )),
        Object(E["a"])(o, M, (function(e, t) {
            e.isRequiredInfoModalOpened = t
        }
        )),
        Object(E["a"])(o, x, (function(e, t) {
            e.isCocModalOpened = t
        }
        )),
        Object(E["a"])(o, $, (function(e, t) {
            e.getPrivateAssetStatus = t
        }
        )),
        o), La = {
            namespaced: !0,
            state: Ia,
            getters: wa,
            actions: Ra,
            mutations: Pa
        }, Na = (a("b0c0"),
        {
            windowWidth: 0,
            fromBreakpointValue: null,
            untilBreakpointValue: null,
            fromBreakpoint: "",
            untilBreakpoint: ""
        }), ka = {
            windowWidth: function(e) {
                return e.windowWidth
            },
            fromBreakpointValue: function(e) {
                return e.fromBreakpointValue
            },
            untilBreakpointValue: function(e) {
                return e.untilBreakpointValue
            },
            fromBreakpoint: function(e) {
                return e.fromBreakpoint
            },
            untilBreakpoint: function(e) {
                return e.untilBreakpoint
            },
            isBreakpointFrom: function(e) {
                return function(t) {
                    return e.windowWidth >= t
                }
            },
            isBreakpointUntil: function(e) {
                return function(t) {
                    return e.windowWidth < t
                }
            },
            breakpointList: function(e) {
                var t = [];
                for (var a in Oa["BREAKPOINTS"])
                    t.push({
                        name: a,
                        value: Oa["BREAKPOINTS"][a]
                    });
                return t
            },
            isMobile: function(e, t) {
                return !t.isBreakpointFrom(Oa["BREAKPOINTS"].tablet)
            }
        }, Da = {
            update: function(e) {
                e.commit;
                var t = e.dispatch
                  , a = e.getters;
                t("setWindowWidth", window.innerWidth);
                var o = 0
                  , n = a.windowWidth
                  , r = a.breakpointList
                  , i = a.fromBreakpoint
                  , s = a.untilBreakpoint
                  , c = ""
                  , u = 0;
                for (c = r[0] ? r[0].name : "",
                u = r[0] ? r[0].value : 0,
                o = 0; o < r.length; o++) {
                    if (n < r[o].value)
                        break;
                    c = r[o].name,
                    u = r[o].value
                }
                for (i !== c && (t("setFromBreakpointValue", u),
                t("setFromBreakpoint", c)),
                o = 0; o < r.length; o++)
                    if (c = r[o].name,
                    u = r[o].value,
                    n < u)
                        break;
                s !== c && (t("setUntilBreakpointValue", u),
                t("setUntilBreakpoint", c))
            },
            setWindowWidth: function(e, t) {
                var a = e.commit;
                a(H, t)
            },
            setFromBreakpointValue: function(e, t) {
                var a = e.commit;
                a(j, t)
            },
            setUntilBreakpointValue: function(e, t) {
                var a = e.commit;
                a(F, t)
            },
            setFromBreakpoint: function(e, t) {
                var a = e.commit;
                a(G, t)
            },
            setUntilBreakpoint: function(e, t) {
                var a = e.commit;
                a(Y, t)
            }
        }, Ba = (n = {},
        Object(E["a"])(n, H, (function(e, t) {
            e.windowWidth = t
        }
        )),
        Object(E["a"])(n, j, (function(e, t) {
            e.fromBreakpointValue = t
        }
        )),
        Object(E["a"])(n, F, (function(e, t) {
            e.untilBreakpointValue = t
        }
        )),
        Object(E["a"])(n, G, (function(e, t) {
            e.fromBreakpoint = t
        }
        )),
        Object(E["a"])(n, Y, (function(e, t) {
            e.untilBreakpoint = t
        }
        )),
        n), Ua = {
            namespaced: !0,
            state: Na,
            getters: ka,
            actions: Da,
            mutations: Ba
        }, Ma = (a("4e82"),
        a("caad"),
        a("2532"),
        a("81d7")), xa = a("7b87"), $a = a("ebe3"), Ha = a("8c77"), ja = [A["DEFAULT_LANG"]], Fa = {
            lang: A["DEFAULT_LANG"],
            tos: Object(E["a"])({}, A["DEFAULT_LANG"], Ha["default"])
        }, Ga = {
            lang: function(e) {
                return e.lang
            },
            tos: function(e, t) {
                return e.tos[t.lang]
            },
            gameName: function(e) {
                return function(e) {
                    return Ma["a"].t("gen_gam_" + e)
                }
            },
            gameNameShort: function(e) {
                return function(e) {
                    return Ma["a"].t("gen_gam_sh_" + e)
                }
            },
            platformName: function(e) {
                return function(e) {
                    switch (e) {
                    case A["PLATFORM_TYPE_TWITCH"]:
                        return Ma["a"].t("gen_plat_tw");
                    case A["PLATFORM_TYPE_YOUTUBE"]:
                        return Ma["a"].t("gen_plat_yt");
                    default:
                        return ""
                    }
                }
            },
            countriesOptions: function(e) {
                var t = [];
                for (var a in xa)
                    t.push({
                        label: xa[a],
                        value: a
                    });
                return t = t.sort((function(e, t) {
                    return e.label < t.label ? -1 : e.label > t.label ? 1 : 0
                }
                )),
                t
            },
            languagesOptions: function(e) {
                var t = [];
                for (var a in $a)
                    t.push({
                        label: $a[a].name,
                        value: a
                    });
                return t = t.sort((function(e, t) {
                    return e.label < t.label ? -1 : e.label > t.label ? 1 : 0
                }
                )),
                t
            },
            genderName: function(e) {
                return function(e) {
                    switch (e) {
                    case A["GENDER_MALE"]:
                        return Ma["a"].t("gen_male");
                    case A["GENDER_FEMALE"]:
                        return Ma["a"].t("gen_female");
                    default:
                        return ""
                    }
                }
            }
        }, Ya = {
            setLanguage: function(e, t) {
                var o = e.commit;
                return Ma["a"].locale !== t ? ja.includes(t) ? (o(V, t),
                Promise.resolve(t)) : a("cd69")("./" + t).then((function(e) {
                    return Ma["a"].setLocaleMessage(t, e.default[t]),
                    ja.push(t),
                    a("ec80")("./tos_" + t)
                }
                )).then((function(e) {
                    return o(W, {
                        lang: t,
                        tos: e.default
                    }),
                    o(V, t),
                    Promise.resolve(t)
                }
                )).catch((function() {}
                )) : Promise.resolve(t)
            }
        }, Va = (r = {},
        Object(E["a"])(r, V, (function(e, t) {
            e.lang = t,
            Ma["a"].locale = t,
            document.querySelector("html").setAttribute("lang", t)
        }
        )),
        Object(E["a"])(r, W, (function(e, t) {
            var a = t.lang
              , o = t.tos;
            e.tos[a] = o
        }
        )),
        r), Wa = {
            namespaced: !0,
            state: Fa,
            getters: Ga,
            actions: Ya,
            mutations: Va
        }, qa = a("5af4"), Ka = {
            login: function(e, t) {
                e.state;
                var a = Object(qa["a"])();
                window.localStorage.setItem("loginState", a);
                var o = t || "/";
                window.localStorage.setItem("loginRedirect", o);
                var n = A["LOGIN_URL"] + "&redirect_uri=" + A["APP_URL"] + A["AUTHENTICATE_URL"] + "&state=" + encodeURIComponent(a)
                  , r = (screen.width - 500) / 2
                  , i = (screen.height - 728) / 2
                  , s = window.open(n, "login", "location=no, menubar=no, resizable=no, width=500, height=728, top=" + i + ", left=" + r);
                s ? (s.moveTo(r, i),
                s.focus()) : console.log("Pop-up was blocked")
            }
        }, za = {
            namespaced: !0,
            actions: Ka
        }, Ja = a("5530"), Za = (a("e9c4"),
        a("2909")), Xa = a("53ca"), Qa = a("c0c4"), eo = a.n(Qa), to = function e(t) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
              , n = Array.isArray(t)
              , r = "object" === Object(Xa["a"])(t) && null !== t
              , i = "string" === typeof t
              , s = t;
            if (i)
                s = eo.a.sanitize(t, a);
            else if (n) {
                for (var c = Object(Za["a"])(t), u = 0; u < c.length; u++)
                    c[u] = e(c[u], a);
                s = c
            } else if (r) {
                var l = Object(Ja["a"])({}, t);
                for (var d in l) {
                    var _ = -1 === o.indexOf(d);
                    _ && (l[d] = e(l[d], a))
                }
                s = l
            }
            return s
        }, ao = a("47b7"), oo = a("bee2"), no = a("d4ec"), ro = Object(oo["a"])((function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object(no["a"])(this, e),
            this.id = void 0 !== t.id ? t.id : "",
            this.token = void 0 !== t.token ? t.token : "",
            this.username = void 0 !== t.username ? t.username : "",
            this.firstName = void 0 !== t.firstName ? t.firstName : "",
            this.lastName = void 0 !== t.lastName ? t.lastName : "",
            this.email = void 0 !== t.email ? t.email : "",
            this.lang = void 0 !== t.lang ? t.lang : "",
            this.loc = void 0 !== t.loc ? t.loc : "",
            this.games = void 0 !== t.games ? t.games : [],
            this.applicationStatus = void 0 !== t.applicationStatus ? t.applicationStatus : "",
            this.paypalEmail = void 0 !== t.paypalEmail ? t.paypalEmail : "",
            this.paypalConnected = void 0 !== t.paypalConnected && t.paypalConnected,
            this.boostStatus = void 0 !== t.boostStatus ? t.boostStatus : "",
            this.tier = void 0 !== t.tier ? t.tier : 0,
            this.enteringTier = void 0 !== t.enteringTier ? t.enteringTier : 0,
            this.blocked = void 0 !== t.blocked && t.blocked,
            this.upgradeStatus = void 0 !== t.upgradeStatus ? t.upgradeStatus : "",
            this.youtubeConnected = void 0 !== t.youtubeConnected && t.youtubeConnected,
            this.twitchConnected = void 0 !== t.twitchConnected && t.twitchConnected,
            this.totalSubscribers = void 0 !== t.totalSubscribers ? t.totalSubscribers : 0,
            this.totalVideos = void 0 !== t.totalVideos ? t.totalVideos : 0,
            this.totalViews = void 0 !== t.totalViews ? t.totalViews : 0,
            this.boostEnabled = void 0 !== t.boostEnabled && t.boostEnabled,
            this.applicationCooldownLeft = void 0 !== t.applicationCooldownLeft ? t.applicationCooldownLeft : 0,
            this.feedFilter = void 0 !== t.feedFilter ? t.feedFilter : [],
            this.primaryGame = void 0 !== t.primaryGame ? t.primaryGame : "",
            this.timeUntilPrimaryGameChange = void 0 !== t.timeUntilPrimaryGameChange ? t.timeUntilPrimaryGameChange : 0,
            this.primaryGameChangedTimestamp = void 0 !== t.primaryGameChangedTimestamp ? t.primaryGameChangedTimestamp : 0,
            this.discordEnabled = void 0 !== t.discordEnabled && t.discordEnabled,
            this.discordBanned = void 0 !== t.discordBanned && t.discordBanned,
            this.discordVerified = void 0 !== t.discordVerified && t.discordVerified,
            this.slackEnabled = void 0 !== t.slackEnabled && t.slackEnabled,
            this.slackConnected = void 0 !== t.slackConnected && t.slackConnected,
            this.codeOfConductCompleted = void 0 !== t.codeOfConductCompleted && t.codeOfConductCompleted,
            this.welcomeSeen = void 0 !== t.welcomeSeen && t.welcomeSeen,
            this.currentTime = void 0 !== t.currentTime ? t.currentTime : Date.now(),
            this.isDateOfBirthSet = void 0 !== t.isDateOfBirthSet && t.isDateOfBirthSet,
            this.isGenderSet = void 0 !== t.isGenderSet && t.isGenderSet,
            this.averageViews = void 0 !== t.averageViews ? t.averageViews : 0,
            this.boostHandle = void 0 !== t.boostHandle ? t.boostHandle : ""
        }
        )), io = function() {
            var e = window.localStorage.getItem("user");
            if (null !== e) {
                var t = JSON.parse(e);
                return new ro({
                    id: t.id,
                    token: t.token
                })
            }
            return new ro
        }, so = {
            authenticateStatus: null,
            logoutStatus: null,
            getStatus: null,
            savePersonalStatus: null,
            saveDateOfBirthStatus: null,
            saveGamesStatus: null,
            savePrimaryGameStatus: null,
            saveBoostStatus: null,
            saveFeedFiltersStatus: null,
            savePaypalStatus: null,
            saveCodeOfConductCompletedStatus: null,
            saveWelcomeSeenStatus: null,
            connectDiscordStatus: null,
            connectYoutubeStatus: null,
            connectTwitchStatus: null,
            disconnectDiscordStatus: null,
            checkBoostHandleStatus: null,
            user: new ro
        }, co = Object(Ja["a"])(Object(Ja["a"])({}, so), {}, {
            user: io()
        }), uo = {
            authenticateStatus: function(e) {
                return e.authenticateStatus
            },
            logoutStatus: function(e) {
                return e.logoutStatus
            },
            getStatus: function(e) {
                return e.getStatus
            },
            savePersonalStatus: function(e) {
                return e.savePersonalStatus
            },
            saveDateOfBirthStatus: function(e) {
                return e.saveDateOfBirthStatus
            },
            saveGamesStatus: function(e) {
                return e.saveGamesStatus
            },
            savePrimaryGameStatus: function(e) {
                return co.savePrimaryGameStatus
            },
            saveBoostStatus: function(e) {
                return co.saveBoostStatus
            },
            saveFeedFiltersStatus: function(e) {
                return e.saveFeedFiltersStatus
            },
            savePaypalStatus: function(e) {
                return e.savePaypalStatus
            },
            saveCodeOfConductCompletedStatus: function(e) {
                return e.saveCodeOfConductCompletedStatus
            },
            saveWelcomeSeenStatus: function(e) {
                return e.saveWelcomeSeenStatus
            },
            connectDiscordStatus: function(e) {
                return e.connectDiscordStatus
            },
            connectYoutubeStatus: function(e) {
                return e.connectYoutubeStatus
            },
            connectTwitchStatus: function(e) {
                return e.connectTwitchStatus
            },
            disconnectDiscordStatus: function(e) {
                return e.disconnectDiscordStatus
            },
            checkBoostHandleStatus: function(e) {
                return e.checkBoostHandleStatus
            },
            user: function(e) {
                return e.user
            },
            id: function(e) {
                return e.user.id
            },
            token: function(e) {
                return e.user.token
            },
            username: function(e) {
                return e.user.username
            },
            firstName: function(e) {
                return e.user.firstName
            },
            lastName: function(e) {
                return e.user.lastName
            },
            email: function(e) {
                return e.user.email
            },
            lang: function(e) {
                return e.user.lang
            },
            loc: function(e) {
                return e.user.loc
            },
            tier: function(e) {
                return e.user.tier
            },
            enteringTier: function(e) {
                return e.user.enteringTier
            },
            games: function(e) {
                return e.user.games
            },
            applicationStatus: function(e) {
                return e.user.applicationStatus
            },
            boostStatus: function(e) {
                return e.user.boostStatus
            },
            blocked: function(e) {
                return e.user.blocked
            },
            paypalConnected: function(e) {
                return e.user.paypalConnected
            },
            paypalEmail: function(e) {
                return e.user.paypalEmail
            },
            youtubeConnected: function(e) {
                return e.user.youtubeConnected
            },
            twitchConnected: function(e) {
                return e.user.twitchConnected
            },
            totalSubscribers: function(e) {
                return e.user.totalSubscribers
            },
            totalVideos: function(e) {
                return e.user.totalVideos
            },
            totalViews: function(e) {
                return e.user.totalViews
            },
            averageViews: function(e) {
                return Math.floor(e.user.averageViews)
            },
            boostEnabled: function(e) {
                return e.user.boostEnabled
            },
            applicationCooldownLeft: function(e) {
                return e.user.applicationCooldownLeft
            },
            boostHandle: function(e) {
                return e.user.boostHandle
            },
            feedFilter: function(e) {
                return e.user.feedFilter
            },
            primaryGame: function(e) {
                return e.user.primaryGame
            },
            timeUntilPrimaryGameChange: function(e) {
                return e.user.timeUntilPrimaryGameChange
            },
            primaryGameChangedTimestamp: function(e) {
                return e.user.primaryGameChangedTimestamp
            },
            discordEnabled: function(e) {
                return e.user.discordEnabled
            },
            discordBanned: function(e) {
                return e.user.discordBanned
            },
            discordVerified: function(e) {
                return e.user.discordVerified
            },
            slackEnabled: function(e) {
                return e.user.slackEnabled
            },
            slackConnected: function(e) {
                return e.user.slackConnected
            },
            codeOfConductCompleted: function(e) {
                return e.user.codeOfConductCompleted
            },
            welcomeSeen: function(e) {
                return e.user.welcomeSeen
            },
            currentTime: function(e) {
                return e.user.currentTime
            },
            isDateOfBirthSet: function(e) {
                return e.user.isDateOfBirthSet
            },
            isGenderSet: function(e) {
                return e.user.isGenderSet
            },
            isApplicationStatusNone: function(e) {
                return e.user.applicationStatus === A["USER_APPLICATION_STATUS_NONE"] || "" === e.user.applicationStatus
            },
            isApplicationStatusNotReviewed: function(e) {
                return e.user.applicationStatus === A["USER_APPLICATION_STATUS_NOT_REVIEWED"]
            },
            isApplicationStatusAccepted: function(e) {
                return e.user.applicationStatus === A["USER_APPLICATION_STATUS_ACCEPTED"]
            },
            isApplicationStatusRejected: function(e) {
                return e.user.applicationStatus === A["USER_APPLICATION_STATUS_REJECTED"]
            },
            isBoostStatusNone: function(e) {
                return e.user.boostStatus === A["USER_BOOST_STATUS_NONE"] || "" === e.user.boostStatus
            },
            isBoostStatusNotReviewed: function(e) {
                return e.user.boostStatus === A["USER_BOOST_STATUS_NOT_REVIEWED"]
            },
            isBoostStatusAccepted: function(e) {
                return e.user.boostStatus === A["USER_BOOST_STATUS_ACCEPTED"] || e.user.boostStatus === A["USER_BOOST_STATUS_CONFIRMED"]
            },
            isBoostStatusRejected: function(e) {
                return e.user.boostStatus === A["USER_BOOST_STATUS_REJECTED"]
            },
            isUpgradeStatusNone: function(e) {
                return e.user.upgradeStatus === A["USER_UPGRADE_STATUS_NONE"] || "" === e.user.upgradeStatus
            },
            isUpgradeStatusNotReviewed: function(e) {
                return e.user.upgradeStatus === A["USER_UPGRADE_STATUS_NOT_REVIEWED"]
            },
            isUpgradeStatusAccepted: function(e) {
                return e.user.upgradeStatus === A["USER_UPGRADE_STATUS_ACCEPTED"]
            },
            isUpgradeStatusRejected: function(e) {
                return e.user.upgradeStatus === A["USER_UPGRADE_STATUS_REJECTED"]
            },
            isGenderInputRequired: function(e, t) {
                return t.isBoostStatusAccepted && !t.isGenderSet
            },
            isDateOfBirthRequired: function(e, t) {
                return t.isApplicationStatusAccepted && !t.isDateOfBirthSet
            },
            isPrimaryGameSet: function(e, t) {
                return "" !== t.primaryGame && void 0 !== t.primaryGame
            },
            isPrimaryGameRequired: function(e, t) {
                return t.games.length > 1 && !t.isPrimaryGameSet
            },
            isLoggedIn: function(e, t) {
                return "" !== t.token
            },
            isUserLoggedIn: function(e, t) {
                return function(e) {
                    return t.isLoggedIn && e === t.userId
                }
            },
            isBoostExpressUser: function(e, t) {
                return t.tier === A["TIER_LEVEL_BOOST_EXPRESS"]
            }
        }, lo = {
            login: function(e, t) {
                var a = e.dispatch;
                a("scid/login", t, {
                    root: !0
                })
            },
            authenticate: function(e, t) {
                var a, o = e.commit, n = e.dispatch;
                return o(te, A["API_STATUS_PENDING"]),
                O["a"].post("/users/login", {
                    code: t
                }).then((function(e) {
                    return a = {
                        user: {
                            id: e.data.userId,
                            userToken: e.data.token
                        }
                    },
                    o(ee, {
                        data: a
                    }),
                    n("get")
                }
                )).then((function(e) {
                    return o(ee, {
                        data: e.data
                    }),
                    n("games/get", null, {
                        root: !0
                    })
                }
                )).then((function(e) {
                    return o(te, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return o(te, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            get: function(e) {
                var t = e.commit
                  , a = e.state
                  , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    id: void 0,
                    token: void 0,
                    saveCredentialsToLocalStorage: !0
                };
                return t(ae, A["API_STATUS_PENDING"]),
                o = o || {},
                C.a.post("/UserGet", {
                    id: o.id || a.user.id,
                    token: o.token || a.user.token
                }).then((function(e) {
                    return e.data.success ? (t(ae, A["API_STATUS_SUCCESS"]),
                    t(ee, {
                        data: e.data,
                        saveCredentialsToLocalStorage: o.saveCredentialsToLocalStorage
                    }),
                    Promise.resolve(e)) : Promise.reject(e)
                }
                )).catch((function(e) {
                    return t(ae, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            save: function(e, t) {
                var a = e.commit
                  , o = e.dispatch
                  , n = t.apiVersion
                  , r = t.method
                  , i = t.endpoint
                  , s = t.data
                  , c = t.statusMutation;
                return n = void 0 !== n ? n : 1,
                r = void 0 !== r ? r : "patch",
                a(c, A["API_STATUS_PENDING"]),
                s = to(s, {
                    ALLOWED_TAGS: []
                }),
                2 === n ? O["a"][r](i, s).then((function(e) {
                    return o("get")
                }
                )).then((function(e) {
                    return a(c, A["API_STATUS_SUCCESS"]),
                    a(ee, {
                        data: e.data,
                        saveCredentialsToLocalStorage: !1
                    }),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return a(c, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                )) : C.a.post(i, Object(Ja["a"])(Object(Ja["a"])({}, s), {}, {
                    id: co.user.id,
                    token: co.user.token
                })).then((function(e) {
                    return e.data.success ? (a(c, A["API_STATUS_SUCCESS"]),
                    a(ee, {
                        data: e.data,
                        saveCredentialsToLocalStorage: !1
                    }),
                    Promise.resolve(e)) : Promise.reject(e)
                }
                )).catch((function(e) {
                    return a(c, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            savePersonal: function(e, t) {
                var a = e.dispatch;
                return a("save", {
                    apiVersion: 2,
                    endpoint: "users/me/personal",
                    data: t,
                    statusMutation: oe
                })
            },
            saveDateOfBirth: function(e, t) {
                var a = e.dispatch;
                return a("save", {
                    apiVersion: 2,
                    method: "post",
                    endpoint: "/users/me/personal/dateOfBirth",
                    data: t,
                    statusMutation: ne
                })
            },
            saveGames: function(e, t) {
                var a = e.dispatch;
                return a("save", {
                    apiVersion: 2,
                    endpoint: "users/me/games",
                    data: t,
                    statusMutation: re
                })
            },
            savePrimaryGame: function(e, t) {
                var a = e.dispatch;
                return a("save", {
                    apiVersion: 2,
                    endpoint: "users/me/games/primary",
                    data: t,
                    statusMutation: ie
                })
            },
            saveBoost: function(e, t) {
                var a = e.dispatch;
                return a("save", {
                    endpoint: "/UserUpdate",
                    data: t,
                    statusMutation: se
                })
            },
            saveFeedFilters: function(e, t) {
                var a = e.dispatch;
                return a("save", {
                    endpoint: "/UserUpdate",
                    data: {
                        feedFilter: t
                    },
                    statusMutation: ce
                }).then((function(e) {
                    a("feed/fetchPosts", null, {
                        root: !0
                    })
                }
                ))
            },
            savePaypal: function(e, t) {
                var a = e.dispatch;
                return a("save", {
                    endpoint: "/UserUpdate",
                    data: t,
                    statusMutation: ue
                })
            },
            saveCodeOfConductCompleted: function(e, t) {
                var a = e.dispatch;
                return a("save", {
                    endpoint: "/UserUpdate",
                    data: t,
                    statusMutation: le
                })
            },
            saveWelcomeSeen: function(e, t) {
                var a = e.dispatch;
                return a("save", {
                    endpoint: "/UserUpdate",
                    data: t,
                    statusMutation: de
                })
            },
            connectDiscord: function(e, t) {
                var a = e.commit
                  , o = e.dispatch
                  , n = t.code;
                return a(_e, A["API_STATUS_PENDING"]),
                O["a"].post("/users/me/discord/connect", {
                    code: n
                }).then((function(e) {
                    return o("get")
                }
                )).then((function(e) {
                    return a(_e, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return a(_e, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            disconnectDiscord: function(e) {
                var t = e.commit
                  , a = e.dispatch;
                return t(pe, A["API_STATUS_PENDING"]),
                O["a"].delete("/users/me/discord/disconnect").then((function(e) {
                    return a("get")
                }
                )).then((function(e) {
                    return t(pe, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return t(pe, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            connectYoutube: function(e, t) {
                var a = e.commit
                  , o = e.dispatch
                  , n = t.code;
                return a(me, A["API_STATUS_PENDING"]),
                O["a"].post("/users/me/youtube", {
                    code: encodeURIComponent(n)
                }).then((function(e) {
                    return o("get")
                }
                )).then((function(e) {
                    return a(me, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return a(me, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            disconnectYoutube: function(e) {
                var t = e.commit
                  , a = e.dispatch;
                return t(fe, A["API_STATUS_PENDING"]),
                O["a"].delete("/users/me/youtube").then((function(e) {
                    return a("get")
                }
                )).then((function(e) {
                    return t(fe, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return t(fe, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            connectTwitch: function(e, t) {
                var a = e.commit
                  , o = e.dispatch
                  , n = t.code;
                return a(he, A["API_STATUS_PENDING"]),
                O["a"].post("/users/me/twitch", {
                    code: n
                }).then((function(e) {
                    return o("get")
                }
                )).then((function(e) {
                    return a(he, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return a(he, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            disconnectTwitch: function(e) {
                var t = e.commit
                  , a = e.dispatch;
                return t(ge, A["API_STATUS_PENDING"]),
                O["a"].delete("/users/me/twitch").then((function(e) {
                    return a("get")
                }
                )).then((function(e) {
                    return t(ge, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return t(ge, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            checkBoostHandle: function(e, t) {
                var a = e.commit;
                return a(be, A["API_STATUS_PENDING"]),
                C.a.post("/UserCheckAffiliateName", {
                    id: co.user.id,
                    token: co.user.token,
                    affiliateName: t
                }).then((function(e) {
                    return e.data.success ? (a(be, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)) : Promise.reject(e)
                }
                )).catch((function(e) {
                    return a(be, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            logout: function(e, t) {
                var a = e.dispatch
                  , o = e.commit
                  , n = e.rootGetters
                  , r = t.redirect
                  , i = t.serverside
                  , s = function() {
                    o(Se),
                    a("clear", null, {
                        root: !0
                    }),
                    r && Aa["a"].push({
                        name: ao["HOME"].name,
                        params: {
                            lang: n["locale/lang"]
                        }
                    }).catch((function() {}
                    ))
                };
                if (i)
                    return o(ye, A["API_STATUS_PENDING"]),
                    O["a"].post("/users/logout").then((function(e) {
                        return o(ye, A["API_STATUS_SUCCESS"]),
                        s(),
                        Promise.resolve(e)
                    }
                    )).catch((function(e) {
                        return o(ye, A["API_STATUS_FAILURE"]),
                        Promise.reject(e)
                    }
                    ));
                s()
            },
            softLogout: function(e) {
                e.dispatch;
                var t = e.commit;
                t(ve)
            },
            clear: function(e) {
                var t = e.commit;
                t(Q)
            }
        }, _o = (i = {},
        Object(E["a"])(i, Q, (function(e) {
            Object.assign(e, so)
        }
        )),
        Object(E["a"])(i, ee, (function(e, t) {
            var a = t.data
              , o = t.saveCredentialsToLocalStorage
              , n = void 0 === o || o
              , r = {}
              , i = void 0 !== a.newToken && null !== a.newToken && "" !== a.newToken;
            if (r.token = i ? a.newToken : void 0 !== a.user.userToken ? a.user.userToken : e.user.token,
            r.id = void 0 !== a.user.id ? a.user.id : e.user.id,
            r.username = void 0 !== a.user.username ? a.user.username : "",
            r.firstName = void 0 !== a.user.firstName ? a.user.firstName : "",
            r.lastName = void 0 !== a.user.lastName ? a.user.lastName : "",
            r.email = void 0 !== a.user.email ? a.user.email : "",
            r.lang = void 0 !== a.user.lang ? a.user.lang : "",
            r.loc = void 0 !== a.user.loc ? a.user.loc : "",
            r.applicationStatus = void 0 !== a.user.applicationStatus ? a.user.applicationStatus : "",
            r.paypalEmail = void 0 !== a.user.paypalEmail ? a.user.paypalEmail : "",
            r.paypalConnected = void 0 !== a.user.paypalConnected && a.user.paypalConnected,
            r.games = void 0 !== a.user.games ? a.user.games : [],
            r.boostStatus = void 0 !== a.user.affiliateStatus ? a.user.affiliateStatus : "",
            r.tier = void 0 !== a.user.tier ? a.user.tier : "",
            r.enteringTier = void 0 !== a.user.enteringTier ? a.user.enteringTier : 1,
            r.blocked = void 0 !== a.user.blocked && a.user.blocked,
            r.upgradeStatus = void 0 !== a.user.upgradeStatus ? a.user.upgradeStatus : "",
            r.youtubeConnected = void 0 !== a.user.youtubeConnected && a.user.youtubeConnected,
            r.twitchConnected = void 0 !== a.user.twitchConnected && a.user.twitchConnected,
            r.totalSubscribers = void 0 !== a.user.totalSubscribers ? a.user.totalSubscribers : 0,
            r.totalVideos = void 0 !== a.user.totalVideos ? a.user.totalVideos : 0,
            r.totalViews = void 0 !== a.user.totalViews ? a.user.totalViews : 0,
            r.boostEnabled = void 0 !== a.user.boostEnabled && a.user.boostEnabled,
            r.applicationCooldownLeft = void 0 !== a.user.applicationCooldownLeft ? a.user.applicationCooldownLeft : 0,
            r.boostHandle = void 0 !== a.user.affiliateName ? a.user.affiliateName : "",
            r.feedFilter = void 0 !== a.user.feedFilter ? a.user.feedFilter : [],
            r.primaryGame = void 0 !== a.user.primaryGame ? a.user.primaryGame : "",
            r.timeUntilPrimaryGameChange = void 0 !== a.user.timeUntilPrimaryGameChange ? a.user.timeUntilPrimaryGameChange : 0,
            r.primaryGameChangedTimestamp = void 0 !== a.user.primaryGameChangedTimestamp ? a.user.primaryGameChangedTimestamp : 0,
            r.discordEnabled = void 0 !== a.user.discordEnabled && a.user.discordEnabled,
            r.discordBanned = void 0 !== a.user.discordBanned && a.user.discordBanned,
            r.discordVerified = void 0 !== a.user.discordVerified && a.user.discordVerified,
            r.slackEnabled = void 0 !== a.user.slackEnabled && a.user.slackEnabled,
            r.slackConnected = void 0 !== a.user.slackConnected && a.user.slackConnected,
            r.codeOfConductCompleted = void 0 !== a.user.codeOfConductCompleted && a.user.codeOfConductCompleted,
            r.welcomeSeen = void 0 !== a.user.welcomeSeen && a.user.welcomeSeen,
            r.currentTime = void 0 !== a.user.currentTime ? a.user.currentTime : Date.now(),
            r.isDateOfBirthSet = void 0 !== a.user.isDateOfBirthSet && a.user.isDateOfBirthSet,
            r.isGenderSet = void 0 !== a.user.isGenderSet && a.user.isGenderSet,
            r.averageViews = void 0 !== a.user.averageViews ? a.user.averageViews : 0,
            r = Object(Ja["a"])(Object(Ja["a"])({}, e.user), r),
            e.user = r,
            n) {
                var s = {
                    id: r.id,
                    token: r.token
                };
                window.localStorage.setItem("user", JSON.stringify(s))
            }
            C.a.defaults.headers.common.Authorization = e.user.token
        }
        )),
        Object(E["a"])(i, te, (function(e, t) {
            e.authenticateStatus = t
        }
        )),
        Object(E["a"])(i, ae, (function(e, t) {
            e.getStatus = t
        }
        )),
        Object(E["a"])(i, oe, (function(e, t) {
            e.savePersonalStatus = t
        }
        )),
        Object(E["a"])(i, ne, (function(e, t) {
            e.saveDateOfBirthStatus = t
        }
        )),
        Object(E["a"])(i, re, (function(e, t) {
            e.saveGamesStatus = t
        }
        )),
        Object(E["a"])(i, ie, (function(e, t) {
            e.savePrimaryGameStatus = t
        }
        )),
        Object(E["a"])(i, se, (function(e, t) {
            e.saveBoostStatus = t
        }
        )),
        Object(E["a"])(i, ce, (function(e, t) {
            e.saveFeedFiltersStatus = t
        }
        )),
        Object(E["a"])(i, ue, (function(e, t) {
            e.savePaypalStatus = t
        }
        )),
        Object(E["a"])(i, le, (function(e, t) {
            e.saveCodeOfConductCompletedStatus = t
        }
        )),
        Object(E["a"])(i, de, (function(e, t) {
            e.saveWelcomeSeenStatus = t
        }
        )),
        Object(E["a"])(i, _e, (function(e, t) {
            e.connectDiscordStatus = t
        }
        )),
        Object(E["a"])(i, pe, (function(e, t) {
            e.disconnectDiscordStatus = t
        }
        )),
        Object(E["a"])(i, me, (function(e, t) {
            e.connectYoutubeStatus = t
        }
        )),
        Object(E["a"])(i, fe, (function(e, t) {
            e.disconnectYoutubeStatus = t
        }
        )),
        Object(E["a"])(i, he, (function(e, t) {
            e.connectTwitchStatus = t
        }
        )),
        Object(E["a"])(i, ge, (function(e, t) {
            e.disconnectTwitchStatus = t
        }
        )),
        Object(E["a"])(i, be, (function(e, t) {
            e.checkBoostHandleStatus = t
        }
        )),
        Object(E["a"])(i, ye, (function(e, t) {
            e.logoutStatus = t
        }
        )),
        Object(E["a"])(i, Se, (function(e, t) {
            window.localStorage.removeItem("user"),
            e.user = new ro,
            C.a.defaults.headers.common.Authorization = void 0
        }
        )),
        Object(E["a"])(i, ve, (function(e, t) {
            var a = e.user.username
              , o = e.user.applicationCooldownLeft;
            e.user = new ro,
            e.user.username = a,
            e.user.applicationCooldownLeft = o
        }
        )),
        i), po = {
            namespaced: !0,
            state: co,
            getters: uo,
            actions: lo,
            mutations: _o
        }, mo = (a("d81d"),
        {
            getStatus: null,
            setAcceptedStatus: null,
            enabled: !1,
            accepted: !1,
            games: [],
            cooldown: []
        }), fo = Object(Ja["a"])({}, mo), ho = {
            getStatus: function(e) {
                return e.getStatus
            },
            setAcceptedStatus: function(e) {
                return e.setAcceptedStatus
            },
            enabled: function(e) {
                return e.enabled
            },
            accepted: function(e) {
                return e.accepted
            },
            games: function(e) {
                return e.games
            },
            supportedGames: function(e, t, a, o) {
                var n = [];
                return t.games.map((function(e) {
                    o["games/getGameById"](e).hasVideoInbox && n.push(e)
                }
                )),
                n
            },
            unsupportedGames: function(e, t, a, o) {
                var n = [];
                return t.games.map((function(e) {
                    o["games/getGameById"](e).hasVideoInbox || n.push(e)
                }
                )),
                n
            },
            cooldown: function(e) {
                return e.cooldown
            }
        }, go = {
            get: function(e) {
                var t = e.commit;
                return t(Ee, A["API_STATUS_PENDING"]),
                O["a"].get("/users/me/videoInbox").then((function(e) {
                    return t(Ee, A["API_STATUS_SUCCESS"]),
                    t(Ce, e.data),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return t(Ee, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            setAccepted: function(e, t) {
                var a = e.commit
                  , o = e.dispatch
                  , n = e.rootGetters;
                return a(Te, A["API_STATUS_PENDING"]),
                C.a.post("/UserUpdate", {
                    id: n["user/id"],
                    token: n["user/token"],
                    videoInboxAccepted: t
                }).then((function(e) {
                    return e.data.success ? o("get") : Promise.reject(e)
                }
                )).then((function(e) {
                    return a(Te, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return a(Te, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            }
        }, bo = (s = {},
        Object(E["a"])(s, Ee, (function(e, t) {
            e.getStatus = t
        }
        )),
        Object(E["a"])(s, Te, (function(e, t) {
            e.setAcceptedStatus = t
        }
        )),
        Object(E["a"])(s, Ce, (function(e, t) {
            e.accepted = t.videoInboxAccepted,
            e.cooldown = t.videoInboxCooldown,
            e.enabled = t.videoInboxEnabled,
            e.games = t.videoInboxGames
        }
        )),
        s), So = {
            namespaced: !0,
            state: fo,
            getters: ho,
            actions: go,
            mutations: bo
        }, yo = a("f90c"), vo = a.n(yo), Eo = {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            lang: "",
            loc: "",
            twitter: "",
            facebook: "",
            instagram: ""
        }, To = Object(Ja["a"])({}, Eo), Co = {
            firstName: function(e) {
                return e.firstName
            },
            lastName: function(e) {
                return e.lastName
            },
            username: function(e) {
                return e.username
            },
            email: function(e) {
                return e.email
            },
            lang: function(e) {
                return e.lang
            },
            loc: function(e) {
                return e.loc
            },
            hasValidFirstName: function(e) {
                return "" !== e.firstName
            },
            hasValidLastName: function(e) {
                return "" !== e.lastName
            },
            hasValidUsername: function(e) {
                return "" !== e.username && -1 === e.username.indexOf("<") && -1 === e.username.indexOf(">")
            },
            hasValidEmail: function(e) {
                return "" === e.email || vo.a.isEmail(e.email)
            },
            hasValidLang: function(e) {
                return "" !== e.lang
            },
            hasValidLoc: function(e) {
                return "" !== e.loc
            },
            firstNameErrorMsg: function(e, t) {
                return t.hasValidFirstName ? void 0 : [Ma["a"].t("port_use_set_fn_err")]
            },
            lastNameErrorMsg: function(e, t) {
                return t.hasValidLastName ? void 0 : [Ma["a"].t("port_use_set_ln_err")]
            },
            usernameErrorMsg: function(e, t) {
                return t.hasValidUsername ? void 0 : -1 !== e.username.indexOf("<") || -1 !== e.username.indexOf(">") ? [Ma["a"].t("port_use_set_un_err_2")] : [Ma["a"].t("port_use_set_un_err")]
            },
            emailErrorMsg: function(e, t) {
                return t.hasValidEmail ? void 0 : [Ma["a"].t("port_use_set_add_err")]
            },
            langErrorMsg: function(e, t) {
                return t.hasValidLang ? void 0 : [Ma["a"].t("port_use_set_lan_err")]
            },
            locErrorMsg: function(e, t) {
                return t.hasValidLoc ? void 0 : [Ma["a"].t("port_use_set_loc_err")]
            }
        }, Oo = {
            setFirstName: function(e, t) {
                var a = e.commit;
                a(Xe, t)
            },
            setLastName: function(e, t) {
                var a = e.commit;
                a(Qe, t)
            },
            setUsername: function(e, t) {
                var a = e.commit;
                a(et, t)
            },
            setEmail: function(e, t) {
                var a = e.commit;
                a(tt, t)
            },
            setLang: function(e, t) {
                var a = e.commit;
                a(at, t)
            },
            setLoc: function(e, t) {
                var a = e.commit;
                a(ot, t)
            },
            clear: function(e) {
                var t = e.commit;
                t(Ze)
            }
        }, Ao = (c = {},
        Object(E["a"])(c, Ze, (function(e) {
            Object.assign(e, Eo)
        }
        )),
        Object(E["a"])(c, Xe, (function(e, t) {
            e.firstName = t
        }
        )),
        Object(E["a"])(c, Qe, (function(e, t) {
            e.lastName = t
        }
        )),
        Object(E["a"])(c, et, (function(e, t) {
            e.username = t
        }
        )),
        Object(E["a"])(c, tt, (function(e, t) {
            e.email = t
        }
        )),
        Object(E["a"])(c, at, (function(e, t) {
            e.lang = t
        }
        )),
        Object(E["a"])(c, ot, (function(e, t) {
            e.loc = t
        }
        )),
        c), Io = {
            namespaced: !0,
            state: To,
            getters: Co,
            actions: Oo,
            mutations: Ao
        }, wo = (a("159b"),
        a("466d"),
        a("a15b"),
        a("fb6a"),
        a("1276"),
        "https://"), Ro = "facebook.com", Po = "fb.com", Lo = "instagram.com", No = "twitter.com", ko = "youtube.com", Do = "twitch.tv", Bo = "tiktok.com", Uo = "snapchat.com", Mo = "discord.gg", xo = /^(https:\/\/)*(www\.)?(facebook|fb)\.com\/[A-Za-z0-9-._@%]+/, $o = /^(https:\/\/)*(www\.)?instagram\.com\/[A-Za-z0-9-._@%]+/, Ho = /^(https:\/\/)*(www\.)?twitter\.com\/[A-Za-z0-9-._@%]+/, jo = /^(https:\/\/)*(www\.)?youtube\.com(\/c|\/channel)?\/[A-Za-z0-9-._@%]+/, Fo = /^(https:\/\/)*(www\.)?twitch\.tv\/[A-Za-z0-9-._@%]+/, Go = /^(https:\/\/)*(www\.)?tiktok\.com\/[A-Za-z0-9-._@%]+/, Yo = /^https:\/\/(www\.)?snapchat\.com\/add\/[A-Za-z0-9-._]{3,15}/, Vo = /^(https:\/\/)*(www\.)?discord\.gg\/[A-Za-z0-9-._@%]+/, Wo = [xo, $o, Ho, jo, Fo, Go, Yo, Vo], qo = {
            getStatus: null,
            saveStatus: null,
            platforms: []
        }, Ko = Object(Ja["a"])({}, qo), zo = {
            getStatus: function(e) {
                return e.getStatus
            },
            saveStatus: function(e) {
                return e.saveStatus
            },
            platforms: function(e) {
                return e.platforms || []
            },
            validateUrl: function(e, t) {
                return function(e) {
                    if ("" === e)
                        return "";
                    var a = t.formatUrl(e)
                      , o = !0;
                    if (t.platforms.forEach((function(t) {
                        t.url !== e && t.url !== a || (o = !1)
                    }
                    )),
                    !o)
                        return Ma["a"].t("port_user_plat_addit_err_duplicate");
                    var n = "" !== t.getPlatformTypeByUrl(e);
                    if (!n)
                        return Ma["a"].t("port_user_plat_addit_err_unsupported");
                    for (var r = !1, i = 0; i < Wo.length; i++)
                        a.match(Wo[i]) && (r = !0);
                    return r ? "" : Ma["a"].t("port_user_plat_addit_err_invalid")
                }
            },
            formatUrl: function(e) {
                return function(e) {
                    var t = e;
                    -1 === e.indexOf(wo) && (t = wo + e);
                    for (var a = 0; a < Wo.length; a++)
                        if (t.match(Wo[a]))
                            return t.match(Wo[a])[0];
                    return t
                }
            },
            getPlatformTypeByUrl: function(e, t) {
                return function(e) {
                    try {
                        var a = new URL(t.formatUrl(e))
                          , o = a.hostname.split(".").slice(-2).join(".");
                        switch (o) {
                        case Ro:
                            return A["SOCIAL_PLATFORM_TYPE_FACEBOOK"];
                        case Po:
                            return A["SOCIAL_PLATFORM_TYPE_FACEBOOK"];
                        case Lo:
                            return A["SOCIAL_PLATFORM_TYPE_INSTAGRAM"];
                        case No:
                            return A["SOCIAL_PLATFORM_TYPE_TWITTER"];
                        case ko:
                            return A["SOCIAL_PLATFORM_TYPE_YOUTUBE"];
                        case Do:
                            return A["SOCIAL_PLATFORM_TYPE_TWITCH"];
                        case Bo:
                            return A["SOCIAL_PLATFORM_TYPE_TIKTOK"];
                        case Uo:
                            return A["SOCIAL_PLATFORM_TYPE_SNAPCHAT"];
                        case Mo:
                            return A["SOCIAL_PLATFORM_TYPE_DISCORD"];
                        default:
                            return ""
                        }
                    } catch (n) {
                        return ""
                    }
                }
            }
        }, Jo = {
            get: function(e) {
                var t = e.commit;
                return t(Oe, A["API_STATUS_PENDING"]),
                O["a"].get("/users/me/social").then((function(e) {
                    return t(Oe, A["API_STATUS_SUCCESS"]),
                    t(Ie, e.data.social),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return t(Oe, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            save: function(e, t) {
                var a = e.commit;
                e.dispatch;
                return a(Ae, A["API_STATUS_PENDING"]),
                O["a"].put("/users/me/social", {
                    social: t
                }).then((function(e) {
                    a(Ie, e.data.social)
                }
                )).then((function(e) {
                    return a(Ae, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return a(Ae, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            }
        }, Zo = (u = {},
        Object(E["a"])(u, Oe, (function(e, t) {
            e.getStatus = t
        }
        )),
        Object(E["a"])(u, Ae, (function(e, t) {
            e.saveStatus = t
        }
        )),
        Object(E["a"])(u, Ie, (function(e, t) {
            e.platforms = t
        }
        )),
        u), Xo = {
            namespaced: !0,
            state: Ko,
            getters: zo,
            actions: Jo,
            mutations: Zo
        }, Qo = (a("498a"),
        {
            authenticateStatus: null,
            submitStatus: null,
            connectYoutubeStatus: null,
            disconnectYoutubeStatus: null,
            connectTwitchStatus: null,
            disconnectTwitchStatus: null,
            id: "",
            token: "",
            step: 0,
            lastVisitedStep: 0,
            games: [],
            primaryGame: "",
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            lang: "",
            loc: "",
            dateOfBirth: "",
            gender: "",
            checkedNDAs: [!1, !1, !1],
            sign: "",
            displayUsername: ""
        }), en = Object(Ja["a"])({}, Qo), tn = {
            step: function(e) {
                return e.step
            },
            lastVisitedStep: function(e) {
                return e.lastVisitedStep
            },
            authenticateStatus: function(e) {
                return e.authenticateStatus
            },
            submitStatus: function(e) {
                return e.submitStatus
            },
            connectYoutubeStatus: function(e) {
                return e.connectYoutubeStatus
            },
            disconnectYoutubeStatus: function(e) {
                return e.disconnectYoutubeStatus
            },
            connectTwitchStatus: function(e) {
                return e.connectTwitchStatus
            },
            disconnectTwitchStatus: function(e) {
                return e.disconnectTwitchStatus
            },
            id: function(e) {
                return e.id
            },
            token: function(e) {
                return e.token
            },
            isIdentified: function(e, t) {
                return "" !== t.token && t.authenticateStatus === A["API_STATUS_SUCCESS"]
            },
            games: function(e) {
                return e.games
            },
            primaryGame: function(e) {
                return e.primaryGame
            },
            username: function(e) {
                return e.username
            },
            firstName: function(e) {
                return e.firstName
            },
            lastName: function(e) {
                return e.lastName
            },
            email: function(e) {
                return e.email
            },
            lang: function(e) {
                return e.lang
            },
            loc: function(e) {
                return e.loc
            },
            dateOfBirth: function(e) {
                return e.dateOfBirth
            },
            gender: function(e) {
                return e.gender
            },
            checkedNDAs: function(e) {
                return e.checkedNDAs
            },
            sign: function(e) {
                return e.sign
            },
            displayUsername: function(e) {
                return e.displayUsername
            },
            hasValidGames: function(e) {
                return e.games.length > 0 && "" !== e.primaryGame
            },
            hasValidUsername: function(e) {
                return "" !== e.username && -1 === e.username.indexOf("<") && -1 === e.username.indexOf(">")
            },
            hasValidFirstName: function(e) {
                return "" !== e.firstName
            },
            hasValidLastName: function(e) {
                return "" !== e.lastName
            },
            hasValidEmail: function(e) {
                return vo.a.isEmail(e.email)
            },
            hasValidLang: function(e) {
                return "" !== e.lang
            },
            hasValidLoc: function(e) {
                return "" !== e.loc
            },
            hasValidDateOfBirthFormat: function(e) {
                return null !== e.dateOfBirth.match(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/)
            },
            hasValidAge: function(e, t, a, o) {
                if (!t.hasValidDateOfBirthFormat)
                    return !1;
                var n = new Date(e.dateOfBirth)
                  , r = new Date(o["user/currentTime"])
                  , i = r.getFullYear()
                  , s = r.getMonth()
                  , c = r.getDate()
                  , u = n.getFullYear()
                  , l = n.getMonth()
                  , d = n.getDate()
                  , _ = i - u;
                return (l > s || l === s && d > c) && _--,
                _ >= A["USER_MIN_AGE"]
            },
            hasValidDateOfBirth: function(e, t) {
                return t.hasValidDateOfBirthFormat && t.hasValidAge
            },
            hasValidGender: function(e) {
                return "" !== e.gender
            },
            hasValidCheckedNDAs: function(e) {
                return -1 === e.checkedNDAs.indexOf(!1)
            },
            hasValidCheckedTerms: function(e) {
                return e.checkedNDAs[0]
            },
            hasValidCheckedPrivacy: function(e) {
                return e.checkedNDAs[1]
            },
            hasValidCheckedNDA: function(e) {
                return e.checkedNDAs[2]
            },
            hasValidSign: function(e) {
                var t = e.firstName + e.lastName;
                t = t.trim().replace(" ", "").toLowerCase();
                var a = e.sign.trim().replace(" ", "").toLowerCase();
                return t === a && "" !== t
            },
            gamesErrorMsg: function(e, t) {
                return 0 === e.games.length ? [Ma["a"].t("reg_acc_gam_err")] : "" === t.primaryGame ? [Ma["a"].t("reg_acc_pri_gam_err")] : void 0
            },
            usernameErrorMsg: function(e, t) {
                return t.hasValidUsername ? void 0 : -1 !== e.username.indexOf("<") || -1 !== e.username.indexOf(">") ? [Ma["a"].t("reg_acc_un_err_2")] : [Ma["a"].t("reg_acc_un_err")]
            },
            firstNameErrorMsg: function(e, t) {
                return t.hasValidFirstName ? void 0 : [Ma["a"].t("reg_acc_fn_err")]
            },
            lastNameErrorMsg: function(e, t) {
                return t.hasValidLastName ? void 0 : [Ma["a"].t("reg_acc_ln_err")]
            },
            emailErrorMsg: function(e, t) {
                return t.hasValidEmail ? void 0 : [Ma["a"].t("reg_acc_add_err")]
            },
            langErrorMsg: function(e, t) {
                return t.hasValidLang ? void 0 : [Ma["a"].t("reg_acc_lan_err")]
            },
            locErrorMsg: function(e, t) {
                return t.hasValidLoc ? void 0 : [Ma["a"].t("reg_acc_loc_err")]
            },
            dateOfBirthErrorMsg: function(e, t) {
                var a = [];
                return t.hasValidDateOfBirthFormat || a.push(Ma["a"].t("reg_acc_dab_err")),
                t.hasValidAge || a.push(Ma["a"].t("reg_acc_dab_err_2")),
                a.length > 0 ? a : void 0
            },
            genderErrorMsg: function(e, t) {
                return t.hasValidGender ? void 0 : [Ma["a"].t("reg_acc_gen_err")]
            },
            checkedNDAsErrorMsg: function(e, t) {
                return t.hasValidCheckedNDAs ? void 0 : [Ma["a"].t("reg_acc_nda_err")]
            },
            checkedTermsErrorMsg: function(e, t) {
                return t.hasValidCheckedTerms ? void 0 : [Ma["a"].t("reg_acc_term_err")]
            },
            checkedPrivacyErrorMsg: function(e, t) {
                return t.hasValidCheckedPrivacy ? void 0 : [Ma["a"].t("reg_acc_priv_err")]
            },
            checkedNDAErrorMsg: function(e, t) {
                return t.hasValidCheckedNDA ? void 0 : [Ma["a"].t("reg_acc_nda_err")]
            },
            signErrorMsg: function(e, t) {
                return t.hasValidSign ? void 0 : [Ma["a"].t("reg_acc_sign_err")]
            }
        }, an = {
            identify: function(e, t) {
                var a = e.dispatch;
                a("scid/login", t, {
                    root: !0
                })
            },
            authenticate: function(e, t) {
                var a = e.state
                  , o = e.commit
                  , n = e.dispatch;
                return o(we, A["API_STATUS_PENDING"]),
                C.a.post("/UserLoginWithSCID", {
                    code: t
                }).then((function(e) {
                    return e.data.success ? (o(Pe, {
                        id: e.data.user.id,
                        token: e.data.user.userToken
                    }),
                    n("user/get", {
                        id: a.id,
                        token: a.token,
                        saveCredentialsToLocalStorage: !1
                    }, {
                        root: !0
                    })) : Promise.reject(e)
                }
                )).then((function(e) {
                    return n("games/get", null, {
                        root: !0
                    })
                }
                )).then((function(e) {
                    return o(we, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return o(we, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            setStep: function(e, t) {
                var a = e.commit;
                a(Ne, t)
            },
            setLastVisitedStep: function(e, t) {
                var a = e.commit;
                a(ke, t)
            },
            setGames: function(e, t) {
                var a = e.commit;
                a(xe, t)
            },
            setPrimaryGame: function(e, t) {
                var a = e.commit;
                a($e, t)
            },
            setUsername: function(e, t) {
                var a = e.commit;
                a(He, t)
            },
            setFirstName: function(e, t) {
                var a = e.commit;
                a(je, t)
            },
            setLastName: function(e, t) {
                var a = e.commit;
                a(Fe, t)
            },
            setEmail: function(e, t) {
                var a = e.commit;
                a(Ge, t)
            },
            setLang: function(e, t) {
                var a = e.commit;
                a(Ye, t)
            },
            setLoc: function(e, t) {
                var a = e.commit;
                a(Ve, t)
            },
            setDateOfBirth: function(e, t) {
                var a = e.commit;
                a(We, t)
            },
            setGender: function(e, t) {
                var a = e.commit;
                a(qe, t)
            },
            setCheckedNDAs: function(e, t) {
                var a = e.commit;
                a(Ke, t)
            },
            setSign: function(e, t) {
                var a = e.commit;
                a(ze, t)
            },
            reset: function(e) {
                var t = e.commit;
                t(Je)
            },
            nextStep: function(e) {
                var t = e.state
                  , a = e.commit;
                switch (t.step) {
                case 0:
                    a(Ne, 1),
                    a(ke, 1);
                    break;
                case 1:
                    a(Ne, 2),
                    a(ke, 2);
                    break
                }
            },
            prevStep: function(e) {
                var t = e.state
                  , a = e.commit;
                switch (t.step) {
                case 1:
                    a(Ne, 0),
                    a(ke, 0);
                    break;
                case 2:
                    a(Ne, 1),
                    a(ke, 1);
                    break
                }
            },
            continue: function(e) {
                var t = e.state
                  , a = e.commit;
                a(Ne, t.lastVisitedStep),
                a(ke, t.lastVisitedStep)
            },
            restart: function(e) {
                var t = e.dispatch;
                return Promise.all([t("register/disconnectYoutube"), t("register/disconnectTwitch")]).then((function() {
                    t("reset"),
                    t("nextStep")
                }
                )).catch((function() {}
                ))
            },
            connectYoutube: function(e, t) {
                var a = e.commit
                  , o = t.code;
                return a(De, A["API_STATUS_PENDING"]),
                C.a.post("/UserAddPlatform", {
                    id: en.id,
                    token: en.token,
                    platformToken: o,
                    platform: A["PLATFORM_TYPE_YOUTUBE"],
                    disconect: 0,
                    localhost: 0
                }).then((function(e) {
                    return e.data.success ? (a(De, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)) : Promise.reject(e)
                }
                )).catch((function(e) {
                    return a(De, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            disconnectYoutube: function(e) {
                var t = e.commit;
                return t(Be, A["API_STATUS_PENDING"]),
                C.a.post("/UserAddPlatform", {
                    id: en.id,
                    token: en.token,
                    platformToken: "",
                    platform: A["PLATFORM_TYPE_YOUTUBE"],
                    disconect: 1,
                    localhost: 0
                }).then((function(e) {
                    return e.data.success ? (t(Be, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)) : Promise.reject(e)
                }
                )).catch((function(e) {
                    return t(Be, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            connectTwitch: function(e, t) {
                var a = e.commit
                  , o = t.code;
                return a(Ue, A["API_STATUS_PENDING"]),
                C.a.post("/UserAddPlatform", {
                    id: en.id,
                    token: en.token,
                    platformToken: o,
                    platform: A["PLATFORM_TYPE_TWITCH"],
                    disconect: 0,
                    localhost: 0
                }).then((function(e) {
                    return e.data.success ? (a(Ue, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)) : Promise.reject(e)
                }
                )).catch((function(e) {
                    return a(Ue, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            disconnectTwitch: function(e) {
                var t = e.commit;
                return t(Me, A["API_STATUS_PENDING"]),
                C.a.post("/UserAddPlatform", {
                    id: en.id,
                    token: en.token,
                    platformToken: "",
                    platform: A["PLATFORM_TYPE_TWITCH"],
                    disconect: 1,
                    localhost: 0
                }).then((function(e) {
                    return e.data.success ? (t(Me, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)) : Promise.reject(e)
                }
                )).catch((function(e) {
                    return t(Me, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            submit: function(e) {
                var t = e.state
                  , a = e.commit;
                a(Re, A["API_STATUS_PENDING"]);
                var o = {
                    games: t.games,
                    primaryGame: t.primaryGame,
                    username: t.username,
                    firstName: t.firstName,
                    lastName: t.lastName,
                    email: t.email,
                    lang: t.lang,
                    loc: t.loc,
                    dateOfBirth: t.dateOfBirth,
                    submitApplication: !0
                };
                return o = to(o, {
                    ALLOWED_TAGS: []
                }),
                C.a.post("/UserUpdate", Object(Ja["a"])(Object(Ja["a"])({}, o), {}, {
                    id: t.id,
                    token: t.token
                })).then((function(e) {
                    return e.data.success ? (a(Re, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)) : Promise.reject(e)
                }
                )).catch((function(e) {
                    return a(Re, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            clear: function(e) {
                var t = e.commit;
                t(Le)
            }
        }, on = (l = {},
        Object(E["a"])(l, we, (function(e, t) {
            e.authenticateStatus = t
        }
        )),
        Object(E["a"])(l, Re, (function(e, t) {
            e.submitStatus = t
        }
        )),
        Object(E["a"])(l, Pe, (function(e, t) {
            var a = t.id
              , o = t.token;
            e.id = a,
            e.token = o
        }
        )),
        Object(E["a"])(l, Le, (function(e) {
            Object.assign(e, Qo)
        }
        )),
        Object(E["a"])(l, Ne, (function(e, t) {
            e.step = t
        }
        )),
        Object(E["a"])(l, ke, (function(e, t) {
            e.lastVisitedStep = t
        }
        )),
        Object(E["a"])(l, De, (function(e, t) {
            e.connectYoutubeStatus = t
        }
        )),
        Object(E["a"])(l, Be, (function(e, t) {
            e.disconnectYoutubeStatus = t
        }
        )),
        Object(E["a"])(l, Ue, (function(e, t) {
            e.connectTwitchStatus = t
        }
        )),
        Object(E["a"])(l, Me, (function(e, t) {
            e.disconnectTwitchStatus = t
        }
        )),
        Object(E["a"])(l, xe, (function(e, t) {
            e.games = t
        }
        )),
        Object(E["a"])(l, $e, (function(e, t) {
            e.primaryGame = t
        }
        )),
        Object(E["a"])(l, He, (function(e, t) {
            e.username = t,
            e.displayUsername = t
        }
        )),
        Object(E["a"])(l, je, (function(e, t) {
            e.firstName = t
        }
        )),
        Object(E["a"])(l, Fe, (function(e, t) {
            e.lastName = t
        }
        )),
        Object(E["a"])(l, Ge, (function(e, t) {
            e.email = t
        }
        )),
        Object(E["a"])(l, Ye, (function(e, t) {
            e.lang = t
        }
        )),
        Object(E["a"])(l, Ve, (function(e, t) {
            e.loc = t
        }
        )),
        Object(E["a"])(l, We, (function(e, t) {
            e.dateOfBirth = t
        }
        )),
        Object(E["a"])(l, qe, (function(e, t) {
            e.gender = t
        }
        )),
        Object(E["a"])(l, Ke, (function(e, t) {
            e.checkedNDAs = t
        }
        )),
        Object(E["a"])(l, ze, (function(e, t) {
            e.sign = t
        }
        )),
        Object(E["a"])(l, Je, (function(e) {
            e.id = Qo.id,
            e.token = Qo.token,
            e.step = Qo.step,
            e.lastVisitedStep = Qo.lastVisitedStep,
            e.games = Qo.games,
            e.primaryGame = Qo.primaryGame,
            e.username = Qo.username,
            e.firstName = Qo.firstName,
            e.lastName = Qo.lastName,
            e.email = Qo.email,
            e.lang = Qo.lang,
            e.loc = Qo.loc,
            e.dateOfBirth = Qo.dateOfBirth,
            e.gender = Qo.gender,
            e.checkedNDAs = Qo.checkedNDAs,
            e.sign = Qo.sign
        }
        )),
        l), nn = {
            namespaced: !0,
            state: en,
            getters: tn,
            actions: an,
            mutations: on
        }, rn = (a("4de4"),
        {
            authenticateStatus: null
        }), sn = Object(Ja["a"])({}, rn), cn = {
            authenticateStatus: function(e) {
                return e.authenticateStatus
            }
        }, un = {
            renderButton: function(e, t) {
                e.commit;
                window.paypal.use(["login"], (function(e) {
                    e.render({
                        appid: A["PAYPAL_ID"],
                        authend: "live",
                        scopes: "openid profile email address",
                        containerid: t,
                        locale: "en-us",
                        buttonType: "CWP",
                        buttonSize: "lg",
                        returnurl: A["APP_URL"] + A["PAYPAL_AUTHENTICATE_URL"]
                    })
                }
                ))
            },
            authenticate: function(e, t) {
                var a = e.commit
                  , o = e.dispatch
                  , n = e.rootGetters;
                if ("undefined" !== typeof t)
                    return a(Tt, A["API_STATUS_PENDING"]),
                    C.a.post("/PaypalAuth", {
                        id: n["user/id"],
                        token: n["user/token"],
                        code: t,
                        localhost: 0
                    }).then((function(e) {
                        var t = e.data.userInfo
                          , a = {
                            paypalEmail: t.emails.filter((function(e) {
                                return e.primary
                            }
                            ))[0].value,
                            paypalConnected: !0
                        };
                        return o("user/savePaypal", a, {
                            root: !0
                        })
                    }
                    )).then((function(e) {
                        return e.data.success ? (a(Tt, A["API_STATUS_SUCCESS"]),
                        Promise.resolve(e)) : Promise.reject(e)
                    }
                    )).catch((function(e) {
                        return a(Tt, A["API_STATUS_FAILURE"]),
                        Promise.reject(e)
                    }
                    ))
            },
            clear: function(e) {
                var t = e.commit;
                t(Et)
            }
        }, ln = (d = {},
        Object(E["a"])(d, Et, (function(e) {
            Object.assign(e, rn)
        }
        )),
        Object(E["a"])(d, Tt, (function(e, t) {
            e.authenticateStatus = t
        }
        )),
        d), dn = {
            namespaced: !0,
            state: sn,
            getters: cn,
            actions: un,
            mutations: ln
        }, _n = a("1da1"), pn = (a("96cf"),
        a("00b4"),
        a("4d63"),
        a("c607"),
        a("2c3e"),
        a("25f0"),
        !1), mn = !1, fn = null, hn = {
            step: A["BOOST_SIGNUP_STEP_PAYPAL"],
            isPaypalDisconnectDialogOpen: !1,
            disconnectPaypalStatus: !1,
            handle: "",
            handleConfirmed: !1,
            handleErrorMsg: void 0,
            handleCheck: "",
            handleCheckConfirmed: !1,
            handleCheckErrorMsg: void 0,
            handleShowLoader: !1,
            personalId: null,
            personalIdConfirmed: !1,
            personalIdErrorMsg: void 0,
            gender: null,
            genderConfirmed: !1,
            genderErrorMsg: void 0,
            confirmValue: "",
            terms: !1,
            termsConfirmed: !1,
            termsErrorMsg: !1,
            submitStatus: !1,
            submitErrorMsg: void 0
        }, gn = Object(Ja["a"])({}, hn), bn = {
            hasPaypal: function(e, t, a, o) {
                return o["user/paypalConnected"]
            },
            paypalEmail: function(e, t, a, o) {
                return o["user/paypalEmail"]
            },
            hasValidHandle: function(e) {
                return e.handleConfirmed && e.handleCheckConfirmed
            },
            hasValidPersonalDetails: function(e) {
                return e.personalIdConfirmed && e.genderConfirmed
            },
            hasValidConfirmValue: function(e) {
                return e.confirmValue === Ma["a"].t("aff_signup_confirm_value")
            },
            hasValidTerms: function(e) {
                return e.termsConfirmed
            },
            isStepValid: function(e, t) {
                switch (e.step) {
                case A["BOOST_SIGNUP_STEP_PAYPAL"]:
                    return t.hasPaypal;
                case A["BOOST_SIGNUP_STEP_HANDLE"]:
                    return t.hasValidHandle;
                case A["BOOST_SIGNUP_STEP_PERSONAL_DETAILS"]:
                    return t.hasValidPersonalDetails;
                case A["BOOST_SIGNUP_STEP_CONFIRM"]:
                    return t.hasValidConfirmValue && t.hasValidTerms
                }
            },
            isPaypalStep: function(e) {
                return e.step === A["BOOST_SIGNUP_STEP_PAYPAL"]
            },
            isHandleStep: function(e) {
                return e.step === A["BOOST_SIGNUP_STEP_HANDLE"]
            },
            isPersonalDetailsStep: function(e) {
                return e.step === A["BOOST_SIGNUP_STEP_PERSONAL_DETAILS"]
            },
            isConfirmStep: function(e) {
                return e.step === A["BOOST_SIGNUP_STEP_CONFIRM"]
            },
            isSubmittingForm: function(e) {
                return e.submitStatus
            },
            hasSubmitErrorMsg: function(e) {
                return void 0 !== e.submitErrorMsg
            },
            isDisconnectingPaypal: function(e) {
                return e.disconnectPaypalStatus
            }
        }, Sn = {
            nextStep: function(e) {
                var t = e.state
                  , a = e.commit;
                switch (t.step) {
                case A["BOOST_SIGNUP_STEP_PAYPAL"]:
                    a(rt, A["BOOST_SIGNUP_STEP_HANDLE"]);
                    break;
                case A["BOOST_SIGNUP_STEP_HANDLE"]:
                    a(rt, A["BOOST_SIGNUP_STEP_PERSONAL_DETAILS"]);
                    break;
                case A["BOOST_SIGNUP_STEP_PERSONAL_DETAILS"]:
                    a(rt, A["BOOST_SIGNUP_STEP_CONFIRM"]);
                    break
                }
            },
            prevStep: function(e) {
                var t = e.state
                  , a = e.commit;
                switch (t.step) {
                case A["BOOST_SIGNUP_STEP_CONFIRM"]:
                    a(rt, A["BOOST_SIGNUP_STEP_PERSONAL_DETAILS"]);
                    break;
                case A["BOOST_SIGNUP_STEP_PERSONAL_DETAILS"]:
                    a(rt, A["BOOST_SIGNUP_STEP_HANDLE"]);
                    break;
                case A["BOOST_SIGNUP_STEP_HANDLE"]:
                    a(rt, A["BOOST_SIGNUP_STEP_PAYPAL"]);
                    break
                }
            },
            disconnectPaypal: function(e) {
                var t = e.dispatch
                  , a = e.commit;
                a(St),
                t("user/savePaypal", {
                    paypalConnected: !1,
                    paypalEmail: ""
                }, {
                    root: !0
                }).then((function(e) {
                    a(yt),
                    e.data.success && a(ct, !1)
                }
                )).catch((function() {
                    a(yt)
                }
                ))
            },
            openPaypalDisconnectDialog: function(e) {
                e.commit(ct, !0)
            },
            closePaypalDisconnectDialog: function(e) {
                e.commit(ct, !1)
            },
            changeHandle: function(e, t) {
                var a = e.commit
                  , o = e.dispatch;
                a(ut, t),
                a(ft),
                clearTimeout(fn),
                fn = setTimeout((function() {
                    o("validateHandle"),
                    o("validateHandleCheck")
                }
                ), 500)
            },
            changeHandleCheck: function(e, t) {
                var a = e.commit
                  , o = e.dispatch;
                a(_t, t),
                o("validateHandleCheck")
            },
            validateHandle: function() {
                var e = Object(_n["a"])(regeneratorRuntime.mark((function e(t) {
                    var a, o, n, r;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (a = t.commit,
                                o = t.dispatch,
                                n = t.state,
                                !mn) {
                                    e.next = 4;
                                    break
                                }
                                return pn = !0,
                                e.abrupt("return");
                            case 4:
                                if ("" !== n.handle) {
                                    e.next = 7;
                                    break
                                }
                                return a(lt, Ma["a"].t("aff_signup_handle_no_input_err")),
                                e.abrupt("return");
                            case 7:
                                if (!(n.handle.length < 3)) {
                                    e.next = 10;
                                    break
                                }
                                return a(lt, Ma["a"].t("aff_signup_handle_short_input_err")),
                                e.abrupt("return");
                            case 10:
                                if (!0 !== new RegExp(A["REGEXP_SANITIZE_BOOST_HANDLE"]).test(n.handle)) {
                                    e.next = 13;
                                    break
                                }
                                return a(lt, Ma["a"].t("aff_signup_handle_char_input_err")),
                                e.abrupt("return");
                            case 13:
                                return a(ft),
                                mn = !0,
                                e.next = 17,
                                o("user/checkBoostHandle", n.handle, {
                                    root: !0
                                }).then((function() {
                                    return Promise.resolve(!1)
                                }
                                )).catch((function() {
                                    return Promise.resolve(!0)
                                }
                                ));
                            case 17:
                                if (r = e.sent,
                                mn = !1,
                                !pn) {
                                    e.next = 24;
                                    break
                                }
                                return a(ft),
                                pn = !1,
                                o("validateHandle"),
                                e.abrupt("return");
                            case 24:
                                if (!r) {
                                    e.next = 27;
                                    break
                                }
                                return a(lt, Ma["a"].t("aff_signup_handle_taken_err")),
                                e.abrupt("return");
                            case 27:
                                a(dt),
                                o("validateHandleCheck");
                            case 29:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                function t(t) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            validateHandleCheck: function(e) {
                var t = e.commit
                  , a = e.state;
                a.handleConfirmed && "" !== a.handleCheck ? a.handleCheck === a.handle ? t(mt) : t(pt, Ma["a"].t("aff_signup_handle_no_match_err", {
                    boosthandle1: a.handleCheck,
                    boosthandle2: a.handle
                })) : t(pt)
            },
            setPersonalId: function(e, t) {
                var a = e.commit;
                a(it, t)
            },
            setGender: function(e, t) {
                var a = e.commit;
                a(st, t)
            },
            changeConfirmValue: function(e, t) {
                var a = e.commit;
                a(ht, t)
            },
            setTerms: function(e, t) {
                var a = e.commit;
                a(vt, t)
            },
            submit: function(e) {
                var t = e.dispatch
                  , a = e.state
                  , o = e.commit;
                e.rootGetters;
                o(gt),
                t("user/saveBoost", {
                    affiliateName: a.handle,
                    paypalPersonalNumber: a.personalId,
                    gender: a.gender
                }, {
                    root: !0
                }).then((function(e) {
                    e.data.success ? o(bt) : o(bt, Ma["a"].t("aff_signup_submit_err"))
                }
                )).catch((function() {
                    o(bt, Ma["a"].t("aff_signup_submit_err"))
                }
                ))
            },
            clear: function(e) {
                var t = e.commit;
                t(nt)
            }
        }, yn = (_ = {},
        Object(E["a"])(_, nt, (function(e) {
            Object.assign(e, hn)
        }
        )),
        Object(E["a"])(_, rt, (function(e, t) {
            e.step = t
        }
        )),
        Object(E["a"])(_, ut, (function(e, t) {
            e.handle = t
        }
        )),
        Object(E["a"])(_, lt, (function(e, t) {
            e.handleShowLoader = !1,
            e.handleErrorMsg = t ? [t] : void 0,
            e.handleConfirmed = !1
        }
        )),
        Object(E["a"])(_, dt, (function(e) {
            e.handleShowLoader = !1,
            e.handleErrorMsg = void 0,
            e.handleConfirmed = !0
        }
        )),
        Object(E["a"])(_, _t, (function(e, t) {
            e.handleCheck = t
        }
        )),
        Object(E["a"])(_, pt, (function(e, t) {
            e.handleCheckErrorMsg = t ? [t] : void 0,
            e.handleCheckConfirmed = !1
        }
        )),
        Object(E["a"])(_, mt, (function(e) {
            e.handleCheckErrorMsg = void 0,
            e.handleCheckConfirmed = !0
        }
        )),
        Object(E["a"])(_, ft, (function(e) {
            e.handleConfirmed = !1,
            e.handleShowLoader = !0
        }
        )),
        Object(E["a"])(_, it, (function(e, t) {
            e.personalId = t,
            "" !== t ? (e.personalIdConfirmed = !0,
            e.personalIdErrorMsg = void 0) : (e.personalIdConfirmed = !1,
            e.personalIdErrorMsg = [Ma["a"].t("aff_signup_pers_det_pnr_err")])
        }
        )),
        Object(E["a"])(_, st, (function(e, t) {
            e.gender = t,
            null !== e.gender ? (e.genderConfirmed = !0,
            e.genderErrorMsg = void 0) : (e.genderConfirmed = !1,
            e.genderErrorMsg = void 0)
        }
        )),
        Object(E["a"])(_, vt, (function(e, t) {
            e.terms = t,
            e.terms ? (e.termsConfirmed = !0,
            e.termsErrorMsg = void 0) : (e.termsConfirmed = !1,
            e.termsErrorMsg = [Ma["a"].t("aff_signup_pers_det_birthdate_err")])
        }
        )),
        Object(E["a"])(_, ct, (function(e, t) {
            e.isPaypalDisconnectDialogOpen = t
        }
        )),
        Object(E["a"])(_, ht, (function(e, t) {
            e.confirmValue = t
        }
        )),
        Object(E["a"])(_, gt, (function(e) {
            e.submitStatus = !0,
            e.submitErrorMsg = void 0
        }
        )),
        Object(E["a"])(_, bt, (function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            e.submitStatus = !1,
            e.submitErrorMsg = t
        }
        )),
        Object(E["a"])(_, St, (function(e) {
            e.disconnectPaypalStatus = !0
        }
        )),
        Object(E["a"])(_, yt, (function(e) {
            e.disconnectPaypalStatus = !1
        }
        )),
        _), vn = {
            namespaced: !0,
            state: gn,
            getters: bn,
            actions: Sn,
            mutations: yn
        }, En = (a("7db0"),
        a("9911"),
        function(e, t) {
            return e.find((function(e) {
                return e.gameType === t
            }
            ))
        }
        ), Tn = {
            games: [],
            gameLinks: [],
            gameStates: []
        }, Cn = Object(Ja["a"])({}, Tn), On = {
            games: function(e) {
                return e.games
            },
            gameStates: function(e) {
                return e.games
            },
            isGameCreatingLink: function(e) {
                return function(t) {
                    return !!En(e.gameStates, t) && En(e.gameStates, t).status === A["API_STATUS_PENDING"]
                }
            },
            getGameLink: function(e) {
                return function(t) {
                    return En(e.gameLinks, t)
                }
            },
            unsupportedGamesMessage: function(e, t, a, o) {
                var n = o["userVideoInbox/unsupportedGames"];
                if (!n)
                    return "";
                var r = ""
                  , i = 0;
                n.map((function(e) {
                    0 !== i && i !== n.length - 1 && (r += ", "),
                    n.length > 1 && i === n.length - 1 && (r += " " + Ma["a"].t("gen_and") + " "),
                    r += o["locale/gameName"](e),
                    i++
                }
                ));
                var s = n.length > 1 ? Ma["a"].t("gen_theyre") : Ma["a"].t("gen_its");
                return Ma["a"].t("vid_inbox_find_tooltip").replace("[GAMES]", r).replace("[PLURAL]", s)
            }
        }, An = {
            init: function(e) {
                var t = e.commit
                  , a = e.rootGetters
                  , o = a["games/gamesVideoInbox"].map((function(e) {
                    return e.id
                }
                ))
                  , n = a["games/gamesVideoInbox"].map((function(e) {
                    return {
                        gameType: e.id,
                        url: "",
                        expiresTimestamp: 0,
                        version: 3
                    }
                }
                ))
                  , r = a["games/gamesVideoInbox"].map((function(e) {
                    return {
                        gameType: e.id,
                        status: null,
                        error: null
                    }
                }
                ));
                t(q, {
                    games: o,
                    gameLinks: n,
                    gameStates: r
                })
            },
            createLink: function(e, t) {
                var a = e.commit
                  , o = e.rootGetters;
                return a(z, t),
                C.a.post("/VideoInbox", {
                    id: o["user/id"],
                    token: o["user/token"],
                    game: t
                }).then((function(e) {
                    var o = e.data
                      , n = o.success
                      , r = o.error_status
                      , i = o.link;
                    return !0 === n ? (a(J, {
                        gameType: t,
                        link: i
                    }),
                    Promise.resolve(e)) : (a(Z, {
                        gameType: t,
                        error: r
                    }),
                    Promise.reject(e))
                }
                )).catch((function(e) {
                    return a(Z, {
                        gameType: t,
                        error: e.message
                    }),
                    Promise.reject(e)
                }
                ))
            },
            removeLink: function(e, t) {
                var a = e.commit;
                a(X, t)
            },
            clear: function(e) {
                var t = e.commit;
                t(K)
            }
        }, In = (p = {},
        Object(E["a"])(p, q, (function(e, t) {
            var a = t.games
              , o = t.gameLinks
              , n = t.gameStates;
            e.games = a,
            e.gameLinks = o,
            e.gameStates = n
        }
        )),
        Object(E["a"])(p, K, (function(e) {
            Object.assign(e, Tn)
        }
        )),
        Object(E["a"])(p, z, (function(e, t) {
            e.gameStates = e.gameStates.map((function(e) {
                return e.gameType === t ? Object(Ja["a"])(Object(Ja["a"])({}, e), {}, {
                    status: A["API_STATUS_PENDING"],
                    error: null
                }) : e
            }
            ))
        }
        )),
        Object(E["a"])(p, J, (function(e, t) {
            e.gameLinks = e.gameLinks.map((function(e) {
                return e.gameType === t.gameType ? Object(Ja["a"])(Object(Ja["a"])({}, e), {}, {
                    url: t.link,
                    expiresTimestamp: new Date((new Date).getTime() + 9e5).getTime()
                }) : e
            }
            )),
            e.gameStates = e.gameStates.map((function(e) {
                return e.gameType === t.gameType ? Object(Ja["a"])(Object(Ja["a"])({}, e), {}, {
                    status: A["API_STATUS_SUCCESS"],
                    error: null
                }) : e
            }
            ))
        }
        )),
        Object(E["a"])(p, Z, (function(e, t) {
            e.gameStates = e.gameStates.map((function(e) {
                return e.gameType === t.gameType ? Object(Ja["a"])(Object(Ja["a"])({}, e), {}, {
                    status: A["API_STATUS_FAILURE"],
                    error: t.error
                }) : e
            }
            ))
        }
        )),
        Object(E["a"])(p, X, (function(e, t) {
            var a, o = [];
            e.gameLinks.map((function(e) {
                e.gameType === t ? (a = Object(Ja["a"])({}, e),
                a.expiresTimestamp = 0,
                a.url = "",
                o.push(a)) : o.push(e)
            }
            ))
        }
        )),
        p), wn = {
            namespaced: !0,
            state: Cn,
            getters: On,
            actions: An,
            mutations: In
        }, Rn = {}, Pn = {}, Ln = {
            initConnectYoutube: function(e) {
                e.commit;
                var t = Object(qa["a"])();
                window.localStorage.setItem("connectingPlatformState", t),
                window.localStorage.setItem("connectingPlatform", A["PLATFORM_TYPE_YOUTUBE"]);
                var a = A["YOUTUBE_LOGIN_URL"] + "&redirect_uri=" + encodeURIComponent(A["APP_URL"] + A["PLATFORM_AUTHENTICATE_URL"]) + "&state=" + encodeURIComponent(t)
                  , o = 584
                  , n = 579
                  , r = (screen.width - o) / 2
                  , i = (screen.height - n) / 2
                  , s = window.open(a, "login", "location=no, menubar=no, resizable=no, width=" + o + ", height=" + n + ", top=" + i + ", left=" + r);
                s ? (s.moveTo(r, i),
                s.focus()) : console.log("Pop-up was blocked")
            },
            initConnectTwitch: function(e) {
                e.commit;
                var t = Object(qa["a"])();
                window.localStorage.setItem("connectingPlatformState", t),
                window.localStorage.setItem("connectingPlatform", A["PLATFORM_TYPE_TWITCH"]);
                var a = A["TWITCH_LOGIN_URL"] + "&redirect_uri=" + encodeURIComponent(A["APP_URL"] + A["PLATFORM_AUTHENTICATE_URL"]) + "&state=" + encodeURIComponent(t)
                  , o = 435
                  , n = 540
                  , r = (screen.width - o) / 2
                  , i = (screen.height - n) / 2
                  , s = window.open(a, "login", "location=no, menubar=no, resizable=no, width=" + o + ", height=" + n + ", top=" + i + ", left=" + r);
                s ? (s.moveTo(r, i),
                s.focus()) : console.log("Pop-up was blocked")
            },
            initConnectDiscord: function(e) {
                e.commit,
                e.dispatch;
                var t = Object(qa["a"])();
                window.localStorage.setItem("connectingPlatformState", t),
                window.localStorage.setItem("connectingPlatform", A["PLATFORM_TYPE_DISCORD"]);
                var a = A["DISCORD_LOGIN_URL"] + "&redirect_uri=" + encodeURIComponent(A["APP_URL"] + A["PLATFORM_AUTHENTICATE_URL"]) + "&state=" + encodeURIComponent(t)
                  , o = 400
                  , n = 500
                  , r = window.open(a, "login", "location=no, menubar=no, resizable=no, width=" + o + ", height=" + n);
                r ? r.focus() : console.log("Pop-up was blocked")
            }
        }, Nn = {}, kn = {
            namespaced: !0,
            state: Rn,
            getters: Pn,
            actions: Ln,
            mutations: Nn
        }, Dn = {
            fetchStatus: null,
            markCodeOpenedStatus: null,
            errorStatus: null,
            groups: [],
            stashedGroups: []
        }, Bn = Object(Ja["a"])({}, Dn), Un = {
            groups: function(e) {
                return e.groups
            },
            codes: function(e) {
                var t = [];
                return e.groups.map((function(e) {
                    e.codes.map((function(a) {
                        a.productImage = e.productImage,
                        a.distributionMessage = e.distributionMessage,
                        a.productTitle = e.productTitle,
                        t.push(a)
                    }
                    ))
                }
                )),
                t
            },
            notOpenedCodes: function(e, t) {
                return t.codes.filter((function(e) {
                    return !e.opened
                }
                ))
            },
            isCodesEmpty: function(e, t) {
                return 0 === t.codes.length
            },
            isFetching: function(e) {
                return e.fetchStatus === A["API_STATUS_PENDING"]
            }
        }, Mn = {
            fetch: function(e) {
                var t = e.commit
                  , a = e.rootGetters;
                return t(Ot),
                C.a.post("/MerchCodesList", {
                    id: a["user/id"],
                    token: a["user/token"]
                }).then((function(e) {
                    return !0 === e.data.success ? (t(At, e.data.code_groups),
                    Promise.resolve(e)) : (t(It, e.data.error_status),
                    Promise.reject(e))
                }
                )).catch((function(e) {
                    return t(It, e.message),
                    Promise.reject(e)
                }
                ))
            },
            markCodeOpened: function(e, t) {
                var a = e.commit
                  , o = e.rootGetters
                  , n = t.id
                  , r = t.opened
                  , i = void 0 === r || r
                  , s = t.updateStore
                  , c = void 0 === s || s;
                return a(Pt, n),
                C.a.post("/MerchCodesMarkOpened", {
                    id: o["user/id"],
                    token: o["user/token"],
                    codeId: n,
                    opened: i
                }).then((function(e) {
                    return !0 === e.data.success ? (a(Lt, {
                        id: n,
                        groups: e.data.code_groups,
                        updateStore: c
                    }),
                    Promise.resolve(e)) : (a(Nt, {
                        id: n,
                        error: e.data.error_status,
                        updateStore: c
                    }),
                    Promise.reject(e))
                }
                )).catch((function(e) {
                    return a(Nt, {
                        id: n,
                        error: e.message
                    }),
                    Promise.reject(e)
                }
                ))
            },
            resetGroups: function(e) {
                var t = e.commit;
                t(wt)
            },
            setStashedGroups: function(e) {
                var t = e.commit;
                t(Rt)
            },
            clear: function(e) {
                var t = e.commit;
                t(Ct)
            }
        }, xn = (m = {},
        Object(E["a"])(m, Ct, (function(e) {
            Object.assign(e, Dn)
        }
        )),
        Object(E["a"])(m, Ot, (function(e) {
            e.fetchStatus = A["API_STATUS_PENDING"],
            e.errorStatus = null
        }
        )),
        Object(E["a"])(m, At, (function(e, t) {
            e.fetchStatus = A["API_STATUS_SUCCESS"],
            e.groups = t,
            e.stashedGroups = t
        }
        )),
        Object(E["a"])(m, It, (function(e, t) {
            e.fetchStatus = A["API_STATUS_FAILURE"],
            e.errorStatus = t
        }
        )),
        Object(E["a"])(m, Pt, (function(e, t) {
            e.markCodeOpenedStatus = A["API_STATUS_PENDING"],
            e.errorStatus = null
        }
        )),
        Object(E["a"])(m, Lt, (function(e, t) {
            e.markCodeOpenedStatus = A["API_STATUS_SUCCESS"],
            t.updateStore ? e.groups = t.groups : e.stashedGroups = t.groups
        }
        )),
        Object(E["a"])(m, Nt, (function(e, t) {
            e.markCodeOpenedStatus = A["API_STATUS_FAILURE"],
            e.errorStatus = t.error
        }
        )),
        Object(E["a"])(m, wt, (function(e) {
            e.groups = []
        }
        )),
        Object(E["a"])(m, Rt, (function(e) {
            e.groups = e.stashedGroups
        }
        )),
        m), $n = {
            namespaced: !0,
            state: Bn,
            getters: Un,
            actions: Mn,
            mutations: xn
        }, Hn = (a("c740"),
        a("99af"),
        {
            fetchStatus: null,
            errorStatus: null,
            posts: [],
            page: 0,
            perPage: 6,
            total: 0,
            post: void 0,
            showFilterDialog: !1
        }), jn = Object(Ja["a"])({}, Hn), Fn = {
            games: function(e, t, a, o) {
                return o["user/feedFilter"]
            },
            showFilterDialog: function(e) {
                return e.showFilterDialog
            },
            isFetching: function(e) {
                return e.fetchStatus === A["API_STATUS_PENDING"]
            },
            isFetchingPost: function(e, t) {
                return t.isFetching && void 0 === e.post
            },
            isFetchingPosts: function(e, t) {
                return t.isFetching && e.posts === [] && 0 === e.page
            },
            featuredPost: function(e) {
                return e.posts.length > 0 ? e.posts[0] : void 0
            },
            hasFeaturedPost: function(e, t) {
                return void 0 !== t.featuredPost
            },
            isMorePostsAvailable: function(e) {
                return e.posts.length < e.total
            },
            isPostsEmpty: function(e) {
                return 0 === e.posts.length
            },
            nextPost: function(e) {
                return void 0 !== e.post ? e.posts[e.posts.findIndex((function(t) {
                    return t.id === e.post.id
                }
                )) + 1] : void 0
            },
            isNextPostAvailable: function(e, t) {
                return void 0 !== t.nextPost
            },
            parsePostGames: function(e, t, a, o) {
                return function(e) {
                    switch (e) {
                    case A["FEED_POST_TYPE_GENERAL"]:
                        return Ma["a"].t("gen_sc");
                    default:
                        return o["locale/gameName"](e)
                    }
                }
            },
            getPostById: function(e) {
                return function(t) {
                    return e.posts.find((function(e) {
                        return e.id === t
                    }
                    ))
                }
            }
        }, Gn = {
            fetchPosts: function(e) {
                var t = e.commit
                  , a = e.state
                  , o = e.getters
                  , n = e.rootGetters;
                t(Dt);
                var r = o.games.length > 0 ? [].concat(Object(Za["a"])(o.games), [A["FEED_POST_TYPE_GENERAL"]]) : [A["FEED_POST_TYPE_GENERAL"]];
                return C.a.post("/PostList", {
                    userId: n["user/id"],
                    token: n["user/token"],
                    page: a.page,
                    perPage: a.perPage,
                    games: r
                }).then((function(e) {
                    var a = e.data
                      , o = a.success
                      , n = a.errorStatus
                      , r = a.posts
                      , i = a.total;
                    return !0 === o ? t(Bt, {
                        posts: r,
                        total: i
                    }) : t(Ut, n),
                    e.data
                }
                )).catch((function(e) {
                    t(Ut, e.message)
                }
                ))
            },
            fetchMorePosts: function(e) {
                var t = e.commit
                  , a = e.state
                  , o = e.getters
                  , n = e.rootGetters;
                t(Mt);
                var r = o.games.length > 0 ? [].concat(Object(Za["a"])(o.games), [A["FEED_POST_TYPE_GENERAL"]]) : [A["FEED_POST_TYPE_GENERAL"]];
                return C.a.post("/PostList", {
                    userId: n["user/id"],
                    token: n["user/token"],
                    page: a.page,
                    perPage: a.perPage,
                    games: r
                }).then((function(e) {
                    var a = e.data
                      , o = a.success
                      , n = a.errorStatus
                      , r = a.posts
                      , i = a.total;
                    return !0 === o ? t(xt, {
                        posts: r,
                        total: i
                    }) : t($t, n),
                    e.data
                }
                )).catch((function(e) {
                    t($t, e.message)
                }
                ))
            },
            fetchPost: function(e, t) {
                var a = e.commit
                  , o = (e.getters,
                e.rootGetters);
                return a(Ht),
                C.a.post("/PostGet", {
                    userId: o["user/id"],
                    token: o["user/token"],
                    id: t
                }).then((function(e) {
                    var t = e.data
                      , o = t.success
                      , n = t.errorStatus
                      , r = t.post;
                    return !0 === o ? a(jt, r) : a(Ft, n),
                    e.data
                }
                )).catch((function(e) {
                    a(Ft, e.message)
                }
                ))
            },
            init: function(e) {
                var t = e.commit;
                e.rootGetters;
                Aa["a"].currentRoute.query.presetfilters ? t(Gt, !0) : t(Gt, !1)
            },
            setShowFilterDialog: function(e, t) {
                var a = e.commit;
                a(Gt, t)
            },
            checkForNextPost: function(e) {
                var t = e.getters
                  , a = e.dispatch;
                !1 === t.isFetching && !1 === t.isNextPostAvailable && (t.isPostsEmpty ? a("fetchPosts") : t.isMorePostsAvailable && a("fetchMorePosts"))
            },
            clear: function(e) {
                var t = e.commit;
                t(kt)
            }
        }, Yn = (f = {},
        Object(E["a"])(f, kt, (function(e) {
            Object.assign(e, Hn)
        }
        )),
        Object(E["a"])(f, Dt, (function(e) {
            e.fetchStatus = A["API_STATUS_PENDING"],
            e.errorStatus = null,
            e.page = 0,
            e.posts = []
        }
        )),
        Object(E["a"])(f, Bt, (function(e, t) {
            e.posts = t.posts,
            e.total = t.total,
            e.fetchStatus = A["API_STATUS_SUCCESS"],
            e.errorStatus = null
        }
        )),
        Object(E["a"])(f, Ut, (function(e, t) {
            e.fetchStatus = A["API_STATUS_FAILURE"],
            e.errorStatus = t
        }
        )),
        Object(E["a"])(f, Mt, (function(e) {
            e.fetchStatus = A["API_STATUS_PENDING"],
            e.errorStatus = null,
            e.page += 1
        }
        )),
        Object(E["a"])(f, xt, (function(e, t) {
            t.posts.length > 0 && (e.posts = [].concat(Object(Za["a"])(e.posts), Object(Za["a"])(t.posts)),
            e.total = t.total),
            e.fetchStatus = A["API_STATUS_SUCCESS"],
            e.errorStatus = null
        }
        )),
        Object(E["a"])(f, $t, (function(e, t) {
            e.fetchStatus = A["API_STATUS_FAILURE"],
            e.errorStatus = t
        }
        )),
        Object(E["a"])(f, Ht, (function(e) {
            e.post = void 0,
            e.fetchStatus = A["API_STATUS_PENDING"],
            e.errorStatus = null
        }
        )),
        Object(E["a"])(f, jt, (function(e, t) {
            e.post = t,
            e.fetchStatus = A["API_STATUS_SUCCESS"],
            e.errorStatus = null
        }
        )),
        Object(E["a"])(f, Ft, (function(e, t) {
            e.fetchStatus = A["API_STATUS_FAILURE"],
            e.errorStatus = t
        }
        )),
        Object(E["a"])(f, Gt, (function(e, t) {
            e.showFilterDialog = t
        }
        )),
        f), Vn = {
            namespaced: !0,
            state: jn,
            getters: Fn,
            actions: Gn,
            mutations: Yn
        }, Wn = {
            getDataStatus: null,
            getPayslipStatus: null,
            data: [],
            isWelcomeScreenShown: "1" === localStorage.getItem("boostIsWelcomeScreenShown"),
            isInfoModalShown: "1" === localStorage.getItem("boostIsInfoModalShown"),
            isHandleUsedModalShown: "1" === localStorage.getItem("boostIsHandleUsedModalShown"),
            isClashMiniMessageShown: "1" === localStorage.getItem("boostIsClashMiniMessageShown")
        }, qn = Object(Ja["a"])({}, Wn), Kn = {
            data: function(e) {
                return e.data
            },
            getDataStatus: function(e) {
                return e.getDateStatus
            },
            getPayslipStatus: function(e) {
                return e.getPayslipStatus
            },
            realPayoutData: function(e, t) {
                var a, o, n = [];
                return t.data.map((function(e) {
                    for (a in o = !1,
                    e.isRealPayoutDatePerGame)
                        e.isRealPayoutDatePerGame[a] && (o = !0);
                    o && n.push(e)
                }
                )),
                n
            },
            highestPayout: function(e, t) {
                var a = 0;
                return e.data.map((function(e) {
                    e.useEstimates ? e.payoutEstimate > a && (a = e.payoutEstimate) : e.payout > a && (a = e.payout)
                }
                )),
                a
            },
            highestTotalPayout: function(e, t) {
                var a = 0;
                return e.data.map((function(e) {
                    e.useEstimates ? e.totalPayoutEstimate > a && (a = e.totalPayoutEstimate) : e.totalPayout > a && (a = e.totalPayout)
                }
                )),
                a
            },
            allTimePayout: function(e, t) {
                var a = 0;
                return t.realPayoutData.map((function(e) {
                    a += e.realPayoutValue
                }
                )),
                a
            },
            allTimePlayers: function(e, t) {
                var a = 0;
                return t.realPayoutData.map((function(e) {
                    a += e.totalPlayers
                }
                )),
                a
            },
            activeGames: function(e) {
                var t = [];
                if (e.data.length > 0)
                    for (var a in e.data[0].payoutPerGame)
                        t.push(a);
                return t
            },
            isDataEmpty: function(e) {
                return 0 === e.data.length || 1 === e.data.length && 0 === e.data[0].payout && 0 === e.data[0].payoutEstimate
            },
            isPayoutsEmpty: function(e, t) {
                return 0 === t.realPayoutData.length
            },
            isWelcomeScreenShown: function(e) {
                return e.isWelcomeScreenShown
            },
            isInfoModalShown: function(e) {
                return e.isInfoModalShown
            },
            isHandleUsedModalShown: function(e) {
                return e.isHandleUsedModalShown
            },
            isClashMiniMessageShown: function(e) {
                return e.isClashMiniMessageShown
            }
        }, zn = {
            getData: function(e) {
                var t = e.commit
                  , a = e.state
                  , o = e.rootGetters;
                if (t(Vt, A["API_STATUS_PENDING"]),
                !(a.data.length > 0))
                    return C.a.post("/BoostData", {
                        id: o["user/id"],
                        token: o["user/token"]
                    }).then((function(e) {
                        return e.data.success ? (t(Vt, A["API_STATUS_SUCCESS"]),
                        t(Wt, e.data),
                        Promise.resolve(e)) : Promise.reject(e)
                    }
                    )).catch((function(e) {
                        return t(Vt, A["API_STATUS_FAILURE"]),
                        Promise.reject(e)
                    }
                    ));
                t(Vt, A["API_STATUS_SUCCESS"])
            },
            getPayslip: function(e, t) {
                var a = e.commit
                  , o = e.rootGetters
                  , n = t.date
                  , r = t.payslip;
                return a(qt, A["API_STATUS_SUCCESS"]),
                C.a.post("/DownloadPayslip", {
                    id: o["user/id"],
                    token: o["user/token"],
                    date: n,
                    payslip: r
                }).then((function(e) {
                    return a(qt, A["API_STATUS_SUCCESS"]),
                    "data:application/pdf;base64," + e.data.pdf
                }
                )).catch((function() {
                    return a(qt, A["API_STATUS_FAILURE"]),
                    Promise.resolve("")
                }
                ))
            },
            resetData: function(e) {
                var t = e.commit;
                t(Kt, [])
            },
            setIsWelcomeScreenShown: function(e, t) {
                var a = e.commit;
                a(zt, t)
            },
            setIsInfoModalShown: function(e, t) {
                var a = e.commit;
                a(Jt, t)
            },
            setIsHandleUsedModalShown: function(e, t) {
                var a = e.commit;
                a(Zt, t)
            },
            setIsClashMiniMessageShown: function(e, t) {
                var a = e.commit;
                a(Xt, t)
            },
            clear: function(e) {
                var t = e.commit;
                t(Yt)
            }
        }, Jn = (h = {},
        Object(E["a"])(h, Yt, (function(e) {
            Object.assign(e, Wn)
        }
        )),
        Object(E["a"])(h, Vt, (function(e, t) {
            e.getDataStatus = t
        }
        )),
        Object(E["a"])(h, Wt, (function(e, t) {
            e.data = t.boostData
        }
        )),
        Object(E["a"])(h, Kt, (function(e, t) {
            e.data = t
        }
        )),
        Object(E["a"])(h, qt, (function(e, t) {
            e.getPayslipStatus = t
        }
        )),
        Object(E["a"])(h, zt, (function(e, t) {
            e.isWelcomeScreenShown = t,
            localStorage.setItem("boostIsWelcomeScreenShown", !0 === t ? "1" : "0")
        }
        )),
        Object(E["a"])(h, Jt, (function(e, t) {
            e.isInfoModalShown = t,
            localStorage.setItem("boostIsInfoModalShown", !0 === t ? "1" : "0")
        }
        )),
        Object(E["a"])(h, Zt, (function(e, t) {
            e.isHandleUsedModalShown = t,
            localStorage.setItem("boostIsHandleUsedModalShown", !0 === t ? "1" : "0")
        }
        )),
        Object(E["a"])(h, Xt, (function(e, t) {
            e.isClashMiniMessageShown = t,
            localStorage.setItem("boostIsClashMiniMessageShown", !0 === t ? "1" : "0")
        }
        )),
        h), Zn = {
            namespaced: !0,
            state: qn,
            getters: Kn,
            actions: zn,
            mutations: Jn
        }, Xn = {
            data: void 0,
            error: void 0,
            fetchStatus: void 0,
            setCompletedStatus: void 0,
            requestTierUpgradeStatus: void 0,
            setCardAnimationStatus: void 0,
            completingCardId: void 0,
            settingAnimationSeenCardId: void 0,
            notificationCardId: void 0,
            videoModalShowing: !1,
            upgradeReviewsModalShowing: !1,
            claimReviewModalShowing: !1,
            videoCardId: void 0,
            upgradeReviewsCardId: void 0,
            showNotification: !1
        }, Qn = Object(Ja["a"])({}, Xn), er = {
            isFetching: function(e) {
                return e.fetchStatus === A["API_STATUS_PENDING"]
            },
            isCompletingCard: function(e) {
                return e.setCompletedStatus === A["API_STATUS_PENDING"]
            },
            isRequestingTierUpgrade: function(e) {
                return e.requestTierUpgradeStatus === A["API_STATUS_PENDING"]
            },
            cards: function(e) {
                return void 0 !== e.data ? e.data.userCards : []
            },
            getCardById: function(e, t) {
                return function(e) {
                    return t.cards.find((function(t) {
                        return t.id === e
                    }
                    ))
                }
            },
            getCardStatusById: function(e, t) {
                return function(e) {
                    return t.getCardById(e) ? t.getCardById(e).state : ""
                }
            },
            getCardUpgradeReviews: function(e, t) {
                return function(e) {
                    return t.getCardById(e) && t.getCardById(e).upgradeReviews ? t.getCardById(e).upgradeReviews.slice().reverse() : []
                }
            },
            getCardUpgradeReviewStatus: function(e, t) {
                return function(e) {
                    return t.getCardUpgradeReviews(e)[0] && t.getCardUpgradeReviews(e)[0].reviewStatus || ""
                }
            },
            getCardUpgradeReviewMessage: function(e, t) {
                return function(e) {
                    return t.getCardUpgradeReviews(e)[0] && t.getCardUpgradeReviews(e)[0].reviewedMessage || ""
                }
            },
            getCardUpgradeReviewedBy: function(e, t) {
                return function(e) {
                    return t.getCardUpgradeReviews(e)[0] && t.getCardUpgradeReviews(e)[0].reviewedBy || ""
                }
            },
            userHasConfirmedUpgradeReview: function(e, t) {
                return function(e) {
                    return void 0 === t.getCardUpgradeReviews(e)[0] || t.getCardUpgradeReviews(e)[0].userConfirmedDate > 0
                }
            },
            isCardLocked: function(e, t) {
                return function(e) {
                    return t.getCardStatusById(e) === A["TROPHY_ROAD_CARD_STATUS_LOCKED"]
                }
            },
            isCardActive: function(e, t) {
                return function(e) {
                    return t.getCardStatusById(e) === A["TROPHY_ROAD_CARD_STATUS_ACTIVE"]
                }
            },
            isCardCompleted: function(e, t) {
                return function(e) {
                    return t.getCardStatusById(e) === A["TROPHY_ROAD_CARD_STATUS_COMPLETED"]
                }
            },
            isCardAnimationSeen: function(e, t) {
                return function(e) {
                    return t.getCardStatusById(e) === A["TROPHY_ROAD_CARD_STATUS_ANIMATION_SEEN"]
                }
            },
            isCardAnimationSeenLoading: function(e) {
                return function(t) {
                    return e.settingAnimationSeenCardId === t && e.setCardAnimationStatus === A["API_STATUS_PENDING"]
                }
            },
            hasCooldown: function(e, t) {
                return function(e) {
                    return t.getCardById(e).cooldownEnd > 0
                }
            },
            hasPendingUpgradeReview: function(e, t) {
                return function(e) {
                    return t.getCardUpgradeReviewStatus(e) === A["TROPHY_ROAD_CARD_REVIEW_STATUS_NOT_REVIEWED"]
                }
            },
            hasRejectedUpgradeReview: function(e, t) {
                return function(e) {
                    return t.getCardUpgradeReviewStatus(e) === A["TROPHY_ROAD_CARD_REVIEW_STATUS_REJECTED"]
                }
            },
            hasApprovedUpgradeReview: function(e, t) {
                return function(e) {
                    return t.getCardUpgradeReviewStatus(e) === A["TROPHY_ROAD_CARD_REVIEW_STATUS_APPROVED"]
                }
            },
            isShowingVideoModal: function(e) {
                return !0 === e.videoModalShowing
            },
            isShowingUpgradeReviewsModal: function(e) {
                return !0 === e.upgradeReviewsModalShowing
            },
            isShowingClaimReviewModal: function(e) {
                return !0 === e.claimReviewModalShowing
            },
            isShowingNotification: function(e) {
                return !0 === e.showNotification
            },
            numberOfActiveCards: function(e, t) {
                return t.cards.filter((function(e) {
                    return e.state === A["TROPHY_ROAD_CARD_STATUS_ACTIVE"]
                }
                )).length
            },
            isCompleted: function(e, t) {
                var a = [A["TROPHY_ROAD_CARD_ID_CODE_OF_CONDUCT"], A["TROPHY_ROAD_CARD_ID_SET_YOUR_FILTER"], A["TROPHY_ROAD_CARD_ID_READ_A_POST"], A["TROPHY_ROAD_CARD_ID_SAY_HI_ON_DISCORD"], A["TROPHY_ROAD_CARD_ID_CLAIM_MERCH_CODE"], A["TROPHY_ROAD_CARD_ID_UPDATE_PREVIEWS"], A["TROPHY_ROAD_CARD_ID_CREATOR_BOOST"], A["TROPHY_ROAD_CARD_ID_VIDEO_INBOX"]]
                  , o = t.cards.filter((function(e) {
                    return -1 !== a.indexOf(e.id)
                }
                ))
                  , n = o.length === a.length
                  , r = o.filter((function(e) {
                    return e.state === A["TROPHY_ROAD_CARD_STATUS_ANIMATION_SEEN"]
                }
                )).length === a.length;
                return n && r
            }
        }, tr = {
            fetch: function(e) {
                var t = e.commit
                  , a = e.rootGetters;
                return t(ea),
                C.a.post("/GetUserTrophyRoadCards", {
                    userId: a["user/id"],
                    token: a["user/token"]
                }).then((function(e) {
                    return e.data.success ? (t(ta, e.data),
                    Promise.resolve(e)) : (t(aa, e.data.error_status),
                    Promise.reject(e))
                }
                )).catch((function(e) {
                    return t(aa, e.toString()),
                    Promise.reject(e)
                }
                ))
            },
            setCardCompleted: function(e, t) {
                var a = e.commit
                  , o = e.getters
                  , n = e.rootGetters;
                return a(oa, t),
                C.a.post("/SetTrophyCardCompleted", {
                    userId: n["user/id"],
                    token: n["user/token"],
                    cardId: t
                }).then((function(e) {
                    var n = !0;
                    return e.data.success ? (a(na, e.data),
                    o.getCardById(t).type === A["TROPHY_ROAD_CARD_TYPE_TROPHY"] && (n = Aa["a"].currentRoute.name !== ao["WELCOME"].name,
                    n && a(fa, t)),
                    Promise.resolve(e)) : (a(ra, e.data.error_status),
                    Promise.reject(e))
                }
                )).catch((function(e) {
                    return a(ra, e.toString()),
                    Promise.reject(e)
                }
                ))
            },
            setCardAnimationSeen: function(e, t) {
                var a = e.commit
                  , o = e.rootGetters;
                return a(ga, t),
                a(ba, A["API_STATUS_PENDING"]),
                C.a.post("/SetTrophyCardAnimationSeen", {
                    userId: o["user/id"],
                    token: o["user/token"],
                    cardId: t
                }).then((function(e) {
                    if (e.data.success)
                        return a(ba, A["API_STATUS_SUCCESS"]),
                        a(ta, e.data),
                        Promise.resolve(e)
                }
                )).catch((function(e) {
                    return a(ba, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            requestTierUpgrade: function(e) {
                var t = e.commit
                  , a = e.rootGetters;
                return t(_a),
                C.a.post("/UserRequestUpgrade", {
                    id: a["user/id"],
                    token: a["user/token"]
                }).then((function(e) {
                    if (e.data.success)
                        return t(pa, e.data),
                        Promise.resolve(e)
                }
                )).catch((function(e) {
                    return t(ma, e.toString()),
                    Promise.reject(e)
                }
                ))
            },
            showVideoModal: function(e, t) {
                var a = e.commit;
                a(ia, t)
            },
            hideVideoModal: function(e) {
                var t = e.commit;
                t(sa)
            },
            showClaimReviewModal: function(e) {
                var t = e.commit;
                t(la)
            },
            hideClaimReviewModal: function(e) {
                var t = e.commit;
                t(da)
            },
            showUpgradeReviewsModal: function(e, t) {
                var a = e.commit;
                a(ca, t)
            },
            hideUpgradeReviewsModal: function(e) {
                var t = e.commit;
                t(ua)
            },
            showNotification: function(e, t) {
                var a = e.commit;
                a(fa, t)
            },
            hideNotification: function(e) {
                var t = e.commit;
                t(ha)
            },
            clear: function(e) {
                var t = e.commit;
                t(Qt)
            }
        }, ar = (g = {},
        Object(E["a"])(g, Qt, (function(e) {
            Object.assign(e, Xn)
        }
        )),
        Object(E["a"])(g, ea, (function(e) {
            e.fetchStatus = A["API_STATUS_PENDING"],
            e.error = void 0
        }
        )),
        Object(E["a"])(g, ta, (function(e, t) {
            e.fetchStatus = A["API_STATUS_SUCCESS"],
            e.data = t
        }
        )),
        Object(E["a"])(g, aa, (function(e, t) {
            e.fetchStatus = A["API_STATUS_FAILURE"],
            e.data = void 0,
            e.error = t
        }
        )),
        Object(E["a"])(g, oa, (function(e, t) {
            e.setCompletedStatus = A["API_STATUS_PENDING"],
            e.completingCardId = t
        }
        )),
        Object(E["a"])(g, na, (function(e, t) {
            e.setCompletedStatus = A["API_STATUS_SUCCESS"],
            e.data = t,
            e.completingCardId = void 0
        }
        )),
        Object(E["a"])(g, ra, (function(e) {
            e.setCompletedStatus = A["API_STATUS_FAILURE"],
            e.completingCardId = void 0
        }
        )),
        Object(E["a"])(g, _a, (function(e) {
            e.requestTierUpgradeStatus = A["API_STATUS_PENDING"]
        }
        )),
        Object(E["a"])(g, pa, (function(e, t) {
            e.requestTierUpgradeStatus = A["API_STATUS_SUCCESS"],
            e.data = t
        }
        )),
        Object(E["a"])(g, ma, (function(e) {
            e.requestTierUpgradeStatus = A["API_STATUS_FAILURE"]
        }
        )),
        Object(E["a"])(g, ia, (function(e, t) {
            e.videoCardId = t,
            e.videoModalShowing = !0
        }
        )),
        Object(E["a"])(g, sa, (function(e) {
            e.videoModalShowing = !1
        }
        )),
        Object(E["a"])(g, ca, (function(e, t) {
            e.upgradeReviewsCardId = t,
            e.upgradeReviewsModalShowing = !0
        }
        )),
        Object(E["a"])(g, ua, (function(e) {
            e.upgradeReviewsModalShowing = !1
        }
        )),
        Object(E["a"])(g, la, (function(e) {
            e.claimReviewModalShowing = !0
        }
        )),
        Object(E["a"])(g, da, (function(e) {
            e.claimReviewModalShowing = !1
        }
        )),
        Object(E["a"])(g, fa, (function(e, t) {
            e.notificationCardId = t,
            e.showNotification = !0
        }
        )),
        Object(E["a"])(g, ha, (function(e) {
            e.showNotification = !1
        }
        )),
        Object(E["a"])(g, ga, (function(e, t) {
            e.settingAnimationSeenCardId = t
        }
        )),
        Object(E["a"])(g, ba, (function(e, t) {
            e.setCardAnimationStatus = t
        }
        )),
        g), or = {
            namespaced: !0,
            state: Qn,
            getters: er,
            actions: tr,
            mutations: ar
        }, nr = a("437b"), rr = {
            getStatus: null,
            games: []
        }, ir = Object(Ja["a"])({}, rr), sr = {
            getStatus: function(e) {
                return e.getStatus
            },
            games: function(e, t, o, n) {
                return e.games.map((function(e) {
                    return Object(Ja["a"])(Object(Ja["a"])(Object(Ja["a"])({}, e), nr.find((function(t) {
                        return t.id === e.id
                    }
                    ))), {}, {
                        name: n["locale/gameName"](e.id),
                        shortName: n["locale/gameNameShort"](e.id),
                        logo: a("bc3f")("./game-logo-".concat(e.id, ".png")),
                        icon: a("b6ec")("./game-icon-".concat(e.id, ".jpg")),
                        videoInboxBackground: a("bacb")("./video-inbox-hero-".concat(e.id, ".jpg")),
                        videoInboxBackgroundMobile: a("26f5")("./video-inbox-hero-mobile-".concat(e.id, ".jpg")),
                        feedPostImage: a("2066")("./feed-default-".concat(e.id, ".jpg"))
                    })
                }
                ))
            },
            gamesVideoInbox: function(e) {
                return e.games.filter((function(e) {
                    return e.hasVideoInbox
                }
                ))
            },
            gamesBoost: function(e) {
                return e.games.filter((function(e) {
                    return e.hasBoost
                }
                ))
            },
            getGameById: function(e, t) {
                return function(e) {
                    return t.games.find((function(t) {
                        return t.id === e
                    }
                    ))
                }
            },
            getGamesByIds: function(e, t) {
                return function(e) {
                    return t.games.filter((function(t) {
                        return e.includes(t.id)
                    }
                    ))
                }
            }
        }, cr = {
            get: function(e) {
                var t = e.commit;
                e.dispatch;
                return t(Sa, A["API_STATUS_PENDING"]),
                ir.games.length > 0 ? (t(Sa, A["API_STATUS_SUCCESS"]),
                Promise.resolve()) : O["a"].get("/games").then((function(e) {
                    return t(Sa, A["API_STATUS_SUCCESS"]),
                    t(ya, e.data),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return t(Sa, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            }
        }, ur = (b = {},
        Object(E["a"])(b, Sa, (function(e, t) {
            e.getStatus = t
        }
        )),
        Object(E["a"])(b, ya, (function(e, t) {
            e.games = t.games
        }
        )),
        b), lr = {
            namespaced: !0,
            state: ir,
            getters: sr,
            actions: cr,
            mutations: ur
        }, dr = {
            connectStatus: null,
            email: "",
            confirmEmail: "",
            checked: !1
        }, _r = {
            connectStatus: function(e) {
                return e.connectStatus
            },
            email: function(e) {
                return e.email
            },
            confirmEmail: function(e) {
                return e.confirmEmail
            },
            checked: function(e) {
                return e.checked
            },
            hasValidEmail: function(e, t) {
                return vo.a.isEmail(t.email)
            },
            hasValidConfirmEmail: function(e, t) {
                return t.hasValidEmail && t.email === t.confirmEmail
            },
            hasValidForm: function(e, t) {
                return t.hasValidConfirmEmail && t.checked
            },
            emailErrorMsg: function(e, t) {
                return t.hasValidEmail ? void 0 : [Ma["a"].t("port_slack_error_email")]
            },
            confirmEmailErrorMsg: function(e, t) {
                return t.hasValidConfirmEmail ? void 0 : [Ma["a"].t("port_slack_error_confirm_email")]
            }
        }, pr = {
            connect: function(e, t) {
                var a = e.dispatch
                  , o = e.commit
                  , n = e.getters;
                return o(va, A["API_STATUS_PENDING"]),
                O["a"].post("/v2/slack/users", {
                    email: t || n.email
                }).then((function(e) {
                    return a("user/get", null, {
                        root: !0
                    })
                }
                )).then((function(e) {
                    return o(va, A["API_STATUS_SUCCESS"]),
                    Promise.resolve(e)
                }
                )).catch((function(e) {
                    return o(va, A["API_STATUS_FAILURE"]),
                    Promise.reject(e)
                }
                ))
            },
            setEmail: function(e, t) {
                var a = e.commit;
                a(Ea, t)
            },
            setConfirmEmail: function(e, t) {
                var a = e.commit;
                a(Ta, t)
            },
            setChecked: function(e, t) {
                var a = e.commit;
                a(Ca, t)
            }
        }, mr = (S = {},
        Object(E["a"])(S, va, (function(e, t) {
            e.connectStatus = t
        }
        )),
        Object(E["a"])(S, Ea, (function(e, t) {
            e.email = t
        }
        )),
        Object(E["a"])(S, Ta, (function(e, t) {
            e.confirmEmail = t
        }
        )),
        Object(E["a"])(S, Ca, (function(e, t) {
            e.checked = t
        }
        )),
        S), fr = {
            namespaced: !0,
            state: dr,
            getters: _r,
            actions: pr,
            mutations: mr
        };
        y["a"].use(v["a"]);
        var hr = new v["a"].Store({
            actions: {
                clear: function(e) {
                    var t = e.dispatch;
                    t("user/clear"),
                    t("boostSignup/clear"),
                    t("boost/clear"),
                    t("feed/clear"),
                    t("merchCodes/clear"),
                    t("paypal/clear"),
                    t("register/clear"),
                    t("trophyRoad/clear"),
                    t("userSettings/clear"),
                    t("videoInbox/clear")
                }
            },
            modules: {
                general: La,
                breakpoints: Ua,
                locale: Wa,
                scid: za,
                user: po,
                userVideoInbox: So,
                userSettings: Io,
                userSocialPlatforms: Xo,
                register: nn,
                paypal: dn,
                videoInbox: wn,
                boostSignup: vn,
                platforms: kn,
                merchCodes: $n,
                feed: Vn,
                boost: Zn,
                trophyRoad: or,
                games: lr,
                slack: fr
            }
        });
        window.addEventListener("resize", (function() {
            gr()
        }
        ), !1);
        var gr = function() {
            hr.dispatch("breakpoints/update")
        };
        gr();
        t["a"] = hr
    },
    "437b": function(e) {
        e.exports = JSON.parse('[{"id":"BRAWL_STARS","gradient":"linear-gradient(180deg, #2B76D7 0%, #64EAFC 100%)","edgeColor":"#CDF8FF"},{"id":"CLASH_ROYALE","gradient":"linear-gradient(180deg, #5785bd 0%, #84DDEB 100%)","edgeColor":"#D6F6FB"},{"id":"CLASH_OF_CLANS","gradient":"linear-gradient(180deg, #663D20 0%, #EFBD59 113.64%)","edgeColor":"#F2D9AA"},{"id":"HAY_DAY","gradient":"linear-gradient(180deg, #64D0FE 0%, #D7F1FE 100%)","edgeColor":"#F9FDFF"},{"id":"BOOM_BEACH","gradient":"linear-gradient(180deg, #77BAC9 0%, #B8EEF1 100%)","edgeColor":"#E9FEFF"},{"id":"EVERDALE","gradient":"linear-gradient(180deg, #ECA931 0%, #F2BD3C 100%)","edgeColor":"#FFE8B3"},{"id":"CLASH_QUEST","gradient":"radial-gradient(127.67% 127.67% at 50% 0%, #63D3FA 0%, #3586EF 100%)","edgeColor":"#AACFF4"},{"id":"CLASH_MINI","gradient":"linear-gradient(180deg, #8B51DB 0%, #F862FF 148.01%)","edgeColor":"#FCBDFF"}]')
    },
    4384: function(e, t, a) {
        "use strict";
        a("69ab")
    },
    "44eb": function(e, t, a) {
        "use strict";
        a("3118")
    },
    "468a": function(e, t, a) {
        "use strict";
        a("f252")
    },
    "479e": function(e, t, a) {
        e.exports = a.p + "img/character-poco.e8f28f44.png"
    },
    "47b7": function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, "DEFAULT", (function() {
            return i
        }
        )),
        a.d(t, "FOUR_O_FOUR", (function() {
            return s
        }
        )),
        a.d(t, "LOGIN", (function() {
            return c
        }
        )),
        a.d(t, "LOGIN_ERROR", (function() {
            return u
        }
        )),
        a.d(t, "GENERAL_ERROR", (function() {
            return l
        }
        )),
        a.d(t, "AUTHENTICATE", (function() {
            return d
        }
        )),
        a.d(t, "PAYPAL_AUTHENTICATE", (function() {
            return _
        }
        )),
        a.d(t, "PLATFORM_AUTHENTICATE", (function() {
            return p
        }
        )),
        a.d(t, "HOME", (function() {
            return m
        }
        )),
        a.d(t, "REGISTER", (function() {
            return f
        }
        )),
        a.d(t, "REGISTER_COMPLETE", (function() {
            return h
        }
        )),
        a.d(t, "WELCOME", (function() {
            return g
        }
        )),
        a.d(t, "MY_STUFF", (function() {
            return b
        }
        )),
        a.d(t, "BOOST", (function() {
            return S
        }
        )),
        a.d(t, "START", (function() {
            return y
        }
        )),
        a.d(t, "FEED", (function() {
            return v
        }
        )),
        a.d(t, "FEED_POST", (function() {
            return E
        }
        )),
        a.d(t, "USER", (function() {
            return T
        }
        )),
        a.d(t, "USER_SETTINGS", (function() {
            return C
        }
        )),
        a.d(t, "DELETE_USER", (function() {
            return O
        }
        )),
        a.d(t, "ABOUT", (function() {
            return A
        }
        )),
        a.d(t, "MY_STUFF_DISCORD", (function() {
            return I
        }
        )),
        a.d(t, "MY_STUFF_DISCORD_AUTH", (function() {
            return w
        }
        )),
        a.d(t, "MY_STUFF_SLACK", (function() {
            return R
        }
        )),
        a.d(t, "HELP_DISCORD", (function() {
            return P
        }
        )),
        a.d(t, "HELP_SLACK", (function() {
            return L
        }
        )),
        a.d(t, "BOOST_SIGNUP", (function() {
            return N
        }
        )),
        a.d(t, "TIER_UPGRADE_REQUEST", (function() {
            return k
        }
        )),
        a.d(t, "BLOCKED", (function() {
            return D
        }
        )),
        a.d(t, "MAINTENANCE", (function() {
            return B
        }
        )),
        a.d(t, "APPLICATION_STATUS", (function() {
            return U
        }
        )),
        a.d(t, "CODE_OF_CONDUCT", (function() {
            return M
        }
        )),
        a.d(t, "BOOST_PAYOUTS", (function() {
            return x
        }
        )),
        a.d(t, "TERMS_OF_SERVICE", (function() {
            return $
        }
        )),
        a.d(t, "CREATORS_TERMS", (function() {
            return H
        }
        ));
        var o = "/:lang"
          , n = "/:post"
          , r = "/:applicationStatus"
          , i = {
            path: "/",
            name: "default"
        }
          , s = {
            path: o + "/*",
            name: "four-o-four"
        }
          , c = {
            path: o + "/login",
            name: "login"
        }
          , u = {
            path: o + "/loginerror",
            name: "login-error"
        }
          , l = {
            path: o + "/generalerror",
            name: "general-error"
        }
          , d = {
            path: "/authenticate",
            name: "authenticate"
        }
          , _ = {
            path: "/paypalauthenticate",
            name: "paypal-authenticate"
        }
          , p = {
            path: "/platformauthenticate",
            name: "platform-authenticate"
        }
          , m = {
            path: o,
            name: "home"
        }
          , f = {
            path: o + "/register",
            name: "register"
        }
          , h = {
            path: o + "/register-complete",
            name: "register-complete"
        }
          , g = {
            path: o + "/welcome",
            name: "welcome"
        }
          , b = {
            path: o + "/my-stuff",
            name: "mystuff"
        }
          , S = {
            path: o + "/my-stuff/boost",
            name: "boost"
        }
          , y = {
            path: o + "/start",
            name: "start"
        }
          , v = {
            path: o + "/feed",
            name: "feed"
        }
          , E = {
            path: o + "/feed/post" + n,
            name: "feedpost"
        }
          , T = {
            path: o + "/user",
            name: "user"
        }
          , C = {
            path: o + "/user/settings",
            name: "user-settings"
        }
          , O = {
            path: o + "/user/delete",
            name: "delete-user"
        }
          , A = {
            path: o + "/about",
            name: "about"
        }
          , I = {
            path: b.path + "/discord",
            name: "mystuff-discord"
        }
          , w = {
            path: I.path + "/auth",
            name: "mystuff-discord-auth"
        }
          , R = {
            path: b.path + "/slack",
            name: "mystuff-slack"
        }
          , P = {
            path: o + "/help/discord",
            name: "help-discord"
        }
          , L = {
            path: o + "/help/slack",
            name: "help-slack"
        }
          , N = {
            path: o + "/boost-signup",
            name: "boost-signup"
        }
          , k = {
            path: o + "/tier-upgrade-request",
            name: "tier-upgrade-request"
        }
          , D = {
            path: o + "/blocked",
            name: "blocked"
        }
          , B = {
            path: o + "/maintenance",
            name: "maintenance"
        }
          , U = {
            path: o + "/application-status" + r,
            name: "application-status"
        }
          , M = {
            path: o + "/code-of-conduct",
            name: "code-of-conduct"
        }
          , x = {
            path: o + "/boost-payouts",
            name: "boost-payouts"
        }
          , $ = {
            path: o + "/terms-of-service",
            name: "terms-of-service"
        }
          , H = {
            path: o + "/creators-terms",
            name: "creators-terms"
        }
    },
    "48db": function(e, t, a) {
        e.exports = a.p + "img/game-icon-HAY_DAY.f8fbfe24.jpg"
    },
    "4ab1": function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-HAY_DAY.3d724741.jpg"
    },
    "4c84": function(e, t, a) {},
    "4e2d": function(e, t, a) {
        "use strict";
        a("fc8e")
    },
    "4ee7": function(e, t, a) {
        "use strict";
        var o = a("cffa");
        t["a"] = {
            watch: {
                isOver: function() {
                    this.animate()
                },
                isPressed: function() {
                    this.animate()
                }
            },
            methods: {
                animate: function() {
                    this.isPressed ? o["b"].to(this.$el, {
                        scale: .95,
                        duration: .1
                    }) : this.isOver ? o["b"].to(this.$el, {
                        scale: 1.05,
                        duration: .1
                    }) : o["b"].to(this.$el, {
                        scale: 1,
                        clearProps: "scale",
                        duration: .1
                    })
                }
            }
        }
    },
    5027: function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-BRAWL_STARS.5a9da966.jpg"
    },
    "50eb": function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        disabled: e.$props.disabled,
                        disabledClickable: e.$props.disabledClickable,
                        freeWidth: e.$props.freeWidth,
                        loading: e.isLoading,
                        over: e.isOver
                    },
                    expression: "{\n    'disabled': $props.disabled,\n    'disabledClickable': $props.disabledClickable,\n    'freeWidth': $props.freeWidth,\n    'loading': isLoading,\n    'over': isOver\n  }"
                }],
                ref: "bigButton",
                staticClass: "bigButton",
                on: {
                    click: e.onClick
                }
            }, [a("BaseButton", {
                attrs: {
                    to: e.$props.to,
                    href: e.$props.href,
                    target: e.$props.target,
                    freeWidth: e.$props.freeWidth
                }
            }, [a("div", {
                staticClass: "bigButton__main"
            }, [a("div", {
                staticClass: "bigButton__bg"
            }), a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["left"],
                    expression: "['left']"
                }],
                staticClass: "bigButton__icon"
            }, [e._t("iconLeft")], 2), a("p", {
                staticClass: "bigButton__label",
                domProps: {
                    textContent: e._s(e.$props.label)
                }
            }), a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["right"],
                    expression: "['right']"
                }],
                staticClass: "bigButton__icon"
            }, [e._t("iconRight")], 2), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isLoading,
                    expression: "isLoading"
                }],
                staticClass: "bigButton__loader"
            }, [a("Loader", {
                attrs: {
                    color: "#ffffff"
                }
            })], 1)])])], 1)
        }
          , n = []
          , r = (a("d3b7"),
        a("159b"),
        a("60a1"))
          , i = a("f76f")
          , s = a("22b3")
          , c = a("31b0")
          , u = a("4ee7")
          , l = {
            name: "SmallButton",
            mixins: [c["a"], u["a"]],
            components: {
                BaseButton: i["a"],
                Loader: s["a"]
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
                target: {
                    type: String,
                    default: ""
                },
                to: {
                    type: [String, Object],
                    default: ""
                },
                icon: {
                    type: String,
                    default: ""
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                disabledClickable: {
                    type: Boolean,
                    default: !1
                },
                freeWidth: {
                    type: Boolean,
                    default: !1
                },
                loaders: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    constants: r,
                    isOver: !1
                }
            },
            computed: {
                isLoading: function() {
                    var e = !1;
                    return this.$props.loaders.forEach((function(t) {
                        "pending" === t && (e = !0)
                    }
                    )),
                    e
                }
            },
            methods: {
                onClick: function(e) {
                    this.isLoading || this.$emit("click", e)
                }
            }
        }
          , d = l
          , _ = (a("3989"),
        a("2877"))
          , p = Object(_["a"])(d, o, n, !1, null, "99fbd32c", null);
        t["a"] = p.exports
    },
    "52d8": function(e, t, a) {
        e.exports = a.p + "img/game-icon-CLASH_MINI.3176d2e7.jpg"
    },
    "56d1": function(e, t, a) {},
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        a("e260"),
        a("e6cf"),
        a("cca6"),
        a("a79d");
        var o = a("2b0e")
          , n = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                attrs: {
                    id: "app"
                }
            }, [a("Shell")], 1)
        }
          , r = []
          , i = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        mobileMenu: e.generalIsMobileMenuVisible
                    },
                    expression: "{\n    'mobileMenu': generalIsMobileMenuVisible\n  }"
                }],
                staticClass: "shell"
            }, [e.generalIsHeaderVisible ? a("router-view", {
                attrs: {
                    name: "header",
                    disabled: e.generalIsHeaderDisabled
                }
            }) : e._e(), a("div", {
                staticClass: "shell__main"
            }, [e.generalShowPageLoader ? a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        hidden: !e.generalShowPageLoader
                    },
                    expression: "{ 'hidden': !generalShowPageLoader }"
                }],
                staticClass: "shell__loader"
            }, [a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        hidden: !e.generalShowPageLoader
                    },
                    expression: "{ 'hidden': !generalShowPageLoader }"
                }],
                staticClass: "shell__anim"
            }, [a("transition", {
                attrs: {
                    name: "loader-transition"
                }
            }, [e.generalShowPageLoader ? a("Loader") : e._e()], 1)], 1)]) : e._e(), a("transition", {
                attrs: {
                    mode: "out-in"
                },
                on: {
                    enter: e.enter,
                    leave: e.leave
                }
            }, [a("router-view")], 1)], 1), e.generalIsFooterVisible ? a("router-view", {
                attrs: {
                    name: "footer"
                }
            }) : e._e(), e.generalIsMobileMenuVisible ? a("router-view", {
                attrs: {
                    name: "mobileMenu"
                }
            }) : e._e(), a("RequiredInfoModal", {
                attrs: {
                    opened: e.generalIsRequiredInfoModalOpened
                },
                on: {
                    submit: e.onRequiredInfoModalSubmit
                }
            }), a("DefaultModal", {
                attrs: {
                    opened: e.generalIsCocModalOpened,
                    title: e.$t("coc_modal_tit"),
                    body: e.$t("coc_modal_bod"),
                    primaryLabel: e.$t("coc_modal_btn"),
                    hideSecondary: ""
                },
                on: {
                    clickPrimary: e.onClickPrimaryCoc
                }
            }), a("TrophyRoadNotification"), e.debug ? a("DebugPanel") : e._e()], 1)
        }
          , s = []
          , c = a("5530")
          , u = (a("d3b7"),
        a("3ca3"),
        a("ddb0"),
        a("b0c0"),
        a("2f62"))
          , l = a("cffa")
          , d = a("47b7")
          , _ = a("60a1")
          , p = a("e3e2")
          , m = a("22b3")
          , f = a("ffcf")
          , h = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("BaseModal", {
                attrs: {
                    opened: e.$props.opened
                }
            }, [a("div", {
                staticClass: "requiredInfoModal"
            }, [a("div", {
                staticClass: "requiredInfoModal__main"
            }, [a("p", {
                staticClass: "requiredInfoModal__title",
                domProps: {
                    textContent: e._s(e.title)
                }
            }), a("p", {
                staticClass: "requiredInfoModal__body",
                domProps: {
                    textContent: e._s(e.$t("gender_mod_bod"))
                }
            }), e.userIsGenderInputRequired ? a("div", {
                staticClass: "requiredInfoModal__genderOptions"
            }, [a("p", {
                staticClass: "requiredInfoModal__genderTitle",
                domProps: {
                    textContent: e._s(e.$t("gender_mod_gen"))
                }
            }), a("div", {
                staticClass: "requiredInfoModal__genderOption"
            }, [a("DefaultRadio", {
                attrs: {
                    label: e.$t("gen_male"),
                    value: e.constants.GENDER_MALE,
                    checked: e.selectedGender === e.constants.GENDER_MALE
                },
                on: {
                    input: e.onChangeGender
                }
            })], 1), a("div", {
                staticClass: "requiredInfoModal__genderOption"
            }, [a("DefaultRadio", {
                attrs: {
                    label: e.$t("gen_female"),
                    value: e.constants.GENDER_FEMALE,
                    checked: e.selectedGender === e.constants.GENDER_FEMALE
                },
                on: {
                    input: e.onChangeGender
                }
            })], 1)]) : e._e(), e.userIsDateOfBirthRequired ? a("div", {
                staticClass: "requiredInfoModal__dob"
            }, [a("YearMonthDayInput", {
                attrs: {
                    value: e.dateOfBirth,
                    currentDate: new Date(e.userCurrentTime),
                    label: e.$t("gender_mod_birthdate_lbl"),
                    tooltipTitle: e.$t("gender_mod_birthdate_tool_tit"),
                    tooltip: e.$t("gender_mod_birthdate_tool_bod"),
                    yearLabel: e.$t("port_use_set_abo_dob_year"),
                    monthLabel: e.$t("port_use_set_abo_dob_month"),
                    dayLabel: e.$t("port_use_set_abo_dob_day"),
                    yearPlaceholder: e.$t("port_use_set_abo_dob_year_ph"),
                    monthPlaceholder: e.$t("port_use_set_abo_dob_month_ph"),
                    dayPlaceholder: e.$t("port_use_set_abo_dob_day_ph"),
                    freeWidth: !0,
                    yearErrorMessage: e.$t("gen_err_dob_year"),
                    monthErrorMessage: e.$t("gen_err_dob_month"),
                    dayErrorMessage: e.$t("gen_err_dob_day"),
                    hideErrorsUntilBlur: ""
                },
                on: {
                    input: e.onInputDob,
                    validate: e.onValidateDob
                }
            })], 1) : e._e(), e.userIsPrimaryGameRequired ? a("div", {
                staticClass: "requiredInfoModal__primaryGameOptions"
            }, [a("p", {
                staticClass: "requiredInfoModal__primaryGameTitle",
                domProps: {
                    textContent: e._s(e.$t("gender_mod_pri"))
                }
            }), e._l(e.userGames, (function(t, o) {
                return a("div", {
                    key: "primary-game-option-" + o,
                    staticClass: "requiredInfoModal__primaryGameOption"
                }, [a("DefaultRadio", {
                    attrs: {
                        label: e.gameName(t),
                        value: t,
                        checked: t === e.selectedPrimaryGame
                    },
                    on: {
                        input: e.onChangePrimaryGame
                    }
                })], 1)
            }
            ))], 2) : e._e(), a("div", {
                staticClass: "requiredInfoModal__submitButton"
            }, [a("DefaultButton", {
                attrs: {
                    label: e.$t("gender_mod_btn"),
                    freeWidth: !0,
                    disabled: !e.isValid,
                    loaders: [e.userSaveBoostStatus, e.userSaveDateOfBirthStatus, e.userSavePrimaryGameStatus]
                },
                on: {
                    click: e.onClick
                }
            })], 1)])])])
        }
          , g = []
          , b = (a("ac1f"),
        a("5319"),
        a("2312"))
          , S = a("0016")
          , y = a("fd23")
          , v = a("d39b")
          , E = {
            name: "RequiredInfoModal",
            components: {
                BaseModal: b["a"],
                DefaultButton: S["a"],
                DefaultRadio: y["a"],
                YearMonthDayInput: v["a"]
            },
            data: function() {
                return {
                    constants: _,
                    selectedGender: "",
                    isDateOfBirthDirty: !1,
                    isDateOfBirthInputValid: !1,
                    dateOfBirth: "",
                    selectedPrimaryGame: ""
                }
            },
            props: {
                opened: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: Object(c["a"])(Object(c["a"])(Object(c["a"])({}, Object(u["c"])("locale", ["gameName"])), Object(u["c"])("user", {
                userCurrentTime: "currentTime",
                userSaveBoostStatus: "saveBoostStatus",
                userSaveDateOfBirthStatus: "saveDateOfBirthStatus",
                userSavePrimaryGameStatus: "savePrimaryGameStatus",
                userUsername: "username",
                userGames: "games",
                userIsGenderInputRequired: "isGenderInputRequired",
                userIsDateOfBirthRequired: "isDateOfBirthRequired",
                userIsPrimaryGameRequired: "isPrimaryGameRequired"
            })), {}, {
                title: function() {
                    return this.$t("gender_mod_tit").replace("[NAME]", this.userUsername)
                },
                isValid: function() {
                    var e = !this.userIsGenderInputRequired || "" !== this.selectedGender
                      , t = !this.userIsDateOfBirthRequired || this.isDateOfBirthInputValid
                      , a = !this.userIsPrimaryGameRequired || "" !== this.selectedPrimaryGame;
                    return e && t && a
                }
            }),
            methods: Object(c["a"])(Object(c["a"])({}, Object(u["b"])("user", {
                userSaveBoost: "saveBoost",
                userSaveDateOfBirth: "saveDateOfBirth",
                userSavePrimaryGame: "savePrimaryGame"
            })), {}, {
                onChangeGender: function(e) {
                    this.selectedGender = e
                },
                onInputDob: function(e) {
                    this.isDateOfBirthDirty = !0,
                    this.dateOfBirth = e
                },
                onValidateDob: function(e) {
                    this.isDateOfBirthInputValid = e
                },
                onChangePrimaryGame: function(e) {
                    this.selectedPrimaryGame = e
                },
                onClick: function() {
                    var e = this
                      , t = [];
                    this.userIsGenderInputRequired && t.push(this.userSaveBoost({
                        gender: this.selectedGender
                    })),
                    this.userIsDateOfBirthRequired && t.push(this.userSaveDateOfBirth({
                        dateOfBirth: this.dateOfBirth
                    })),
                    this.userIsPrimaryGameRequired && t.push(this.userSavePrimaryGame({
                        primaryGame: this.selectedPrimaryGame
                    })),
                    Promise.all(t).then((function(t) {
                        e.$emit("submit")
                    }
                    )).catch((function() {
                        e.$emit("submit")
                    }
                    ))
                }
            })
        }
          , T = E
          , C = (a("9406"),
        a("2877"))
          , O = Object(C["a"])(T, h, g, !1, null, "66d5d296", null)
          , A = O.exports
          , I = function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        completed: e.isCompleted
                    },
                    expression: "{'completed': isCompleted}"
                }, {
                    name: "show",
                    rawName: "v-show",
                    value: e.isNotificationVisible,
                    expression: "isNotificationVisible"
                }],
                staticClass: "trophyRoadNotification"
            }, [o("div", {
                staticClass: "trophyRoadNotification__card"
            }, [o("div", {
                staticClass: "trophyRoadNotification__cardContent"
            }, [o("figure", {
                staticClass: "trophyRoadNotification__figure"
            }, [o("img", {
                staticClass: "trophyRoadNotification__image",
                attrs: {
                    src: a("0923"),
                    width: "96",
                    height: "110",
                    alt: ""
                }
            }), o("span", {
                staticClass: "trophyRoadNotification__checkMark"
            }, [o("CheckMark", {
                attrs: {
                    inverted: !0,
                    active: e.isCompleted
                }
            })], 1)]), o("div", {
                staticClass: "trophyRoadNotification__content"
            }, [o("p", {
                staticClass: "trophyRoadNotification__label",
                domProps: {
                    textContent: e._s(e.labelText)
                }
            }), o("p", {
                staticClass: "trophyRoadNotification__title",
                domProps: {
                    textContent: e._s(e.titleText)
                }
            }), o("a", {
                staticClass: "trophyRoadNotification__button",
                attrs: {
                    href: "#"
                },
                on: {
                    click: e.handleLinkClick
                }
            }, [o("span", {
                domProps: {
                    textContent: e._s(e.buttonText)
                }
            }), o("img", {
                attrs: {
                    src: a("8626"),
                    width: "12",
                    height: "12",
                    alt: ""
                }
            })])]), e._m(0)])])])
        }
          , w = [function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                staticClass: "trophyRoadNotification__arrow"
            }, [o("img", {
                attrs: {
                    src: a("8d75"),
                    width: "16",
                    height: "16",
                    alt: ""
                }
            })])
        }
        ]
          , R = a("c153")
          , P = {
            name: "TrophyRoadNotification",
            components: {
                CheckMark: R["a"]
            },
            data: function() {
                return {
                    isNotificationVisible: !1
                }
            },
            computed: Object(c["a"])(Object(c["a"])(Object(c["a"])({}, Object(u["d"])("trophyRoad", {
                trophyRoadNotificationCardId: "notificationCardId"
            })), Object(u["c"])("trophyRoad", {
                isShowingTrophyRoadNotification: "isShowingNotification",
                isTrophyRoadCardCompleted: "isCardCompleted",
                isTrophyRoadCardAnimationSeen: "isCardAnimationSeen",
                numberOfActiveTrophyRoadCards: "numberOfActiveCards"
            })), {}, {
                titleText: function() {
                    return this.trophyRoadNotificationCardId ? this.$t("tr_trophy_card_".concat(this.trophyRoadNotificationCardId, "_label")) : "Set your filters"
                },
                labelText: function() {
                    return this.trophyRoadNotificationCardId && this.isCompleted ? this.$t("tr_notification_completed_label") : this.$t("tr_notification_progress_label")
                },
                buttonText: function() {
                    return this.numberOfActiveTrophyRoadCards > 0 ? this.$t("tr_notification_link_more", {
                        count: this.numberOfActiveTrophyRoadCards
                    }) : this.$t("tr_notification_link_none")
                },
                isCompleted: function() {
                    return this.isCardCompleted || this.isCardAnimationSeen
                },
                isCardCompleted: function() {
                    return this.isTrophyRoadCardCompleted(this.trophyRoadNotificationCardId)
                },
                isCardAnimationSeen: function() {
                    return this.isTrophyRoadCardAnimationSeen(this.trophyRoadNotificationCardId)
                }
            }),
            methods: Object(c["a"])(Object(c["a"])({}, Object(u["b"])("trophyRoad", {
                hideTrophyRoadNotification: "hideNotification"
            })), {}, {
                show: function() {
                    var e = this;
                    l["b"].to(this.$el, {
                        x: "0px",
                        opacity: 1,
                        duration: .6,
                        ease: "power2.out",
                        onStart: function() {
                            e.isNotificationVisible = !0
                        }
                    })
                },
                hide: function() {
                    var e = this;
                    l["b"].to(this.$el, {
                        x: "24px",
                        opacity: 0,
                        duration: .6,
                        ease: "power2.in",
                        onComplete: function() {
                            e.isNotificationVisible = !1
                        }
                    })
                },
                handleLinkClick: function(e) {
                    e.preventDefault(),
                    this.$router.push({
                        name: d["START"].name
                    }).catch((function() {}
                    ))
                },
                startHideTrophyRoadNotification: function() {
                    var e = this;
                    clearTimeout(this._hideNotificationTimeout),
                    this._hideNotificationTimeout = setTimeout((function() {
                        e.hideTrophyRoadNotification()
                    }
                    ), 5e3)
                }
            }),
            mounted: function() {
                l["b"].set(this.$el, {
                    x: "24px",
                    opacity: 0
                })
            },
            watch: {
                isShowingTrophyRoadNotification: function(e) {
                    e ? this.show() : this.hide()
                },
                isCardCompleted: function(e) {
                    e && this.startHideTrophyRoadNotification()
                },
                isCardAnimationSeen: function(e) {
                    e && this.startHideTrophyRoadNotification()
                },
                $route: function(e, t) {
                    e.name !== t.name && this.isShowingTrophyRoadNotification && !this.isTrophyRoadCardCompleted(this.trophyRoadNotificationCardId) && (clearTimeout(this._hideNotificationTimeout),
                    this.hideTrophyRoadNotification())
                }
            }
        }
          , L = P
          , N = (a("f001"),
        Object(C["a"])(L, I, w, !1, null, "312f46f5", null))
          , k = N.exports
          , D = {
            name: "Shell",
            components: {
                Loader: m["a"],
                RequiredInfoModal: A,
                TrophyRoadNotification: k,
                DefaultModal: f["a"],
                DebugPanel: function() {
                    0
                }
            },
            data: function() {
                return {
                    isDebugSetInLocalStorage: !1
                }
            },
            computed: Object(c["a"])(Object(c["a"])(Object(c["a"])({}, Object(u["c"])("general", {
                generalShowPageLoader: "showPageLoader",
                generalIsHeaderVisible: "isHeaderVisible",
                generalIsHeaderDisabled: "isHeaderDisabled",
                generalIsFooterVisible: "isFooterVisible",
                generalIsMobileMenuVisible: "isMobileMenuVisible",
                generalIsBodyScrollEnabled: "isBodyScrollEnabled",
                generalScrollBarGap: "scrollBarGap",
                generalIsRequiredInfoModalOpened: "isRequiredInfoModalOpened",
                generalIsCocModalOpened: "isCocModalOpened"
            })), Object(u["c"])("user", {
                userIsLoggedIn: "isLoggedIn"
            })), {}, {
                debug: function() {
                    return (this.isDebugSetInLocalStorage || "1" === this.$route.query.debug) && !1
                }
            }),
            mounted: function() {
                console.info("%cSupercell Creators version ".concat(_["VERSION"]), "color: ".concat(p["COLORS"].creatorGreen, ";")),
                window.addEventListener("resize", this.resize, !1),
                this.resize(),
                this.isDebugSetInLocalStorage = "1" === window.sessionStorage.getItem("debug")
            },
            destroyed: function() {
                window.removeEventListener("resize", this.resize)
            },
            methods: Object(c["a"])(Object(c["a"])({}, Object(u["b"])("general", {
                generalSetIsRequiredInfoModalOpened: "setIsRequiredInfoModalOpened",
                generalSetIsCocModalOpened: "setIsCocModalOpened"
            })), {}, {
                enter: function(e, t) {
                    l["b"].set(e, {
                        opacity: 0
                    }),
                    l["b"].to(e, {
                        opacity: 1,
                        duration: _["PAGE_TRANSITION_SPEED"] / 1e3,
                        ease: "power2.inOut",
                        onComplete: t
                    })
                },
                leave: function(e, t) {
                    l["b"].to(e, {
                        opacity: 0,
                        duration: _["PAGE_TRANSITION_SPEED"] / 1e3,
                        ease: "power2.inOut",
                        onComplete: t
                    })
                },
                onRequiredInfoModalSubmit: function() {
                    this.generalSetIsRequiredInfoModalOpened(!1)
                },
                onClickPrimaryCoc: function() {
                    this.generalSetIsCocModalOpened(!1),
                    this.$router.push({
                        name: d["CODE_OF_CONDUCT"].name,
                        query: {
                            redirect: this.$route.path
                        }
                    }).catch((function() {}
                    ))
                },
                resize: function() {}
            }),
            watch: {
                $route: function(e) {
                    "1" === this.$route.query.debug && (window.sessionStorage.setItem("debug", "1"),
                    this.isDebugSetInLocalStorage = !0)
                },
                generalIsBodyScrollEnabled: function(e) {
                    e ? (document.body.style.paddingRight = null,
                    document.body.style.overflow = null) : (this.generalScrollBarGap > 0 && (document.body.style.paddingRight = "".concat(this.generalScrollBarGap, "px")),
                    document.body.style.overflow = "hidden")
                }
            }
        }
          , B = D
          , U = (a("4e2d"),
        Object(C["a"])(B, i, s, !1, null, null, null))
          , M = U.exports
          , x = {
            name: "App",
            components: {
                Shell: M
            }
        }
          , $ = x
          , H = (a("5c0b"),
        Object(C["a"])($, n, r, !1, null, null, null))
          , j = H.exports
          , F = a("a18c")
          , G = a("4360");
        a("8b70");
        l["b"].defaults({
            overwrite: "auto"
        });
        a("e443");
        var Y = a("81d7")
          , V = a("53ca")
          , W = (a("1276"),
        a("159b"),
        {
            bind: function(e, t, a) {
                t.value && (e.className = q(e.className, t.value, e))
            },
            inserted: function(e, t, a) {},
            update: function(e, t, a) {
                t.value && (e.className = q(e.className, t.value, e))
            },
            componentUpdated: function(e, t, a) {}
        })
          , q = function(e, t, a) {
            var o, n = "", r = e.split(" ")[0];
            if (r)
                return e = e.replace(/ [a-zA-Z0-9_]*--[a-zA-Z0-9-]*/g, ""),
                o = t.constructor === String ? t.replace(/ /g, "").split(",") : t.constructor === Object ? [t] : t,
                o.length > 0 && o.forEach((function(e, t) {
                    if ("object" === Object(V["a"])(e))
                        for (t in e)
                            e[t] && (n += K(r, t));
                    else
                        "" !== e && (n += K(r, e))
                }
                )),
                e + n;
            console.error("The following element requires a block class in order to add class modifiers:", a)
        }
          , K = function(e, t) {
            return " " + e + "--" + t
        };
        o["a"].directive("class-mods", W);
        a("4d63"),
        a("c607"),
        a("2c3e"),
        a("25f0"),
        a("fb6a"),
        a("466d");
        var z = new RegExp(/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/)
          , J = new RegExp(/[mailto:]/)
          , Z = {
            bind: function(e, t, a) {
                e.innerHTML = X(e.innerHTML)
            },
            inserted: function(e, t, a) {
                Q(e)
            },
            update: function(e, t, a) {
                e.innerHTML = X(e.innerHTML),
                Q(e)
            }
        }
          , X = function(e) {
            var t = e
              , a = 0
              , o = 0
              , n = ""
              , r = ""
              , i = ""
              , s = []
              , c = ""
              , u = ""
              , l = "_self"
              , d = "";
            while (-1 !== a)
                a = t.indexOf("[[", o),
                o = t.indexOf("]]", a),
                -1 !== a && (n = t.slice(0, a),
                r = t.slice(o + 2),
                i = t.slice(a + 2, o),
                s = i.split(", "),
                u = s[0],
                s[1].match(z) || s[1].match(J) ? (c = s[1],
                s[2] && (l = s[2].indexOf("blank") ? "_blank" : s[2].indexOf("self") ? "_self" : s[2].indexOf("parent") ? "_parent" : s[2].indexOf("top") ? "_top" : "_self"),
                d = "<a href=" + c + ' target="' + l + '" class="parsed-link">' + u + "</a>") : (c = F["a"].resolve({
                    name: s[1],
                    params: F["a"].currentRoute.params,
                    query: F["a"].currentRoute.query
                }).href,
                d = '<a data-type="routerlink" href=' + c + ' class="parsed-link">' + u + "</a>"),
                t = n,
                t += d,
                t += r);
            return t
        }
          , Q = function(e) {
            for (var t = e.getElementsByTagName("a"), a = 0; a < t.length; a++)
                "routerlink" === t[a].dataset.type && t[a].addEventListener("click", ee, !1)
        }
          , ee = function(e) {
            e.preventDefault(),
            F["a"].push({
                path: e.target.getAttribute("href")
            }).catch((function() {}
            ))
        };
        o["a"].directive("link-parser", Z);
        a("d81d"),
        a("4de4");
        function te(e) {
            var t = e.getBoundingClientRect();
            return t.top <= .75 * (window.innerHeight || document.documentElement.clientHeight)
        }
        function ae() {
            oe = oe.map((function(e) {
                return Object.assign({}, e, {
                    status: e.status ? e.status : te(e.el)
                })
            }
            )),
            oe.forEach((function(e) {
                e.el.classList.toggle("is-revealed", e.status),
                e.el.classList.toggle("is-concealed", !e.status),
                e.el.classList.toggle("is-transition", e.status)
            }
            ))
        }
        var oe = []
          , ne = {
            bind: function(e) {
                oe.push({
                    el: e,
                    status: !1
                })
            },
            inserted: function() {
                ae()
            },
            unbind: function(e) {
                oe = oe.filter((function(t) {
                    return t.el !== e
                }
                ))
            }
        };
        o["a"].directive("scroll-reveal", ne),
        window.addEventListener("scroll", ae);
        var re = [];
        function ie() {
            re = re.map((function(e) {
                var t = e.el.getBoundingClientRect();
                return Object.assign({}, e, {
                    y: (t.top + t.height / 2 - window.innerHeight / 2) / window.innerHeight * e.z
                })
            }
            ))
        }
        function se() {
            re.forEach((function(e) {
                l["b"].set(e.el, {
                    y: e.y
                })
            }
            ))
        }
        function ce() {
            window.requestAnimationFrame((function() {
                return ce()
            }
            )),
            se()
        }
        ce();
        var ue = {
            bind: function(e, t) {
                re.push({
                    el: e,
                    y: 0,
                    z: t.value ? t.value : 100
                })
            },
            inserted: function() {
                ie()
            },
            unbind: function(e) {
                re = re.filter((function(t) {
                    return t.el !== e
                }
                ))
            }
        };
        o["a"].directive("scroll-parallax", ue),
        window.addEventListener("scroll", ie),
        o["a"].config.productionTip = !1,
        window.vm = new o["a"]({
            router: F["a"],
            store: G["a"],
            i18n: Y["a"],
            render: function(e) {
                return e(j)
            }
        }).$mount("#app"),
        window.localStorage.removeItem("paypalRedirectUrl"),
        window.localStorage.removeItem("videoInboxLinks")
    },
    "576a": function(e, t, a) {
        "use strict";
        a("ef17")
    },
    5816: function(e, t, a) {
        "use strict";
        a("6fab")
    },
    5979: function(e, t, a) {
        "use strict";
        a("a1f4")
    },
    5995: function(e, t, a) {
        e.exports = a.p + "img/game-logo-BOOM_BEACH.2ea592f4.png"
    },
    "5af4": function(e, t, a) {
        "use strict";
        a("d3b7"),
        a("25f0");
        var o = function() {
            var e = function() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            };
            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        };
        t["a"] = o
    },
    "5b26": function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-mobile-HAY_DAY.92798e1e.jpg"
    },
    "5b46": function(e, t, a) {
        e.exports = a.p + "img/generic-avatar.d0168608.svg"
    },
    "5c0b": function(e, t, a) {
        "use strict";
        a("9c0c")
    },
    6016: function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-CLASH_OF_CLANS.ad5f3079.jpg"
    },
    "605c": function(e, t, a) {
        e.exports = a.p + "img/tier-symbol-boost.8396955d.png"
    },
    6078: function(e, t, a) {
        "use strict";
        a("0058")
    },
    "60a1": function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, "VERSION", (function() {
            return o
        }
        )),
        a.d(t, "DEFAULT_LANG", (function() {
            return n
        }
        )),
        a.d(t, "LANGS", (function() {
            return r
        }
        )),
        a.d(t, "USER_MIN_AGE", (function() {
            return i
        }
        )),
        a.d(t, "MAINTENANCE_MODE", (function() {
            return s
        }
        )),
        a.d(t, "APP_URL", (function() {
            return c
        }
        )),
        a.d(t, "API_URL", (function() {
            return u
        }
        )),
        a.d(t, "API_2_URL", (function() {
            return l
        }
        )),
        a.d(t, "PAYPAL_ID", (function() {
            return d
        }
        )),
        a.d(t, "YOUTUBE_ID", (function() {
            return _
        }
        )),
        a.d(t, "TWITCH_ID", (function() {
            return p
        }
        )),
        a.d(t, "DISCORD_ID", (function() {
            return m
        }
        )),
        a.d(t, "SLACK_URL", (function() {
            return f
        }
        )),
        a.d(t, "MERCH_CODES_REDEEM_URL", (function() {
            return h
        }
        )),
        a.d(t, "LOGIN_URL", (function() {
            return g
        }
        )),
        a.d(t, "YOUTUBE_LOGIN_URL", (function() {
            return b
        }
        )),
        a.d(t, "TWITCH_LOGIN_URL", (function() {
            return S
        }
        )),
        a.d(t, "DISCORD_LOGIN_URL", (function() {
            return y
        }
        )),
        a.d(t, "AUTHENTICATE_URL", (function() {
            return v
        }
        )),
        a.d(t, "PAYPAL_AUTHENTICATE_URL", (function() {
            return E
        }
        )),
        a.d(t, "PLATFORM_AUTHENTICATE_URL", (function() {
            return T
        }
        )),
        a.d(t, "GOOGLE_ANALYTICS_API_KEY", (function() {
            return C
        }
        )),
        a.d(t, "DISCORD_CHANNEL_URL", (function() {
            return O
        }
        )),
        a.d(t, "API_CODE_OK", (function() {
            return A
        }
        )),
        a.d(t, "API_CODE_CREATED", (function() {
            return I
        }
        )),
        a.d(t, "API_CODE_BAD_REQUEST", (function() {
            return w
        }
        )),
        a.d(t, "API_CODE_UNAUTHORIZED", (function() {
            return R
        }
        )),
        a.d(t, "API_CODE_FORBIDDEN", (function() {
            return P
        }
        )),
        a.d(t, "API_CODE_NOT_FOUND", (function() {
            return L
        }
        )),
        a.d(t, "API_CODE_INTERNAL_SERVER_ERROR", (function() {
            return N
        }
        )),
        a.d(t, "API_ERROR_USER_BLOCKED", (function() {
            return k
        }
        )),
        a.d(t, "API_ERROR_USER_NOT_REVIEWED", (function() {
            return D
        }
        )),
        a.d(t, "API_ERROR_USER_REJECTED", (function() {
            return B
        }
        )),
        a.d(t, "API_ERROR_USER_NOT_REGISTERED", (function() {
            return U
        }
        )),
        a.d(t, "API_ERROR_USER_NOT_WHITELISTED", (function() {
            return M
        }
        )),
        a.d(t, "API_ERROR_USER_WITH_THIS_ID_DOESNT_EXIST", (function() {
            return x
        }
        )),
        a.d(t, "API_ERROR_NOT_ENOUGH_FOLLOWERS", (function() {
            return $
        }
        )),
        a.d(t, "API_ERROR_INVALID_COUNTRY", (function() {
            return H
        }
        )),
        a.d(t, "API_ERROR_INVALID_STATE", (function() {
            return j
        }
        )),
        a.d(t, "API_ERROR_NOT_AUTHENTICATED", (function() {
            return F
        }
        )),
        a.d(t, "API_ERROR_MAINTENANCE", (function() {
            return G
        }
        )),
        a.d(t, "API_ERROR_NOT_IN_CREATORS_DISCORD", (function() {
            return Y
        }
        )),
        a.d(t, "API_ERROR_DISCORD_ALREADY_CONNECTED", (function() {
            return V
        }
        )),
        a.d(t, "API_ERROR_DISCORD_NOT_CONNECTED", (function() {
            return W
        }
        )),
        a.d(t, "API_ERROR_DISCORD_BANNED", (function() {
            return q
        }
        )),
        a.d(t, "API_ERROR_SLACK_USER_EXISTS", (function() {
            return K
        }
        )),
        a.d(t, "API_STATUS_PENDING", (function() {
            return z
        }
        )),
        a.d(t, "API_STATUS_SUCCESS", (function() {
            return J
        }
        )),
        a.d(t, "API_STATUS_FAILURE", (function() {
            return Z
        }
        )),
        a.d(t, "TIER_LEVEL_1", (function() {
            return X
        }
        )),
        a.d(t, "TIER_LEVEL_2", (function() {
            return Q
        }
        )),
        a.d(t, "TIER_LEVEL_3", (function() {
            return ee
        }
        )),
        a.d(t, "TIER_LEVEL_4", (function() {
            return te
        }
        )),
        a.d(t, "TIER_LEVEL_5", (function() {
            return ae
        }
        )),
        a.d(t, "TIER_LEVEL_6", (function() {
            return oe
        }
        )),
        a.d(t, "TIER_LEVEL_BOOST_EXPRESS", (function() {
            return ne
        }
        )),
        a.d(t, "TIER_LEVELS", (function() {
            return re
        }
        )),
        a.d(t, "SUPERCELL_FAN_KIT_CLASH_OF_CLANS", (function() {
            return ie
        }
        )),
        a.d(t, "SUPERCELL_FAN_KIT_CLASH_ROYALE", (function() {
            return se
        }
        )),
        a.d(t, "SUPERCELL_FAN_KIT_BOOM_BEACH", (function() {
            return ce
        }
        )),
        a.d(t, "SUPERCELL_FAN_KIT_HAY_DAY", (function() {
            return ue
        }
        )),
        a.d(t, "SUPERCELL_FAN_KIT_BRAWL_STARS", (function() {
            return le
        }
        )),
        a.d(t, "SUPERCELL_VIP_KIT", (function() {
            return de
        }
        )),
        a.d(t, "SUPERCELL_TECH_KIT", (function() {
            return _e
        }
        )),
        a.d(t, "PLATFORM_TYPE_TWITCH", (function() {
            return pe
        }
        )),
        a.d(t, "PLATFORM_TYPE_YOUTUBE", (function() {
            return me
        }
        )),
        a.d(t, "PLATFORM_TYPE_DISCORD", (function() {
            return fe
        }
        )),
        a.d(t, "PLATFORM_TYPES", (function() {
            return he
        }
        )),
        a.d(t, "SOCIAL_PLATFORM_TYPE_FACEBOOK", (function() {
            return ge
        }
        )),
        a.d(t, "SOCIAL_PLATFORM_TYPE_INSTAGRAM", (function() {
            return be
        }
        )),
        a.d(t, "SOCIAL_PLATFORM_TYPE_TWITTER", (function() {
            return Se
        }
        )),
        a.d(t, "SOCIAL_PLATFORM_TYPE_YOUTUBE", (function() {
            return ye
        }
        )),
        a.d(t, "SOCIAL_PLATFORM_TYPE_TWITCH", (function() {
            return ve
        }
        )),
        a.d(t, "SOCIAL_PLATFORM_TYPE_TIKTOK", (function() {
            return Ee
        }
        )),
        a.d(t, "SOCIAL_PLATFORM_TYPE_SNAPCHAT", (function() {
            return Te
        }
        )),
        a.d(t, "SOCIAL_PLATFORM_TYPE_DISCORD", (function() {
            return Ce
        }
        )),
        a.d(t, "SOCIAL_PLATFORM_TYPES", (function() {
            return Oe
        }
        )),
        a.d(t, "BOOST_SIGNUP_STEP_PAYPAL", (function() {
            return Ae
        }
        )),
        a.d(t, "BOOST_SIGNUP_STEP_HANDLE", (function() {
            return Ie
        }
        )),
        a.d(t, "BOOST_SIGNUP_STEP_PERSONAL_DETAILS", (function() {
            return we
        }
        )),
        a.d(t, "BOOST_SIGNUP_STEP_CONFIRM", (function() {
            return Re
        }
        )),
        a.d(t, "USER_APPLICATION_STATUS_NONE", (function() {
            return Pe
        }
        )),
        a.d(t, "USER_APPLICATION_STATUS_NOT_REVIEWED", (function() {
            return Le
        }
        )),
        a.d(t, "USER_APPLICATION_STATUS_ACCEPTED", (function() {
            return Ne
        }
        )),
        a.d(t, "USER_APPLICATION_STATUS_REJECTED", (function() {
            return ke
        }
        )),
        a.d(t, "USER_BOOST_STATUS_NONE", (function() {
            return De
        }
        )),
        a.d(t, "USER_BOOST_STATUS_NOT_REVIEWED", (function() {
            return Be
        }
        )),
        a.d(t, "USER_BOOST_STATUS_ACCEPTED", (function() {
            return Ue
        }
        )),
        a.d(t, "USER_BOOST_STATUS_CONFIRMED", (function() {
            return Me
        }
        )),
        a.d(t, "USER_BOOST_STATUS_REJECTED", (function() {
            return xe
        }
        )),
        a.d(t, "USER_UPGRADE_STATUS_NONE", (function() {
            return $e
        }
        )),
        a.d(t, "USER_UPGRADE_STATUS_NOT_REVIEWED", (function() {
            return He
        }
        )),
        a.d(t, "USER_UPGRADE_STATUS_ACCEPTED", (function() {
            return je
        }
        )),
        a.d(t, "USER_UPGRADE_STATUS_REJECTED", (function() {
            return Fe
        }
        )),
        a.d(t, "APPLICATION_STATUS_NONE", (function() {
            return Ge
        }
        )),
        a.d(t, "APPLICATION_STATUS_NOT_REVIEWED", (function() {
            return Ye
        }
        )),
        a.d(t, "APPLICATION_STATUS_ACCEPTED", (function() {
            return Ve
        }
        )),
        a.d(t, "APPLICATION_STATUS_REJECTED", (function() {
            return We
        }
        )),
        a.d(t, "APPLICATION_STATUS_ALREADY_REGISTERED", (function() {
            return qe
        }
        )),
        a.d(t, "APPLICATION_STATUS_NOT_REGISTERED", (function() {
            return Ke
        }
        )),
        a.d(t, "MERCH_CODE_STATUS_NONE", (function() {
            return ze
        }
        )),
        a.d(t, "MERCH_CODE_STATUS_CLAIMED", (function() {
            return Je
        }
        )),
        a.d(t, "MERCH_CODE_STATUS_SHARED", (function() {
            return Ze
        }
        )),
        a.d(t, "MERCH_CODE_STATUS_VALID", (function() {
            return Xe
        }
        )),
        a.d(t, "MERCH_CODE_STATUS_ASSIGNED", (function() {
            return Qe
        }
        )),
        a.d(t, "MERCH_CODE_STATUS_USED", (function() {
            return et
        }
        )),
        a.d(t, "MERCH_CODE_INITIAL_DISPLAY_NUM", (function() {
            return tt
        }
        )),
        a.d(t, "MERCH_CODE_SHOW_SORTING_THRESHOLD_NUM", (function() {
            return at
        }
        )),
        a.d(t, "MERCH_CODE_SORT_TYPE_DATE", (function() {
            return ot
        }
        )),
        a.d(t, "MERCH_CODE_SORT_TYPE_STATUS", (function() {
            return nt
        }
        )),
        a.d(t, "MERCH_CODE_CLAIMED_STATUS_NONE", (function() {
            return rt
        }
        )),
        a.d(t, "MERCH_CODE_CLAIMED_STATUS_CLAIMED", (function() {
            return it
        }
        )),
        a.d(t, "MERCH_CODE_REDEEMED_STATUS_USED", (function() {
            return st
        }
        )),
        a.d(t, "MERCH_CODE_REDEEMED_STATUS_VALID", (function() {
            return ct
        }
        )),
        a.d(t, "FEED_POST_TYPE_GENERAL", (function() {
            return ut
        }
        )),
        a.d(t, "PAGE_TRANSITION_SPEED", (function() {
            return lt
        }
        )),
        a.d(t, "GENDER_MALE", (function() {
            return dt
        }
        )),
        a.d(t, "GENDER_FEMALE", (function() {
            return _t
        }
        )),
        a.d(t, "REGEXP_SANITIZE_BOOST_HANDLE", (function() {
            return pt
        }
        )),
        a.d(t, "FEED_POST_NOT_GENERATED", (function() {
            return mt
        }
        )),
        a.d(t, "FEED_POST_ARTICLE_ITEM_TYPE_IMAGE", (function() {
            return ft
        }
        )),
        a.d(t, "FEED_POST_ARTICLE_ITEM_TYPE_TEXT", (function() {
            return ht
        }
        )),
        a.d(t, "FEED_POST_ARTICLE_ITEM_TYPE_VIDEO", (function() {
            return gt
        }
        )),
        a.d(t, "FEED_POST_ARTICLE_ITEM_TYPE_VIDEO_UPLOAD", (function() {
            return bt
        }
        )),
        a.d(t, "FEED_POST_ARTICLE_ITEM_TYPE_BLOCKQUOTE", (function() {
            return St
        }
        )),
        a.d(t, "FEED_POST_SLACK_NOTIFICATION_URL_BRAWL_STARS", (function() {
            return yt
        }
        )),
        a.d(t, "FEED_POST_SLACK_NOTIFICATION_URL_CLAS_OF_CLANS", (function() {
            return vt
        }
        )),
        a.d(t, "FEED_POST_SLACK_NOTIFICATION_URL_CLASH_ROYALE", (function() {
            return Et
        }
        )),
        a.d(t, "FEED_POST_SLACK_NOTIFICATION_URL_BOOM_BEACH", (function() {
            return Tt
        }
        )),
        a.d(t, "FEED_POST_SLACK_NOTIFICATION_URL_HAY_DAY", (function() {
            return Ct
        }
        )),
        a.d(t, "FEED_POST_SLACK_NOTIFICATION_URL_HAY_DAY_POP", (function() {
            return Ot
        }
        )),
        a.d(t, "FEED_POST_DISCORD_NOTIFICATION_URL_BRAWL_STARS", (function() {
            return At
        }
        )),
        a.d(t, "FEED_POST_DISCORD_NOTIFICATION_URL_CLAS_OF_CLANS", (function() {
            return It
        }
        )),
        a.d(t, "FEED_POST_DISCORD_NOTIFICATION_URL_CLASH_ROYALE", (function() {
            return wt
        }
        )),
        a.d(t, "FEED_POST_DISCORD_NOTIFICATION_URL_BOOM_BEACH", (function() {
            return Rt
        }
        )),
        a.d(t, "FEED_POST_DISCORD_NOTIFICATION_URL_HAY_DAY", (function() {
            return Pt
        }
        )),
        a.d(t, "FEED_POST_DISCORD_NOTIFICATION_URL_HAY_DAY_POP", (function() {
            return Lt
        }
        )),
        a.d(t, "BOOST_PAYOUT_LIMIT", (function() {
            return Nt
        }
        )),
        a.d(t, "BOOST_CHART_TYPE_PERIODIC", (function() {
            return kt
        }
        )),
        a.d(t, "BOOST_CHART_TYPE_CUMULATIVE", (function() {
            return Dt
        }
        )),
        a.d(t, "BOOST_CHART_TIMESPAN_TYPE_DAILY", (function() {
            return Bt
        }
        )),
        a.d(t, "BOOST_CHART_TIMESPAN_TYPE_WEEKLY", (function() {
            return Ut
        }
        )),
        a.d(t, "BOOST_CHART_TIMESPAN_TYPE_MONTHLY", (function() {
            return Mt
        }
        )),
        a.d(t, "BOOST_CHART_TIMESPAN_TYPE_YEARLY", (function() {
            return xt
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_TYPE_WELCOME", (function() {
            return $t
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_TYPE_TROPHY", (function() {
            return Ht
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_TYPE_TIER_UPGRADE", (function() {
            return jt
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_ID_APPROVED_AS_CREATOR", (function() {
            return Ft
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_ID_WELCOME_VIDEO_TIER_1", (function() {
            return Gt
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_ID_WELCOME_VIDEO_TIER_2", (function() {
            return Yt
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_ID_WELCOME_VIDEO_TIER_3", (function() {
            return Vt
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_ID_UPGRADE_REQUEST_TIER_2", (function() {
            return Wt
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_ID_UPGRADE_REQUEST_TIER_3", (function() {
            return qt
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_ID_CODE_OF_CONDUCT", (function() {
            return Kt
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_ID_SET_YOUR_FILTER", (function() {
            return zt
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_ID_READ_A_POST", (function() {
            return Jt
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_ID_SAY_HI_ON_DISCORD", (function() {
            return Zt
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_ID_CLAIM_MERCH_CODE", (function() {
            return Xt
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_ID_UPDATE_PREVIEWS", (function() {
            return Qt
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_ID_CREATOR_BOOST", (function() {
            return ea
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_ID_VIDEO_INBOX", (function() {
            return ta
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_STATUS_LOCKED", (function() {
            return aa
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_STATUS_ACTIVE", (function() {
            return oa
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_STATUS_COMPLETED", (function() {
            return na
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_STATUS_ANIMATION_SEEN", (function() {
            return ra
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_REVIEW_STATUS_APPROVED", (function() {
            return ia
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_REVIEW_STATUS_REJECTED", (function() {
            return sa
        }
        )),
        a.d(t, "TROPHY_ROAD_CARD_REVIEW_STATUS_NOT_REVIEWED", (function() {
            return ca
        }
        )),
        a.d(t, "CONFETTI_BACK_OPTIONS_DEFAULT", (function() {
            return ua
        }
        )),
        a.d(t, "CONFETTI_FRONT_OPTIONS_DEFAULT", (function() {
            return la
        }
        ));
        var o = "1.6.0"
          , n = "en"
          , r = ["en"]
          , i = 13
          , s = "0"
          , c = "https://creators.supercell.com"
          , u = "https://56z2m2kqi2.execute-api.us-east-1.amazonaws.com/prod"
          , l = "https://api.creators.supercell.com"
          , d = "AfzUyDA25Tym2c_G59nOo0JUr381k2phH0uyDQirppNnnWc7tzfAgUcxv1ezr1KEA3vQD8BZ7DWG-ZVZ"
          , _ = "328065027120-7cvve242fcseoee3gu7c87o4jcfeodl7.apps.googleusercontent.com"
          , p = "2ledlxtwd36axajkkjjdyla6g7w3fu"
          , m = "631438648838979604"
          , f = "http://supercellcreators.slack.com/"
          , h = "https://supercellredemption.com"
          , g = "https://id.supercell.com/oauth/authorize?client_id=9ECF64A1-4E2D-457E-B588-9A6E7854B0E9&response_type=code&scope=identity.relay_email%20identity.connections"
          , b = "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube.readonly&access_type=offline&include_granted_scopes=true&response_type=code&prompt=select_account&client_id=" + _
          , S = "https://id.twitch.tv/oauth2/authorize?response_type=code&scope=channel:read:subscriptions&force_verify=true&client_id=" + p
          , y = "https://discord.com/api/oauth2/authorize?response_type=code&scope=identify%20guilds.join&prompt=consent&client_id=" + m
          , v = "/authenticate"
          , E = "/paypalauthenticate"
          , T = "/platformauthenticate"
          , C = "UA-65018419-5"
          , O = "https://discord.com/channels/547793312229097478/547850422140796963"
          , A = 200
          , I = 201
          , w = 400
          , R = 401
          , P = 403
          , L = 404
          , N = 500
          , k = "USER_BLOCKED"
          , D = "USER_NOT_REVIEWED"
          , B = "USER_REJECTED"
          , U = "USER_NOT_REGISTERED"
          , M = "user_not_whitelisted"
          , x = "user_with_this_id_doesnt_exist"
          , $ = "not_enough_followers"
          , H = "invalid_country"
          , j = "invalid_state"
          , F = "not_authenticated"
          , G = "maintenance"
          , Y = "not_in_creators_discord"
          , V = "DISCORD_ALREADY_CONNECTED"
          , W = "DISCORD_NOT_CONNECTED"
          , q = "DISCORD_BANNED"
          , K = "USER_EXISTS"
          , z = "pending"
          , J = "successful"
          , Z = "failed"
          , X = 1
          , Q = 2
          , ee = 3
          , te = 4
          , ae = 5
          , oe = 6
          , ne = 10
          , re = [X, Q, ee, te, ae, oe]
          , ie = "SC-FAN-KIT-CC"
          , se = "SC-FAN-KIT-CR"
          , ce = "SC-FAN-KIT-BB"
          , ue = "SC-FAN-KIT-HD"
          , le = "SC-FAN-KIT-BS"
          , de = "SC-VIP-KIT"
          , _e = "SC-TCH-KIT"
          , pe = "twitch"
          , me = "youtube"
          , fe = "discord"
          , he = [me, pe]
          , ge = "facebook"
          , be = "instagram"
          , Se = "twitter"
          , ye = "youtube"
          , ve = "twitch"
          , Ee = "tiktok"
          , Te = "snapchat"
          , Ce = "discord"
          , Oe = [ge, be, Se, ye, ve, Ee, Te, Ce]
          , Ae = "BOOST_SIGNUP_STEP_PAYPAL"
          , Ie = "BOOST_SIGNUP_STEP_HANDLE"
          , we = "BOOST_SIGNUP_STEP_PERSONAL_DETAILS"
          , Re = "BOOST_SIGNUP_STEP_CONFIRM"
          , Pe = "NONE"
          , Le = "NOT-REVIEWED"
          , Ne = "ACCEPTED"
          , ke = "REJECTED"
          , De = "NONE"
          , Be = "NOT-REVIEWED"
          , Ue = "ACCEPTED"
          , Me = "CONFIRMED"
          , xe = "REJECTED"
          , $e = "NONE"
          , He = "NOT-REVIEWED"
          , je = "ACCEPTED"
          , Fe = "REJECTED"
          , Ge = "NONE"
          , Ye = "NOT-REVIEWED"
          , Ve = "ACCEPTED"
          , We = "REJECTED"
          , qe = "ALREADY-REGISTERED"
          , Ke = "NOT-REGISTERED"
          , ze = "NONE"
          , Je = "CLAIMED"
          , Ze = "SHARED"
          , Xe = "valid"
          , Qe = "assigned"
          , et = "used"
          , tt = 4
          , at = 10
          , ot = "DATE"
          , nt = "STATUS"
          , rt = "NONE"
          , it = "CLAIMED"
          , st = "used"
          , ct = "valid"
          , ut = "GENERAL"
          , lt = 400
          , dt = "MALE"
          , _t = "FEMALE"
          , pt = /[^a-zA-Z-_0-9]/g
          , mt = "not_generated"
          , ft = "image"
          , ht = "text"
          , gt = "video"
          , bt = "videoUpload"
          , St = "blockquote"
          , yt = "https://supercellcreators.slack.com/messages/bs_announcements"
          , vt = "https://supercellcreators.slack.com/messages/coc_announcements"
          , Et = "https://supercellcreators.slack.com/messages/clashroyale-announcements"
          , Tt = "https://supercellcreators.slack.com/messages/boombeach"
          , Ct = "https://supercellcreators.slack.com/messages/hayday-announcements"
          , Ot = "https://supercellcreators.slack.com/messages/pop-announcements"
          , At = "https://discordapp.com/channels/547793312229097478/547818575251898371"
          , It = "https://discordapp.com/channels/547793312229097478/547818345161031689"
          , wt = "https://discordapp.com/channels/547793312229097478/547818606608646175"
          , Rt = "https://discordapp.com/channels/547793312229097478/547951486223777808"
          , Pt = "https://discordapp.com/channels/547793312229097478/547819828984020992"
          , Lt = ""
          , Nt = 1e3
          , kt = "PERIODIC"
          , Dt = "CUMULATIVE"
          , Bt = "DAILY"
          , Ut = "WEEKLY"
          , Mt = "MONTHLY"
          , xt = "YEARLY"
          , $t = "WELCOME-CARD"
          , Ht = "TROPHY-CARD"
          , jt = "TIER-UPGRADE-CARD"
          , Ft = "approvedAsCreator"
          , Gt = "tier1WelcomeVideo"
          , Yt = "tier2WelcomeVideo"
          , Vt = "tier3WelcomeVideo"
          , Wt = "upgradeRequestToT2"
          , qt = "upgradeRequestToT3"
          , Kt = "codeOfConduct"
          , zt = "setYourFilter"
          , Jt = "readAPost"
          , Zt = "sayHiOnDiscord"
          , Xt = "claimAMerchCode"
          , Qt = "updatePreviews"
          , ea = "creatorBoost"
          , ta = "videoInbox"
          , aa = "LOCKED"
          , oa = "ACTIVE"
          , na = "COMPLETED"
          , ra = "ANIMATION-SEEN"
          , ia = "APPROVED"
          , sa = "REJECTED"
          , ca = "NOT-REVIEWED"
          , ua = {
            imagePaths: [a("f921")],
            maxParticles: 35,
            minParticleScale: .2,
            maxParticleScale: .8
        }
          , la = {
            imagePaths: [a("f921")],
            maxParticles: 10,
            minParticleScale: .8,
            maxParticleScale: 1.1
        }
    },
    6384: function(e, t, a) {
        "use strict";
        a("31d4")
    },
    "645b": function(e, t, a) {},
    "654e": function(e, t, a) {
        e.exports = a.p + "img/game-logo-CLASH_OF_CLANS.a8b67567.png"
    },
    "65ee": function(e, t, a) {
        "use strict";
        a("56d1")
    },
    6630: function(e, t, a) {
        e.exports = a.p + "img/icon-portal.fcf9bda1.svg"
    },
    "664a": function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-CLASH_QUEST.05499a4d.jpg"
    },
    "672d": function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-EVERDALE.7e3a25c8.jpg"
    },
    "69ab": function(e, t, a) {},
    "6a35": function(e, t, a) {},
    "6b53": function(e, t, a) {
        "use strict";
        a("9688")
    },
    "6bd0": function(e, t, a) {},
    "6e3a": function(e, t, a) {
        "use strict";
        a("ee91")
    },
    "6f7b": function(e, t, a) {},
    "6fab": function(e, t, a) {},
    7014: function(e, t, a) {
        "use strict";
        a("beca")
    },
    "71f6": function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-mobile-CLASH_QUEST.292a9371.jpg"
    },
    "72f8": function(e, t, a) {
        "use strict";
        a("bb9f")
    },
    7382: function(e, t, a) {
        "use strict";
        a("cf89")
    },
    "7b87": function(e) {
        e.exports = JSON.parse('{"BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BA":"Bosnia and Herzegovina","BB":"Barbados","WF":"Wallis and Futuna","BL":"Saint Barthelemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BT":"Bhutan","JM":"Jamaica","BV":"Bouvet Island","BW":"Botswana","WS":"Samoa","BQ":"Bonaire, Saint Eustatius and Saba ","BR":"Brazil","BS":"Bahamas","JE":"Jersey","BY":"Belarus","BZ":"Belize","RU":"Russia","RW":"Rwanda","RS":"Serbia","TL":"East Timor","RE":"Reunion","TM":"Turkmenistan","TJ":"Tajikistan","RO":"Romania","TK":"Tokelau","GW":"Guinea-Bissau","GU":"Guam","GT":"Guatemala","GS":"South Georgia and the South Sandwich Islands","GR":"Greece","GQ":"Equatorial Guinea","GP":"Guadeloupe","JP":"Japan","GY":"Guyana","GG":"Guernsey","GF":"French Guiana","GE":"Georgia","GD":"Grenada","GB":"United Kingdom","GA":"Gabon","SV":"El Salvador","GN":"Guinea","GM":"Gambia","GL":"Greenland","GI":"Gibraltar","GH":"Ghana","OM":"Oman","TN":"Tunisia","JO":"Jordan","HR":"Croatia","HT":"Haiti","HU":"Hungary","HK":"Hong Kong","HN":"Honduras","HM":"Heard Island and McDonald Islands","VE":"Venezuela","PR":"Puerto Rico","PS":"Palestinian Territory","PW":"Palau","PT":"Portugal","SJ":"Svalbard and Jan Mayen","PY":"Paraguay","IQ":"Iraq","PA":"Panama","PF":"French Polynesia","PG":"Papua New Guinea","PE":"Peru","PK":"Pakistan","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PM":"Saint Pierre and Miquelon","ZM":"Zambia","EH":"Western Sahara","EE":"Estonia","EG":"Egypt","ZA":"South Africa","EC":"Ecuador","IT":"Italy","VN":"Vietnam","SB":"Solomon Islands","ET":"Ethiopia","SO":"Somalia","ZW":"Zimbabwe","SA":"Saudi Arabia","ES":"Spain","ER":"Eritrea","ME":"Montenegro","MD":"Moldova","MG":"Madagascar","MF":"Saint Martin","MA":"Morocco","MC":"Monaco","UZ":"Uzbekistan","MM":"Myanmar","ML":"Mali","MO":"Macao","MN":"Mongolia","MH":"Marshall Islands","MK":"Macedonia","MU":"Mauritius","MT":"Malta","MW":"Malawi","MV":"Maldives","MQ":"Martinique","MP":"Northern Mariana Islands","MS":"Montserrat","MR":"Mauritania","IM":"Isle of Man","UG":"Uganda","TZ":"Tanzania","MY":"Malaysia","MX":"Mexico","IL":"Israel","FR":"France","IO":"British Indian Ocean Territory","SH":"Saint Helena","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands","FM":"Micronesia","FO":"Faroe Islands","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NA":"Namibia","VU":"Vanuatu","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NZ":"New Zealand","NP":"Nepal","NR":"Nauru","NU":"Niue","CK":"Cook Islands","XK":"Kosovo","CI":"Ivory Coast","CH":"Switzerland","CO":"Colombia","CN":"China","CM":"Cameroon","CL":"Chile","CC":"Cocos Islands","CA":"Canada","CG":"Republic of the Congo","CF":"Central African Republic","CD":"Democratic Republic of the Congo","CZ":"Czech Republic","CY":"Cyprus","CX":"Christmas Island","CR":"Costa Rica","CW":"Curacao","CV":"Cape Verde","CU":"Cuba","SZ":"Swaziland","SY":"Syria","SX":"Sint Maarten","KG":"Kyrgyzstan","KE":"Kenya","SS":"South Sudan","SR":"Suriname","KI":"Kiribati","KH":"Cambodia","KN":"Saint Kitts and Nevis","KM":"Comoros","ST":"Sao Tome and Principe","SK":"Slovakia","KR":"South Korea","SI":"Slovenia","KP":"North Korea","KW":"Kuwait","SN":"Senegal","SM":"San Marino","SL":"Sierra Leone","SC":"Seychelles","KZ":"Kazakhstan","KY":"Cayman Islands","SG":"Singapore","SE":"Sweden","SD":"Sudan","DO":"Dominican Republic","DM":"Dominica","DJ":"Djibouti","DK":"Denmark","VG":"British Virgin Islands","DE":"Germany","YE":"Yemen","DZ":"Algeria","US":"United States","UY":"Uruguay","YT":"Mayotte","UM":"United States Minor Outlying Islands","LB":"Lebanon","LC":"Saint Lucia","LA":"Laos","TV":"Tuvalu","TW":"Taiwan","TT":"Trinidad and Tobago","TR":"Turkey","LK":"Sri Lanka","LI":"Liechtenstein","LV":"Latvia","TO":"Tonga","LT":"Lithuania","LU":"Luxembourg","LR":"Liberia","LS":"Lesotho","TH":"Thailand","TF":"French Southern Territories","TG":"Togo","TD":"Chad","TC":"Turks and Caicos Islands","LY":"Libya","VA":"Vatican","VC":"Saint Vincent and the Grenadines","AE":"United Arab Emirates","AD":"Andorra","AG":"Antigua and Barbuda","AF":"Afghanistan","AI":"Anguilla","VI":"U.S. Virgin Islands","IS":"Iceland","IR":"Iran","AM":"Armenia","AL":"Albania","AO":"Angola","AQ":"Antarctica","AS":"American Samoa","AR":"Argentina","AU":"Australia","AT":"Austria","AW":"Aruba","IN":"India","AX":"Aland Islands","AZ":"Azerbaijan","IE":"Ireland","ID":"Indonesia","UA":"Ukraine","QA":"Qatar","MZ":"Mozambique"}')
    },
    "7c6f": function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "tierSymbol"
            }, [a("svg", {
                staticClass: "tierSymbol__svg"
            }, [a("mask", {
                attrs: {
                    maskUnits: "objectBoundingBox",
                    maskContentUnits: "objectBoundingBox",
                    id: "imageMask"
                }
            }, [a("linearGradient", {
                attrs: {
                    id: "maskGradient",
                    gradientUnits: "objectBoundingBox",
                    y2: "0.5",
                    x2: "1",
                    y1: "0.5",
                    x1: "0"
                }
            }, [a("stop", {
                attrs: {
                    "stop-color": "white",
                    "stop-opacity": "0",
                    offset: "0"
                }
            }), a("stop", {
                attrs: {
                    "stop-color": "white",
                    "stop-opacity": "1",
                    offset: "0.5"
                }
            }), a("stop", {
                attrs: {
                    "stop-color": "white",
                    "stop-opacity": "0",
                    offset: "1"
                }
            })], 1), a("rect", {
                ref: "mask",
                attrs: {
                    width: "0.5",
                    height: "1",
                    y: "0",
                    x: "-1",
                    "stroke-width": "0",
                    fill: "url(#maskGradient)"
                }
            })], 1), a("defs", [a("filter", {
                attrs: {
                    id: "brightness"
                }
            }, [a("feComponentTransfer", [a("feFuncR", {
                attrs: {
                    type: "linear",
                    slope: "2"
                }
            }), a("feFuncG", {
                attrs: {
                    type: "linear",
                    slope: "2"
                }
            }), a("feFuncB", {
                attrs: {
                    type: "linear",
                    slope: "2"
                }
            })], 1)], 1)]), a("image", {
                staticClass: "tierSymbol__image",
                staticStyle: {
                    mask: "url(#imageMask)"
                },
                attrs: {
                    "xlink:href": e.image,
                    width: "100%",
                    height: "100%",
                    filter: "url(#brightness)"
                }
            })]), a("img", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        ratioOnWidth: e.$props.ratioOnWidth,
                        ratioOnHeight: e.$props.ratioOnHeight
                    },
                    expression: "{\n      'ratioOnWidth': $props.ratioOnWidth,\n      'ratioOnHeight': $props.ratioOnHeight\n    }"
                }],
                staticClass: "tierSymbol__image",
                attrs: {
                    src: e.image
                }
            })])
        }
          , n = []
          , r = (a("a9e3"),
        a("cffa"))
          , i = a("60a1")
          , s = a("31b0")
          , c = {
            name: "TierSymbol",
            mixins: [s["a"]],
            props: {
                tier: {
                    type: [String, Number],
                    default: i["TIER_LEVEL_1"]
                },
                ratioOnWidth: {
                    type: Boolean,
                    default: !1
                },
                ratioOnHeight: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                image: function() {
                    switch (this.$props.tier) {
                    case i["TIER_LEVEL_BOOST_EXPRESS"]:
                        return a("605c");
                    case i["TIER_LEVEL_1"]:
                        return a("0e22");
                    case i["TIER_LEVEL_2"]:
                        return a("cc53");
                    case i["TIER_LEVEL_3"]:
                        return a("10ed");
                    case i["TIER_LEVEL_4"]:
                        return a("948c");
                    case i["TIER_LEVEL_5"]:
                        return a("2c78");
                    case i["TIER_LEVEL_6"]:
                        return a("3b77");
                    default:
                        return a("0e22")
                    }
                }
            },
            watch: {
                isOver: function(e) {
                    r["b"].to(this.$el, {
                        scale: e ? 1.05 : 1,
                        duration: .2
                    })
                },
                isPressed: function(e, t) {
                    var a = this;
                    r["b"].to(this.$el, {
                        scale: e ? .95 : 1.05,
                        duration: .2
                    }),
                    0 === r["b"].getTweensOf(this.$refs.mask, !0).length && !1 === e && r["b"].fromTo(this.$refs.mask, {
                        x: "0px",
                        rotation: 15,
                        onStart: function() {
                            a.isAnimating = !0
                        }
                    }, {
                        x: "2px",
                        rotation: 15,
                        duration: 1.5,
                        ease: "power2.out",
                        onComplete: function() {
                            a.isAnimating = !1
                        }
                    })
                }
            }
        }
          , u = c
          , l = (a("1534"),
        a("2877"))
          , d = Object(l["a"])(u, o, n, !1, null, "4f87cefa", null);
        t["a"] = d.exports
    },
    "80a4": function(e, t, a) {},
    "81d7": function(e, t, a) {
        "use strict";
        var o = a("2b0e")
          , n = a("a925")
          , r = a("aea9")
          , i = a("60a1");
        o["a"].use(n["a"]);
        var s = new n["a"]({
            locale: i["DEFAULT_LANG"],
            fallbackLocale: i["DEFAULT_LANG"],
            messages: r
        });
        t["a"] = s
    },
    8626: function(e, t, a) {
        e.exports = a.p + "img/arrow-scroll-right-green.7a79ccf3.svg"
    },
    "87e5": function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-BOOM_BEACH.9e7874b5.jpg"
    },
    "87fc": function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-mobile-BOOM_BEACH.a5a59beb.jpg"
    },
    "891f": function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-CLASH_ROYALE.acfe7107.jpg"
    },
    "8a2f": function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        centered: e.$props.centered,
                        withInfo: "" !== e.$props.labelInfo,
                        withTooltip: "" !== e.$props.tooltip,
                        withRequired: e.$props.required,
                        inverted: e.$props.inverted
                    },
                    expression: "{\n    'centered': $props.centered,\n    'withInfo': $props.labelInfo !== '',\n    'withTooltip': $props.tooltip !== '',\n    'withRequired': $props.required,\n    'inverted': $props.inverted\n  }"
                }],
                staticClass: "formElementInfo"
            }, [o("div", {
                staticClass: "formElementInfo__labelWrapper"
            }, [o("div", {
                staticClass: "formElementInfo__labelWrapperInner"
            }, [e.$props.label ? o("p", {
                staticClass: "formElementInfo__label",
                domProps: {
                    textContent: e._s(e.$props.label)
                }
            }) : e._e(), e.$props.clickToEdit ? o("div", {
                staticClass: "formElementInfo__editButton"
            }, [o("TextButton", {
                attrs: {
                    label: "Edit",
                    small: "",
                    hoverUnderlined: "",
                    color: e.$props.inverted ? "white" : "green"
                },
                nativeOn: {
                    click: function(t) {
                        return e.onClickEdit.apply(null, arguments)
                    }
                }
            })], 1) : e._e()]), e.$props.tooltip ? o("img", {
                staticClass: "formElementInfo__infoIcon",
                attrs: {
                    src: a("1531")
                },
                on: {
                    mouseover: e.mouseOverInfoIcon,
                    mouseout: e.mouseOutInfoIcon,
                    click: e.clickInfoIcon
                }
            }) : e._e(), e.$props.tooltip ? o("div", {
                staticClass: "formElementInfo__tooltip"
            }, [o("Tooltip", {
                attrs: {
                    open: e.isTooltipOpen,
                    arrowAlign: "right",
                    edgeMargin: 0,
                    noPadding: ""
                },
                on: {
                    clickoutside: e.closeTooltip
                }
            }, [o("div", {
                staticClass: "formElementInfo__tooltipInner"
            }, [e.$props.tooltipTitle ? o("p", {
                staticClass: "formElementInfo__tooltipTitle",
                domProps: {
                    textContent: e._s(e.$props.tooltipTitle)
                }
            }) : e._e(), o("p", {
                staticClass: "formElementInfo__tooltipText",
                domProps: {
                    textContent: e._s(e.$props.tooltip)
                }
            })])])], 1) : e._e()]), e.$props.required ? o("p", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["required"],
                    expression: "['required']"
                }],
                staticClass: "formElementInfo__label",
                domProps: {
                    textContent: e._s("*")
                }
            }) : e._e(), e.$props.labelInfo ? o("p", {
                staticClass: "formElementInfo__label--info",
                domProps: {
                    textContent: e._s(e.$props.labelInfo)
                }
            }) : e._e(), e._t("default"), e.$props.description ? o("p", {
                directives: [{
                    name: "link-parser",
                    rawName: "v-link-parser"
                }],
                staticClass: "formElementInfo__description",
                domProps: {
                    innerHTML: e._s(e.sanitizeString(e.$props.description))
                }
            }) : e._e()], 2)
        }
          , n = []
          , r = a("3277")
          , i = a("a337")
          , s = a("ec0e")
          , c = {
            name: "FormElementInfo",
            mixins: [r["a"]],
            components: {
                TextButton: i["a"],
                Tooltip: s["a"]
            },
            props: {
                label: {
                    type: String,
                    default: ""
                },
                labelInfo: {
                    type: String,
                    default: ""
                },
                tooltipTitle: {
                    type: String,
                    default: ""
                },
                tooltip: {
                    type: String,
                    default: ""
                },
                description: {
                    type: String,
                    default: ""
                },
                centered: {
                    type: Boolean,
                    default: !1
                },
                required: {
                    type: Boolean,
                    default: !1
                },
                inverted: {
                    type: Boolean,
                    default: !1
                },
                clickToEdit: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    isTooltipOpen: !1
                }
            },
            methods: {
                onClickEdit: function() {
                    this.$emit("editClick")
                },
                mouseOverInfoIcon: function() {
                    window.Modernizr.touchevents || this.openTooltip()
                },
                mouseOutInfoIcon: function() {
                    window.Modernizr.touchevents || this.closeTooltip()
                },
                clickInfoIcon: function() {
                    this.toggleTooltip()
                },
                openTooltip: function() {
                    this.isTooltipOpen = !0
                },
                closeTooltip: function() {
                    this.isTooltipOpen = !1
                },
                toggleTooltip: function() {
                    window.Modernizr.touchevents && this.isTooltipOpen || (this.isTooltipOpen = !this.isTooltipOpen)
                }
            }
        }
          , u = c
          , l = (a("3608"),
        a("2877"))
          , d = Object(l["a"])(u, o, n, !1, null, "25270d72", null);
        t["a"] = d.exports
    },
    "8afa": function(e, t, a) {},
    "8b70": function(e, t, a) {
        var o = a("7037").default;
        a("4d63"),
        a("c607"),
        a("ac1f"),
        a("2c3e"),
        a("25f0"),
        a("5319"),
        a("a15b"),
        a("b0c0"),
        a("1276"),
        function(e, t, a) {
            function n(e) {
                var t = m.className
                  , a = p._config.classPrefix || "";
                if (f && (t = t.baseVal),
                p._config.enableJSClass) {
                    var o = new RegExp("(^|\\s)" + a + "no-js(\\s|$)");
                    t = t.replace(o, "$1" + a + "js$2")
                }
                p._config.enableClasses && (t += " " + a + e.join(" " + a),
                f ? m.className.baseVal = t : m.className = t)
            }
            function r(e, t) {
                return o(e) === t
            }
            function i() {
                var e, t, a, o, n, i, s;
                for (var c in d)
                    if (d.hasOwnProperty(c)) {
                        if (e = [],
                        t = d[c],
                        t.name && (e.push(t.name.toLowerCase()),
                        t.options && t.options.aliases && t.options.aliases.length))
                            for (a = 0; a < t.options.aliases.length; a++)
                                e.push(t.options.aliases[a].toLowerCase());
                        for (o = r(t.fn, "function") ? t.fn() : t.fn,
                        n = 0; n < e.length; n++)
                            i = e[n],
                            s = i.split("."),
                            1 === s.length ? p[s[0]] = o : (!p[s[0]] || p[s[0]]instanceof Boolean || (p[s[0]] = new Boolean(p[s[0]])),
                            p[s[0]][s[1]] = o),
                            l.push((o ? "" : "no-") + s.join("-"))
                    }
            }
            function s() {
                return "function" != typeof t.createElement ? t.createElement(arguments[0]) : f ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
            }
            function c() {
                var e = t.body;
                return e || (e = s(f ? "svg" : "body"),
                e.fake = !0),
                e
            }
            function u(e, a, o, n) {
                var r, i, u, l, d = "modernizr", _ = s("div"), p = c();
                if (parseInt(o, 10))
                    for (; o--; )
                        u = s("div"),
                        u.id = n ? n[o] : d + (o + 1),
                        _.appendChild(u);
                return r = s("style"),
                r.type = "text/css",
                r.id = "s" + d,
                (p.fake ? p : _).appendChild(r),
                p.appendChild(_),
                r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(t.createTextNode(e)),
                _.id = d,
                p.fake && (p.style.background = "",
                p.style.overflow = "hidden",
                l = m.style.overflow,
                m.style.overflow = "hidden",
                m.appendChild(p)),
                i = a(_, e),
                p.fake ? (p.parentNode.removeChild(p),
                m.style.overflow = l,
                m.offsetHeight) : _.parentNode.removeChild(_),
                !!i
            }
            var l = []
              , d = []
              , _ = {
                _version: "3.6.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(e, t) {
                    var a = this;
                    setTimeout((function() {
                        t(a[e])
                    }
                    ), 0)
                },
                addTest: function(e, t, a) {
                    d.push({
                        name: e,
                        fn: t,
                        options: a
                    })
                },
                addAsyncTest: function(e) {
                    d.push({
                        name: null,
                        fn: e
                    })
                }
            }
              , p = function() {};
            p.prototype = _,
            p = new p;
            var m = t.documentElement
              , f = "svg" === m.nodeName.toLowerCase()
              , h = _._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
            _._prefixes = h;
            var g = _.testStyles = u;
            p.addTest("touchevents", (function() {
                var a;
                if ("ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch)
                    a = !0;
                else {
                    var o = ["@media (", h.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                    g(o, (function(e) {
                        a = 9 === e.offsetTop
                    }
                    ))
                }
                return a
            }
            )),
            i(),
            n(l),
            delete _.addTest,
            delete _.addAsyncTest;
            for (var b = 0; b < p._q.length; b++)
                p._q[b]();
            e.Modernizr = p
        }(window, document)
    },
    "8c77": function(e, t, a) {
        "use strict";
        a.r(t),
        t["default"] = '\n  <h1>Creators Terms<h1>\n  <h3>Effective Date: 14 January, 2022</h3>\n  <p>The terms of this agreement ("Creators Terms") govern the relationship between you or, as applicable, the company or other legal entity you represent (“you”) and Supercell Oy, a Finnish company (business ID 2336509-6) having its registered office at Jätkäsaarenlaituri 1, 00180 Helsinki, Finland, (hereinafter "Supercell" or "Us" or "We") regarding your application and participation to the creator program (“Program”) of Supercell. Your application and participation to the Program is also governed by Supercell\'s Privacy Policy and other relevant policies of Supercell, which are incorporated herein by reference and may be updated from time-to-time. Before making an application and before joining the Program, you must agree to these Creators Terms and the Privacy Policy. You may also be required to register an account on Our game services. By applying or joining the Program, you represent that you are the legal age of majority in your country of residence. If you are not, your legal guardian must review and agree to these Creators Terms. BY APPLYING OR JOINING THE PROGRAM, YOU AGREE TO THESE CREATORS TERMS. IF YOU DO NOT AGREE TO THESE CREATORS TERMS, PLEASE DO NOT APPLY OR JOIN THE PROGRAM. Supercell reserves the right, at its discretion, to change, modify, add or remove portions of these Creators Terms, its Privacy Policy and other relevant Supercell policies at any time by posting the amended terms on the Program website. You will be deemed to have accepted such changes by continuing to participate to the Program.</p>\n  <h2>1. Application to the Creator Program</h2>\n  <p>You are eligible to apply to the Program if (i) you are a content creator on a relevant platform, for example YouTube, Twitch, Facebook or website (“Platform”); (ii) your account on the relevant Platform (“Channel”) has, at least, 5,000 followers, subscribers or other individual audience members; (iii) the content published on your Channel can be deemed to be meaningful or benefit the community around Supercell’s games and, at least, half of the content published on your relevant account is related to Our games; and (iv) you are in compliance with the terms and conditions of any relevant Platform. You need to stay compliant with the eligibility criteria at all times during your participation to the Program. The eligibility criteria are subject to change in Our sole discretion and the up-to-date eligibility criteria is provided on the Program website. To apply to the Program, you need to complete the application process available at creators.supercell.com and provide Us with the information requested. We will evaluate your application and notify you of your acceptance or rejection. We reserve the right, at Our sole discretion, to accept or decline without giving any explanations or justifications, any applications for the Program. If your application is approved, you need to come back to the Program website to join the Program and to commit to these Creators Terms. Regardless of your acceptance in the Program, We may terminate your participation in the Program and the agreement governed by these Creators Terms for any reason, at any time.</p>\n  <h2>2. Confidentiality and Your other Obligations</h2>\n  <p>You agree and understand that all information related to the Program and all information and materials provided to the members of the Program (EXCEPT FOR FANKITS AND OTHER ITEMS THAT ARE CLEARLY INTENDED FOR USE IN YOUR MEDIA), through the Program website or otherwise, is confidential information. in particular (but not limiting to), the information about the unpublished new features, characters, updates, games and other content or elements of Our Games (collectively “New Features”) are always regarded as confidential information. We may make information and materials about the new features available to you and other program members before making it available to the public. You agree to (1) keep all confidential information in confidence; (2) not disclose any such confidential information to anyone; and (3) undertake to use confidential information, and in particular, information about the new features, only for the purposes of the Program and in strict compliance with the instructions of Supercell. Any breach of this confidentiality undertaking is a material breach of these creators terms and may lead to immediate and permanent termination of your participation in the program. During your participation in the Program, you shall regularly share content related to Supercell’s games, including without limitation Brawl Stars, Clash of Clans, Hay Day, Boom Beach and Clash Royale (“Games”), and to Supercell on your Channels. All videos, social media posts, photos, text and other material created or published by you (“Media”) shall portrait the Games and Supercell positively and you agree to comply with all relevant policies of Supercell. These include (without limitation) (i) the fan content policy (<a href="https://supercell.com/en/fan-content-policy/" target="_blank">https://supercell.com/en/fan-content-policy/</a>), (ii) the Supercell Terms of Service (<a href="https://supercell.com/en/terms-of-service/" target="_blank">https://supercell.com/en/terms-of-service/</a>) and the Program policies communicated by Supercell to you through the Program website or by any other means. We may update these policies from time-to-time and provide additional instructions and guidelines and you agree to comply with these policies. Our aim is to provide you and other members of the Program with support, information and connection to other members of the Program and the community around Supercell Games. There may be different ‘tiers’ in the Program, meaning that members may get different access rights and benefits as they progress to higher tiers in the Program. Additional terms and conditions or policies may apply to different tiers of the Program and your progress and right to remain on a certain tier is always subject to full compliance with such additional terms or policies (as amended by Us in Our sole discretion from time-to-time). You are responsible for and shall bear your own costs and expenses relating to the creation, producing, publishing and other exploitation of the Media. You shall comply with all relevant terms and conditions and other policies of all relevant Platforms, including without limitation the rules relating to the disclosure of commercial cooperation, as applicable. You understand that Supercell has no obligation to make any Media available on Our Services or to otherwise use the Media any way. Furthermore, We are constantly developing Our Services and creating new content. Some of the new features or content may be similar to your Media. You understand and agree that your Media does not anyhow restrict or limit Supercell from developing, creating and making available similar content compared to your Media.</p>\n  <p>We may provide you and other members of the Program with various support as part of the Program which may include advice and other input related to your Channel. You are free to use the results of such support (excluding Supercell Assets, which use is governed by Section 4 of these Creators Terms and the fan content policy) on your Channel. The Program, support and related results are provided on an “as is” and “as available” basis. We make no representations or warranties of any kind, express or implied, as to the availability, quality, information, materials or other services made available as part of the Program. You expressly agree that your use of the Program, support or any related materials is at your sole risk.</p>\n  <h2>3. Representation and Warranties</h2>\n  <p>You represent and warrant that:</p>\n  <ol>\n    <li>all Media published or used is not in violation of any relevant Platforms’ policies or terms and conditions, Supercell’s fan content policy (<a href="https://supercell.com/en/fan-content-policy/" target="_blank">https://supercell.com/en/fan-content-policy/</a>), Supercell Terms of Service (<a href="https://supercell.com/en/terms-of-service/" target="_blank">https://supercell.com/en/terms-of-service/</a>), other Program policies communicated by Supercell to you through the Program website or by any other means, laws, contractual restrictions or other third-party rights, and that you have permission from any third party whose image, voice, name, personal information or intellectual property is comprised in the Media;</li>\n    <li>the Media published or used, or the exercise of the rights granted to Supercell under these Creators Terms does not infringe or violate any copyrights, trademarks, trade names, design rights, contract rights, rights of publicity or privacy or other rights of any person or defame any person;</li>\n    <li>the Media published or used is not abusive, threatening, obscene, defamatory, libelous or otherwise promote illegal activities or conduct;</li>\n    <li>your Media is free of viruses, adware, spyware, worms or other malicious code;</li>\n    <li>Supercell’s exercise of the rights granted by you under these Creators Terms will not give rise to any obligation to pay you or any third party any fee, royalty or other payments;</li>\n    <li>you have every legal right to enter into these Creators Terms and to grant the rights granted herein without violating the rights of any third party;</li>\n    <li>your Media is free and clear of any pending or threatened litigation;</li>\n    <li>your Media is non-confidential in nature;</li>\n    <li>you have not made, nor will make, any agreement or commitment with any third party which would prevent or interfere in any way with the full and complete performance of your obligations under these Creators Terms or the exercise of the rights herein granted to Supercell; and</li>\n    <li>you shall at all times and at your own expense (a) comply with all applicable laws, regulations, and rules, including without limitation FTC disclosure requirements for endorsements and testimonials; (b) comply with all Platforms’ terms and conditions and other applicable policies; (c) pay all fees and other charges required by such laws; and (iv) maintain in full force and effect all licenses, permits, authorizations, registrations and qualifications necessary to perform your obligations under these Creators Terms.</li>\n  </ol>\n  <h2>4. Your License to Supercell; Supercell Assets</h2>\n  <p>You hereby grant to Supercell an irrevocable, perpetual, transferrable, non-exclusive, worldwide, fully paid up and royalty free right and license (including the right to sublicense and assign rights further to third parties) to use, copy, publish, transmit, publicly display, publicly perform, provide access to electronically, broadcast, communicate to the public and otherwise exploit all Media and your (and your Channel’s) name, likeness, picture and reputation in connection with your Media in Our Games and for marketing and promotion purposes of the Games and Supercell. Supercell shall also have a perpetual right to use the Media and your (and your Channel’s) name, likeness, picture and reputation in connection with your Media in the company and history presentations of Supercell or its Games in any form (including text, videos, photos and other forms). You also hereby grant to Supercell the right to authorize others to exercise any of the rights granted to Supercell under these Creators Terms. Furthermore, you also grant Supercell the right to amend and modify your Media for the above purposes, for example, to make shorter versions of your videos or to compile highlights from several videos to one video. This means that we can use your Media and everything that is included in your Media for the purposes described above. Accordingly, please pay attention that your Media includes only such content that can be used as described herein. All rights you grant under these Creators Terms are cumulative and We may exercise or refrain from exercising any one or more of them separately from, simultaneously and/or in connection with any other rights you grant Us or with any rights We obtain from other sources. Supercell shall have the right to demand that you immediately delete or amend such Media or other uploads and posts where the Games or any other material originating from Supercell, including without limitation any Supercell’s trademarks, such as SUPERCELL, BRAWL STARS, CLASH OF CLANS, HAY DAY, BOOM BEACH, CLASH ROYALE and/or other trademarks, artwork, text, graphics, characters, assets, sounds, information, content and or other materials related to Supercell Games (“Supercell Assets”) are visible, mentioned or referred to. All copyrights, trademarks, domain names, trade name rights, trade secret rights, patents, design rights, other intellectual property and industrial property rights (of every kind and nature however designated) and any derivative works thereof in and to the Supercell Assets will, at all times, remain the exclusive property of Supercell.</p>\n  <h2>5. Compensation and Rewards</h2>\n  <p>You are not entitled to receive, and we are not obligated to pay any fee, compensation or other remuneration for your participation in the Program or for the Media posted by you on the Channels. However, We may, in Our sole discretion, implement a reward or revenue share program for members of the Program who have reached a certain tier in the Program. The more detailed terms of any reward or revenue share program are defined in the Program policies or in a separate agreement determined by Supercell. We may also, in our sole discretion, give away rewards, perks and other benefits either to you or to be passed on by you to the subscribers, followers or other audience of your Channel. Additional terms, policies and guidelines may also apply to such rewards, perks and benefits. For clarity, We reserve the right to cancel or suspend the payment or delivery of any compensation, reward, perk or other benefit at any time and indefinitely in Our sole discretion and, in particular, if We suspects fraud or other improper activity or a potential breach of any of the terms of these Creators Terms or the policies referred to in these Creators Terms. You understand and agree that (i) you don’t have any expectation of any compensation, rewards, perks or other benefits for Our participation to the Program or for the Media posted by you on the Channels and that the possible fees, rewards, perks and benefits are in the sole discretion of Supercell; (ii) all retail and other sales prices of any items related to the Supercell Games will be decided solely by Supercell; (iii) We may at any time cease charging a fee for the sales of any items related to Our Games or reduce the sales price (all the way to zero) and (vi) all compensations, rewards, Perks and benefits (if any) and the method how those are paid or delivered in connection with the Program are determined at Our sole discretion and we may change or remove these any time. As a precondition to all payments and any type of rewards in connection with the Program, you are required to provide all the necessary information and documents and to complete necessary tax forms to receive payment or the rewards. If you fail to provide Us with the above information, documents or forms as requested, We may not be able to pay you or provided you with the benefits. We may withhold any amounts required to be withheld under applicable laws and remit those amounts to the relevant tax authorities. You are responsible for notifying the relevant tax authorities and paying all taxes, duties, levies and other public charges on the amounts We may pay to you or on the rewards and other benefits We may provide to you.</p>\n  <p>We may in Our sole discretion arrange some contests or other promotions to the members of the Program. In addition to these Creator Terms, such contests and promotions are governed by Our fan contest terms (<a href="https://supercell.com/en/fan-contest-terms/" target="_blank">https://supercell.com/en/fan-contest-terms/</a>) and more detailed information and rules are determined by Us and informed to all participants in the contest notice or otherwise. We may cancel or suspend the contests or otherwise alter the rules of the contests at any time in Our sole discretion.</p>\n  <h2>6. Reporting</h2>\n  <p>We may, at our discretion, make available reports regarding Our utilization of your Media or other results of related to the Media posted by you on the Channels.</p>\n  <h2>7. Term and Termination</h2>\n  <p>The term of the agreement governed by these Creators Terms will begin upon Our acceptance of your Program application and you committing to these Creators Terms. The term of the agreement governed by these Creators Terms will end when terminated by Us or by you. We and you may terminate this agreement at any time, with or without cause. If you violate these Creators Terms or any policies referred to in these Creators Terms, We may immediately terminate you participation in the Program and the agreement governed by these Creators Terms. In such an event, you immediately forfeit all rights, rewards, perks and other benefits that you may have had based on the Program and these Creators Terms. Supercell reserves the right to remove you from the Program, and to terminate or suspend the Program or the agreement governed by these Creators Terms, at any time for any or no reason, in Our sole discretion.</p>\n  <h2>8. Limitation of Liability; Sole and Exclusive Remedy; Indemnification</h2>\n  <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, SUPERCELL SHALL NOT BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE OR OTHER SIMILAR DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF REVENUES, LOST PROFITS, LOST DATA OR BUSINESS INTERRUPTION OR OTHER INTANGIBLE LOSSES (HOWEVER SUCH LOSSES ARE QUALIFIED), ARISING OUT OF OR RELATING IN ANY WAY TO THESE CREATORS TERMS, THE USE OF YOUR MEDIA OR OUR GAMES AND OTHER SERVICES, WHETHER BASED ON CONTRACT, TORT OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT SUPERCELL HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. TO THE EXTENT NOT PROHIBITED BY LAW, SUPERCELL SHALL NOT BE LIABLE TO YOU FOR MORE THAN THE AMOUNT OF 20 EUROS. NOTHING IN THESE CREATORS TERMS SHALL AFFECT THE STATUTORY RIGHTS OF ANY CONSUMER OR EXCLUDE OR RESTRICT ANY LIABILITY RESULTING FROM GROSS NEGLIGENCE OR WILLFUL MISCONDUCT OF SUPERCELL OR FOR DEATH OR PERSONAL INJURY ARISING FROM ANY NEGLIGENCE OR FRAUD OF SUPERCELL. You agree to indemnify, defend and hold Supercell (and our officers, directors, agents, subsidiaries, joint ventures and employees) harmless from any claim, demand, damages or other losses, including reasonable attorneys\' fees, asserted by any third-party resulting from or arising out of your Media, or any breach by you of these Creators Terms (including all policies referred to in these Creators Terms).</p>\n  <h2>9. Dispute Resolution and Law</h2>\n  <p>If a dispute arises between you and Supercell, We strongly encourage you to first contact Us directly to seek a resolution by going to Our customer support site at <a href="https://support.supercell.com/" target="_blank">https://support.supercell.com/</a>. You agree that all disputes between you and Supercell shall be governed by the laws of Finland, without regard to conflict of law provisions. Any dispute, controversy or claim arising out of or relating to the Program or these Creators Terms, or the breach, termination or validity thereof, will be finally settled by arbitration in accordance with the Arbitration Rules of the Finland Chamber of Commerce in Helsinki, Finland. The language of the arbitration shall be English. The arbitration procedure and all related material and information is treated as confidential information under these Creators Terms. Supercell may seek interim injunctive relief(s) from competent jurisdiction as well as the enforcement of the arbitral award.</p>\n  <h2>10. Severability</h2>\n  <p>You and Supercell agree that if any portion of these Creators Terms or of the Supercell Privacy Policy is found illegal or unenforceable, in whole or in part by any court of competent jurisdiction, such provision shall, as to such jurisdiction, be ineffective solely to the extent of such determination of invalidity or unenforceability without affecting the validity or enforceability thereof in any other manner or jurisdiction and without affecting the remaining provisions of the terms, which shall continue to be in full force and effect.</p>\n  <h2>11. General Provisions</h2>\n  <h2>11.1. Assignment</h2>\n  <p>Supercell may assign or delegate these Creators Terms and/or the Supercell Privacy Policy, in whole or in part, to any person or entity at any time with or without your consent. You may not assign or delegate any rights or obligations under the Creators Terms or Privacy Policy without Supercell\'s prior written consent, and any unauthorized assignment and delegation by you is ineffective.</p>\n  <h2>11.2. Supplemental Policies</h2>\n  <p>Supercell may publish additional policies related to specific services such as Program tiers, forums, contests or loyalty programs. Your right to use such services is subject to those specific policies and these Creators Terms.</p>\n  <h2>11.3. Entire Agreement</h2>\n  <p>These Creators Terms, any supplemental policies and any documents expressly incorporated by reference herein (including the Supercell Privacy Policy), contain the entire understanding of you and Supercell, and supersede all prior understandings of the parties hereto relating to the subject matter hereof, whether electronic, oral or written, or whether established by custom, practice, policy or precedent, between you and us with respect to your Submission.</p>\n  <h2>11.4. No Waiver</h2>\n  <p>The failure of Supercell to require or enforce strict performance by you of any provision of these Creators Terms or the Supercell Privacy Policy or failure to exercise any right under them shall not be construed as a waiver or relinquishment of Supercell\'s right to assert or rely upon any such provision or right in that or any other instance. The express waiver by Supercell of any provision, condition, or requirement of these Creators Terms or the Supercell Privacy Policy shall not constitute a waiver of any future obligation to comply with such provision, condition or requirement. Except as expressly and specifically set forth in this these Creators Terms, no representations, statements, consents, waivers, or other acts or omissions by Supercell shall be deemed a modification of these Creators Terms nor legally binding, unless documented in physical writing, hand signed by you and a duly appointed officer of Supercell.</p>\n  <h2>11.5. Notices</h2>\n  <p>We may notify you via postings on the Program website or any other communications means to contact information you provide to Us. All notices given by you or required from you under these Creators Terms or the Supercell Privacy Policy shall be in writing and addressed to: Supercell Oy. Attn: Legal, Itämerenkatu 11-13, FI- 00180 Helsinki, Finland. Any notices that you provide without compliance with this Section on Notices shall have no legal effect.</p>\n  <h2>11.6. Equitable Remedies</h2>\n  <p>You acknowledge that the rights granted and obligations made under these Creators Terms to Supercell are of a unique and irreplaceable nature, the loss of which shall irreparably harm Supercell and which cannot be replaced by monetary damages alone so that Supercell shall be entitled to injunctive or other equitable relief (without the obligations of posting any bond or surety or proof of damages) in the event of any breach or anticipatory breach by you. You irrevocably waive all rights to seek injunctive or other equitable relief, or to enjoin or restrain the operation of Supercell Games or other services, exploitation of any advertising or other materials issued in connection therewith, or exploitation of the Games or any content or other material used or displayed through the Games and agree to limit your claims to claims for monetary damages, limited by Section 8 Limitation of Liability; Sole and Exclusive Remedy; Indemnification (if any).</p>\n  <h2>11.7. Force Majeure</h2>\n  <p>Supercell shall not be liable for any delay or failure to perform resulting from causes outside the reasonable control of Supercell, including without limitation any failure to perform hereunder due to unforeseen circumstances or cause beyond Supercell\'s control such as acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation facilities, fuel, energy, labor or materials.</p>\n  <h2>11.8 Relationship of the Parties; No Agency</h2>\n  <p>You understand and agree that you are (i) an independent contractor (not an employee or other agent) solely responsible for the manner and hours in which the promotion services and your other obligations are performed; (ii) solely responsible for all taxes, withholdings and other statutory, regulatory or contractual obligations of any sort (including, but not limited to, those relating to workers’ compensation, disability insurance, social security, unemployment compensation coverage, income taxes, etc.); and (iii) not entitled to participate in any employee benefit plans, fringe benefit programs, group insurance arrangements or similar programs of Supercell. Nothing in these Creators Terms is intended to, or operates to, create a partnership between you and Supercell, or to authorize you to act as agent for Supercell, and you shall not have an authority to act in the name or on behalf of or otherwise to bind Supercell in any way (including the making of any representation or warranty, the assumption of any obligation or liability and the exercise of any right or power).</p>\n'
    },
    "8d75": function(e, t, a) {
        e.exports = a.p + "img/arrow-scroll-right.32537ed2.svg"
    },
    "8f71": function(e, t, a) {
        "use strict";
        a("645b")
    },
    "8fc0": function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-mobile-CLASH_OF_CLANS.90f0fb57.jpg"
    },
    9406: function(e, t, a) {
        "use strict";
        a("80a4")
    },
    "948c": function(e, t, a) {
        e.exports = a.p + "img/tier-symbol-4.973e6d92.png"
    },
    9688: function(e, t, a) {},
    9844: function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-mobile-BRAWL_STARS.c21b4096.jpg"
    },
    "9bd6": function(e, t, a) {
        "use strict";
        a("defa")
    },
    "9c0c": function(e, t, a) {},
    "9c38": function(e, t, a) {
        e.exports = a.p + "img/icon-tier6.32fb9a81.svg"
    },
    "9ec7": function(e, t, a) {
        "use strict";
        a("a48f")
    },
    a0e6: function(e, t, a) {
        e.exports = a.p + "img/icon-tier3.94184715.svg"
    },
    a18c: function(e, t, a) {
        "use strict";
        a.d(t, "b", (function() {
            return ea
        }
        ));
        var o = a("ade3")
          , n = a("5530")
          , r = (a("d3b7"),
        a("3ca3"),
        a("ddb0"),
        a("b0c0"),
        a("caad"),
        a("2532"),
        a("ac1f"),
        a("5319"),
        a("2b0e"))
          , i = a("8c4f")
          , s = a("47b7")
          , c = "HEADER_DISABLED"
          , u = "REQUIRES_AUTH"
          , l = a("60a1")
          , d = a("4360")
          , _ = function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        offScreen: e.generalShowPageLoader
                    },
                    expression: "{'offScreen': generalShowPageLoader}"
                }],
                staticClass: "defaultHeader"
            }, [o("div", {
                staticClass: "defaultHeader__main"
            }, [o("Block", [o("div", {
                staticClass: "defaultHeader__content"
            }, [o("div", {
                staticClass: "defaultHeader__contentMiddle"
            }, [o("router-link", {
                staticClass: "defaultHeader__logoLink",
                attrs: {
                    "aria-label": "Supercell",
                    to: {
                        name: e.routeTypes.HOME.name
                    }
                }
            }, [o("img", {
                staticClass: "defaultHeader__logo",
                attrs: {
                    src: a("cf67"),
                    alt: "Supercell"
                }
            })])], 1), e.$props.disabled ? e._e() : o("div", {
                staticClass: "defaultHeader__contentRight"
            }, [o("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["first"],
                    expression: "['first']"
                }],
                staticClass: "defaultHeader__contentRightItem"
            }, [e.isLoginButtonVisible ? o("TextButton", {
                attrs: {
                    label: e.$t("gen_login")
                },
                nativeOn: {
                    click: function(t) {
                        return e.onClickLogin.apply(null, arguments)
                    }
                }
            }, [o("div", {
                staticClass: "defaultHeader__loginIcon",
                attrs: {
                    slot: "iconLeft"
                },
                slot: "iconLeft"
            })]) : e._e(), e.isLogoutButtonVisible ? o("TextButton", {
                attrs: {
                    label: e.$t("gen_logout")
                },
                nativeOn: {
                    click: function(t) {
                        return e.onClickLogout.apply(null, arguments)
                    }
                }
            }, [o("div", {
                staticClass: "defaultHeader__loginIcon",
                attrs: {
                    slot: "iconLeft"
                },
                slot: "iconLeft"
            })]) : e._e()], 1), e.isJoinButtonVisible ? o("div", {
                staticClass: "defaultHeader__contentRightItem"
            }, [o("DefaultButton", {
                attrs: {
                    to: {
                        name: e.routeTypes.REGISTER.name
                    },
                    label: e.$t("gen_join")
                }
            })], 1) : e._e(), e.isRightFeedButtonVisible ? o("div", {
                staticClass: "defaultHeader__contentRightItem"
            }, [o("HeaderButton", {
                attrs: {
                    label: e.$t("gen_fe"),
                    to: {
                        name: e.routeTypes.START.name
                    }
                }
            })], 1) : e._e(), e.isRightMyStuffButtonVisible ? o("div", {
                staticClass: "defaultHeader__contentRightItem"
            }, [o("HeaderButton", {
                attrs: {
                    label: e.$t("gen_ms"),
                    to: {
                        name: e.routeTypes.MY_STUFF.name
                    }
                }
            })], 1) : e._e(), e.isRightBoostButtonVisible ? o("div", {
                staticClass: "defaultHeader__contentRightItem"
            }, [o("HeaderButton", {
                attrs: {
                    label: e.$t("gen_boost"),
                    to: {
                        name: e.routeTypes.BOOST.name
                    }
                }
            })], 1) : e._e(), e.isUserButtonVisible ? o("div", {
                staticClass: "defaultHeader__contentRightItem"
            }, [o("div", {
                staticClass: "defaultHeader__userButtonWrapper"
            }, [o("HeaderButton", {
                attrs: {
                    label: e.userUsername,
                    to: {
                        name: e.routeTypes.USER.name
                    },
                    icon: e.userIcon
                }
            })], 1)]) : e._e()]), o("div", {
                staticClass: "defaultHeader__contentRightMobile"
            }, [e.isLoginButtonVisible ? o("span", {
                staticClass: "defaultHeader__loginButton",
                domProps: {
                    textContent: e._s(e.$t("gen_login"))
                },
                on: {
                    click: e.onClickLogin
                }
            }) : e._e(), e.isLogoutButtonVisible ? o("span", {
                staticClass: "defaultHeader__logoutButton",
                domProps: {
                    textContent: e._s(e.$t("gen_logout"))
                },
                on: {
                    click: e.onClickLogout
                }
            }) : e._e()])])])], 1)])
        }
          , p = []
          , m = a("2f62")
          , f = a("a51a")
          , h = a("a337")
          , g = a("0016")
          , b = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        disableActive: e.$props.disableActive,
                        disableExactActive: e.$props.disableExactActive
                    },
                    expression: "{\n    'disableActive': $props.disableActive,\n    'disableExactActive': $props.disableExactActive\n  }"
                }],
                staticClass: "headerButton"
            }, [a("BaseButton", {
                attrs: {
                    to: e.$props.to,
                    href: e.$props.href,
                    target: e.$props.target
                }
            }, [a("div", {
                staticClass: "headerButton__main"
            }, [e.$props.icon ? a("img", {
                staticClass: "headerButton__icon",
                attrs: {
                    src: e.iconSrc
                }
            }) : e._e(), a("p", {
                staticClass: "headerButton__label",
                domProps: {
                    textContent: e._s(e.$props.label)
                }
            })])])], 1)
        }
          , S = []
          , y = a("f76f")
          , v = {
            name: "HeaderButton",
            components: {
                BaseButton: y["a"]
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
                    type: [String, Object],
                    default: ""
                },
                icon: {
                    type: String,
                    validator: function(e) {
                        return -1 !== ["", "portal", "user", "tier1", "tier2", "tier3", "tier4", "tier5", "tier6"].indexOf(e)
                    },
                    default: ""
                },
                disableActive: {
                    type: Boolean,
                    default: !1
                },
                disableExactActive: {
                    type: Boolean,
                    default: !1
                },
                target: {
                    type: String,
                    default: "_self"
                }
            },
            computed: {
                iconSrc: function() {
                    switch (this.$props.icon) {
                    case "portal":
                        return a("6630");
                    case "user":
                        return a("5b46");
                    case "tier1":
                        return a("b13e");
                    case "tier2":
                        return a("399f");
                    case "tier3":
                        return a("a0e6");
                    case "tier4":
                        return a("b943");
                    case "tier5":
                        return a("2188");
                    case "tier6":
                        return a("9c38");
                    default:
                        return ""
                    }
                }
            }
        }
          , E = v
          , T = (a("44eb"),
        a("2877"))
          , C = Object(T["a"])(E, b, S, !1, null, "8407de16", null)
          , O = C.exports
          , A = {
            name: "DefaultHeader",
            components: {
                Block: f["a"],
                TextButton: h["a"],
                DefaultButton: g["a"],
                HeaderButton: O
            },
            props: {
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    routeTypes: s
                }
            },
            computed: Object(n["a"])(Object(n["a"])(Object(n["a"])({}, Object(m["c"])("general", {
                generalIsBodyScrollEnabled: "isBodyScrollEnabled",
                generalScrollBarGap: "scrollBarGap",
                generalShowPageLoader: "showPageLoader"
            })), Object(m["c"])("user", {
                userUsername: "username",
                userIsLoggedIn: "isLoggedIn",
                userIsApplicationStatusNone: "isApplicationStatusNone",
                userIsApplicationStatusNotReviewed: "isApplicationStatusNotReviewed",
                userIsApplicationStatusAccepted: "isApplicationStatusAccepted",
                userIsApplicationStatusRejected: "isApplicationStatusRejected",
                userTier: "tier",
                userIsBoostExpressUser: "isBoostExpressUser"
            })), {}, {
                isLoginButtonVisible: function() {
                    return !this.userIsLoggedIn && "0" === l["MAINTENANCE_MODE"]
                },
                isLogoutButtonVisible: function() {
                    return this.userIsLoggedIn && !this.userIsApplicationStatusAccepted
                },
                isJoinButtonVisible: function() {
                    return this.userIsApplicationStatusNone && "0" === l["MAINTENANCE_MODE"]
                },
                isUserButtonVisible: function() {
                    return this.userIsApplicationStatusAccepted
                },
                isRightFeedButtonVisible: function() {
                    return (this.userIsApplicationStatusNotReviewed || this.userIsApplicationStatusAccepted) && !this.userIsBoostExpressUser
                },
                isRightMyStuffButtonVisible: function() {
                    return (this.userIsApplicationStatusNotReviewed || this.userIsApplicationStatusAccepted) && !this.userIsBoostExpressUser
                },
                isRightBoostButtonVisible: function() {
                    return (this.userIsApplicationStatusNotReviewed || this.userIsApplicationStatusAccepted) && this.userIsBoostExpressUser
                },
                userIcon: function() {
                    switch (this.userTier) {
                    case l["TIER_LEVEL_1"]:
                        return "tier1";
                    case l["TIER_LEVEL_2"]:
                        return "tier2";
                    case l["TIER_LEVEL_3"]:
                        return "tier3";
                    case l["TIER_LEVEL_4"]:
                        return "tier4";
                    case l["TIER_LEVEL_5"]:
                        return "tier5";
                    case l["TIER_LEVEL_6"]:
                        return "tier6";
                    case l["TIER_LEVEL_BOOST_EXPRESS"]:
                        return "user";
                    default:
                        return "user"
                    }
                }
            }),
            methods: Object(n["a"])(Object(n["a"])({}, Object(m["b"])("user", {
                userLogin: "login",
                userLogout: "logout"
            })), {}, {
                onClickLogin: function() {
                    var e = this.$router.resolve({
                        name: s["START"].name
                    }).resolved.path;
                    this.userLogin(e)
                },
                onClickLogout: function() {
                    this.userLogout({
                        redirect: !0,
                        serverside: !0
                    })
                }
            }),
            watch: {
                generalIsBodyScrollEnabled: function(e) {
                    e ? this.$el.style.paddingRight = null : this.generalScrollBarGap > 0 && (this.$el.style.paddingRight = "".concat(this.generalScrollBarGap, "px"))
                }
            }
        }
          , I = A
          , w = (a("5816"),
        Object(T["a"])(I, _, p, !1, null, "60ee4e58", null))
          , R = w.exports
          , P = function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                staticClass: "defaultFooter"
            }, [o("div", {
                staticClass: "defaultFooter__main"
            }, [o("div", {
                staticClass: "defaultFooter__top"
            }, [o("Block", [o("div", {
                staticClass: "defaultFooter__topLeft"
            }, [o("p", {
                staticClass: "defaultFooter__socialTitle",
                domProps: {
                    textContent: e._s(e.$t("gen_fol"))
                }
            }), o("div", {
                staticClass: "defaultFooter__socialIconsWrapper"
            }, [o("div", {
                staticClass: "defaultFooter__socialIcon"
            }, [o("SocialButton", {
                attrs: {
                    inverted: !0,
                    href: e.$t("gen_yt"),
                    target: "_blank",
                    social: "youtube"
                }
            })], 1), o("div", {
                staticClass: "defaultFooter__socialIcon"
            }, [o("SocialButton", {
                attrs: {
                    inverted: !0,
                    href: e.$t("gen_fb"),
                    target: "_blank",
                    social: "facebook"
                }
            })], 1), o("div", {
                staticClass: "defaultFooter__socialIcon"
            }, [o("SocialButton", {
                attrs: {
                    inverted: !0,
                    href: e.$t("gen_ig"),
                    target: "_blank",
                    social: "instagram"
                }
            })], 1), o("div", {
                staticClass: "defaultFooter__socialIcon"
            }, [o("SocialButton", {
                attrs: {
                    inverted: !0,
                    href: e.$t("gen_tw"),
                    target: "_blank",
                    social: "twitter"
                }
            })], 1), o("div", {
                staticClass: "defaultFooter__socialIcon"
            }, [o("SocialButton", {
                attrs: {
                    inverted: !0,
                    href: e.$t("gen_li"),
                    target: "_blank",
                    social: "linkedin"
                }
            })], 1), o("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["last"],
                    expression: "['last']"
                }],
                staticClass: "defaultFooter__socialIcon"
            }, [o("SocialButton", {
                attrs: {
                    inverted: !0,
                    href: e.$t("gen_gd"),
                    target: "_blank",
                    social: "glassdoor"
                }
            })], 1)])]), o("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["first"],
                    expression: "['first']"
                }],
                staticClass: "defaultFooter__divider"
            }), o("div", {
                staticClass: "defaultFooter__topRight"
            }, [o("p", {
                staticClass: "defaultFooter__appTitle",
                domProps: {
                    textContent: e._s(e.$t("gen_down"))
                }
            }), o("a", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["apple"],
                    expression: "['apple']"
                }],
                staticClass: "defaultFooter__appButton",
                attrs: {
                    href: e.$t("gen_apap")
                }
            }, [o("img", {
                staticClass: "defaultFooter__appButtonImage",
                attrs: {
                    src: a("1f5d"),
                    alt: "App Store"
                }
            })]), o("a", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["google"],
                    expression: "['google']"
                }],
                staticClass: "defaultFooter__appButton",
                attrs: {
                    href: e.$t("gen_apgl")
                }
            }, [o("img", {
                staticClass: "defaultFooter__appButtonImage",
                attrs: {
                    src: a("4163"),
                    alt: "Google Play"
                }
            })])])])], 1), o("div", {
                staticClass: "defaultFooter__bottom"
            }, [o("Block", [o("div", {
                staticClass: "defaultFooter__divider"
            }), o("ul", {
                staticClass: "defaultFooter__linksWrapper"
            }, e._l(e.links, (function(e, t) {
                return o("li", {
                    key: "primary_item_" + t,
                    staticClass: "defaultFooter__link"
                }, [o("TextButton", {
                    attrs: {
                        label: e.label,
                        href: e.href,
                        to: e.to,
                        target: e.target,
                        footer: "",
                        color: "white"
                    }
                })], 1)
            }
            )), 0), o("div", {
                staticClass: "defaultFooter__end"
            }, [o("div", {
                staticClass: "defaultFooter__addressWrapper"
            }, [o("p", {
                staticClass: "defaultFooter__address",
                domProps: {
                    textContent: e._s(e.$t("gen_add1"))
                }
            }), o("p", {
                staticClass: "defaultFooter__address",
                domProps: {
                    textContent: e._s(e.$t("gen_add2"))
                }
            }), o("p", {
                staticClass: "defaultFooter__address",
                domProps: {
                    textContent: e._s(e.$t("gen_add3"))
                }
            }), o("p", {
                staticClass: "defaultFooter__address",
                domProps: {
                    textContent: e._s(e.$t("gen_add4"))
                }
            })]), o("a", {
                staticClass: "defaultFooter__supercellLogoWrapper",
                attrs: {
                    href: "https://supercell.com"
                }
            }, [o("img", {
                staticClass: "defaultFooter__supercellLogo",
                attrs: {
                    src: a("f658"),
                    alt: "Supercell"
                }
            })])])])], 1)])])
        }
          , L = []
          , N = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        link: "link" === e.$props.social,
                        twitter: "twitter" === e.$props.social,
                        facebook: "facebook" === e.$props.social,
                        twitch: "twitch" === e.$props.social,
                        reddit: "reddit" === e.$props.social,
                        youtube: "youtube" === e.$props.social,
                        instagram: "instagram" === e.$props.social,
                        linkedin: "linkedin" === e.$props.social,
                        glassdoor: "glassdoor" === e.$props.social,
                        inverted: e.$props.inverted,
                        over: e.isOver
                    },
                    expression: "{\n    'link': $props.social === 'link',\n    'twitter': $props.social === 'twitter',\n    'facebook': $props.social === 'facebook',\n    'twitch': $props.social === 'twitch',\n    'reddit': $props.social === 'reddit',\n    'youtube': $props.social === 'youtube',\n    'instagram': $props.social === 'instagram',\n    'linkedin': $props.social === 'linkedin',\n    'glassdoor': $props.social === 'glassdoor',\n    'inverted': $props.inverted,\n    'over': isOver\n  }"
                }],
                ref: "socialButton",
                staticClass: "socialButton",
                on: {
                    mouseover: e.onOver
                }
            }, [a("BaseButton", {
                attrs: {
                    to: e.$props.to,
                    href: e.$props.href,
                    target: e.$props.target
                }
            }, [a("div", {
                staticClass: "socialButton__icon"
            })])], 1)
        }
          , k = []
          , D = {
            name: "SocialButton",
            components: {
                BaseButton: y["a"]
            },
            props: {
                href: {
                    type: String,
                    default: ""
                },
                target: {
                    type: String,
                    default: "_self"
                },
                to: {
                    type: [String, Object],
                    default: ""
                },
                shadow: {
                    type: Boolean,
                    default: !0
                },
                social: {
                    type: String,
                    validator: function(e) {
                        return -1 !== ["link", "facebook", "twitter", "twitch", "reddit", "youtube", "instagram", "linkedin", "glassdoor"].indexOf(e)
                    },
                    default: "link"
                },
                inverted: {
                    type: Boolean,
                    default: !1
                },
                darkOutline: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    isOver: !1
                }
            },
            methods: {
                onOver: function(e) {
                    this.isOver = !0,
                    this.$refs.socialButton.addEventListener("mouseout", this.onOut, !1)
                },
                onOut: function(e) {
                    this.isOver = !1,
                    this.$refs.socialButton.removeEventListener("mouseout", this.onOut)
                }
            }
        }
          , B = D
          , U = (a("320f"),
        Object(T["a"])(B, N, k, !1, null, "07630002", null))
          , M = U.exports
          , x = {
            name: "DefaultFooter",
            components: {
                Block: f["a"],
                TextButton: h["a"],
                SocialButton: M
            },
            computed: {
                links: function() {
                    return [{
                        label: this.$t("foot_tos"),
                        to: {
                            name: s["CREATORS_TERMS"].name
                        },
                        target: "_self"
                    }, {
                        label: this.$t("foot_pp"),
                        href: this.$t("foot_pp_li"),
                        target: "_blank"
                    }, {
                        label: this.$t("foot_pg"),
                        href: this.$t("foot_pg_li"),
                        target: "_blank"
                    }, {
                        label: this.$t("foot_ab"),
                        to: {
                            name: s["ABOUT"].name
                        },
                        target: "_self"
                    }]
                }
            }
        }
          , $ = x
          , H = (a("25a8"),
        Object(T["a"])($, P, L, !1, null, "53e1f8ce", null))
          , j = H.exports
          , F = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "mobileMenu"
            }, [a("div", {
                staticClass: "mobileMenu__main"
            }, e._l(e.items, (function(e, t) {
                return a("div", {
                    key: "mobile-menu-item-" + t,
                    staticClass: "mobileMenu__item"
                }, [a("MobileMenuButton", {
                    attrs: {
                        to: e.link,
                        label: e.label,
                        icon: e.icon
                    }
                })], 1)
            }
            )), 0)])
        }
          , G = []
          , Y = function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        iconFeed: "feed" === e.$props.icon,
                        iconMystuff: "mystuff" === e.$props.icon,
                        iconSearch: "search" === e.$props.icon,
                        iconUser: "user" === e.$props.icon,
                        iconBoost: "boost" === e.$props.icon,
                        disableActive: e.$props.disableActive,
                        disableExactActive: e.$props.disableExactActive
                    },
                    expression: "{\n    'iconFeed': $props.icon === 'feed',\n    'iconMystuff': $props.icon === 'mystuff',\n    'iconSearch': $props.icon === 'search',\n    'iconUser': $props.icon === 'user',\n    'iconBoost': $props.icon === 'boost',\n    'disableActive': $props.disableActive,\n    'disableExactActive': $props.disableExactActive\n  }"
                }],
                staticClass: "mobileMenuButton"
            }, [o("BaseButton", {
                attrs: {
                    to: e.$props.to,
                    href: e.$props.href,
                    target: e.$props.target
                }
            }, [o("div", {
                staticClass: "mobileMenuButton__main"
            }, [o("img", {
                staticClass: "mobileMenuButton__bg",
                attrs: {
                    src: a("1537")
                }
            }), e.$props.icon ? o("div", {
                staticClass: "mobileMenuButton__icon"
            }) : e._e(), o("p", {
                staticClass: "mobileMenuButton__label",
                domProps: {
                    textContent: e._s(e.$props.label)
                }
            })])])], 1)
        }
          , V = []
          , W = {
            name: "MobileMenuButton",
            components: {
                BaseButton: y["a"]
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
                    type: [String, Object],
                    default: ""
                },
                icon: {
                    type: String,
                    validator: function(e) {
                        return -1 !== ["", "feed", "mystuff", "search", "user", "boost"].indexOf(e)
                    },
                    default: ""
                },
                disableActive: {
                    type: Boolean,
                    default: !1
                },
                disableExactActive: {
                    type: Boolean,
                    default: !1
                },
                target: {
                    type: String,
                    default: "_self"
                }
            }
        }
          , q = W
          , K = (a("f9e3"),
        Object(T["a"])(q, Y, V, !1, null, "a3c3d780", null))
          , z = K.exports
          , J = {
            name: "MobileMenu",
            components: {
                MobileMenuButton: z
            },
            data: function() {
                return {
                    routeTypes: s
                }
            },
            computed: Object(n["a"])(Object(n["a"])({}, Object(m["c"])("user", {
                userIsBoostExpressUser: "isBoostExpressUser"
            })), {}, {
                items: function() {
                    var e;
                    return e = this.userIsBoostExpressUser ? [{
                        link: {
                            name: s["BOOST"].name
                        },
                        label: this.$t("gen_boost"),
                        icon: "boost"
                    }, {
                        link: {
                            name: s["USER"].name
                        },
                        label: this.$t("gen_acc"),
                        icon: "user"
                    }] : [{
                        link: {
                            name: s["START"].name
                        },
                        label: this.$t("gen_fe"),
                        icon: "feed"
                    }, {
                        link: {
                            name: s["MY_STUFF"].name
                        },
                        label: this.$t("gen_ms"),
                        icon: "mystuff"
                    }, {
                        link: {
                            name: s["USER"].name
                        },
                        label: this.$t("gen_acc"),
                        icon: "user"
                    }],
                    e
                }
            })
        }
          , Z = J
          , X = (a("d12d"),
        Object(T["a"])(Z, F, G, !1, null, "6f6d2ca0", null))
          , Q = X.exports
          , ee = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("BaseView", [a("div", {
                staticClass: "home"
            }, [a("HomeHeader"), a("HomeInfo"), a("HomeHow"), e.userIsApplicationStatusAccepted ? e._e() : a("HomeCta")], 1)])
        }
          , te = []
          , ae = a("f798")
          , oe = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "homeHeader"
            }, [a("PageHeader", {
                attrs: {
                    height: "semi"
                }
            }, [a("div", {
                ref: "main",
                staticClass: "homeHeader__main"
            }, [a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["back"],
                    expression: "['back']"
                }],
                staticClass: "homeHeader__confetti"
            }, [a("Confetti", {
                attrs: {
                    options: e.constants.CONFETTI_BACK_OPTIONS_DEFAULT
                }
            })], 1), a("div", {
                staticClass: "homeHeader__rays"
            }, [a("RaysAnimation")], 1), a("Block", [a("div", {
                staticClass: "homeHeader__content"
            }, [a("p", {
                staticClass: "homeHeader__title",
                domProps: {
                    textContent: e._s(e.$t("lan_head_tit"))
                }
            }), a("p", {
                staticClass: "homeHeader__subtitle",
                domProps: {
                    textContent: e._s(e.$t("lan_head_subtit"))
                }
            }), e.isButtonVisible ? a("div", {
                staticClass: "homeHeader__button"
            }, [a("DefaultButton", {
                attrs: {
                    to: e.buttonLink,
                    label: e.buttonLabel,
                    inverted: !0,
                    freeWidth: !0
                }
            })], 1) : e._e()])]), a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["front"],
                    expression: "['front']"
                }],
                staticClass: "homeHeader__confetti"
            }, [a("Confetti", {
                attrs: {
                    options: e.constants.CONFETTI_FRONT_OPTIONS_DEFAULT
                }
            })], 1)], 1)])], 1)
        }
          , ne = []
          , re = a("d452")
          , ie = a("3f7e")
          , se = a("efc5")
          , ce = {
            name: "HomeHeader",
            components: {
                PageHeader: re["a"],
                Block: f["a"],
                DefaultButton: g["a"],
                RaysAnimation: ie["a"],
                Confetti: se["a"]
            },
            data: function() {
                return {
                    constants: l,
                    routeTypes: s
                }
            },
            computed: Object(n["a"])(Object(n["a"])({}, Object(m["c"])("user", {
                userIsApplicationStatusAccepted: "isApplicationStatusAccepted"
            })), {}, {
                buttonLabel: function() {
                    return this.userIsApplicationStatusAccepted ? this.$t("lan_head_btn_join_2") : this.$t("lan_head_btn_join")
                },
                buttonLink: function() {
                    return this.userIsApplicationStatusAccepted ? {
                        name: s["START"].name
                    } : {
                        name: s["REGISTER"].name
                    }
                },
                isButtonVisible: function() {
                    return this.userIsApplicationStatusAccepted || "0" === l["MAINTENANCE_MODE"]
                }
            })
        }
          , ue = ce
          , le = (a("5979"),
        Object(T["a"])(ue, oe, ne, !1, null, "56ae99c2", null))
          , de = le.exports
          , _e = function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                staticClass: "homeInfo"
            }, [o("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: "top",
                    expression: "'top'"
                }, {
                    name: "scroll-reveal",
                    rawName: "v-scroll-reveal"
                }],
                staticClass: "homeInfo__content"
            }, [o("Block", [o("TwoColumn", {
                attrs: {
                    switchOrderFromBreakpoint: !0
                }
            }, [o("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: "topLeft",
                    expression: "'topLeft'"
                }],
                staticClass: "homeInfo__column",
                attrs: {
                    slot: "left"
                },
                slot: "left"
            }, [o("p", {
                staticClass: "homeInfo__subtitle",
                domProps: {
                    textContent: e._s(e.$t("lan_inf_subtit_1"))
                }
            }), o("p", {
                staticClass: "homeInfo__title",
                domProps: {
                    textContent: e._s(e.$t("lan_inf_tit_1"))
                }
            }), o("p", {
                staticClass: "homeInfo__body",
                domProps: {
                    textContent: e._s(e.$t("lan_inf_bod_1"))
                }
            })]), o("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: "topRight",
                    expression: "'topRight'"
                }, {
                    name: "scroll-parallax",
                    rawName: "v-scroll-parallax",
                    value: e.characterParallaxValue,
                    expression: "characterParallaxValue"
                }],
                staticClass: "homeInfo__column",
                attrs: {
                    slot: "right"
                },
                slot: "right"
            }, [o("img", {
                staticClass: "homeInfo__characterPoco",
                attrs: {
                    src: a("479e")
                }
            })])])], 1)], 1), o("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: "bottom",
                    expression: "'bottom'"
                }, {
                    name: "scroll-reveal",
                    rawName: "v-scroll-reveal"
                }],
                staticClass: "homeInfo__content"
            }, [o("Block", [o("TwoColumn", [o("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: "bottomLeft",
                    expression: "'bottomLeft'"
                }],
                staticClass: "homeInfo__column",
                attrs: {
                    slot: "left"
                },
                slot: "left"
            }, [o("p", {
                staticClass: "homeInfo__subtitle",
                domProps: {
                    textContent: e._s(e.$t("lan_inf_subtit_2"))
                }
            }), o("p", {
                staticClass: "homeInfo__title",
                domProps: {
                    textContent: e._s(e.$t("lan_inf_tit_2"))
                }
            }), o("p", {
                staticClass: "homeInfo__body",
                domProps: {
                    textContent: e._s(e.$t("lan_inf_bod_2"))
                }
            })]), o("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: "bottomRight",
                    expression: "'bottomRight'"
                }, {
                    name: "scroll-parallax",
                    rawName: "v-scroll-parallax",
                    value: e.characterParallaxValue,
                    expression: "characterParallaxValue"
                }],
                staticClass: "homeInfo__column",
                attrs: {
                    slot: "right"
                },
                slot: "right"
            }, [o("img", {
                staticClass: "homeInfo__characterBowler",
                attrs: {
                    src: a("fe6b")
                }
            })])])], 1)], 1)])
        }
          , pe = []
          , me = a("e3e2")
          , fe = a("07a9")
          , he = {
            name: "HomeInfo",
            components: {
                Block: f["a"],
                TwoColumn: fe["a"]
            },
            computed: {
                characterParallaxValue: function() {
                    return window.innerWidth > me["BREAKPOINTS"].desktop ? -75 : -50
                }
            }
        }
          , ge = he
          , be = (a("4384"),
        Object(T["a"])(ge, _e, pe, !1, null, "73cd505f", null))
          , Se = be.exports
          , ye = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                ref: "homeHow",
                staticClass: "homeHow"
            }, [a("Block", [a("div", {
                directives: [{
                    name: "scroll-reveal",
                    rawName: "v-scroll-reveal"
                }],
                staticClass: "homeHow__header"
            }, [a("p", {
                staticClass: "homeHow__title",
                domProps: {
                    textContent: e._s(e.$t("lan_how_tit"))
                }
            }), a("p", {
                staticClass: "homeHow__subtitle",
                domProps: {
                    textContent: e._s(e.$t("lan_how_subtit"))
                }
            }), a("p", {
                staticClass: "homeHow__followers",
                domProps: {
                    textContent: e._s(e.$t("lan_how_foll"))
                }
            })])]), a("div", {
                staticClass: "homeHow__tiers"
            }, [a("TierLevels", {
                attrs: {
                    parentModule: e.homeHow
                }
            })], 1), a("Block", [a("p", {
                staticClass: "homeHow__disclaimer",
                domProps: {
                    textContent: e._s(e.$t("lan_how_disc"))
                }
            })])], 1)
        }
          , ve = []
          , Ee = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                ref: "tierLevels",
                staticClass: "tierLevels"
            }, [a("div", {
                ref: "menuWrapper",
                staticClass: "tierLevels__menu"
            }, [a("TierLevelsMenu", {
                ref: "menu",
                attrs: {
                    activeTier: e.activeTier,
                    fixed: e.isMenuFixed
                },
                on: {
                    clickItem: e.onClickItem
                }
            })], 1), a("Block", [a("div", {
                staticClass: "tierLevels__wrapper"
            }, e._l(e.tiers, (function(t, o) {
                var n, r;
                return a("div", {
                    directives: [{
                        name: "scroll-reveal",
                        rawName: "v-scroll-reveal"
                    }],
                    key: "tier-levels-item-" + o,
                    attrs: {
                        id: "tier-levels-item-" + o
                    }
                }, [a("div", {
                    staticClass: "tierLevels__item"
                }, [a("div", {
                    staticClass: "tierLevels__itemLeft"
                }, [a("div", {
                    directives: [{
                        name: "class-mods",
                        rawName: "v-class-mods",
                        value: (n = {},
                        n["tier" + o] = !0,
                        n["active"] = o === e.activeTier - 1,
                        n["completed"] = o < e.activeTier - 1 && e.activeTier !== e.constants.TIER_LEVEL_4,
                        n),
                        expression: "{\n                ['tier' + index]: true,\n                'active': index === activeTier - 1,\n                'completed': index < activeTier - 1 && activeTier !== constants.TIER_LEVEL_4\n              }"
                    }],
                    staticClass: "tierLevels__icon"
                }, [a("p", {
                    directives: [{
                        name: "class-mods",
                        rawName: "v-class-mods",
                        value: (r = {},
                        r["tier" + o] = !0,
                        r["completed"] = o < e.activeTier - 1 && e.activeTier !== e.constants.TIER_LEVEL_4,
                        r),
                        expression: "{\n                  ['tier' + index]: true,\n                  'completed': index < activeTier - 1 && activeTier !== constants.TIER_LEVEL_4\n                }"
                    }],
                    staticClass: "tierLevels__iconNumber",
                    domProps: {
                        textContent: e._s(e.tierNumber(o))
                    }
                })]), o > 0 && o < 3 ? a("div", {
                    directives: [{
                        name: "class-mods",
                        rawName: "v-class-mods",
                        value: {
                            top: !0,
                            active: o < e.activeTier && e.activeTier !== e.constants.TIER_LEVEL_4
                        },
                        expression: "{\n                'top': true,\n                'active': index < activeTier && activeTier !== constants.TIER_LEVEL_4\n              }"
                    }],
                    staticClass: "tierLevels__iconConnector"
                }) : e._e(), o < 2 ? a("div", {
                    directives: [{
                        name: "class-mods",
                        rawName: "v-class-mods",
                        value: {
                            bottom: !0,
                            active: o < e.activeTier - 1 && e.activeTier !== e.constants.TIER_LEVEL_4
                        },
                        expression: "{\n                'bottom': true,\n                'active': index < activeTier - 1 && activeTier !== constants.TIER_LEVEL_4\n              }"
                    }],
                    staticClass: "tierLevels__iconConnector"
                }) : e._e()]), a("div", {
                    staticClass: "tierLevels__itemCenter"
                }, [a("TierItem", {
                    attrs: {
                        tier: t,
                        active: o === e.activeTier - 1,
                        inactive: "" !== e.activeTier && o !== e.activeTier - 1
                    }
                })], 1), a("div", {
                    staticClass: "tierLevels__itemRight"
                })])])
            }
            )), 0)])], 1)
        }
          , Te = []
          , Ce = a("cffa")
          , Oe = a("9420")
          , Ae = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        fixed: e.$props.fixed
                    },
                    expression: "{ 'fixed': $props.fixed }"
                }],
                staticClass: "tierLevelsMenu"
            }, [a("div", {
                staticClass: "tierLevelsMenu__wrapper"
            }, [a("div", {
                staticClass: "tierLevelsMenu__bg"
            }), a("div", {
                staticClass: "tierLevelsMenu__main"
            }, e._l(e.items, (function(t, o) {
                return a("div", {
                    directives: [{
                        name: "class-mods",
                        rawName: "v-class-mods",
                        value: {
                            last: o === e.items.length - 1
                        },
                        expression: "{ 'last': index === items.length - 1}"
                    }],
                    key: "tiers-levels-menu-" + o,
                    staticClass: "tierLevelsMenu__item"
                }, [a("SmallButton", {
                    attrs: {
                        label: t.label,
                        inverted: !0,
                        uppercase: !0,
                        active: t.value === e.$props.activeTier
                    },
                    on: {
                        click: function(a) {
                            return e.onClickItem(t.value)
                        }
                    }
                })], 1)
            }
            )), 0)])])
        }
          , Ie = []
          , we = (a("a9e3"),
        a("f7b1"))
          , Re = {
            name: "TierLevelsMenu",
            components: {
                SmallButton: we["a"]
            },
            props: {
                activeTier: {
                    type: [String, Number],
                    default: ""
                },
                fixed: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                items: function() {
                    return [{
                        label: this.$t("lan_tier_1_btn"),
                        value: l["TIER_LEVEL_1"]
                    }, {
                        label: this.$t("lan_tier_2_btn"),
                        value: l["TIER_LEVEL_2"]
                    }, {
                        label: this.$t("lan_tier_3_btn"),
                        value: l["TIER_LEVEL_3"]
                    }, {
                        label: this.$t("lan_tier_5_btn"),
                        value: l["TIER_LEVEL_4"]
                    }]
                }
            },
            methods: {
                onClickItem: function(e) {
                    this.$emit("clickItem", e)
                }
            }
        }
          , Pe = Re
          , Le = (a("6078"),
        Object(T["a"])(Pe, Ae, Ie, !1, null, "62ca8374", null))
          , Ne = Le.exports
          , ke = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        inactive: e.$props.inactive,
                        active: e.$props.active
                    },
                    expression: "{\n    'inactive': $props.inactive,\n    'active': $props.active\n  }"
                }],
                ref: "tierItem",
                staticClass: "tierItem"
            }, [a("div", {
                staticClass: "tierItem__main"
            }, [a("div", {
                staticClass: "tierItem__wrapper"
            }, [a("div", {
                staticClass: "tierItem__innerWrapper"
            }, [a("div", {
                staticClass: "tierItem__symbol"
            }, [a("TierSymbol", {
                attrs: {
                    tier: e.$props.tier,
                    ratioOnWidth: !0
                }
            })], 1), a("div", {
                staticClass: "tierItem__content"
            }, [a("p", {
                staticClass: "tierItem__title",
                domProps: {
                    textContent: e._s(e.title)
                }
            }), a("p", {
                staticClass: "tierItem__subtitle",
                domProps: {
                    textContent: e._s(e.subtitle)
                }
            }), a("p", {
                staticClass: "tierItem__body",
                domProps: {
                    textContent: e._s(e.description)
                }
            })])])])])])
        }
          , De = []
          , Be = a("7c6f")
          , Ue = {
            name: "TierItem",
            components: {
                TierSymbol: Be["a"]
            },
            props: {
                tier: {
                    type: [String, Number],
                    validator: function(e) {
                        return -1 !== l["TIER_LEVELS"].indexOf(e)
                    },
                    default: l["TIER_LEVEL_1"]
                },
                active: {
                    type: Boolean,
                    default: !1
                },
                inactive: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    isOver: !1
                }
            },
            computed: {
                title: function() {
                    switch (this.$props.tier) {
                    case l["TIER_LEVEL_1"]:
                        return this.$t("lan_tier_1_tit");
                    case l["TIER_LEVEL_2"]:
                        return this.$t("lan_tier_2_tit");
                    case l["TIER_LEVEL_3"]:
                        return this.$t("lan_tier_3_tit");
                    case l["TIER_LEVEL_4"]:
                        return this.$t("lan_tier_4_tit");
                    case l["TIER_LEVEL_5"]:
                        return this.$t("lan_tier_5_tit");
                    default:
                        return ""
                    }
                },
                subtitle: function() {
                    switch (this.$props.tier) {
                    case l["TIER_LEVEL_1"]:
                        return this.$t("lan_tier_1_subtit");
                    case l["TIER_LEVEL_2"]:
                        return this.$t("lan_tier_2_subtit");
                    case l["TIER_LEVEL_3"]:
                        return this.$t("lan_tier_3_subtit");
                    case l["TIER_LEVEL_4"]:
                        return this.$t("lan_tier_4_subtit");
                    case l["TIER_LEVEL_5"]:
                        return this.$t("lan_tier_5_subtit");
                    default:
                        return ""
                    }
                },
                description: function() {
                    switch (this.$props.tier) {
                    case l["TIER_LEVEL_1"]:
                        return this.$t("lan_tier_1_desc");
                    case l["TIER_LEVEL_2"]:
                        return this.$t("lan_tier_2_desc");
                    case l["TIER_LEVEL_3"]:
                        return this.$t("lan_tier_3_desc");
                    case l["TIER_LEVEL_4"]:
                        return this.$t("lan_tier_4_desc");
                    case l["TIER_LEVEL_5"]:
                        return this.$t("lan_tier_5_desc");
                    default:
                        return ""
                    }
                }
            }
        }
          , Me = Ue
          , xe = (a("576a"),
        Object(T["a"])(Me, ke, De, !1, null, "b7fdb6c8", null))
          , $e = xe.exports;
        Ce["b"].registerPlugin(Oe["a"]);
        var He, je = {
            name: "TierLevels",
            components: {
                Block: f["a"],
                TierLevelsMenu: Ne,
                TierItem: $e
            },
            props: {
                parentModule: {
                    default: void 0
                }
            },
            data: function() {
                return {
                    constants: l,
                    activeTier: "",
                    isMenuFixed: !1
                }
            },
            computed: Object(n["a"])(Object(n["a"])({}, Object(m["c"])("breakpoints", ["fromBreakpoint"])), {}, {
                tiers: function() {
                    return [l["TIER_LEVEL_1"], l["TIER_LEVEL_2"], l["TIER_LEVEL_3"], l["TIER_LEVEL_5"]]
                },
                tierNumber: function() {
                    return function(e) {
                        return e < 3 ? e + 1 : "R"
                    }
                }
            }),
            mounted: function() {
                window.addEventListener("resize", this.resize, !1),
                window.addEventListener("scroll", this.scroll, !1),
                this.resize()
            },
            beforeDestroy: function() {
                window.removeEventListener("resize", this.resize),
                window.removeEventListener("scroll", this.scroll)
            },
            methods: {
                onClickItem: function(e) {
                    this.activeTier === e ? this.activeTier = "" : (this.activeTier = e,
                    this.scrollToTier())
                },
                scrollToTier: function() {
                    var e = this.$refs.menuWrapper.getBoundingClientRect()
                      , t = me["SIZES"][this.fromBreakpoint].headerHeight
                      , a = t + e.height + 4 * me["LAYOUT_GRID"];
                    Ce["b"].to(window, {
                        scrollTo: {
                            y: "#tier-levels-item-" + (this.activeTier - 1),
                            offsetY: a,
                            autoKill: !1
                        },
                        duration: 1,
                        ease: "power2.inOut"
                    })
                },
                resize: function() {
                    var e = this.$refs.menu.$el.getBoundingClientRect();
                    this.$refs.menuWrapper.style.height = e.height + "px"
                },
                scroll: function() {
                    if (this.$props.parentModule) {
                        var e = this.$props.parentModule.getBoundingClientRect()
                          , t = this.$refs.menuWrapper.getBoundingClientRect()
                          , a = me["SIZES"][this.fromBreakpoint].headerHeight;
                        t.top < a ? this.isMenuFixed = !0 : this.isMenuFixed = !1;
                        var o = a;
                        e.top + e.height < a + t.height && (o = e.top + e.height - t.height),
                        this.$refs.menu.$el.style.top = o + "px"
                    } else
                        this.isMenuFixed = !1
                }
            }
        }, Fe = je, Ge = (a("2928"),
        Object(T["a"])(Fe, Ee, Te, !1, null, "7cb22326", null)), Ye = Ge.exports, Ve = {
            name: "HomeHow",
            components: {
                Block: f["a"],
                TierLevels: Ye
            },
            data: function() {
                return {
                    homeHow: void 0
                }
            },
            mounted: function() {
                this.homeHow = this.$refs.homeHow
            }
        }, We = Ve, qe = (a("7014"),
        Object(T["a"])(We, ye, ve, !1, null, "2f70845a", null)), Ke = qe.exports, ze = function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                staticClass: "homeCta"
            }, [o("div", {
                staticClass: "homeCta__main"
            }, [o("Block", [o("div", {
                staticClass: "homeCta__content"
            }, [o("p", {
                staticClass: "homeCta__title",
                domProps: {
                    textContent: e._s(e.$t("lan_cta_tit"))
                }
            }), o("p", {
                staticClass: "homeCta__body",
                domProps: {
                    textContent: e._s(e.$t("lan_cta_bod"))
                }
            }), e.isCtaButtonVisible ? o("div", {
                staticClass: "homeCta__button"
            }, [o("BigButton", {
                attrs: {
                    to: {
                        name: e.routeTypes.REGISTER.name
                    },
                    label: e.$t("lan_cta_btn_join"),
                    freeWidth: !0
                }
            })], 1) : e._e()])]), o("img", {
                staticClass: "homeCta__character",
                attrs: {
                    src: a("bac7"),
                    alt: "shelly-character"
                }
            })], 1)])
        }, Je = [], Ze = a("50eb"), Xe = {
            name: "HomeCta",
            components: {
                Block: f["a"],
                BigButton: Ze["a"]
            },
            data: function() {
                return {
                    routeTypes: s
                }
            },
            computed: {
                isCtaButtonVisible: function() {
                    return "0" === l["MAINTENANCE_MODE"]
                }
            }
        }, Qe = Xe, et = (a("0e88"),
        Object(T["a"])(Qe, ze, Je, !1, null, "81176260", null)), tt = et.exports, at = {
            name: "Home",
            components: {
                BaseView: ae["a"],
                HomeHeader: de,
                HomeInfo: Se,
                HomeHow: Ke,
                HomeCta: tt
            },
            computed: Object(n["a"])({}, Object(m["c"])("user", {
                userIsApplicationStatusAccepted: "isApplicationStatusAccepted"
            }))
        }, ot = at, nt = (a("468a"),
        Object(T["a"])(ot, ee, te, !1, null, "7eaa29ef", null)), rt = nt.exports, it = function() {
            return a.e("login").then(a.bind(null, "c518"))
        }, st = function() {
            return a.e("loginerror").then(a.bind(null, "b84b"))
        }, ct = function() {
            return a.e("generalerror").then(a.bind(null, "4ad3"))
        }, ut = function() {
            return a.e("authenticate").then(a.bind(null, "9d45"))
        }, lt = function() {
            return a.e("paypalauthenticate").then(a.bind(null, "26ea"))
        }, dt = function() {
            return a.e("platformauthenticate").then(a.bind(null, "7f1d"))
        }, _t = function() {
            return a.e("register").then(a.bind(null, "ce2e"))
        }, pt = function() {
            return a.e("registercomplete").then(a.bind(null, "5308"))
        }, mt = function() {
            return Promise.all([a.e("codeofconduct~welcome"), a.e("welcome")]).then(a.bind(null, "998f"))
        }, ft = function() {
            return Promise.all([a.e("boost~mystuff~user"), a.e("boost~mystuff"), a.e("mystuff")]).then(a.bind(null, "8f1e"))
        }, ht = function() {
            return Promise.all([a.e("boost~mystuff~user"), a.e("boost~mystuff"), a.e("boost")]).then(a.bind(null, "855b"))
        }, gt = function() {
            return a.e("start").then(a.bind(null, "8141"))
        }, bt = function() {
            return a.e("feedpost").then(a.bind(null, "7ca4"))
        }, St = function() {
            return Promise.all([a.e("boost~mystuff~user"), a.e("user")]).then(a.bind(null, "cf58"))
        }, yt = function() {
            return a.e("usersettings").then(a.bind(null, "f452"))
        }, vt = function() {
            return a.e("deleteuser").then(a.bind(null, "52ff"))
        }, Et = function() {
            return a.e("about").then(a.bind(null, "9909"))
        }, Tt = function() {
            return a.e("mystuffdiscord").then(a.bind(null, "8958"))
        }, Ct = function() {
            return a.e("mystuffslack").then(a.bind(null, "384e"))
        }, Ot = function() {
            return a.e("fourofour").then(a.bind(null, "bed8"))
        }, At = function() {
            return a.e("boostsignup").then(a.bind(null, "78d1"))
        }, It = function() {
            return a.e("tierupgraderequest").then(a.bind(null, "6224"))
        }, wt = function() {
            return a.e("blocked").then(a.bind(null, "886b"))
        }, Rt = function() {
            return a.e("maintenanace").then(a.bind(null, "74a1"))
        }, Pt = function() {
            return a.e("applicationstatus").then(a.bind(null, "a80a"))
        }, Lt = function() {
            return Promise.all([a.e("codeofconduct~welcome"), a.e("codeofconduct")]).then(a.bind(null, "d84f"))
        }, Nt = function() {
            return a.e("boostpayouts").then(a.bind(null, "36d9"))
        }, kt = function() {
            return a.e("creatorsterms").then(a.bind(null, "5682"))
        };
        r["a"].use(i["a"]);
        var Dt = new i["a"]({
            mode: "history",
            base: "/",
            routes: [Object(n["a"])(Object(n["a"])({}, s["DEFAULT"]), {}, {
                redirect: {
                    name: s["HOME"].name,
                    params: {
                        lang: l["DEFAULT_LANG"]
                    }
                }
            }), Object(n["a"])(Object(n["a"])({}, s["LOGIN"]), {}, {
                components: {
                    default: it,
                    header: R,
                    footer: j
                }
            }), Object(n["a"])(Object(n["a"])({}, s["LOGIN_ERROR"]), {}, {
                components: {
                    default: st,
                    header: R,
                    footer: j
                }
            }), Object(n["a"])(Object(n["a"])({}, s["GENERAL_ERROR"]), {}, {
                components: {
                    default: ct,
                    header: R,
                    footer: j
                }
            }), Object(n["a"])(Object(n["a"])({}, s["AUTHENTICATE"]), {}, {
                component: ut
            }), Object(n["a"])(Object(n["a"])({}, s["PAYPAL_AUTHENTICATE"]), {}, {
                component: lt
            }), Object(n["a"])(Object(n["a"])({}, s["PLATFORM_AUTHENTICATE"]), {}, {
                component: dt
            }), Object(n["a"])(Object(n["a"])({}, s["HOME"]), {}, {
                components: {
                    default: rt,
                    header: R,
                    footer: j,
                    mobileMenu: Q
                }
            }), Object(n["a"])(Object(n["a"])({}, s["REGISTER"]), {}, {
                components: {
                    default: _t,
                    footer: j
                }
            }), Object(n["a"])(Object(n["a"])({}, s["REGISTER_COMPLETE"]), {}, {
                components: {
                    default: pt,
                    footer: j
                }
            }), Object(n["a"])(Object(n["a"])({}, s["WELCOME"]), {}, {
                components: {
                    default: mt,
                    footer: j
                },
                meta: (He = {},
                Object(o["a"])(He, u, !0),
                Object(o["a"])(He, c, !0),
                He)
            }), Object(n["a"])(Object(n["a"])({}, s["MY_STUFF"]), {}, {
                components: {
                    default: ft,
                    header: R,
                    footer: j,
                    mobileMenu: Q
                },
                meta: Object(o["a"])({}, u, !0)
            }), Object(n["a"])(Object(n["a"])({}, s["BOOST"]), {}, {
                components: {
                    default: ht,
                    header: R,
                    footer: j,
                    mobileMenu: Q
                },
                meta: Object(o["a"])({}, u, !0)
            }), Object(n["a"])(Object(n["a"])({}, s["FEED"]), {}, {
                redirect: {
                    name: s["START"].name,
                    params: {
                        lang: l["DEFAULT_LANG"]
                    }
                }
            }), Object(n["a"])(Object(n["a"])({}, s["START"]), {}, {
                components: {
                    default: gt,
                    header: R,
                    footer: j,
                    mobileMenu: Q
                },
                meta: Object(o["a"])({}, u, !0)
            }), Object(n["a"])(Object(n["a"])({}, s["FEED_POST"]), {}, {
                components: {
                    default: bt,
                    header: R,
                    footer: j,
                    mobileMenu: Q
                },
                meta: Object(o["a"])({}, u, !0)
            }), Object(n["a"])(Object(n["a"])({}, s["USER"]), {}, {
                components: {
                    default: St,
                    header: R,
                    footer: j,
                    mobileMenu: Q
                },
                meta: Object(o["a"])({}, u, !0)
            }), Object(n["a"])(Object(n["a"])({}, s["USER_SETTINGS"]), {}, {
                components: {
                    default: yt,
                    header: R,
                    footer: j,
                    mobileMenu: Q
                },
                meta: Object(o["a"])({}, u, !0)
            }), Object(n["a"])(Object(n["a"])({}, s["DELETE_USER"]), {}, {
                components: {
                    default: vt,
                    header: R,
                    footer: j,
                    mobileMenu: Q
                },
                meta: Object(o["a"])({}, u, !0)
            }), Object(n["a"])(Object(n["a"])({}, s["ABOUT"]), {}, {
                components: {
                    default: Et,
                    header: R,
                    footer: j
                }
            }), Object(n["a"])(Object(n["a"])({}, s["MY_STUFF_DISCORD"]), {}, {
                components: {
                    default: Tt,
                    header: R,
                    footer: j,
                    mobileMenu: Q
                },
                meta: Object(o["a"])({}, u, !0)
            }), Object(n["a"])(Object(n["a"])({}, s["MY_STUFF_DISCORD_AUTH"]), {}, {
                redirect: {
                    name: s["MY_STUFF_DISCORD"].name,
                    params: {
                        lang: l["DEFAULT_LANG"]
                    }
                }
            }), Object(n["a"])(Object(n["a"])({}, s["MY_STUFF_SLACK"]), {}, {
                components: {
                    default: Ct,
                    header: R,
                    footer: j,
                    mobileMenu: Q
                },
                meta: Object(o["a"])({}, u, !0)
            }), Object(n["a"])(Object(n["a"])({}, s["HELP_DISCORD"]), {}, {
                redirect: {
                    name: s["MY_STUFF_DISCORD"].name,
                    params: {
                        lang: l["DEFAULT_LANG"]
                    }
                }
            }), Object(n["a"])(Object(n["a"])({}, s["HELP_SLACK"]), {}, {
                redirect: {
                    name: s["MY_STUFF_SLACK"].name,
                    params: {
                        lang: l["DEFAULT_LANG"]
                    }
                }
            }), Object(n["a"])(Object(n["a"])({}, s["BOOST_SIGNUP"]), {}, {
                components: {
                    default: At,
                    header: R,
                    footer: j,
                    mobileMenu: Q
                },
                meta: Object(o["a"])({}, u, !0)
            }), Object(n["a"])(Object(n["a"])({}, s["TIER_UPGRADE_REQUEST"]), {}, {
                components: {
                    default: It,
                    header: R,
                    footer: j,
                    mobileMenu: Q
                },
                meta: Object(o["a"])({}, u, !0)
            }), Object(n["a"])(Object(n["a"])({}, s["BLOCKED"]), {}, {
                components: {
                    default: wt,
                    header: R,
                    footer: j
                }
            }), Object(n["a"])(Object(n["a"])({}, s["MAINTENANCE"]), {}, {
                components: {
                    default: Rt,
                    header: R,
                    footer: j
                }
            }), Object(n["a"])(Object(n["a"])({}, s["APPLICATION_STATUS"]), {}, {
                components: {
                    default: Pt,
                    header: R,
                    footer: j,
                    mobileMenu: Q
                }
            }), Object(n["a"])(Object(n["a"])({}, s["CODE_OF_CONDUCT"]), {}, {
                components: {
                    default: Lt,
                    footer: j
                },
                meta: Object(o["a"])({}, u, !0)
            }), Object(n["a"])(Object(n["a"])({}, s["BOOST_PAYOUTS"]), {}, {
                components: {
                    default: Nt,
                    header: R,
                    footer: j,
                    mobileMenu: Q
                },
                meta: Object(o["a"])({}, u, !0)
            }), Object(n["a"])(Object(n["a"])({}, s["TERMS_OF_SERVICE"]), {}, {
                redirect: {
                    name: s["CREATORS_TERMS"].name,
                    params: {
                        lang: l["DEFAULT_LANG"]
                    }
                }
            }), Object(n["a"])(Object(n["a"])({}, s["CREATORS_TERMS"]), {}, {
                components: {
                    default: kt,
                    header: R,
                    footer: j
                }
            }), Object(n["a"])(Object(n["a"])({}, s["FOUR_O_FOUR"]), {}, {
                components: {
                    default: Ot,
                    header: R,
                    footer: j
                }
            })],
            scrollBehavior: function(e, t, a) {
                var o = {}
                  , n = e.name !== t.name;
                if (a)
                    o = a;
                else {
                    if (!n)
                        return;
                    o = {
                        x: 0,
                        y: 0
                    }
                }
                return new Promise((function(e, t) {
                    setTimeout((function() {
                        e(o)
                    }
                    ), l["PAGE_TRANSITION_SPEED"] - 100)
                }
                ))
            }
        })
          , Bt = function(e) {
            return !1 === l["LANGS"].includes(e.params.lang)
        }
          , Ut = function(e) {
            return e.matched.some((function(e) {
                return e.meta[u]
            }
            ))
        }
          , Mt = d["a"].getters["user/applicationStatus"]
          , xt = function() {
            return !0 === d["a"].getters["user/isApplicationStatusNotReviewed"]
        }
          , $t = function() {
            return !0 === d["a"].getters["user/isApplicationStatusAccepted"]
        }
          , Ht = function() {
            return !0 === d["a"].getters["user/isApplicationStatusRejected"]
        }
          , jt = function() {
            return !1 === d["a"].getters["user/isLoggedIn"]
        }
          , Ft = function() {
            return !0 === d["a"].getters["user/isLoggedIn"]
        }
          , Gt = function() {
            return !0 === d["a"].getters["user/blocked"]
        }
          , Yt = function() {
            return !0 === d["a"].getters["user/boostEnabled"]
        }
          , Vt = function() {
            return !0 === d["a"].getters["user/isBoostExpressUser"]
        }
          , Wt = function() {
            return !0 === d["a"].getters["user/discordEnabled"]
        }
          , qt = function() {
            return !0 === d["a"].getters["user/slackEnabled"]
        }
          , Kt = function() {
            return !0 === d["a"].getters["user/isGenderInputRequired"]
        }
          , zt = function() {
            return !0 === d["a"].getters["user/isDateOfBirthRequired"]
        }
          , Jt = function() {
            return !0 === d["a"].getters["user/isPrimaryGameRequired"]
        }
          , Zt = function() {
            return !0 === d["a"].getters["user/welcomeSeen"]
        }
          , Xt = !1;
        Dt.beforeEach((function(e, t, a) {
            Xt ? Qt(e, t, a) : Ft() ? (d["a"].dispatch("general/setPageLoaderVisibility", !0),
            d["a"].dispatch("user/get").then((function(e) {
                return d["a"].dispatch("games/get")
            }
            )).then((function(o) {
                d["a"].dispatch("general/setPageLoaderVisibility", !1),
                Xt = !0,
                Qt(e, t, a)
            }
            )).catch((function(e) {
                e.data && e.data.message && -1 !== e.data.message.indexOf(l["API_ERROR_USER_WITH_THIS_ID_DOESNT_EXIST"]) ? (d["a"].dispatch("general/setPageLoaderVisibility", !1),
                d["a"].dispatch("user/logout", {
                    redirect: !0,
                    serverside: !1
                }),
                Xt = !0,
                a({
                    name: s["HOME"].name,
                    params: {
                        lang: d["a"].getters["locale/lang"]
                    }
                })) : (d["a"].dispatch("general/setPageLoaderVisibility", !1),
                Xt = !0,
                a({
                    name: s["GENERAL_ERROR"].name,
                    params: {
                        lang: d["a"].getters["locale/lang"]
                    }
                }))
            }
            ))) : (d["a"].dispatch("general/setPageLoaderVisibility", !1),
            Xt = !0,
            Qt(e, t, a))
        }
        ));
        var Qt = function(e, t, a) {
            return d["a"].dispatch("general/addRouteHistory", e),
            d["a"].dispatch("general/setPageLoaderVisibility", !1),
            Bt(e) ? d["a"].dispatch("locale/setLanguage", l["DEFAULT_LANG"]).then((function(t) {
                return a(Object(n["a"])(Object(n["a"])({}, e), {}, {
                    params: Object(n["a"])(Object(n["a"])({}, e.params), {}, {
                        lang: t
                    }),
                    query: Object(n["a"])({}, e.query),
                    replace: !0
                }))
            }
            )) : Ut(e) && "1" === l["MAINTENANCE_MODE"] ? a({
                name: s["MAINTENANCE"].name,
                params: {
                    lang: d["a"].getters["locale/lang"]
                }
            }) : Ut(e) && jt() ? a({
                name: s["LOGIN"].name,
                params: {
                    lang: d["a"].getters["locale/lang"]
                },
                query: {
                    redirect: e.fullPath
                }
            }) : Ut(e) && Ft() && Gt() ? a({
                name: s["BLOCKED"].name,
                params: {
                    lang: d["a"].getters["locale/lang"]
                }
            }) : Ut(e) && Ft() && !$t() ? a({
                name: s["APPLICATION_STATUS"].name,
                params: {
                    lang: d["a"].getters["locale/lang"],
                    applicationStatus: Mt.toLowerCase()
                }
            }) : e.name !== s["WELCOME"].name && Ft() && $t() && !Zt() ? a({
                name: s["WELCOME"].name,
                params: {
                    lang: d["a"].getters["locale/lang"]
                }
            }) : e.name === s["REGISTER"].name && Ft() && (xt() || Ht()) ? a({
                name: s["APPLICATION_STATUS"].name,
                params: {
                    lang: d["a"].getters["locale/lang"],
                    applicationStatus: Mt.toLowerCase()
                }
            }) : e.name === s["REGISTER"].name && Ft() && $t() ? a({
                name: s["START"].name,
                params: {
                    lang: d["a"].getters["locale/lang"]
                }
            }) : e.name === s["APPLICATION_STATUS"].name && Ft() && $t() || e.name === s["BOOST_SIGNUP"].name && Ft() && !Yt() || e.name === s["BOOST_PAYOUTS"].name && Ft() && !Yt() ? a({
                name: s["MY_STUFF"].name,
                params: {
                    lang: d["a"].getters["locale/lang"]
                }
            }) : e.name !== s["MY_STUFF"].name && e.name !== s["START"].name && e.name !== s["FEED"].name && e.name !== s["FEED_POST"].name && e.name !== s["MY_STUFF_DISCORD"].name && e.name !== s["MY_STUFF_DISCORD_AUTH"].name && e.name !== s["MY_STUFF_SLACK"].name || !Vt() ? e.name === s["MY_STUFF_DISCORD"].name && Ft() && !Wt() || e.name === s["MY_STUFF_SLACK"].name && Ft() && !qt() ? a({
                name: s["MY_STUFF"].name,
                params: {
                    lang: d["a"].getters["locale/lang"]
                }
            }) : (Ft() && (Kt() || zt() || Jt()) && d["a"].dispatch("general/setIsRequiredInfoModalOpened", !0),
            e.name !== s["CODE_OF_CONDUCT"].name && e.name !== s["WELCOME"].name && Ft() && $t() && !d["a"].getters["user/codeOfConductCompleted"] && !d["a"].getters["general/isRequiredInfoModalOpened"] ? d["a"].dispatch("general/setIsCocModalOpened", !0) : d["a"].dispatch("general/setIsCocModalOpened", !1),
            a()) : a({
                name: s["BOOST"].name,
                params: {
                    lang: d["a"].getters["locale/lang"]
                }
            })
        };
        function ea(e) {
            var t = i["a"].isNavigationFailure
              , a = i["a"].NavigationFailureType;
            Dt.push(e).catch((function(o) {
                t(o, a.duplicated) && e.hash && (Dt.push(Object(n["a"])(Object(n["a"])({}, e), {}, {
                    hash: ""
                })),
                Dt.push(e))
            }
            ))
        }
        Dt.afterEach((function(e, t) {
            var a = e.matched.some((function(e) {
                return e.components.header
            }
            ))
              , o = e.matched.some((function(e) {
                return e.components.footer
            }
            ))
              , n = e.matched.some((function(e) {
                return e.components.mobileMenu
            }
            ));
            d["a"].dispatch("general/setIsHeaderRendered", a),
            d["a"].dispatch("general/setIsFooterRendered", o),
            d["a"].dispatch("general/setIsMobileMenuRendered", n),
            e.matched.some((function(e) {
                return e.meta[c]
            }
            )) ? d["a"].dispatch("general/setIsHeaderDisabled", !0) : d["a"].dispatch("general/setIsHeaderDisabled", !1)
        }
        ));
        t["a"] = Dt
    },
    a1f4: function(e, t, a) {},
    a2bb: function(e, t, a) {
        "use strict";
        a("2008")
    },
    a337: function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        small: e.$props.small,
                        xSmall: e.$props.xSmall,
                        big: e.$props.big,
                        colorLegend: "legend" === e.$props.color,
                        colorWhite: "white" === e.$props.color,
                        colorGreen: "green" === e.$props.color,
                        underlined: e.$props.underlined,
                        arrowLeft: e.$props.arrowLeft,
                        arrowRight: e.$props.arrowRight,
                        uppercase: e.$props.uppercase,
                        footer: e.$props.footer,
                        hoverUnderlined: e.$props.hoverUnderlined
                    },
                    expression: "{\n    'small': $props.small,\n    'xSmall': $props.xSmall,\n    'big': $props.big,\n    'colorLegend': $props.color === 'legend',\n    'colorWhite': $props.color === 'white',\n    'colorGreen': $props.color === 'green',\n    'underlined': $props.underlined,\n    'arrowLeft': $props.arrowLeft,\n    'arrowRight': $props.arrowRight,\n    'uppercase': $props.uppercase,\n    'footer': $props.footer,\n    'hoverUnderlined': $props.hoverUnderlined\n  }"
                }],
                staticClass: "textButton"
            }, [a("BaseButton", {
                attrs: {
                    to: e.$props.to,
                    href: e.$props.href,
                    target: e.$props.target
                }
            }, [a("div", {
                staticClass: "textButton__main"
            }, [e.$props.arrowLeft ? a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: "left",
                    expression: "'left'"
                }],
                staticClass: "textButton__arrow"
            }) : e._e(), a("div", {
                staticClass: "textButton__icon"
            }, [e._t("iconLeft")], 2), a("p", {
                staticClass: "textButton__label",
                domProps: {
                    textContent: e._s(e.$props.label)
                }
            }), e.$props.arrowRight ? a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: "right",
                    expression: "'right'"
                }],
                staticClass: "textButton__arrow"
            }) : e._e(), a("div", {
                staticClass: "textButton__icon"
            }, [e._t("iconRight")], 2)])])], 1)
        }
          , n = []
          , r = a("f76f")
          , i = {
            name: "TextButton",
            components: {
                BaseButton: r["a"]
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
                    type: [String, Object],
                    default: ""
                },
                color: {
                    type: String,
                    default: ""
                },
                small: {
                    type: Boolean,
                    default: !1
                },
                xSmall: {
                    type: Boolean,
                    default: !1
                },
                big: {
                    type: Boolean,
                    default: !1
                },
                underlined: {
                    type: Boolean,
                    default: !1
                },
                uppercase: {
                    type: Boolean,
                    default: !1
                },
                arrowLeft: {
                    type: Boolean,
                    default: !1
                },
                arrowRight: {
                    type: Boolean,
                    default: !1
                },
                target: {
                    type: String,
                    default: "_self"
                },
                footer: {
                    type: Boolean,
                    default: !1
                },
                hoverUnderlined: {
                    type: Boolean,
                    default: !1
                }
            }
        }
          , s = i
          , c = (a("106b"),
        a("2877"))
          , u = Object(c["a"])(s, o, n, !1, null, "31895284", null);
        t["a"] = u.exports
    },
    a48f: function(e, t, a) {},
    a51a: function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        fullBleed: e.$props.fullBleed,
                        hiddenOverflow: e.$props.hiddenOverflow
                    },
                    expression: "{\n    'fullBleed': $props.fullBleed,\n    'hiddenOverflow': $props.hiddenOverflow\n  }"
                }],
                staticClass: "block",
                style: e.blockStyle
            }, [a("div", {
                staticClass: "block__main"
            }, [e._t("default")], 2)])
        }
          , n = []
          , r = {
            name: "Block",
            props: {
                fullBleed: {
                    type: Boolean,
                    default: !1
                },
                hiddenOverflow: {
                    type: Boolean,
                    default: !1
                },
                backgroundColor: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                blockStyle: function() {
                    return {
                        backgroundColor: this.$props.backgroundColor
                    }
                }
            }
        }
          , i = r
          , s = (a("7382"),
        a("2877"))
          , c = Object(s["a"])(i, o, n, !1, null, "340cfdb6", null);
        t["a"] = c.exports
    },
    a695: function(e, t, a) {
        e.exports = a.p + "img/feed-default-CLASH_OF_CLANS.a8c4ef8e.jpg"
    },
    a8cc: function(e, t, a) {
        "use strict";
        a("6bd0")
    },
    aea9: function(e) {
        e.exports = JSON.parse('{"en":{"msg_to_athemm":"Hey Athemm! Are you poking around our code again???","gen_lang_en":"English","gen_sc":"Supercell","gen_sc_cr":"Supercell Creators","gen_cb":"Creator Boost","gen_join":"Join us","gen_login":"Log in","gen_logout":"Log out","gen_port":"Portal","gen_ms":"My Stuff","gen_fe":"Start","gen_acc":"Account","gen_se":"Search","gen_boost":"Boost","gen_add1":"Supercell Oy","gen_add2":"Jätkäsaarenlaituri 1","gen_add3":"00180 Helsinki","gen_add4":"Finland","gen_search_ph":"Start typing to search","gen_fb":"https://www.facebook.com/supercell/","gen_tw":"https://twitter.com/supercell","gen_ig":"https://www.instagram.com/supercell/","gen_yt":"https://www.youtube.com/supercell","gen_li":"https://www.linkedin.com/company/supercell/","gen_gd":"https://www.glassdoor.com/Overview/Working-at-Supercell-EI_IE511675.11,20.htm","gen_apap":"https://supr.cl/appstorescgames","gen_apgl":"https://play.google.com/store/apps/dev?id=6715068722362591614&hl=en","gen_cop":"Copyright Supercell 2019","gen_fol":"Follow us on","gen_down":"Download our games from","gen_gam_bs":"Brawl Stars","gen_gam_cr":"Clash Royale","gen_gam_bb":"Boom Beach","gen_gam_cc":"Clash of Clans","gen_gam_hh":"Hay Day","gen_gam_BRAWL_STARS":"Brawl Stars","gen_gam_CLASH_ROYALE":"Clash Royale","gen_gam_BOOM_BEACH":"Boom Beach","gen_gam_CLASH_OF_CLANS":"Clash of Clans","gen_gam_HAY_DAY":"Hay Day","gen_gam_EVERDALE":"Everdale","gen_gam_CLASH_QUEST":"Clash Quest","gen_gam_CLASH_MINI":"Clash Mini","gen_gam_bs_sh":"BS","gen_gam_cr_sh":"CR","gen_gam_bb_sh":"BB","gen_gam_cc_sh":"CC","gen_gam_hh_sh":"HD","gen_gam_sh_BRAWL_STARS":"BS","gen_gam_sh_CLASH_ROYALE":"CR","gen_gam_sh_BOOM_BEACH":"BB","gen_gam_sh_CLASH_OF_CLANS":"CC","gen_gam_sh_HAY_DAY":"HD","gen_gam_sh_EVERDALE":"ED","gen_gam_sh_CLASH_QUEST":"CQ","gen_gam_sh_CLASH_MINI":"CM","gen_sc_fan_kit_cc":"Clash of Clans Fan Kit","gen_sc_fan_kit_cr":"Clash Royale Fan Kit","gen_sc_fan_kit_bb":"Boom Beach Fan Kit","gen_sc_fan_kit_hd":"Hay Day Fan Kit","gen_sc_fan_kit_bs":"Brawl Stars Fan Kit","gen_sc_vip_kit":"Supercell VIP Kit","gen_sc_tch_kit":"Supercell Tech Kit","gen_plat_yt":"Youtube","gen_plat_tw":"Twitch","gen_plat_fb":"Facebook","gen_tier_name_1":"Bolts","gen_tier_name_2":"Swords","gen_tier_name_3":"Shields","gen_tier_name_4":"-","gen_tier_name_5":"Resourcers","gen_tier_name_6":"Community manager","gen_male":"Male","gen_female":"Female","gen_pos_typ_gen":"General","gen_and":"and","gen_its":"it\'s","gen_theyre":"they\'re","gen_err_dob_year":"Enter a valid year","gen_err_dob_month":"Enter a valid month","gen_err_dob_day":"Enter a valid day","gen_err_tit":"¯\\\\_(ツ)_/¯","gen_err_bod":"Seems you can’t access Creators right this moment. Please try again shortly.","foot_tos":"Creators Terms","foot_pp":"Privacy Policy","foot_pg":"Parent\'s Guide","foot_ab":"About","foot_tos_li":"https://supercell.com/en/terms-of-service/","foot_pp_li":"https://supercell.com/en/privacy-policy/","foot_pg_li":"https://supercell.com/en/parents/\\n","lan_head_tit":"This is Supercell Creators","lan_head_subtit":"The only place to get exclusive sneak peeks, tools, and support from Supercell to help you create!","lan_head_btn_join":"Join the program","lan_head_btn_join_2":"Go to portal","lan_inf_subtit_1":"What is Supercell Creators?","lan_inf_tit_1":"A place to help you do what you do best","lan_inf_bod_1":"We truly appreciate the amazing content that you create with Supercell games. We\'re here to help you become the best creator you can be!","lan_inf_subtit_2":"What\'s in it for me?","lan_inf_tit_2":"Exclusive first looks, tools & support!","lan_inf_bod_2":"Become part of a trusted community with exclusive perks, first looks at new game content, awesome tools, and support from Supercell to help you create at your maximum potential.","lan_how_tit":"How it works","lan_how_subtit":"If you have a minimum of 5,000 followers, you can get started by applying to become a Supercell Creator. We’ll review your application and place you in a suitable Creator tier based on how many followers you have on your biggest channel. Once you’ve been accepted to the program, you’ll start getting special access, perks, and support from Supercell to help you create on a whole new level!\\n","lan_how_foll":"How many followers do you have?","lan_tier_1_btn":"5,000+","lan_tier_2_btn":"10,000+","lan_tier_3_btn":"50,000+","lan_tier_4_btn":"I\'m a superstar","lan_tier_5_btn":"I\'m a resourcer","lan_tier_1_tit":"Bolts","lan_tier_1_subtit":"5,000+ followers","lan_tier_1_desc":"Get invited to the official Supercell Creators Discord server and receive exclusive tools and support!","lan_tier_2_tit":"Swords","lan_tier_2_subtit":"10,000+ followers","lan_tier_2_desc":"Get exclusive content, early access, and first looks at updates and join our Discord server for tools and support.","lan_tier_3_tit":"Shields","lan_tier_3_subtit":"50,000+ followers","lan_tier_3_desc":"Get invited to our Slack for even more exclusive content, access dev builds to preview game updates, and receive in-game promotions.","lan_tier_4_tit":"Stars","lan_tier_4_subtit":"Too many followers","lan_tier_4_desc":"Get the highest level of access, support, and trust from Supercell to help you keep creating like the Star you are.","lan_tier_5_tit":"Resourcers","lan_tier_5_subtit":"A strong community","lan_tier_5_desc":"Become a part of the community by helping Supercell Creators stay updated and enabled to create the best content.","lan_how_disc":"*Joining Supercell Creators does not guarantee any potential perks. We will provide our Creators with the best perks and support possible, but this will be decided by Supercell on an on-going basis and may change over time.","lan_cta_tit":"Apply to become a Supercell Creator","lan_cta_bod":"Ready to get exclusive tools, content, and support to help you create? Get started by applying now!\\nYou\'ll need a Supercell ID to begin your application. If you don\'t have a Supercell ID, you can simply create one in any Supercell game.","lan_cta_btn_join":"Join the program","home_info_subtitle":"Creators is","home_info_title":"The only place to get [exclusive sneak peeks], [tools], and [support] from Supercell [to help you create!]","home_info_subtitle_1":"What is Supercell Creators?","home_info_title_1":"A place to help you do what you do best","home_info_body_1":"We truly appreciate the amazing content that you create with Supercell games. We\'re here to help you become the best creator you can be!","home_info_subtitle_2":"What\'s in it for me?","home_info_title_2":"Exclusive first looks, tools & support!","home_info_body_2":"Become part of a trusted community with exclusive perks, first looks at new game content, awesome tools, and support from Supercell to help you create at your maximum potential.","home_feat_title_a":"Features","home_feat_title_b":"you will","home_feat_select":"Select feature","home_feat_1_title":"Join the community","home_feat_1_body":"Get access to the Creators Discord channel and join a community of Creators from all over the world. Share tips, knowledge, and make some new friends. Receive exclusive content from Supercell, and get weekly drops of Creator points that you can put to use in exciting raffles.","home_feat_2_title":"Merch codes","home_feat_2_body":"Every now and then we give away some pretty cool Supercell merch. Sometimes it’s for you, and sometimes it’s for you to delight your favourite followers. ","home_feat_3_title":"Update previews","home_feat_3_body":"Let’s face it! Being first is A and O. With update previews you’ll be able to create your content and be able to press publish as soon as new features are launched.","home_feat_4_title":"Video inbox","home_feat_4_body":"We’ve added a ‘Video Inbox’ to our games, where players can watch video content directly in the game. Upload your best videos or start a livestream and reach millions of viewers.","home_feat_5_title":"Creator Boost","home_feat_5_body":"Reach millions of players by posting your videos straight into the games video inbox. This is not a default feature, but it’s pretty awesome once you get it :)","home_stats_subtitle":"Global support","home_stats_title":"Today, [CREATORS] creators from [NATIONS] nations are being supported by our [CMS] amazing community managers in [LANGUAGES] different languages.","home_super_body":"Handpicked by Supercell, SuperCreators have a solid track record of quality content, a postitive attitude, and trust from our community managers.\\n\\nBut hey, becoming a black belt takes years of improvement, and a whole lot of effort, and even so, not everyone will make it to this level. ","home_super_instructions":"Tap a creator to hear their stories","home_cta_title":"Who can join?","home_cta_body":"In order to be accepted into the program you need to meet the following requirements.  But note that they are not a guarantee for getting accepted.","home_cta_check_1":"Always act in a good manner and respect other Creators and Community Managers.","home_cta_check_2":"Be at least 18 years old.","home_cta_check_3":"Have a minimum of 5 000 followers on Youtube, or 3 000 on Twitch.","home_cta_btn":"Go to application","not_app_none_tit":"Hey there!","not_app_none_bod":"We can’t seem to find a Creators account connected to this Supercell ID. You will need to apply to join the Creators program.","not_app_none_btn":"To application","not_app_rev_tit":"We\'re on it!","not_app_rev_bod":"Thanks for applying! We\'ve received your application and will get back to you as soon as possible! ","not_app_rev_btn":"Back to home","not_app_rev_btn_2":"Got it!","not_app_rej_tit":"Well, hello again!","not_app_rej_bod":"It looks like you’re logging in from an ID that has previously been rejected. You can send in a new application in [DAYS] days.","not_app_rej_btn":"Back to home","not_app_rej_btn_2":"I shall wait!","not_app_ban_tit":"Access denied","not_app_ban_bod":"Sorry, this Supercell ID has been banned from the platform. If you\'d like to learn more on bans or report an error, feel free to contact us.","not_app_ban_btn":"Ok","not_app_alreg_tit":"You, again?","not_app_alreg_bod":"This Supercell ID is already registered. Log in below to access your Creators account.","not_app_maintenance_tit":"Maintenance!","not_app_maintenance_bod":"Hi there! We’re doing some maintenance to improve your experience of Creators. The portal will be up and running shortly. Thanks for your patience!","not_app_":"","ab_tit":"What is Supercell Creators?","ab_bod":"We truly appreciate the amazing content that you create with Supercell games. To celebrate this, we’ve launched Supercell Creators, a platform and program built to offer you - our community of amazing creators - exclusive perks, first looks at new game content, awesome tools, and support to help you create at your maximum potential.\\n\\nTo do this, we’re using OAuth permissions for different platforms to:\\n\\nA. Verify your that you are the owner of your channel/account\\nB. Pull basic stats about views, number of videos and number of subscribers to help guide us when placing you into a suitable tier\\n\\nIf you have a minimum of 5,000 followers, you can get started by applying to become a Supercell Creator. We’ll review your application and place you in a suitable Creator tier based on how many followers you have on your biggest channel. Once you’ve been accepted to the program, you’ll start getting special access, perks, and support from Supercell to help you create on a whole new level!","reg_head_scid":"Supercell ID","reg_head_pla":"Platform","reg_head_acc":"Account","reg_scid_tit":"Let\'s get started!","reg_scid_bod":"Applying to become a Supercell Creator is super easy! Let\'s get started by logging in with your Supercell ID.\\n\\nIf you don\'t have a Supercell ID, you can create one in any Supercell game.","reg_scid_btn":"[Supercell ID]","reg_scid_tit_2":"Hi there!","reg_scid_bod_2":"It looks like you\'re already signed in with a Supercell ID. That’s great! Please click next to continue filling out your application to Supercell Creators.","reg_scid_btn_2":"Next","reg_re_tit":"Great, you’re back!","reg_re_bod":"It looks like you’ve already started an application. Do you wish to continue or start a new one?","reg_re_btn_1":"Continue","reg_re_btn_2":"Create new","reg_pla_tit":"Where are you creating?","reg_pla_bod":"Connect the platform where you have the most followers so we can place you in the best tier! You must have at least 5,000 followers on YouTube or 3,000 followers on Twitch to be eligible for the program.","reg_pla_other":"I create other types of content","reg_pla_why_btn":"Why do I have to do this?","reg_pla_why_bod":"To prevent anyone else from signing up with your channel, we ask you to connect with the platform to verify that the channel is yours. This is only for verification purposes, so your information is safe with us.","reg_pla_other_bod":"Cool! We\'d love to know more about what you create! Whether it\'s managing a subreddit, creating tools, or making something totally different, please enter a URL so we can check out what you do:","reg_pla_other_ph":"https://","reg_pla_add_btn":"Add another URL","reg_pla_del_btn":"Delete","reg_pla_next_btn":"Next","reg_acc_tit":"Which games do you create for?","reg_acc_bod":"Select the games that you actively create content for so we can give you the best support possible.","reg_acc_prim_btn":"Set as primary game","reg_acc_prim_btn_alt":"Primary game","reg_acc_prim_info":"Since you are creating content for multiple games, please also specify which you consider to be your primary game.","reg_acc_bod2":"Just a few personal details to finish your application! This is only for registration purposes and will never be shared anywhere or with anyone else","reg_acc_un":"Creator name","reg_acc_un_ph":"Type your Creator name here","reg_acc_fn":"First name","reg_acc_fn_ph":"Type your first name here","reg_acc_ln":"Last name","reg_acc_ln_ph":"Type your last name here","reg_acc_add":"Email","reg_acc_add_ph":"Type your email here","reg_acc_add_info":"For information regarding your Creators account. Will not affect your SCID.","reg_acc_lan":"I create content in:","reg_acc_lan_ph":"Select your language","reg_acc_abo_co":"I\'m based in","reg_acc_abo_co_ph":"Select location","reg_acc_dob":"Date of birth","reg_acc_dob_ph":"YYYY-MM-DD","reg_acc_dob_year":"Year","reg_acc_dob_year_ph":"YYYY","reg_acc_dob_month":"Month","reg_acc_dob_month_ph":"MM","reg_acc_dob_day":"Day","reg_acc_dob_day_ph":"DD","reg_acc_nda_tit":"One last thing!","reg_acc_nda_body":"Before you start creating, you must accept the [[Creators Terms, creators-terms, _blank]] and read through Supercell’s [[Privacy Policy, https://supercell.com/en/privacy-policy, _blank]]. Below is a summary (but not a substitute for) the Terms for your convenience.","reg_acc_nda_btn1":"Expand","reg_acc_nda_btn2":"Collapse","reg_acc_nda_1":"[[Creators Terms, creators-terms, _blank]] - You are at least 13 years old and understand that Supercell reserves all rights in connection with the Service and its games. You grant Supercell the right to use your User Content.\\n","reg_acc_nda_2":"[[Privacy Policy, https://supercell.com/en/privacy-policy, _blank]] - Supercell collects data to make the Service more functional and suitable for players, show personalized advertisements, and keep the Service fair and safe. We value and protect your data and use it only in the ways listed.","reg_acc_nda_3":"[[Non-Disclosure Agreement, https://supr.cl/NDA, _blank]] - You agree to keep all Confidential Information strictly confidential and not disclose it to any third party nor use it for any other purpose than in accordance with Supercell\'s instructions.","reg_acc_nda_3_con_tit":"Double-check!","reg_acc_nda_3_con_bod":"All information strictly confidential","reg_acc_nda_3_con_btn":"Got it","reg_acc_nda_agree":"Yes, I agree","reg_acc_sign":"Sign NDA","reg_acc_sign_ph":"Your full name","reg_acc_btn":"Submit application","reg_acc_gam_err":"Select one game or more","reg_acc_pri_gam_err":"Select your primary game","reg_acc_un_err":"Creator name required","reg_acc_un_err_2":"Creator name can not include < or > characters","reg_acc_fn_err":"First name required","reg_acc_ln_err":"Last name required","reg_acc_add_err":"Email required","reg_acc_lan_err":"Select your language","reg_acc_loc_err":"Select your country","reg_acc_dab_err":"Your date of birth should be in YYYY-MM-DD format","reg_acc_dab_err_2":"You need to be at least 13 years old to apply for the Creators program","reg_acc_nda_err":"You need to confirm the NDA","reg_acc_term_err":"You need to confirm the Terms of Service","reg_acc_priv_err":"You need to confirm the Privacy Policy","reg_acc_gen":"I am a:","reg_acc_gen_mal":"Male","reg_acc_gen_fem":"Female","reg_acc_gen_not":"*We will not use your gender information, it is for Finnish Tax Administration purpose only.","reg_acc_gen_err":"You have to select one","reg_acc_sign_err":"Your signature needs to match with your first and last name","reg_acc_general_err":"Something went wrong. Please try again.","reg_comp_tit":"Thanks, [firstname]!","reg_comp_bod":"We\'ve received your application and we\'ll get back to you soon!","reg_comp_btn":"Back to Home","wel_intro":"Welcome to Supercell","wel_tit":"Hi, we\'re glad you\'re here!","wel_tit_boost":"Creator Boost","wel_subtit_boost":"A feature from","wel_bod":"Congrats on becoming a Supercell Creator! We can’t wait to help you grow and create more awesome content for your fans!","wel_bod_boost":"Hi [USERNAME]!\\n\\nYour application for Creator Boost has been approved. Now, please read through and accept our Creator code of conduct below and then we’ll set up your Boost details.","wel_inf":"Login to get started","wel_btn":"Get started","wel_vid_tit":"What you’ll get as a Creator","wel_vid_subtit":"Welcome Video","wel_vid_bod":"A short message from us about what you can expect from being in the Creator program.","wel_coc_tit":"The Creator Code of Conduct","wel_coc_bod":"As a Creator, you must follow these rules to remain within the Creator program.","wel_coc_scroll":"Scroll to continue","wel_coc_stop1_tit":"Be Friendly!","wel_coc_stop1_bod":"Your content must be family-friendly. This means your content should not contain anything relating to drugs, alcohol, explicit images, foul language, or disrespectful behavior.","wel_coc_stop1_btn":"Got it!","wel_coc_stop2_tit":"Be Honest!","wel_coc_stop2_bod":"Don’t mislead with your content. Titles, thumbnails, and descriptions should be an accurate representation of the content.","wel_coc_stop2_btn":"Of course!","wel_coc_stop3_tit":"Be Respectful!","wel_coc_stop3_bod":"You should be kind, considerate, and civil.","wel_coc_stop3_btn":"Always","wel_coc_stop4_tit":"Play Fair!","wel_coc_stop4_bod":"This means following Supercell’s [[Fair Play Policy, https://supercell.com/en/safe-and-fair-play/, _blank]], and never promote hacking, fraudulent gems/diamonds, account sharing or any other violations of Supercell’s terms of service.","wel_coc_stop4_btn":"Sounds fair!","wel_coc_stop5_tit":"Keep it secret & Safe!","wel_coc_stop5_bod":"Your content must not violate the non-disclosure agreement, follow the [[Terms of Service, https://supercell.com/en/terms-of-service/, _blank]] as well as the terms of service of the platform on which you post it.","wel_coc_stop5_btn":"Absolutely","wel_coc_stop6_tit":"Breaking the Rules?","wel_coc_stop6_bod":"Unnaceptable behaviour may result in immediate expulsion from the Creator Program without warning.","wel_coc_stop6_btn":"Understood","wel_rule_tit":"The golden rule","wel_rule_bod":"Everything within the Creator Program is private. We want to have an open atmosphere where we can share early information with all of you, and where you can share tips and learnings with your fellow Creators. In order to maintain this open atmosphere, we will rely on everything in the program to be kept private.","wel_start_tit_boost":"Great!","wel_start_bod_boost":"Now let’s get your Boost details in place.","wel_start_btn_boost":"Set up my Boost","wel_start_btn":"Get started","port_start_intro":"Welcome to Supercell","port_start_tit":"We\'re so glad you\'re here!","port_start_bod":"Congrats on becoming a Supercell Creator! We can’t wait to help you grow and create more awesome content for your fans!","port_wel_tit":"What\'s to come","port_wel_bod":"This is just the beginning! Here\'s a roadmap of what\'s in store for the program:","port_wel_vip_tit":"VIP Launch","port_wel_vip_bod":"For the initial launch, we\'re inviting VIP Creators who we already know and support to get early access to the platform and its perks.","port_wel_pub_tit":"Public Launch","port_wel_pub_bod":"After developing how to best support Supercell Creators in the VIP launch, we\'ll open up the program and allow anyone to apply to become a Creator.","port_wel_fut_tit":"Future Development","port_wel_fut_bod":"We want to support our Supercell Creators and help them grow, so we\'re looking for your feedback on how to develop this platform best!","port_wel_what_tit":"What to do now","port_wel_what_bod":"Get started now by joining one of our official Supercell Creators channels!","port_start_disc_tit":"Discord","port_start_disc_bod":"Our Discord server is where all Supercell Creators can hang out, chat, and get updates and support. Everyone\'s there so it\'s quite a busy place! Join the party!","port_start_disc_cta":"Connect with Discord","port_start_slack_tit":"Slack","port_start_slack_bod":"Our Slack is where we share first looks at new game content and other special perks with Creators in the Shields tier. Join our Slack for early access and the best support! ","port_start_slack_cta":"Connect with Slack","port_start_ha_tit":"App Center","port_start_ha_bod":"App Center is where we share dev builds with Creators in the Shields tier to get early access to game updates. Connect with App Center to play game updates before anyone else!","port_start_ha_cta":"Connect with App Center","port_start_aff_btn":"Join Creator Boost","vid_inbox_tit":"Video Inbox","vid_inbox_bod":"We\'ve added a \\"Video Inbox\\" to our games, where players can watch video content directly in the game. Submit a YouTube video now that you want to show up in the game!","vid_inbox_bod_alt":"We’ve added a “Video Inbox” to our games, where players can watch video content directly in the game.","vid_inbox_bod_2":"Each game has its own limits for the number of videos you are allowed to upload each week. If your quota is full you just have to wait until you can generate a link again.","vid_inbox_guide_tit":"Guidelines for video inbox","vid_inbox_guide_subtit":"The video inbox is the single biggest piece of trust we can share with you. This feature is giving you direct access to post your videos into the game reaching millions of players. ","vid_inbox_guide_bod":"With great power comes great responsibility. We want you to pick your very best videos that are above and beyond the rest.\\n\\nThere should be nothing even remotely close to clickbait, every second of your video should be friendly for all players, and you should review this 10x more than anything else you post. Any videos posted here that break our guidelines will be met with a zero-tolerance policy. That means you will instantly lose access to the Creators program and potentially your entire channel. Use this feature with the greatest caution. \\n\\nYou should avoid things like box opening videos, meme reviews, or other ‘light’ content. These videos should be useful/deep guides, strategy videos, esports, showcases of sneak peeks, or in-depth reviews of game features. ","vid_inbox_guide_check":"Approve the guidelines","vid_inbox_guide_btn":"open inbox","vid_inbox_in":"Your inbox:","vid_inbox_foot":"*The video inbox is available for your primary game","vid_inbox_foot_2":"You\'ve been granted access for multiple games","vid_inbox_foot_3":"Your primary game has no video inbox yet","vid_inbox_change":"Change primary game","vid_inbox_tip":"Video inbox is available for your primary game. However, we like your stuff so much we gave you some extra access. 😊 ","vid_inbox_select":"Select your inbox","vid_inbox_link_ready":"Your link is ready","vid_inbox_link_used":"This link has been opened. Generate a new one by clicking the button above.","vid_inbox_subtitle":"Submit a video","vid_inbox_subbod":"Select a game to submit a video for","vid_inbox_gen_btn":"Generate link","vid_inbox_link_bod":"The link below will take you to the Video Inbox submission page. It is valid for 15 minutes and cannot be reused.","vid_inbox_link_opn_btn":"Open link","vid_inbox_link_cpy_btn":"Copy","vid_inbox_link_cpy2_btn":"Copied","vid_inbox_link_min_lef":"{mins} mins left","vid_inbox_link_exp":"Link expired","vid_inbox_note":"*Note: Supercell Creators can generate 100 links per week. You have now created {linksCreated}, thus only have {linksLeft} left this week (that ends on {endDate}).","vid_inbox_sub_vids":"Your submitted videos","vid_inbox_lin_cre_lbl":"{count} links created","vid_inbox_quota":"Your quota is full","vid_inbox_lin_avail":"New link available in {days} days","vid_inbox_lin_avail_alt":"New link available","vid_inbox_unsupported":"Your primary game [GAME] does not have a video inbox yet","vid_inbox_find":"Can’t find your game?","vid_inbox_find_tooltip":"You do have acess to [GAMES] as well, but [PLURAL] not supported by Video inbox just yet.","port_disc_nav_btn":"Back","port_disc_tit":"Join our Discord","port_disc_bod":"[[Discord, https://discord.com, _blank]] is the open place where all Creators hang out. Everyone is there so it’s quite a busy place! We’d love to see you there too, so go check it out now!\\n\\nFollow the steps below to join. If you’re already in Discord go straight to step 2.","port_disc_btn":"Connect with discord","port_disc_con_tit":"Discord","port_disc_con_bod":"Discord is the open place where all Creators hang out. Everyone is there so it’s quite a busy place!\\n\\nYou are connected to discord! 💚","port_disc_con_subtit":"Disconnect from Discord","port_disc_con_subbod":"Here you can disconnect your Discord account. You will be able to re-connect once disconnected. ","port_disc_con_btn":"Disconnect","pot_disc_step_1_title":"Create a Discord account","pot_disc_step_1_body":"Go to [[https://discord.com/register, https://discord.com/register, _blank]] and create an account if you don’t already have one.","pot_disc_step_2_title":"Connect with Discord","pot_disc_step_2a_body":"Important","pot_disc_step_2b_body":" - In the popup you need to allow Supercell to get access.","pot_disc_step_2b_btn":"","port_disc_con_tr":"Now you just have to introduce yourself in the [[#General channel, https://discord.com/channels/547793312229097478/547850422140796963, _blank]] in order to flip your Creator progress Discord card.","port_disc_banned_tit":"Discord","port_disc_banned_bod":"You have been banned from Discord 💀","port_disc_auth_tit":"Discord verification","port_disc_auth_bod":"It seems your account is not connected to the Creators Discord channel. You will need to verify your account using the button below. This is so that we can make sure that only Creators has access.","port_disc_auth_btn":"Verify discord  account","port_disc_auth_tit_2":"Thanks!","port_disc_auth_bod_2":"Your Discord account has been verified. We hope the channel is of good use on your Creator journey :) ","port_disc_auth_btn_2":"Take me back to Discord","port_disc_auth_tit_3":"Discord","port_disc_auth_bod_3":"Your Discord account has already been connected. Thanks for checking. 💚","port_disc_auth_btn_3":"Take me back to Discord","port_slack_nav_btn":"Back","port_slack_tit":"Slack","port_slack_bod":"Join the Creators discussions on Slack. Get the latest news and game updates from your CMs and connect with fellow Tier 3 Creators. ","port_slack_subtit":"Join us on Slack","port_slack_bod_2":"Enter the email you want to use for Creators Slack. An invite will be sent to this email.","port_slack_email_ph":"email@example.com","port_slack_email":"Enter your email","port_slack_email_2":"Confirm your email","port_slack_checkbox":"This is the email address I want to use for Creators Slack, and I understand I can NOT change this.","port_slack_btn":"Send invite","port_slack_invite_tit":"You have been invited","port_slack_invite_bod":"Please check your inbox and click the link in the email to set up your Creators Slack.","port_slack_invite_goto":"Go to Creators Slack","port_slack_error_email":"This doesn\'t look like a valid email","port_slack_error_confirm_email":"Please enter the same email twice","port_slack_info":"Joining our Slack is super easy! We\'ll send you an invite link as soon as you\'ve been approved for the Shields tier.","port_slack_step_one":"1. Log in to Slack with the same email as your Supercell Creators account","port_slack_step_two":"2. Go to sc-creators.slack.com ","port_slack_join":"Download Slack here:","port_slack_join_link":"https://slack.com/downloads","port_slack_faq_tit_1":"Didn’t receive an invite?","port_slack_faq_bod_1":"If you didn’t get an invite by email you can join here: [[slack.com/signin, https://slack.com/signin, _blank]]","port_slack_faq_tit_2":"Getting Started with Slack","port_slack_faq_bod_2":"Slack is a messaging tool that we use for communication with, and between our Tier 3 Creators. If you are new to Slack, go to [[www.slack.com, https://slack.com/, _blank]] to download and register the software. They also have a great onboarding section ([[https://slack.com/help/categories/360000049043, https://slack.com/help/categories/360000049043, _blank]]) with all the information you might need.","port_slack_faq_tit_3":"What to expect from the Creators Slack","port_slack_faq_bod_3":"Slack is where our CM’s communicate news, updates and releases within the Creator program. It is also where you can communicate other tier 3 Creators to get the most out of the Creators program.","port_slack_faq_tit_4":"Creators Discord vs. Slack. What’s the difference?","port_slack_faq_bod_4":"Discord is for tiers 1 and 2. Slack is for Tier 3 only. You are welcome to join both, but official communications to Creators in your Tier happen on Slack.","port_slack_faq_tit_5":"Confidentiality","port_slack_faq_bod_5":"Remember that everything written in Slack is strictly confidential until it’s clearly expressed that you can share information. Violating this may result in expulsion from the Creator program.","port_slack_faq_tit_6":"I have lost access to Slack","port_slack_faq_bod_6":"Lost your password? Please refer to this article for help on how to restore it: [[https://slack.com/help/articles/201909068-Reset-your-password, https://slack.com/help/articles/201909068-Reset-your-password, _blank]]","port_slack_faq_tit_7":"Slack help","port_slack_faq_bod_7":"If you need any help or support regarding Slack, please look at their help section. [[https://slack.com/help, https://slack.com/help, _blank]]","port_slack_err_tit_1":"Please try again","port_slack_err_bod_1":"Seems something went wrong. Please try once more.","port_slack_err_btn_1":"Got it","port_slack_err_tit_2":"This email already joined","port_slack_err_bod_2":"It seems that the email you entered is already added to our Slack. Please reach out to your CM for support with this.","port_slack_err_btn_2":"Got it","port_ha_nav_btn":"Back","port_ha_tit":"How to connect to App Center","port_ha_tit_alt":"App Center","port_ha_bod":"App Center is where we share dev builds with Creators in the Shields tier to get early access to game updates. Connect with App Center to play game updates before anyone else!","port_ha_info":"Connecting with App Center is super easy! Just follow these easy steps:","port_ha_disabled":"Your Creators account is currently not eligible for App Center.","port_ha_step_one":"Create an App Center account","port_ha_step_one_body":"Go to [[https://appcenter.ms/create-account, https://appcenter.ms/create-account, _blank]] and create an account. Take a note of the email address used in the account, you will need it soon.\\n\\nIf you already have an App Center account, continue to step 2 but make sure you know the email address used.","port_ha_step_two":"Connect to App Center","port_ha_step_two_body":"Great, now check your email inbox to complete the setup. Didn’t get the invite? Check your spam box or resend the invite.","port_ha_join":"Find App Center here:","port_ha_join_link":"https://appcenter.ms/sign-in","port_ha_connect_tit":"Connect to App Center","port_ha_connect_btn":"Request invite","port_ha_connected_tit":"Connected email address to App Center","port_ha_retry_btn":"Try again","port_ha_reinvite_btn":"Resend invite","port_ha_connect_success_txt":"Great, now check your email inbox to complete the setup. Didn’t get the invite? Check your spam box or <a href=\\"#\\">resend the invite</a>.","port_ha_connect_success_lbl":"Invite sent!","port_ha_connect_error_default_txt":"Something went wrong. Please try again.","port_ha_connect_error_unauthorized_txt":"You are not authorized.","port_ha_connect_error_not_tier_3_txt":"You are not Tier 3.","port_ha_connect_input_ph":"your@email.com","port_ha_connect_input_tip":"Make sure to use the same email that you use on App Center.","port_ha_games_tit":"Get access to even more games","port_ha_games_txt_pending":"Once you have connected to App Center, you will automatically get access to your primary game. Have you already accepted the invite? <a href=\\"#\\">Refresh this page</a> to activate more games.","port_ha_games_txt_active":"You automatically get access to your primary game. But you can also even access more Supercell games by activating them below:","port_ha_notice_txt":"Note: Hay Day and Hay Day Pop are not currently available on App Center","port_ha_primary_game_lbl":"Primary game","port_ha_game_activate_btn":"Activate","port_ha_game_activated_lbl":"Activated","port_ha_game_requested_lbl":"Requested","port_ha_game_disabled_lbl":"Not available","port_user_tier":"Tier","port_user_edit_btn":"Edit personal information","port_user_req_upg_btn":"Request tier upgrade","port_user_sub":"Subscribers","port_user_vie":"Avg views/video","port_user_vid":"Videos","port_user_plat_tit":"Platforms","port_user_plat_bod":"Make sure you max your Creator status by connecting to your platforms. You need to connect at least one primary Youtube or Twitch channel. But feel free to add more below if you create in other places as well.","port_user_plat_pri_tit":"Primary channels","port_user_plat_con":"Connect","port_user_plat_con_2":"Connected","port_user_plat_discon":"Disconnect","port_user_plat_mod_tit":"Are you sure?","port_user_plat_mod_bod":"Do you really want to disconnect your channel?","port_user_plat_mod_btn_pri":"Disconnect","port_user_plat_mod_btn_sec":"Go back","port_user_plat_addit_tit":"Additional platforms & channels","port_user_plat_addit_bod":"Are you active on other platforms? Perhaps you have more than one channel on the same platform? Then specify them below!","port_user_plat_addit_channels":"Supported channels","port_user_plat_addit_channels_num":"+5","port_user_plat_addit_placeholder":"Enter URL","port_user_plat_addit_btn_save":"Save","port_user_plat_addit_mod_tit":"Supported channels","port_user_plat_addit_mod_bod":"Here is a list of supported platforms and channels you can add.","port_user_plat_addit_mod_btn":"Close","port_user_plat_addit_btn_add":"Add channel","port_user_plat_addit_err_unsupported":"Oh no, we don\'t support this platform!","port_user_plat_addit_err_duplicate":"Looks like you\'ve already added this one","port_user_plat_addit_err_invalid":"This doesn\'t look like a valid channel URL","port_user_gam_tit":"My games","port_user_gam_bod":"Select the games you create content for","port_user_gam_mod_tit":"Are you sure?","port_user_gam_cooldown":"You can change or deactivate your primary game on","port_user_gam_mod_bod":"You may only change your primary game once every 7 days.","port_user_gam_mod_btn_pri":"Yes, do it!","port_user_gam_mod_btn_sec":"Cancel","port_user_gam_mod_info":"You can not deselect your primary game. Please change your primary game first and try again.","port_user_gam_mod_info_alt":"Primary game can only be changed every 2 weeks. You can change again on","port_user_gam_mod_info_btn":"Got it!","port_user_aff_tit":"Creator Boost Settings","port_user_aff_hndl":"Your Creator Code:","port_user_aff_cpy":"Copy code","port_user_aff_info":"Stay tuned for Boost stats, coming 2020","port_user_aff_disc":"Disconnect","port_user_aff_disc_bod":"If you disconnect paypal, you will not receive payouts from the Creator Boost until you connect again (with same or another account).","port_user_aff_disc_conf":"Confirm disconnect","port_user_aff_disc_canc":"Cancel","port_user_aff_paypal_bod":"You have disconnected from Paypal. The revenue sharing is therefore turned off until you connect again.","port_user_log_tit":"Logged in","port_user_log_btn":"Sign out","port_tie_upg_mod_tit":"Would you like to request a tier upgrade?","port_tie_upg_mod_bod":"If your fanbase has grown since you became a Supercell Creator and you\'re no longer in the correct tier, let us know and we can see whether you should be upgraded to a higher tier!","port_tie_upg_mod_sec_btn":"Nah, I\'m fine","port_tie_upg_mod_pri_btn":"Yes, please!","port_tie_upg_not_tit":"Good luck!","port_tie_upg_not_bod":"Thanks for reaching out. We\'ll review your current stats and get back to you soon!","port_tie_upg_not_btn":"Go to Profile","tier_upg_mod_header_1":"Goblin daily press","tier_upg_mod_header_2":"Good news only","tier_upg_mod_joins":"[USERNAME] joins tier [TIER]","tier_upg_mod_title":"“We like your stuff”","tier_upg_mod_subtitle":"/Folks @ Supercell","tier_upg_mod_body":"So our content managers have had a look at your account. And yes! We liked what we saw so much, that we decided to move you up to tier 2.\\n\\nWelcome to the Swords, hope this will help you in producing even more awesome content.","tier_upg_mod_btn_close":"Close","tier_upg_mod_btn_more":"See what’s new","port_use_set_tier":"Tier","port_use_set_abo_tit":"About me","port_use_set_abo_fn":"First name","port_use_set_abo_fn_ph":"Type first name here","port_use_set_abo_ln":"Last name","port_use_set_abo_ln_ph":"Type last name here","port_use_set_abo_un":"Creator name","port_use_set_abo_un_ph":"Type Creator name here","port_use_set_abo_em":"Email","port_use_set_abo_em_ph":"Type email here","port_use_set_abo_em_info":"For information regarding your Creators account. Will not affect your SCID.","port_use_set_abo_la":"Language","port_use_set_abo_co":"I\'m based in","port_use_set_abo_co_ph":"Select location","port_use_set_abo_dob":"Date of birth","port_use_set_abo_dob_ph":"YYYY-MM-DD","port_use_set_abo_dob_year":"Year","port_use_set_abo_dob_month":"Month","port_use_set_abo_dob_day":"Day","port_use_set_abo_dob_year_ph":"YYYY","port_use_set_abo_dob_month_ph":"MM","port_use_set_abo_dob_day_ph":"DD","port_use_set_soc_tit":"Social Accounts","port_use_set_soc_bod":"Let us know your social media accounts so we can place you in the best Creator tier.","port_use_set_soc_tw":"Twitter","port_use_set_soc_tw_ph":"@username","port_use_set_soc_fb":"Facebook","port_use_set_soc_fb_ph":"Your profile URL","port_use_set_soc_in":"Instagram","port_use_set_soc_in_ph":"@username","port_use_set_un_err":"Creator name required","port_use_set_un_err_2":"Creator name can not include < or > characters","port_use_set_fn_err":"First name required","port_use_set_ln_err":"Last name required","port_use_set_add_err":"Email required","port_use_set_lan_err":"Select your language","port_use_set_loc_err":"Select your country","port_use_set_twitter_err":"Enter a valid Twitter username","port_use_set_facebook_err":"Enter a valid Facebook profile url","port_use_set_instagram_err":"Enter a valid Instagram username","port_use_set_dab_err":"Your date of birth should be in YYYY-MM-DD format","port_use_set_gen":"I am a:","port_use_set_gen_mal":"Male","port_use_set_gen_fem":"Female","port_use_set_gen_not":"*We will not use your gender information, it is for Finnish Tax Administration purpose only.","port_use_set_gen_err":"You have to select one","port_use_set_del_tit":"Not a creator anymore?","port_use_set_del_bod":"If you are no longer an active Creator and wish to delete your account, please reach out to your CM for support with this.","port_use_set_del_btn":"Delete account","port_use_set_save_btn":"Save and return","port_del_acc_tit":"Deleting your account","port_del_acc_bod":"You can delete your account anytime, but then you will lose access to all of your Supercell Creator perks, first looks, and support. But we’d really love for you to stick around and we’d be happy to hear anything we can do to improve the program.","aff_signup_tit":"Creator Boost - Sign up","aff_signup_desc":"If you join Creator Boost, you can earn money whenever your followers purchase Gems or Diamonds and enter your Creator Code.","aff_signup_paypal_tit":"PayPal","aff_signup_paypal_disc_btn":"Disconnect","aff_signup_paypal_close_btn":"Close\\n","aff_signup_paypal_con_lbl":"Connected","aff_signup_paypal_dis_btn":"Disconnect PayPal","aff_signup_handle_tit":"Select your Creator Code","aff_signup_handle_input_ph":"Type your unique Creator Code","aff_signup_handle_taken_err":"This Creator Code is already taken","aff_signup_handle_input_again_lbl":"Confirm your Creator Code","aff_signup_handle_input_again_ph":"Type your Creator Code again","aff_signup_handle_no_input_err":"Your Creator Code must not be empty","aff_signup_handle_short_input_err":"Your Creator Code must be at least 3 characters","aff_signup_handle_char_input_err":"Your Creator Code can only include \\"a-z\\", \\"A-Z\\", \\"0-9\\", \\"-\\" and \\"_\\" characters","aff_signup_handle_no_match_err":"\\"{boosthandle1}\\" does not match \\"{boosthandle2}\\"","aff_signup_handle_desc":"Your Creator Code is what your followers enter in the game\'s shop.","aff_signup_handle_tip":"Tip: make your Creator Code easy to spell and remember. And choose it carefuly - you cannot change it later!","aff_signup_next_btn":"Next","aff_signup_pers_det_tit":"Personal details","aff_signup_pers_det_pnr_lbl":"Personal number / SSN","aff_signup_pers_det_pnr_err":"Must not be empty","aff_signup_pers_det_pnr_ph":"","aff_signup_pers_det_birthdate_lbl":"Date of birth","aff_signup_pers_det_birthdate_err":"Your date of birth should be in YYYY-MM-DD format","aff_signup_pers_det_birthdate_ph":"YYYY-MM-DD","aff_signup_pers_det_gen_lbl":"Gender","aff_signup_pers_det_gen_mal":"Male","aff_signup_pers_det_gen_fem":"Female","aff_signup_confirm_txt":"Please make sure that all of the information above is correct and then type \\"CONFIRM\\" below.","aff_signup_confirm_input_ph":"Type \\"CONFIRM\\" here","aff_signup_confirm_value":"CONFIRM","aff_signup_confirm_tos":"I have read and agreed to the [[Creators Terms, creators-terms, _blank]].","aff_signup_submit_err":"Try again","aff_signup_submit_btn":"Submit request","aff_join":"Join Creator Boost","aff_pp_err_gen_tit":"Something went wrong!","aff_pp_err_gen_bod":"Stay strong! Persistence is key!","aff_pp_err_gen_btn":"Close and try again","aff_pp_err_forbid_tit":"We\'re sorry!","aff_pp_err_forbid_bod":"Unfortunately Creator Boost is not supported in your region","aff_pp_err_forbid_btn":"Got it!","aff_signup_thanks_tit":"Thank you!","aff_signup_thanks_bod":"We\'ve received your application and will get back to you as soon as possible!","aff_signup_thanks_btn_lbl":"Back to Home","aff_signup_acc_tit":"Funny seeing you here!","aff_signup_acc_bod":"It looks like you\'ve already joined the Creator Boost program. If you\'d like to adjust your details. you can do so on the Settings page.","aff_signup_acc_btn_lbl":"Go to Settings","aff_signup_rej_tit":"So we meet again...","aff_signup_rej_bod":"It looks like you\'ve already applied to the Creator Boost program and your application wasn\'t approved, so unfortunately you can\'t apply again right now. To find out more or report an error, feel free to contact us!","aff_signup_rej_btn_lbl":"Back to Home","log_title":"Hi there!","log_body":"You need to sign in to access this page. Click the button below to sign in with your Supercell ID.","log_err_tit":"Login error","log_err_bod":"An unexpected error occured. Please try logging in again.","log_err_btn":"Try again","pla_err_tit":"Something went wrong!","pla_err_bod":"Stay strong! Persistence is key!","pla_err_btn":"Close and try again","pla_err_foll_tit":"Oops!","pla_err_foll_bod":"It looks like you don’t meet our current requirements for joining Supercell Creators. From what we can see you need a few more followers. Good luck, and hope to see you again someday soon!","pla_err_foll_btn":"Close","pla_err_discord_not_in_tit":"Could not verify","pla_err_discord_not_in_bod":"The account you tried to connect with could not be found in our Discord (perhaps you have multiple Discord accounts?)\\n\\nPlease log in to [[our channel, https://discord.com/channels/547793312229097478/547850422140796963, _blank]], and then try again.","pla_err_discord_not_in_btn":"Got it!","pla_err_discord_not_connected_tit":"Already Disconnected","pla_err_discord_not_connected_bod":"It seems this account has already been disconnected. ","pla_err_discord_already_connected_tit":"Already Connected","pla_err_discord_already_connected_bod":"It seems this account has already been connected. ","pla_err_discord_banned_tit":"Well this is akward...","pla_err_discord_banned_bod":"It seems we’ve already banned your account from Discord.","pla_err_discord_btn":"Ok","404_tit":"Page not found","404_bod":"Sorry, but the page that you\'re trying to access does not exist.","404_btn":"Back to Home","cb_cta_tit":"Creator Boost","cb_cta_bod":"If you join our Creator Boost program, you can earn money whenever your followers purchase Gems or Diamonds and reference you.","cb_cta_btn":"Join Creator Boost","cb_cta_review_bod":"Your Boost application is in process and is expected to be activated shortly. Feel free to pop some confetti while waiting.","cb_cta_review_btn":"Pop some confetti","cb_cta_reject_bod":"Your Boost has been disabled by admin.","my_stu_cb_logo":"Creators Boost","my_stu_cb_no_chart":"This is your Boost panel. Once your fans start using your Creator Code, you will see the earnings here.\\n\\nShare your Creator Code!","my_stu_cb_info_tit":"Information","my_stu_cb_info_bod":"Things might move around a bit in the Boost section as we’re working on finding the best way to visualise your data. ","my_stu_cb_wel_title":"Welcome to Boost!","my_stu_cb_wel_body":"Your application has been approved! Now it’s time to start sharing your Creator Code and earn some sweet revenue for all your hard work. ","my_stu_cb_wel_btn":"Open my Boost panel","my_stu_cb_code_title":"Your Creator Code was used!","my_stu_cb_code_body":"Someone used your Creator Code! That’s worth celebrating! First only comes once. Open up some champagne and keep up the great work!","my_stu_cb_code_btn":"Close","my_stu_cb_inf_title":"Hey","my_stu_cb_inf_body_1":"This is your Boost panel where you can keep track of your earnings and payouts.","my_stu_cb_inf_body_2":"€1,000","my_stu_cb_inf_body_3":"is the miminum amount to qualify for a payout (But don’t worry, you bring your earnings to next month if you don’t reach the €1,000 minimum).","my_stu_cb_inf_btn":"Got it!","my_stu_cb_tip_title":"Please note","my_stu_cb_tip_body":"We can’t guarantee that the Boost data displayed in Supercell Creators are 100% accurate at all times. Therefore these numbers should be seen as an estimate and actual payouts may differ from what is shown on the site.","my_stu_cb_tip_btn":"Got it!","my_stu_cb_title":"Creator Boost","my_stu_cb_subtitle":"Your Creator code revenue","my_stu_cb_cpy":"Copy code","my_stu_cb_all":"All time","my_stu_cb_prev":"Previous payout","my_stu_cb_recent":"Most recent payout","my_stu_cb_cur":"Current period","my_stu_cb_est":"(estimated)","my_stu_cb_since":"Since","my_stu_cb_yet":"No payouts yet","my_stu_cb_next":"Next payout","my_stu_cb_view":"Click a date to view details","my_stu_cb_total_per":"Total Boost for this period","my_stu_cb_est_per":"Please note that current period is an estimate and payouts may differ slightly from the data shown.","my_stu_cb_daily_data":"View daily data per game","my_stu_cb_no_payout":"No payout","my_stu_cb_no_tba":"Stay tuned","my_stu_cb_daily_average":"Daily average","my_stu_cb_date":"Date","my_stu_cb_per_game":"Per game","my_stu_cb_boost":"Boost","my_stu_cb_total":"Total","my_stu_cb_earn":"Earnings:","my_stu_cb_code":"Code usage:","my_stu_cb_periodic":"Periodic","my_stu_cb_cumulative":"Cumulative","my_stu_cb_daily":"Daily","my_stu_cb_weekly":"Weekly","my_stu_cb_monthly":"Monthly","my_stu_cb_yearly":"Yearly","my_stu_cb_all_games":"All games","my_stu_cb_close":"Close","my_stu_cb_view_rev":"View revenue per game","my_stu_cb_conf":"Confirmed","my_stu_cb_prel":"Preliminary","my_stu_cb_prel_info":"Last 30 days are always preliminary since potential refunds are calculated and edited close to your payout date.","my_stu_cb_soon":"Your stats are on their way. Very soon!","my_stu_cb_closed":"So we found a few wires on the back plugged into the wrong holes!\\nThis does not affect your Boost earnings in any way but we need to sort them out before we can visualize your numbers correctly. \\n\\nWe’ll be up and running shortly!","my_stu_cb_tax":"All Boost data displayed includes tax","my_stu_cb_pay_pay":"Boost payouts","my_stu_cb_pay_trans":"transaction | transactions","my_stu_cb_pay_about":"About payouts","my_stu_cb_pay_all":"All-time payouts","my_stu_cb_pay_rec":"Most recent","my_stu_cb_pay_view":"View all payouts","my_stu_cb_pay_mod_tit":"About payouts","my_stu_cb_pay_mod_subtit_1":"When will I get paid?","my_stu_cb_pay_mod_bod_1":"Once you reach €1,000 total revenue threshold across games, you are eligible for a payment. Payments are made approximately 60-90 days after the revenue has been earned and the threshold has been reached. If you do not reach the threshold, your earnings will carry on to the next months until it is reached. ","my_stu_cb_pay_mod_subtit_2":"What does preliminary mean?","my_stu_cb_pay_mod_bod_2":"This preliminary data is an estimate and does not factor taxes, refunds, etc. You should expect the final data to differ from these preliminary numbers. ","my_stu_cb_pay_mod_subtit_3":"Do you deduct tax on my payouts?","my_stu_cb_pay_mod_bod_3":"Yes, tax is deducted from your payment based on the country in which you reside.","my_stu_cb_pay_mod_btn":"Got it!","my_stu_cb_msg_tit":"Clash Mini + Boost information","my_stu_cb_msg_bod":"Clash mini is now connected to Boost, meaning you will earn revenue when your code is used in-game. However, we are still working on implementing it on the Creators platform. Therefore, note that potential earnings through Clash mini is not displayed in your dashboard just yet. ","my_stu_cb_msg_btn":"View message","my_stu_cb_msg_btn_2":"Hide message","cb_pay_tit":"Boost payouts","cb_pay_all_time":"All-time","cb_pay_all_trans":"All transactions","cb_pay_about":"About payouts","cb_pay_date":"Date","cb_pay_game":"Game","cb_pay_pay_per":"Payment period","cb_pay_per":"Period:","cb_pay_code_use":"Code usage","cb_pay_inv":"Invoice","cb_pay_payslip":"Payslip","cb_pay_amount":"Amount","cb_pay_tot_pay":"Total payout","cb_pay_tot_pay_tax":"Revenue before taxes","cb_pay_nav_btn":"Back","cb_pay_no_pay":"No payouts have yet been issued.","my_stu_my_too_tit":"My tools","my_stu_my_too_bod":"Connect with your tools to stay updated and get the most out of Supercell Creators. Click on a tool to learn about how to connect.","my_stu_my_too_dis":"Discord","my_stu_my_too_sla":"Slack","my_stu_my_too_app":"App Center","my_stu_mer_cod_tit":"Merch Codes","my_stu_mer_cod_bod":"Here is where you will find your merch codes. Seems like you haven’t received any codes just yet, but remain calm. Good things will come.","my_stu_mer_cod_bod_alt":"Here is where you find your merch codes. An email notification will be sent out whenever new codes are available.","my_stu_mer_cod_bod_alt_2":"Here is where you find your merch codes. An email notification will be sent out whenever new codes are available. All merch codes are claimed at [[supercellredemption.com, %{URL}, _blank]].","my_stu_mer_cod_ite_lbl":"1 new code | {count} new codes","my_stu_mer_cod_unused":"1 Unused code | {count} Unused codes","my_stu_mer_cod_sort":"Sort by","my_stu_mer_cod_sort_date":"Date","my_stu_mer_cod_sort_date_alt":"Sort by date","my_stu_mer_cod_sort_status":"Status","my_stu_mer_cod_sort_status_alt":"Sort by status","my_stu_mer_cod_use_btn":"Use code","my_stu_mer_cod_code":"Code:","my_stu_mer_cod_mark":"Mark as unused","my_stu_mer_cod_dl_image":"Download image","my_stu_mer_cod_share_text":"You received [TITLE]. Claim at [URL] using code: [CODE]","my_stu_mer_cod_view_btn":"View all","my_stu_mer_cod_view_btn_alt":"Close","my_stu_mer_cod_share_btn":"Copy message","my_stu_mer_cod_claimed":"Claimed by:","my_stu_mer_cod_ite_btn_lbl":"Claim","my_stu_mer_cod_ite_exp_dat_lbl":"Claimed {date}","my_stu_mer_cod_ite_exp_ed_dat_lbl":"Expired {date}","my_stu_mer_cod_ite_lef_lbl":"({count} left)","my_stu_mer_cod_ite_exp_btn":"Expired codes","my_stu_mer_cod_ite_cla_sta_lbl":"Claiming","my_stu_mer_cod_ite_cla_dat_lbl":"Claim before {date}","my_stu_mer_cod_ite_cop_btn":"Copy","my_stu_mer_cod_ite_ied_btn":"Copied","my_stu_mer_cod_ite_act_lbl":"Not Used","my_stu_mer_cod_ite_exp_lbl":"Expired","my_stu_mer_cod_ite_ina_lbl":"Used","my_stu_sav_pos_tit":"My saved posts","my_stu_sav_pos_emp_lbl":"No posts saved","fee_pos_bac_btn_lbl":"Back","fee_pos_vid_ph":"Your video is being generated. Please check back soon","fee_pos_img_ph":"Your image is being generated. Please check back soon","fee_pos_edit":"Post edit","fee_pos_nex_btn_lbl":"Next up:","fee_pos_gui_lbl":"Guidelines","fee_pos_cal_lbl":"Timings","fee_pos_cal_discuss":"Join the discussion","fee_hea_tit":"Welcome {name}!","fee_hea_sub_tit":"Tier {tier}","fee_sta_1_lbl":"Subscribers","fee_sta_2_lbl":"Avg view/video","fee_sta_3_lbl":"Videos","fee_tit":"Create filter","fee_fil_tit":"Create your filter","fee_fil_bod":"Specify which games you\'re interested in getting updates about","fee_rea_mor_btn":"Continue reading","fee_fil_btn":"Save","fee_no_pos_lbl":"No posts found","fee_loa_mor_btn":"Load more","fee_pos_sav_lbl":"Save for later","fee_pos_rem_lbl":"Remove pin","fee_eve_tit":"Coming up","fee_eve_exp_btn":"Expand +","fee_eve_col_btn":"Collapse -","fee_eve_btn":"View full calendar","fee_eve_emp_lbl":"Stay strong, Cool stuff is coming!","fee_fee_tit":"Your feed","cal_tit":"Calendar","cal_nav_btn":"Back","gender_mod_tit":"Hi [NAME]!","gender_mod_bod":"Sorry to interrupt. We’re continuously working to improve the Creators platform. Therefore, every now and then, we may need to ask you a question or two to make sure we have the data needed to provide you with the best possible support.","gender_mod_gen":"Gender","gender_mod_birthdate_lbl":"Date of birth","gender_mod_birthdate_tool_tit":"Why do we need this info?","gender_mod_birthdate_tool_bod":"Some features in the Creators program has a minimum age requirement.","gender_mod_birthdate_err":"Your date of birth should be in YYYY-MM-DD format","gender_mod_birthdate_ph":"YYYY-MM-DD","gender_mod_pri":"My primary game is","gender_mod_btn":"Submit","coc_modal_tit":"Code of Conduct","coc_modal_bod":"The Code of Conduct contains the most important rules in the Creator Program. These rules should be read with extreme care and always abided. Breaking the Code of Conduct will result in expulsion from the Creator Program. ","coc_modal_btn":"VIEW CODE OF CONDUCT","nda_tit":"Non-disclosure agreement","nda_subtit":"By agreeing to this confidentiality undertaking, I understand that I cannot share ANY information obtained in accordance with Supercell\'s instructions.","nda_1_tit":"Scope and Definitions","nda_1_bod":"For the purposes of this Confidentiality Undertaking “Confidential Information” means all information received either directly or indirectly from Supercell Oy (“Supercell”) in connection with the aforementioned Purpose or otherwise, whether marked as confidential or not, after or prior to the signing of this Confidentiality Undertaking, including, without limitation, information relating to business operations, technology, products, know-how, plans and objectives of Supercell or its partners. This Confidentiality Undertaking applies to Confidential Information obtained in written, oral or any other form (electronic files, visual perception), including documents in different forms as well as copies and excerpts thereof.","nda_2_tit":"Obligation of Secrecy","nda_2_bod":"I shall keep Confidential Information strictly confidential and not disclose such information to any third party. I further agree not to make, issue, or release any public announcement, statement, or acknowledgement of the existence of this Confidentiality Undertaking, except as may be required by law. I shall not use the Confidential Information for any other purpose than for Purpose and in accordance with Supercell’s instructions. I shall copy Confidential Information only to the extent necessary for the Purpose. This Confidentiality Undertaking shall have no effect to the possible non-disclosure agreement entered into by and between the company I represent and Supercell.\\n\\nObligations pursuant to this Confidentiality Undertaking shall not apply to information that I can evidence to have been: (i) public at the time of its disclosure or which subsequently becomes public as a result of publication or otherwise without my act or omission; (ii) lawfully obtained by me prior to or after its disclosure from a third party who has not received it directly or indirectly from Supercell.\\n\\nNeither this Confidentiality Undertaking nor the disclosure or receipt of Confidential Information shall grant me any license under any patent, trademark, copyright, or other proprietary or intellectual property right pertaining to Confidential Information. All Confidential Information is disclosed “as is” and “as available” without any express or implied warranties.\\n\\nI shall immediately cease using and return the Confidential Information and return or, if so requested by Supercell, l destroy any copies and documents containing Confidential Information when I no longer need the Confidential Information in question for the Purpose or upon Supercell’s first request, whichever earlier.","nda_3_tit":"Validity","nda_3_bod":"The obligation of this Confidentiality Undertaking shall remain in force for three (3) years from the disclosure of the said information.","nda_4_tit":"Applicable Law and Place of Jurisdiction","nda_4_bod":"This Confidentiality Undertaking shall be governed by the laws of Finland. Any disputes arising out of or in connection with this Confidentiality Undertaking shall be settled by the court of Helsinki. However, Supercell shall have the right to apply for and enforce preliminary procedural remedies at any court of competent jurisdiction.\\n\\nI have read and understood this Confidentiality Undertaking and agree to be bound by the obligations detailed in this Confidentiality Undertaking until such time as Confidential Information becomes public knowledge through no fault on my part.","cb_intro_pres":"Supercell Creators present","cb_intro_inst":"- Press space to start -","cb_ui_your_score":"Your score:","cb_ui_hi_score":"High score:","cb_ui_slack":"Post score on slack","cb_ui_again":"- Press space to try again -","tr_title":"Your creator progress","tr_new_cards_countdown":"New card in {days}:{hours}:{minutes}:{seconds}","tr_cards_to_complete":"no cards to flip | {cardsCount} card to flip | {cardsCount} cards to flip","tr_complete":"Your progress is up to date","tr_praise":"Nice work!","tr_tap_tip":"Tap to reveal","tr_load_error":"Error loading trophy road.","tr_tier_card_label":"Tier","tr_notification_progress_label":"Creator progress","tr_notification_completed_label":"Task complete!","tr_notification_link_more":"{count} more","tr_notification_link_none":"What\'s next?","tr_welcome_card_approved_label":"Approved as creator","tr_trophy_card_tier1WelcomeVideo_label":"Welcome video","tr_trophy_card_tier1WelcomeVideo_title":"Welcome video","tr_trophy_card_tier1WelcomeVideo_body":"A message from us about what you can expect from the Creator program.","tr_trophy_card_tier1WelcomeVideo_cta":"Watch now","tr_trophy_card_tier1WelcomeVideo_replay":"Watch again","tr_trophy_card_codeOfConduct_label":"Code of conduct","tr_trophy_card_codeOfConduct_title":"Code of conduct","tr_trophy_card_codeOfConduct_body":"These are the rules and behaviour expected of you as a creator.","tr_trophy_card_codeOfConduct_cta":"Watch the code","tr_trophy_card_codeOfConduct_replay":"Watch code again","tr_trophy_card_setYourFilter_label":"Set your filters","tr_trophy_card_setYourFilter_title":"Set your filters","tr_trophy_card_setYourFilter_body":"Filter the feed to get information about the games you create for.","tr_trophy_card_setYourFilter_cta":"Let`s do it","tr_trophy_card_readAPost_label":"Read a post","tr_trophy_card_readAPost_title":"Read a post","tr_trophy_card_readAPost_body":"Easy one ;) Read a post and watch out for any dates attached.","tr_trophy_card_readAPost_cta":"Go to feed","tr_trophy_card_sayHiOnDiscord_label":"Say hi on discord","tr_trophy_card_sayHiOnDiscord_title":"Say hi on discord","tr_trophy_card_sayHiOnDiscord_body":"Introduce yourself and maybe you’ll make a new friend or two.","tr_trophy_card_sayHiOnDiscord_cta":"How to connect","tr_trophy_card_claimAMerchCode_label":"Merch codes","tr_trophy_card_claimAMerchCode_title":"Claim a merch code","tr_trophy_card_claimAMerchCode_body":"Maybe you’ve got some merch waiting.","tr_trophy_card_claimAMerchCode_cta":"Have a look","tr_trophy_card_tier2WelcomeVideo_label":"Welcome video","tr_trophy_card_tier2WelcomeVideo_title":"Tier 2 welcome video","tr_trophy_card_tier2WelcomeVideo_body":"Welcome to Tier 2. There’s a lot of new perks waiting for you. Check them out!","tr_trophy_card_tier2WelcomeVideo_cta":"Watch now","tr_trophy_card_tier2WelcomeVideo_replay":"Watch again","tr_trophy_card_updatePreviews_label":"Update previews","tr_trophy_card_updatePreviews_title":"Update previews","tr_trophy_card_updatePreviews_body":"Nice! You’ve unlocked the update previews.","tr_trophy_card_updatePreviews_cta":"Got it","tr_trophy_card_tier3WelcomeVideo_label":"Welcome video","tr_trophy_card_tier3WelcomeVideo_title":"Tier 3 welcome video","tr_trophy_card_tier3WelcomeVideo_body":"Welcome to Tier 3. There’s a lot of new perks waiting for you. Check them out!","tr_trophy_card_tier3WelcomeVideo_cta":"Watch now","tr_trophy_card_tier3WelcomeVideo_replay":"Watch again","tr_trophy_card_creatorBoost_label":"Creator boost","tr_trophy_card_creatorBoost_title":"Creator boost","tr_trophy_card_creatorBoost_body":"Set up your Creator code and start earning some revenue for all your hard work.","tr_trophy_card_creatorBoost_cta":"Get boost","tr_trophy_card_sayHiOnSlack_label":"Say hi on slack","tr_trophy_card_sayHiOnSlack_title":"Say hi on slack","tr_trophy_card_sayHiOnSlack_body":"Join the discussions on Slack. Make sure to introduce yourself :)","tr_trophy_card_sayHiOnSlack_cta":"How to connect","tr_trophy_card_appCenter_label":"App center","tr_trophy_card_appCenter_title":"App center","tr_trophy_card_appCenter_body":"Dev builds? Yep, you’ve got them. Look here to learn more.","tr_trophy_card_appCenter_cta":"How to connect","tr_trophy_card_videoInbox_label":"Video inbox","tr_trophy_card_videoInbox_title":"Video inbox","tr_trophy_card_videoInbox_body":"You can now add your videos straight into the games. That’s pretty cool.","tr_trophy_card_videoInbox_cta":"Add your first video","tr_trophy_card_enterRaffle_discord_label":"Enter raffle (discord)","tr_trophy_card_enterRaffle_discord_title":"Enter raffle (discord)","tr_trophy_card_enterRaffle_discord_body":"You can now add your videos straight into the games. That’s pretty cool.","tr_trophy_card_enterRaffle_discord_cta":"Add your first video","tr_trophy_card_enterRaffle_slack_label":"Enter raffle (slack)","tr_trophy_card_enterRaffle_slack_title":"Enter raffle (slack)","tr_trophy_card_enterRaffle_slack_body":"You can now add your videos straight into the games. That’s pretty cool.","tr_trophy_card_enterRaffle_slack_cta":"Add your first video","tr_tier_2_upgrade_card_label":"Review card","tr_tier_2_upgrade_card_title":"Review card","tr_tier_2_upgrade_card_body":"Well done! Now our Community Team will personally review your account to provide feedback and let you know if you’re eligible for an upgrade. \\nPlease provide 1-2 weeks \\u2028for review.","tr_tier_2_upgrade_card_cta":"Claim now","tr_tier_2_upgrade_card_reviewed_body":"{name} has sent you a review","tr_tier_2_upgrade_card_reviewed_cta":"Read now","tr_tier_2_upgrade_card_replay_btn":"Read your reviews","tr_tier_2_upgrade_card_approved_title":"Review card","tr_tier_2_upgrade_card_approved_body":"Well hello there! We’ve looked at your account and...","tr_tier_2_upgrade_card_approved_cta":"Claim now","tr_tier_2_upgrade_card_rejected_title":"Review card","tr_tier_2_upgrade_card_rejected_body":"Hi! We whink that right now, your current tier suits well. But keep creating, and we’ll talk soon again :)","tr_tier_2_upgrade_card_rejected_cta":"Got it!","tr_tier_3_upgrade_card_label":"Review card","tr_tier_3_upgrade_card_title":"Review card","tr_tier_3_upgrade_card_body":"Get a personal review from your CM with tips on how to grow as a Creator. Allow 1-2 weeks for your CM to review your account","tr_tier_3_upgrade_card_cta":"Claim review","tr_tier_3_upgrade_card_reviewed_body":"{name} has sent you a review","tr_tier_3_upgrade_card_reviewed_cta":"Read now","tr_tier_3_upgrade_card_replay_btn":"Read your reviews","tr_tier_upgrade_card_pending_reviews":"Review in progress","tr_tier_upgrade_card_countdown_24h":"{hours}:{minutes}:{seconds}","tr_tier_upgrade_card_countdown_days":"{days} days left","tr_tier_upgrade_modal_title":"Creators review","tr_tier_upgrade_modal_date_label":"Review date:","tr_tier_upgrade_modal_no_label":"Review no:","tr_tier_upgrade_modal_creator_label":"Creator:","tr_tier_upgrade_modal_by_label":"Reviewed by:","tr_tier_upgrade_modal_close_btn":"Close","tr_tier_upgrade_modal_expand_btn":"All reviews","tr_tier_upgrade_modal_contract_btn":"Hide older reviews","tr_tier_claim_modal_title":"Are you sure?","tr_tier_claim_modal_body":"This means someone from Supercell will have a look at your Creators account and channel to see if you’re ready for a tier upgrade. Make sure you’re content is presented in the best way possible.","tr_tier_claim_modal_sec_btn":"Cancel","tr_tier_claim_modal_pri_btn":"Yes, claim review"}}')
    },
    b13e: function(e, t, a) {
        e.exports = a.p + "img/icon-tier1.13ac3ed9.svg"
    },
    b2a1: function(e, t, a) {
        e.exports = a.p + "img/game-icon-CLASH_ROYALE.8f5a9d2c.jpg"
    },
    b501: function(e, t, a) {
        e.exports = a.p + "img/game-logo-CLASH_ROYALE.f18f19f0.png"
    },
    b6ec: function(e, t, a) {
        var o = {
            "./game-icon-BOOM_BEACH.jpg": "3e0f",
            "./game-icon-BRAWL_STARS.jpg": "f001a",
            "./game-icon-CLASH_MINI.jpg": "52d8",
            "./game-icon-CLASH_OF_CLANS.jpg": "ca31",
            "./game-icon-CLASH_QUEST.jpg": "2b98",
            "./game-icon-CLASH_ROYALE.jpg": "b2a1",
            "./game-icon-EVERDALE.jpg": "295a",
            "./game-icon-HAY_DAY.jpg": "48db"
        };
        function n(e) {
            var t = r(e);
            return a(t)
        }
        function r(e) {
            if (!a.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return o[e]
        }
        n.keys = function() {
            return Object.keys(o)
        }
        ,
        n.resolve = r,
        e.exports = n,
        n.id = "b6ec"
    },
    b943: function(e, t, a) {
        e.exports = a.p + "img/icon-tier4.69f7d380.svg"
    },
    bac7: function(e, t, a) {
        e.exports = a.p + "img/character_shelly.89656347.png"
    },
    bacb: function(e, t, a) {
        var o = {
            "./video-inbox-hero-BOOM_BEACH.jpg": "87e5",
            "./video-inbox-hero-BRAWL_STARS.jpg": "5027",
            "./video-inbox-hero-CLASH_MINI.jpg": "cef7",
            "./video-inbox-hero-CLASH_OF_CLANS.jpg": "6016",
            "./video-inbox-hero-CLASH_QUEST.jpg": "664a",
            "./video-inbox-hero-CLASH_ROYALE.jpg": "891f",
            "./video-inbox-hero-EVERDALE.jpg": "672d",
            "./video-inbox-hero-HAY_DAY.jpg": "4ab1",
            "./video-inbox-hero-mobile-BOOM_BEACH.jpg": "87fc",
            "./video-inbox-hero-mobile-BRAWL_STARS.jpg": "9844",
            "./video-inbox-hero-mobile-CLASH_MINI.jpg": "f799",
            "./video-inbox-hero-mobile-CLASH_OF_CLANS.jpg": "8fc0",
            "./video-inbox-hero-mobile-CLASH_QUEST.jpg": "71f6",
            "./video-inbox-hero-mobile-CLASH_ROYALE.jpg": "0f91",
            "./video-inbox-hero-mobile-EVERDALE.jpg": "dc90",
            "./video-inbox-hero-mobile-HAY_DAY.jpg": "5b26"
        };
        function n(e) {
            var t = r(e);
            return a(t)
        }
        function r(e) {
            if (!a.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return o[e]
        }
        n.keys = function() {
            return Object.keys(o)
        }
        ,
        n.resolve = r,
        e.exports = n,
        n.id = "bacb"
    },
    bb9f: function(e, t, a) {},
    bc3f: function(e, t, a) {
        var o = {
            "./game-logo-BOOM_BEACH.png": "5995",
            "./game-logo-BRAWL_STARS.png": "ca65",
            "./game-logo-CLASH_MINI.png": "f9e1",
            "./game-logo-CLASH_OF_CLANS.png": "654e",
            "./game-logo-CLASH_QUEST.png": "bdb2",
            "./game-logo-CLASH_ROYALE.png": "b501",
            "./game-logo-EVERDALE.png": "bd45",
            "./game-logo-HAY_DAY.png": "0909"
        };
        function n(e) {
            var t = r(e);
            return a(t)
        }
        function r(e) {
            if (!a.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return o[e]
        }
        n.keys = function() {
            return Object.keys(o)
        }
        ,
        n.resolve = r,
        e.exports = n,
        n.id = "bc3f"
    },
    bd45: function(e, t, a) {
        e.exports = a.p + "img/game-logo-EVERDALE.874e43cf.png"
    },
    bdb2: function(e, t, a) {
        e.exports = a.p + "img/game-logo-CLASH_QUEST.3f868f1a.png"
    },
    beca: function(e, t, a) {},
    becb: function(e, t, a) {},
    c153: function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        active: e.$props.active,
                        over: e.$props.over,
                        inverted: e.$props.inverted,
                        scaleToParent: e.$props.scaleToParent
                    },
                    expression: "{\n  'active': $props.active,\n  'over': $props.over,\n  'inverted': $props.inverted,\n  'scaleToParent': $props.scaleToParent\n}"
                }],
                staticClass: "checkMark"
            })
        }
          , n = []
          , r = {
            name: "CheckMark",
            props: {
                active: {
                    type: Boolean,
                    default: !0
                },
                over: {
                    type: Boolean,
                    default: !1
                },
                inverted: {
                    type: Boolean,
                    default: !1
                },
                scaleToParent: {
                    type: Boolean,
                    default: !1
                }
            }
        }
          , i = r
          , s = (a("65ee"),
        a("2877"))
          , c = Object(s["a"])(i, o, n, !1, null, "47305303", null);
        t["a"] = c.exports
    },
    c877: function(e, t, a) {},
    ca31: function(e, t, a) {
        e.exports = a.p + "img/game-icon-CLASH_OF_CLANS.f1c42150.jpg"
    },
    ca65: function(e, t, a) {
        e.exports = a.p + "img/game-logo-BRAWL_STARS.3f6ddd04.png"
    },
    cc53: function(e, t, a) {
        e.exports = a.p + "img/tier-symbol-2.1cac5905.png"
    },
    cd69: function(e, t, a) {
        var o = {
            "./countries": ["7b87", 3],
            "./countries.json": ["7b87", 3],
            "./en": ["aea9", 3],
            "./en.json": ["aea9", 3],
            "./languages": ["ebe3", 3],
            "./languages.json": ["ebe3", 3],
            "./tos_en": ["8c77", 9],
            "./tos_en.js": ["8c77", 9]
        };
        function n(e) {
            return Promise.resolve().then((function() {
                if (!a.o(o, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                }
                var n = o[e]
                  , r = n[0];
                return a.t(r, n[1])
            }
            ))
        }
        n.keys = function() {
            return Object.keys(o)
        }
        ,
        n.id = "cd69",
        e.exports = n
    },
    ce05: function(e, t, a) {
        e.exports = a.p + "img/feed-default-CLASH_QUEST.ec6ddeb6.jpg"
    },
    cef7: function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-CLASH_MINI.d2940855.jpg"
    },
    cf67: function(e, t, a) {
        e.exports = a.p + "img/creators-logo.08bb5918.svg"
    },
    cf69: function(e, t, a) {},
    cf89: function(e, t, a) {},
    d065: function(e, t, a) {},
    d0c2: function(e, t, a) {
        "use strict";
        a("6a35")
    },
    d12d: function(e, t, a) {
        "use strict";
        a("becb")
    },
    d39b: function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "yearMonthDayInput"
            }, [a("FormElement", {
                attrs: {
                    label: e.$props.label,
                    labelInfo: e.$props.labelInfo,
                    tooltipTitle: e.$props.tooltipTitle,
                    tooltip: e.$props.tooltip,
                    description: e.$props.description,
                    centered: e.$props.centered,
                    required: e.$props.required,
                    inverted: e.$props.inverted
                }
            }, [a("div", {
                staticClass: "yearMonthDayInput__main"
            }, [a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: "year",
                    expression: "'year'"
                }],
                staticClass: "yearMonthDayInput__input"
            }, [a("DefaultInput", {
                ref: "inputYear",
                attrs: {
                    value: e.year,
                    label: e.$props.yearLabel,
                    inputmode: "numeric",
                    pattern: "[0-9]*",
                    placeholder: e.$props.yearPlaceholder,
                    inverted: e.$props.inverted,
                    disabled: e.$props.disabled,
                    confirmed: e.isYearValid && !e.$props.hideConfirmations,
                    error: e.yearError
                },
                on: {
                    input: e.onInputYear,
                    keydown: e.onKeydownYear,
                    focus: e.onFocusYear,
                    blur: e.onBlurYear
                }
            })], 1), a("span", {
                staticClass: "yearMonthDayInput__spacing"
            }), a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: "month",
                    expression: "'month'"
                }],
                staticClass: "yearMonthDayInput__input"
            }, [a("DefaultInput", {
                ref: "inputMonth",
                attrs: {
                    value: e.month,
                    label: e.$props.monthLabel,
                    inputmode: "numeric",
                    pattern: "[0-9]*",
                    placeholder: e.$props.monthPlaceholder,
                    inverted: e.$props.inverted,
                    disabled: e.$props.disabled,
                    confirmed: e.isMonthValid && !e.$props.hideConfirmations,
                    error: e.monthError
                },
                on: {
                    input: e.onInputMonth,
                    keydown: e.onKeydownMonth,
                    keyup: e.onKeyupMonth,
                    focus: e.onFocusMonth,
                    blur: e.onBlurMonth
                }
            })], 1), a("span", {
                staticClass: "yearMonthDayInput__spacing"
            }), a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: "day",
                    expression: "'day'"
                }],
                staticClass: "yearMonthDayInput__input"
            }, [a("DefaultInput", {
                ref: "inputDay",
                attrs: {
                    value: e.day,
                    label: e.$props.dayLabel,
                    inputmode: "numeric",
                    pattern: "[0-9]*",
                    placeholder: e.$props.dayPlaceholder,
                    inverted: e.$props.inverted,
                    disabled: e.$props.disabled,
                    confirmed: e.isDayValid && !e.$props.hideConfirmations,
                    error: e.dayError
                },
                on: {
                    input: e.onInputDay,
                    keydown: e.onKeydownDay,
                    keyup: e.onKeyupDay,
                    focus: e.onFocusDay,
                    blur: e.onBlurDay
                }
            })], 1)]), a("transition", {
                on: {
                    enter: e.onEnterError,
                    leave: e.onLeaveError
                }
            }, [a("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.formattedError,
                    expression: "formattedError"
                }],
                staticClass: "yearMonthDayInput__error",
                domProps: {
                    textContent: e._s(e.formattedError[0])
                }
            })])], 1)], 1)
        }
          , n = []
          , r = (a("ac1f"),
        a("1276"),
        a("99af"),
        a("5319"),
        a("466d"),
        a("cffa"))
          , i = a("8a2f")
          , s = a("f3a9")
          , c = {
            name: "YearMonthDayInput",
            components: {
                FormElement: i["a"],
                DefaultInput: s["a"]
            },
            props: {
                value: {
                    type: String,
                    default: ""
                },
                currentDate: {
                    type: Date,
                    default: new Date
                },
                placeholder: {
                    type: String,
                    default: ""
                },
                yearPlaceholder: {
                    type: String,
                    default: ""
                },
                monthPlaceholder: {
                    type: String,
                    default: ""
                },
                dayPlaceholder: {
                    type: String,
                    default: ""
                },
                yearErrorMessage: {
                    type: String,
                    default: "Invalid year"
                },
                monthErrorMessage: {
                    type: String,
                    default: "Invalid month"
                },
                dayErrorMessage: {
                    type: String,
                    default: "Invalid day"
                },
                label: {
                    type: String,
                    default: ""
                },
                yearLabel: {
                    type: String,
                    default: ""
                },
                monthLabel: {
                    type: String,
                    default: ""
                },
                dayLabel: {
                    type: String,
                    default: ""
                },
                labelInfo: {
                    type: String,
                    default: ""
                },
                tooltipTitle: {
                    type: String,
                    default: ""
                },
                tooltip: {
                    type: String,
                    default: ""
                },
                description: {
                    type: String,
                    default: ""
                },
                confirmed: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                error: {
                    type: Array,
                    default: void 0
                },
                hideConfirmations: {
                    type: Boolean,
                    default: !1
                },
                hideErrors: {
                    type: Boolean,
                    default: !1
                },
                hideErrorsUntilBlur: {
                    type: Boolean,
                    default: !1
                },
                centered: {
                    type: Boolean,
                    default: !1
                },
                freeWidth: {
                    type: Boolean,
                    default: !1
                },
                required: {
                    type: Boolean,
                    default: !1
                },
                inverted: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    isYearInputDirty: !1,
                    isMonthInputDirty: !1,
                    isDayInputDirty: !1,
                    hasYearInputBeenBlurred: !1,
                    hasMonthInputBeenBlurred: !1,
                    hasDayInputBeenBlurred: !1,
                    isErrorLeaving: !1
                }
            },
            computed: {
                valueArray: function() {
                    return this.$props.value.split("-")
                },
                year: function() {
                    return this.valueArray[0] || ""
                },
                month: function() {
                    return this.valueArray[1] || ""
                },
                day: function() {
                    return this.valueArray[2] || ""
                },
                isYearValid: function() {
                    return this.validateYear(this.year)
                },
                isMonthValid: function() {
                    return this.validateMonth(this.month)
                },
                isDayValid: function() {
                    return this.validateDay(this.day, this.month, this.year)
                },
                valid: function() {
                    return this.isYearValid && this.isMonthValid && this.isDayValid
                },
                formattedError: function() {
                    var e = [];
                    return !this.isYearValid && this.showYearError && e.push(this.$props.yearErrorMessage),
                    !this.isMonthValid && this.showMonthError && e.push(this.$props.monthErrorMessage),
                    !this.isDayValid && this.showDayError && e.push(this.$props.dayErrorMessage),
                    void 0 !== this.$props.error && !this.$props.hideErrors && (this.showYearError || this.showMonthError || this.showDayError) && (e = e.concat(this.$props.error)),
                    this.isErrorLeaving && (e = this.lastError),
                    e
                },
                yearError: function() {
                    return !this.isYearValid && this.showYearError ? [""] : void 0
                },
                monthError: function() {
                    return !this.isMonthValid && this.showMonthError ? [""] : void 0
                },
                dayError: function() {
                    return !this.isDayValid && this.showDayError ? [""] : void 0
                },
                showYearError: function() {
                    return !this.$props.hideErrors && (!this.$props.hideErrorsUntilBlur || this.hasYearInputBeenBlurred && this.isYearInputDirty)
                },
                showMonthError: function() {
                    return !this.$props.hideErrors && (!this.$props.hideErrorsUntilBlur || this.hasMonthInputBeenBlurred && this.isMonthInputDirty)
                },
                showDayError: function() {
                    return !this.$props.hideErrors && (!this.$props.hideErrorsUntilBlur || this.hasDayInputBeenBlurred && this.isDayInputDirty)
                }
            },
            mounted: function() {
                this.$emit("validate", this.valid)
            },
            methods: {
                sanitize: function(e) {
                    return e.replace(/\D+/g, "")
                },
                validateYear: function(e) {
                    return 4 === e.length && (!!e.match(/^[0-9]+$/) && (e >= 1900 && e <= this.$props.currentDate.getFullYear()))
                },
                validateMonth: function(e) {
                    return 2 === e.length && (e >= 0 && e <= 12)
                },
                validateDay: function(e, t, a) {
                    return !(e.length < 2) && e <= this.getDaysInMonth(parseInt(t), a)
                },
                getDaysInMonth: function(e, t) {
                    return new Date(t,e,0).getDate()
                },
                onInputYear: function(e) {
                    e = this.sanitize(e),
                    this.$refs.inputYear.$refs.input.value = e;
                    var t = e + "-" + this.month + "-" + this.day;
                    this.$emit("input", t),
                    !this.isYearInputDirty && this.validateYear(e) && this.$refs.inputMonth.focus()
                },
                onKeydownYear: function(e) {
                    var t = this
                      , a = e.keyCode || e.charCode;
                    39 === a && e.currentTarget.value.length === e.currentTarget.selectionStart && (this.$refs.inputMonth.focus(),
                    setTimeout((function() {
                        t.$refs.inputMonth.setCaretToStart()
                    }
                    ), 0))
                },
                onFocusYear: function(e) {
                    this.isYearInputDirty = "" !== e
                },
                onBlurYear: function(e) {
                    if (this.isYearInputDirty = "" !== e,
                    this.hasYearInputBeenBlurred = !0,
                    2 === e.length) {
                        var t = 100 * Math.floor(this.$props.currentDate.getFullYear() / 100)
                          , a = this.$props.currentDate.getFullYear() - t
                          , o = 5;
                        e = e > a - o ? Math.floor(t / 100) - 1 + e : Math.floor(t / 100) + e;
                        var n = e + "-" + this.month + "-" + this.day;
                        this.$emit("input", n)
                    }
                },
                onInputMonth: function(e) {
                    e = this.sanitize(e),
                    this.$refs.inputMonth.$refs.input.value = e;
                    var t = this.year + "-" + e + "-" + this.day;
                    this.$emit("input", t),
                    !this.isMonthInputDirty && this.validateMonth(e) && this.$refs.inputDay.focus()
                },
                onKeydownMonth: function(e) {
                    var t = this
                      , a = e.keyCode || e.charCode;
                    37 === a && 0 === e.currentTarget.selectionStart && (this.$refs.inputYear.focus(),
                    setTimeout((function() {
                        t.$refs.inputYear.setCaretToEnd()
                    }
                    ), 0)),
                    39 === a && e.currentTarget.value.length === e.currentTarget.selectionStart && (this.$refs.inputDay.focus(),
                    setTimeout((function() {
                        t.$refs.inputDay.setCaretToStart()
                    }
                    ), 0)),
                    8 === a && 0 === e.currentTarget.value.length && (e.preventDefault(),
                    this.$refs.inputYear.focus(),
                    setTimeout((function() {
                        t.$refs.inputYear.setCaretToEnd()
                    }
                    ), 0))
                },
                onKeyupMonth: function(e) {},
                onFocusMonth: function(e) {
                    this.isMonthInputDirty = "" !== e
                },
                onBlurMonth: function(e) {
                    if (this.isMonthInputDirty = "" !== e,
                    this.hasMonthInputBeenBlurred = !0,
                    1 === e.length && e > 1) {
                        e = 0 + e;
                        var t = this.year + "-" + e + "-" + this.day;
                        this.$emit("input", t)
                    }
                },
                onInputDay: function(e) {
                    e = this.sanitize(e),
                    this.$refs.inputDay.$refs.input.value = e;
                    var t = this.year + "-" + this.month + "-" + e;
                    this.$emit("input", t)
                },
                onKeydownDay: function(e) {
                    var t = this
                      , a = e.keyCode || e.charCode;
                    37 === a && 0 === e.currentTarget.selectionStart && (this.$refs.inputMonth.focus(),
                    setTimeout((function() {
                        t.$refs.inputMonth.setCaretToEnd()
                    }
                    ), 0)),
                    8 === a && 0 === e.currentTarget.value.length && (e.preventDefault(),
                    this.$refs.inputMonth.focus(),
                    setTimeout((function() {
                        t.$refs.inputMonth.setCaretToEnd()
                    }
                    ), 0))
                },
                onKeyupDay: function(e) {},
                onFocusDay: function(e) {
                    this.isDayInputDirty = "" !== e
                },
                onBlurDay: function(e) {
                    if (this.isDayInputDirty = "" !== e,
                    this.hasDayInputBeenBlurred = !0,
                    1 === e.length && e > 3) {
                        e = 0 + e;
                        var t = this.year + "-" + this.month + "-" + e;
                        this.$emit("input", t)
                    }
                },
                onEnterError: function(e, t) {
                    r["b"].set(e, {
                        opacity: 0
                    }),
                    r["b"].to(e, {
                        opacity: 1,
                        duration: .2,
                        ease: "power2.inOut"
                    })
                },
                onLeaveError: function(e, t) {
                    var a = this;
                    this.isErrorLeaving = !0,
                    r["b"].to(e, {
                        opacity: 0,
                        duration: .2,
                        ease: "power2.inOut",
                        onComplete: function() {
                            a.isErrorLeaving = !1,
                            t()
                        }
                    })
                }
            },
            watch: {
                valid: function(e, t) {
                    this.$emit("validate", e)
                }
            }
        }
          , u = c
          , l = (a("9bd6"),
        a("2877"))
          , d = Object(l["a"])(u, o, n, !1, null, "475ea6aa", null);
        t["a"] = d.exports
    },
    d452: function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        fullHeight: "full" === e.$props.height,
                        semiHeight: "semi" === e.$props.height
                    },
                    expression: "{\n    'fullHeight': $props.height === 'full',\n    'semiHeight': $props.height === 'semi',\n  }"
                }],
                staticClass: "pageHeader"
            }, [e._t("default")], 2)
        }
          , n = []
          , r = {
            name: "PageHeader",
            props: {
                height: {
                    type: String,
                    validator: function(e) {
                        return -1 !== ["full", "semi"].indexOf(e)
                    },
                    default: void 0,
                    required: !1
                }
            }
        }
          , i = r
          , s = (a("3627"),
        a("2877"))
          , c = Object(s["a"])(i, o, n, !1, null, "571e0294", null);
        t["a"] = c.exports
    },
    dc90: function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-mobile-EVERDALE.84b79fcc.jpg"
    },
    de5e: function(e, t, a) {},
    defa: function(e, t, a) {},
    e0e0: function(e, t, a) {
        "use strict";
        a("cf69")
    },
    e3e2: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, "BREAKPOINTS", (function() {
            return o
        }
        )),
        a.d(t, "SIZES", (function() {
            return n
        }
        )),
        a.d(t, "COLORS", (function() {
            return r
        }
        )),
        a.d(t, "LAYOUT_GRID", (function() {
            return i
        }
        ));
        var o = {
            mobileSmall: 320,
            mobile: 420,
            tablet: 736,
            laptopSmall: 1024,
            laptop: 1280,
            desktop: 1800
        }
          , n = {
            mobileSmall: {
                margin: 8,
                headerHeight: 60,
                footerHeight: 485,
                mobileMenuHeight: 66,
                chartBarDailyWidth: 25,
                chartBarWeeklyWidth: 50,
                chartBarMonthlyWidth: 80
            },
            mobile: {
                margin: 16,
                headerHeight: 60,
                footerHeight: 485,
                mobileMenuHeight: 66,
                chartBarDailyWidth: 25,
                chartBarWeeklyWidth: 50,
                chartBarMonthlyWidth: 80
            },
            tablet: {
                margin: 48,
                headerHeight: 80,
                footerHeight: 495,
                mobileMenuHeight: 66,
                chartBarDailyWidth: 25,
                chartBarWeeklyWidth: 50,
                chartBarMonthlyWidth: 80
            },
            laptopSmall: {
                margin: 136,
                headerHeight: 80,
                footerHeight: 495,
                mobileMenuHeight: 0,
                chartBarDailyWidth: 25,
                chartBarWeeklyWidth: 50,
                chartBarMonthlyWidth: 80
            },
            laptop: {
                margin: 136,
                headerHeight: 80,
                footerHeight: 495,
                mobileMenuHeight: 0,
                chartBarDailyWidth: 25,
                chartBarWeeklyWidth: 50,
                chartBarMonthlyWidth: 80
            },
            desktop: {
                margin: 136,
                headerHeight: 80,
                footerHeight: 495,
                mobileMenuHeight: 0,
                chartBarDailyWidth: 25,
                chartBarWeeklyWidth: 50,
                chartBarMonthlyWidth: 80
            }
        }
          , r = {
            creatorGreen: "#0ECE72",
            creatorMint: "#54E990",
            creatorOcean: "#6DDFCA",
            immortal: "#1C1C1C",
            divine: "#808080",
            slayer: "#c0c0c0",
            legend: "#DDDDDD",
            archon: "#F9F9F9",
            white: "#FFFFFF",
            error: "#EB5757",
            steel: "#3586FF",
            brawlStars: "#F33031",
            clashRoyale: "#3586FF",
            clashOfClans: "#FF9900",
            hayDay: "#8FDA39",
            boomBeach: "#4AD5B8",
            general: "#000000"
        }
          , i = 8
    },
    e443: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return u
        }
        ));
        a("b0c0"),
        a("d3b7");
        var o = a("bc3a")
          , n = a.n(o)
          , r = a("4360")
          , i = a("a18c")
          , s = a("60a1")
          , c = a("47b7");
        n.a.defaults.baseURL = s["API_URL"],
        n.a.interceptors.response.use((function(e) {
            return e.data.success || (-1 !== e.data.message.indexOf(s["API_ERROR_MAINTENANCE"]) && i["a"].push({
                name: c["MAINTENANCE"].name
            }).catch((function() {}
            )),
            -1 !== e.data.message.indexOf(s["API_ERROR_NOT_AUTHENTICATED"]) && r["a"].dispatch("user/logout", {
                redirect: !0,
                serverside: !1
            })),
            e
        }
        ), (function(e) {
            var t;
            return (null === (t = e.response) || void 0 === t ? void 0 : t.status) === s["API_CODE_UNAUTHORIZED"] && r["a"].dispatch("user/logout", {
                redirect: !0,
                serverside: !1
            }),
            Promise.reject(e)
        }
        ));
        var u = n.a.create({
            baseURL: s["API_2_URL"],
            withCredentials: !0
        });
        u.interceptors.response.use((function(e) {
            return e
        }
        ), (function(e) {
            var t;
            return (null === (t = e.response) || void 0 === t ? void 0 : t.status) === s["API_CODE_UNAUTHORIZED"] && r["a"].dispatch("user/logout", {
                redirect: !0,
                serverside: !1
            }),
            Promise.reject(e)
        }
        ))
    },
    e6be: function(e, t, a) {
        e.exports = a.p + "img/feed-default-BOOM_BEACH.04a16be8.jpg"
    },
    e75a: function(e, t, a) {
        e.exports = a.p + "img/feed-default-BRAWL_STARS.4ed87c17.jpg"
    },
    e84b: function(e, t, a) {
        e.exports = a.p + "img/feed-default-CLASH_MINI.b5b297fb.jpg"
    },
    ea86: function(e, t, a) {},
    ebe3: function(e) {
        e.exports = JSON.parse('{"ab":{"name":"Abkhaz","nativeName":"аҧсуа"},"aa":{"name":"Afar","nativeName":"Afaraf"},"af":{"name":"Afrikaans","nativeName":"Afrikaans"},"ak":{"name":"Akan","nativeName":"Akan"},"sq":{"name":"Albanian","nativeName":"Shqip"},"am":{"name":"Amharic","nativeName":"አማርኛ"},"ar":{"name":"Arabic","nativeName":"العربية"},"an":{"name":"Aragonese","nativeName":"Aragonés"},"hy":{"name":"Armenian","nativeName":"Հայերեն"},"as":{"name":"Assamese","nativeName":"অসমীয়া"},"av":{"name":"Avaric","nativeName":"авар мацӀ, магӀарул мацӀ"},"ae":{"name":"Avestan","nativeName":"avesta"},"ay":{"name":"Aymara","nativeName":"aymar aru"},"az":{"name":"Azerbaijani","nativeName":"azərbaycan dili"},"bm":{"name":"Bambara","nativeName":"bamanankan"},"ba":{"name":"Bashkir","nativeName":"башҡорт теле"},"eu":{"name":"Basque","nativeName":"euskara, euskera"},"be":{"name":"Belarusian","nativeName":"Беларуская"},"bn":{"name":"Bengali","nativeName":"বাংলা"},"bh":{"name":"Bihari","nativeName":"भोजपुरी"},"bi":{"name":"Bislama","nativeName":"Bislama"},"bs":{"name":"Bosnian","nativeName":"bosanski jezik"},"br":{"name":"Breton","nativeName":"brezhoneg"},"bg":{"name":"Bulgarian","nativeName":"български език"},"my":{"name":"Burmese","nativeName":"ဗမာစာ"},"ca":{"name":"Catalan; Valencian","nativeName":"Català"},"ch":{"name":"Chamorro","nativeName":"Chamoru"},"ce":{"name":"Chechen","nativeName":"нохчийн мотт"},"ny":{"name":"Chichewa; Chewa; Nyanja","nativeName":"chiCheŵa, chinyanja"},"zh":{"name":"Chinese","nativeName":"中文 (Zhōngwén), 汉语, 漢語"},"cv":{"name":"Chuvash","nativeName":"чӑваш чӗлхи"},"kw":{"name":"Cornish","nativeName":"Kernewek"},"co":{"name":"Corsican","nativeName":"corsu, lingua corsa"},"cr":{"name":"Cree","nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"},"hr":{"name":"Croatian","nativeName":"hrvatski"},"cs":{"name":"Czech","nativeName":"česky, čeština"},"da":{"name":"Danish","nativeName":"dansk"},"dv":{"name":"Divehi; Dhivehi; Maldivian;","nativeName":"ދިވެހި"},"nl":{"name":"Dutch","nativeName":"Nederlands, Vlaams"},"en":{"name":"English","nativeName":"English"},"eo":{"name":"Esperanto","nativeName":"Esperanto"},"et":{"name":"Estonian","nativeName":"eesti, eesti keel"},"ee":{"name":"Ewe","nativeName":"Eʋegbe"},"fo":{"name":"Faroese","nativeName":"føroyskt"},"fj":{"name":"Fijian","nativeName":"vosa Vakaviti"},"fi":{"name":"Finnish","nativeName":"suomi, suomen kieli"},"fr":{"name":"French","nativeName":"français, langue française"},"ff":{"name":"Fula; Fulah; Pulaar; Pular","nativeName":"Fulfulde, Pulaar, Pular"},"gl":{"name":"Galician","nativeName":"Galego"},"ka":{"name":"Georgian","nativeName":"ქართული"},"de":{"name":"German","nativeName":"Deutsch"},"el":{"name":"Greek, Modern","nativeName":"Ελληνικά"},"gn":{"name":"Guaraní","nativeName":"Avañeẽ"},"gu":{"name":"Gujarati","nativeName":"ગુજરાતી"},"ht":{"name":"Haitian; Haitian Creole","nativeName":"Kreyòl ayisyen"},"ha":{"name":"Hausa","nativeName":"Hausa, هَوُسَ"},"he":{"name":"Hebrew (modern)","nativeName":"עברית"},"hz":{"name":"Herero","nativeName":"Otjiherero"},"hi":{"name":"Hindi","nativeName":"हिन्दी, हिंदी"},"ho":{"name":"Hiri Motu","nativeName":"Hiri Motu"},"hu":{"name":"Hungarian","nativeName":"Magyar"},"ia":{"name":"Interlingua","nativeName":"Interlingua"},"id":{"name":"Indonesian","nativeName":"Bahasa Indonesia"},"ie":{"name":"Interlingue","nativeName":"Originally called Occidental; then Interlingue after WWII"},"ga":{"name":"Irish","nativeName":"Gaeilge"},"ig":{"name":"Igbo","nativeName":"Asụsụ Igbo"},"ik":{"name":"Inupiaq","nativeName":"Iñupiaq, Iñupiatun"},"io":{"name":"Ido","nativeName":"Ido"},"is":{"name":"Icelandic","nativeName":"Íslenska"},"it":{"name":"Italian","nativeName":"Italiano"},"iu":{"name":"Inuktitut","nativeName":"ᐃᓄᒃᑎᑐᑦ"},"ja":{"name":"Japanese","nativeName":"日本語 (にほんご／にっぽんご)"},"jv":{"name":"Javanese","nativeName":"basa Jawa"},"kl":{"name":"Kalaallisut, Greenlandic","nativeName":"kalaallisut, kalaallit oqaasii"},"kn":{"name":"Kannada","nativeName":"ಕನ್ನಡ"},"kr":{"name":"Kanuri","nativeName":"Kanuri"},"ks":{"name":"Kashmiri","nativeName":"कश्मीरी, كشميري‎"},"kk":{"name":"Kazakh","nativeName":"Қазақ тілі"},"km":{"name":"Khmer","nativeName":"ភាសាខ្មែរ"},"ki":{"name":"Kikuyu, Gikuyu","nativeName":"Gĩkũyũ"},"rw":{"name":"Kinyarwanda","nativeName":"Ikinyarwanda"},"ky":{"name":"Kirghiz, Kyrgyz","nativeName":"кыргыз тили"},"kv":{"name":"Komi","nativeName":"коми кыв"},"kg":{"name":"Kongo","nativeName":"KiKongo"},"ko":{"name":"Korean","nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"},"ku":{"name":"Kurdish","nativeName":"Kurdî, كوردی‎"},"kj":{"name":"Kwanyama, Kuanyama","nativeName":"Kuanyama"},"la":{"name":"Latin","nativeName":"latine, lingua latina"},"lb":{"name":"Luxembourgish, Letzeburgesch","nativeName":"Lëtzebuergesch"},"lg":{"name":"Luganda","nativeName":"Luganda"},"li":{"name":"Limburgish, Limburgan, Limburger","nativeName":"Limburgs"},"ln":{"name":"Lingala","nativeName":"Lingála"},"lo":{"name":"Lao","nativeName":"ພາສາລາວ"},"lt":{"name":"Lithuanian","nativeName":"lietuvių kalba"},"lu":{"name":"Luba-Katanga","nativeName":""},"lv":{"name":"Latvian","nativeName":"latviešu valoda"},"gv":{"name":"Manx","nativeName":"Gaelg, Gailck"},"mk":{"name":"Macedonian","nativeName":"македонски јазик"},"mg":{"name":"Malagasy","nativeName":"Malagasy fiteny"},"ms":{"name":"Malay","nativeName":"bahasa Melayu, بهاس ملايو‎"},"ml":{"name":"Malayalam","nativeName":"മലയാളം"},"mt":{"name":"Maltese","nativeName":"Malti"},"mi":{"name":"Māori","nativeName":"te reo Māori"},"mr":{"name":"Marathi (Marāṭhī)","nativeName":"मराठी"},"mh":{"name":"Marshallese","nativeName":"Kajin M̧ajeļ"},"mn":{"name":"Mongolian","nativeName":"монгол"},"na":{"name":"Nauru","nativeName":"Ekakairũ Naoero"},"nv":{"name":"Navajo, Navaho","nativeName":"Diné bizaad, Dinékʼehǰí"},"nb":{"name":"Norwegian Bokmål","nativeName":"Norsk bokmål"},"nd":{"name":"North Ndebele","nativeName":"isiNdebele"},"ne":{"name":"Nepali","nativeName":"नेपाली"},"ng":{"name":"Ndonga","nativeName":"Owambo"},"nn":{"name":"Norwegian Nynorsk","nativeName":"Norsk nynorsk"},"no":{"name":"Norwegian","nativeName":"Norsk"},"ii":{"name":"Nuosu","nativeName":"ꆈꌠ꒿ Nuosuhxop"},"nr":{"name":"South Ndebele","nativeName":"isiNdebele"},"oc":{"name":"Occitan","nativeName":"Occitan"},"oj":{"name":"Ojibwe, Ojibwa","nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"},"cu":{"name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic","nativeName":"ѩзыкъ словѣньскъ"},"om":{"name":"Oromo","nativeName":"Afaan Oromoo"},"or":{"name":"Oriya","nativeName":"ଓଡ଼ିଆ"},"os":{"name":"Ossetian, Ossetic","nativeName":"ирон æвзаг"},"pa":{"name":"Panjabi, Punjabi","nativeName":"ਪੰਜਾਬੀ, پنجابی‎"},"pi":{"name":"Pāli","nativeName":"पाऴि"},"fa":{"name":"Persian","nativeName":"فارسی"},"pl":{"name":"Polish","nativeName":"polski"},"ps":{"name":"Pashto, Pushto","nativeName":"پښتو"},"pt":{"name":"Portuguese","nativeName":"Português"},"qu":{"name":"Quechua","nativeName":"Runa Simi, Kichwa"},"rm":{"name":"Romansh","nativeName":"rumantsch grischun"},"rn":{"name":"Kirundi","nativeName":"kiRundi"},"ro":{"name":"Romanian, Moldavian, Moldovan","nativeName":"română"},"ru":{"name":"Russian","nativeName":"русский язык"},"sa":{"name":"Sanskrit (Saṁskṛta)","nativeName":"संस्कृतम्"},"sc":{"name":"Sardinian","nativeName":"sardu"},"sd":{"name":"Sindhi","nativeName":"सिन्धी, سنڌي، سندھی‎"},"se":{"name":"Northern Sami","nativeName":"Davvisámegiella"},"sm":{"name":"Samoan","nativeName":"gagana faa Samoa"},"sg":{"name":"Sango","nativeName":"yângâ tî sängö"},"sr":{"name":"Serbian","nativeName":"српски језик"},"gd":{"name":"Scottish Gaelic; Gaelic","nativeName":"Gàidhlig"},"sn":{"name":"Shona","nativeName":"chiShona"},"si":{"name":"Sinhala, Sinhalese","nativeName":"සිංහල"},"sk":{"name":"Slovak","nativeName":"slovenčina"},"sl":{"name":"Slovene","nativeName":"slovenščina"},"so":{"name":"Somali","nativeName":"Soomaaliga, af Soomaali"},"st":{"name":"Southern Sotho","nativeName":"Sesotho"},"es":{"name":"Spanish; Castilian","nativeName":"español, castellano"},"su":{"name":"Sundanese","nativeName":"Basa Sunda"},"sw":{"name":"Swahili","nativeName":"Kiswahili"},"ss":{"name":"Swati","nativeName":"SiSwati"},"sv":{"name":"Swedish","nativeName":"svenska"},"ta":{"name":"Tamil","nativeName":"தமிழ்"},"te":{"name":"Telugu","nativeName":"తెలుగు"},"tg":{"name":"Tajik","nativeName":"тоҷикӣ, toğikī, تاجیکی‎"},"th":{"name":"Thai","nativeName":"ไทย"},"ti":{"name":"Tigrinya","nativeName":"ትግርኛ"},"bo":{"name":"Tibetan Standard, Tibetan, Central","nativeName":"བོད་ཡིག"},"tk":{"name":"Turkmen","nativeName":"Türkmen, Түркмен"},"tl":{"name":"Tagalog","nativeName":"Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"},"tn":{"name":"Tswana","nativeName":"Setswana"},"to":{"name":"Tonga (Tonga Islands)","nativeName":"faka Tonga"},"tr":{"name":"Turkish","nativeName":"Türkçe"},"ts":{"name":"Tsonga","nativeName":"Xitsonga"},"tt":{"name":"Tatar","nativeName":"татарча, tatarça, تاتارچا‎"},"tw":{"name":"Twi","nativeName":"Twi"},"ty":{"name":"Tahitian","nativeName":"Reo Tahiti"},"ug":{"name":"Uighur, Uyghur","nativeName":"Uyƣurqə, ئۇيغۇرچە‎"},"uk":{"name":"Ukrainian","nativeName":"українська"},"ur":{"name":"Urdu","nativeName":"اردو"},"uz":{"name":"Uzbek","nativeName":"zbek, Ўзбек, أۇزبېك‎"},"ve":{"name":"Venda","nativeName":"Tshivenḓa"},"vi":{"name":"Vietnamese","nativeName":"Tiếng Việt"},"vo":{"name":"Volapük","nativeName":"Volapük"},"wa":{"name":"Walloon","nativeName":"Walon"},"cy":{"name":"Welsh","nativeName":"Cymraeg"},"wo":{"name":"Wolof","nativeName":"Wollof"},"fy":{"name":"Western Frisian","nativeName":"Frysk"},"xh":{"name":"Xhosa","nativeName":"isiXhosa"},"yi":{"name":"Yiddish","nativeName":"ייִדיש"},"yo":{"name":"Yoruba","nativeName":"Yorùbá"},"za":{"name":"Zhuang, Chuang","nativeName":"Saɯ cueŋƅ, Saw cuengh"}}')
    },
    ec0e: function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("transition", {
                on: {
                    enter: e.onEnter,
                    leave: e.onLeave
                }
            }, [a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        fixed: e.isFixedToElement,
                        noPadding: e.$props.noPadding,
                        noshadow: e.$props.noShadow,
                        pointerEvents: e.$props.pointerEvents,
                        gradientGreen: "green" === e.$props.gradient
                    },
                    expression: "{\n      'fixed': isFixedToElement,\n      'noPadding': $props.noPadding,\n      'noshadow': $props.noShadow,\n      'pointerEvents': $props.pointerEvents,\n      'gradientGreen': $props.gradient === 'green'\n    }"
                }, {
                    name: "show",
                    rawName: "v-show",
                    value: e.$props.open,
                    expression: "$props.open"
                }],
                ref: "main",
                staticClass: "tooltip",
                style: e.mainStyle
            }, [a("div", {
                ref: "wrapper",
                staticClass: "tooltip__wrapper"
            }, [a("div", {
                staticClass: "tooltip__bg",
                style: e.backgroundStyle
            }), a("div", {
                staticClass: "tooltip__slot"
            }, [e._t("default")], 2), a("svg", {
                ref: "arrow",
                staticClass: "tooltip__arrow",
                style: e.arrowStyle,
                attrs: {
                    width: "19",
                    height: "9",
                    viewBox: "0 0 19 9",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("path", {
                attrs: {
                    d: "M9.5 0L18.5933 8.25H0.406734L9.5 0Z",
                    fill: e.$props.color
                }
            })])])])])
        }
          , n = []
          , r = (a("a9e3"),
        a("cffa"))
          , i = "center"
          , s = "top"
          , c = "bottom"
          , u = "left"
          , l = "right"
          , d = {
            name: "tooltip",
            props: {
                element: {
                    default: null
                },
                open: {
                    type: Boolean,
                    default: !0
                },
                alignVertical: {
                    type: String,
                    validator: function(e) {
                        return -1 !== [i, s, c].indexOf(e)
                    },
                    default: c
                },
                alignHorizontal: {
                    type: String,
                    validator: function(e) {
                        return -1 !== [i, u, l].indexOf(e)
                    },
                    default: i
                },
                alignMargin: {
                    type: Number,
                    default: 10
                },
                edgeMargin: {
                    type: Number,
                    default: 10
                },
                noPadding: {
                    type: Boolean,
                    default: !1
                },
                noShadow: {
                    type: Boolean,
                    default: !1
                },
                arrowOffset: {
                    type: Number,
                    default: 0
                },
                arrowAlign: {
                    type: String,
                    validator: function(e) {
                        return -1 !== [i, u, l].indexOf(e)
                    },
                    default: i
                },
                color: {
                    type: String,
                    default: "white"
                },
                gradient: {
                    type: String,
                    validator: function(e) {
                        return -1 !== ["", "green"].indexOf(e)
                    },
                    default: ""
                },
                pointerEvents: {
                    type: Boolean,
                    defaul: !1
                },
                animate: {
                    type: Boolean,
                    default: !0
                }
            },
            computed: {
                isFixedToElement: function() {
                    return null !== this.$props.element
                },
                mainStyle: function() {
                    return {
                        padding: "0 " + this.$props.edgeMargin + "px"
                    }
                },
                backgroundStyle: function() {
                    return {
                        backgroundColor: "" === this.$props.gradient ? this.$props.color : ""
                    }
                },
                arrowStyle: function() {
                    var e = {
                        transform: "translateX(-50%)"
                    };
                    switch (this.$props.arrowAlign) {
                    case i:
                        e.left = "calc(50% + " + this.$props.arrowOffset + "px)";
                        break;
                    case u:
                        e.left = this.$props.arrowOffset + "px";
                        break;
                    case l:
                        e.right = this.$props.arrowOffset + "px";
                        break;
                    default:
                        e.left = "calc(50% + " + this.$props.arrowOffset + "px)";
                        break
                    }
                    return this.$props.alignVertical === c ? (e.bottom = "-8px",
                    e.transform += " scaleY(-1)") : this.$props.alignVertical === s && (e.top = "-8px"),
                    e
                }
            },
            mounted: function() {
                this.$props.open ? (this.addListeners(),
                this.update(),
                this.onEnter()) : this.onLeave()
            },
            beforeDestroy: function() {
                this.removeListeners(),
                document.removeEventListener("click", this.checkForClickOutside)
            },
            methods: {
                addListeners: function() {
                    document.addEventListener("touchend", this.touchHandler, !1),
                    this.isFixedToElement && document.addEventListener("scroll", this.scrollHandler, !1)
                },
                removeListeners: function() {
                    document.removeEventListener("touchend", this.touchHandler),
                    this.isFixedToElement && document.removeEventListener("scroll", this.scrollHandler)
                },
                update: function() {
                    if (this.$emit("update"),
                    this.isFixedToElement) {
                        this.$refs.main.style.top && this.$refs.main.removeAttribute("top"),
                        this.$refs.main.style.left && this.$refs.main.removeAttribute("left"),
                        this.$refs.main.style.width && this.$refs.main.removeAttribute("width");
                        var e = this.$refs.main.getBoundingClientRect()
                          , t = this.$props.element.getBoundingClientRect()
                          , a = 0
                          , o = 0
                          , n = 0;
                        a = this.getVerticalAlignPosition(t, e),
                        o = this.getHorizontalAlignPosition(t, e),
                        n = o < 0 ? e.width + o : 0,
                        o = Math.max(o, 0),
                        n > 0 && (this.$refs.main.style.width = n + "px"),
                        this.$refs.main.style.top = a + "px",
                        this.$refs.main.style.left = o + "px",
                        e = this.$refs.main.getBoundingClientRect(),
                        t = this.$props.element.getBoundingClientRect(),
                        a = this.getVerticalAlignPosition(t, e),
                        this.$refs.main.style.top = a + "px"
                    }
                },
                getVerticalAlignPosition: function(e, t) {
                    switch (this.$props.alignVertical) {
                    case i:
                        return e.top + .5 * e.height - .5 * t.height;
                    case s:
                        return e.top - (t.height + this.$props.alignMargin);
                    case c:
                        return e.top + e.height + this.$props.alignMargin;
                    default:
                        return e.top + .5 * e.height - .5 * t.height
                    }
                },
                getHorizontalAlignPosition: function(e, t) {
                    switch (this.$props.alignHorizontal) {
                    case i:
                        return e.left + .5 * e.width - .5 * t.width;
                    case u:
                        return e.left - (t.width + this.$props.alignMargin);
                    case l:
                        return e.left + e.width + this.$props.alignMargin;
                    default:
                        return e.left + .5 * e.width - .5 * t.width
                    }
                },
                touchHandler: function(e) {
                    this.isDescendant(this.$props.element, e.target) || this.$emit("clickoutside")
                },
                scrollHandler: function(e) {
                    var t = this.$refs.main.getBoundingClientRect()
                      , a = this.$props.element.getBoundingClientRect()
                      , o = this.getVerticalAlignPosition(a, t);
                    this.$refs.main.style.top = o + "px"
                },
                isDescendant: function(e, t) {
                    var a = t.parentNode;
                    while (null !== a) {
                        if (a === e)
                            return !0;
                        a = a.parentNode
                    }
                    return !1
                },
                onEnter: function(e, t) {
                    var a, o, n = this;
                    setTimeout((function() {
                        document.addEventListener("click", n.checkForClickOutside, !1)
                    }
                    ), 0);
                    var i = this.$refs.arrow.clientWidth;
                    switch (this.$props.arrowAlign) {
                    case u:
                        o = (this.$props.arrowOffset - i) / this.$refs.main.clientWidth,
                        a = 100 * o + "% " + this.$props.alignVertical;
                        break;
                    case l:
                        o = (this.$refs.main.clientWidth - this.$props.arrowOffset - i) / this.$refs.main.clientWidth,
                        a = 100 * o + "% " + this.$props.alignVertical;
                        break;
                    default:
                        a = "center " + this.$props.alignVertical;
                        break
                    }
                    this.$props.animate ? (r["b"].set(this.$refs.wrapper, {
                        transformOrigin: a
                    }),
                    r["b"].to(this.$refs.wrapper, {
                        scale: 1,
                        opacity: 1,
                        duration: .2,
                        ease: "power2.inOut",
                        onComplete: function() {
                            n.onEnterComplete(t)
                        }
                    })) : (r["b"].set(this.$refs.wrapper, {
                        scale: 1,
                        opacity: 1,
                        transformOrigin: a
                    }),
                    this.onEnterComplete())
                },
                onEnterComplete: function(e) {
                    this.$emit("update"),
                    this.$emit("openComplete"),
                    e && e()
                },
                onLeave: function(e, t) {
                    var a, o, n = this, i = this.$refs.arrow.clientWidth;
                    switch (this.$props.arrowAlign) {
                    case u:
                        o = (this.$props.arrowOffset - i) / this.$refs.main.clientWidth,
                        a = 100 * o + "% " + this.$props.alignVertical;
                        break;
                    case l:
                        o = (this.$refs.main.clientWidth - this.$props.arrowOffset - i) / this.$refs.main.clientWidth,
                        a = 100 * o + "% " + this.$props.alignVertical;
                        break;
                    default:
                        a = "center " + this.$props.alignVertical;
                        break
                    }
                    this.$props.animate ? (r["b"].set(this.$refs.wrapper, {
                        transformOrigin: a
                    }),
                    r["b"].to(this.$refs.wrapper, {
                        scale: .75,
                        opacity: 0,
                        duration: .2,
                        ease: "power2.inOut",
                        onComplete: function() {
                            n.onLeaveComplete(t)
                        }
                    })) : (r["b"].set(this.$refs.wrapper, {
                        scale: .75,
                        opacity: 0,
                        transformOrigin: a
                    }),
                    this.onLeaveComplete())
                },
                onLeaveComplete: function(e) {
                    document.removeEventListener("click", this.checkForClickOutside),
                    this.$emit("update"),
                    this.$emit("closeComplete"),
                    e && e()
                },
                checkForClickOutside: function(e) {
                    this.$refs.main.contains(e.target) || this.$emit("clickoutside")
                }
            },
            watch: {
                open: function(e) {
                    var t = this;
                    e ? (this.addListeners(),
                    this.$nextTick((function() {
                        t.update()
                    }
                    ))) : this.removeListeners()
                },
                element: function(e) {
                    this.$props.open && this.update()
                },
                text: function(e) {
                    this.$props.open && this.update()
                }
            }
        }
          , _ = d
          , p = (a("8f71"),
        a("2877"))
          , m = Object(p["a"])(_, o, n, !1, null, "8cb76fa8", null);
        t["a"] = m.exports
    },
    ec80: function(e, t, a) {
        var o = {
            "./tos_en": "8c77",
            "./tos_en.js": "8c77"
        };
        function n(e) {
            return Promise.resolve().then((function() {
                if (!a.o(o, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                }
                var n = o[e];
                return a(n)
            }
            ))
        }
        n.keys = function() {
            return Object.keys(o)
        }
        ,
        n.id = "ec80",
        e.exports = n
    },
    ee91: function(e, t, a) {},
    ef17: function(e, t, a) {},
    efc5: function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                ref: "main",
                staticClass: "confetti"
            }, [a("canvas", {
                ref: "canvas",
                staticClass: "confetti__canvas"
            })])
        }
          , n = []
          , r = a("5530")
          , i = (a("d3b7"),
        a("159b"),
        a("d4ec"))
          , s = a("bee2")
          , c = a("262e")
          , u = a("2caf")
          , l = (a("d81d"),
        a("a434"),
        a("faa1"))
          , d = function() {
            function e(t) {
                var a = t.canvas
                  , o = t.image
                  , n = t.totalFrames
                  , r = t.startFrame
                  , s = void 0 === r ? 0 : r
                  , c = t.spriteWidth
                  , u = void 0 === c ? 100 : c
                  , l = t.spriteHeight
                  , d = void 0 === l ? 100 : l
                  , _ = t.width
                  , p = void 0 === _ ? 100 : _
                  , m = t.height
                  , f = void 0 === m ? 100 : m
                  , h = t.x
                  , g = void 0 === h ? 0 : h
                  , b = t.y
                  , S = void 0 === b ? 0 : b
                  , y = t.scale
                  , v = void 0 === y ? 1 : y
                  , E = t.opacity
                  , T = void 0 === E ? 1 : E
                  , C = t.fps
                  , O = void 0 === C ? 60 : C
                  , A = t.disableInternalRender
                  , I = void 0 !== A && A
                  , w = t.disableInternalClearRect
                  , R = void 0 !== w && w;
                Object(i["a"])(this, e),
                this.canvas = a,
                this.image = o,
                this.totalFrames = n,
                this.startFrame = s,
                this.spriteWidth = u,
                this.spriteHeight = d,
                this.fps = O,
                this.width = p,
                this.height = f,
                this.x = g,
                this.y = S,
                this.scale = v,
                this.opacity = T,
                this.disableInternalRender = I,
                this.disableInternalClearRect = R,
                this.context = null,
                this.columns = 0,
                this.rows = 0,
                this.frame = s,
                this.fpsInterval = 1e3 / this.fps,
                this.oldTime = 0,
                this.time = 0,
                this.context = this.canvas.getContext("2d"),
                this.columns = this.image ? this.image.width / this.spriteWidth : 0,
                this.rows = this.image ? this.image.height / this.spriteHeight : 0,
                this.isStopped = !0,
                this.raf = void 0
            }
            return Object(s["a"])(e, [{
                key: "start",
                value: function() {
                    this.oldTime = Date.now(),
                    this.isStopped = !1,
                    this.update()
                }
            }, {
                key: "stop",
                value: function() {
                    this.isStopped = !0
                }
            }, {
                key: "destroy",
                value: function() {
                    window.cancelAnimationFrame(this.raf),
                    this.stop(),
                    this.image = null
                }
            }, {
                key: "render",
                value: function() {
                    if (this.image) {
                        this.disableInternalClearRect || this.context.clearRect(this.x, this.y, this.width, this.height);
                        var e = Math.floor(this.frame / this.columns)
                          , t = (this.frame - e * this.columns) * this.spriteWidth
                          , a = e * this.spriteHeight;
                        this.context.globalAlpha = this.opacity,
                        this.context.drawImage(this.image, t, a, this.spriteWidth, this.spriteHeight, Math.floor(this.x), Math.floor(this.y), Math.floor(this.width * this.scale), Math.floor(this.height * this.scale))
                    }
                }
            }, {
                key: "update",
                value: function() {
                    var e = this;
                    this.time = Date.now();
                    var t = this.time - this.oldTime;
                    t > this.fpsInterval && (this.oldTime = this.time - t % this.fpsInterval,
                    this.frame < this.totalFrames - 1 ? this.frame++ : this.frame = 0,
                    this.disableInternalRender || this.render()),
                    this.isStopped || (this.raf = window.requestAnimationFrame((function() {
                        return e.update()
                    }
                    )))
                }
            }]),
            e
        }()
          , _ = d
          , p = function(e) {
            Object(c["a"])(a, e);
            var t = Object(u["a"])(a);
            function a(e) {
                var o, n = e.canvas, r = e.imagePaths, s = void 0 === r ? [] : r, c = e.maxParticles, u = void 0 === c ? 10 : c, l = e.minParticleScale, d = void 0 === l ? 0 : l, _ = e.maxParticleScale, p = void 0 === _ ? 1 : _, m = e.particleSpeed, f = void 0 === m ? 2.5 : m, h = e.autostart, g = void 0 === h || h;
                return Object(i["a"])(this, a),
                o = t.call(this),
                o.canvas = n,
                o.context = o.canvas.getContext("2d"),
                o.PARTICLE_TOTAL_FRAMES = 75,
                o.PARTICLE_SPRITE_WIDTH = 96,
                o.PARTICLE_SPRITE_HEIGHT = 129,
                o.PARTICLE_FPS = 25,
                o.FPS = 25,
                o.imagePaths = s,
                o.maxParticles = u,
                o.minParticleScale = d,
                o.maxParticleScale = p,
                o.particleSpeed = f * (60 / o.FPS),
                o.images = [],
                o.particles = [],
                o.hasBeenStarted = !1,
                o.isStopped = !0,
                o.isPaused = !1,
                o.isDestroyed = !1,
                o.isBurst = !1,
                o.imagesLoadedNum = 0,
                o.autostart = g,
                o.fpsInterval = 1e3 / o.FPS,
                o.time = 0,
                o.oldTime = 0,
                o.raf = void 0,
                o.init(),
                o
            }
            return Object(s["a"])(a, [{
                key: "init",
                value: function() {
                    for (var e, t = 0; t < this.imagePaths.length; t++)
                        e = new Image,
                        e.addEventListener("load", this.loadHandler.bind(this), !1),
                        e.src = this.imagePaths[t],
                        this.images[t] = e
                }
            }, {
                key: "loadHandler",
                value: function() {
                    this.imagesLoadedNum++,
                    this.imagesLoadedNum >= this.imagePaths.length && (this.emit("load"),
                    !this.autostart || this.isDestroyed || this.isPaused || this.start())
                }
            }, {
                key: "start",
                value: function() {
                    this.hasBeenStarted = !0,
                    this.isStopped && (this.isStopped = !1,
                    this.oldTime = Date.now(),
                    this.particles = [],
                    this.spawn(this.maxParticles),
                    this.update())
                }
            }, {
                key: "stop",
                value: function() {
                    this.isStopped = !0,
                    this.particles.map((function(e) {
                        return e.sprite.stop()
                    }
                    ))
                }
            }, {
                key: "pause",
                value: function() {
                    this.isPaused = !0,
                    this.stop()
                }
            }, {
                key: "unpause",
                value: function() {
                    this.isPaused = !1,
                    this.hasBeenStarted && (this.particles.length > 0 ? (this.isStopped = !1,
                    this.particles.map((function(e) {
                        return e.sprite.start()
                    }
                    )),
                    this.update()) : this.isBurst || this.start())
                }
            }, {
                key: "destroy",
                value: function() {
                    this.isDestroyed = !0,
                    window.cancelAnimationFrame(this.raf),
                    this.stop();
                    for (var e = 0; e < this.particles.length; e++)
                        this.particles[e].sprite.destroy(),
                        this.particles[e].sprite = null;
                    this.images = [],
                    this.particles = []
                }
            }, {
                key: "burst",
                value: function() {
                    this.isBurst = !0,
                    this.hasBeenStarted = !0,
                    this.spawn(10, !1, !1),
                    this.isStopped && (this.isStopped = !1,
                    this.update())
                }
            }, {
                key: "spawn",
                value: function() {
                    for (var e, t, a, o, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10, r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], s = 0; s < n; s++)
                        a = this.getRandomScale(),
                        o = this.getOpacity(a),
                        e = {
                            canvas: this.canvas,
                            image: this.getRandomImage(),
                            totalFrames: this.PARTICLE_TOTAL_FRAMES,
                            startFrame: Math.round(Math.random() * (this.PARTICLE_TOTAL_FRAMES - 1)),
                            spriteWidth: this.PARTICLE_SPRITE_WIDTH,
                            spriteHeight: this.PARTICLE_SPRITE_HEIGHT,
                            width: .5 * this.PARTICLE_SPRITE_WIDTH,
                            height: .5 * this.PARTICLE_SPRITE_HEIGHT,
                            x: this.getRandomStartX(),
                            y: i ? this.getInViewStartY() : this.getRandomStartY(),
                            scale: a,
                            opacity: o,
                            fps: this.PARTICLE_FPS,
                            disableInternalRender: !0,
                            disableInternalClearRect: !0
                        },
                        t = {
                            sprite: new _(e),
                            originX: e.x,
                            speedY: e.scale * this.particleSpeed,
                            sinOffset: 1e3 * Math.random(),
                            respawn: r
                        },
                        t.sprite.start(),
                        this.particles.push(t)
                }
            }, {
                key: "render",
                value: function() {
                    var e, t;
                    for (this.context.clearRect(0, 0, this.canvas.width, this.canvas.height),
                    e = 0; e < this.particles.length; e++)
                        t = this.particles[e],
                        t.sprite.x = t.originX + 30 * Math.sin(.025 * (t.sinOffset + t.sprite.y)),
                        t.sprite.y += t.speedY,
                        t.sprite.render(),
                        t.sprite.y > this.canvas.height && (t.respawn ? (t.sprite.image = this.getRandomImage(),
                        t.sprite.x = this.getRandomStartX(),
                        t.sprite.y = this.getRandomStartY(),
                        t.sprite.scale = this.getRandomScale(),
                        t.sprite.opacity = this.getOpacity(t.sprite.scale),
                        t.originX = t.sprite.x,
                        t.speedY = t.sprite.scale * this.particleSpeed,
                        t.sinOffset = 1e3 * Math.random()) : (t.sprite.destroy(),
                        this.particles.splice(e, 1)))
                }
            }, {
                key: "update",
                value: function() {
                    var e = this;
                    this.time = Date.now();
                    var t = this.time - this.oldTime;
                    t > this.fpsInterval && (this.oldTime = this.time - t % this.fpsInterval,
                    this.render()),
                    this.isStopped || (this.raf = window.requestAnimationFrame((function() {
                        return e.update()
                    }
                    )))
                }
            }, {
                key: "getRandomImage",
                value: function() {
                    return this.images[Math.floor(Math.random() * this.images.length)]
                }
            }, {
                key: "getRandomStartX",
                value: function() {
                    return (this.canvas.width + 200) * Math.random() - 100
                }
            }, {
                key: "getRandomStartY",
                value: function() {
                    return -(this.PARTICLE_SPRITE_HEIGHT + 200 * Math.random())
                }
            }, {
                key: "getInViewStartY",
                value: function() {
                    return (this.canvas.height + 200) * Math.random() - 100
                }
            }, {
                key: "getRandomScale",
                value: function() {
                    var e = 1;
                    return e = Math.random() > .2 ? Math.random() : 1,
                    this.minParticleScale + Math.random() * e * (this.maxParticleScale - this.minParticleScale)
                }
            }, {
                key: "getOpacity",
                value: function(e) {
                    return e < .8 ? e / .8 - .2 + .2 : 1
                }
            }]),
            a
        }(l["EventEmitter"])
          , m = p
          , f = {
            name: "Confetti",
            props: {
                options: {
                    type: Object,
                    default: function() {}
                },
                autoPause: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    loaded: !1,
                    confetti: void 0,
                    observer: void 0
                }
            },
            mounted: function() {
                window.addEventListener("resize", this.resizeHandler, !1),
                this.init(),
                this.resizeHandler(),
                this.$props.autoPause && this.loaded && this.initObserver()
            },
            beforeDestroy: function() {
                this.destroy(),
                window.removeEventListener("resize", this.resizeHandler)
            },
            methods: {
                init: function() {
                    var e = Object(r["a"])(Object(r["a"])({}, this.$props.options), {}, {
                        canvas: this.$refs.canvas
                    });
                    this.confetti = new m(e),
                    this.confetti.on("load", this.onLoad)
                },
                onLoad: function() {
                    this.loaded = !0
                },
                destroy: function() {
                    this.confetti && this.confetti.destroy(),
                    this.observer && this.destroyObserver()
                },
                initObserver: function() {
                    IntersectionObserver && (this.observer = new IntersectionObserver(this.observerCallback,{
                        root: document
                    }),
                    this.observer.observe(this.$refs.main))
                },
                destroyObserver: function() {
                    this.observer && (this.observer.unobserve(this.$refs.main),
                    this.observer.disconnect(),
                    this.observer = null)
                },
                observerCallback: function(e, t) {
                    var a = this;
                    e.forEach((function(e) {
                        e.isIntersecting ? a.confetti.unpause() : a.confetti.pause()
                    }
                    ))
                },
                burst: function() {
                    this.confetti.burst()
                },
                update: function() {
                    this.resizeHandler()
                },
                resizeHandler: function() {
                    this.$refs.canvas.width = this.$refs.main.clientWidth,
                    this.$refs.canvas.height = this.$refs.main.clientHeight
                }
            },
            watch: {
                autoPause: function(e, t) {
                    e ? this.initObserver() : this.destroyObserver()
                },
                loaded: function(e, t) {
                    e && this.$props.autoPause && this.initObserver()
                }
            }
        }
          , h = f
          , g = (a("38ad"),
        a("2877"))
          , b = Object(g["a"])(h, o, n, !1, null, "20cdc380", null);
        t["a"] = b.exports
    },
    f001: function(e, t, a) {
        "use strict";
        a("ea86")
    },
    f001a: function(e, t, a) {
        e.exports = a.p + "img/game-icon-BRAWL_STARS.572a9408.jpg"
    },
    f252: function(e, t, a) {},
    f3a9: function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        confirmed: e.$props.confirmed,
                        error: void 0 !== e.$props.error,
                        centered: e.$props.centered,
                        disabled: e.$props.disabled,
                        freeWidth: e.$props.freeWidth,
                        inverted: e.$props.inverted,
                        focus: e.hasFocus,
                        hasCustomIcon: e.hasCustomIcon
                    },
                    expression: "{\n    'confirmed': $props.confirmed,\n    'error': $props.error !== undefined,\n    'centered': $props.centered,\n    'disabled': $props.disabled,\n    'freeWidth': $props.freeWidth,\n    'inverted': $props.inverted,\n    'focus': hasFocus,\n    'hasCustomIcon': hasCustomIcon\n  }"
                }],
                staticClass: "defaultInput"
            }, [a("FormElement", {
                attrs: {
                    label: e.$props.label,
                    labelInfo: e.$props.labelInfo,
                    tooltip: e.$props.tooltip,
                    description: e.$props.description,
                    centered: e.$props.centered,
                    required: e.$props.required,
                    inverted: e.$props.inverted,
                    clickToEdit: !e.isEditMode
                },
                on: {
                    editClick: e.onEditClick
                }
            }, [e.isEditMode ? a("div", {
                staticClass: "defaultInput__inputWrapper"
            }, [a("div", {
                staticClass: "defaultInput__customIcon"
            }, [e._t("customIcon")], 2), a("transition", {
                on: {
                    enter: e.onEnterIcon,
                    leave: e.onLeaveIcon
                }
            }, [a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["confirmed"],
                    expression: "['confirmed']"
                }, {
                    name: "show",
                    rawName: "v-show",
                    value: e.$props.confirmed && !e.$props.disabled && !e.$props.showLoader,
                    expression: "$props.confirmed && !$props.disabled && !$props.showLoader"
                }],
                staticClass: "defaultInput__icon"
            })]), a("transition", {
                on: {
                    enter: e.onEnterIcon,
                    leave: e.onLeaveIcon
                }
            }, [a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["error"],
                    expression: "['error']"
                }, {
                    name: "show",
                    rawName: "v-show",
                    value: void 0 !== e.$props.error && !e.$props.disabled && !e.$props.showLoader,
                    expression: "$props.error !== undefined && !$props.disabled && !$props.showLoader"
                }],
                staticClass: "defaultInput__icon"
            })]), a("transition", {
                on: {
                    enter: e.onEnterIcon,
                    leave: e.onLeaveIcon
                }
            }, [a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["disabled"],
                    expression: "['disabled']"
                }, {
                    name: "show",
                    rawName: "v-show",
                    value: e.$props.disabled,
                    expression: "$props.disabled"
                }],
                staticClass: "defaultInput__icon"
            })]), a("transition", {
                on: {
                    enter: e.onEnterIcon,
                    leave: e.onLeaveIcon
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.$props.showLoader,
                    expression: "$props.showLoader"
                }],
                staticClass: "defaultInput__loader"
            }, [a("BubblesAnimation")], 1)]), a("input", {
                ref: "input",
                staticClass: "defaultInput__input",
                attrs: {
                    type: e.$props.type,
                    inputmode: e.$props.inputmode,
                    pattern: e.$props.pattern || void 0,
                    placeholder: e.$props.placeholder,
                    disabled: e.$props.disabled,
                    spellcheck: e.$props.protected ? "false" : void 0,
                    autocomplete: e.$props.protected ? "off" : void 0,
                    autocorrect: e.$props.protected ? "off" : void 0,
                    autocapitalize: e.$props.protected ? "off" : void 0
                },
                domProps: {
                    value: e.$props.value
                },
                on: {
                    input: e.onInput,
                    keydown: e.onKeydown,
                    keyup: e.onKeyup,
                    focus: e.onFocus,
                    blur: e.onBlur
                }
            })], 1) : a("div", {
                staticClass: "defaultInput__immutableInput"
            }, [a("p", {
                staticClass: "defaultInput__immutableInputText",
                domProps: {
                    textContent: e._s(e.$props.immutableValue)
                }
            })]), a("transition", {
                on: {
                    enter: e.onEnterError,
                    leave: e.onLeaveError
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: void 0 !== e.$props.error,
                    expression: "$props.error !== undefined"
                }],
                staticClass: "defaultInput__errorWrapper"
            }, [a("p", {
                staticClass: "defaultInput__error",
                domProps: {
                    textContent: e._s(e.formattedError)
                }
            })])])], 1)], 1)
        }
          , n = []
          , r = a("cffa")
          , i = a("8a2f")
          , s = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("svg", {
                staticClass: "bubblesAnimation",
                attrs: {
                    width: "34",
                    height: "8",
                    viewBox: "0 0 34 8"
                }
            }, [a("circle", {
                staticClass: "bubblesAnimation__bubble bubblesAnimation__bubble--1",
                attrs: {
                    cx: "4",
                    cy: "4",
                    r: "4"
                }
            }), a("circle", {
                staticClass: "bubblesAnimation__bubble bubblesAnimation__bubble--2",
                attrs: {
                    cx: "17",
                    cy: "4",
                    r: "4"
                }
            }), a("circle", {
                staticClass: "bubblesAnimation__bubble bubblesAnimation__bubble--3",
                attrs: {
                    cx: "30",
                    cy: "4",
                    r: "4"
                }
            })])
        }
          , c = []
          , u = {
            name: "BubblesAnimation"
        }
          , l = u
          , d = (a("1c2e"),
        a("2877"))
          , _ = Object(d["a"])(l, s, c, !1, null, "8adaefda", null)
          , p = _.exports
          , m = {
            name: "DefaultInput",
            components: {
                FormElement: i["a"],
                BubblesAnimation: p
            },
            props: {
                value: {
                    type: String,
                    default: ""
                },
                immutableValue: {
                    type: String,
                    default: ""
                },
                type: {
                    type: String,
                    default: "text"
                },
                inputmode: {
                    type: String,
                    default: ""
                },
                pattern: {
                    type: String,
                    default: ""
                },
                placeholder: {
                    type: String,
                    default: ""
                },
                label: {
                    type: String,
                    default: ""
                },
                labelInfo: {
                    type: String,
                    default: ""
                },
                tooltip: {
                    type: String,
                    default: ""
                },
                description: {
                    type: String,
                    default: ""
                },
                confirmed: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                error: {
                    type: Array,
                    default: void 0
                },
                centered: {
                    type: Boolean,
                    default: !1
                },
                freeWidth: {
                    type: Boolean,
                    default: !1
                },
                showLoader: {
                    type: Boolean,
                    default: !1
                },
                required: {
                    type: Boolean,
                    default: !1
                },
                inverted: {
                    type: Boolean,
                    default: !1
                },
                protected: {
                    type: Boolean,
                    default: !0
                },
                clickToEdit: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    hasFocus: !1,
                    isErrorLeaving: !1,
                    lastError: void 0,
                    isEditClicked: !1
                }
            },
            computed: {
                isEditMode: function() {
                    return !this.$props.clickToEdit || this.$props.clickToEdit && this.isEditClicked
                },
                hasCustomIcon: function() {
                    return void 0 !== this.$slots.customIcon
                },
                formattedError: function() {
                    var e = this.$props.error;
                    return this.isErrorLeaving && (e = this.lastError),
                    void 0 !== e ? e[0] : ""
                }
            },
            methods: {
                onInput: function(e) {
                    this.$emit("input", e.target.value)
                },
                onKeydown: function(e) {
                    this.$emit("keydown", e)
                },
                onKeyup: function(e) {
                    this.$emit("keyup", e)
                },
                onFocus: function(e) {
                    this.hasFocus = !0,
                    this.$emit("focus", e.target.value)
                },
                onBlur: function(e) {
                    this.hasFocus = !1,
                    this.$emit("blur", e.target.value)
                },
                onEditClick: function() {
                    this.isEditClicked = !0
                },
                onEnterIcon: function(e, t) {
                    r["b"].set(e, {
                        scale: .5,
                        opacity: 0
                    }),
                    r["b"].to(e, {
                        scale: 1,
                        opacity: 1,
                        duration: .2,
                        ease: "power2.inOut"
                    })
                },
                onLeaveIcon: function(e, t) {
                    r["b"].to(e, {
                        scale: .5,
                        opacity: 0,
                        duration: .2,
                        ease: "power2.inOut",
                        onComplete: function() {
                            t()
                        }
                    })
                },
                onEnterError: function(e, t) {
                    this.$nextTick((function() {
                        e.style.height = "auto";
                        var a = e.clientHeight;
                        r["b"].set(e, {
                            opacity: 0,
                            height: 0
                        }),
                        r["b"].to(e, {
                            height: a,
                            duration: .2,
                            ease: "power2.inOut"
                        }),
                        r["b"].to(e, {
                            opacity: 1,
                            duration: .2,
                            delay: .1,
                            ease: "power2.inOut",
                            clearProps: "all",
                            onComplete: t
                        })
                    }
                    ))
                },
                onLeaveError: function(e, t) {
                    var a = this;
                    this.isErrorLeaving = !0,
                    r["b"].to(e, {
                        opacity: 0,
                        duration: .1,
                        ease: "power2.inOut"
                    }),
                    r["b"].to(e, {
                        height: 0,
                        duration: .2,
                        ease: "power2.inOut",
                        onComplete: function() {
                            a.isErrorLeaving = !1,
                            t()
                        }
                    })
                },
                focus: function() {
                    this.$refs.input.focus()
                },
                setCaretPos: function(e) {
                    this.$refs.input.selectionStart = e,
                    this.$refs.input.selectionEnd = e
                },
                setCaretToStart: function() {
                    this.setCaretPos(0)
                },
                setCaretToEnd: function() {
                    this.setCaretPos(this.$refs.input.value.length)
                }
            },
            watch: {
                error: function(e, t) {
                    this.lastError = t
                }
            }
        }
          , f = m
          , h = (a("a2bb"),
        Object(d["a"])(f, o, n, !1, null, "22e935d0", null));
        t["a"] = h.exports
    },
    f658: function(e, t, a) {
        e.exports = a.p + "img/supercell-logo-white.b5162a0c.svg"
    },
    f76f: function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        freeWidth: e.$props.freeWidth
                    },
                    expression: "{ 'freeWidth': $props.freeWidth }"
                }],
                staticClass: "baseButton"
            }, [a("router-link", {
                staticClass: "baseButton__routerLink",
                attrs: {
                    to: e.$props.to,
                    target: e.$props.target
                }
            }, [e._t("default")], 2), "" === e.$props.href && "" === e.$props.to ? a("div", {
                staticClass: "baseButton__routerLinkBlock"
            }) : e._e(), e.$props.href ? a("a", {
                staticClass: "baseButton__link",
                attrs: {
                    href: e.$props.href,
                    target: e.$props.target
                }
            }) : e._e()], 1)
        }
          , n = []
          , r = {
            name: "BaseButton",
            props: {
                href: {
                    type: String,
                    default: ""
                },
                to: {
                    type: [String, Object],
                    default: ""
                },
                target: {
                    type: String,
                    default: "_self"
                },
                freeWidth: {
                    type: Boolean,
                    default: !1
                }
            }
        }
          , i = r
          , s = (a("6e3a"),
        a("2877"))
          , c = Object(s["a"])(i, o, n, !1, null, "462a2ee3", null);
        t["a"] = c.exports
    },
    f798: function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "defaultView"
            }, [e._t("default")], 2)
        }
          , n = []
          , r = {
            name: "DefaultView"
        }
          , i = r
          , s = (a("9ec7"),
        a("2877"))
          , c = Object(s["a"])(i, o, n, !1, null, "77ac88c2", null);
        t["a"] = c.exports
    },
    f799: function(e, t, a) {
        e.exports = a.p + "img/video-inbox-hero-mobile-CLASH_MINI.3dc0342b.jpg"
    },
    f7b1: function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        active: e.$props.active,
                        inverted: e.$props.inverted,
                        disabled: e.$props.disabled,
                        disabledClickable: e.$props.disabledClickable,
                        freeWidth: e.$props.freeWidth,
                        uppercase: e.$props.uppercase,
                        greenBackground: e.$props.greenBackground,
                        whiteBackground: e.$props.whiteBackground,
                        blueBackground: e.$props.blueBackground,
                        loading: e.isLoading,
                        over: e.isOver
                    },
                    expression: "{\n    'active': $props.active,\n    'inverted': $props.inverted,\n    'disabled': $props.disabled,\n    'disabledClickable': $props.disabledClickable,\n    'freeWidth': $props.freeWidth,\n    'uppercase': $props.uppercase,\n    'greenBackground': $props.greenBackground,\n    'whiteBackground': $props.whiteBackground,\n    'blueBackground': $props.blueBackground,\n    'loading': isLoading,\n    'over': isOver\n  }"
                }],
                ref: "smallButton",
                staticClass: "smallButton",
                on: {
                    click: e.onClick
                }
            }, [a("BaseButton", {
                attrs: {
                    to: e.$props.to,
                    href: e.$props.href,
                    target: e.$props.target,
                    freeWidth: e.$props.freeWidth
                }
            }, [a("div", {
                staticClass: "smallButton__main"
            }, [a("div", {
                staticClass: "smallButton__bg"
            }), a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["left"],
                    expression: "['left']"
                }],
                staticClass: "smallButton__icon"
            }, [e._t("iconLeft")], 2), a("p", {
                staticClass: "smallButton__label",
                domProps: {
                    textContent: e._s(e.$props.label)
                }
            }), a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: ["right"],
                    expression: "['right']"
                }],
                staticClass: "smallButton__icon"
            }, [e._t("iconRight")], 2), e.isLoading ? a("div", {
                staticClass: "smallButton__loader"
            }, [a("Loader", {
                attrs: {
                    color: e.loaderColor
                }
            })], 1) : e._e()])])], 1)
        }
          , n = []
          , r = (a("d3b7"),
        a("159b"),
        a("60a1"))
          , i = a("e3e2")
          , s = a("f76f")
          , c = a("22b3")
          , u = a("31b0")
          , l = a("4ee7")
          , d = {
            name: "SmallButton",
            components: {
                BaseButton: s["a"],
                Loader: c["a"]
            },
            mixins: [u["a"], l["a"]],
            props: {
                label: {
                    type: String,
                    default: "Label"
                },
                href: {
                    type: String,
                    default: ""
                },
                target: {
                    type: String,
                    default: ""
                },
                to: {
                    type: [String, Object],
                    default: ""
                },
                active: {
                    type: Boolean,
                    default: !1
                },
                inverted: {
                    type: Boolean,
                    default: !1
                },
                uppercase: {
                    type: Boolean,
                    default: !1
                },
                icon: {
                    type: String,
                    default: ""
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                disabledClickable: {
                    type: Boolean,
                    default: !1
                },
                freeWidth: {
                    type: Boolean,
                    default: !1
                },
                loaders: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                greenBackground: {
                    type: Boolean,
                    default: !1
                },
                whiteBackground: {
                    type: Boolean,
                    default: !1
                },
                blueBackground: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    constants: r
                }
            },
            computed: {
                isLoading: function() {
                    var e = !1;
                    return this.$props.loaders.forEach((function(t) {
                        "pending" === t && (e = !0)
                    }
                    )),
                    e
                },
                loaderColor: function() {
                    return this.$props.greenBackground || this.$props.blueBackground ? "#ffffff" : i["COLORS"].creatorGreen
                }
            },
            methods: {
                onClick: function(e) {
                    this.isLoading || this.$emit("click", e)
                }
            }
        }
          , _ = d
          , p = (a("72f8"),
        a("2877"))
          , m = Object(p["a"])(_, o, n, !1, null, "492b693c", null);
        t["a"] = m.exports
    },
    f921: function(e, t, a) {
        e.exports = a.p + "img/confetti-green.33869568.png"
    },
    f9e1: function(e, t, a) {
        e.exports = a.p + "img/game-logo-CLASH_MINI.0ef49b19.png"
    },
    f9e3: function(e, t, a) {
        "use strict";
        a("3f72")
    },
    fa9c: function(e, t, a) {},
    fc8e: function(e, t, a) {},
    fd23: function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        checked: e.$props.checked,
                        error: e.hasError,
                        inverted: e.$props.inverted
                    },
                    expression: "{\n    'checked': $props.checked,\n    'error': hasError,\n    'inverted': $props.inverted\n  }"
                }],
                staticClass: "defaultRadio"
            }, [a("input", {
                staticClass: "defaultRadio__input",
                attrs: {
                    type: "radio",
                    id: e.id,
                    name: e.$props.name
                },
                domProps: {
                    value: e.$props.value,
                    checked: e.$props.checked
                },
                on: {
                    change: e.onChange
                }
            }), a("label", {
                staticClass: "defaultRadio__graphic",
                attrs: {
                    for: e.id
                }
            }), "" !== e.$props.label ? a("label", {
                staticClass: "defaultRadio__label",
                attrs: {
                    for: e.id
                },
                domProps: {
                    textContent: e._s(e.$props.label)
                }
            }) : e._e()])
        }
          , n = []
          , r = (a("a9e3"),
        {
            name: "DefaultRadio",
            props: {
                name: {
                    type: String,
                    default: ""
                },
                value: {
                    type: [String, Number],
                    default: ""
                },
                label: {
                    type: String,
                    default: ""
                },
                checked: {
                    type: Boolean,
                    default: !1
                },
                error: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                inverted: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    id: "default-radio-" + Math.round(1e4 * Math.random())
                }
            },
            computed: {
                hasError: function() {
                    return this.$props.error.length > 0
                }
            },
            methods: {
                onChange: function(e) {
                    this.$emit("input", e.target.value)
                }
            }
        })
          , i = r
          , s = (a("1bad"),
        a("2877"))
          , c = Object(s["a"])(i, o, n, !1, null, "567136aa", null);
        t["a"] = c.exports
    },
    fe22: function(e, t, a) {},
    fe6b: function(e, t, a) {
        e.exports = a.p + "img/character-bowler.1e8753b8.png"
    },
    ffcf: function(e, t, a) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("BaseModal", {
                attrs: {
                    opened: e.$props.opened
                },
                on: {
                    close: function(t) {
                        return e.$emit("close")
                    }
                }
            }, [a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        warning: e.$props.warning
                    },
                    expression: "{\n      'warning': $props.warning\n    }"
                }],
                staticClass: "defaultModal"
            }, [a("div", {
                staticClass: "defaultModal__main"
            }, [this.$props.title ? a("p", {
                staticClass: "defaultModal__title",
                domProps: {
                    textContent: e._s(this.$props.title)
                }
            }) : e._e(), a("p", {
                directives: [{
                    name: "link-parser",
                    rawName: "v-link-parser"
                }],
                staticClass: "defaultModal__body",
                domProps: {
                    textContent: e._s(e.sanitizeString(e.body))
                }
            }), a("div", {
                staticClass: "defaultModal__secondaryButton"
            }, [this.$props.hideSecondary ? e._e() : a("DefaultButton", {
                attrs: {
                    label: this.$props.secondaryLabel,
                    outlined: !0,
                    freeWidth: !0,
                    loaders: e.$props.loadersSecondary
                },
                on: {
                    click: e.onClickSecondary
                }
            })], 1), a("div", {
                staticClass: "defaultModal__primaryButton"
            }, [this.$props.hidePrimary ? e._e() : a("DefaultButton", {
                attrs: {
                    label: this.$props.primaryLabel,
                    warning: e.$props.warning,
                    freeWidth: !0,
                    loaders: e.$props.loadersPrimary
                },
                on: {
                    click: e.onClickPrimary
                }
            })], 1)])])])
        }
          , n = []
          , r = a("3277")
          , i = a("60a1")
          , s = a("2312")
          , c = a("0016")
          , u = {
            name: "DefaultModal",
            mixins: [r["a"]],
            components: {
                BaseModal: s["a"],
                DefaultButton: c["a"]
            },
            data: function() {
                return {
                    constants: i
                }
            },
            props: {
                title: {
                    type: String,
                    default: ""
                },
                body: {
                    type: String,
                    default: ""
                },
                primaryLabel: {
                    type: String,
                    default: "Primary"
                },
                secondaryLabel: {
                    type: String,
                    default: "Secondary"
                },
                opened: {
                    type: Boolean,
                    default: !1
                },
                hidePrimary: {
                    type: Boolean,
                    default: !1
                },
                hideSecondary: {
                    type: Boolean,
                    default: !1
                },
                warning: {
                    type: Boolean,
                    default: !1
                },
                loadersPrimary: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                loadersSecondary: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            methods: {
                onClickSecondary: function() {
                    this.$emit("clickSecondary")
                },
                onClickPrimary: function() {
                    this.$emit("clickPrimary")
                }
            }
        }
          , l = u
          , d = (a("303e"),
        a("2877"))
          , _ = Object(d["a"])(l, o, n, !1, null, "960ab9bc", null);
        t["a"] = _.exports
    }
});
