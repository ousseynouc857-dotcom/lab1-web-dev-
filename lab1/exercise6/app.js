const value   = document.querySelector("#value");
const minus   = document.querySelector("#minus");
const plus    = document.querySelector("#plus");
const reset   = document.querySelector("#reset");
const message = document.querySelector("#message");
const hint    = document.querySelector("#hint");
const preview = document.querySelector("#preview");
const chars   = document.querySelector("#chars");

let count = 0;

plus.addEventListener("click", () => {
  count += 1;
  value.textContent = count;
});

minus.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
  }
  value.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  value.textContent = count;
});

message.addEventListener("input", () => {
  preview.textContent = message.value;
  chars.textContent = `${message.value.length} characters`;
});

message.addEventListener("focus", () => {
  hint.textContent = "Your message appears below as you type.";
});

message.addEventListener("blur", () => {
  hint.textContent = "";
});
