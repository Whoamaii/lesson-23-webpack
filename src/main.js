import jquery from "jquery";
import "./main.css";
import image from "./assets/react-icon.png";

console.log({ jquery });
const pic = document.createElement("img");
pic.setAttribute("src", image);
document.body.appendChild(pic);
