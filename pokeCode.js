
import {pokemon} from "./poke26.js"
console.log(pokemon);

const pokeContainer = document.querySelector('#container')

const cardCreator = (poke) => {
    let card = document.createElement('div')
    card.className = 'card'
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    })
    let frontFig = document.createElement('figure')
    frontFig.className = 'card_face card_face--front'
    console.log(`${poke.id}${poke.ename}.png`)
    
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')
    cap.textContent = poke.ename
    img.src = `/img26/${poke.id}${poke.ename}.png`
    frontFig.appendChild(img)
    frontFig.appendChild(cap)
    
    let backFig = document.createElement('figure')
    backFig.className = 'card_face card_face--back'
    let capt = document.createElement('figcaption')
    capt.className = 'backFigCap'
    capt.textContent = poke.jname
    //let imag = document.createElement('img')
    //imag.src = './pokecardback.png'
    
    
    let attack = document.createElement('p')
    attack.textContent = `Attack: ${poke.base.Attack}`
    console.log(`Attack: ${poke.base.Attack}`)
    
    let defense = document.createElement('p')
    defense.textContent = `Defense: ${poke.base.Defense}`
    console.log(`Defense: ${poke.base.Defense}`)
    
    let hp = document.createElement('p')
    hp.textContent = `HP: ${poke.base.HP}`
    console.log(`HP: ${poke.base.HP}`)
    
    let spAtk = document.createElement('p')
    spAtk.textContent = `Special Attack:${poke.base["Sp.Atk"]}`
    console.log(`Special Attack:${poke.base["Sp.Atk"]}`)
    
    let spDef = document.createElement('p')
    spDef.textContent = `Special Defense:${poke.base["Sp.Def"]}`
    console.log(`Special Defense:${poke.base["Sp.Def"]}`)
    
    let type = document.createElement('p')
    type.textContent = `Type:${poke.type}`
    console.log(`Type:${poke.type}`)
    
    //backFig.appendChild(imag)
    backFig.appendChild(capt)
    backFig.appendChild(attack)
    backFig.appendChild(defense)
    backFig.appendChild(hp)
    backFig.appendChild(spAtk)
    backFig.appendChild(spDef)
    backFig.appendChild(type)
    
    card.appendChild(frontFig)
    card.appendChild(backFig)
    pokeContainer.appendChild(card)
   };

pokemon.forEach(element => cardCreator(element))

class Pokemon {
   constructor(ename, jname, id, base) {
    this.ename = ename;
    this.jname = jname;
    this.id = id;
    this.base = base;
   } 
};

let newPokemon = new Pokemon("Sandshrew", "\u30b5\u30f3\u30c9",'027', {"Attack": 75, "Defense": 85,"HP": 50,"Sp.Atk":20,"Sp.Def":30});

let newPokemon2 = new Pokemon("Rapidash","\u30ae\u30e3\u30ed\u30c3\u30d7", '078',{"Attack": 100, "Defense":70, "HP":65, "Sp.Atk":80, "Sp.Def":80});

let createCard = document.querySelector('#createCard') 
createCard.addEventListener('click', () => {
    cardCreator(newPokemon)
});
createCard.addEventListener('click', () => {
    cardCreator(newPokemon2)
});

function whatType(string){
    return string == '\u8349, \u6bd2'
}

var filtered = type.filter(whatType);

