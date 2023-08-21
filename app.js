const body = document.querySelector("body");
const bgText = document.querySelector(".bg-text");
const bgWrapper = document.querySelector(".bg-wrapper");
const fgWrapper = document.querySelector(".fg-wrapper");

const nav = document.querySelector("nav");
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelectorAll(".nav-link");

const contactSection = document.querySelector("#contact");
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector("#submit-btn"); // ?use this button only and move up?
const submitSuccessMsg = document.querySelector("#submit-success");
const submitErrorMsg = document.querySelector("#submit-error");
const newSubmitBtn = document.querySelector("#new-submit"); // ?remove this?


// *bg ascii secret message
function generateBGtext() {
  let bgTextStr =
    "010010010010000001100001011011010010000001100001011011100010000001100001011101110110010101110011011011110110110101100101001000000110010001100101011101100110010101101100011011110111000001100101011100100010000100100000010100000110110001100101011000010111001101100101001000000110100001101001011100100110010100100000011011010110010100100001001000000011110100101001";
  bgTextStr = bgTextStr.repeat(15).split("").join(" ");
  bgText.insertAdjacentText("beforeEnd", bgTextStr);
}

function navLinkMenuClose() {
  for(a of navLinks) {
    a.addEventListener("click", () => {
      menuToggle.checked = false;
    });
  }
}

// *EmailJS form submission
// ? add form validation
// ? add form styling
// ? isolate this function for testing (to not waste email credits)

function handleEmailJSform() {
  emailjs.init("NdJODzxba1YmKzyl6");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitLoad();
    emailjs.sendForm("default_service", "template_default", contactForm)
      .then(
        (msg) => {
          console.log("SUCCESS!", msg);
          submitSuccess();
        },
        (err) => {
          console.log("FAILED...", err);
          submitError();
        }
      );
  });
}

function submitLoad() {
    submitBtn.value = "Loading..."
}

function submitSuccess() {
    contactForm.reset();
    contactSection.classList.add("hide");
    submitSuccessMsg.classList.remove("hide");
    newSubmitBtn.classList.remove("hide");
}

function submitError() {
    contactForm.reset();
    contactSection.classList.add("hide");
    submitErrorMsg.classList.remove("hide");
    newSubmitBtn.classList.remove("hide");
}

newSubmitBtn.addEventListener("click", () => {
  submitBtn.value = "Submit";
  contactSection.classList.remove("hide");
  submitSuccessMsg.classList.add("hide");
  submitErrorMsg.classList.add("hide");
  newSubmitBtn.classList.add("hide");
});




generateBGtext();
navLinkMenuClose();
handleEmailJSform();



// add front layer for fade
// let menuClicked = false;
// menuButtonContainer.addEventListener('click', () => {
//     if(!menuClicked){
//         bgWrapper.classList.add('fade');
//         menuClicked = true;
//     }else{
//         bgWrapper.classList.remove('fade');
//         menuClicked = false;
//     }
// });

// JS for hb menu?
// // * nav hb menu
// icon.addEventListener("mouseenter", () => {
//     menu.style.display = "inline";
// });

// nav.addEventListener("mouseleave", () => {
//     menu.style.display = "none";
// });

// // * sticky nav
// bgWrapper.addEventListener("scroll", () => {
//     console.log('scrollTop: ', bgWrapper.scrollTop);
//     if (bgWrapper.pageYOffset >= nav.offsetTop) {
//         // nav.classList.add("sticky");
//         // console.log('add sticky');
//     } else {
//         // nav.classList.remove("sticky");
//         // console.log('remove sticky');
//     }
// });
