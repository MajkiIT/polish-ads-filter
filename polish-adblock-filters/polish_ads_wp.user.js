// ==UserScript==
// @name         Reklamy WP
// @namespace    F4z
// @version      0.2
// @description  Blokowanie reklam na wp.pl
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  var stronyWP = ["abczdrowie.pl", "allani.pl", "autokrata.pl", "autokult.pl", "biztok.pl", "www.dobreprogramy.pl", "dzieci.pl", "easygo.pl", "echirurgia.pl", "fotoblogia.pl", "gadzetomania.pl", "hotmoney.pl", "interaktywnie.com", "inwestycje.pl", "jejswiat.pl", "kafeteria.pl", "kafeteria.tv", "kantory.pl", "kazimierzdolny.pl", "komediowo.pl", "komorkomania.pl", "mazury.com", "mojeauto.pl", "mojeosiedle.pl", "nasygnale.pl", "niewiarygodne.pl", "nocowanie.pl", "o2.pl", "odkrywcy.pl", "open.fm", "parenting.pl", "pudelek.pl", "pudelek.tv", "pytamy.pl", "sfora.pl", "snobka.pl", "tlen.pl", "totalmoney.pl", "wakacje.pl", "wawalove.pl", "wp.tv"];

  for (var i = 0; i < stronyWP.length; i++) {
    if (window.location.hostname === stronyWP[i] || window.location.hostname.indexOf(".wp.pl") != -1) {
      Object.defineProperty(Object.prototype, 'bodies', {
        get: function get() {
          return function () {};
        },
        set: function set() {
          return function () {};
        }
      });
    }
  }
})();
