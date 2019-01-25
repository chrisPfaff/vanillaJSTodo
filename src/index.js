import "./index.css";

let body = document.querySelector("body");
let form = document.querySelector(".form");
let objective = document.querySelector("input[name=objective]");
let details = document.querySelector("input[name=details]");

const makeTodo = (todoObjective, todoDetails) => {
  console.log("hello");
  let newNode = document.createElement("div");
  let span = document.createElement("span");
  let p = document.createElement("p");
  let button = document.createElement("button");

  newNode.classList.add("todo");
  span.classList.add("todo__title");
  p.classList.add("todo__details");
  button.classList.add("todo__button");
  button.classList.add("close");

  span.innerHTML += todoObjective;
  p.innerHTML += todoDetails;
  button.innerHTML += "Delete";

  newNode.append(span);
  newNode.append(p);
  newNode.append(button);

  form.before(newNode);
};

form.addEventListener("submit", event => {
  event.preventDefault();
  let regex = /<(|\/|[^\/>][^>]+|\/[^>][^>]+)>/g;
  if (objective.value.match(regex) || details.value.match(regex)) {
    alert("invalid input");
    return;
  }
  makeTodo(objective.value, details.value);
  objective.value = " ";
  details.value = " ";
});

body.addEventListener("click", event => {
  if (event.target.classList.contains("close")) {
    console.log("here");
    event.target.parentElement.remove();
  }
});
