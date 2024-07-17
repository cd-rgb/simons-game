let a = [];
let b = [];
let level = 0;
let started = false
let colors = ["yellow", "red", "green", "blue"];
let h2 = document.querySelector('h2');

document.addEventListener("keypress", function () {

    if (started == false) {
        console.log("game start");
        started = true
    }
    levelup();

})

function levelup() {
    b = [];
    level++;
    let h2 = document.querySelector('h2')
    h2.innerText = `level ${level}`;

    let randno = Math.floor(Math.random() * 4);
    let randcol = colors[randno];
    console.log(randcol);

    a.push(randcol);
    console.log(a);
    let btnss = document.querySelector(`.${randcol}`)
    flashup(btnss);
    setTimeout(function () {
        btnss.classList.remove("flashup")
    }, 600);

}

function flashup(btn) {

    btn.classList.add("flashup");

}
function f(btn) {

    btn.classList.add("flashupuser");

}

function press() {
    let p = this;
    f(p);
    setTimeout(function () {
        p.classList.remove("flashupuser")
    }, 300)
    let col = this.getAttribute("id");
    b.push(col);
    console.log(b);
    check(b.length - 1);
}

let bt1 = document.querySelectorAll(".btn");
for (btn of bt1) {
    btn.addEventListener("click", press);
}
function check(idx) {
    console.log(idx);
    if (a[idx] === b[idx]) {
        if (a.length == b.length)
            levelup();
    }
    else {

        h2.innerText = `game over`;
        started = false;
        a = [];
        b = [];
        level = 0;
        setTimeout(function () {
            h2.innerText = `Press any key to play the game again`;
        }, 1000)

    }
}
