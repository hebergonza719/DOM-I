const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll("nav a");
for (let i = 0; i < navItems.length; i ++) {
  navItems[i].textContent = siteContent["nav"][`nav-item-${i + 1}`]
}

let ctaHOne = document.getElementsByTagName("h1");
ctaHOne[0].innerHTML = siteContent["cta"]["h1"].replace(/\s/g, "<br>");
// /g is to replace all instances of <br>
// / \s / is to replace all spaces in an html string
// DOM Is Awesome

let ctaImage = document.querySelector("#cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImage = document.querySelector("#middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let buttonMain = document.querySelector(".cta-text button");
buttonMain.textContent = siteContent["cta"]["button"];

let HFours = document.getElementsByTagName("h4");
HFours[0].textContent = siteContent["main-content"]["features-h4"];

HFours[1].textContent = siteContent["main-content"]["about-h4"];

HFours[2].textContent = siteContent["main-content"]["services-h4"];

HFours[3].textContent = siteContent["main-content"]["product-h4"];

HFours[4].textContent = siteContent["main-content"]["vision-h4"];

let paragraphs = document.getElementsByTagName("p");
paragraphs[0].textContent = siteContent["main-content"]["features-content"];

paragraphs[1].textContent = siteContent["main-content"]["about-content"];

paragraphs[2].textContent = siteContent["main-content"]["services-content"];

paragraphs[3].textContent = siteContent["main-content"]["product-content"];

paragraphs[4].textContent = siteContent["main-content"]["vision-content"];

let contactHFour = document.querySelector(".contact h4");
contactHFour.textContent = siteContent["contact"]["contact-h4"];

let contactParagraphs = document.querySelectorAll(".contact p");
contactParagraphs[0].textContent = siteContent["contact"]["address"];

contactParagraphs[1].textContent = siteContent["contact"]["phone"]; 

contactParagraphs[2].textContent = siteContent["contact"]["email"];

let footerElem = document.getElementsByTagName("footer");
let footerText = footerElem[0].getElementsByTagName("p");
footerText[0].textContent = siteContent["footer"]["copyright"];

let eventsAnchor = document.createElement("a");
let navbar = document.querySelector("header nav");
navbar.append(eventsAnchor);
eventsAnchor.textContent = "Events";

let getStartAnchor = document.createElement("a");
navbar.prepend(getStartAnchor);
getStartAnchor.textContent = "Get Started!";

navItems = document.querySelectorAll("nav a");

navItems.forEach((item) => {
  item.style.color = 'green';
});

getStartAnchor.href = "#";
eventsAnchor.href = "#";

ctaHOne[0].style.fontSize = "6rem";
ctaHOne[0].style.color = "green";

// HFours.forEach((item) => {
//   item.style.fontSize = "3rem";
// });
// forEach doesn't work on HTMLCollections

for(let i = 0; i < HFours.length; i++) {
  HFours[i].style.fontSize = "2.5rem";
  HFours[i].style.color = "#00008b";
  HFours[i].style.marginBottom = "1.5rem";
};

for(let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.fontSize = "1rem";
}

let container = document.querySelector(".container");

let oriBtn = document.createElement("button");

container.insertBefore(oriBtn, container.children[4]);
// .insertBefore is used to insert a child in a parent node at a specific index

oriBtn.textContent = "Change Background to Pink";
oriBtn.style.margin = "0 auto";
oriBtn.style.display = "block";
oriBtn.style.marginTop = "2rem";

oriBtn.addEventListener("click", (event) => {
  container.style.backgroundColor = "pink";
});