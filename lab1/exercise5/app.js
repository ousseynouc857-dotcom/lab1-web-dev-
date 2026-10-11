const meals = [
  { day: "Monday",    dish: "Thieboudienne",        vegetarian: false },
  { day: "Tuesday",   dish: "Ndambé",               vegetarian: true },
  { day: "Wednesday", dish: "Yassa poulet",         vegetarian: false },
  { day: "Thursday",  dish: "Couscous aux légumes", vegetarian: true },
  { day: "Friday",    dish: "Mafé",                 vegetarian: false },
];

const menu  = document.querySelector("#menu");
const count = document.querySelector("#count");

function createMealItem(meal) {
  const item = document.createElement("li");
  const day = document.createElement("strong");
  day.textContent = meal.day;
  item.append(day, `: ${meal.dish}`);

  if (meal.vegetarian) {
    item.classList.add("veg");
  }

  return item;
}

for (const meal of meals) {
  menu.append(createMealItem(meal));
}

const vegetarianCount = meals.filter((meal) => meal.vegetarian).length;
count.textContent = `${meals.length} meals · ${vegetarianCount} vegetarian`;
