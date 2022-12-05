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

// Chat UI
$(".chatui_messages").animate({ scrollTop: $(document).height() }, "fast");

$("#chatui_profile-img").click(function () {
  $("#chatui_status-options").toggleClass("active");
});

$(".chatui_expand-button").click(function () {
  $("#chatui_profile").toggleClass("expanded");
  $("#chatui_contacts").toggleClass("expanded");
});

$("#chatui_status-options ul li").click(function () {
  $("#profile-img").removeClass();
  $("#status-online").removeClass("active");
  $("#status-away").removeClass("active");
  $("#status-busy").removeClass("active");
  $("#status-offline").removeClass("active");
  $(this).addClass("active");

  if ($("#status-online").hasClass("active")) {
    $("#profile-img").addClass("online");
  } else if ($("#status-away").hasClass("active")) {
    $("#profile-img").addClass("away");
  } else if ($("#status-busy").hasClass("active")) {
    $("#profile-img").addClass("busy");
  } else if ($("#status-offline").hasClass("active")) {
    $("#profile-img").addClass("offline");
  } else {
    $("#profile-img").removeClass();
  }

  $("#chatui_status-options").removeClass("active");
});

function newMessage() {
  message = $(".chatui_message-input input").val();
  if ($.trim(message) == "") {
    return false;
  }
  $(
    '<li class="chatui_sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' +
      message +
      "</p></li>"
  ).appendTo($(".chatui_messages ul"));
  $(".chatui_message-input input").val(null);
  $(".contact.active .preview").html("<span>You: </span>" + message);
  $(".chatui_messages").animate({ scrollTop: $(document).height() }, "fast");
}

$(".submit").click(function () {
  newMessage();
});

$(window).on("keydown", function (e) {
  if (e.which == 13) {
    newMessage();
    return false;
  }
});


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
