// ==UserScript==
// @name         Amazon Auto-Smile / URL Cleaner
// @namespace    https://github.com/r3t3ch/userscripts
// @version      0.9
// @description  Redirects Amazon.com product URLs to AmazonSmile and removes unnecessary variables (like affiliate tag)
// @include      /^https?:\/\/www\.amazon\.com\/(.+)?(dp|gp|exec)\/.+/
// @exclude      /^https?:\/\/www\.amazon\.com\/.+pldnSite=1.*/
// @exclude      /^https?:\/\/www\.amazon\.com\/gp\/(help\/|mas\/|feature\.html|item-dispatch|.+\/ref=olp_page).*/
// @run-at       document-start
// ==/UserScript==

if (window.self === window.top) {
    var new_host = window.location.host.replace(/^www\./, 'smile.');
    var new_url = window.location.protocol + '//' + new_host + window.location.pathname + window.location.hash;
    window.location.replace(new_url);
}
