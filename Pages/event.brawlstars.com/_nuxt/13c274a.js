(window.webpackJsonp = window.webpackJsonp || []).push([[16], {
    1097: function(e, t, r) {
        "use strict";
        r.r(t);
        r(58);
        var n = r(0)
          , l = r(1060)
          , a = n.default.extend({
            name: "CheerGraphical",
            components: {
                Cheer: l.default
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
          , o = r(1)
          , c = Object(o.a)(a, (function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", [r("Cheer", {
                attrs: {
                    color: "blue",
                    "x-alignment": "left",
                    "cheer-level": e.$props.cheerLevel,
                    "has-cheer-button": !1
                }
            }), e._v(" "), r("Cheer", {
                attrs: {
                    color: "red",
                    "x-alignment": "right",
                    "cheer-level": e.$props.cheerLevel,
                    "has-cheer-button": !1
                }
            })], 1)
        }
        ), [], !1, null, null, null);
        t.default = c.exports;
        installComponents(c, {
            Cheer: r(1060).default
        })
    }
}]);
