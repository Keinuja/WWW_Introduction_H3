import "./styles.css";

const osoite =
  "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";

async function getapi(osoite) {
  const vastaus = await fetch(osoite);
  var data = await vastaus.json();
  nayta(data);
}

function nayta(data) {
  let taulukko = `<thead>
    <th>Municipality</th>
    <th>Population</th>
  </thead>
  <tbody>
  </tbody>
  `;

  for (let r of data.list) {
    taulukko += `<tr>
        <td>${r.dataset.dimension.Alue.category.label}</td>
        <td>${r.dataset.value}</td>
      </tr>`;
  }
  document.getElementById("HTML-taulukko").innerHTML = taulukko;
}

getapi(osoite);
