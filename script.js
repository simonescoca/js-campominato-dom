// Consegna
//     L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100
//     Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella,
//     la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata

// Bonus
//     Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
//     con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe
//     con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe
//     con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe

const ulElement = document.getElementById ("ul")
const button = document.getElementById ("button")

// FUNCTIONS ////////////////////////////////////////////

/**
 * Creates a li within an index, adds eventual classes
 * @param index the index
 * @param liStyle the main class
 * @param liToggleClass the toggle class
 * @returns the li element with upper features
 */

function createLiElement (index, liStyle, liToggleClass) {
    const liElement = document.createElement ("li")
    liElement.append (index)
    liElement.classList.add (liStyle)
    liElement.classList.toggle (liToggleClass)
    return liElement
}

/**
 * Generates 100 lis in the ul, and resets them to 0 before
 */

function generateGrid () {
    ulElement.innerHTML = ""

    for (let i = 0 ; i < 100 ; i++) {
        const finalLiElement = createLiElement ((i + 1), "cell", "selected")
        ulElement.appendChild (finalLiElement)

        finalLiElement.addEventListener ("click",
            function () {
                const selectCell = i + 1
                console.log ("Cella selezionata: " + selectCell)
                finalLiElement.classList.add ("cell-active")
            }
        )
    }
}

// EVENT LISTENERS ///////////////////////////////////////

button.addEventListener ("click", 
    function () {
        ulElement.classList.add ("my_ul")
        generateGrid()
    }
)