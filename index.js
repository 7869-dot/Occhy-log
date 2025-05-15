// document.getElementById("counter").innerHTML = 5;

// writing psedocode
let saveEl = document.getElementById("save")

let counter = document.getElementById("counter")

console.log(counter);

// incilize the count to 0
let count = 0;
// listen for clicks on the increment button
function increment() {
    count += 1;
    counter.innerText = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;

    //when the save button is clicked, the count should be saved
    // set the count back to 0
    count = 0;
    counter.innerText = count;  
}

