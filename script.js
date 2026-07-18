const galleries = document.querySelectorAll(".gallery");

galleries.forEach(gallery => {
    const scrollBox = gallery.querySelector(".image-scroll");
    const leftBtn = gallery.querySelector(".arrow-left");
    const rightBtn = gallery.querySelector(".arrow-right");

    leftBtn.addEventListener("click",()=> {
        scrollBox.scrollBy({left:-scrollBox.clientWidth, behavior: "smooth"});
    });

    rightBtn.addEventListener("click",()=>{
        scrollBox.scrollBy({left: scrollBox.clientWidth, behavior: "smooth"});
    });
});

const shopGrid = document.querySelector(".product-grid");
const shopLeft = document.querySelector("#shop-left");
const shopRight = document.querySelector("#shop-right");

shopLeft.addEventListener("click",()=> {
    shopGrid.scrollBy({left: -shopGrid.clientWidth, behavior: "smooth"});
});

shopRight.addEventListener("click",()=> {
    shopGrid.scrollBy({left: shopGrid.clientWidth, behavior: "smooth"});
});

function updateShopArrows() {
    if (shopGrid.scrollLeft <= 25) {
        shopLeft.style.opacity = "0";
        shopLeft.style.pointerEvents = "none";
    } else {
        shopLeft.style.opacity = "1";
        shopLeft.style.pointerEvents = "auto";
    }

    if (shopGrid.scrollLeft + shopGrid.clientWidth >= shopGrid.scrollWidth - 25) {
        shopRight.style.opacity = "0";
        shopRight.style.pointerEvents = "none";
    } else {
        shopRight.style.opacity = "1";
        shopRight.style.pointerEvents = "auto";
    }
}

shopGrid.addEventListener("scroll", updateShopArrows);
updateShopArrows();

const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox-img");
const lightboxLeft = document.querySelector("#lightbox-left");
const lightboxRight = document.querySelector("#lightbox-right");
const allGalleries = document.querySelectorAll(".image-scroll");

let currentImages = [];
let currentIndex = 0;

allGalleries.forEach(gallery => {
    const imgs = gallery.querySelectorAll("img");
    imgs.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentImages = Array.from(imgs);
            currentIndex = index;
            lightboxImg.src = currentImages[currentIndex].src;
            lightbox.classList.add("active");
        });
    });
});

lightboxLeft.addEventListener("click", (event) => {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    lightboxImg.src = currentImages[currentIndex].src;
});

lightboxRight.addEventListener("click", (event) => {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % currentImages.length;
    lightboxImg.src = currentImages[currentIndex].src;
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

const emailText=document.querySelector("#email-text");
const originalEmail = emailText.textContent;

emailText.addEventListener("click",()=>{
    navigator.clipboard.writeText(originalEmail);
    emailText.textContent = "Copied!";

    setTimeout(() => {
        emailText.textContent = originalEmail;
    }, 1500);
});