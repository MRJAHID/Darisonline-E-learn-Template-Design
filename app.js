const questions = document.querySelectorAll(".faq__question");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    let answer = question.nextElementSibling;
    if (answer.style.display === "block") {
      hideAnswer(question);
    } else {
      questions.forEach((question) => {
        hideAnswer(question);
      });
      displayAnswer(question);
    }
  });
});

function displayAnswer(target) {
  let answer = target.nextElementSibling;
  let arrowIcon = target.firstElementChild;
  answer.style.display = "block";
  arrowIcon.style.transform = "rotate(180deg)";
  target.style.fontWeight = "700";
}

function hideAnswer(target) {
  let answer = target.nextElementSibling;
  let arrowIcon = target.firstElementChild;
  answer.style.display = "none";
  arrowIcon.style.transform = "rotate(0deg)";
  target.style.fontWeight = "400";
}

const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  function responsiveSlider(reponsiveSize) {
    if (reponsiveSize.matches) {
      // If media query matches
      slideRight.style.transform = `translateY(-${
        activeSlideIndex * sliderHeight
      }px)`;
      slideLeft.style.transform = `translateY(-${
        activeSlideIndex * sliderHeight
      }px)`;
    } else {
      slideRight.style.transform = `translateY(-${
        activeSlideIndex * sliderHeight
      }px)`;
      slideLeft.style.transform = `translateY(${
        activeSlideIndex * sliderHeight
      }px)`;
    }
  }

  let reponsiveSize = window.matchMedia("(max-width: 700px)");
  responsiveSlider(reponsiveSize);
  //
  // slideRight.style.transform = `translateY(-${
  //   activeSlideIndex * sliderHeight
  // }px)`;
  // slideLeft.style.transform = `translateY(${
  //   activeSlideIndex * sliderHeight
  // }px)`;
};

// Header Scroll
// $(window).scroll(function(){
//   if ($(window).scrollTop() >= 300) {
//     $('nav').addClass('fixed-header');
//     $('nav div').addClass('visible-div');
//   }
//   else {
//     $('nav').removeClass('fixed-header');
//     $('nav div').removeClass('visible-title');
//   }
// });

// Mobile Side nav js

function toggleAside() {
  let className = "left-0";
  let aside = document.getElementById("aside");
  if (aside.classList.contains(className)) {
    aside.classList.add("left-100");
    aside.classList.remove(className);
  } else {
    aside.classList.add(className);
    aside.classList.remove("left-100");
  }
  // document.getElementById("aside").classList.add("left-0");
}
