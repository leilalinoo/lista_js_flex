window.addEventListener("load", init);

function init() {

  const objlist = [
    {
      nev: "Zoé",
      mondat: "Befejeztem tegnap a szobám kifestését!",
    },

    {
      nev: "Kornél",
      mondat: "Finom volt a gyros ebéd.",
    },

    {
      nev: "Leila",
      mondat:
        "Tegnap volt itt a várandós nővérem, és a baba lerúgta a kezem a hasáról.",
    },

    {
      nev: "Bónó",
      mondat: "Vettem egy új síkesztyűt.",
    },

    {
      nev: "Hunor",
      mondat:
        "Az egyik kedvenc játékom le volt árazva, és megvettem, és hétfőn született meg az unokatestvérem gyereke.",
    },

    {
      nev: "Bence",
      mondat: "Hálát adtam az úrnak, hogy lementem edzeni.",
    },

    {
      nev: "Ádám",
      mondat: "Kirúgták a gyökér főnökömet.",
    },

    {
      nev: "Dominik",
      mondat:
        "Sose szerettem a csípőset és mégis vágytam rá és ettem és nagyon jól esett.",
    },

    {
      nev: "Ricsi",
      mondat:
        "Tegnap elaludtam Csolti Péter tanár úr óráján és egész nap aludtam.",
    },
    { nev: "Martin", mondat: "Ember, most jöttem a templomból" },
    {
      nev: "Valentin",
      mondat: "Vezethettem a volt munkahelyem új céges autóját.",
    },
    { nev: "Lél", mondat: "Finom volt a vacsi." },
    {
      nev: "Laci",
      mondat:
        "Van egy játék és készítettek hozzá egy grafikai modult és és abba találtam egy pixelek elsimitására apit és a mozgásérzékelést, és a jobban nézett ki a játék.",
    },
  ];
  console.log(objlist);

  const txt = osszeallit(objlist);
  const szuloElem = document.querySelectorAll("article");
  kiir(txt, szuloElem);
}

function osszeallit(lista) {
  let txt = "";
  for (let index = 0; index < lista.length; index++) {
    txt += "<div>"+"<h3>"+ lista[index].nev +"</h3>" + "<p>" + lista[index].mondat + "</p>" + "</div>";
  }
  return txt;
}

function kiir(txt, szuloElem) {
  szuloElem[0].innerHTML = txt;
}
