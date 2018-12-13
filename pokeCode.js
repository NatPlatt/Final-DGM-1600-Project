/*All JavaScript code for the Pokemon Cards on cards.html page*/

import {pokemon} from "./poke26.js"

const pokeContainer = document.querySelector('#container')

const cardCreator = (poke) => {
    let card = document.createElement('div')
    card.className = 'card'
    
    /*Code to make the card flip over*/
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    })
    let frontFig = document.createElement('figure')
    frontFig.className = 'card_face card_face--front'
    
    /*Code for everything needed for the front of card*/
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')
    cap.textContent = poke.ename
    img.src = `/img26/${poke.id}${poke.ename}.png`
    frontFig.appendChild(img)
    frontFig.appendChild(cap)
    
    /*Code for everything needed for the back of the card*/
    let backFig = document.createElement('figure')
    backFig.className = 'card_face card_face--back'
    let capt = document.createElement('figcaption')
    capt.className = 'backFigCap'
    capt.textContent = poke.jname
   
    let attack = document.createElement('p')
    attack.textContent = `Attack: ${poke.base.Attack}`
    
    let defense = document.createElement('p')
    defense.textContent = `Defense: ${poke.base.Defense}`
    
    let hp = document.createElement('p')
    hp.textContent = `HP: ${poke.base.HP}`
    
    let spAtk = document.createElement('p')
    spAtk.textContent = `Special Attack:${poke.base["Sp.Atk"]}`
    
    let spDef = document.createElement('p')
    spDef.textContent = `Special Defense:${poke.base["Sp.Def"]}`
    
    let type = document.createElement('p')
    type.textContent = `Type:${poke.type}`
    
    /*Append everything to the back figure*/
    backFig.appendChild(capt)
    backFig.appendChild(attack)
    backFig.appendChild(defense)
    backFig.appendChild(hp)
    backFig.appendChild(spAtk)
    backFig.appendChild(spDef)
    backFig.appendChild(type)
    
    /*Append the back figure and front figure to the card
    and then append the card to the div where it'll be one the page*/
    card.appendChild(frontFig)
    card.appendChild(backFig)
    pokeContainer.appendChild(card)
   };

pokemon.forEach(element => cardCreator(element))

/*Object Constructor for new card button*/
class Pokemon {
   constructor(ename, jname, id, base) {
    this.ename = ename;
    this.jname = jname;
    this.id = id;
    this.base = base;
   } 
};

/*Create new cards with above constructor*/
let newPokemon = new Pokemon("Sandshrew", "\u30b5\u30f3\u30c9",'027', {"Attack": 75, "Defense": 85,"HP": 50,"Sp.Atk":20,"Sp.Def":30});

let newPokemon2 = new Pokemon("Rapidash","\u30ae\u30e3\u30ed\u30c3\u30d7", '078',{"Attack": 100, "Defense":70, "HP":65, "Sp.Atk":80, "Sp.Def":80});

/*wanted to see if I could make two cards at once and just decided to leave it*/

let createCard = document.querySelector('#createCard') 
createCard.addEventListener('click', () => {
    cardCreator(newPokemon)
});
createCard.addEventListener('click', () => {
    cardCreator(newPokemon2)
});



