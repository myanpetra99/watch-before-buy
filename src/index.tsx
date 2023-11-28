import VideoList from "./videoList";
import { WebHandler } from "./handler";

interface message {
  action: string;
  selector: string;
  mode: string;
}

chrome.runtime.onMessage.addListener((message: message) => {
  console.log(" message ", message);
  console.log(" mode ", message.mode);
  if (message.action === "embedToStore") {
    WebHandler(message.selector, <VideoList mode={message.mode} />);
  }
});