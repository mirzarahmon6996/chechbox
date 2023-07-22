const box = document.querySelector("#block");
const input = document.querySelector("#task");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  const li = document.createElement("li");
  if (input.value.trim() !== "") {
    li.innerHTML = input.value;
    li.prepend(checkbox);
    box.append(li);
    input.value = "";
  }
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });
});
// const input = document.querySelector("#inp");
// const btn = document.querySelector("button");
// const div = document.querySelector("div");

// btn.addEventListener("click", () => {
//   const span = document.createElement("span");
//   span.innerHTML = input.value;
//   div.prepend(span);
// });
