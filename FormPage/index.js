
let input = document.querySelectorAll(".IN");
let RESET = document.querySelector("#RESET");

console.log(RESET);

function Reset(){
    for (let index = 0; index < input.length; index++) {
        const E = input[index];
        E.value = "";
    }
}