/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.row = rows;
    this.elem = this.render();
  }
  render() {
    const table = document.createElement("TABLE");
    this.elem = table;
    const thead = document.createElement("THEAD");
    thead.innerHTML =
      "<tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr>";
    table.appendChild(thead);
    const tbody = document.createElement("TBODY");

    for (let row of this.row) {
      console.log(row);
      const tr = document.createElement("TR");
      tr.innerHTML = `<td> ${row.name} </td> <td> ${row.age} </td> <td> ${row.salary} </td> <td> ${row.city} </td> <td> <button onclick="event.path[2].remove()"> X </button> </td>`;
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    return table;
  }
}
