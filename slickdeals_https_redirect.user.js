// ==UserScript==
// @name         Slickdeals HTTPS Redirect
// @namespace    https://github.com/r3t3ch/userscripts
// @version      1
// @description  Redirects to HTTPS (and removes the goo)
// @include      /^(https?:\/\/)?slickdeals.net\/g00\/\/.*/
// @include      http://slickdeals.net/*
// @run-at       document-start
// ==/UserScript==

var url = location.href.replace(/g00\/\//, "");
location.replace(url);

if (window.location.protocol !== "https:") {
    window.location.href = window.location.href.replace("http", "https");
}
