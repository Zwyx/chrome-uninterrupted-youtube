const element = document.createElement("script");

element.src = chrome.runtime.getURL("embed.js");

document.head.append(element);
