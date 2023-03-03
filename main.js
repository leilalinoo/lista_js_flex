window.addEventListener("load", init);

function init() {
  const objlist = [
    {
      nev: "Zoé",
      mondat: "Befejeztem tegnap a szobám kifestését!",
      kor: 23,
      teso: 0,
      szemszin: "kék",
    },

    {
      nev: "Kornél",
      mondat: "Finom volt a gyros ebéd.",
      kor: 23,
      teso: 3,
      szemszin: "barna",
    },

    {
      nev: "Leila",
      mondat:
        "Tegnap volt itt a várandós nővérem, és a baba lerúgta a kezem a hasáról.",
      kor: 20,
      teso: 1,
      szemszin: "kék",
    },

    {
      nev: "Bónó",
      mondat: "Vettem egy új síkesztyűt.",
      kor: 22,
      teso: 4,
      szemszin: "zöld",
    },

    {
      nev: "Hunor",
      mondat:
        "Az egyik kedvenc játékom le volt árazva, és megvettem, és hétfőn született meg az unokatestvérem gyereke.",
      kor: 25,
      teso: 0,
      szemszin: "vörös",
    },

    {
      nev: "Bence",
      mondat: "Hálát adtam az úrnak, hogy lementem edzeni.",
      kor: 19,
      teso: 4,
      szemszin: "barna",
    },

    {
      nev: "Ádám",
      mondat: "Kirúgták a gyökér főnökömet.",
      kor: 23,
      teso: 0,
      szemszin: "kék",
    },

    {
      nev: "Dominik",
      mondat:
        "Sose szerettem a csípőset és mégis vágytam rá és ettem és nagyon jól esett.",
      kor: 33,
      teso: 2,
      szemszin: "fekete",
    },

    {
      nev: "Ricsi",
      mondat:
        "Tegnap elaludtam Csolti Péter tanár úr óráján és egész nap aludtam.",
      kor: 23,
      teso: 0,
      szemszin: "kék",
    },
    {
      nev: "Martin",
      mondat: "Ember, most jöttem a templomból",
      kor: 23,
      teso: 0,
      szemszin: "kék",
    },
    {
      nev: "Valentin",
      mondat: "Vezethettem a volt munkahelyem új céges autóját.",
      kor: 15,
      teso: 10,
      szemszin: "barna",
    },
    {
      nev: "Lél",
      mondat: "Finom volt a vacsi.",
      kor: 23,
      teso: 1,
      szemszin: "kék",
    },
    {
      nev: "Laci",
      mondat:
        "Van egy játék és készítettek hozzá egy grafikai modult és és abba találtam egy pixelek elsimitására apit és a mozgásérzékelést, és a jobban nézett ki a játék.",
      kor: 23,
      teso: 0,
      szemszin: "kék",
    },
  ];
  console.log(objlist);

  const txt = osszeallit(objlist);
  const szuloElem = document.querySelectorAll("article");
  const tablazatSzuloElem = document.querySelectorAll("#tablazat");
  const tablazatSzoveg = tablazatMegjelenit(objlist);
  kiir(txt, szuloElem);
  kiir(tablazatSzoveg, tablazatSzuloElem);
}

function osszeallit(lista) {
  let txt = "";
  for (let index = 0; index < lista.length; index++) {
    txt +=
      "<div>" +
      "<h3>" +
      lista[index].nev +
      "</h3>" +
      "<p>" +
      lista[index].mondat +
      "</p>" +
      "</div>";
  }
  return txt;
}

function kiir(txt, szuloElem) {
  szuloElem[0].innerHTML = txt;
}

/*function tablazatMegjelenit(lista) {
  let tablazatSzoveg = `<table> <tr>
  <th>Név</th>
       <th>Mondat</th>`;

  for (let index = 0; index < lista.length; index++) {
    tablazatSzoveg +=
      `<tr>
    <td>` +
      lista[index].nev +
      `</td>
    <td>` +
      lista[index].mondat +
      `</td>
    </tr>`;
  }
  tablazatSzoveg += "</table>";
  return tablazatSzoveg;
}*/

function tablazatMegjelenit(objlist) {
  let tablazatSzoveg = `<table> <tr>
  <th>Név</th>
  <th>Mondat</th></tr>`;

  for (let index = 0; index < objlist.length; index++) {
    tablazatSzoveg += "<tr>";
    let object = objlist[index]; //a listában az aktuális ember összes adata
    for (const x in object) {
      const element = object[x];
      tablazatSzoveg += "<td>" + object[x] + "</td>";
    }
    tablazatSzoveg += "</tr>";
  }

  tablazatSzoveg += "</table>";
  return tablazatSzoveg;
}
