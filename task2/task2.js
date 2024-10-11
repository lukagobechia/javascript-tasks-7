const cont = document.querySelector(".container");
const btn = document.querySelector(".btn");
btn.addEventListener("click", async (e) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  const data = res.data.map((user) => ({
    id: user.is,
    name: user.name,
    username: user.username,
    email: user.email,
  }));

  display(data);
  console.log(data);
});

function display(data) {
  cont.innerHTML = data
    .map(
      (el) =>
        `
        <div style ="border: 2px solid black">
            <h3>Title: ${el.id}</h3>
            <h3>Price: ${el.name}</h3>
            <h3>Price: ${el.username}</h3>
            <h3>Price: ${el.email}</h3>
        </div>
        `
    )
    .join("");
}
