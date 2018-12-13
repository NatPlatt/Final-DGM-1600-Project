/*JavaScript code for the Star Wars API on index.html page*/
import {films} from "./films.js"

let filmList = document.querySelector("#film-list")

/*Make the opening crawl to display under the picture*/
let crawl = document.querySelector("#openingCrawl")
let para = document.createElement("p")
para.textContent = films[6].opening_crawl
crawl.appendChild(para)

/*Make the list of films*/
films.forEach((film) => {
    let listItem = document.createElement("li")
    listItem.textContent = film.title
    filmList.appendChild(listItem)
})





