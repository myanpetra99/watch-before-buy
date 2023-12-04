// chrome.webNavigation.onCompleted.addListener(function (details) {
//   console.log("web loaded", details);
//     const url = new URL(details.url);
//     const isTokopedia =
//       url.hostname.includes("tokopedia.com");
//     if (isTokopedia) {
//       console.log("isTokopedia", isTokopedia);
//       chrome.tabs.sendMessage(details.tabId, {
//         action: "embedTokopediaProductPage",
//       });
//       console.log("send message to content script");
//     }
//   });

import { matchStore } from "./store";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const url = new URL(tab.url);
  console.log("web loaded");
  const [res, sel, mode] = matchStore(url.hostname);
  if (res) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      console.log("send message to content script");
      chrome.tabs.sendMessage(activeTab.id, {
        action: "embedToStore",
        selector: sel,
        mode: mode,
      });
      console.log("done send message to content script");
    });
  }
});
