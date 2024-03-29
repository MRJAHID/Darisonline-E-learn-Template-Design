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


// Modal Show JS
const dialogBodyList = document.querySelectorAll('dialog.dialog .dialog-body');
const modalList = document.querySelectorAll('dialog.dialog');
modalList.forEach((item) => {
  item.addEventListener('click', () => {
    setCloseModal(item);
  });
});
dialogBodyList.forEach((item) => {
  item.addEventListener('click', () => {
    event.stopPropagation();
  });
});

const demoModal = document.getElementById('demo-modal');
const btnModalShow = document.getElementById('btn-show');
const btnModalCloseList = document.querySelectorAll('.btn-close');
const showModalCustom = (incModal) => {
  incModal.showModal();
  incModal.classList.add('active');
};
const setCloseModal = (incModal) => {
  incModal.addEventListener('transitionend', closeModal);
  incModal.classList.remove('active');
};
const closeModal = () => {
  event.target.removeEventListener('transitionend', closeModal);
  event.target.close();
};
btnModalShow.addEventListener('click', () => {
  showModalCustom(demoModal);
});

btnModalCloseList.forEach((item) => {
  item.addEventListener('click', () => {
    setCloseModal(item.parentElement);
  });
});