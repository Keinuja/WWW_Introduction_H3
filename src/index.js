import "./styles.css";

const osoite =
  "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";

const osoite2 =
  "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";

async function getapi(osoite) {
  const vastaus = await fetch(osoite);
  const vastaus2 = await fetch(osoite2);
  var data = await vastaus.json();
  var data2 = await vastaus2.json();
  nayta(data);
  lisaa(data2);
  laske_osuus();
}

function nayta(data) {
  let taulukko = `<thead>
    <th>Municipality</th>
    <th>Population</th>
  </thead>
  <tbody>
  </tbody>
  `;

  for (var r of data.list) {
    taulukko += `<tr>
        <td>${r.dataset.dimension.Alue.category.label}</td>
        <td>${r.dataset.value}</td>
      </tr>`;
  }
  document.getElementById("HTML-taulukko").innerHTML = taulukko;
}

function lisaa(data) {
  let sarake = `<thead>
    <th>Employment amount</th>
  </thead>
  <tbody>
  </tbody>
  `;

  for (var c of data.list) {
    sarake += `<tr>
        <td>${c.dataset.value}</td>
      </tr>`;
  }
  document.getElementById("HTML-taulukko").innerHTML = sarake;
}

getapi(osoite);
