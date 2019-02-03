// ==UserScript==
// @name         Amazon Auto-Smile / URL Cleaner
// @namespace    https://github.com/r3t3ch/userscripts
// @version      1.0
// @description  Redirects Amazon.com product URLs to AmazonSmile and removes unnecessary variables (like affiliate tag)
// @icon         https://smile.amazon.com/favicon.ico
// @include      /^https:\/\/www\.amazon\.(com|co\.uk|de)\/(.+)?(dp|gp|exec|product|d\/(.+))\/(\S{10})(\/.*|\?.*|$)/
// @include      /^https:\/\/www\.amazon\.(com|co\.uk|de)\/gp\/(cart|buy).+/
// @exclude      /^https:\/\/www\.amazon\.(com|co\.uk|de)\/.+(pldnSite=1).*/
// @run-at       document-start
// ==/UserScript==

if (window.self === window.top) {
    var new_host = window.location.host.replace(/^www\./, 'smile.');
    var new_url = window.location.protocol + '//' + new_host + window.location.pathname + window.location.hash;
    window.location.replace(new_url);
}
