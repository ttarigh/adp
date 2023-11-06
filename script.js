const textElement = document.getElementById("output");
const textElement2 = document.getElementById("output2");
const text = "im sorry for loving you";
const text2 = "like a ...saint";
let charIndex = 0;
const container = document.querySelector(".container");
const imageContainer = document.querySelector(".image-container");
const imageContainer2 = document.querySelector(".image-container2");

const followImage = document.getElementById("follow-image");
const mouth = document.getElementById("mouthopen");

let followImageVisible = false;
let animationCompleted = false;

function typeText() {
  if (charIndex < text.length) {
    textElement.innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    textElement.parentElement.style.transform = "rotate(90deg)";
    setTimeout(typeText2, 2000);
  }
}

let charIndex2 = 0;
function typeText2() {
  if (charIndex2 < text2.length) {
    textElement2.innerHTML += text2.charAt(charIndex2);
    charIndex2++;
    setTimeout(typeText2, 100);
  } else {
    animationCompleted = true;
    container.style.cursor = "pointer";
  }
}

typeText();

let clickCount = 0;
container.addEventListener("click", () => {
  if (clickCount === 0) {
    if (animationCompleted) {
      if (!followImageVisible) {
        clickCount += 1;
        textElement.style.color = "white";
        textElement2.style.color = "white";
        followImageVisible = true;
        imageContainer.style.display = "block";
        updateImagePosition(event);
      } else {
        followImageVisible = false;
      }
    }
  }
  else{ // second click 
    imageContainer.style.display = "none";
    imageContainer2.style.display = "block";
  }
});

function updateImagePosition(event) {
  const x = event.clientX - container.getBoundingClientRect().left;
  const y = event.clientY - container.getBoundingClientRect().top;
  followImage.style.left = x + "px";
  followImage.style.top = y + "px";
}

document.addEventListener("mousemove", (event) => {
  if (followImageVisible) {
    updateImagePosition(event);
  }
});

