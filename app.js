let invBtn = document.querySelectorAll(".btn-req-invite"),
   overlay = document.querySelectorAll(".overlay"),
   ham_icon = document.getElementsByClassName("hamburger-icon"),
   nav_mobile_ham = document.getElementsByClassName("ham-nav"),
   lin_bg = document.getElementsByClassName("overlay-bg"),
   bg_body_overlay=document.querySelector(".overlay-bg"),
   bg_body=document.querySelector(".body-wrapper-wo-nav");

let trigger = false;

for (let i = 0; i < invBtn.length; i++) {
   invBtn[i].addEventListener("mouseenter", function (e) {
      overlay[i].style.display = "block";
   });
   invBtn[i].addEventListener("mouseleave", function (e) {
      overlay[i].style.display = "none";
   });
}

ham_icon[0].addEventListener("click", function () {
   if (trigger === false) {
      nav_mobile_ham[0].style.display = "block";
      lin_bg[0].style.display = "block";
      replaceCross();
      trigger = true;
   } else {
      nav_mobile_ham[0].style.display = "none";
      lin_bg[0].style.display = "none";
      replaceCross();
      trigger = false;
   }
});

bg_body_overlay.addEventListener("click", function () {
   if(trigger===true){
      nav_mobile_ham[0].style.display = "none";
      lin_bg[0].style.display = "none";
      replaceCross();
      trigger = false;
   }
});

bg_body.addEventListener("click", function () {
   if(trigger===true){
      nav_mobile_ham[0].style.display = "none";
      lin_bg[0].style.display = "none";
      replaceCross();
      trigger = false;
   }
});

function replaceCross() {
   let ham_img = document.getElementsByClassName("ham-img");
   ham_img[0].removeAttribute("src");
   if (trigger === false) {
      ham_img[0].setAttribute("src", "images/icon-close.svg");
   } else {
      ham_img[0].setAttribute("src", "images/icon-hamburger.svg");
   }
}
