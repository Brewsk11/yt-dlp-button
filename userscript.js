// ==UserScript==
// @name         Youtube Download button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

GM_config.init(
{
  'id': 'MyConfig', // The id used for this instance of GM_config
  'title': "Ustawienia Youtube Downloader",
  'fields': // Fields object
  {
    'Path': // This is the id of the field
    {
      'label': 'Folder pobranych plików', // Appears next to field
      'type': 'text', // Makes this setting a text field
      'size': 80,
      'default': '%HOMEDRIVE%\\%HOMEPATH%\\Downloads' // Default value if user doesn't change it
    }
  }
});

function addTopRightButton() {
    // https://projectlounge.pw/ytdl/download?url=https://youtube.com//watch?v=_JuVn0-zD2c&format=140

    // create the button element
    const button = document.createElement('button');
    button.id = "downloadButton";
    button.innerText = "Download";
    button.classList.add("downloadButton");

    // create style
    var style = `
    .downloadButton {
        position: fixed;
        top: 18px;
        left: 200px;
        z-index: 9999;
        background-color: #880808;
        border: none;
        color: white;
        border-radius: 10px;
        width: 100px;
        height: 25px;

        transition: background-color 0.05s;
    }

    .downloadButton:hover {
        background-color: #992525;
    }
    `

    var styleSheet = document.createElement("style")
    styleSheet.innerText = style
    document.head.appendChild(styleSheet)

    // attach an event listener to the button that opens the specified URL
    button.addEventListener('click', function() {
        var currentUrl = window.location.href;
        var savePath = GM_config.get('Path');
        var downloadUrl = `ytdl:${currentUrl} --path ${savePath}`;
        window.open(downloadUrl);
    });

    // add the button to the page body
    const body = document.querySelector('body');
    body.appendChild(button);
}

function addSettingsButton()
{
    // create the button element
    const button = document.createElement('button');
    button.id = "settingsButton";
    button.innerText = "S";
    button.classList.add("settingsButton");

    // create style
    var style = `
    .settingsButton {
        position: fixed;
        top: 18px;
        left: 310px;
        z-index: 9999;
        background-color: #880808;
        border: none;
        color: white;
        border-radius: 10px;
        width: 25px;
        height: 25px;

        transition: background-color 0.05s;
    }

    .settingsButton:hover {
        background-color: #992525;
    }
    `

    var styleSheet = document.createElement("style")
    styleSheet.innerText = style
    document.head.appendChild(styleSheet)

    // attach an event listener to the button that opens the specified URL
    button.addEventListener('click', () => GM_config.open());

    // add the button to the page body
    const body = document.querySelector('body');
    body.appendChild(button);
}

(function() {
    'use strict';
    addTopRightButton();
    addSettingsButton()
})();