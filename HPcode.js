import {hpapi} from "./harrypotter.js"

/*The following function is inline on the harryPotter.html page. It wouldn't work otherwise for some reason.
I ran out of time to figure out why. I left it here commented out so you could see all the harry potter 
JavaScript code at once.*/

//function muggleOrNot() {
//    var text;
//    var types = document.getElementById("myInput").value;
//   
//    switch(types){
//        case "muggle":
//            text="Welcome muggle, scroll down to enjoy some gifs from the fictional Harry Potter series.";
//        break;
//        case "Muggle":
//            text="Welcome muggle, scroll down to enjoy some gifs from the fictional Harry Potter series.";
//        break;
//        case "Wizard":
//            text="Welcome fellow wizard. Scroll down to enjoy some photos from our history.";
//        break;
//        case "wizard":
//            text="Welcome fellow wizard.Scroll down to enjoy some photos from our history.";
//        break;
//        case "witch":
//            text="Welcome fellow witch.Scroll down to enjoy some photos from our history.";
//        break;
//        case "Witch":
//            text="Welcome fellow witch. Scroll down to enjoy some photos from our history.";
//        break;
//    /*what happens if the user doesn't type in one of the above options*/
//        default:
//            text="That was not one of the options, you must be a Death Eater! Aurors have been sent to your location."
//        
//    }
//    document.getElementById("demo").innerHTML = text;
//};

const hpStuff = document.querySelector('#hpFilter')

/*For the harry potter list on harryPotter.html*/
const hpArray = (hpItem) => {
    let info = document.createElement("li")
    info.textContent = `${hpItem.name}, ${hpItem.ancestry}`
    
    let wand = hpapi.filter(a => a.wand.wood != '')
    .map(a => console.log(a.name+'Wand wood:'+a.wand.wood))
    
    let colorThreshold = "",
        liItem = document.querySelector('li')
    
/*Function for color of each list item. 
Checks values of array to determine color*/    
    function changeColor(house){
        let color = "white";
        if (hpItem.house == "Gryffindor"){
            color = "tomato";
        } else if (hpItem.house =="Slytherin"){
            color = "lightgreen";
        } else if (hpItem.house =="Hufflepuff"){
            color = "gold";
        } else if (hpItem.house =="Ravenclaw"){
            color = "deepskyblue";
        }
    info.style.backgroundColor = color;
    }
    changeColor(colorThreshold);
    
    hpStuff.appendChild(info)
    console.log(hpItem.name)
};
hpapi.forEach(element =>hpArray(element))