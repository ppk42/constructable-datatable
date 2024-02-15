window.onload = () => {
  const layout = constable.createVanillaTableLayout("testlyo1");
  const ds = constable.createLocalDataSource("ds1");
  const table = constable.createTable("testtable1", layout, ds);
  console.log(table);
  const container = document.querySelector(".table-container");
  //container.innerHTML = table.tableHTML;
  container.append(table.tableElement);
};

