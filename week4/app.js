const number = document.getElementById("counting-num");
const incButton = document.getElementById("increase");
const decButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const inc10Button = document.getElementById("increase-10");
const dec10Button = document.getElementById("decrease-10");

let count = 0;
number.textContent = count;


function increaseCount() {
    count++; // count = count + 1
    showNumber();
}

function decreaseCount() {
    count--; // count = count - 1
    showNumber();
}

function increaseCountBy10() {
    count += 10;  // +10 증가
    showNumber();
}

function decreaseCountBy10() {
    count -= 10;  // -10 감소
    showNumber();
}

function resetCount() {
    count = 0;
    showNumber();
}

   
   
function showNumber() {
    if(count > 0) {
        number.style.color = `rgba(${count},0,0)`;   
    } else if (count < 0) {
        number.style.color = `rgba(0, ${Math.abs(count)}, 0`;
    } else {
        number.style.color = 'black'
    }
    number.textContent = count;
}
   
   
incButton.addEventListener("click", increaseCount);
decButton.addEventListener("click", decreaseCount);
inc10Button.addEventListener("click", increaseCountBy10);
dec10Button.addEventListener("click", decreaseCountBy10);
resetButton.addEventListener("click", resetCount);