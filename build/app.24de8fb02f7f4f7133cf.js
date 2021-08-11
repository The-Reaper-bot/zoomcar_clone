webpackJsonp([4], [, , function(a, e) {
    a.exports = function(a, e, t, o, n) {
        var i, s = a = a || {},
            r = typeof a.default;
        "object" !== r && "function" !== r || (i = a, s = a.default);
        var d = "function" == typeof s ? s.options : s;
        e && (d.render = e.render, d.staticRenderFns = e.staticRenderFns), o && (d._scopeId = o);
        var l;
        if (n ? (l = function(a) {
                a = a || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, a || "undefined" == typeof __VUE_SSR_CONTEXT__ || (a = __VUE_SSR_CONTEXT__), t && t.call(this, a), a && a._registeredComponents && a._registeredComponents.add(n)
            }, d._ssrRegister = l) : t && (l = t), l) {
            var c = d.functional,
                u = c ? d.render : d.beforeCreate;
            c ? d.render = function(a, e) {
                return l.call(e), u(a, e)
            } : d.beforeCreate = u ? [].concat(u, l) : [l]
        }
        return {
            esModule: i,
            exports: s,
            options: d
        }
    }
}, function(a, e, t) {
    "use strict";
    var o = t(24),
        n = function(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }(o);
    a.exports = n.default
}, function(a, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = Object.assign || function(a) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (a[o] = t[o])
        }
        return a
    };
    e.tracking = {
        created: function() {
            this.$on("segment-track", this.segmentTracking)
        },
        computed: {
            city: function() {
                return this.getCookie("city")
            }
        },
        methods: {
            getCookie: function(a) {
                var e = document.cookie.match(RegExp("(?:^|;\\s*)" + function(a) {
                    return a.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1")
                }(a) + "=([^;]*)"));
                return e ? e[1] : null
            },
            segmentTracking: function(a, e) {
                analytics ? analytics.track(a, o({}, e, {
                    email_id: window.email,
                    city: this.city,
                    cookies: document.cookie
                })) : console.error("Analytics hasn't been loaded yet.")
            }
        }
    }
}, function(a, e) {}, function(a, e, t) {
    ! function(e, t) {
        a.exports = function() {
            return function(a) {
                function e(o) {
                    if (t[o]) return t[o].exports;
                    var n = t[o] = {
                        exports: {},
                        id: o,
                        loaded: !1
                    };
                    return a[o].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
                }
                var t = {};
                return e.m = a, e.c = t, e.p = "", e(0)
            }([function(a, e, t) {
                "use strict";
                var o = t(2),
                    n = function(a) {
                        return a && a.__esModule ? a : {
                            default: a
                        }
                    }(o);
                a.exports = n.default
            }, function(a, e) {
                function t(a) {
                    var e = typeof a;
                    return null != a && ("object" == e || "function" == e)
                }
                a.exports = t
            }, function(a, e, t) {
                "use strict";

                function o(a) {
                    return a && a.__esModule ? a : {
                        default: a
                    }
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = t(9),
                    i = o(n),
                    s = t(3),
                    r = o(s),
                    d = t(4);
                e.default = function() {
                    if ("undefined" != typeof window) {
                        var a = ["scroll", "resize", "load"],
                            e = {
                                history: []
                            },
                            t = {
                                offset: {},
                                threshold: 0,
                                test: d.inViewport
                            },
                            o = (0, i.default)(function() {
                                e.history.forEach(function(a) {
                                    e[a].check()
                                })
                            }, 100);
                        a.forEach(function(a) {
                            return addEventListener(a, o)
                        }), window.MutationObserver && addEventListener("DOMContentLoaded", function() {
                            new MutationObserver(o).observe(document.body, {
                                attributes: !0,
                                childList: !0,
                                subtree: !0
                            })
                        });
                        var n = function(a) {
                            if ("string" == typeof a) {
                                var o = [].slice.call(document.querySelectorAll(a));
                                return e.history.indexOf(a) > -1 ? e[a].elements = o : (e[a] = (0, r.default)(o, t), e.history.push(a)), e[a]
                            }
                        };
                        return n.offset = function(a) {
                            if (void 0 === a) return t.offset;
                            var e = function(a) {
                                return "number" == typeof a
                            };
                            return ["top", "right", "bottom", "left"].forEach(e(a) ? function(e) {
                                return t.offset[e] = a
                            } : function(o) {
                                return e(a[o]) ? t.offset[o] = a[o] : null
                            }), t.offset
                        }, n.threshold = function(a) {
                            return "number" == typeof a && a >= 0 && a <= 1 ? t.threshold = a : t.threshold
                        }, n.test = function(a) {
                            return "function" == typeof a ? t.test = a : t.test
                        }, n.is = function(a) {
                            return t.test(a, t)
                        }, n.offset(0), n
                    }
                }()
            }, function(a, e) {
                "use strict";

                function t(a, e) {
                    if (!(a instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = function() {
                        function a(a, e) {
                            for (var t = 0; t < e.length; t++) {
                                var o = e[t];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(a, o.key, o)
                            }
                        }
                        return function(e, t, o) {
                            return t && a(e.prototype, t), o && a(e, o), e
                        }
                    }(),
                    n = function() {
                        function a(e, o) {
                            t(this, a), this.options = o, this.elements = e, this.current = [], this.handlers = {
                                enter: [],
                                exit: []
                            }, this.singles = {
                                enter: [],
                                exit: []
                            }
                        }
                        return o(a, [{
                            key: "check",
                            value: function() {
                                var a = this;
                                return this.elements.forEach(function(e) {
                                    var t = a.options.test(e, a.options),
                                        o = a.current.indexOf(e),
                                        n = o > -1,
                                        i = t && !n,
                                        s = !t && n;
                                    i && (a.current.push(e), a.emit("enter", e)), s && (a.current.splice(o, 1), a.emit("exit", e))
                                }), this
                            }
                        }, {
                            key: "on",
                            value: function(a, e) {
                                return this.handlers[a].push(e), this
                            }
                        }, {
                            key: "once",
                            value: function(a, e) {
                                return this.singles[a].unshift(e), this
                            }
                        }, {
                            key: "emit",
                            value: function(a, e) {
                                for (; this.singles[a].length;) this.singles[a].pop()(e);
                                for (var t = this.handlers[a].length; --t > -1;) this.handlers[a][t](e);
                                return this
                            }
                        }]), a
                    }();
                e.default = function(a, e) {
                    return new n(a, e)
                }
            }, function(a, e) {
                "use strict";

                function t(a, e) {
                    var t = a.getBoundingClientRect(),
                        o = t.top,
                        n = t.right,
                        i = t.bottom,
                        s = t.left,
                        r = t.width,
                        d = t.height,
                        l = {
                            t: i,
                            r: window.innerWidth - s,
                            b: window.innerHeight - o,
                            l: n
                        },
                        c = {
                            x: e.threshold * r,
                            y: e.threshold * d
                        };
                    return l.t > e.offset.top + c.y && l.r > e.offset.right + c.x && l.b > e.offset.bottom + c.y && l.l > e.offset.left + c.x
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.inViewport = t
            }, function(a, e) {
                (function(e) {
                    var t = "object" == typeof e && e && e.Object === Object && e;
                    a.exports = t
                }).call(e, function() {
                    return this
                }())
            }, function(a, e, t) {
                var o = t(5),
                    n = "object" == typeof self && self && self.Object === Object && self,
                    i = o || n || Function("return this")();
                a.exports = i
            }, function(a, e, t) {
                function o(a, e, t) {
                    function o(e) {
                        var t = _,
                            o = y;
                        return _ = y = void 0, O = e, z = a.apply(o, t)
                    }

                    function c(a) {
                        return O = a, k = setTimeout(p, e), T ? o(a) : z
                    }

                    function u(a) {
                        var t = a - v,
                            o = a - O,
                            n = e - t;
                        return E ? l(n, w - o) : n
                    }

                    function m(a) {
                        var t = a - v,
                            o = a - O;
                        return void 0 === v || t >= e || t < 0 || E && o >= w
                    }

                    function p() {
                        var a = i();
                        return m(a) ? f(a) : void(k = setTimeout(p, u(a)))
                    }

                    function f(a) {
                        return k = void 0, S && _ ? o(a) : (_ = y = void 0, z)
                    }

                    function b() {
                        void 0 !== k && clearTimeout(k), O = 0, _ = v = y = k = void 0
                    }

                    function h() {
                        return void 0 === k ? z : f(i())
                    }

                    function g() {
                        var a = i(),
                            t = m(a);
                        if (_ = arguments, y = this, v = a, t) {
                            if (void 0 === k) return c(v);
                            if (E) return k = setTimeout(p, e), o(v)
                        }
                        return void 0 === k && (k = setTimeout(p, e)), z
                    }
                    var _, y, w, z, k, v, O = 0,
                        T = !1,
                        E = !1,
                        S = !0;
                    if ("function" != typeof a) throw new TypeError(r);
                    return e = s(e) || 0, n(t) && (T = !!t.leading, E = "maxWait" in t, w = E ? d(s(t.maxWait) || 0, e) : w, S = "trailing" in t ? !!t.trailing : S), g.cancel = b, g.flush = h, g
                }
                var n = t(1),
                    i = t(8),
                    s = t(10),
                    r = "Expected a function",
                    d = Math.max,
                    l = Math.min;
                a.exports = o
            }, function(a, e, t) {
                var o = t(6),
                    n = function() {
                        return o.Date.now()
                    };
                a.exports = n
            }, function(a, e, t) {
                function o(a, e, t) {
                    var o = !0,
                        r = !0;
                    if ("function" != typeof a) throw new TypeError(s);
                    return i(t) && (o = "leading" in t ? !!t.leading : o, r = "trailing" in t ? !!t.trailing : r), n(a, e, {
                        leading: o,
                        maxWait: e,
                        trailing: r
                    })
                }
                var n = t(7),
                    i = t(1),
                    s = "Expected a function";
                a.exports = o
            }, function(a, e) {
                function t(a) {
                    return a
                }
                a.exports = t
            }])
        }()
    }()
}, function(a, e) {
    a.exports = [{
        name: "Nashik",
        link_name: "nashik",
        hd_enabled: !1,
        hd_fee: 199,
        lat: 20.005372675894698,
        lng: 73.76559992536659,
        popular: !1,
        one_way_enabled: !0,
        id: "e745e954-2f9e-4c13-84e4-04c4ce4603c1",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }]
    }, {
        name: "Chandigarh",
        link_name: "chandigarh",
        hd_enabled: !0,
        hd_fee: 599,
        lat: 30.685163937659564,
        lng: 76.53694152832031,
        popular: !0,
        one_way_enabled: !0,
        id: "502af13b-3856-488e-910f-086153791d98",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/2c335cd7b3bea26f8ee2e399572e7b1bab86a921.png?1497538647",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Udupi-Manipal",
        link_name: "udupi",
        hd_enabled: !0,
        hd_fee: 399,
        lat: 13.332662226210886,
        lng: 74.73627770747271,
        popular: !1,
        one_way_enabled: !0,
        id: "88340a12-c27a-4156-8afa-b1b1b74e7ca0",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Kochi",
        link_name: "kochi",
        hd_enabled: !0,
        hd_fee: 299,
        lat: 9.921507678364286,
        lng: 76.27103000879288,
        popular: !1,
        one_way_enabled: !0,
        id: "1fb87a4c-7a21-45a9-a4e3-f41ae78eba34",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }]
    }, {
        name: "Patna",
        link_name: "patna",
        hd_enabled: !0,
        hd_fee: 399,
        lat: 25.588170854476576,
        lng: 85.13486411723193,
        popular: !1,
        one_way_enabled: !0,
        id: "5e8f68f6-225a-469e-ae09-d1568dbd9329",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }]
    }, {
        name: "Coimbatore",
        link_name: "coimbatore",
        hd_enabled: !0,
        hd_fee: 299,
        lat: 11.103620579499848,
        lng: 76.92386627197266,
        popular: !1,
        one_way_enabled: !0,
        id: "4f3945d2-40b7-44d8-978f-2f71d56b1c9e",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Indore",
        link_name: "indore",
        hd_enabled: !0,
        hd_fee: 98,
        lat: 22.715865057588953,
        lng: 75.8576962351799,
        popular: !1,
        one_way_enabled: !0,
        id: "79100c61-556a-457a-9718-29a50b464888",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Guwahati",
        link_name: "guwahati",
        hd_enabled: !0,
        hd_fee: 499,
        lat: 26.162012414311945,
        lng: 91.76513761281967,
        popular: !1,
        one_way_enabled: !0,
        id: "bc892e6a-d667-4eed-80aa-11e1dd4f5ad8",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Hyderabad",
        link_name: "hyderabad",
        hd_enabled: !0,
        hd_fee: 499,
        lat: 17.435165651384928,
        lng: 78.39293628931046,
        popular: !0,
        one_way_enabled: !0,
        id: "a5d8ba58-76d1-4314-a965-0bf4f3a010fa",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/ec01720d5e98455a7607a3c18d6c3804e65f9299.png?1497538617",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Calicut",
        link_name: "calicut",
        hd_enabled: !1,
        hd_fee: 199,
        lat: 11.258833339829588,
        lng: 75.77713014526364,
        popular: !1,
        one_way_enabled: !0,
        id: "64281d80-ecda-4248-814c-70ff539b6635",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 4
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Bangalore",
        link_name: "bangalore",
        hd_enabled: !0,
        hd_fee: 199,
        lat: 12.96095134541796,
        lng: 77.63711984605538,
        popular: !0,
        one_way_enabled: !0,
        id: "a4125ea1-5aa9-44fb-8511-fcf93582b867",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/f00bd521d24e52b5ca9a2a3b8bb2ebf49df9e933.png?1497538418",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !0,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "free_float",
            header: "Ride Now within City",
            sub_header: "Pick up immediately, Drop off anywhere within the city limits.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/40f7eaaedb8fcb3463922b5472b0bc28353eea0d.png?1594715143",
            redirect_page: "FREE_FLOAT",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }, {
            name: "e_scooter",
            header: "Pick Up an eScooter",
            sub_header: "Go around within the city limits in the most affordable way.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/b848f84cceae5b70022c0d7705be259caf3e2f44.png?1594715185",
            redirect_page: "AMPSEARCH",
            metadata: {
                url: null,
                title: null
            }
        }]
    }, {
        name: "Jaipur",
        link_name: "jaipur",
        hd_enabled: !0,
        hd_fee: 399,
        lat: 26.91204422056561,
        lng: 75.78791454434395,
        popular: !1,
        one_way_enabled: !0,
        id: "163fe7be-6efd-4c76-9cbf-ebe62465b22c",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Lucknow",
        link_name: "lucknow",
        hd_enabled: !0,
        hd_fee: 399,
        lat: 26.805211129330495,
        lng: 80.9006669374922,
        popular: !1,
        one_way_enabled: !0,
        id: "309525b9-e7e9-4c79-a943-fa427bb1f8be",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }]
    }, {
        name: "Bhopal",
        link_name: "bhopal",
        hd_enabled: !0,
        hd_fee: 99,
        lat: 23.22212204885421,
        lng: 77.43841529045449,
        popular: !1,
        one_way_enabled: !0,
        id: "4a3bff3d-7ee5-48fb-8422-027132f8d86d",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Kolkata",
        link_name: "kolkata",
        hd_enabled: !0,
        hd_fee: 650,
        lat: 22.53035146132967,
        lng: 88.35275245131925,
        popular: !0,
        one_way_enabled: !0,
        id: "031c2926-ac23-4978-afde-bca80738e92f",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/1bd598da24dd1adf40782943d749b4ae985898d5.png?1497538676",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Nagpur",
        link_name: "nagpur",
        hd_enabled: !0,
        hd_fee: 99,
        lat: 21.14855378170439,
        lng: 79.09056007862091,
        popular: !1,
        one_way_enabled: !0,
        id: "0608e8f6-8ee5-463a-8f9d-8814bf1599c8",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Mysore",
        link_name: "mysore",
        hd_enabled: !0,
        hd_fee: 199,
        lat: 12.305118866797502,
        lng: 76.64401531219482,
        popular: !1,
        one_way_enabled: !0,
        id: "ff769f8f-f693-44d9-a071-d29fc5a39201",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Raipur",
        link_name: "raipur",
        hd_enabled: !1,
        hd_fee: 799,
        lat: 21.239201141300235,
        lng: 81.63564090531963,
        popular: !1,
        one_way_enabled: !1,
        id: "f7f747ca-b802-4464-82b8-97593d64e88d",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Vijayawada",
        link_name: "vijayawada",
        hd_enabled: !0,
        hd_fee: 299,
        lat: 16.78219076489986,
        lng: 80.5517578125,
        popular: !1,
        one_way_enabled: !0,
        id: "2b11c8e2-8a1d-49f2-825c-2aa2e7e79f59",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Mumbai",
        link_name: "mumbai",
        hd_enabled: !0,
        hd_fee: 99,
        lat: 19.01019029439606,
        lng: 73.03934097290039,
        popular: !0,
        one_way_enabled: !0,
        id: "335e2ef8-9259-40a3-a691-4254b1c0cf9e",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/e1abfe1b888a392ff8cc7ac4b19be66026bc4d0e.png?1497538549",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Delhi NCR",
        link_name: "delhi",
        hd_enabled: !0,
        hd_fee: 399,
        lat: 28.629658043848902,
        lng: 77.08167470991611,
        popular: !0,
        one_way_enabled: !0,
        id: "ace71b2e-5756-4838-940d-3dd8d3cfacdf",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/5b9f025a2b89481a148d60ecec80f6f465491815.png?1497538509",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Chennai",
        link_name: "chennai",
        hd_enabled: !0,
        hd_fee: 299,
        lat: 13.029645271172528,
        lng: 79.92210388183594,
        popular: !0,
        one_way_enabled: !0,
        id: "743fe1cf-ed0f-4ea5-b06d-049d7420509b",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/72146518feb0424f786d36533dbacb4eaa22ea82.png?1497538586",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Vadodara",
        link_name: "vadodara",
        hd_enabled: !0,
        hd_fee: 99,
        lat: 22.318941833065775,
        lng: 73.18820357322693,
        popular: !0,
        one_way_enabled: !0,
        id: "5a58b97b-8284-4965-973a-455c43d73d2f",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }]
    }, {
        name: "Pune",
        link_name: "pune",
        hd_enabled: !0,
        hd_fee: 99,
        lat: 18.547975570583468,
        lng: 73.7347412109375,
        popular: !0,
        one_way_enabled: !0,
        id: "c4f90a78-f07e-407f-bcb7-77a899f4665b",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/c198e0443ff4edf7f90a8d84dd6cf922de4f13eb.png?1497538483",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Bhubaneswar",
        link_name: "bhubaneswar",
        hd_enabled: !0,
        hd_fee: 600,
        lat: 20.285384944611792,
        lng: 85.80813243985176,
        popular: !1,
        one_way_enabled: !0,
        id: "a0325fd8-b4f7-46af-acdb-f7714982f578",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Siliguri",
        link_name: "siliguri",
        hd_enabled: !0,
        hd_fee: 600,
        lat: 26.937986749209887,
        lng: 88.32904815673828,
        popular: !1,
        one_way_enabled: !0,
        id: "e5309521-6054-443b-9aa3-a135af12de88",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }]
    }, {
        name: "Trichy",
        link_name: "trichy",
        hd_enabled: !0,
        hd_fee: 299,
        lat: 10.773026889484848,
        lng: 78.71510450400262,
        popular: !1,
        one_way_enabled: !0,
        id: "cfaa3ffd-8eef-476d-a347-65288ee7d42d",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }]
    }, {
        name: "Vizag",
        link_name: "vizag",
        hd_enabled: !0,
        hd_fee: 299,
        lat: 17.683278409289212,
        lng: 83.2024884223938,
        popular: !1,
        one_way_enabled: !0,
        id: "9d98f3c1-1a29-4a8e-ab3a-04cb7ad23972",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }, {
        name: "Ahmedabad",
        link_name: "ahmedabad",
        hd_enabled: !0,
        hd_fee: 99,
        lat: 23.022867960949082,
        lng: 72.57513642311096,
        popular: !1,
        one_way_enabled: !0,
        id: "b5c81443-ef75-489a-8afb-683ddc9d2bcd",
        phone: "08068976666",
        icon: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/73152f43661d0e17c9c544bb5d69da80d62c7abc.png?1497538181",
        img: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/e0d45cd679e056aa8268bc04d025f79505cf03f1.jpg?1587744262",
        enabled: !0,
        bracket: {
            with_fuel: {
                enabled: !0,
                min_booking_hours: 0
            },
            no_fuel: {
                enabled: !0,
                min_booking_hours: 8
            },
            search_default: "NO_FUEL"
        },
        radius: 1e5,
        hd_duration: 180,
        amp_enabled: !1,
        products: [{
            name: "normal",
            header: "Schedule a Round Trip",
            sub_header: "Outstation Road Trips, Visiting Temples, Shopping Malls etc.",
            default: !0,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131",
            redirect_page: "ROUND_TRIP",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "one_way",
            header: "One-Way to Nearby Cities",
            sub_header: "Drop off in a nearby city after a one-way trip.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157",
            redirect_page: "ONE_WAY",
            metadata: {
                url: null,
                title: null
            }
        }, {
            name: "zap",
            header: "Subscribe to a Personal Car",
            sub_header: "Zoomcar subscription from 1 month upto 2 years.",
            default: !1,
            image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/images/original/dacf266bd4d97a6c126e085de3b062b4049de891.png?1594715169",
            redirect_page: "WEBPAGE",
            metadata: {
                url: "https://zoomcar.com/zap/subscribe",
                title: "Subscribe to a Personal Car"
            }
        }]
    }]
}, , function(a, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = t(10),
        n = function(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }(o);
    e.default = {
        name: "entry-app",
        props: {
            showPedl: {
                type: Boolean,
                default: !1
            },
            platform: {
                type: String
            },
            showZoomcare: {
                type: Boolean,
                default: !1
            },
            saleInfo: {
                type: Object,
                default: function() {
                    return {
                        text: "",
                        redirectPath: ""
                    }
                }
            }
        },
        data: function() {
            return {
                showLogin: !1,
                userDetails: {},
                showUserOptions: !1,
                webUrl: "//www.zoomcar.com",
                isBookingFlow: !1,
                isPaytmFlow: !1,
                isWalletTried: !1,
                isLoggedIn: !1,
                googleId: "1022741829589-ms1t8peh8j5iahb23ct46ma8uvicc7lc.apps.googleusercontent.com",
                facebookId: "194504380711275",
                loyalUser: !1,
                availableZPoints: null
            }
        },
        mounted: function() {
            this.getUserDetails()
        },
        components: {
            Modal: n.default,
            Login: function() {
                return t.e(0).then(t.bind(null, 29))
            }
        },
        computed: {
            becomeAPedlHost: function() {
                return "//www.zoomcar.com/pedl-host"
            },
            userAccount: function() {
                return "//www.zoomcar.com/users/profile"
            },
            userProfileBookings: function() {
                return "//www.zoomcar.com/users/profile#bookings"
            },
            userProfileReferrals: function() {
                return "//www.zoomcar.com/users/profile#referrals"
            },
            supermiler: function() {
                return "//www.zoomcar.com/loyalty"
            },
            supermilerElite: function() {
                return "//www.zoomcar.com/supermiler-elite"
            }
        },
        methods: {
            getCookie: function(a) {
                var e = document.cookie.match(RegExp("(?:^|;\\s*)" + function(a) {
                    return a.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1")
                }(a) + "=([^;]*)"));
                return e ? e[1] : null
            },
            loggedIn: function(a) {
                this.userDetails = {
                    name: a.name,
                    loyalty_status: a.user.loyalty_status
                }, localStorage && localStorage.setItem("authToken", a.auth_token), 1 == a.user.loyalty_status && (this.loyalUser = !0, this.setZPoints()), this.isLoggedIn = !0, this.showLogin = !1, this.isBookingFlow && this.goToCheckout(), this.$emit("loggedIn", a.user)
            },
            getUserDetails: function() {
                var a = this;
                if (!this.getCookie("authToken")) return void(this.isLoggedIn = !1);
                fetch("//www.zoomcar.com/users/details_with_login_check", {
                    credentials: "include",
                    method: "GET"
                }).then(function(e) {
                    return e.ok ? e.json() : e.json().then(function(e) {
                        throw e.self = a, e
                    })
                }).then(function(e) {
                    1 == e.status && (a.userDetails = {
                        name: e.name,
                        loyalty_status: e.loyalty_status
                    }, 1 == e.loyalty_status && (a.loyalUser = !0, a.setZPoints()), a.$emit("loggedIn", e), a.isLoggedIn = !0)
                }).catch(function(e) {
                    1018 === e.error_code && (document.cookie = "authToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.zoomcar.com;", localStorage.removeItem("authToken"), a.loyalUser = !1, a.availableZPoints = null, a.$emit("loggedOut"), a.isBookingFlow = !1, a.isPaytmFlow = !1, a.isWalletTried = !1, a.isLoggedIn = !1)
                })
            },
            logOutUser: function() {
                var a = this;
                fetch("//www.zoomcar.com/users/sign_out", {
                    credentials: "include"
                }).then(function(e) {
                    e.ok && (document.cookie = "authToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.zoomcar.com;", localStorage.removeItem("authToken"), a.loyalUser = !1, a.availableZPoints = null, a.$emit("loggedOut"), a.isBookingFlow = !1, a.isPaytmFlow = !1, a.isWalletTried = !1, a.isLoggedIn = !1)
                }), this.segmentTrack("Logout")
            },
            setZPoints: function() {
                var a = this,
                    e = new FormData;
                e.append("auth_token", localStorage.getItem("authToken")), e.append("platform", "web"), fetch("//api.zoomcar.com/v4/loyalty/available_z_points", {
                    method: "POST",
                    body: e
                }).then(function(a) {
                    return a.json()
                }).then(function(e) {
                    a.availableZPoints = e.available_z_points
                })
            },
            segmentTrack: function(a) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Link_clicked";
                this.$emit("segment-track", e, {
                    id: a
                })
            },
            handleItemClick: function(a) {
                var e = "";
                switch (a) {
                    case "ZAP_Subscribe":
                        e = "/zap/subscribe";
                        break;
                    case "Amigo":
                        e = "/zap/subscribe/amigo";
                        break;
                    case "zms":
                        e = "/zoomcar-mobility-services";
                        break;
                    default:
                        e = "/"
                }
                this.segmentTrack(a), setTimeout(function() {
                    window.location.href = e
                }, 500)
            }
        }
    }
}, function(a, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = t(25),
        n = function(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }(o);
    e.default = n.default
}, function(a, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        name: "modal",
        mounted: function() {
            document.addEventListener("keydown", this.keyDownHandler), document.body.classList.add("no-scroll")
        },
        destroyed: function() {
            document.body.classList.remove("no-scroll")
        },
        methods: {
            closeModal: function() {
                document.removeEventListener("keydown", this.keyDownHandler), this.$emit("closeModal")
            },
            keyDownHandler: function(a) {
                27 === a.keyCode && this.closeModal()
            }
        }
    }
}, function(a, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), t(17);
    var o = t(9),
        n = function(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }(o);
    e.default = n.default
}, function(a, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), t(18);
    var o = t(11),
        n = function(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }(o);
    e.default = n.default
}, , function(a, e, t) {
    "use strict";

    function o(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }

    function n(a) {
        if (Array.isArray(a)) {
            for (var e = 0, t = Array(a.length); e < a.length; e++) t[e] = a[e];
            return t
        }
        return Array.from(a)
    }

    function i(a, e) {
        var t = document.getElementById(a),
            o = Array.prototype.slice.call(t.children),
            n = document.getElementsByClassName(e)[0];
        return [n, o.length, o.indexOf(n), o]
    }

    function s() {
        t.e(2).then(t.bind(null, 8)).then(function(a) {
            new m.default({
                render: function(e) {
                    return e(a, {
                        props: {
                            city_list: _.default
                        }
                    })
                }
            }).$mount("#citySelection")
        })
    }

    function r(a, e, t) {
        var o = "";
        if (t) {
            var n = new Date;
            n.setTime(n.getTime() + 24 * t * 60 * 60 * 1e3), o = " expires=" + n.toUTCString()
        }
        document.cookie = a + "=" + e + "; path=/;domain=" + window.location.hostname.replace("www.", "") + ";" + o
    }

    function d(a) {
        var e = document.cookie.match(RegExp("(?:^|;\\s*)" + function(a) {
            return a.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1")
        }(a) + "=([^;]*)"));
        return e ? e[1] : null
    }

    function l(a) {
        return new URL(window.location.href).searchParams.get(a)
    }
    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a
        } : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        },
        u = t(0),
        m = o(u),
        p = t(3),
        f = o(p),
        b = t(6),
        h = o(b);
    t(5);
    var g = t(7),
        _ = o(g),
        y = t(4),
        w = !1;
    m.default.mixin(y.tracking), m.default.directive("click-outside", {
        bind: function(a, e) {
            var t = e.modifiers.bubble,
                o = function(o) {
                    (t || !a.contains(o.target) && a !== o.target) && e.value(o)
                };
            a.__vueClickOutside__ = o, document.addEventListener("click", o)
        },
        unbind: function(a) {
            document.removeEventListener("click", a.__vueClickOutside__), a.__vueClickOutside__ = null
        }
    }), new m.default({
        render: function(a) {
            return a(f.default, {
                props: {
                    showPedl: window.location.href.includes("bangalore"),
                    platform: "zoomcar",
                    showZoomcare: !1
                },
                on: {
                    loggedIn: function(a) {
                        window.email = a.email, document.getElementById("signup-button").style.display = "none", a.loyalty_status && 2 == a.loyalty_status && (w = !0, document.getElementById("supermiler-elite-user").style.display = "block", document.getElementById("supermiler-user").style.display = "none")
                    },
                    loggedOut: function() {
                        window.email = void 0, w = !1, document.getElementById("signup-button").style.display = "inline-block", document.getElementById("supermiler-user").style.display = "block", document.getElementById("supermiler-elite-user").style.display = "none"
                    }
                }
            })
        }
    }).$mount("#header"), window.onload = function() {
        if (document.getElementById("citySelection") && s(), (0, h.default)(".lazy-img").on("enter", function(a) {
                a.src = a.dataset.src
            }), (0, h.default)(".bg-image").on("enter", function(a) {
                a.style.backgroundImage = "url(" + a.dataset.src + ")"
            }), t.e(3).then(t.bind(null, 16)), window.onscroll = function() {
                window.scrollY > 350 ? document.querySelector(".search-block").classList.add("search-fixed-top") : document.querySelector(".search-block").classList.remove("search-fixed-top")
            }, l("ref")) {
            var a = d("ref") || "",
                e = l("ref") || "";
            e && (a = (a ? a + "%2C" : "") + e), a = [].concat(n(new Set(a.split("%2C")))), a.length > 5 && a.shift(), r("ref", a.join("%2C"), 30), r("ref_initial", a.join("%2C")), r("ref_immediate", l("ref"))
        }
        document.querySelector("#select-city").onclick = function() {
            var a = document.createElement("div");
            a.id = "citySelection", document.querySelector(".cityWrapper").appendChild(a), s(), window.sTLink("City_Selection")
        }, document.querySelector(".testimonial .arrow.left").onclick = function() {
            var a = i("testimonials", "testimonialActive"),
                e = 0 == a[2] ? a[1] - 1 : a[2] - 1;
            a[0].classList.remove("testimonialActive"), a[3][e].classList.add("testimonialActive")
        }, document.querySelector(".testimonial .arrow.right").onclick = function() {
            var a = i("testimonials", "testimonialActive"),
                e = a[2] + 1 == a[1] ? 0 : a[2] + 1;
            a[0].classList.remove("testimonialActive"), a[3][e].classList.add("testimonialActive")
        }, setTimeout(function() {
            "object" == ("undefined" == typeof analytics ? "undefined" : c(analytics)) && analytics.track("Pages", {
                cookies: document.cookie
            })
        }, 2e3), document.getElementById("signup-button").onclick = function() {
            document.getElementsByClassName("user-bar")[0].click()
        }, document.querySelector(".carGroup .arrow.left").onclick = function() {
            var a = i("carList", "carListActive"),
                e = 0 == a[2] ? a[1] - 1 : a[2] - 1;
            a[0].classList.remove("carListActive"), a[3][e].classList.add("carListActive")
        }, document.querySelector(".carGroup .arrow.right").onclick = function() {
            var a = i("carList", "carListActive"),
                e = a[2] + 1 == a[1] ? 0 : a[2] + 1;
            a[0].classList.remove("carListActive"), a[3][e].classList.add("carListActive")
        }, w && (document.getElementById("supermiler-elite-user").style.display = "block")
    }, window.sTLink = function(a) {
        "Selection_Start" == a && event.currentTarget.classList.contains("search-fixed-top") && (a = "Selection_Start_Sticky"), analytics && "object" == ("undefined" == typeof analytics ? "undefined" : c(analytics)) && analytics.track("Link_clicked", {
            cookies: document.cookie,
            id: a,
            email_id: window.email
        })
    }
}, , function(a, e) {}, function(a, e) {}, function(a, e, t) {
    a.exports = t.p + "img/avatar.c1c7db47b001f54420ec53428173b51f.svg"
}, function(a, e, t) {
    a.exports = t.p + "img/logo.f0c7a9744cfeb3fb5c90eafda61dd2ce.svg"
}, , , , function(a, e, t) {
    var o = t(2)(t(12), t(27), null, null, null);
    a.exports = o.exports
}, function(a, e, t) {
    var o = t(2)(t(13), t(26), null, null, null);
    a.exports = o.exports
}, function(a, e) {
    a.exports = {
        render: function() {
            var a = this,
                e = a.$createElement,
                t = a._self._c || e;
            return t("div", {
                staticClass: "vue-modal-wrapper"
            }, [t("div", {
                staticClass: "modal-layer",
                on: {
                    click: a.closeModal
                }
            }), a._v(" "), t("div", {
                staticClass: "modal-box"
            }, [a._t("content")], 2)])
        },
        staticRenderFns: []
    }
}, function(a, e, t) {
    a.exports = {
        render: function() {
            var a = this,
                e = a.$createElement,
                o = a._self._c || e;
            return o("div", {}, [a.showLogin ? o("modal", {
                on: {
                    closeModal: function() {
                        a.showLogin = !1
                    }
                }
            }, [o("login", {
                attrs: {
                    slot: "content",
                    isBookingFlow: a.isBookingFlow,
                    facebookId: a.facebookId,
                    googleId: a.googleId,
                    isPaytmFlow: a.isPaytmFlow,
                    is_wallet_tried: a.isWalletTried,
                    platform: a.platform
                },
                on: {
                    loggedIn: a.loggedIn
                },
                slot: "content"
            })], 1) : a._e(), a._v(" "), o("div", {
                staticClass: "zoomcar-header"
            }, [a._m(0), a._v(" "), o("div", {
                staticClass: "header-links"
            }, [o("div", {
                staticClass: "header-links"
            }, [a.saleInfo && a.saleInfo.text && a.saleInfo.redirectPath ? o("div", {
                staticClass: "zap-link"
            }, [o("a", {
                attrs: {
                    href: a.saleInfo.redirectPath
                }
            }, [o("span", [a._v(a._s(a.saleInfo.text))])])]) : a._e(), a._v(" "), a.showZoomcare ? o("div", {
                staticClass: "zap-link"
            }, [o("a", {
                attrs: {
                    href: (this.getCookie("city") ? "/" + this.getCookie("city") : "") + "/commute"
                },
                on: {
                    click: function(e) {
                        a.segmentTrack("Zoomcare")
                    }
                }
            }, [o("span", [a._v("ZOOMCARE")])])]) : a._e(), a._v(" "), o("div", {
                staticClass: "zap-link"
            }, [o("a", {
                attrs: {
                    href: (this.getCookie("city") ? "/" + this.getCookie("city") : "") + "/offers"
                },
                on: {
                    click: function(e) {
                        a.segmentTrack("Offers")
                    }
                }
            }, [o("span", [a._v("OFFERS")])])]), a._v(" "), o("div", {
                staticClass: "zap-link"
            }, [o("a", {
                on: {
                    click: function(e) {
                        a.handleItemClick("ZAP_Subscribe")
                    }
                }
            }, [o("span", [a._v("SUBSCRIPTION")]), a._v(" "), a._m(1)])]), a._v(" "), o("div", {
                staticClass: "zap-link"
            }, [o("a", {
                on: {
                    click: function(e) {
                        a.handleItemClick("Amigo")
                    }
                }
            }, [o("span", [a._v("AMIGO")]), a._v(" "), a._m(2)])]), a._v(" "), o("div", {
                staticClass: "zap-link"
            }, [o("a", {
                on: {
                    click: function(e) {
                        a.handleItemClick("zms")
                    }
                }
            }, [o("span", [a._v("ZMS")]), a._v(" "), a._m(3)])]), a._v(" "), o("div", {
                staticClass: "app-link"
            }, [o("span", [a._v("MOBILE APP")]), a._v(" "), o("div", {
                staticClass: "app-stores"
            }, [o("a", {
                attrs: {
                    href: "https://play.google.com/store/apps/details?id=com.zoomcar&referrer=utm_source%3Dhome%2520page%26utm_medium%3Dheader%2520links%26utm_content%3Dandroid%26utm_campaign%3Dinstalls"
                },
                on: {
                    click: function(e) {
                        a.segmentTrack("Get Zoomcar Android App")
                    }
                }
            }, [o("span", [a._v("Google Play")])]), a._v(" "), o("a", {
                attrs: {
                    href: "https://itunes.apple.com/us/app/zoomcar-self-drive-cars/id889910218?mt=8&utm_source=home%20page&utm_medium=header%20links&utm_content=iOS&utm_campaign=installs"
                },
                on: {
                    click: function(e) {
                        a.segmentTrack("Get Zoomcar iPhone App")
                    }
                }
            }, [o("span", [a._v("App Store")])])])])]), a._v(" "), a.isLoggedIn ? o("div", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: function() {
                        a.showUserOptions = !1
                    },
                    expression: "(() => {showUserOptions = false})"
                }],
                staticClass: "user-bar"
            }, [o("div", {
                staticClass: "user-details",
                on: {
                    click: function(e) {
                        a.showUserOptions = !a.showUserOptions, a.segmentTrack("Profile")
                    }
                }
            }, [o("img", {
                attrs: {
                    src: t(19),
                    alt: "user-avatar"
                }
            }), a._v(" "), o("span", [a._v(a._s(a.userDetails.name.split(" ")[0]))])]), a._v(" "), o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: a.showUserOptions,
                    expression: "showUserOptions"
                }],
                staticClass: "user-options"
            }, [o("a", {
                attrs: {
                    href: a.userAccount
                },
                on: {
                    click: function(e) {
                        a.segmentTrack("My Account")
                    }
                }
            }, [a._v("MY ACCOUNT")]), a._v(" "), o("a", {
                attrs: {
                    href: a.userProfileBookings
                },
                on: {
                    click: function(e) {
                        a.segmentTrack("My Bookings")
                    }
                }
            }, [a._v("MY BOOKINGS")]), a._v(" "), 2 == a.userDetails.loyalty_status ? o("a", {
                attrs: {
                    href: a.supermilerElite
                },
                on: {
                    click: function(e) {
                        a.segmentTrack("Supermiler Elite Club")
                    }
                }
            }, [a._v("SUPERMILER ELITE CLUB")]) : o("a", {
                attrs: {
                    href: a.supermiler
                },
                on: {
                    click: function(e) {
                        a.segmentTrack("Supermiler Club")
                    }
                }
            }, [a._v("SUPERMILER CLUB")]), a._v(" "), o("a", {
                attrs: {
                    href: a.userProfileReferrals
                },
                on: {
                    click: function(e) {
                        a.segmentTrack("My Referrals")
                    }
                }
            }, [a._v("MY REFERRALS")]), a._v(" "), o("div", {
                staticClass: "log-out",
                on: {
                    click: a.logOutUser
                }
            }, [a._v("\n            LOGOUT\n          ")])])]) : o("div", {
                staticClass: "user-bar",
                on: {
                    click: function(e) {
                        a.showLogin = !0
                    }
                }
            }, [o("span", {
                on: {
                    click: function(e) {
                        a.segmentTrack("Signup")
                    }
                }
            }, [a._v("SIGNUP")]), a._v(" "), o("span", {
                on: {
                    click: function(e) {
                        a.segmentTrack("Login")
                    }
                }
            }, [a._v("LOGIN")])])])])], 1)
        },
        staticRenderFns: [function() {
            var a = this,
                e = a.$createElement,
                o = a._self._c || e;
            return o("a", {
                staticClass: "logo",
                attrs: {
                    href: "https://www.zoomcar.com"
                }
            }, [o("img", {
                attrs: {
                    src: t(20),
                    alt: "Zoomcar-Logo",
                    width: "105px",
                    height: "27px"
                }
            })])
        }, function() {
            var a = this,
                e = a.$createElement,
                t = a._self._c || e;
            return t("div", {
                staticClass: "zap-desc"
            }, [t("span", {
                staticClass: "zap-logo"
            }), a._v(" "), t("p", [a._v("Hassle-free way of getting your personal car for flexible long term duration. You also have an option to share your car with other Zoomcar customers & save up to 70% of the monthly subscription fee.")]), a._v(" "), t("div", {
                staticClass: "zap_btn"
            }, [a._v("\n                KNOW MORE\n              ")])])
        }, function() {
            var a = this,
                e = a.$createElement,
                t = a._self._c || e;
            return t("div", {
                staticClass: "zap-desc amigo-desc"
            }, [t("span", {
                staticClass: "amigo-logo"
            }), a._v(" "), t("p", [a._v("A unique Community Vehicle Pooling program that allows you to share your car with your community and friends while the car not in use and earn money.")]), a._v(" "), t("div", {
                staticClass: "zap_btn"
            }, [a._v("\n                KNOW MORE\n              ")])])
        }, function() {
            var a = this,
                e = a.$createElement,
                t = a._self._c || e;
            return t("div", {
                staticClass: "zap-desc zms-desc"
            }, [t("span", {
                staticClass: "zms-logo"
            }), a._v(" "), t("p", [a._v("Connected technology offerings and shared mobility solutions for businesses worldwide.")]), a._v(" "), t("div", {
                staticClass: "zap_btn"
            }, [a._v("\n                KNOW MORE\n              ")])])
        }]
    }
}], [15]);