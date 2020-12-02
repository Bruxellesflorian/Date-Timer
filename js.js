const timer1970 = document.createElement("div")
const box1 = document.createElement("div")
const box2 = document.createElement("div")
const boiboite = document.createElement("div")
const boitePrincipale = document.createElement("div")
const userAnne = document.createElement("input")
const userMois = document.createElement("input")
const userJour = document.createElement("input")
const divButton = document.createElement("div")
const button = document.createElement("button")
boitePrincipale.classList.add("boitePrincipale")
box1.classList.add("box1")
box2.classList.add("box2")
divButton.classList.add("divButton")
button.innerHTML = "DATE"

boiboite.classList.add("flex")
let boite = [userAnne, userMois, userJour]
let titre = ["Année ", "Mois ", "Jour "]
const table = document.createElement("table")
boiboite.appendChild(table)

for (let i = 0; i < boite.length; i++) {
    let tr = document.createElement("tr")
    table.appendChild(tr)
    let td1 = document.createElement("td")
    td1.style.textAlign = "end"
    let td2 = document.createElement("td")
    td1.innerHTML = titre[i]
    td2.appendChild(boite[i])
    tr.appendChild(td1)
    tr.appendChild(td2)
    boite[i].type = "text"
}
let result = userAnne + userMois + userJour
setInterval(function () {

    const userDate = Date.parse(userAnne.value + "-" + userMois.value + "-" + userJour.value)

    const date = Date.now()
    let birth = date - userDate

    timer1970.innerHTML =
        " milliseconde " + birth + "<br>" +
        "Seconde " + (birth / 1000).toFixed(0) + "<br>" +
        "Minute " + (birth / 1000 / 60).toFixed(0) + "<br>" +
        "Nombre d'heure " + (birth / 1000 / 60 / 60).toFixed(0) + "<br>" +
        "Nombre de jour " + (birth / 1000 / 60 / 60 / 24).toFixed(0) + "<br>" +
        "Nombre d'années " + (birth / 1000 / 60 / 60 / 24 / 365).toFixed(0) + "<br>"

}, 1);
const display = document.createElement("div");


cities = [{
        name: "Anchorage",
        offset: -9
    },
    {
        name: "Reykjavik",
        offset: 0
    }, {
        name: "Saint-Petersburg",
        offset: 3
    },
    {
        name: "Brussels",
        offset: 1
    }
]
let bol = true
const push = button.addEventListener("click", function () {
    if(bol === false){
        window.location =""
    }
    bol=false
    button.innerHTML = "RETOUR"
    box1.innerHTML = ""
    box1.style.fontSize = "80px"
    box2.style.fontSize = "80px"

    function screen() {
        for (let element of cities) {
            const dateOffset = calcTime(element.offset)
            let month = dateOffset.getMonth()

            var d = new Date();

            var days = ["Sunday", "Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday"
            ];
            if (dateOffset.getMonth() == 0) {
                pushMonth = "JAN"
            };
            if (dateOffset.getMonth() == 1) {
                pushMonth = "FEB"
            };
            if (dateOffset.getMonth() == 2) {
                pushMonth = "MAR"
            };
            if (dateOffset.getMonth() == 3) {
                pushMonth = "APR"
            };
            if (dateOffset.getMonth() == 4) {
                pushMonth = "MAY"
            };
            if (dateOffset.getMonth() == 5) {
                pushMonth = "JUN"
            };
            if (dateOffset.getMonth() == 6) {
                pushMonth = "JUL"
            };
            if (dateOffset.getMonth() == 7) {
                pushMonth = "AUG"
            };
            if (dateOffset.getMonth() == 8) {
                pushMonth = "SEP"
            };
            if (dateOffset.getMonth() == 9) {
                pushMonth = "OCT"
            };
            if (dateOffset.getMonth() == 10) {
                pushMonth = "NOV"
            };
            if (dateOffset.getMonth() == 11) {
                pushMonth = "DEC"
            };

            display.innerHTML = dateOffset.getDate() + "<br>" + pushMonth;
            boiboite.innerHTML = days[d.getDay()];
            boiboite.style.paddingTop = "35px"
            boiboite.style.fontWeight = "bold"
            boiboite.style.fontSize = "32px"
            box1.style.textAlign = "center"
            box1.style.fontSize = "50px"
            box1.appendChild(display)
            box2.innerHTML = dateOffset.getFullYear()
        }

        function calcTime(offset) {
            d = new Date();
            utc = d.getTime() + (d.getTimezoneOffset() * 60 * 1000);
            nd = new Date(utc + (3600 * 1000 * offset));
            return nd;
        }
    }

    setInterval(screen, 100)
})

document.body.appendChild(boitePrincipale)
boitePrincipale.appendChild(boiboite)
document.body.appendChild(box1)
document.body.appendChild(box2)
box1.appendChild(timer1970)
document.body.appendChild(divButton)
divButton.appendChild(button)