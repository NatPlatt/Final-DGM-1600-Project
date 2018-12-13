import {films} from "./films.js"

let filmList = document.querySelector("#film-list")


films.forEach((film) => {
    let listItem = document.createElement("li")
    listItem.textContent = film.title
    filmList.appendChild(listItem)
    console.log(film.title)
})
let crawl = document.querySelector("#openingCrawl")
let para = document.createElement("p")
para.textContent = films[6].opening_crawl
crawl.appendChild(para)
console.log(films[6].opening_crawl);



