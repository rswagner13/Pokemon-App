const pokemon = [
    {
        name: "Archaludon",
        type: ["Steel", "Dragon"],
        ability: "Stalwart",
        nature: "Modest",
        photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1018.png",
        region: "Blueberry Academy",
        baseHP: 90,
        baseATT: 105,
        baseDEF: 130,
        baseSPATT: 125,
        baseSPDEF: 65,
        baseSPD: 85
    }, {
        name: "Ludicolo",
        type: ["Water", "Grass"],
        ability: "Swift Swim",
        nature: "Modest",
        photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/272.png",
        region: "Kitakami",
        baseHP: 80,
        baseATT: 70,
        baseDEF: 70,
        baseSPATT: 90,
        baseSPDEF: 100,
        baseSPD: 70
    }, {
        name: "Porygon-Z",
        type: "Normal",
        ability: "Adaptability",
        nature: "Jolly",
        photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/474.png",
        region: "Blueberry Academy",
        baseHP: 85,
        baseATT: 80,
        baseDEF: 70,
        baseSPATT: 135,
        baseSPDEF: 75,
        baseSPD: 90
    }, {
        name: "Charizard",
        type: ["Fire", "Flying"],
        ability: "Blaze",
        nature: "Modest",
        photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/6.png",
        region: "Blueberry Academy",
        baseHP: 78,
        baseATT: 84,
        baseDEF: 78,
        baseSPATT: 109,
        baseSPDEF: 85,
        baseSPD: 100
    }, {
        name: "Snorlax",
        type: "Normal",
        ability: "Thick Fat",
        nature: "Careful",
        photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/143.png",
        region: "Kitakami",
        baseHP: 160,
        baseATT: 110,
        baseDEF: 65,
        baseSPATT: 65,
        baseSPDEF: 110,
        baseSPD: 30
    }, {
        name: "Pelipper",
        type: ["Water", "Flying"],
        ability: "Drizzle",
        nature: "Relaxed",
        photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/279.png",
        region: "Paldea",
        baseHP: 60,
        baseATT: 50,
        baseDEF: 100,
        baseSPATT: 95,
        baseSPDEF: 70,
        baseSPD: 65
    }
]

// Export the seed data to 'models/index.js
module.exports = pokemon;