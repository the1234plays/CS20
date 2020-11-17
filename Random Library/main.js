
document.addEventListener("click", runCode);

function runCode() {

    let h1El = document.getElementById("output");

    h1El.innerHTML = randomInt(5, 9);
    h1El.style.color = randomRGB();

}