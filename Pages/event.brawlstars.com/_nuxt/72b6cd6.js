(window.webpackJsonp = window.webpackJsonp || []).push([[62], {
    1316: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return b
        }
        ));
        var n, i, o, s, a, l, c, u = r(42), f = (r(10),
        function() {
            return "undefined" != typeof window
        }
        ), p = function() {
            return n || f() && (n = window.gsap) && n.registerPlugin && n
        }, d = function(e) {
            return "string" == typeof e
        }, g = function(e) {
            return "function" == typeof e
        }, h = function(e, t) {
            var r = "x" === t ? "Width" : "Height"
              , n = "scroll" + r
              , i = "client" + r;
            return e === o || e === s || e === a ? Math.max(s[n], a[n]) - (o["inner" + r] || s[i] || a[i]) : e[n] - e["offset" + r]
        }, v = function(e, t) {
            var r = "scroll" + ("x" === t ? "Left" : "Top");
            return e === o && (null != e.pageXOffset ? r = "page" + t.toUpperCase() + "Offset" : e = null != s[r] ? s : a),
            function() {
                return e[r]
            }
        }, m = function(e, t) {
            if (!(e = l(e)[0]) || !e.getBoundingClientRect)
                return {
                    x: 0,
                    y: 0
                };
            var r = e.getBoundingClientRect()
              , n = !t || t === o || t === a
              , i = n ? {
                top: s.clientTop - (o.pageYOffset || s.scrollTop || a.scrollTop || 0),
                left: s.clientLeft - (o.pageXOffset || s.scrollLeft || a.scrollLeft || 0)
            } : t.getBoundingClientRect()
              , c = {
                x: r.left - i.left,
                y: r.top - i.top
            };
            return !n && t && (c.x += v(t, "x")(),
            c.y += v(t, "y")()),
            c
        }, y = function(e, t, r, n, i) {
            return isNaN(e) || "object" === Object(u.a)(e) ? d(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + n - i : "max" === e ? h(t, r) - i : Math.min(h(t, r), m(e, t)[r] - i) : parseFloat(e) - i
        }, x = function() {
            n = p(),
            f() && n && document.body && (o = window,
            a = document.body,
            s = document.documentElement,
            l = n.utils.toArray,
            n.config({
                autoKillThreshold: 7
            }),
            c = n.config(),
            i = 1)
        }, b = {
            version: "3.9.1",
            name: "scrollTo",
            rawVars: 1,
            register: function(e) {
                n = e,
                x()
            },
            init: function(e, t, r, s, a) {
                i || x();
                var l = this
                  , c = n.getProperty(e, "scrollSnapType");
                l.isWin = e === o,
                l.target = e,
                l.tween = r,
                t = function(e, t, r, n) {
                    if (g(e) && (e = e(t, r, n)),
                    "object" !== Object(u.a)(e))
                        return d(e) && "max" !== e && "=" !== e.charAt(1) ? {
                            x: e,
                            y: e
                        } : {
                            y: e
                        };
                    if (e.nodeType)
                        return {
                            y: e,
                            x: e
                        };
                    var i, o = {};
                    for (i in e)
                        o[i] = "onAutoKill" !== i && g(e[i]) ? e[i](t, r, n) : e[i];
                    return o
                }(t, s, e, a),
                l.vars = t,
                l.autoKill = !!t.autoKill,
                l.getX = v(e, "x"),
                l.getY = v(e, "y"),
                l.x = l.xPrev = l.getX(),
                l.y = l.yPrev = l.getY(),
                c && "none" !== c && (l.snap = 1,
                l.snapInline = e.style.scrollSnapType,
                e.style.scrollSnapType = "none"),
                null != t.x ? (l.add(l, "x", l.x, y(t.x, e, "x", l.x, t.offsetX || 0), s, a),
                l._props.push("scrollTo_x")) : l.skipX = 1,
                null != t.y ? (l.add(l, "y", l.y, y(t.y, e, "y", l.y, t.offsetY || 0), s, a),
                l._props.push("scrollTo_y")) : l.skipY = 1
            },
            render: function(e, t) {
                for (var r, n, i, s, a, l = t._pt, u = t.target, f = t.tween, p = t.autoKill, d = t.xPrev, g = t.yPrev, v = t.isWin, m = t.snap, y = t.snapInline; l; )
                    l.r(e, l.d),
                    l = l._next;
                r = v || !t.skipX ? t.getX() : d,
                i = (n = v || !t.skipY ? t.getY() : g) - g,
                s = r - d,
                a = c.autoKillThreshold,
                t.x < 0 && (t.x = 0),
                t.y < 0 && (t.y = 0),
                p && (!t.skipX && (s > a || s < -a) && r < h(u, "x") && (t.skipX = 1),
                !t.skipY && (i > a || i < -a) && n < h(u, "y") && (t.skipY = 1),
                t.skipX && t.skipY && (f.kill(),
                t.vars.onAutoKill && t.vars.onAutoKill.apply(f, t.vars.onAutoKillParams || []))),
                v ? o.scrollTo(t.skipX ? r : t.x, t.skipY ? n : t.y) : (t.skipY || (u.scrollTop = t.y),
                t.skipX || (u.scrollLeft = t.x)),
                !m || 1 !== e && 0 !== e || (n = u.scrollTop,
                r = u.scrollLeft,
                y ? u.style.scrollSnapType = y : u.style.removeProperty("scroll-snap-type"),
                u.scrollTop = n + 1,
                u.scrollLeft = r + 1,
                u.scrollTop = n,
                u.scrollLeft = r),
                t.xPrev = t.x,
                t.yPrev = t.y
            },
            kill: function(e) {
                var t = "scrollTo" === e;
                (t || "scrollTo_x" === e) && (this.skipX = 1),
                (t || "scrollTo_y" === e) && (this.skipY = 1)
            }
        };
        b.max = h,
        b.getOffset = m,
        b.buildGetter = v,
        p() && n.registerPlugin(b)
    },
    1317: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return dt
        }
        ));
        var n, i, o, s, a, l, c, u, f, p, d, g, h, v, m, y, x, b, w, T, k, S, O, C, P, E, _ = r(42), A = (r(183),
        r(56),
        r(10),
        r(24),
        r(21),
        r(65),
        r(43),
        r(32),
        r(82),
        r(121),
        r(30),
        r(33),
        1), M = [], L = [], R = Date.now, B = R(), I = 0, z = 1, N = function(e) {
            return e
        }, X = function(e) {
            return f(e)[0] || (q(e) && !1 !== n.config().nullTargetWarn ? void 0 : null)
        }, Y = function(e) {
            return Math.round(1e5 * e) / 1e5 || 0
        }, W = function() {
            return "undefined" != typeof window
        }, F = function() {
            return n || W() && (n = window.gsap) && n.registerPlugin && n
        }, D = function(e) {
            return !!~c.indexOf(e)
        }, H = function(e, t) {
            return ~M.indexOf(e) && M[M.indexOf(e) + 1][t]
        }, K = function(e, t) {
            var r = t.s
              , n = t.sc
              , i = L.indexOf(e)
              , o = n === we.sc ? 1 : 2;
            return !~i && (i = L.push(e) - 1),
            L[i + o] || (L[i + o] = H(e, r) || (D(e) ? n : function(t) {
                return arguments.length ? e[r] = t : e[r]
            }
            ))
        }, j = function(e) {
            return H(e, "getBoundingClientRect") || (D(e) ? function() {
                return lt.width = o.innerWidth,
                lt.height = o.innerHeight,
                lt
            }
            : function() {
                return Se(e)
            }
            )
        }, V = function(e, t) {
            var r = t.s
              , n = t.d2
              , i = t.d
              , s = t.a;
            return (r = "scroll" + n) && (s = H(e, r)) ? s() - j(e)()[i] : D(e) ? (l[r] || a[r]) - (o["inner" + n] || a["client" + n] || l["client" + n]) : e[r] - e["offset" + n]
        }, U = function(e, t) {
            for (var r = 0; r < w.length; r += 3)
                (!t || ~t.indexOf(w[r + 1])) && e(w[r], w[r + 1], w[r + 2])
        }, q = function(e) {
            return "string" == typeof e
        }, J = function(e) {
            return "function" == typeof e
        }, G = function(e) {
            return "number" == typeof e
        }, Z = function(e) {
            return "object" === Object(_.a)(e)
        }, $ = function(e) {
            return J(e) && e()
        }, Q = function(e, t) {
            return function() {
                var r = $(e)
                  , n = $(t);
                return function() {
                    $(r),
                    $(n)
                }
            }
        }, ee = function(e, t, r) {
            return e && e.progress(t ? 0 : 1) && r && e.pause()
        }, te = function(e, t) {
            if (e.enabled) {
                var r = t(e);
                r && r.totalTime && (e.callbackAnimation = r)
            }
        }, re = Math.abs, ne = "scrollLeft", ie = "scrollTop", oe = "left", se = "top", ae = "right", le = "bottom", ce = "width", ue = "height", fe = "Right", pe = "Left", de = "Top", ge = "Bottom", he = "padding", ve = "margin", me = "Width", ye = "Height", xe = "px", be = {
            s: ne,
            p: oe,
            p2: pe,
            os: ae,
            os2: fe,
            d: ce,
            d2: me,
            a: "x",
            sc: function(e) {
                return arguments.length ? o.scrollTo(e, we.sc()) : o.pageXOffset || s.scrollLeft || a.scrollLeft || l.scrollLeft || 0
            }
        }, we = {
            s: ie,
            p: se,
            p2: de,
            os: le,
            os2: ge,
            d: ue,
            d2: ye,
            a: "y",
            op: be,
            sc: function(e) {
                return arguments.length ? o.scrollTo(be.sc(), e) : o.pageYOffset || s.scrollTop || a.scrollTop || l.scrollTop || 0
            }
        }, Te = function(e) {
            return o.getComputedStyle(e)
        }, ke = function(e, t) {
            for (var r in t)
                r in e || (e[r] = t[r]);
            return e
        }, Se = function(e, t) {
            var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== Te(e)[m] && n.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1)
              , i = e.getBoundingClientRect();
            return r && r.progress(0).kill(),
            i
        }, Oe = function(e, t) {
            var r = t.d2;
            return e["offset" + r] || e["client" + r] || 0
        }, Ce = function(e) {
            var t, r = [], n = e.labels, i = e.duration();
            for (t in n)
                r.push(n[t] / i);
            return r
        }, Pe = function(e) {
            var t = n.utils.snap(e)
              , r = Array.isArray(e) && e.slice(0).sort((function(e, t) {
                return e - t
            }
            ));
            return r ? function(e, n, i) {
                var o;
                if (void 0 === i && (i = .001),
                !n)
                    return t(e);
                if (n > 0) {
                    for (e -= i,
                    o = 0; o < r.length; o++)
                        if (r[o] >= e)
                            return r[o];
                    return r[o - 1]
                }
                for (o = r.length,
                e += i; o--; )
                    if (r[o] <= e)
                        return r[o];
                return r[0]
            }
            : function(r, n, i) {
                void 0 === i && (i = .001);
                var o = t(r);
                return !n || Math.abs(o - r) < i || o - r < 0 == n < 0 ? o : t(n < 0 ? r - e : r + e)
            }
        }, Ee = function(e, t, r, n) {
            return r.split(",").forEach((function(r) {
                return e(t, r, n)
            }
            ))
        }, _e = function(e, t, r) {
            return e.addEventListener(t, r, {
                passive: !0
            })
        }, Ae = function(e, t, r) {
            return e.removeEventListener(t, r)
        }, Me = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        }, Le = {
            toggleActions: "play",
            anticipatePin: 0
        }, Re = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        }, Be = function(e, t) {
            if (q(e)) {
                var r = e.indexOf("=")
                  , n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
                ~r && (e.indexOf("%") > r && (n *= t / 100),
                e = e.substr(0, r - 1)),
                e = n + (e in Re ? Re[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
            }
            return e
        }, Ie = function(e, t, r, n, i, o, a, c) {
            var u = i.startColor
              , f = i.endColor
              , p = i.fontSize
              , d = i.indent
              , g = i.fontWeight
              , h = s.createElement("div")
              , v = D(r) || "fixed" === H(r, "pinType")
              , m = -1 !== e.indexOf("scroller")
              , y = v ? l : r
              , x = -1 !== e.indexOf("start")
              , b = x ? u : f
              , w = "border-color:" + b + ";font-size:" + p + ";color:" + b + ";font-weight:" + g + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return w += "position:" + ((m || c) && v ? "fixed;" : "absolute;"),
            (m || c || !v) && (w += (n === we ? ae : le) + ":" + (o + parseFloat(d)) + "px;"),
            a && (w += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
            h._isStart = x,
            h.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
            h.style.cssText = w,
            h.innerText = t || 0 === t ? e + "-" + t : e,
            y.children[0] ? y.insertBefore(h, y.children[0]) : y.appendChild(h),
            h._offset = h["offset" + n.op.d2],
            ze(h, 0, n, x),
            h
        }, ze = function(e, t, r, i) {
            var o = {
                display: "block"
            }
              , s = r[i ? "os2" : "p2"]
              , a = r[i ? "p2" : "os2"];
            e._isFlipped = i,
            o[r.a + "Percent"] = i ? -100 : 0,
            o[r.a] = i ? "1px" : 0,
            o["border" + s + me] = 1,
            o["border" + a + me] = 0,
            o[r.p] = t + "px",
            n.set(e, o)
        }, Ne = [], Xe = {}, Ye = function() {
            return R() - I > 34 && tt()
        }, We = function() {
            tt(),
            I || Ue("scrollStart"),
            I = R()
        }, Fe = function() {
            return !h && !S && !s.fullscreenElement && u.restart(!0)
        }, De = {}, He = [], Ke = [], je = function(e) {
            var t, r = n.ticker.frame, s = [], a = 0;
            if (P !== r || A) {
                for (Ge(); a < Ke.length; a += 4)
                    (t = o.matchMedia(Ke[a]).matches) !== Ke[a + 3] && (Ke[a + 3] = t,
                    t ? s.push(a) : Ge(1, Ke[a]) || J(Ke[a + 2]) && Ke[a + 2]());
                for (Je(),
                a = 0; a < s.length; a++)
                    t = s[a],
                    C = Ke[t],
                    Ke[t + 2] = Ke[t + 1](e);
                C = 0,
                i && $e(0, 1),
                P = r,
                Ue("matchMedia")
            }
        }, Ve = function e() {
            return Ae(dt, "scrollEnd", e) || $e(!0)
        }, Ue = function(e) {
            return De[e] && De[e].map((function(e) {
                return e()
            }
            )) || He
        }, qe = [], Je = function(e) {
            for (var t = 0; t < qe.length; t += 5)
                e && qe[t + 4] !== e || (qe[t].style.cssText = qe[t + 1],
                qe[t].getBBox && qe[t].setAttribute("transform", qe[t + 2] || ""),
                qe[t + 3].uncache = 1)
        }, Ge = function(e, t) {
            var r;
            for (y = 0; y < Ne.length; y++)
                r = Ne[y],
                t && r.media !== t || (e ? r.kill(1) : r.revert());
            t && Je(t),
            t || Ue("revert")
        }, Ze = function() {
            return L.forEach((function(e) {
                return "function" == typeof e && (e.rec = 0)
            }
            ))
        }, $e = function(e, t) {
            if (!I || e) {
                E = !0;
                var r = Ue("refreshInit");
                T && dt.sort(),
                t || Ge(),
                Ne.forEach((function(e) {
                    return e.refresh()
                }
                )),
                Ne.forEach((function(e) {
                    return "max" === e.vars.end && e.setPositions(e.start, V(e.scroller, e._dir))
                }
                )),
                r.forEach((function(e) {
                    return e && e.render && e.render(-1)
                }
                )),
                Ze(),
                u.pause(),
                E = !1,
                Ue("refresh")
            } else
                _e(dt, "scrollEnd", Ve)
        }, Qe = 0, et = 1, tt = function() {
            if (!E) {
                var e = Ne.length
                  , t = R()
                  , r = t - B >= 50
                  , n = e && Ne[0].scroll();
                if (et = Qe > n ? -1 : 1,
                Qe = n,
                r && (I && !v && t - I > 200 && (I = 0,
                Ue("scrollEnd")),
                d = B,
                B = t),
                et < 0) {
                    for (y = e; y-- > 0; )
                        Ne[y] && Ne[y].update(0, r);
                    et = 1
                } else
                    for (y = 0; y < e; y++)
                        Ne[y] && Ne[y].update(0, r)
            }
        }, rt = [oe, se, le, ae, "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], nt = rt.concat([ce, ue, "boxSizing", "maxWidth", "maxHeight", "position", ve, he, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]), it = function(e, t, r, n) {
            if (e.parentNode !== t) {
                for (var i, o = rt.length, s = t.style, a = e.style; o--; )
                    s[i = rt[o]] = r[i];
                s.position = "absolute" === r.position ? "absolute" : "relative",
                "inline" === r.display && (s.display = "inline-block"),
                a.bottom = a.right = s.flexBasis = "auto",
                s.overflow = "visible",
                s.boxSizing = "border-box",
                s.width = Oe(e, be) + xe,
                s.height = Oe(e, we) + xe,
                s.padding = a.margin = a.top = a.left = "0",
                st(n),
                a.width = a.maxWidth = r.width,
                a.height = a.maxHeight = r.height,
                a.padding = r.padding,
                e.parentNode.insertBefore(t, e),
                t.appendChild(e)
            }
        }, ot = /([A-Z])/g, st = function(e) {
            if (e) {
                var t, r, i = e.t.style, o = e.length, s = 0;
                for ((e.t._gsap || n.core.getCache(e.t)).uncache = 1; s < o; s += 2)
                    r = e[s + 1],
                    t = e[s],
                    r ? i[t] = r : i[t] && i.removeProperty(t.replace(ot, "-$1").toLowerCase())
            }
        }, at = function(e) {
            for (var t = nt.length, r = e.style, n = [], i = 0; i < t; i++)
                n.push(nt[i], r[nt[i]]);
            return n.t = e,
            n
        }, lt = {
            left: 0,
            top: 0
        }, ct = function(e, t, r, n, i, o, s, c, u, f, p, d, g) {
            J(e) && (e = e(c)),
            q(e) && "max" === e.substr(0, 3) && (e = d + ("=" === e.charAt(4) ? Be("0" + e.substr(3), r) : 0));
            var h, v, m, y = g ? g.time() : 0;
            if (g && g.seek(0),
            G(e))
                s && ze(s, r, n, !0);
            else {
                J(t) && (t = t(c));
                var x, b, w, T, k = e.split(" ");
                m = X(t) || l,
                (x = Se(m) || {}) && (x.left || x.top) || "none" !== Te(m).display || (T = m.style.display,
                m.style.display = "block",
                x = Se(m),
                T ? m.style.display = T : m.style.removeProperty("display")),
                b = Be(k[0], x[n.d]),
                w = Be(k[1] || "0", r),
                e = x[n.p] - u[n.p] - f + b + i - w,
                s && ze(s, w, n, r - w < 20 || s._isStart && w > 20),
                r -= r - w
            }
            if (o) {
                var S = e + r
                  , O = o._isStart;
                h = "scroll" + n.d2,
                ze(o, S, n, O && S > 20 || !O && (p ? Math.max(l[h], a[h]) : o.parentNode[h]) <= S + 1),
                p && (u = Se(s),
                p && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + xe))
            }
            return g && m && (h = Se(m),
            g.seek(d),
            v = Se(m),
            g._caScrollDist = h[n.p] - v[n.p],
            e = e / g._caScrollDist * d),
            g && g.seek(y),
            g ? e : Math.round(e)
        }, ut = /(?:webkit|moz|length|cssText|inset)/i, ft = function(e, t, r, i) {
            if (e.parentNode !== t) {
                var o, s, a = e.style;
                if (t === l) {
                    for (o in e._stOrig = a.cssText,
                    s = Te(e))
                        +o || ut.test(o) || !s[o] || "string" != typeof a[o] || "0" === o || (a[o] = s[o]);
                    a.top = r,
                    a.left = i
                } else
                    a.cssText = e._stOrig;
                n.core.getCache(e).uncache = 1,
                t.appendChild(e)
            }
        }, pt = function(e, t) {
            var r, i, o = K(e, t), s = "_scroll" + t.p2, a = function t(a, l, c, u, f) {
                var p = t.tween
                  , d = l.onComplete
                  , g = {};
                return p && p.kill(),
                r = Math.round(c),
                l[s] = a,
                l.modifiers = g,
                g[s] = function(e) {
                    return (e = Y(o())) !== r && e !== i && Math.abs(e - r) > 2 && Math.abs(e - i) > 2 ? (p.kill(),
                    t.tween = 0) : e = c + u * p.ratio + f * p.ratio * p.ratio,
                    i = r,
                    r = Y(e)
                }
                ,
                l.onComplete = function() {
                    t.tween = 0,
                    d && d.call(p)
                }
                ,
                p = t.tween = n.to(e, l)
            };
            return e[s] = o,
            _e(e, "wheel", (function() {
                return a.tween && a.tween.kill() && (a.tween = 0)
            }
            )),
            a
        };
        be.op = we;
        var dt = function() {
            function e(t, r) {
                i || e.register(n),
                this.init(t, r)
            }
            return e.prototype.init = function(t, r) {
                if (this.progress = this.start = 0,
                this.vars && this.kill(1),
                z) {
                    var i, c, u, g, m, x, b, w, S, P, E, _, L, B, Y, W, F, U, $, Q, ne, ie, oe, se, ae, le, ce, ue, fe, pe, de, ge, ye, Ee, Re, ze, Ye, De, He, Ke, je = t = ke(q(t) || G(t) || t.nodeType ? {
                        trigger: t
                    } : t, Le), Ue = je.onUpdate, qe = je.toggleClass, Je = je.id, Ge = je.onToggle, Ze = je.onRefresh, $e = je.scrub, Qe = je.trigger, tt = je.pin, rt = je.pinSpacing, nt = je.invalidateOnRefresh, ot = je.anticipatePin, ut = je.onScrubComplete, dt = je.onSnapComplete, gt = je.once, ht = je.snap, vt = je.pinReparent, mt = je.pinSpacer, yt = je.containerAnimation, xt = je.fastScrollEnd, bt = je.preventOverlaps, wt = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? be : we, Tt = !$e && 0 !== $e, kt = X(t.scroller || o), St = n.core.getCache(kt), Ot = D(kt), Ct = "fixed" === ("pinType"in t ? t.pinType : H(kt, "pinType") || Ot && "fixed"), Pt = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], Et = Tt && t.toggleActions.split(" "), _t = "markers"in t ? t.markers : Le.markers, At = Ot ? 0 : parseFloat(Te(kt)["border" + wt.p2 + me]) || 0, Mt = this, Lt = t.onRefreshInit && function() {
                        return t.onRefreshInit(Mt)
                    }
                    , Rt = function(e, t, r) {
                        var n = r.d
                          , i = r.d2
                          , s = r.a;
                        return (s = H(e, "getBoundingClientRect")) ? function() {
                            return s()[n]
                        }
                        : function() {
                            return (t ? o["inner" + i] : e["client" + i]) || 0
                        }
                    }(kt, Ot, wt), Bt = function(e, t) {
                        return !t || ~M.indexOf(e) ? j(e) : function() {
                            return lt
                        }
                    }(kt, Ot), It = 0, zt = K(kt, wt);
                    if (Mt.media = C,
                    Mt._dir = wt,
                    ot *= 45,
                    Mt.scroller = kt,
                    Mt.scroll = yt ? yt.time.bind(yt) : zt,
                    g = zt(),
                    Mt.vars = t,
                    r = r || t.animation,
                    "refreshPriority"in t && (T = 1),
                    St.tweenScroll = St.tweenScroll || {
                        top: pt(kt, we),
                        left: pt(kt, be)
                    },
                    Mt.tweenTo = i = St.tweenScroll[wt.p],
                    r && (r.vars.lazy = !1,
                    r._initted || !1 !== r.vars.immediateRender && !1 !== t.immediateRender && r.render(0, !0, !0),
                    Mt.animation = r.pause(),
                    r.scrollTrigger = Mt,
                    (de = G($e) && $e) && (pe = n.to(r, {
                        ease: "power3",
                        duration: de,
                        onComplete: function() {
                            return ut && ut(Mt)
                        }
                    })),
                    ue = 0,
                    Je || (Je = r.vars.id)),
                    Ne.push(Mt),
                    ht && (Z(ht) && !ht.push || (ht = {
                        snapTo: ht
                    }),
                    "scrollBehavior"in l.style && n.set(Ot ? [l, a] : kt, {
                        scrollBehavior: "auto"
                    }),
                    u = J(ht.snapTo) ? ht.snapTo : "labels" === ht.snapTo ? function(e) {
                        return function(t) {
                            return n.utils.snap(Ce(e), t)
                        }
                    }(r) : "labelsDirectional" === ht.snapTo ? (De = r,
                    function(e, t) {
                        return Pe(Ce(De))(e, t.direction)
                    }
                    ) : !1 !== ht.directional ? function(e, t) {
                        return Pe(ht.snapTo)(e, t.direction)
                    }
                    : n.utils.snap(ht.snapTo),
                    ge = ht.duration || {
                        min: .1,
                        max: 2
                    },
                    ge = Z(ge) ? p(ge.min, ge.max) : p(ge, ge),
                    ye = n.delayedCall(ht.delay || de / 2 || .1, (function() {
                        if (Math.abs(Mt.getVelocity()) < 10 && !v && It !== zt()) {
                            var e = r && !Tt ? r.totalProgress() : Mt.progress
                              , t = (e - fe) / (R() - d) * 1e3 || 0
                              , o = n.utils.clamp(-Mt.progress, 1 - Mt.progress, re(t / 2) * t / .185)
                              , s = Mt.progress + (!1 === ht.inertia ? 0 : o)
                              , a = p(0, 1, u(s, Mt))
                              , l = zt()
                              , c = Math.round(x + a * L)
                              , f = ht
                              , g = f.onStart
                              , h = f.onInterrupt
                              , m = f.onComplete
                              , y = i.tween;
                            if (l <= b && l >= x && c !== l) {
                                if (y && !y._initted && y.data <= re(c - l))
                                    return;
                                !1 === ht.inertia && (o = a - Mt.progress),
                                i(c, {
                                    duration: ge(re(.185 * Math.max(re(s - e), re(a - e)) / t / .05 || 0)),
                                    ease: ht.ease || "power3",
                                    data: re(c - l),
                                    onInterrupt: function() {
                                        return ye.restart(!0) && h && h(Mt)
                                    },
                                    onComplete: function() {
                                        Mt.update(),
                                        It = zt(),
                                        ue = fe = r && !Tt ? r.totalProgress() : Mt.progress,
                                        dt && dt(Mt),
                                        m && m(Mt)
                                    }
                                }, l, o * L, c - l - o * L),
                                g && g(Mt, i.tween)
                            }
                        } else
                            Mt.isActive && ye.restart(!0)
                    }
                    )).pause()),
                    Je && (Xe[Je] = Mt),
                    Qe = Mt.trigger = X(Qe || tt),
                    tt = !0 === tt ? Qe : X(tt),
                    q(qe) && (qe = {
                        targets: Qe,
                        className: qe
                    }),
                    tt && (!1 === rt || rt === ve || (rt = !(!rt && "flex" === Te(tt.parentNode).display) && he),
                    Mt.pin = tt,
                    !1 !== t.force3D && n.set(tt, {
                        force3D: !0
                    }),
                    (c = n.core.getCache(tt)).spacer ? B = c.pinState : (mt && ((mt = X(mt)) && !mt.nodeType && (mt = mt.current || mt.nativeElement),
                    c.spacerIsNative = !!mt,
                    mt && (c.spacerState = at(mt))),
                    c.spacer = F = mt || s.createElement("div"),
                    F.classList.add("pin-spacer"),
                    Je && F.classList.add("pin-spacer-" + Je),
                    c.pinState = B = at(tt)),
                    Mt.spacer = F = c.spacer,
                    ce = Te(tt),
                    oe = ce[rt + wt.os2],
                    $ = n.getProperty(tt),
                    Q = n.quickSetter(tt, wt.a, xe),
                    it(tt, F, ce),
                    W = at(tt)),
                    _t && (_ = Z(_t) ? ke(_t, Me) : Me,
                    P = Ie("scroller-start", Je, kt, wt, _, 0),
                    E = Ie("scroller-end", Je, kt, wt, _, 0, P),
                    U = P["offset" + wt.op.d2],
                    w = Ie("start", Je, kt, wt, _, U, 0, yt),
                    S = Ie("end", Je, kt, wt, _, U, 0, yt),
                    yt && (Ye = n.quickSetter([w, S], wt.a, xe)),
                    Ct || M.length && !0 === H(kt, "fixedMarkers") || (Ke = Te(He = Ot ? l : kt).position,
                    He.style.position = "absolute" === Ke || "fixed" === Ke ? Ke : "relative",
                    n.set([P, E], {
                        force3D: !0
                    }),
                    ae = n.quickSetter(P, wt.a, xe),
                    le = n.quickSetter(E, wt.a, xe))),
                    yt) {
                        var Nt = yt.vars.onUpdate
                          , Xt = yt.vars.onUpdateParams;
                        yt.eventCallback("onUpdate", (function() {
                            Mt.update(0, 0, 1),
                            Nt && Nt.apply(Xt || [])
                        }
                        ))
                    }
                    Mt.previous = function() {
                        return Ne[Ne.indexOf(Mt) - 1]
                    }
                    ,
                    Mt.next = function() {
                        return Ne[Ne.indexOf(Mt) + 1]
                    }
                    ,
                    Mt.revert = function(e) {
                        var t = !1 !== e || !Mt.enabled
                          , n = h;
                        t !== Mt.isReverted && (t && (Mt.scroll.rec || (Mt.scroll.rec = zt()),
                        Re = Math.max(zt(), Mt.scroll.rec || 0),
                        Ee = Mt.progress,
                        ze = r && r.progress()),
                        w && [w, S, P, E].forEach((function(e) {
                            return e.style.display = t ? "none" : "block"
                        }
                        )),
                        t && (h = 1),
                        Mt.update(t),
                        h = n,
                        tt && (t ? function(e, t, r) {
                            st(r);
                            var n = e._gsap;
                            if (n.spacerIsNative)
                                st(n.spacerState);
                            else if (e.parentNode === t) {
                                var i = t.parentNode;
                                i && (i.insertBefore(e, t),
                                i.removeChild(t))
                            }
                        }(tt, F, B) : (!vt || !Mt.isActive) && it(tt, F, Te(tt), se)),
                        Mt.isReverted = t)
                    }
                    ,
                    Mt.refresh = function(i, o) {
                        if (!h && Mt.enabled || o)
                            if (tt && i && I)
                                _e(e, "scrollEnd", Ve);
                            else {
                                h = 1,
                                pe && pe.pause(),
                                nt && r && r.time(-.01, !0).invalidate(),
                                Mt.isReverted || Mt.revert();
                                for (var s, a, c, u, f, p, d, v, y, T, O = Rt(), C = Bt(), _ = yt ? yt.duration() : V(kt, wt), A = 0, M = 0, R = t.end, z = t.endTrigger || Qe, N = t.start || (0 !== t.start && Qe ? tt ? "0 0" : "0 100%" : 0), D = t.pinnedContainer && X(t.pinnedContainer), H = Qe && Math.max(0, Ne.indexOf(Mt)) || 0, j = H; j--; )
                                    (p = Ne[j]).end || p.refresh(0, 1) || (h = 1),
                                    !(d = p.pin) || d !== Qe && d !== tt || p.isReverted || (T || (T = []),
                                    T.unshift(p),
                                    p.revert());
                                for (J(N) && (N = N(Mt)),
                                x = ct(N, Qe, O, wt, zt(), w, P, Mt, C, At, Ct, _, yt) || (tt ? -.001 : 0),
                                J(R) && (R = R(Mt)),
                                q(R) && !R.indexOf("+=") && (~R.indexOf(" ") ? R = (q(N) ? N.split(" ")[0] : "") + R : (A = Be(R.substr(2), O),
                                R = q(N) ? N : x + A,
                                z = Qe)),
                                b = Math.max(x, ct(R || (z ? "100% 0" : _), z, O, wt, zt() + A, S, E, Mt, C, At, Ct, _, yt)) || -.001,
                                L = b - x || (x -= .01) && .001,
                                A = 0,
                                j = H; j--; )
                                    (d = (p = Ne[j]).pin) && p.start - p._pinPush < x && !yt && (s = p.end - p.start,
                                    d !== Qe && d !== D || G(N) || (A += s * (1 - p.progress)),
                                    d === tt && (M += s));
                                if (x += A,
                                b += A,
                                Mt._pinPush = M,
                                w && A && ((s = {})[wt.a] = "+=" + A,
                                D && (s[wt.p] = "-=" + zt()),
                                n.set([w, S], s)),
                                tt)
                                    s = Te(tt),
                                    u = wt === we,
                                    c = zt(),
                                    ne = parseFloat($(wt.a)) + M,
                                    !_ && b > 1 && ((Ot ? l : kt).style["overflow-" + wt.a] = "scroll"),
                                    it(tt, F, s),
                                    W = at(tt),
                                    a = Se(tt, !0),
                                    v = Ct && K(kt, u ? be : we)(),
                                    rt && ((se = [rt + wt.os2, L + M + xe]).t = F,
                                    (j = rt === he ? Oe(tt, wt) + L + M : 0) && se.push(wt.d, j + xe),
                                    st(se),
                                    Ct && zt(Re)),
                                    Ct && ((f = {
                                        top: a.top + (u ? c - x : v) + xe,
                                        left: a.left + (u ? v : c - x) + xe,
                                        boxSizing: "border-box",
                                        position: "fixed"
                                    }).width = f.maxWidth = Math.ceil(a.width) + xe,
                                    f.height = f.maxHeight = Math.ceil(a.height) + xe,
                                    f.margin = f.marginTop = f.marginRight = f.marginBottom = f.marginLeft = "0",
                                    f.padding = s.padding,
                                    f.paddingTop = s.paddingTop,
                                    f.paddingRight = s.paddingRight,
                                    f.paddingBottom = s.paddingBottom,
                                    f.paddingLeft = s.paddingLeft,
                                    Y = function(e, t, r) {
                                        for (var n, i = [], o = e.length, s = r ? 8 : 0; s < o; s += 2)
                                            n = e[s],
                                            i.push(n, n in t ? t[n] : e[s + 1]);
                                        return i.t = e.t,
                                        i
                                    }(B, f, vt)),
                                    r ? (y = r._initted,
                                    k(1),
                                    r.render(r.duration(), !0, !0),
                                    ie = $(wt.a) - ne + L + M,
                                    L !== ie && Y.splice(Y.length - 2, 2),
                                    r.render(0, !0, !0),
                                    y || r.invalidate(),
                                    k(0)) : ie = L;
                                else if (Qe && zt() && !yt)
                                    for (a = Qe.parentNode; a && a !== l; )
                                        a._pinOffset && (x -= a._pinOffset,
                                        b -= a._pinOffset),
                                        a = a.parentNode;
                                T && T.forEach((function(e) {
                                    return e.revert(!1)
                                }
                                )),
                                Mt.start = x,
                                Mt.end = b,
                                g = m = zt(),
                                yt || (g < Re && zt(Re),
                                Mt.scroll.rec = 0),
                                Mt.revert(!1),
                                h = 0,
                                r && Tt && r._initted && r.progress() !== ze && r.progress(ze, !0).render(r.time(), !0, !0),
                                (Ee !== Mt.progress || yt) && (r && !Tt && r.totalProgress(Ee, !0),
                                Mt.progress = Ee,
                                Mt.update(0, 0, 1)),
                                tt && rt && (F._pinOffset = Math.round(Mt.progress * ie)),
                                Ze && Ze(Mt)
                            }
                    }
                    ,
                    Mt.getVelocity = function() {
                        return (zt() - m) / (R() - d) * 1e3 || 0
                    }
                    ,
                    Mt.endAnimation = function() {
                        ee(Mt.callbackAnimation),
                        r && (pe ? pe.progress(1) : r.paused() ? Tt || ee(r, Mt.direction < 0, 1) : ee(r, r.reversed()))
                    }
                    ,
                    Mt.labelToScroll = function(e) {
                        return r && r.labels && (x || Mt.refresh() || x) + r.labels[e] / r.duration() * L || 0
                    }
                    ,
                    Mt.getTrailing = function(e) {
                        var t = Ne.indexOf(Mt)
                          , r = Mt.direction > 0 ? Ne.slice(0, t).reverse() : Ne.slice(t + 1);
                        return q(e) ? r.filter((function(t) {
                            return t.vars.preventOverlaps === e
                        }
                        )) : r
                    }
                    ,
                    Mt.update = function(e, t, n) {
                        if (!yt || n || e) {
                            var o, s, a, c, u, p, v, y = Mt.scroll(), w = e ? 0 : (y - x) / L, T = w < 0 ? 0 : w > 1 ? 1 : w || 0, k = Mt.progress;
                            if (t && (m = g,
                            g = yt ? zt() : y,
                            ht && (fe = ue,
                            ue = r && !Tt ? r.totalProgress() : T)),
                            ot && !T && tt && !h && !A && I && x < y + (y - m) / (R() - d) * ot && (T = 1e-4),
                            T !== k && Mt.enabled) {
                                if (c = (u = (o = Mt.isActive = !!T && T < 1) !== (!!k && k < 1)) || !!T != !!k,
                                Mt.direction = T > k ? 1 : -1,
                                Mt.progress = T,
                                c && !h && (s = T && !k ? 0 : 1 === T ? 1 : 1 === k ? 2 : 3,
                                Tt && (a = !u && "none" !== Et[s + 1] && Et[s + 1] || Et[s],
                                v = r && ("complete" === a || "reset" === a || a in r))),
                                bt && u && (v || $e || !r) && (J(bt) ? bt(Mt) : Mt.getTrailing(bt).forEach((function(e) {
                                    return e.endAnimation()
                                }
                                ))),
                                Tt || (!pe || h || A ? r && r.totalProgress(T, !!h) : (pe.vars.totalProgress = T,
                                pe.invalidate().restart())),
                                tt)
                                    if (e && rt && (F.style[rt + wt.os2] = oe),
                                    Ct) {
                                        if (c) {
                                            if (p = !e && T > k && b + 1 > y && y + 1 >= V(kt, wt),
                                            vt)
                                                if (e || !o && !p)
                                                    ft(tt, F);
                                                else {
                                                    var S = Se(tt, !0)
                                                      , C = y - x;
                                                    ft(tt, l, S.top + (wt === we ? C : 0) + xe, S.left + (wt === we ? 0 : C) + xe)
                                                }
                                            st(o || p ? Y : W),
                                            ie !== L && T < 1 && o || Q(ne + (1 !== T || p ? 0 : ie))
                                        }
                                    } else
                                        Q(ne + ie * T);
                                ht && !i.tween && !h && !A && ye.restart(!0),
                                qe && (u || gt && T && (T < 1 || !O)) && f(qe.targets).forEach((function(e) {
                                    return e.classList[o || gt ? "add" : "remove"](qe.className)
                                }
                                )),
                                Ue && !Tt && !e && Ue(Mt),
                                c && !h ? (Tt && (v && ("complete" === a ? r.pause().totalProgress(1) : "reset" === a ? r.restart(!0).pause() : "restart" === a ? r.restart(!0) : r[a]()),
                                Ue && Ue(Mt)),
                                !u && O || (Ge && u && te(Mt, Ge),
                                Pt[s] && te(Mt, Pt[s]),
                                gt && (1 === T ? Mt.kill(!1, 1) : Pt[s] = 0),
                                u || Pt[s = 1 === T ? 1 : 3] && te(Mt, Pt[s])),
                                xt && !o && Math.abs(Mt.getVelocity()) > (G(xt) ? xt : 2500) && (ee(Mt.callbackAnimation),
                                pe ? pe.progress(1) : ee(r, !T, 1))) : Tt && Ue && !h && Ue(Mt)
                            }
                            if (le) {
                                var E = yt ? y / yt.duration() * (yt._caScrollDist || 0) : y;
                                ae(E + (P._isFlipped ? 1 : 0)),
                                le(E)
                            }
                            Ye && Ye(-y / yt.duration() * (yt._caScrollDist || 0))
                        }
                    }
                    ,
                    Mt.enable = function(t, r) {
                        Mt.enabled || (Mt.enabled = !0,
                        _e(kt, "resize", Fe),
                        _e(kt, "scroll", We),
                        Lt && _e(e, "refreshInit", Lt),
                        !1 !== t && (Mt.progress = Ee = 0,
                        g = m = It = zt()),
                        !1 !== r && Mt.refresh())
                    }
                    ,
                    Mt.getTween = function(e) {
                        return e && i ? i.tween : pe
                    }
                    ,
                    Mt.setPositions = function(e, t) {
                        tt && (ne += e - x,
                        ie += t - e - L),
                        Mt.start = x = e,
                        Mt.end = b = t,
                        L = t - e,
                        Mt.update()
                    }
                    ,
                    Mt.disable = function(t, r) {
                        if (Mt.enabled && (!1 !== t && Mt.revert(),
                        Mt.enabled = Mt.isActive = !1,
                        r || pe && pe.pause(),
                        Re = 0,
                        c && (c.uncache = 1),
                        Lt && Ae(e, "refreshInit", Lt),
                        ye && (ye.pause(),
                        i.tween && i.tween.kill() && (i.tween = 0)),
                        !Ot)) {
                            for (var n = Ne.length; n--; )
                                if (Ne[n].scroller === kt && Ne[n] !== Mt)
                                    return;
                            Ae(kt, "resize", Fe),
                            Ae(kt, "scroll", We)
                        }
                    }
                    ,
                    Mt.kill = function(e, t) {
                        Mt.disable(e, t),
                        pe && pe.kill(),
                        Je && delete Xe[Je];
                        var n = Ne.indexOf(Mt);
                        n >= 0 && Ne.splice(n, 1),
                        n === y && et > 0 && y--,
                        n = 0,
                        Ne.forEach((function(e) {
                            return e.scroller === Mt.scroller && (n = 1)
                        }
                        )),
                        n || (Mt.scroll.rec = 0),
                        r && (r.scrollTrigger = null,
                        e && r.render(-1),
                        t || r.kill()),
                        w && [w, S, P, E].forEach((function(e) {
                            return e.parentNode && e.parentNode.removeChild(e)
                        }
                        )),
                        tt && (c && (c.uncache = 1),
                        n = 0,
                        Ne.forEach((function(e) {
                            return e.pin === tt && n++
                        }
                        )),
                        n || (c.spacer = 0))
                    }
                    ,
                    Mt.enable(!1, !1),
                    r && r.add && !L ? n.delayedCall(.01, (function() {
                        return x || b || Mt.refresh()
                    }
                    )) && (L = .01) && (x = b = 0) : Mt.refresh()
                } else
                    this.update = this.refresh = this.kill = N
            }
            ,
            e.register = function(t) {
                if (!i && (n = t || F(),
                W() && window.document && (o = window,
                s = document,
                a = s.documentElement,
                l = s.body),
                n && (f = n.utils.toArray,
                p = n.utils.clamp,
                k = n.core.suppressOverwrites || N,
                n.core.globals("ScrollTrigger", e),
                l))) {
                    _e(o, "wheel", We),
                    c = [o, s, a, l],
                    _e(s, "scroll", We);
                    var r, d = l.style, h = d.borderTopStyle;
                    d.borderTopStyle = "solid",
                    r = Se(l),
                    we.m = Math.round(r.top + we.sc()) || 0,
                    be.m = Math.round(r.left + be.sc()) || 0,
                    h ? d.borderTopStyle = h : d.removeProperty("border-top-style"),
                    g = setInterval(Ye, 200),
                    n.delayedCall(.5, (function() {
                        return A = 0
                    }
                    )),
                    _e(s, "touchcancel", N),
                    _e(l, "touchstart", N),
                    Ee(_e, s, "pointerdown,touchstart,mousedown", (function() {
                        return v = 1
                    }
                    )),
                    Ee(_e, s, "pointerup,touchend,mouseup", (function() {
                        return v = 0
                    }
                    )),
                    m = n.utils.checkPrefix("transform"),
                    nt.push(m),
                    i = R(),
                    u = n.delayedCall(.2, $e).pause(),
                    w = [s, "visibilitychange", function() {
                        var e = o.innerWidth
                          , t = o.innerHeight;
                        s.hidden ? (x = e,
                        b = t) : x === e && b === t || Fe()
                    }
                    , s, "DOMContentLoaded", $e, o, "load", function() {
                        return I || $e()
                    }
                    , o, "resize", Fe],
                    U(_e)
                }
                return i
            }
            ,
            e.defaults = function(e) {
                if (e)
                    for (var t in e)
                        Le[t] = e[t];
                return Le
            }
            ,
            e.kill = function() {
                z = 0,
                Ne.slice(0).forEach((function(e) {
                    return e.kill(1)
                }
                ))
            }
            ,
            e.config = function(e) {
                "limitCallbacks"in e && (O = !!e.limitCallbacks);
                var t = e.syncInterval;
                t && clearInterval(g) || (g = t) && setInterval(Ye, t),
                "autoRefreshEvents"in e && (U(Ae) || U(_e, e.autoRefreshEvents || "none"),
                S = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
            }
            ,
            e.scrollerProxy = function(e, t) {
                var r = X(e)
                  , n = L.indexOf(r)
                  , i = D(r);
                ~n && L.splice(n, i ? 6 : 2),
                t && (i ? M.unshift(o, t, l, t, a, t) : M.unshift(r, t))
            }
            ,
            e.matchMedia = function(e) {
                var t, r, n, i, s;
                for (r in e)
                    n = Ke.indexOf(r),
                    i = e[r],
                    C = r,
                    "all" === r ? i() : (t = o.matchMedia(r)) && (t.matches && (s = i()),
                    ~n ? (Ke[n + 1] = Q(Ke[n + 1], i),
                    Ke[n + 2] = Q(Ke[n + 2], s)) : (n = Ke.length,
                    Ke.push(r, i, s),
                    t.addListener ? t.addListener(je) : t.addEventListener("change", je)),
                    Ke[n + 3] = t.matches),
                    C = 0;
                return Ke
            }
            ,
            e.clearMatchMedia = function(e) {
                e || (Ke.length = 0),
                (e = Ke.indexOf(e)) >= 0 && Ke.splice(e, 4)
            }
            ,
            e.isInViewport = function(e, t, r) {
                var n = (q(e) ? X(e) : e).getBoundingClientRect()
                  , i = n[r ? ce : ue] * t || 0;
                return r ? n.right - i > 0 && n.left + i < o.innerWidth : n.bottom - i > 0 && n.top + i < o.innerHeight
            }
            ,
            e.positionInViewport = function(e, t, r) {
                q(e) && (e = X(e));
                var n = e.getBoundingClientRect()
                  , i = n[r ? ce : ue]
                  , s = null == t ? i / 2 : t in Re ? Re[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
                return r ? (n.left + s) / o.innerWidth : (n.top + s) / o.innerHeight
            }
            ,
            e
        }();
        dt.version = "3.9.1",
        dt.saveStyles = function(e) {
            return e ? f(e).forEach((function(e) {
                if (e && e.style) {
                    var t = qe.indexOf(e);
                    t >= 0 && qe.splice(t, 5),
                    qe.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), n.core.getCache(e), C)
                }
            }
            )) : qe
        }
        ,
        dt.revert = function(e, t) {
            return Ge(!e, t)
        }
        ,
        dt.create = function(e, t) {
            return new dt(e,t)
        }
        ,
        dt.refresh = function(e) {
            return e ? Fe() : (i || dt.register()) && $e(!0)
        }
        ,
        dt.update = tt,
        dt.clearScrollMemory = Ze,
        dt.maxScroll = function(e, t) {
            return V(e, t ? be : we)
        }
        ,
        dt.getScrollFunc = function(e, t) {
            return K(X(e), t ? be : we)
        }
        ,
        dt.getById = function(e) {
            return Xe[e]
        }
        ,
        dt.getAll = function() {
            return Ne.slice(0)
        }
        ,
        dt.isScrolling = function() {
            return !!I
        }
        ,
        dt.snapDirectional = Pe,
        dt.addEventListener = function(e, t) {
            var r = De[e] || (De[e] = []);
            ~r.indexOf(t) || r.push(t)
        }
        ,
        dt.removeEventListener = function(e, t) {
            var r = De[e]
              , n = r && r.indexOf(t);
            n >= 0 && r.splice(n, 1)
        }
        ,
        dt.batch = function(e, t) {
            var r, i = [], o = {}, s = t.interval || .016, a = t.batchMax || 1e9, l = function(e, t) {
                var r = []
                  , i = []
                  , o = n.delayedCall(s, (function() {
                    t(r, i),
                    r = [],
                    i = []
                }
                )).pause();
                return function(e) {
                    r.length || o.restart(!0),
                    r.push(e.trigger),
                    i.push(e),
                    a <= r.length && o.progress(1)
                }
            };
            for (r in t)
                o[r] = "on" === r.substr(0, 2) && J(t[r]) && "onRefreshInit" !== r ? l(0, t[r]) : t[r];
            return J(a) && (a = a(),
            _e(dt, "refresh", (function() {
                return a = t.batchMax()
            }
            ))),
            f(e).forEach((function(e) {
                var t = {};
                for (r in o)
                    t[r] = o[r];
                t.trigger = e,
                i.push(dt.create(t))
            }
            )),
            i
        }
        ,
        dt.sort = function(e) {
            return Ne.sort(e || function(e, t) {
                return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
            }
            )
        }
        ,
        F() && n.registerPlugin(dt)
    }
}]);
