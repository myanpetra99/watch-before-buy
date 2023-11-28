// content.tsx
import { render } from "preact";
import VideoList from "./videoList";
import { waitForElm } from "./utils";

const app = document.getElementById("app")
render(<VideoList />, app);
