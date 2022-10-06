import "./index.css";

import Iframe from "../components/iframe.js";

//------------------------------------------------Переменные-----------------------------------------------------------//

const widgetButton = document.querySelector(".profile__iframe");

const iframe = new Iframe();

widgetButton.addEventListener("click", () => {
  iframe.iframeOpen();
});
const readMessage = (event) => {
  if (event.data === false) {
    iframe.iframeClose();
  }
};

window.addEventListener("message", readMessage, false);
