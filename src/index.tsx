import VideoList from "./videoList";
import { WebHandler } from "./handler";
import { render } from "preact";

chrome.runtime.onMessage.addListener((message) => {
  console.log("Received message:", message);
  if (message.action === "embedToStore") {
    try {
      WebHandler(message.selector, <VideoList mode={message.mode} />);
      console.log("Successfully handled embedToStore action");
    } catch (error) {
      console.error("Error handling embedToStore action:", error);
    }
  }
});
