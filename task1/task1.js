const search = document.querySelector("input");
const cont = document.querySelector(".container");

search.addEventListener(
  "input",
  debouncer(300, async (e) => {
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/products?title=${e.target.value}`
    );
    display(res.data);
  })
);

function display(data) {
  cont.innerHTML = data
    .map(
      (el) =>
        `
        <div style ="border: 2px solid black">
            <h3>Title: ${el.title}</h3>
            <h3>Price: ${el.price}</h3>
        </div>
        `
    )
    .join("");
}

function debouncer(ms, callback) {
  let interval;
  return (...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      callback(...args);
    }, ms);
  };
}
