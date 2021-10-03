function showSalary(users, age) {
  return [...users]
    .filter((user) => user.age <= age)
    .map((user, idx) =>
      idx < [...users].filter((user) => user.age <= age).length - 1
        ? user.name + ", " + user.balance + "\n"
        : user.name + ", " + user.balance
    )
    .join("");
}
