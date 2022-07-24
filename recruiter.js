import { searchBox, partner, reserved } from "./common/common.js";

document.querySelector("#searchDiv").innerHTML = searchBox();
document.querySelector("#imageSlider2").innerHTML = partner();
document.querySelector("#reserve").innerHTML = reserved();

import { NAVBAR, FOOTER, DISCOUNT } from "./common2/common2.js";

document.querySelector("#footer").innerHTML = FOOTER();
document.querySelector("#navbar").innerHTML = NAVBAR();

document.querySelector("#servicesPage").addEventListener("click", () => {
    window.location.href = "services.html"
})

document.querySelector("#logo").addEventListener("click", () => {
    window.location.href = "job.html"
})
