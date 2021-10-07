function highlight(table) {
  // for (let i = 1; i < table.rows.length; i++) {
  //   console.log(table.rows[i].cells.length);
  //   for (let y = 0; y < table.rows[i].cells.length; y++) {
  //     if (y === 1) {
  //       if (+table.rows[i].cells[y].innerText < 18) {
  //         table.rows[i].cells[y].style.textDecoration = "line-through";
  //       }
  //     }
  //     if (y === 2)
  //       if (table.rows[i].cells[y].innerText === "m") {
  //         table.rows[i].cells[y].className = "male";
  //       }
  //     if (table.rows[i].cells[y].innerText === "f") {
  //       table.rows[i].cells[y].className = "female";
  //     }

  //     if (y === 3) {
  //       if (table.rows[i].cells[y].dataset.available) {
  //         table.rows[i].cells[y].className = "available";
  //       } else {
  //         table.rows[i].cells[y].className = "unavailable";
  //       }
  //       if (!table.rows[i].cells[y].hasAttribute(`data-available`)) {
  //         table.rows[i].cells[y].setAttribute("hidden", "");
  //       }
  //     }
  //   }
  // }

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
