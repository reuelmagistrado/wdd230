const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
  image.src = image.getAttribute("data-src");
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 5px 0px",
};

export function lazyLoad() {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
}
