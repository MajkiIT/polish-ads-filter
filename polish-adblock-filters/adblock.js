// ==UserScript==
// @name         wp.pl
// @version      0.1
// @description  Pozbycie siÄ™ reklam i komunikatu o adblocku na stronach naleÅ¼Ä…cych do wp.pl
// @author       
// @match        *://*.abczdrowie.pl/*
// @match        *://*.autokrata.pl/*
// @match        *://*.autokult.pl/*
// @match        *://*.biztok.pl/*
// @match        *://*.gadzetomania.pl/*
// @match        *://*.hotmoney.pl/*
// @match        *://*.kafeteria.pl/*
// @match        *://*.kafeteria.tv/*
// @match        *://*.komediowo.pl/*
// @match        *://*.komorkomania.pl/*
// @match        *://*.money.pl/*
// @match        *://*.money.pl/*
// @match        *://*.pudelek.tv/*
// @match        *://*.sfora.pl/*
// @match        *://*.snobka.pl/*
// @match        *://*.wawalove.pl/*
// @match        *://*.wp.pl/*
// @match        *://*.wp.tv
// @match        *://*.wrzuta.pl/*
// @match        *://*.pudelek.pl/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

document.cookie.split(";").forEach(function(a) {
    -1 != a.indexOf("PWA_adbd") && (document.cookie = a.replace(/^ +/, "").replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=." + location.hostname.split(".").reverse()[1] + "." + location.hostname.split(".").reverse()[0]))
});
(function() {
    function a() {
        "object" == typeof arguments[0] && (arguments[0].detection = !1);
        b.apply(window, arguments)
    }

    function b() {}

    function d() {
        "advertisement" != arguments[0] && c.apply(window, arguments)
    }
    var c = window.addEventListener;
    Object.defineProperties(window, {
        SentinelDetector: {
            get: function() {
                return function() {
                    this.start = function() {}
                }
            },
            set: function() {}
        },
        getScript: {
            get: function() {
                return a
            },
            set: function(a) {
                b = a
            }
        },
        addEventListener: {
            get: function() {
                return d
            },
            set: function(a) {
                c = a
            }
        }
    })
})();
