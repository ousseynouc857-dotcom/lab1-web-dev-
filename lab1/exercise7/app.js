const form   = document.querySelector("#guestForm");
const input  = document.querySelector("#guest");
const error  = document.querySelector("#error");
const guests = document.querySelector("#guests");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = input.value.trim();

  if (name === "") {
    error.textContent = "Please enter a name.";
    return;
  }

  error.textContent = "";
  const item = document.createElement("li");
  item.textContent = name;
  guests.append(item);
  input.value = "";
});

guests.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (item && guests.contains(item)) {
    item.classList.toggle("arrived");
  }
});
