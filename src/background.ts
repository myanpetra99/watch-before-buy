import { matchStore, fetchStores } from "./store";

chrome.webNavigation.onCompleted.addListener(function (details) {
  fetchStores();   //!TODO MAKE IT ASYNCHRONOUS
  });


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const url = new URL(tab.url);
  
  const [res, sel, mode] = matchStore(url.hostname); 
  if (res) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      
      chrome.tabs.sendMessage(activeTab.id, {
        action: "embedToStore",
        selector: sel,
        mode: mode,
      });
      
    });
  }
});
