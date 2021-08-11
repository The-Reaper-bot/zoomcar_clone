webpackJsonp([3], {
    16: function(e, t, n) {
        "use strict";
        var a = [];
        ! function(e, t, n, a, r) {
            e[a] = e[a] || [], e[a].push({
                "gtm.start": (new Date).getTime(),
                event: "gtm.js"
            });
            var o = t.getElementsByTagName(n)[0],
                i = t.createElement(n);
            i.async = !0, i.src = "//www.googletagmanager.com/gtm.js?id=GTM-NQRM5Q", o.parentNode.insertBefore(i, o)
        }(window, document, "script", "dataLayer"),
        function() {
            var e = window.analytics = window.analytics || [];
            if (!e.initialize)
                if (e.invoked) window.console && console.error && console.error("Segment snippet included twice.");
                else {
                    e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "page", "once", "off", "on"], e.factory = function(t) {
                        return function() {
                            var n = Array.prototype.slice.call(arguments);
                            return n.unshift(t), e.push(n), e
                        }
                    };
                    for (var t = 0; t < e.methods.length; t++) {
                        var n = e.methods[t];
                        e[n] = e.factory(n)
                    }
                    e.load = function(e) {
                        var t = document.createElement("script");
                        t.type = "text/javascript", t.async = !0, t.src = "https://cdn.segment.com/analytics.js/v1/" + e + "/analytics.min.js";
                        var n = document.getElementsByTagName("script")[0];
                        n.parentNode.insertBefore(t, n)
                    }, e.SNIPPET_VERSION = "3.1.0", e.load("KuhTnkyjhSzI0rfKtviDuQ1o9RRQ5iGW")
                }
        }(), a.push({
            event: "Homepage",
            userEmail: window.email || ""
        })
    }
});