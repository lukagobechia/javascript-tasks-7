const cont1 = document.querySelector(".container1");
const cont2 = document.querySelector(".container2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", async (e) => {
  try {
    const res1 = await axios.get("https://jsonplaceholder.typicode.com/users");
    const res2 = await axios.get("https://fakestoreapi.com/users");

    const [resp1, resp2] = await Promise.all([res1, res2]);
    display(resp1.data, resp2.data);
  } catch (e) {
    console.error("Error:", e);
  }
});

function display(data1, data2) {
  cont1.innerHTML = `
        <div style ="border: 2px solid black">
        <h1>Json placeholder</h1>
          
            <pre>${JSON.stringify(data1, null, 2)}</pre>
        </div>
        `;

  cont2.innerHTML = `
        <div style ="border: 2px solid black">
         <h1>Fake store api</h1>
            <pre>${JSON.stringify(data2, null, 2)}</pre>
        </div>
        `;
}
