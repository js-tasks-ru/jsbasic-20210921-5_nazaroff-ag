function highlight(table) {

  let tBodyRows = table.tBodies[0].rows;

  for (let row of tBodyRows) {
    for (let i = 0; i < row.cells.length; i++) {
      if (+row.cells[1].innerText < 18) {
        row.style.textDecoration = "line-through";
      }
      if (row.cells[2].innerText === "m") {
        row.classList.add("male");
      }
      if (row.cells[2].innerText === "f") {
        row.classList.add("female");
      }
      if (row.cells[3].dataset.available === "true") {
        row.classList.add("available");
      } else {
        row.classList.add("unavailable");
      }
      if (!row.cells[3].hasAttribute(`data-available`)) {
        row.setAttribute("hidden", "");
      }
    }
  }

  return table;
}
