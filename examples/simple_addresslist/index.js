window.onload = () => {
  const container = document.querySelector(".table-container");
  let htmltext =
    "<thead><tr><th>Vorname</th><th>Nachname</th><th>Alter</th><tr/></thead>";

  htmltext += "<tbody>";
  for (e of exampleData) {
    console.log(e);
    htmltext += `<tr><td>${e.firstName}</td><td>${e.lastName}</td><td>${e.age}</td></tr>`;
  }
  htmltext += "</tbody>";

  container.innerHTML = `<table>${htmltext}</table>`;
};
