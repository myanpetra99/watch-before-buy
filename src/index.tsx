import VideoList from "./videoList";
import { WebHandler } from "./handler";
import { render } from "preact";

chrome.runtime.onMessage.addListener((message) => {
  
  if (message.action === "embedToStore") {
    try {
      WebHandler(message.selector, <VideoList mode={message.mode} />);
      
    } catch (error) {
      console.error("Error handling embedToStore action:", error);
    }
  }
});
