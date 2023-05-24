// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati,
// abbiamo calpestato una bomba e la cella si colora di rosso e la partita termina
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe)
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba

const ulElement = document.getElementById ("ul")
const button = document.getElementById ("button")


// EVENT LISTENERS ///////////////////////////////////////

button.addEventListener ("click", 
    function () {
        generateGrid()
    }
)

// FUNCTIONS ////////////////////////////////////////////

/**
 * Creates a li within an index, adds eventual classes
 * @param index the index
 * @param liStyle the main class
 * @param liToggleClass the toggle class
 * @returns the li element with upper features
 */

function createLiElement (index, liStyle) {
    const liElement = document.createElement ("li")
    liElement.append (index)
    liElement.classList.add (liStyle)
    return liElement
}

/**
 * Generates 100 lis in the ul, and resets them to 0 before
 */

function generateGrid () {
    ulElement.classList.add ("my_ul")
    ulElement.innerHTML = ""

    const bombs = randomNotRepeatedNumbers (100, 16)

    for (let i = 0 ; i < 100 ; i++) {
        const finalLiElement = createLiElement ((i + 1), "cell")
        ulElement.appendChild (finalLiElement)

        finalLiElement.addEventListener ("click",
            function () {
                const selectCell = i + 1
                console.log ("Cella selezionata:", selectCell)

                let youLost = false

                while (!youLost) {
                    finalLiElement.classList.add ("cell-active-grey")

                    if (bombs.includes (selectCell)) {
                        youLost = true
                        console.log ("Sei schioppato bro")
                        finalLiElement.classList.add ("cell-active-red")
                    }
                }
                if (youLost) {
                    return
                }
            }
        )
    }
}

function randomNotRepeatedNumbers (arrayLength, arrayResultLength) {
    const array = []

    for (let i = 0 ; i < arrayLength ; i++) {
        const arrayElement = i + 1
        array.push (arrayElement)
    }

    const arrayResult = []

    while (arrayResult.length < arrayResultLength) {
        const arrayResultElemet = array [Math.floor (Math.random() * array.length)]
        if (!arrayResult.includes (arrayResultElemet)) {
            arrayResult.push (arrayResultElemet)
        }
    }
    console.log(arrayResult)
    return arrayResult
}