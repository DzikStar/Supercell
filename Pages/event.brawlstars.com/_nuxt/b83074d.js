(window.webpackJsonp = window.webpackJsonp || []).push([[1, 47, 52, 53], {
    1075: function(e, t, a) {
        "use strict";
        var i, n;
        a.d(t, "a", (function() {
            return i
        }
        )),
        a.d(t, "b", (function() {
            return n
        }
        )),
        function(e) {
            e.INITIAL = "Initial",
            e.READY = "Ready",
            e.PLAYING = "Playing",
            e.PAUSED = "Paused",
            e.LOADING = "Loading",
            e.ENDED = "Ended"
        }(i || (i = {})),
        function(e) {
            e.TWITCH = "Twitch",
            e.YOUTUBE = "Youtube"
        }(n || (n = {}))
    },
    1096: function(e, t, a) {
        "use strict";
        a.r(t);
        a(39),
        a(47),
        a(33);
        var i = a(0)
          , n = a(1075)
          , o = a(1203)
          , s = a(1204)
          , r = a(1205)
          , l = a(1236)
          , u = a(232)
          , d = i.default.extend({
            name: "Video",
            components: {
                VideoTwitch: o.default,
                VideoYoutube: s.default,
                VideoCover: r.default,
                VideoControls: l.default,
                Loader: u.default
            },
            props: {
                service: {
                    type: String,
                    required: !0
                },
                videoId: {
                    type: String,
                    required: !0
                },
                autoPlay: Boolean,
                containHeight: Boolean,
                onlyMuteControl: Boolean,
                hideExpandButton: Boolean,
                coverImageOnLoad: Boolean,
                isLivestream: Boolean,
                loop: Boolean,
                showFeedOnRight: Boolean
            },
            data: function() {
                return {
                    VideoService: n.b,
                    showControls: !1,
                    muted: !0,
                    playerState: n.a.INITIAL,
                    showCoverImage: this.coverImageOnLoad,
                    playerEventBus: new i.default,
                    hideCoverImageHandle: null
                }
            },
            computed: {
                expanded: function() {
                    return this.showFeedOnRight
                },
                containerRef: function() {
                    return this.$refs.container
                },
                playerRef: function() {
                    return this.$refs.player
                },
                showPlayButton: function() {
                    return [n.a.READY, n.a.PAUSED, n.a.ENDED].includes(this.playerState)
                },
                showLoader: function() {
                    return this.playerState === n.a.LOADING || (!(this.playerState !== n.a.INITIAL || !this.showCoverImage) || this.playerState === n.a.PLAYING && this.showCoverImage)
                }
            },
            watch: {
                containHeight: function() {
                    this.containerRef.style.height = "100%",
                    this.playerRef.style.height = "100%",
                    this.playerRef.style.width = "100%"
                }
            },
            mounted: function() {
                var e = this;
                window.requestAnimationFrame(this.updateSize),
                this.$nuxt.$on("feed-right-expanded", (function() {
                    e.expanded = !0
                }
                )),
                this.$nuxt.$on("feed-right-collapsed", (function() {
                    e.expanded = !1
                }
                )),
                document.addEventListener("visibilitychange", (function() {
                    "visible" === document.visibilityState && e.autoPlay && e.playerState !== n.a.ENDED && e.playerEventBus.$emit("play")
                }
                ))
            },
            methods: {
                onPlayerStateChange: function(e) {
                    var t = this;
                    if (e === n.a.READY && this.autoPlay && (this.playerEventBus.$emit("mute"),
                    this.playerEventBus.$emit("play")),
                    e !== n.a.READY || this.autoPlay || (this.playerEventBus.$emit("unmute"),
                    this.showCoverImage = !0),
                    e !== n.a.PAUSED && e !== n.a.LOADING || (this.hideCoverImageHandle && clearTimeout(this.hideCoverImageHandle),
                    this.showCoverImage = !0),
                    e === n.a.PLAYING) {
                        var a = this.service === n.b.TWITCH ? 5e3 : 3e3;
                        this.hideCoverImageHandle = setTimeout((function() {
                            t.showCoverImage = !1
                        }
                        ), a)
                    }
                    e === n.a.ENDED && (this.hideCoverImageHandle && clearTimeout(this.hideCoverImageHandle),
                    this.showCoverImage = !0),
                    this.playerState = e
                },
                onMuteChange: function(e) {
                    this.muted = e
                },
                updateSize: function() {
                    var e = this.containerRef.getBoundingClientRect()
                      , t = .5625 * e.width;
                    if (this.containHeight) {
                        var a = Math.min(e.height, t);
                        this.playerRef.style.height = a + "px",
                        this.playerRef.style.width = a / .5625 + "px"
                    } else
                        this.containerRef.style.height = t + "px";
                    window.requestAnimationFrame(this.updateSize)
                },
                play: function() {
                    this.playerEventBus.$emit("user-play"),
                    this.onPlayerStateChange(n.a.LOADING)
                },
                refresh: function() {
                    this.playerEventBus.$emit("user-refresh"),
                    this.onPlayerStateChange(n.a.LOADING)
                },
                toggleSound: function() {
                    this.playerEventBus.$emit("toggleMute")
                },
                toggleFeed: function() {
                    var e = this;
                    this.$nextTick((function() {
                        e.$nuxt.$emit("feed-toggle")
                    }
                    ))
                },
                showStreamSelectModal: function() {
                    this.$accessor.modal.openLanguageSelectModalOpen(!0)
                }
            }
        })
          , h = (a(1250),
        a(1))
          , c = Object(h.a)(d, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                ref: "container",
                staticClass: "Video"
            }, [a("div", {
                ref: "player",
                staticClass: "Video__Player"
            }, [e.$props.service === e.VideoService.TWITCH ? a("VideoTwitch", {
                attrs: {
                    "video-id": e.$props.videoId,
                    "is-livestream": e.$props.isLivestream,
                    "auto-play": e.autoPlay,
                    "event-bus": e.playerEventBus
                },
                on: {
                    "player-state-change": e.onPlayerStateChange,
                    "mute-change": e.onMuteChange
                }
            }) : e._e(), e._v(" "), e.$props.service === e.VideoService.YOUTUBE ? a("VideoYoutube", {
                attrs: {
                    "video-id": e.$props.videoId,
                    "is-livestream": e.$props.isLivestream,
                    "auto-play": e.autoPlay,
                    "event-bus": e.playerEventBus,
                    loop: e.$props.loop
                },
                on: {
                    "player-state-change": e.onPlayerStateChange,
                    "mute-change": e.onMuteChange
                }
            }) : e._e(), e._v(" "), a("div", {
                staticClass: "Video__InteractionBlocker"
            }), e._v(" "), a("VideoCover", {
                attrs: {
                    visible: e.showCoverImage
                }
            }), e._v(" "), e.showLoader ? a("Loader") : e._e()], 1), e._v(" "), a("VideoControls", {
                attrs: {
                    "only-mute-control": e.$props.onlyMuteControl,
                    "hide-expand-button": e.$props.hideExpandButton,
                    "is-expanded": e.expanded,
                    "is-muted": e.muted,
                    "show-play-button": e.showPlayButton
                },
                on: {
                    "toggle-sound": e.toggleSound,
                    "toggle-feed": e.toggleFeed,
                    "show-stream-select": e.showStreamSelectModal,
                    refresh: e.refresh,
                    play: e.play
                }
            })], 1)
        }
        ), [], !1, null, "346ba5b2", null);
        t.default = c.exports;
        installComponents(c, {
            VideoTwitch: a(1203).default,
            VideoYoutube: a(1204).default,
            VideoCover: a(1205).default,
            Loader: a(232).default,
            VideoControls: a(1236).default
        })
    },
    1102: function(e, t, a) {
        var i = a(1151);
        i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        (0,
        a(8).default)("2c7e91da", i, !0, {
            sourceMap: !1
        })
    },
    1103: function(e, t, a) {
        var i = a(1153);
        i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        (0,
        a(8).default)("f8092c9c", i, !0, {
            sourceMap: !1
        })
    },
    1104: function(e, t, a) {
        var i = a(1155);
        i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        (0,
        a(8).default)("a796fa66", i, !0, {
            sourceMap: !1
        })
    },
    1150: function(e, t, a) {
        "use strict";
        a(1102)
    },
    1151: function(e, t, a) {
        var i = a(7)((function(e) {
            return e[1]
        }
        ));
        i.push([e.i, ".VideoTwitch[data-v-30b59a48]{display:flex;justify-content:center;align-items:center}.VideoTwitch[data-v-30b59a48],.VideoTwitch[data-v-30b59a48]  iframe,[data-v-30b59a48] .VideoTwitch__Video{width:100%;height:100%}", ""]),
        i.locals = {},
        e.exports = i
    },
    1152: function(e, t, a) {
        "use strict";
        a(1103)
    },
    1153: function(e, t, a) {
        var i = a(7)((function(e) {
            return e[1]
        }
        ));
        i.push([e.i, ".VideoYoutube[data-v-87ae8264]{display:flex;justify-content:center;align-items:center}.VideoYoutube[data-v-87ae8264],[data-v-87ae8264] .VideoYoutube__Video{width:100%;height:100%}", ""]),
        i.locals = {},
        e.exports = i
    },
    1154: function(e, t, a) {
        "use strict";
        a(1104)
    },
    1155: function(e, t, a) {
        var i = a(7)
          , n = a(100)
          , o = a(1156)
          , s = i((function(e) {
            return e[1]
        }
        ))
          , r = n(o);
        s.push([e.i, ".VideoCover[data-v-88a239e6]{position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;background:url(" + r + ");background-size:cover;opacity:1;transition:opacity 0s}.VideoCover--hidden[data-v-88a239e6]{opacity:0;transition:opacity .4s .2s}", ""]),
        s.locals = {},
        e.exports = s
    },
    1156: function(e, t, a) {
        e.exports = a.p + "img/video-cover1.d3531c1.jpg"
    },
    1203: function(e, t, a) {
        "use strict";
        a.r(t);
        a(33);
        var i, n = a(0), o = a(1075);
        !function(e) {
            e.VIDEO_READY = "video.ready",
            e.VIDEO_PLAY = "video.play",
            e.ENDED = "ended",
            e.PAUSE = "pause",
            e.PLAY = "play",
            e.PLAYBACK_BLOCKED = "playbackBlocked",
            e.PLAYING = "playing",
            e.OFFLINE = "offline",
            e.ONLINE = "online",
            e.READY = "ready"
        }(i || (i = {}));
        var s = n.default.extend({
            name: "VideoTwitch",
            props: {
                videoId: {
                    type: String,
                    required: !0
                },
                autoPlay: Boolean,
                eventBus: n.default,
                isLivestream: Boolean
            },
            data: function() {
                return {
                    player: null
                }
            },
            computed: {
                videoRef: function() {
                    return this.$refs.video
                }
            },
            watch: {
                videoId: function(e) {
                    this.player && (this.isLivestream ? this.player.setChannel(e) : this.player.setVideo(e, 0))
                }
            },
            mounted: function() {
                var e = this;
                this.eventBus.$on("user-play", (function() {
                    return e.onUserPlay()
                }
                )),
                this.eventBus.$on("user-refresh", (function() {
                    return e.onUserRefresh()
                }
                )),
                this.eventBus.$on("play", (function() {
                    var t;
                    return null === (t = e.player) || void 0 === t ? void 0 : t.play()
                }
                )),
                this.eventBus.$on("pause", (function() {
                    var t;
                    return null === (t = e.player) || void 0 === t ? void 0 : t.pause()
                }
                )),
                this.eventBus.$on("mute", (function() {
                    var t;
                    null === (t = e.player) || void 0 === t || t.setMuted(!0),
                    e.$emit("mute-change", !0)
                }
                )),
                this.eventBus.$on("unmute", (function() {
                    var t;
                    null === (t = e.player) || void 0 === t || t.setMuted(!1),
                    e.$emit("mute-change", !1)
                }
                )),
                this.eventBus.$on("toggleMute", (function() {
                    if (e.player) {
                        var t = !e.player.getMuted();
                        e.player.setMuted(t),
                        e.$emit("mute-change", t)
                    }
                }
                )),
                this.injectPlayer()
            },
            methods: {
                onUserPlay: function() {
                    var e;
                    null === (e = this.player) || void 0 === e || e.play()
                },
                onUserRefresh: function() {
                    var e, t, a = this;
                    this.isLivestream ? (null === (e = this.player) || void 0 === e || e.setChannel(""),
                    setTimeout((function() {
                        var e, t;
                        null === (e = a.player) || void 0 === e || e.setChannel(a.videoId),
                        null === (t = a.player) || void 0 === t || t.play()
                    }
                    ), 100)) : null === (t = this.player) || void 0 === t || t.play()
                },
                injectPlayer: function() {
                    var e, t = this;
                    if (!window.Twitch) {
                        var a = document.createElement("script");
                        a.src = "https://player.twitch.tv/js/embed/v1.js",
                        a.dataset.allow = "true";
                        var i = document.getElementsByTagName("script")[0];
                        null === (e = i.parentNode) || void 0 === e || e.insertBefore(a, i)
                    }
                    var n = setInterval((function() {
                        window.Twitch && (clearTimeout(n),
                        t.onPlayerInjected())
                    }
                    ), 100)
                },
                onPlayerInjected: function() {
                    this.player = new window.Twitch.Player(this.videoRef,{
                        channel: this.isLivestream ? this.videoId : void 0,
                        video: this.isLivestream ? void 0 : this.videoId,
                        autoplay: this.autoPlay,
                        muted: !0,
                        time: "0h0m0s"
                    }),
                    this.player.addEventListener(i.PLAYBACK_BLOCKED, (function() {}
                    )),
                    this.player.addEventListener(i.VIDEO_READY, this.onPlayerReady),
                    this.player.addEventListener(i.VIDEO_PLAY, this.onPlayerPlay),
                    this.player.addEventListener(i.PLAY, this.onPlayerPlay),
                    this.player.addEventListener(i.PAUSE, this.onPlayerPause),
                    this.player.addEventListener(i.ENDED, this.onPlayerEnded)
                },
                onPlayerReady: function() {
                    this.$emit("player-state-change", o.a.READY)
                },
                onPlayerVideoPlay: function() {
                    this.$emit("player-state-change", o.a.PLAYING)
                },
                onPlayerPlay: function() {
                    this.$emit("player-state-change", o.a.PLAYING)
                },
                onPlayerPause: function() {
                    this.$emit("player-state-change", o.a.PAUSED)
                },
                onPlayerEnded: function() {
                    this.$emit("player-state-change", o.a.ENDED)
                }
            }
        })
          , r = (a(1150),
        a(1))
          , l = Object(r.a)(s, (function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "VideoTwitch"
            }, [t("div", {
                ref: "video",
                staticClass: "VideoTwitch__Video"
            })])
        }
        ), [], !1, null, "30b59a48", null);
        t.default = l.exports
    },
    1204: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a(0)
          , n = a(1075)
          , o = i.default.extend({
            name: "VideoYouTube",
            props: {
                videoId: {
                    type: String,
                    required: !0
                },
                autoPlay: Boolean,
                eventBus: i.default,
                isLivestream: Boolean,
                loop: Boolean
            },
            data: function() {
                return {
                    player: null,
                    latestJumpToEndInvocationTime: 0
                }
            },
            computed: {
                videoRef: function() {
                    return this.$refs.video
                }
            },
            watch: {
                videoId: function(e) {
                    this.player && (this.autoPlay ? this.player.loadVideoById(e) : this.player.cueVideoById(e))
                }
            },
            mounted: function() {
                var e = this;
                this.eventBus.$on("user-play", (function() {
                    return e.onUserPlay()
                }
                )),
                this.eventBus.$on("user-refresh", (function() {
                    return e.onUserPlay()
                }
                )),
                this.eventBus.$on("play", (function() {
                    var t;
                    return null === (t = e.player) || void 0 === t ? void 0 : t.playVideo()
                }
                )),
                this.eventBus.$on("pause", (function() {
                    var t;
                    return null === (t = e.player) || void 0 === t ? void 0 : t.pauseVideo()
                }
                )),
                this.eventBus.$on("mute", (function() {
                    var t;
                    null === (t = e.player) || void 0 === t || t.mute(),
                    e.$emit("mute-change", !0)
                }
                )),
                this.eventBus.$on("unmute", (function() {
                    var t;
                    null === (t = e.player) || void 0 === t || t.unMute(),
                    e.$emit("mute-change", !1)
                }
                )),
                this.eventBus.$on("toggleMute", (function() {
                    e.player && (e.player.isMuted() ? (e.player.unMute(),
                    e.$emit("mute-change", !1)) : (e.player.mute(),
                    e.$emit("mute-change", !0)))
                }
                )),
                this.injectPlayer()
            },
            methods: {
                onUserPlay: function() {
                    var e, t, a;
                    this.isLivestream ? (null === (e = this.player) || void 0 === e || e.stopVideo(),
                    null === (t = this.player) || void 0 === t || t.playVideo()) : null === (a = this.player) || void 0 === a || a.playVideo()
                },
                injectPlayer: function() {
                    var e, t = this;
                    if (window.onYouTubeIframeAPIReady)
                        this.onPlayerInjected();
                    else {
                        var a = document.createElement("script");
                        a.src = "https://www.youtube.com/iframe_api";
                        var i = document.getElementsByTagName("script")[0];
                        null === (e = i.parentNode) || void 0 === e || e.insertBefore(a, i),
                        window.onYouTubeIframeAPIReady = function() {
                            t.onPlayerInjected()
                        }
                    }
                },
                onPlayerInjected: function() {
                    this.player = new window.YT.Player(this.videoRef,{
                        videoId: this.videoId,
                        playerVars: {
                            modestbranding: 1,
                            playsinline: 1,
                            disablekb: 1,
                            autoplay: this.autoPlay ? 1 : 0,
                            controls: 0,
                            showinfo: 0,
                            rel: 0,
                            loop: this.loop ? 1 : 0,
                            mute: 1,
                            fs: 0
                        },
                        events: {
                            onReady: this.onPlayerReady,
                            onStateChange: this.onStateChange
                        }
                    })
                },
                onPlayerReady: function() {
                    var e;
                    this.$emit("player-state-change", n.a.READY),
                    this.onStateChange({
                        data: null === (e = this.player) || void 0 === e ? void 0 : e.getPlayerState()
                    })
                },
                onPlaying: function() {
                    var e, t;
                    if (this.isLivestream) {
                        var a = (null === (e = this.player) || void 0 === e ? void 0 : e.getDuration()) || 0
                          , i = Date.now() - this.latestJumpToEndInvocationTime;
                        a && i > 5e3 && (null === (t = this.player) || void 0 === t || t.playVideo(),
                        this.latestJumpToEndInvocationTime = Date.now())
                    }
                },
                onStateChange: function(e) {
                    switch (e.data) {
                    case YT.PlayerState.UNSTARTED:
                        this.$emit("player-state-change", n.a.LOADING);
                        break;
                    case YT.PlayerState.PLAYING:
                        this.$emit("player-state-change", n.a.PLAYING),
                        this.onPlaying();
                        break;
                    case YT.PlayerState.PAUSED:
                        this.$emit("player-state-change", n.a.PAUSED);
                        break;
                    case YT.PlayerState.ENDED:
                        this.$emit("player-state-change", n.a.ENDED);
                        break;
                    case YT.PlayerState.CUED:
                        this.$emit("player-state-change", n.a.PAUSED)
                    }
                }
            }
        })
          , s = (a(1152),
        a(1))
          , r = Object(s.a)(o, (function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "VideoYoutube"
            }, [t("div", {
                ref: "video",
                staticClass: "VideoYoutube__Video"
            })])
        }
        ), [], !1, null, "87ae8264", null);
        t.default = r.exports
    },
    1205: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a(0).default.extend({
            name: "VideoCover",
            props: {
                visible: Boolean
            }
        })
          , n = (a(1154),
        a(1))
          , o = Object(n.a)(i, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("div", {
                directives: [{
                    name: "class-mods",
                    rawName: "v-class-mods",
                    value: {
                        hidden: !e.$props.visible
                    },
                    expression: "{ hidden: !$props.visible }"
                }],
                staticClass: "VideoCover"
            })
        }
        ), [], !1, null, "88a239e6", null);
        t.default = o.exports
    },
    1211: function(e, t, a) {
        var i = a(1251);
        i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        (0,
        a(8).default)("33f8bc70", i, !0, {
            sourceMap: !1
        })
    },
    1250: function(e, t, a) {
        "use strict";
        a(1211)
    },
    1251: function(e, t, a) {
        var i = a(7)((function(e) {
            return e[1]
        }
        ));
        i.push([e.i, ".Video[data-v-346ba5b2]{position:relative;overflow:hidden;width:100%;height:100%}.Video__Player[data-v-346ba5b2]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);bottom:0;right:0;width:100%;height:100%}.Video__InteractionBlocker[data-v-346ba5b2]{position:absolute;top:0;left:0;bottom:0;right:0}", ""]),
        i.locals = {},
        e.exports = i
    }
}]);
