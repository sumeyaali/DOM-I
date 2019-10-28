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
    "h1": "DOM  Is Awesome",
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
    "address" : "123 Way 456 Street <br /> Somewhere, USA",
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

 const nav = document.querySelectorAll('nav a');
 nav[0].textContent = "Services";
 nav[1].textContent = "Product";
 nav[2].textContent = "Vision";
 nav[3].textContent = "Features";
 nav[4].textContent = "About";
 nav[5].textContent = "Contact";

const header = document.querySelector('h1').innerHTML = "DOM <br /> Is <br /> Awesome"
const button = document.querySelector('button').textContent = "Get Started"
let image = document.getElementById("cta-img");
image.setAttribute('src', siteContent["cta"]["img-src"])


const titles = document.querySelectorAll('h4');
titles[0].textContent = "Features";
titles[1].textContent = "About";
titles[2].textContent = "Services";
titles[3].textContent = "Product";
titles[4].textContent = "Vision";
titles[5].textContent= "Contact"

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const paragraphs = document.querySelectorAll('p');
paragraphs[0].textContent = siteContent ["main-content"]["features-content"];
paragraphs[1].textContent = siteContent ["main-content"]["about-content"];
paragraphs[2].textContent = siteContent ["main-content"]["services-content"];
paragraphs[3].textContent = siteContent ["main-content"]["product-content"];
paragraphs[4].textContent = siteContent ["main-content"]["vision-content"];
paragraphs[5].innerHTML = siteContent ["contact"]["address"];
paragraphs[6].textContent = siteContent ["contact"]["phone"];
paragraphs[7].textContent = siteContent ["contact"]["email"];
paragraphs[8].textContent = siteContent ["footer"]["copyright"];
