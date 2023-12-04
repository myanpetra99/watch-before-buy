import { waitForElm } from "./utils";
import { render } from "preact";

export function WebHandler(Selector:string ,VideoList:preact.ComponentChild) {
    const parent = document.querySelector(Selector);
    const div = document.createElement("div");
    div.setAttribute("id", "watchBeforeBuyContainer");
    parent.prepend(div);
    waitForElm(Selector).then((elm) => {
      const actionbar = document.querySelector(Selector);

      // Check if the button already exists
      if (actionbar.querySelector("#watchBeforeBuyContainer")) {
        console.log(" parent found ");
        if (!actionbar.querySelector("#watchBeforeBuy")) {
          render(VideoList, div);
          console.log(" render done ");
        }else{ 
          console.log(" already exist ");
        }
      } else {
        console.log(" parent not found ");
      }
    });

}