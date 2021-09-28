function sumSalary(salaries) {
  let sum = 0;
  for (let k in salaries) {
    if (isFinite(salaries[k]) && typeof salaries[k] === "number") {
      sum += +salaries[k];
    }
  }
  return sum;
}
