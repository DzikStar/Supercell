(window.webpackJsonp = window.webpackJsonp || []).push([[67], {
    1025: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = d(a(1330))
          , r = d(a(1331))
          , i = d(a(1332))
          , o = d(a(1333))
          , u = d(a(1334));
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = {
            code: "de",
            formatDistance: n.default,
            formatLong: r.default,
            formatRelative: i.default,
            localize: o.default,
            match: u.default,
            options: {
                weekStartsOn: 1,
                firstWeekContainsDate: 4
            }
        };
        t.default = s,
        e.exports = t.default
    },
    1038: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , a = t.width ? String(t.width) : e.defaultWidth
                  , n = e.formats[a] || e.formats[e.defaultWidth];
                return n
            }
        }
        ,
        e.exports = t.default
    },
    1039: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return function(t, a) {
                var n, r = a || {};
                if ("formatting" === (r.context ? String(r.context) : "standalone") && e.formattingValues) {
                    var i = e.defaultFormattingWidth || e.defaultWidth
                      , o = r.width ? String(r.width) : i;
                    n = e.formattingValues[o] || e.formattingValues[i]
                } else {
                    var u = e.defaultWidth
                      , d = r.width ? String(r.width) : e.defaultWidth;
                    n = e.values[d] || e.values[u]
                }
                return n[e.argumentCallback ? e.argumentCallback(t) : t]
            }
        }
        ,
        e.exports = t.default
    },
    1040: function(e, t, a) {
        "use strict";
        function n(e, t) {
            for (var a in e)
                if (e.hasOwnProperty(a) && t(e[a]))
                    return a
        }
        function r(e, t) {
            for (var a = 0; a < e.length; a++)
                if (t(e[a]))
                    return a
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return function(t) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = a.width
                  , o = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth]
                  , u = t.match(o);
                if (!u)
                    return null;
                var d, s = u[0], l = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth], h = Array.isArray(l) ? r(l, (function(e) {
                    return e.test(s)
                }
                )) : n(l, (function(e) {
                    return e.test(s)
                }
                ));
                d = e.valueCallback ? e.valueCallback(h) : h,
                d = a.valueCallback ? a.valueCallback(d) : d;
                var c = t.slice(s.length);
                return {
                    value: d,
                    rest: c
                }
            }
        }
        ,
        e.exports = t.default
    },
    1041: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return function(t) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = t.match(e.matchPattern);
                if (!n)
                    return null;
                var r = n[0]
                  , i = t.match(e.parsePattern);
                if (!i)
                    return null;
                var o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
                o = a.valueCallback ? a.valueCallback(o) : o;
                var u = t.slice(r.length);
                return {
                    value: o,
                    rest: u
                }
            }
        }
        ,
        e.exports = t.default
    },
    1330: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = {
            lessThanXSeconds: {
                standalone: {
                    one: "weniger als 1 Sekunde",
                    other: "weniger als {{count}} Sekunden"
                },
                withPreposition: {
                    one: "weniger als 1 Sekunde",
                    other: "weniger als {{count}} Sekunden"
                }
            },
            xSeconds: {
                standalone: {
                    one: "1 Sekunde",
                    other: "{{count}} Sekunden"
                },
                withPreposition: {
                    one: "1 Sekunde",
                    other: "{{count}} Sekunden"
                }
            },
            halfAMinute: {
                standalone: "halbe Minute",
                withPreposition: "halben Minute"
            },
            lessThanXMinutes: {
                standalone: {
                    one: "weniger als 1 Minute",
                    other: "weniger als {{count}} Minuten"
                },
                withPreposition: {
                    one: "weniger als 1 Minute",
                    other: "weniger als {{count}} Minuten"
                }
            },
            xMinutes: {
                standalone: {
                    one: "1 Minute",
                    other: "{{count}} Minuten"
                },
                withPreposition: {
                    one: "1 Minute",
                    other: "{{count}} Minuten"
                }
            },
            aboutXHours: {
                standalone: {
                    one: "etwa 1 Stunde",
                    other: "etwa {{count}} Stunden"
                },
                withPreposition: {
                    one: "etwa 1 Stunde",
                    other: "etwa {{count}} Stunden"
                }
            },
            xHours: {
                standalone: {
                    one: "1 Stunde",
                    other: "{{count}} Stunden"
                },
                withPreposition: {
                    one: "1 Stunde",
                    other: "{{count}} Stunden"
                }
            },
            xDays: {
                standalone: {
                    one: "1 Tag",
                    other: "{{count}} Tage"
                },
                withPreposition: {
                    one: "1 Tag",
                    other: "{{count}} Tagen"
                }
            },
            aboutXWeeks: {
                standalone: {
                    one: "etwa 1 Woche",
                    other: "etwa {{count}} Wochen"
                },
                withPreposition: {
                    one: "etwa 1 Woche",
                    other: "etwa {{count}} Wochen"
                }
            },
            xWeeks: {
                standalone: {
                    one: "1 Woche",
                    other: "{{count}} Wochen"
                },
                withPreposition: {
                    one: "1 Woche",
                    other: "{{count}} Wochen"
                }
            },
            aboutXMonths: {
                standalone: {
                    one: "etwa 1 Monat",
                    other: "etwa {{count}} Monate"
                },
                withPreposition: {
                    one: "etwa 1 Monat",
                    other: "etwa {{count}} Monaten"
                }
            },
            xMonths: {
                standalone: {
                    one: "1 Monat",
                    other: "{{count}} Monate"
                },
                withPreposition: {
                    one: "1 Monat",
                    other: "{{count}} Monaten"
                }
            },
            aboutXYears: {
                standalone: {
                    one: "etwa 1 Jahr",
                    other: "etwa {{count}} Jahre"
                },
                withPreposition: {
                    one: "etwa 1 Jahr",
                    other: "etwa {{count}} Jahren"
                }
            },
            xYears: {
                standalone: {
                    one: "1 Jahr",
                    other: "{{count}} Jahre"
                },
                withPreposition: {
                    one: "1 Jahr",
                    other: "{{count}} Jahren"
                }
            },
            overXYears: {
                standalone: {
                    one: "mehr als 1 Jahr",
                    other: "mehr als {{count}} Jahre"
                },
                withPreposition: {
                    one: "mehr als 1 Jahr",
                    other: "mehr als {{count}} Jahren"
                }
            },
            almostXYears: {
                standalone: {
                    one: "fast 1 Jahr",
                    other: "fast {{count}} Jahre"
                },
                withPreposition: {
                    one: "fast 1 Jahr",
                    other: "fast {{count}} Jahren"
                }
            }
        }
          , r = function(e, t, a) {
            var r, i = null != a && a.addSuffix ? n[e].withPreposition : n[e].standalone;
            return r = "string" == typeof i ? i : 1 === t ? i.one : i.other.replace("{{count}}", String(t)),
            null != a && a.addSuffix ? a.comparison && a.comparison > 0 ? "in " + r : "vor " + r : r
        };
        t.default = r,
        e.exports = t.default
    },
    1331: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n, r = (n = a(1038)) && n.__esModule ? n : {
            default: n
        };
        var i = {
            date: (0,
            r.default)({
                formats: {
                    full: "EEEE, do MMMM y",
                    long: "do MMMM y",
                    medium: "do MMM y",
                    short: "dd.MM.y"
                },
                defaultWidth: "full"
            }),
            time: (0,
            r.default)({
                formats: {
                    full: "HH:mm:ss zzzz",
                    long: "HH:mm:ss z",
                    medium: "HH:mm:ss",
                    short: "HH:mm"
                },
                defaultWidth: "full"
            }),
            dateTime: (0,
            r.default)({
                formats: {
                    full: "{{date}} 'um' {{time}}",
                    long: "{{date}} 'um' {{time}}",
                    medium: "{{date}} {{time}}",
                    short: "{{date}} {{time}}"
                },
                defaultWidth: "full"
            })
        };
        t.default = i,
        e.exports = t.default
    },
    1332: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = {
            lastWeek: "'letzten' eeee 'um' p",
            yesterday: "'gestern um' p",
            today: "'heute um' p",
            tomorrow: "'morgen um' p",
            nextWeek: "eeee 'um' p",
            other: "P"
        }
          , r = function(e, t, a, r) {
            return n[e]
        };
        t.default = r,
        e.exports = t.default
    },
    1333: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n, r = (n = a(1039)) && n.__esModule ? n : {
            default: n
        };
        var i = {
            narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            abbreviated: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            wide: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
        }
          , o = {
            narrow: i.narrow,
            abbreviated: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
            wide: i.wide
        }
          , u = {
            ordinalNumber: function(e) {
                return Number(e) + "."
            },
            era: (0,
            r.default)({
                values: {
                    narrow: ["v.Chr.", "n.Chr."],
                    abbreviated: ["v.Chr.", "n.Chr."],
                    wide: ["vor Christus", "nach Christus"]
                },
                defaultWidth: "wide"
            }),
            quarter: (0,
            r.default)({
                values: {
                    narrow: ["1", "2", "3", "4"],
                    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                    wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]
                },
                defaultWidth: "wide",
                argumentCallback: function(e) {
                    return e - 1
                }
            }),
            month: (0,
            r.default)({
                values: i,
                formattingValues: o,
                defaultWidth: "wide"
            }),
            day: (0,
            r.default)({
                values: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                    abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    wide: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                defaultWidth: "wide"
            }),
            dayPeriod: (0,
            r.default)({
                values: {
                    narrow: {
                        am: "vm.",
                        pm: "nm.",
                        midnight: "Mitternacht",
                        noon: "Mittag",
                        morning: "Morgen",
                        afternoon: "Nachm.",
                        evening: "Abend",
                        night: "Nacht"
                    },
                    abbreviated: {
                        am: "vorm.",
                        pm: "nachm.",
                        midnight: "Mitternacht",
                        noon: "Mittag",
                        morning: "Morgen",
                        afternoon: "Nachmittag",
                        evening: "Abend",
                        night: "Nacht"
                    },
                    wide: {
                        am: "vormittags",
                        pm: "nachmittags",
                        midnight: "Mitternacht",
                        noon: "Mittag",
                        morning: "Morgen",
                        afternoon: "Nachmittag",
                        evening: "Abend",
                        night: "Nacht"
                    }
                },
                defaultWidth: "wide",
                formattingValues: {
                    narrow: {
                        am: "vm.",
                        pm: "nm.",
                        midnight: "Mitternacht",
                        noon: "Mittag",
                        morning: "morgens",
                        afternoon: "nachm.",
                        evening: "abends",
                        night: "nachts"
                    },
                    abbreviated: {
                        am: "vorm.",
                        pm: "nachm.",
                        midnight: "Mitternacht",
                        noon: "Mittag",
                        morning: "morgens",
                        afternoon: "nachmittags",
                        evening: "abends",
                        night: "nachts"
                    },
                    wide: {
                        am: "vormittags",
                        pm: "nachmittags",
                        midnight: "Mitternacht",
                        noon: "Mittag",
                        morning: "morgens",
                        afternoon: "nachmittags",
                        evening: "abends",
                        night: "nachts"
                    }
                },
                defaultFormattingWidth: "wide"
            })
        };
        t.default = u,
        e.exports = t.default
    },
    1334: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = r(a(1040));
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = {
            ordinalNumber: (0,
            r(a(1041)).default)({
                matchPattern: /^(\d+)(\.)?/i,
                parsePattern: /\d+/i,
                valueCallback: function(e) {
                    return parseInt(e)
                }
            }),
            era: (0,
            n.default)({
                matchPatterns: {
                    narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
                    abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
                    wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    any: [/^v/i, /^n/i]
                },
                defaultParseWidth: "any"
            }),
            quarter: (0,
            n.default)({
                matchPatterns: {
                    narrow: /^[1234]/i,
                    abbreviated: /^q[1234]/i,
                    wide: /^[1234](\.)? Quartal/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    any: [/1/i, /2/i, /3/i, /4/i]
                },
                defaultParseWidth: "any",
                valueCallback: function(e) {
                    return e + 1
                }
            }),
            month: (0,
            n.default)({
                matchPatterns: {
                    narrow: /^[jfmasond]/i,
                    abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
                    wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                    any: [/^j[aä]/i, /^f/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
                },
                defaultParseWidth: "any"
            }),
            day: (0,
            n.default)({
                matchPatterns: {
                    narrow: /^[smdmf]/i,
                    short: /^(so|mo|di|mi|do|fr|sa)/i,
                    abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
                    wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]
                },
                defaultParseWidth: "any"
            }),
            dayPeriod: (0,
            n.default)({
                matchPatterns: {
                    narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
                    abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
                    wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    any: {
                        am: /^v/i,
                        pm: /^n/i,
                        midnight: /^Mitte/i,
                        noon: /^Mitta/i,
                        morning: /morgens/i,
                        afternoon: /nachmittags/i,
                        evening: /abends/i,
                        night: /nachts/i
                    }
                },
                defaultParseWidth: "any"
            })
        };
        t.default = i,
        e.exports = t.default
    }
}]);
