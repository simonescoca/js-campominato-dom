// Al termine della partita il software deve comunicare il punteggio

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


function generateGrid () {
    ulElement.classList.add ("my_ul")
    ulElement.innerHTML = ""

    const bombs = randomNotRepeatedNumbers (100, 16)

    let gameOver = false
    document.getElementById ("alert").classList.remove ("alert-lost")
    document.getElementById ("alert").classList.remove ("alert-victory")
    document.getElementById ("alert").innerHTML = ""

    document.getElementById ("score").classList.remove ("score-lost")
    document.getElementById ("score").classList.remove ("score-victory")
    document.getElementById ("score").innerHTML = ""

    let score = 0

    for (let i = 0 ; i < 100 ; i++) {
        const finalLiElement = createLiElement ((i + 1), "cell")
        ulElement.appendChild (finalLiElement)

        finalLiElement.addEventListener ("click",
            function () {
                if (gameOver) {
                    return
                }
                
                const selectCell = i + 1
                if (bombs.includes (selectCell)) {
                    gameOver = true
                    finalLiElement.classList.add ("cell-active-red")
                
                    const myAlert = document.getElementById ("alert")
                    myAlert.innerHTML = "GAME OVER! YOU LOST"
                    myAlert.classList.add ("alert-lost")
                
                    document.getElementById ("header").classList.remove("mb-5")
                    document.getElementById ("header").classList.add("mb-3")

                    document.getElementById ("score").classList.add ("score-lost")
                    document.getElementById ("score").innerHTML = "SCORE " + score

                } else {
                    if (!finalLiElement.classList.contains ("cell-active-grey")) {
                        score++
                    }
                    finalLiElement.classList.add ("cell-active-grey")
                }

                if (score > 83) {
                    gameOver = true

                    const myAlert = document.getElementById ("alert")
                    myAlert.innerHTML = "GAME OVER! YOU WON"
                    myAlert.classList.add ("alert-victory")
                
                    document.getElementById ("header").classList.remove("mb-5")
                    document.getElementById ("header").classList.add("mb-3")
                
                    document.getElementById ("score").classList.add ("score-victory")
                    document.getElementById ("score").innerHTML = "SCORE " + score
                }
            }
        )
    }
}

/**
 * By an array of itegers positive numbers, arrayLength elements long, creates another array with random numbers not repeated twice.
 * @param {number} arrayLength initial array's length
 * @param {number} arrayResultLength result array's lenght
 * @returns {array} the array result
 */
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
    return arrayResult
}