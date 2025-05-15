let inputBtn = document.getElementById("btn-El");
let inputEl = document.getElementById("inputStuff");
let myLeads = [];
const ulEl = document.getElementById("list");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderedLeads();
});

inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        renderedLeads();
    }
});


function renderedLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a></li>`;
    }

    ulEl.innerHTML = listItems;
}




