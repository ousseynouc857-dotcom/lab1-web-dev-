document.querySelector("#title").textContent = "JavaScript changed me!";

document.querySelector(".intro").textContent = "This sentence was changed by app.js.";

const link = document.querySelector("#link");
link.href = "https://developer.mozilla.org";
link.textContent = "Go to MDN";

const box = document.querySelector(".box");
box.classList.add("highlight");
box.style.borderRadius = "12px";

const name = document.querySelector("#nameField").value;
document.querySelector("#output").textContent = `Hello, ${name}!`;
