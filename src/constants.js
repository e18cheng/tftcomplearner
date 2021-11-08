export const ChampionData = require("./tft_data/champions.json");

export var MetaComps = {
  Rangers: [
    "Lulu",
    "Fiddlesticks",
    "Volibear",
    "Ivern",
    "Teemo",
    "Diana",
    "Aphelios",
    "Akshan",
  ],
  "Abom + X": [
    "Brand",
    "Nunu",
    "Fiddlesticks",
    "Volibear",
    "Ivern",
    "Syndra",
    "Velkoz",
    "Lux",
  ],
  Draven: [
    "Kayle",
    "Irelia",
    "Riven",
    "Draven",
    "Viego",
    "Diana",
    "Galio",
    "Rell",
  ],
  Lucian: [
    "Lucian",
    "Pyke",
    "Senna",
    "Akshan",
    "Rakan",
    "Galio",
    "Ivern",
    "Volibear",
  ],
  Yasuo: [
    "Yasuo",
    "Irelia",
    "Lee Sin",
    "Diana",
    "Sejuani",
    "Rell",
    "Jax",
    "Nautilus",
  ],
  "Fortnite Jax": [
    "Garen",
    "Galio",
    "Thresh",
    "Nautilus",
    "Rell",
    "Jax",
    "Irelia",
    "Olaf",
  ],
};

export const champList = [];
ChampionData.forEach((champion) => {
  champList.push(champion);
});