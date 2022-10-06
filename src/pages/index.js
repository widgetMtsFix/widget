import "./index.css";

import Iframe from "../components/iframe.js";

//------------------------------------------------Переменные-----------------------------------------------------------//

const banner = document.querySelector(".banner");

const iframe = new Iframe();

banner.addEventListener("click", () => {
  iframe.iframeOpen();
});
const readMessage = (event) => {
  if (event.data === false) {
    iframe.iframeClose();
  }
};

window.addEventListener("message", readMessage, false);
