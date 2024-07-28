import { waitForElm } from "./utils";
import { render } from "preact";

export function WebHandler(Selector: string, VideoList: preact.ComponentChild) {
  const parent = document.querySelector(Selector);
  const div = document.createElement("div");
  div.setAttribute("id", "watchBeforeBuyContainer");
  div.setAttribute("style", "z-index: 99; position:relative;");
  if (parent) {
    parent.prepend(div);
    waitForElm(Selector).then((elm) => {
      const actionbar = document.querySelector(Selector);

      // Check if the button already exists
      if (actionbar.querySelector("#watchBeforeBuyContainer")) {
        
        if (!actionbar.querySelector("#watchBeforeBuy")) {
          render(VideoList, div);
          
        } else {
          
        }
      } else {
        
      }
    });
  }else {
    
  }
}
