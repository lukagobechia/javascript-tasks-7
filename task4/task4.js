const div = document.querySelector("div");
document.addEventListener(
  "mousemove",
  debouncer(100, (e) => {
    const y = e.clientY;
    const x = e.clientX;
    div.textContent = `Mouse X: ${x}, Mouse Y: ${y}`;
  })
);

function debouncer(ms, callback) {
  let interval;
  return (...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      callback(...args);
    }, ms);
  };
}
