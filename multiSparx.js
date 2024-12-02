// ==UserScript==
// @name         MultiSparx
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove text overlays on SparxMaths so that multiple tabs of Sparx to be open at the same time.
// @author       Gallium-Gonzollium
// @match        *://*.sparxmaths.uk/*
// @match        *://*.sparxreader.uk/*
// @match        *://*.sparxscience.uk/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function cleanUp() {
        document.querySelectorAll('*').forEach(e => {
            const classList = Array.from(e.classList);
            if (classList.some(
                    cls => cls.startsWith('_Content_13')
                    || cls.startsWith('_Overlay_13'))
                    || (classList.some(
                        cls => cls.startsWith('_Description_13'))
                        && e.textContent.includes("Looks like you've logged in somewhere else")
                       ))
            {
                e.remove();
            }
        });

        document.body.style = '';
    }

    setInterval(cleanUp, 200);
})();
