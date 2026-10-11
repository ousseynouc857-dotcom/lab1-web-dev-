function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✔" : "✘"} ${label}`, ok ? "" : { actual, expected });
}

function letter(grade) {
  if (grade >= 16) {
    return "A";
  } else if (grade >= 14) {
    return "B";
  } else if (grade >= 12) {
    return "C";
  } else if (grade >= 10) {
    return "D";
  } else {
    return "F";
  }
}

function status(grade) {
  return grade >= 10 ? "Pass" : "Fail";
}

function sum(numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

function countPassed(grades) {
  let passed = 0;
  for (const grade of grades) {
    if (grade >= 10) {
      passed += 1;
    }
  }
  return passed;
}

function countdown(n) {
  const numbers = [];
  for (let i = n; i >= 1; i -= 1) {
    numbers.push(i);
  }
  return numbers;
}

check("letter A",    letter(17), "A");

check("letter B",    letter(14), "B");

check("letter D",    letter(10), "D");

check("letter F",    letter(9.5), "F");

check("status",      [status(10), status(9)], ["Pass", "Fail"]);

check("sum",         sum([4, 6, 10]), 20);

check("countPassed", countPassed([8, 12, 10, 15, 3]), 3);

check("countdown",   countdown(3), [3, 2, 1]);
