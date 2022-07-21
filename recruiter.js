import { searchBox, partner, reserved } from "./common/common.js";

document.querySelector("#searchDiv").innerHTML = searchBox();
document.querySelector("#imageSlider2").innerHTML = partner();
document.querySelector("#reserve").innerHTML = reserved();