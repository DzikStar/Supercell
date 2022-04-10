(window.webpackJsonp = window.webpackJsonp || []).push([[3, 44, 45, 46], {
    1046: function(e, t, a) {
        var n = a(1063);
        n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
        (0,
        a(8).default)("2cc3bd78", n, !0, {
            sourceMap: !1
        })
    },
    1053: function(e, t, a) {
        var n = a(1089);
        n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
        (0,
        a(8).default)("9ea750fc", n, !0, {
            sourceMap: !1
        })
    },
    1062: function(e, t, a) {
        "use strict";
        a(1046)
    },
    1063: function(e, t, a) {
        var n = a(7)((function(e) {
            return e[1]
        }
        ));
        n.push([e.i, '.TimeBlock[data-v-461f5ae9]{-webkit-transform:skew(-5deg);-moz-transform:skew(-5deg);-o-transform:skew(-5deg);background-color:#fff;border:1px solid #040404;box-shadow:0 2px 0 #040404;border-radius:4px;padding:2px 8px;margin:0 2px;min-height:30px;width:70px;display:flex;flex-direction:column;justify-content:center;align-items:center}@media(min-width:46em){.TimeBlock[data-v-461f5ae9]{width:102px;padding:2px 12px;min-height:55px}}.TimeBlock__Label[data-v-461f5ae9],.TimeBlock__Soon[data-v-461f5ae9],.TimeBlock__Time[data-v-461f5ae9]{-webkit-transform:skew(5deg);-moz-transform:skew(5deg);-o-transform:skew(5deg)}.TimeBlock__Soon[data-v-461f5ae9],.TimeBlock__Time[data-v-461f5ae9]{text-shadow:-1.5px -1.5px 0 #040404,0 -1.5px 0 #040404,1.5px -1.5px 0 #040404,1.5px 0 0 #040404,1.5px 1.5px 0 #040404,0 1.5px 0 #040404,-1.5px 1.5px 0 #040404,-1.5px 0 0 #040404,0 3px 0 #040404,-1.5px 3px 0 #040404,1.5px 3px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;text-transform:uppercase;font-size:18px;color:#5f33a8;text-shadow:unset}.TimeBlock__Soon[data-v-461f5ae9]:lang(jp),.TimeBlock__Soon[data-v-461f5ae9]:lang(kr),.TimeBlock__Soon[data-v-461f5ae9]:lang(pl),.TimeBlock__Soon[data-v-461f5ae9]:lang(ru),.TimeBlock__Soon[data-v-461f5ae9]:lang(tr),.TimeBlock__Soon[data-v-461f5ae9]:lang(zh_sc),.TimeBlock__Soon[data-v-461f5ae9]:lang(zh_tc),.TimeBlock__Time[data-v-461f5ae9]:lang(jp),.TimeBlock__Time[data-v-461f5ae9]:lang(kr),.TimeBlock__Time[data-v-461f5ae9]:lang(pl),.TimeBlock__Time[data-v-461f5ae9]:lang(ru),.TimeBlock__Time[data-v-461f5ae9]:lang(tr),.TimeBlock__Time[data-v-461f5ae9]:lang(zh_sc),.TimeBlock__Time[data-v-461f5ae9]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}@media(min-width:46em){.TimeBlock__Soon[data-v-461f5ae9],.TimeBlock__Time[data-v-461f5ae9]{font-size:30px;line-height:30px}}.TimeBlock__Soon--regularSeason[data-v-461f5ae9],.TimeBlock__Time--regularSeason[data-v-461f5ae9]{color:#63211d}.TimeBlock__Label[data-v-461f5ae9]{text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;text-transform:uppercase;font-size:10px;color:#ee6d65;text-shadow:unset}.TimeBlock__Label[data-v-461f5ae9]:lang(jp),.TimeBlock__Label[data-v-461f5ae9]:lang(kr),.TimeBlock__Label[data-v-461f5ae9]:lang(pl),.TimeBlock__Label[data-v-461f5ae9]:lang(ru),.TimeBlock__Label[data-v-461f5ae9]:lang(tr),.TimeBlock__Label[data-v-461f5ae9]:lang(zh_sc),.TimeBlock__Label[data-v-461f5ae9]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}@media(min-width:112.5em){.TimeBlock__Label[data-v-461f5ae9]{text-shadow:-1.5px -1.5px 0 #040404,0 -1.5px 0 #040404,1.5px -1.5px 0 #040404,1.5px 0 0 #040404,1.5px 1.5px 0 #040404,0 1.5px 0 #040404,-1.5px 1.5px 0 #040404,-1.5px 0 0 #040404,0 3px 0 #040404,-1.5px 3px 0 #040404,1.5px 3px 0 #040404;font-size:16px}}.TimeBlock--finished[data-v-461f5ae9],.TimeBlock--soon[data-v-461f5ae9]{width:unset}', ""]),
        n.locals = {},
        e.exports = n
    },
    1073: function(e, t, a) {
        "use strict";
        a.r(t);
        a(146),
        a(43),
        a(21),
        a(65),
        a(33);
        var n = a(0)
          , i = a(1084);
        function o(e) {
            var t = e.getTime() - (new Date).getTime();
            return {
                total: t,
                seconds: Math.max(Math.floor(t / 1e3 % 60), 0),
                minutes: Math.max(Math.floor(t / 1e3 / 60 % 60), 0),
                hours: Math.max(Math.floor(t / 36e5 % 24), 0),
                days: Math.max(Math.floor(t / 864e5), 0)
            }
        }
        var s = n.default.extend({
            name: "Timer",
            components: {
                TimeBlock: i.default
            },
            props: {
                startDateTime: {
                    type: Date,
                    required: !0
                },
                finishedEvent: {
                    type: Boolean,
                    default: !1
                },
                regularSeason: Boolean
            },
            data: function() {
                return {
                    timeRemaining: o(this.startDateTime),
                    tickHandle: void 0
                }
            },
            computed: {
                showDateTag: function() {
                    return this.timeRemaining.days > 1 && !this.finishedEvent
                },
                dateTime: function() {
                    var e = new Date(this.startDateTime)
                      , t = "zh_sc" === this.$i18n.locale ? "zh-CN" : "zh_tc" === this.$i18n.locale ? "zh-TW" : "en" === this.$i18n.locale ? "en-GB" : this.$i18n.locale;
                    return {
                        date: e.getDate(),
                        month: this.$dateFns.format(e, "LLL", {
                            locale: t
                        }),
                        hours: e.getHours(),
                        minutes: this.$dateFns.format(e, "mm")
                    }
                },
                timeZone: function() {
                    return (new Date).toTimeString().split("(")[1].split(" ").map((function(e) {
                        return e.charAt(0)
                    }
                    )).join("")
                }
            },
            mounted: function() {
                var e = this;
                this.tickHandle = setInterval((function() {
                    e.timeRemaining = o(e.startDateTime)
                }
                ), 1e3)
            },
            beforeDestroy: function() {
                clearInterval(this.tickHandle)
            }
        })
          , r = (a(1088),
        a(1))
          , l = Object(r.a)(s, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return e.showDateTag ? a("div", {
                staticClass: "Timer"
            }, [a("TimeBlock", {
                attrs: {
                    time: "" + e.dateTime.date,
                    label: e.dateTime.month,
                    "regular-season": ""
                }
            }), e._v(" "), a("TimeBlock", {
                attrs: {
                    time: e.dateTime.hours + ":" + e.dateTime.minutes,
                    label: e.timeZone,
                    "regular-season": ""
                }
            })], 1) : e.finishedEvent ? a("div", {
                staticClass: "Timer"
            }, [a("TimeBlock", {
                attrs: {
                    finished: "",
                    "regular-season": ""
                }
            })], 1) : e.timeRemaining.total >= 0 ? a("div", {
                staticClass: "Timer"
            }, [e.timeRemaining.days > 0 ? a("TimeBlock", {
                attrs: {
                    time: "" + e.timeRemaining.days,
                    label: e.$t("time_days"),
                    "regular-season": ""
                }
            }) : e._e(), e._v(" "), a("TimeBlock", {
                attrs: {
                    time: "" + e.timeRemaining.hours,
                    label: e.$t("time_hours"),
                    "regular-season": ""
                }
            }), e._v(" "), a("TimeBlock", {
                attrs: {
                    time: "" + e.timeRemaining.minutes,
                    label: e.$t("time_mins"),
                    "regular-season": ""
                }
            }), e._v(" "), a("TimeBlock", {
                attrs: {
                    time: "" + e.timeRemaining.seconds,
                    label: e.$t("time_secs"),
                    "regular-season": ""
                }
            })], 1) : a("div", {
                staticClass: "Timer"
            }, [a("TimeBlock", {
                attrs: {
                    soon: "",
                    "regular-season": ""
                }
            })], 1)
        }
        ), [], !1, null, "2da94193", null);
        t.default = l.exports
    },
    1084: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a(0).default.extend({
            name: "TimeBlock",
            props: {
                time: {
                    type: String,
                    default: "0"
                },
                label: {
                    type: String,
                    default: String
                },
                soon: Boolean,
                finished: Boolean,
                regularSeason: Boolean
            },
            computed: {
                formattedTime: function() {
                    return parseInt(this.time) < 10 ? "0".concat(this.time) : this.time
                }
            }
        })
          , i = (a(1062),
        a(1))
          , o = Object(i.a)(n, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        finished: e.$props.finished,
                        soon: e.$props.soon
                    },
                    expression: "{\n    finished: $props.finished,\n    soon: $props.soon,\n  }"
                }],
                staticClass: "TimeBlock"
            }, [e.soon ? a("span", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        regularSeason: e.$props.regularSeason
                    },
                    expression: "{\n      regularSeason: $props.regularSeason\n\n    }"
                }],
                staticClass: "TimeBlock__Soon"
            }, [e._v("\n    " + e._s(e.$t("time_soon")) + "\n  ")]) : e._e(), e._v(" "), e.finished ? a("span", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        regularSeason: e.$props.regularSeason
                    },
                    expression: "{\n      regularSeason: $props.regularSeason\n\n    }"
                }],
                staticClass: "TimeBlock__Soon"
            }, [e._v("\n    " + e._s(e.$t("gen_finished")) + "\n  ")]) : e._e(), e._v(" "), e.soon || e.finished ? e._e() : a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        regularSeason: e.$props.regularSeason
                    },
                    expression: "{\n      regularSeason: $props.regularSeason\n\n    }"
                }],
                staticClass: "TimeBlock__Time"
            }, [e._v("\n    " + e._s(e.formattedTime) + "\n  ")]), e._v(" "), e.soon || e.finished ? e._e() : a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        regularSeason: e.$props.regularSeason
                    },
                    expression: "{\n      regularSeason: $props.regularSeason\n\n    }"
                }],
                staticClass: "TimeBlock__Label"
            }, [e._v("\n    " + e._s(e.label) + "\n  ")])])
        }
        ), [], !1, null, "461f5ae9", null);
        t.default = o.exports
    },
    1088: function(e, t, a) {
        "use strict";
        a(1053)
    },
    1089: function(e, t, a) {
        var n = a(7)((function(e) {
            return e[1]
        }
        ));
        n.push([e.i, ".Timer[data-v-2da94193]{display:flex}", ""]),
        n.locals = {},
        e.exports = n
    },
    1109: function(e, t, a) {
        var n = a(1172);
        n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
        (0,
        a(8).default)("051df21b", n, !0, {
            sourceMap: !1
        })
    },
    1143: function(e, t, a) {
        "use strict";
        a(10),
        a(32);
        var n, i, o = a(0), s = a(1075), r = a(1235), l = a(37), d = a(308);
        !function(e) {
            e.None = "",
            e.Global = "global",
            e.Nalatamn = "nalatamn",
            e.Latams = "latams",
            e.Emea = "emea",
            e.Eastasia = "eastasia",
            e.Sesaanz = "sesaanz",
            e.Eeca = "eeca"
        }(n || (n = {})),
        function(e) {
            e.None = "",
            e.Global = "Global",
            e.Nalatamn = "NA & LATAM N",
            e.Latams = "LATAM S",
            e.Emea = "EMEA",
            e.Eastasia = "East Asia",
            e.Sesaanz = "SESA & ANZ",
            e.Eeca = "EECA"
        }(i || (i = {}));
        var c = a(1212)
          , u = o.default.extend({
            name: "CarouselSlide",
            components: {
                RectangleButton: l.default,
                CountdownAndVideo: r.default
            },
            mixins: [d.a],
            props: {
                activeSlide: {
                    type: Boolean,
                    default: !1
                },
                eventInfo: {
                    type: Object,
                    required: !0
                },
                upcomingEventId: {
                    type: String,
                    default: void 0
                }
            },
            computed: {
                finishedEvent: function() {
                    var e = this.eventInfo
                      , t = !(e.status !== c.a.Active || null !== this.$accessor.global.eventId);
                    return e.status === c.a.Reset || e.status === c.a.Finished || e.status === c.a.Resetting || t
                },
                videoService: function() {
                    return s.b.YOUTUBE
                },
                startDateTime: function() {
                    var e = this.eventInfo.dayStartTime;
                    return new Date(e)
                },
                hasSchedule: function() {
                    var e = this;
                    return this.$accessor.bracket.schedule.some((function(t) {
                        return t.eventId === e.eventInfo.eventId
                    }
                    ))
                },
                showScheduleBtn: function() {
                    return this.activeSlide && this.hasSchedule && !this.finishedEvent
                },
                showTrailer: function() {
                    return this.eventInfo.eventId === this.upcomingEventId && this.eventInfo.status !== c.a.Finished && null !== this.$accessor.global.eventId
                },
                icalLink: function() {
                    return "".concat(window.location.origin, "/").concat(this.eventInfo.eventId, ".ics")
                },
                regionLabel: function() {
                    switch (this.eventInfo.region) {
                    case n.Latams:
                        return a(1252);
                    case n.Nalatamn:
                        return a(1253);
                    case n.Emea:
                        return a(1254);
                    case n.Eastasia:
                        return a(1255);
                    case n.Sesaanz:
                        return a(1256);
                    case n.Eeca:
                        return a(1257);
                    default:
                        return ""
                    }
                },
                streamVODoptions: function() {
                    var e = this.$i18n.locale;
                    return this.$accessor.global.eventVODStreams(this.eventInfo.eventId, e)
                },
                showStreamModal: function() {
                    return !!(this.streamVODoptions && this.streamVODoptions.length > 1)
                }
            },
            methods: {
                trackScheduleClick: function() {
                    var e = this.localePath({
                        path: "/schedule/".concat(this.eventInfo.eventId)
                    });
                    this.gaEvent("View Schedule", e),
                    this.$router.push({
                        path: e
                    })
                },
                trackICalClick: function() {
                    this.gaEvent("Download ICal Event", "/brawlStarsWorldFinals.ics")
                },
                openVODModal: function() {
                    this.$emit("openVodMOdal", this.eventInfo.eventId)
                }
            }
        })
          , m = (a(1258),
        a(1))
          , p = Object(m.a)(u, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "carousel-slide"
            }, [e.regionLabel ? a("div", {
                staticClass: "carousel-slide__region-label"
            }, [a("img", {
                staticClass: "Reward__content__iconcontainer",
                attrs: {
                    src: e.regionLabel,
                    alt: ""
                }
            })]) : e._e(), e._v(" "), a("CountdownAndVideo", {
                attrs: {
                    "active-slide": e.activeSlide,
                    "show-trailer": e.showTrailer,
                    "start-date-time": e.startDateTime,
                    "video-id": e.eventInfo.teaserVideo,
                    "video-service": e.videoService,
                    "event-status": e.eventInfo.status,
                    "event-id": e.eventInfo.eventId,
                    region: e.eventInfo.region,
                    "finished-event": e.finishedEvent,
                    "regular-season": ""
                }
            }), e._v(" "), a("h2", {
                staticClass: "carousel-slide__header"
            }, [e._v(e._s(e.$t(e.eventInfo.eventId + "_title")))]), e._v(" "), a("div", {
                staticClass: "carousel-slide__button-container"
            }, [!e.finishedEvent && e.activeSlide ? a("RectangleButton", {
                staticClass: "CountdownSection__Content__button",
                attrs: {
                    color: "peach",
                    strech: "",
                    download: "",
                    href: e.icalLink
                },
                on: {
                    "on-click": e.trackICalClick
                }
            }, [e._v("\n      " + e._s(e.$t("pre_cd_remind")) + "\n    ")]) : e._e(), e._v(" "), e.showScheduleBtn ? a("RectangleButton", {
                staticClass: "CountdownSection__Content__button",
                attrs: {
                    color: "dark",
                    strech: "",
                    to: "/schedule/" + e.eventInfo.eventId
                },
                on: {
                    "on-click": e.trackScheduleClick
                }
            }, [e._v("\n      " + e._s(e.$t("pre_cd_view_schedule")) + "\n    ")]) : e._e(), e._v(" "), e.finishedEvent && e.activeSlide && e.showStreamModal ? a("RectangleButton", {
                staticClass: "CountdownSection__Content__button",
                attrs: {
                    color: "peach",
                    slanted: "",
                    strech: ""
                },
                nativeOn: {
                    click: function(t) {
                        return e.openVODModal.apply(null, arguments)
                    }
                }
            }, [e._v("\n      " + e._s(e.$t("post_winner_cta")) + "\n    ")]) : void 0 !== e.streamVODoptions && e.finishedEvent && e.activeSlide ? a("RectangleButton", {
                staticClass: "CountdownSection__Content__button",
                attrs: {
                    color: "peach",
                    slanted: "",
                    strech: "",
                    target: "_blank",
                    to: e.streamVODoptions[0].vodId
                }
            }, [e._v("\n      " + e._s(e.$t("post_winner_cta")) + "\n    ")]) : e._e()], 1)], 1)
        }
        ), [], !1, null, "b0e31c84", null);
        t.a = p.exports
    },
    1171: function(e, t, a) {
        "use strict";
        a(1109)
    },
    1172: function(e, t, a) {
        var n = a(7)((function(e) {
            return e[1]
        }
        ));
        n.push([e.i, ".CountdownAndVideo[data-v-6e4bd12b]{position:relative;border:3px solid #3f197c;background-color:#a88ae9;padding:0 6px 6px}@media(min-width:46em){.CountdownAndVideo[data-v-6e4bd12b]{padding:0 12px 12px}}.CountdownAndVideo--regularSeason[data-v-6e4bd12b]{border:3px solid #63211d;background-color:#f38c86}.CountdownAndVideo__ImageContainer[data-v-6e4bd12b],.CountdownAndVideo__VideoContainer[data-v-6e4bd12b]{border:3px solid #040404;margin-top:-6px;position:relative}@media(min-width:46em){.CountdownAndVideo__ImageContainer[data-v-6e4bd12b],.CountdownAndVideo__VideoContainer[data-v-6e4bd12b]{margin-top:-12px}}.CountdownAndVideo__ImageContainer__timer[data-v-6e4bd12b],.CountdownAndVideo__VideoContainer__timer[data-v-6e4bd12b]{position:absolute;left:50%;transform:translateX(-50%);bottom:-25px}.CountdownAndVideo__Image[data-v-6e4bd12b]{aspect-ratio:16/9}.CountdownAndVideo__Image img[data-v-6e4bd12b],.CountdownAndVideo__Image source[data-v-6e4bd12b]{width:100%;height:100%;margin-bottom:-4px}", ""]),
        n.locals = {},
        e.exports = n
    },
    1173: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, "Default", (function() {
            return i
        }
        ));
        a(28);
        var n = a(1143);
        t.default = {
            component: n.a,
            title: "Components/Carousel/CarouselSlide",
            args: {},
            argTypes: {}
        };
        var i = function(e, t) {
            var a = t.argTypes;
            return {
                components: {
                    CarouselSlide: n.a
                },
                props: Object.keys(a),
                template: '<CarouselSlide v-bind="$props" />'
            }
        }
        .bind({})
    },
    1212: function(e, t, a) {
        "use strict";
        var n, i;
        a.d(t, "a", (function() {
            return n
        }
        )),
        function(e) {
            e.Hidden = "hidden",
            e.Published = "published",
            e.Active = "active",
            e.Reset = "reset",
            e.Resetting = "resetting",
            e.Finished = "finished",
            e.Archived = "archived"
        }(n || (n = {})),
        function(e) {
            e.Hidden = "Hidden - event is not set up correctly yet and is not visible in frontend",
            e.Published = "Published - event is set up correctly (event & match settings, streams & cards) and is visible in frontend",
            e.Active = "Active - event is ongoing or will soon start",
            e.Reset = "Reset - event is done & I want to set another event as Active or just finish this event",
            e.Resetting = "Resetting - event is done and the reset process is in progress",
            e.Finished = "Finished - event is done and reset is complete. Event is still visible in frontend",
            e.Archived = "Archived - event is done and should no longer be visible in frontend"
        }(i || (i = {}))
    },
    1213: function(e, t, a) {
        var n = a(1259);
        n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
        (0,
        a(8).default)("3d93ffe4", n, !0, {
            sourceMap: !1
        })
    },
    1235: function(e, t, a) {
        "use strict";
        a.r(t);
        a(32);
        var n = a(0)
          , i = a(1096)
          , o = a(1073)
          , s = n.default.extend({
            name: "CountdownAndVideo",
            components: {
                Video: i.default,
                Timer: o.default
            },
            props: {
                activeSlide: {
                    type: Boolean,
                    default: !1
                },
                finishedEvent: {
                    type: Boolean,
                    default: !1
                },
                showTrailer: {
                    type: Boolean,
                    default: !1
                },
                startDateTime: {
                    type: Date,
                    required: !0
                },
                videoId: {
                    type: String,
                    required: !0
                },
                videoService: {
                    type: String,
                    required: !0
                },
                regularSeason: Boolean,
                region: {
                    type: String,
                    required: !0
                },
                eventId: {
                    type: String,
                    required: !0
                }
            },
            computed: {
                imgJPG: function() {
                    return "".concat(this.$config.assetsUrl, "/events/images/").concat(this.eventId, ".jpg")
                },
                imgAVIF: function() {
                    return "".concat(this.$config.assetsUrl, "/events/images/").concat(this.eventId, ".avif")
                },
                imgWebP: function() {
                    return "".concat(this.$config.assetsUrl, "/events/images/").concat(this.eventId, ".webp")
                }
            }
        })
          , r = (a(1171),
        a(1))
          , l = Object(r.a)(s, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        regularSeason: e.$props.regularSeason
                    },
                    expression: "{\n    regularSeason: $props.regularSeason,\n  }"
                }],
                staticClass: "CountdownAndVideo"
            }, [e.showTrailer ? a("div", {
                staticClass: "CountdownAndVideo__VideoContainer"
            }, [a("Video", {
                attrs: {
                    "video-id": e.videoId,
                    service: e.videoService,
                    "auto-play": "",
                    "only-mute-control": "",
                    loop: ""
                }
            })], 1) : a("div", {
                staticClass: "CountdownAndVideo__ImageContainer"
            }, [a("picture", {
                staticClass: "CountdownAndVideo__Image"
            }, [a("source", {
                attrs: {
                    type: "image/avif",
                    srcset: e.imgAVIF
                }
            }), e._v(" "), a("source", {
                attrs: {
                    type: "image/webp",
                    srcset: e.imgWebP
                }
            }), e._v(" "), a("img", {
                attrs: {
                    src: e.imgJPG,
                    alt: "winning team",
                    width: "420",
                    height: "270",
                    decoding: "async",
                    loading: "lazy"
                }
            })])]), e._v(" "), e.activeSlide ? a("Timer", {
                staticClass: "CountdownAndVideo__VideoContainer__timer",
                attrs: {
                    "start-date-time": e.startDateTime,
                    "regular-season": "",
                    "finished-event": e.finishedEvent
                }
            }) : e._e()], 1)
        }
        ), [], !1, null, "6e4bd12b", null);
        t.default = l.exports;
        installComponents(l, {
            Video: a(1096).default,
            Timer: a(1073).default
        })
    },
    1252: function(e, t, a) {
        e.exports = a.p + "img/lat_ams.8cf0200.svg"
    },
    1253: function(e, t, a) {
        e.exports = a.p + "img/na_latam_n.b9b86b9.svg"
    },
    1254: function(e, t, a) {
        e.exports = a.p + "img/emea.0c2d8d2.svg"
    },
    1255: function(e, t, a) {
        e.exports = a.p + "img/east_asia.2577f65.svg"
    },
    1256: function(e, t, a) {
        e.exports = a.p + "img/sesa_anz.4286c64.svg"
    },
    1257: function(e, t, a) {
        e.exports = a.p + "img/eeca.803d315.svg"
    },
    1258: function(e, t, a) {
        "use strict";
        a(1213)
    },
    1259: function(e, t, a) {
        var n = a(7)((function(e) {
            return e[1]
        }
        ));
        n.push([e.i, '[data-v-b0e31c84] .baseModal{position:absolute}.carousel-slide[data-v-b0e31c84]{display:flex;flex-direction:column;padding-top:12px;position:relative}.carousel-slide__region-label[data-v-b0e31c84]{position:absolute;z-index:1;width:100px;left:50%;transform:translateX(-50%);top:-20px}.carousel-slide__region-label img[data-v-b0e31c84]{width:100%;height:auto}@media(min-width:46em){.carousel-slide__region-label[data-v-b0e31c84]{width:120px}}.carousel-slide__header[data-v-b0e31c84]{text-shadow:-2px -2px 0 #040404,0 -2px 0 #040404,2px -2px 0 #040404,2px 0 0 #040404,2px 2px 0 #040404,0 2px 0 #040404,-2px 2px 0 #040404,-2px 0 0 #040404,0 3.5px 0 #040404,-2px 3.5px 0 #040404,2px 3.5px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;text-transform:uppercase;font-size:24px;text-align:center;max-width:450px;margin:36px auto 10px}.carousel-slide__header[data-v-b0e31c84]:lang(jp),.carousel-slide__header[data-v-b0e31c84]:lang(kr),.carousel-slide__header[data-v-b0e31c84]:lang(pl),.carousel-slide__header[data-v-b0e31c84]:lang(ru),.carousel-slide__header[data-v-b0e31c84]:lang(tr),.carousel-slide__header[data-v-b0e31c84]:lang(zh_sc),.carousel-slide__header[data-v-b0e31c84]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}@media(min-width:46em){.carousel-slide__header[data-v-b0e31c84]{text-shadow:-2px -2px 0 #040404,0 -2px 0 #040404,2px -2px 0 #040404,2px 0 0 #040404,2px 2px 0 #040404,0 2px 0 #040404,-2px 2px 0 #040404,-2px 0 0 #040404,0 3.5px 0 #040404,-2px 3.5px 0 #040404,2px 3.5px 0 #040404;color:#fff;font-weight:400;font-family:"Lilita One",sans-serif;text-transform:none;text-transform:uppercase;font-size:34px;margin-top:53px;margin-bottom:32px}.carousel-slide__header[data-v-b0e31c84]:lang(jp),.carousel-slide__header[data-v-b0e31c84]:lang(kr),.carousel-slide__header[data-v-b0e31c84]:lang(pl),.carousel-slide__header[data-v-b0e31c84]:lang(ru),.carousel-slide__header[data-v-b0e31c84]:lang(tr),.carousel-slide__header[data-v-b0e31c84]:lang(zh_sc),.carousel-slide__header[data-v-b0e31c84]:lang(zh_tc){font-family:"NotoSans",sans-serif;font-weight:700}}.carousel-slide__button-container[data-v-b0e31c84]{display:flex;flex-direction:column;align-items:center}@media(min-width:46em){.carousel-slide__button-container a[data-v-b0e31c84],.carousel-slide__button-container button[data-v-b0e31c84]{margin:0 12px}}.carousel-slide__button-container a[data-v-b0e31c84]:first-child,.carousel-slide__button-container button[data-v-b0e31c84]:first-child{margin-bottom:12px}@media(min-width:46em){.carousel-slide__button-container a[data-v-b0e31c84]:first-child,.carousel-slide__button-container button[data-v-b0e31c84]:first-child{margin-bottom:0}}@media(min-width:46em){.carousel-slide__button-container[data-v-b0e31c84]{flex-direction:row;justify-content:center}}', ""]),
        n.locals = {},
        e.exports = n
    }
}]);
