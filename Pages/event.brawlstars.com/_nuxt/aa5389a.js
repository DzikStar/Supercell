(window.webpackJsonp = window.webpackJsonp || []).push([[15], {
    1209: function(e, r, t) {
        "use strict";
        t.r(r);
        t(30),
        t(10);
        var n = t(0)
          , o = t(1060)
          , s = n.default.extend({
            name: "CheerContainer",
            components: {
                Cheer: o.default
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
                sendCheerSocketMessage: function(e, r, t) {
                    -1 === this.firstCheer && (this.firstCheer = t),
                    this.$accessor.cheer.sendCheer({
                        cheerColor: e,
                        amount: r
                    })
                },
                showCheerButton: function(e) {
                    var r = this.getMatchPrediction;
                    return null != r ? r === e : -1 === this.firstCheer || this.firstCheer === e
                }
            }
        })
          , c = t(1)
          , h = Object(c.a)(s, (function() {
            var e = this
              , r = e.$createElement
              , t = e._self._c || r;
            return e.isLiveInGameplay ? t("div", [t("Cheer", {
                attrs: {
                    color: "blue",
                    "x-alignment": "left",
                    "cheer-level": e.blueCheerLevel,
                    "has-cheer-button": e.showCheerButton(0),
                    "number-of-unlocked-rewards": e.getNumberOfUnlockedRewards
                },
                on: {
                    "on-cheer": function(r, t) {
                        return e.sendCheerSocketMessage(r, t, 0)
                    }
                }
            }), e._v(" "), t("Cheer", {
                attrs: {
                    color: "red",
                    "x-alignment": "right",
                    "cheer-level": e.redCheerLevel,
                    "has-cheer-button": e.showCheerButton(1),
                    "number-of-unlocked-rewards": e.getNumberOfUnlockedRewards
                },
                on: {
                    "on-cheer": function(r, t) {
                        return e.sendCheerSocketMessage(r, t, 1)
                    }
                }
            })], 1) : e._e()
        }
        ), [], !1, null, null, null);
        r.default = h.exports;
        installComponents(h, {
            Cheer: t(1060).default
        })
    }
}]);
