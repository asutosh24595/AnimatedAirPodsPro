const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 148;

const currentFrame = (index, size) => (
  `https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/${size}/${index.toString().padStart(4, '0')}.${size === 'small' ? 'jpg' : 'png'}`
);

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i, 'large');
  }
};

const img = new Image();
img.src = currentFrame(1, 'large');
canvas.width = 1300;
canvas.height = 770;

img.onload = function () {
  context.drawImage(img, 0, 0);
}

const updateImage = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  img.src = currentFrame(frameIndex + 1, 'large');
}

window.addEventListener('scroll', () => {
  requestAnimationFrame(() => {
    updateImage();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0);
  });
});

preloadImages();

document.addEventListener("DOMContentLoaded", function () {
  let navContent = document.querySelector('.airpods-navbar');
  let stickyOffset = navContent.offsetTop;

  function handleScroll() {
    if (window.scrollY >= stickyOffset) {
      navContent.classList.add('sticky');
    } else {
      navContent.classList.remove('sticky');
    }
  }

  window.addEventListener('scroll', handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  let mainElem = document.querySelector('.main-elem');

  function handleScroll() {
    // Determine the scroll position
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Check if the scroll position is beyond a certain point
    if (scrollPosition > 50) { // Adjust this threshold as needed
      mainElem.classList.add('expanded');
    } else {
      mainElem.classList.remove('expanded');
    }
  }

  window.addEventListener('scroll', handleScroll);
});


