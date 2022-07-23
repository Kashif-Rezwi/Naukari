
document.querySelector(".payment").addEventListener("click", (event) => {
    event.preventDefault();
    let cardNumber = document.querySelector(".cardNumber").value;
    let cardName = document.querySelector(".cardName").value;
    let cardExp = document.querySelector(".cardExp").value;
    let cardCVV = document.querySelector(".cardCVV").value;
 
    if (cardNumber == "" || cardName == "" || cardExp == "" || cardCVV == "") {
       alert("Please fill all card details");
    }else if(cardNumber == 1234567891234567 && cardName == "kashif rezwi" && cardExp == "24/28" && cardCVV == "123"){
        let button = document.querySelector(".payment");
        button.innerText = "payment successfull";
        button.style.backgroundColor = "rgb(3, 214, 3)"
        alert("Payment Successfull");
        setTimeout(() => {
            window.location.href = "services.html";
         }, 2000);
    }
 });

 let productData = JSON.parse(localStorage.getItem("productData"));

 let appendPrice = () => {
    let data = productData;
    document.querySelector("#total").innerText = `$${data.price2}`;
    let dis = Math.ceil(data.price2/(100/30))
    document.querySelector("#discount").innerText = `- $${dis}`;
    let gst = Math.ceil(data.price2/(100/5))
    document.querySelector("#gst").innerText = `- $${gst}`; 
    document.querySelector("#payable").innerText = `- $${(data.price2-dis)+gst}`; 
 }
 
 appendPrice();

 