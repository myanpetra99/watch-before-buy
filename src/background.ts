import { matchStore, fetchStores } from "./store";

// Fetch the store data when the extension is initialized
fetchStores();

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
