const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const ul = document.querySelector("#ul");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let inputVal = input.value;

  if (inputVal.length < 5) {
    alert("Kiritilgan malumot 5ta belgidan kam bolmasligi kerak!");
  } else {
    addList(inputVal);
  }

  input.value = "";
});

function addList(data) {
  const li = document.createElement("li");
  const img = document.createElement("img");

  li.textContent = data;
  img.src = "./delete.svg";

  img.addEventListener("click", () => {
    ul.removeChild(li);
  });

  li.appendChild(img);
  ul.appendChild(li);
}
