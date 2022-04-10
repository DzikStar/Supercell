(window.webpackJsonp = window.webpackJsonp || []).push([[13], {
    1076: function(e, t, i) {
        var n = i(1111);
        n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
        (0,
        i(8).default)("a21f9ec0", n, !0, {
            sourceMap: !1
        })
    },
    1110: function(e, t, i) {
        "use strict";
        i(1076)
    },
    1111: function(e, t, i) {
        var n = i(7)
          , a = i(100)
          , r = i(1112)
          , s = i(1113)
          , o = i(1114)
          , p = i(1115)
          , c = n((function(e) {
            return e[1]
        }
        ))
          , d = a(r)
          , w = a(s)
          , u = a(o)
          , l = a(p);
        c.push([e.i, ".swiper-container[data-v-10cb6a89]{width:100vw;max-width:320px;overflow:visible;padding:30px 0}@media(min-width:46em){.swiper-container[data-v-10cb6a89]{max-width:600px}}.swiper-container .swiper-slide[data-v-10cb6a89]{opacity:.4}@media(min-width:46em){.swiper-container .swiper-slide[data-v-10cb6a89]{padding:40px}}.swiper-container .swiper-slide-active[data-v-10cb6a89]{opacity:1;padding:0}.swiper-container .swiper-button-next[data-v-10cb6a89],.swiper-container .swiper-button-prev[data-v-10cb6a89]{display:none;background-repeat:no-repeat;background-size:contain;position:absolute}.swiper-container .swiper-button-next[data-v-10cb6a89]:after,.swiper-container .swiper-button-prev[data-v-10cb6a89]:after{display:none}@media(min-width:46em){.swiper-container .swiper-button-next[data-v-10cb6a89],.swiper-container .swiper-button-prev[data-v-10cb6a89]{display:block}}.swiper-container .swiper-button-prev[data-v-10cb6a89]{background-image:url(" + d + ");left:-10%}@media(min-width:56.25em){.swiper-container .swiper-button-prev[data-v-10cb6a89]{left:-20%}}@media(min-width:71.25em){.swiper-container .swiper-button-prev[data-v-10cb6a89]{left:-40%}}@media(min-width:80em){.swiper-container .swiper-button-prev[data-v-10cb6a89]{left:-60%}}.swiper-container .swiper-button-prev[data-v-10cb6a89]:hover{opacity:.8}.swiper-container .swiper-button-prev[data-v-10cb6a89]:active,.swiper-container .swiper-button-prev[data-v-10cb6a89]:focus{transform:scale(.8)}.swiper-container .swiper-button-next[data-v-10cb6a89]{background-image:url(" + w + ");right:-10%}@media(min-width:56.25em){.swiper-container .swiper-button-next[data-v-10cb6a89]{right:-20%}}@media(min-width:71.25em){.swiper-container .swiper-button-next[data-v-10cb6a89]{right:-40%}}@media(min-width:80em){.swiper-container .swiper-button-next[data-v-10cb6a89]{right:-60%}}.swiper-container .swiper-button-next[data-v-10cb6a89]:hover{opacity:.8}.swiper-container .swiper-button-next[data-v-10cb6a89]:active,.swiper-container .swiper-button-next[data-v-10cb6a89]:focus{transform:scale(.8)}.swiper-container .swiper-button-disabled.swiper-button-next[data-v-10cb6a89]{background-image:url(" + u + ");opacity:1}.swiper-container .swiper-button-disabled.swiper-button-prev[data-v-10cb6a89]{background-image:url(" + l + ");opacity:1}.swiper-container .swiper-pagination.swiper-pagination-bullets[data-v-10cb6a89]{bottom:-20px}@media(min-width:46em){.swiper-container .swiper-pagination.swiper-pagination-bullets[data-v-10cb6a89]{display:none}}", ""]),
        c.locals = {},
        e.exports = c
    },
    1112: function(e, t, i) {
        e.exports = i.p + "img/ico_back.efc6d08.svg"
    },
    1113: function(e, t, i) {
        e.exports = i.p + "img/ico_forward.725bafb.svg"
    },
    1114: function(e, t, i) {
        e.exports = i.p + "img/ico_forward-peach.b9b5d9f.svg"
    },
    1115: function(e, t, i) {
        e.exports = i.p + "img/ico_back-peach.ab7f7ad.svg"
    },
    1144: function(e, t, i) {
        "use strict";
        i.r(t);
        i(58),
        i(48),
        i(10);
        var n = i(0)
          , a = i(1143)
          , r = n.default.extend({
            name: "EventsCarousel",
            components: {
                CarouselSlide: a.a
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
                      , t = this.events.find((function(t, i) {
                        return i === e.upcomingEventIdx
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
          , s = (i(1110),
        i(1))
          , o = Object(s.a)(r, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", [i("div", {
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
            }, [i("div", {
                staticClass: "swiper-wrapper"
            }, e._l(e.events, (function(t, n) {
                return i("div", {
                    key: n,
                    staticClass: "img-wrapper swiper-slide"
                }, [i("CarouselSlide", {
                    attrs: {
                        "event-info": t,
                        "active-slide": e.currentSlide === n,
                        "upcoming-event-id": e.upcomingEventId
                    },
                    on: {
                        openVodMOdal: e.openVodModal
                    }
                })], 1)
            }
            )), 0), e._v(" "), i("div", {
                staticClass: "swiper-pagination",
                attrs: {
                    slot: "pagination"
                },
                slot: "pagination"
            }), e._v(" "), i("div", {
                staticClass: "swiper-button-prev",
                attrs: {
                    slot: "button-prev"
                },
                on: {
                    click: e.prevSlideItem
                },
                slot: "button-prev"
            }), e._v(" "), i("div", {
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
        t.default = o.exports;
        installComponents(o, {
            CarouselSlide: i(1173).default
        })
    }
}]);
