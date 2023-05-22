let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    count +=1
    countEl.textContent = count
}

let chunkEl = document.getElementById("chunks-el")
function save() {
    chunkEl.textContent = chunkEl.textContent + count + " - "
    count = 0
    countEl.textContent = count
}

