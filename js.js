const timer1970 = document.createElement("div")

const box1 = document.createElement("div")
box1.classList.add("box1")
const box2 = document.createElement("div")
box2.classList.add("box2")
const boiboite = document.createElement("div")
const boitePrincipale = document.createElement("div")

boiboite.classList.add("flex")
boitePrincipale.classList.add("boitePrincipale")
box2.classList.add("flex")

const userAnne = document.createElement("input")
const userMois = document.createElement("input")
const userJour = document.createElement("input")
let boite = [userAnne,userMois,userJour]
let titre = ["Année ","Mois ","Jour "]
const table = document.createElement("table")
box2.appendChild(table)
for(let i = 0;i<boite.length;i++){
    let tr = document.createElement("tr")
    table.appendChild(tr)
    let td1 = document.createElement("td")
    td1.style.textAlign ="end"
    let td2 = document.createElement("td")
    td1.innerHTML = titre[i]
    td2.appendChild(boite[i])
    tr.appendChild(td1)
    tr.appendChild(td2)
    boite[i].type ="text"
  
}

let result = userAnne+userMois+userJour

document.body.appendChild(boitePrincipale)
boitePrincipale.appendChild(boiboite)
boiboite.appendChild(box2)
boiboite.appendChild(box1)
box1.appendChild(timer1970)


setInterval(function(){ 
    
    const userDate = Date.parse(userAnne.value+"-"+userMois.value+"-"+userJour.value)
    console.log(userAnne.value)
    const date = Date.now()
    let birth = date-userDate
    
    timer1970.innerHTML =
    " milliseconde" +birth+ "<br>"
    + "Seconde " + (birth/1000).toFixed(0) + "<br>"
    + "Minute " + (birth/1000/60).toFixed(0) + "<br>"
    + "Nombre d'heure"+ (birth/1000/60/60).toFixed(0) + "<br>"
    + "Nombre de jour " + (birth/1000/60/60/24).toFixed(0) + "<br>"
    + "Nombre d'années "+ (birth/1000/60/60/24/365).toFixed(0) + "<br>"
	
}, 10);



