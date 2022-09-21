console.log("JavaScript working...")

const div = document.body.getElementsByClassName("chess-board")
let innerHTML = div[0].innerHTML

const addCode = (code) => innerHTML += code;
function addLetters() {
    innerHTML += `<tr>`
    for (const letter of letters) innerHTML += `<th>${letter}</th>`
    innerHTML += `</tr>`
}

const letters = ' ABCDEFGH'.split('')
innerHTML += `<tbody>`
addLetters()

let black = false
for (let i = 8; i !== 0; i--) {
    innerHTML += `<tr><th>${i}</th>`
    black = !black
    for (let i2 = 0; i2 < 8; i2++) {
        black = !black
        innerHTML += `<td class=${black ? '"black"' : '"white"'}></td>`
    }
    innerHTML += `<th>${i}</th></tr>`
}

addLetters()
innerHTML += `</tbody>`
div[0].innerHTML = innerHTML