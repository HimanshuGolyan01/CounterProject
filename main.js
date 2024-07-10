const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const counter = document.getElementById("counter")

let count = 0;

btn1.addEventListener("click", function() {
    count++;
    counter.innerHTML = count;
})

btn2.addEventListener("click", function() {
    if(count > 0) {
        count--;
        counter.innerHTML = count;
    }
})