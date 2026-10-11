function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✔" : "✘"} ${label}`, ok ? "" : { actual, expected });
}

function fullName(first, last) {
  return `${first} ${last}`;
}

function initials(first, last) {
  return `${first[0]}.${last[0]}.`;
}

function cleanEmail(text) {
  return text.trim().toLowerCase();
}

function hasAt(text) {
  return text.includes("@");
}

check("fullName",   fullName("Awa", "Diop"), "Awa Diop");

check("initials",   initials("Awa", "Diop"), "A.D.");

check("cleanEmail", cleanEmail("  Awa.Diop@MYDAUST.org "), "awa.diop@mydaust.org");

check("hasAt yes",  hasAt("awa@daust.org"), true);

check("hasAt no",   hasAt("awa.daust.org"), false);
