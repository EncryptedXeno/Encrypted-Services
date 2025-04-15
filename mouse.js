const blob = document.getElementById("blob");
const custommouse = document.getElementById("custom-mouse");

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

window.onpointermove = debounce(event => {
  const { pageX, pageY } = event;

  blob.animate({
    left: `${pageX}px`,
    top: `${pageY}px`
  }, { duration: 2000, fill: "forwards" });
}, .5);