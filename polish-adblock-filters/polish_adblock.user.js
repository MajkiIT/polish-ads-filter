// ==UserScript==
// @name         wp.pl
// @version      0.2
// @description  Pozbycie siÄ™ reklam i komunikatu o adblocku na stronach naleÅ¼Ä…cych do wp.pl
// @author       F4z
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
// @match        *://*.wp.tv/*
// @match        *://*.wrzuta.pl/*
// @match        *://*.pudelek.pl/*
// @run-at       document-start
// @grant        none
// @updateURL https://raw.githubusercontent.com/MajkiIT/polish-ads-filter/master/polish-adblock-filters/polish_adblock.user.js
// @downloadURL https://raw.githubusercontent.com/MajkiIT/polish-ads-filter/master/polish-adblock-filters/polish_adblock.user.js
// ==/UserScript==

(function(b) {
    function a() {
        "advertisement" != arguments[0] && b.apply(window, arguments)
    }
    Object.defineProperties(window, {
        hasSentinel: {
            get: function() {
                return function() {
                    return !1
                }
            },
            set: function() {}
        },
        addEventListener: {
            get: function() {
                return a
            },
            set: function(a) {
                b = a
            }
        }
    })
})(window.addEventListener);
