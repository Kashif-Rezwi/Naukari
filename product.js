import { NAVBAR, FOOTER, DISCOUNT } from "./common2/common2.js";

document.querySelector("#navbar").innerHTML = NAVBAR();
document.querySelector("#footer").innerHTML = FOOTER();
document.querySelector("#top").innerHTML = DISCOUNT();


let productData = JSON.parse(localStorage.getItem("productData"));
// console.log(productData)

let appendData = () => {
    let data = productData;
    document.querySelector("#Q").innerText = data.Question;
    document.querySelector("#h1").innerText = data.heading1;
    document.querySelector("#h2").innerText = data.heading2;
    document.querySelector("#h3").innerText = data.heading3;
    document.querySelector("#h4").innerText = data.heading4;
    document.querySelector("#logo1").src = data.img1;
    document.querySelector("#logo2").src = data.img2;
    document.querySelector("#logo3").src = data.img3;
    document.querySelector("#para1").innerText = data.para1;
    document.querySelector("#para2").innerText = data.para2;
    document.querySelector("#para3").innerText = data.para3;
    document.querySelector("#sub-h1").innerText = data.subHeading1;
    document.querySelector("#sub-h2").innerText = data.subHeading2;
    document.querySelector("#sub-h3").innerText = data.subHeading3;
    document.querySelector("#price1").innerText = `$${data.price1}`;
    document.querySelector("#price2").innerText = `$${data.price2}`;
    document.querySelector("#price3").innerText = `$${data.price3}`;
    document.querySelector("#img-4").src = data.img4;
    document.querySelector("#img-5").src = data.img5;
    document.querySelector("#img-6").src = data.img6;
    document.querySelector("#img-7").src = data.img7;
    document.querySelector("#img-8").src = data.img8;
    document.querySelector("#img-9").src = data.img9;
    document.querySelector("#img-10").src = data.img10;
}

appendData();

document.querySelector("#buyNow").addEventListener("click", () => {
    window.location.href = "payment.html"
})

import { searchBox, partner, reserved } from "./common/common.js";

document.querySelector("#imageSlider2").innerHTML = partner();
document.querySelector("#reserve").innerHTML = reserved();