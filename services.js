
let productsData = [
    {
        img: "images/resumeDisplay.png",
        product: "RESUME DISPLAY",
        description1: "Increase your Profile Visibility to recruiters upto 3 times.",
        description2: "Get a Featured Profile, Stand out and get noticed in recruiter eyes.",
        subscription: "Subscription starts from",
        price: "$2047 for 3 Months",
        more: "KNOW MORE"
    },

    {
        img: "images/priorityApp.png",
        product: "PRIORITY APPLICANT",
        description1: "Be a Priority Applicant & increase your chance of getting a call.",
        description2: "Be the first one to apply and catch recruiter attention.",
        subscription: "Subscription starts from",
        price: "$942 for 3 Months",
        more: "KNOW MORE"
    },

    {
        img: "images/jsb-homepage.png",
        product: "JOB SEARCH BOOSTER",
        description1: "Boost your job search with referrals.",
        description2: "Take help from over 20,000 seniors in top companies like TCS, HCL, Accenture etc.",
        subscription: "Subscription starts from",
        price: "$839 for 3 Months",
        more: "KNOW MORE"
    },

    {
        img: "images/resumeWriting.png",
        product: "RESUME WRITING",
        description1: "Standout from the crowd with our professionally written Resume by expert.",
        description2: "Resume that highlights your strengths and showcase your experience.",
        subscription: "Subscription starts from",
        price: "$1653 for 3 Months",
        more: "KNOW MORE"
    },

    {
        img: "images/resumeScore.png",
        product: "ONLINE RESUME BUILDER",
        description1: "Create a job-winning resume with our simple resume builder.",
        description2: "Get a Featured Resume, Stand out and get noticed in recruiter eyes.",
        subscription: "Subscription starts from",
        price: "$211 for 3 Months",
        more: "Create Resume"
    },

    {
        img: "images/subscriptionWidget.png",
        product: "JOB SEARCH",
        description1: "Subscribe to our Monthly Job Search Plan.",
        description2: "Key Benefits : CheckRank higher in Recruiter Searches, Priority Access to Jobs, Send message to Recruiter anytime",
        subscription: "Subscription starts from",
        price: "$859 per Months",
        more: "KNOW MORE"
    },

    {
        img: "images/jobs.png",
        product: "JOBS FOR YOU",
        description1: "Stand out as an Early Applicant with instant access to jobs.",
        description2: " Our experts will understand your job preference & set alerts. Instant job on SMS.",
        subscription: "Subscription starts from",
        price: "$1356 for 3 Months",
        more: "KNOW MORE"
    },

    {
        img: "images/recruiterConn.png",
        product: "RECRUITER CONNECTION",
        description1: "Send personalized message to recruiters.",
        description2: "Search from a database of 1.6 Lakh recruiters and share your Naukri profile",
        subscription: "Subscription starts from",
        price: "$839 for 3 Months",
        more: "KNOW MORE"
    },

    {
        img: "images/header-image.png",
        product: "RESUME CRITIQUE",
        description1: "Get your resume reviewed and improve your job application.",
        description2: "Our experts will analyze your resume and send a detailed report.",
        subscription: "Subscription starts from",
        price: "$1017 for 3 Months",
        more: "KNOW MORE"
    },
]


let appendData = () => {

    let container = document.querySelector(".innerMid");

    productsData.forEach((elem) => {
        let products = document.createElement("div");
        products.setAttribute("class", "products");

        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "imgDiv");
        let img = document.createElement("img");
        img.src = elem.img
        imgDiv.append(img);

        let div = document.createElement("div");
        div.setAttribute("class", "details");
        let name = document.createElement("p");
        name.innerText = elem.product;
        let description1 = document.createElement("h3");
        description1.innerText = elem.description1;
        let description2 = document.createElement("p");
        description2.innerText = elem.description2;

        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", "innerDiv");

        let innerDiv2 = document.createElement("div");
        
        let subscription = document.createElement("p");
        subscription.innerText = elem.subscription;
        let price = document.createElement("p");
        price.setAttribute("class", "price");
        price.innerText = elem.price;

        innerDiv2.append(subscription, price)

        let more = document.createElement("button");
        more.setAttribute("class", "more");
        more.addEventListener("click", () => {
            localStorage.setItem("productData", JSON.stringify(elem));
            window.location.href = "product.html";
        })
        more.innerText = elem.more;

        innerDiv.append(innerDiv2, more)
        div.append(name, description1, description2, innerDiv)
        products.append(imgDiv, div);
        container.append(products);
    })
}

appendData();


import { NAVBAR, FOOTER } from "./common2/common2.js";

document.querySelector("#navbar").innerHTML = NAVBAR();
document.querySelector("#footer").innerHTML = FOOTER();