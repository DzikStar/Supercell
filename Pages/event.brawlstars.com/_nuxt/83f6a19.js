(window.webpackJsonp = window.webpackJsonp || []).push([[20], {
    1396: function(e, a, t) {
        "use strict";
        t.r(a);
        t(33);
        var n = t(0)
          , s = t(16)
          , o = t(62)
          , i = t(119)
          , m = t(120)
          , r = t(223)
          , d = t(31)
          , l = n.default.extend({
            name: "FeedDebugComponent",
            components: {},
            computed: {},
            mounted: function() {
                var e = this;
                setTimeout((function() {
                    e.mockSendRewardCard(1),
                    setTimeout((function() {
                        setTimeout((function() {
                            setTimeout((function() {
                                setTimeout((function() {
                                    setTimeout((function() {}
                                    ), 3e3)
                                }
                                ), 3e3)
                            }
                            ), 3e3)
                        }
                        ), 3e3)
                    }
                    ), 3e3)
                }
                ), 3e3)
            },
            methods: {
                getEndTime: function() {
                    return Date.now() + 1e5
                },
                mockSendPoll: function(e) {
                    this.$eventSocket.mockMessage({
                        payload: {
                            interactionPoints: 2,
                            typeId: e,
                            question: "p0001_title",
                            answers: {
                                0: 14,
                                1: 32,
                                2: 12,
                                3: 34,
                                4: 45,
                                5: 18
                            },
                            alternatives: [{
                                color: "red",
                                value: "#2GRJR9"
                            }, {
                                color: "blue",
                                value: "#2RJ92Q"
                            }, {
                                color: "red",
                                value: "#2GLYGU"
                            }, {
                                color: "blue",
                                value: "#2GLPPG"
                            }, {
                                color: "red",
                                value: "#2GYV2L"
                            }, {
                                color: "blue",
                                value: "#2QYR9J"
                            }],
                            endTime: this.getEndTime()
                        },
                        messageType: s.a.TeamPoll,
                        timestamp: (new Date).getTime()
                    })
                },
                mockSendQuiz: function(e) {
                    this.$eventSocket.mockMessage({
                        payload: {
                            interactionPoints: 2,
                            typeId: e,
                            question: "q0013_title",
                            answers: {
                                0: 15,
                                1: 35,
                                2: 22,
                                3: 13,
                                4: 15
                            },
                            correctAnswer: {
                                alternative: 1,
                                points: 3
                            },
                            completed: !1,
                            alternatives: [{
                                color: "dark",
                                value: "SK Gaming",
                                nonTranslatable: !0
                            }, {
                                color: "dark",
                                value: "Tribe NA",
                                nonTranslatable: !0
                            }, {
                                color: "dark",
                                value: "Nova Esports",
                                nonTranslatable: !0
                            }, {
                                color: "dark",
                                value: "AC Milan Qlash",
                                nonTranslatable: !0
                            }],
                            endTime: this.getEndTime()
                        },
                        messageType: s.a.Quiz,
                        timestamp: (new Date).getTime()
                    })
                },
                mockSendQuiz2: function(e) {
                    this.$eventSocket.mockMessage({
                        payload: {
                            interactionPoints: 2,
                            typeId: e,
                            question: "q0010_title",
                            answers: {
                                0: 15,
                                1: 35,
                                2: 22,
                                3: 13
                            },
                            correctAnswer: {
                                alternative: 1,
                                points: 2
                            },
                            alternatives: [{
                                color: "dark",
                                value: "q0010_answer_1"
                            }, {
                                color: "dark",
                                value: "q0010_answer_2"
                            }, {
                                color: "dark",
                                value: "q0010_answer_3"
                            }, {
                                color: "dark",
                                value: "q0010_answer_4"
                            }],
                            endTime: this.getEndTime()
                        },
                        messageType: s.a.Quiz,
                        timestamp: (new Date).getTime()
                    })
                },
                mockSendSlider: function(e) {
                    this.$eventSocket.mockMessage({
                        payload: {
                            interactionPoints: 2,
                            typeId: e,
                            question: "s0002_title",
                            slider: {
                                minValue: 0,
                                maxValue: 50,
                                sliderIcon: ""
                            },
                            endTime: this.getEndTime()
                        },
                        messageType: s.a.SliderQuestion,
                        timestamp: (new Date).getTime()
                    })
                },
                mockSendRewardCard: function(e) {
                    this.$eventSocket.mockMessage({
                        payload: {
                            unlockedTier: e,
                            unlockedRewardPoints: 10,
                            ApproximateCreationDateTime: Date.now()
                        },
                        messageType: s.a.UnlockReward,
                        timestamp: (new Date).getTime()
                    })
                },
                mockSendCheerLevel: function(e, a) {
                    this.$eventSocket.mockMessage({
                        payload: {
                            cheer: [{
                                cheerColor: "red",
                                cheerLevel: e
                            }, {
                                cheerColor: "blue",
                                cheerLevel: a
                            }]
                        },
                        messageType: s.a.Cheer,
                        timestamp: (new Date).getTime()
                    })
                },
                sendPreSetCard: function() {
                    var e = {
                        typeId: "pre-set-card-id-1",
                        title: "some-title",
                        matchNr: 1,
                        match: [{
                            game: {
                                gameMode: o.a.GemGrab,
                                map: i.a.DeepDiner
                            },
                            state: "blue"
                        }, {
                            game: {
                                gameMode: o.a.Siege,
                                map: m.a.BotDrop
                            },
                            state: "red"
                        }, {
                            game: {
                                gameMode: o.a.BrawlBall,
                                map: r.a.CenterField
                            },
                            state: "active"
                        }, {
                            game: {
                                gameMode: o.a.GemGrab,
                                map: i.a.CottonCandyDreams
                            },
                            state: "inactive"
                        }, {
                            game: {
                                gameMode: o.a.Siege,
                                map: m.a.JunkPark
                            },
                            state: "inactive"
                        }],
                        teams: {
                            blue: {
                                teamNr: 3,
                                banned: [d.a.SHELLY, d.a.NITA]
                            },
                            red: {
                                teamNr: 4,
                                banned: [d.a.NITA, d.a.COLT]
                            }
                        }
                    };
                    this.$eventSocket.mockMessage({
                        payload: e,
                        messageType: s.a.PreSetCard,
                        timestamp: (new Date).getTime()
                    })
                },
                sendDuringCard: function() {
                    var e = {
                        typeId: "during-card-id-1_1",
                        title: "Set 0 / 5 | Game 1 / 3",
                        matchNr: 1,
                        players: {
                            blue: [{
                                char: d.a.SHELLY,
                                name: "#2Q9C80",
                                stats: {
                                    kills: 0,
                                    deaths: 0,
                                    damageDealt: 0
                                }
                            }, {
                                char: d.a.NITA,
                                name: "#2GLLV9",
                                stats: {
                                    kills: 0,
                                    deaths: 0,
                                    damageDealt: 0
                                }
                            }, {
                                char: d.a.COLT,
                                name: "#2QYR9J",
                                stats: {
                                    kills: 0,
                                    deaths: 0,
                                    damageDealt: 0
                                }
                            }],
                            red: [{
                                char: d.a.NITA,
                                name: "#2GQ829",
                                stats: {}
                            }, {
                                char: d.a.COLT,
                                name: "#2GLYGV",
                                stats: {}
                            }, {
                                char: d.a.SHELLY,
                                name: "#2QL2C8",
                                stats: {}
                            }]
                        },
                        match: [{
                            game: {
                                gameMode: o.a.GemGrab,
                                map: i.a.DeepDiner
                            },
                            maxGames: 0,
                            playedGames: 0,
                            state: "blue"
                        }, {
                            game: {
                                gameMode: o.a.Siege,
                                map: m.a.BotDrop
                            },
                            maxGames: 0,
                            playedGames: 0,
                            state: "red"
                        }, {
                            game: {
                                gameMode: o.a.BrawlBall,
                                map: r.a.CenterField
                            },
                            maxGames: 0,
                            playedGames: 0,
                            state: "active"
                        }, {
                            game: {
                                gameMode: o.a.GemGrab,
                                map: i.a.CottonCandyDreams
                            },
                            maxGames: 0,
                            playedGames: 0,
                            state: "inactive"
                        }, {
                            game: {
                                gameMode: o.a.Siege,
                                map: m.a.JunkPark
                            },
                            maxGames: 0,
                            playedGames: 0,
                            state: "inactive"
                        }]
                    };
                    this.$eventSocket.mockMessage({
                        payload: e,
                        messageType: s.a.DuringCard,
                        timestamp: (new Date).getTime()
                    })
                },
                sendPostSetCard: function() {
                    var e = {
                        typeId: "post-set-card-id-1",
                        matchNr: 1,
                        title: "post set card title",
                        match: [{
                            game: {
                                gameMode: o.a.GemGrab,
                                map: i.a.DeepDiner
                            },
                            matchWins: {
                                blue: 0,
                                red: 2
                            },
                            state: "blue"
                        }, {
                            game: {
                                gameMode: o.a.Siege,
                                map: m.a.BotDrop
                            },
                            matchWins: {
                                blue: 1,
                                red: 3
                            },
                            state: "red"
                        }, {
                            game: {
                                gameMode: o.a.BrawlBall,
                                map: r.a.CenterField
                            },
                            matchWins: {
                                blue: 1,
                                red: 4
                            },
                            state: "active"
                        }, {
                            game: {
                                gameMode: o.a.GemGrab,
                                map: i.a.CottonCandyDreams
                            },
                            matchWins: {
                                blue: 0,
                                red: 2
                            },
                            state: "inactive"
                        }, {
                            game: {
                                gameMode: o.a.Siege,
                                map: m.a.JunkPark
                            },
                            matchWins: {
                                blue: 0,
                                red: 2
                            },
                            state: "inactive"
                        }],
                        row1: {
                            title: "Highest DPS",
                            blue: {
                                char: d.a.SHELLY,
                                name: "#2QYR9J",
                                stat: 123
                            },
                            red: {
                                char: d.a.NITA,
                                name: "#2QYR9J",
                                stat: 99
                            }
                        },
                        row2: {
                            title: "Most Healing",
                            blue: {
                                char: d.a.COLT,
                                name: "#2QYR9J",
                                stat: 17936
                            },
                            red: {
                                char: d.a.COLT,
                                name: "#2QYR9J",
                                stat: 239478
                            }
                        }
                    };
                    this.$eventSocket.mockMessage({
                        payload: e,
                        messageType: s.a.PostSetCard,
                        timestamp: (new Date).getTime()
                    })
                },
                sendMatchPredictionCard: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.$eventSocket.mockMessage({
                        payload: {
                            interactionPoints: 5,
                            typeId: "match-prediction-card-id-1_".concat(e),
                            question: "mp0001_title",
                            answers: {
                                0: 1337,
                                1: 200
                            },
                            alternatives: [{
                                color: "red",
                                teamNr: 1
                            }, {
                                color: "blue",
                                teamNr: 2
                            }],
                            endTime: this.getEndTime(),
                            completed: !1
                        },
                        messageType: s.a.MatchPredictionQuestion,
                        timestamp: (new Date).getTime()
                    })
                },
                sendPostMatchCard: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1";
                    this.$eventSocket.mockMessage({
                        payload: {
                            typeId: "post-match-card-id-1_".concat(e),
                            title: "",
                            teams: [{
                                teamNr: 1,
                                setsWon: 2
                            }, {
                                teamNr: 2,
                                setsWon: 1
                            }]
                        },
                        messageType: s.a.PostMatchCard,
                        timestamp: (new Date).getTime()
                    })
                },
                mockSendLootDropCard: function(e) {
                    this.$eventSocket.mockMessage({
                        payload: {
                            typeId: "l0001",
                            interactionPoints: e,
                            endTime: this.getEndTime(),
                            title: "l0001_title",
                            actionTitle: "l0001_action_title"
                        },
                        messageType: s.a.LootDrop,
                        timestamp: (new Date).getTime()
                    })
                }
            }
        })
          , c = l
          , p = t(1)
          , u = Object(p.a)(c, (function() {
            var e = this.$createElement;
            return (this._self._c || e)("div")
        }
        ), [], !1, null, null, null);
        a.default = u.exports
    }
}]);
