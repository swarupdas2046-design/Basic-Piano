
let p = document.querySelectorAll("button");
let h2 = document.querySelector("h2");

let arr = [
    {
        "a": new Audio("./28.mp3")
    },
    {
        "b": new Audio("./29.mp3")
    },
    {
        "c": new Audio("./30.mp3")
    },
    {
        "d": new Audio("./31.mp3")
    },
    {
        "e": new Audio("./32.mp3")
    },
    {
        "f": new Audio("./33.mp3")
    },
    {
        "g": new Audio("./34.mp3")
    },
    {
        "h": new Audio("./40.mp3")
    },
    {
        "j": new Audio("./37.mp3")
    },
    {
        "k": new Audio("./36.mp3")
    },
]

let map = {
    "a": 0,
    "b": 1,
    "c": 2,
    "d": 3,
    "e": 4,
    "f": 5,
    "g": 6,
    "h": 7,
    "j": 8,
    "k": 9
};
document.body.addEventListener("keydown", function (dtls) {

    h2.innerHTML = dtls.code

    let num = map[dtls.key]


    if (num === 0) {
        arr[0].a.currentTime = 0;
        arr[0].a.play()
        p[0].style.backgroundColor = `rgba(15, 13, 13, 0.803)`;
        setTimeout(() => {
            p[0].style.backgroundColor = "black"
        }, 500);
    }
    else if (num === 1) {
        arr[1].b.currentTime = 0;


        arr[1].b.play()
        p[1].style.backgroundColor = `rgba(15, 13, 13, 0.803)`
        setTimeout(() => {
            p[1].style.backgroundColor = "black"
        }, 500);
    }

    else if (num === 2) {
        arr[2].c.currentTime = 0;

        arr[2].c.play()
        p[2].style.backgroundColor = `rgba(15, 13, 13, 0.803)`
        setTimeout(() => {
            p[2].style.backgroundColor = "black"
        }, 500);
    }

    else if (num === 3) {
        arr[3].d.currentTime = 0;

        arr[3].d.play()
        p[3].style.backgroundColor = `rgba(15, 13, 13, 0.803)`
        setTimeout(() => {
            p[3].style.backgroundColor = "black"
        }, 500);
    }
    else if (num === 4) {
        arr[4].e.currentTime = 0;

        arr[4].e.play()
        p[4].style.backgroundColor = `rgba(15, 13, 13, 0.803)`
        setTimeout(() => {
            p[4].style.backgroundColor = "black"
        }, 500);
    }
    else if (num === 5) {
        arr[5].f.currentTime = 0;

        arr[5].f.play()
        p[5].style.backgroundColor = `rgba(15, 13, 13, 0.803)`
        setTimeout(() => {
            p[5].style.backgroundColor = "black"
        }, 500);
    }
    else if (num === 6) {
        arr[6].g.currentTime = 0;

        arr[6].g.play()
        p[6].style.backgroundColor = `rgba(15, 13, 13, 0.803)`
        setTimeout(() => {
            p[6].style.backgroundColor = "black"
        }, 500);
    }
    else if (num === 7) {
        arr[7].h.currentTime = 0;

        arr[7].h.play()
        p[7].style.backgroundColor = `rgba(15, 13, 13, 0.803)`
        setTimeout(() => {
            p[7].style.backgroundColor = "black"
        }, 500);
    }
    else if (num === 8) {
        arr[8].j.currentTime = 0;

        arr[8].j.play()
        p[8].style.backgroundColor = `rgba(15, 13, 13, 0.803)`
        setTimeout(() => {
            p[8].style.backgroundColor = "black"
        }, 500);
    }
    else if (num === 9) {
        arr[9].k.currentTime = 0;

        arr[9].k.play()
        p[9].style.backgroundColor = `rgba(15, 13, 13, 0.803)`
        setTimeout(() => {
            p[9].style.backgroundColor = "black"
        }, 500);

    }



})






p.forEach(function (val, index) {
    val.addEventListener("click", function () {

        if (index === 0) {
            arr[0].a.currentTime = 0;
            arr[0].a.play()
        }

        else if (index == 1) {
            arr[1].b.currentTime = 0;
            arr[1].b.play()
        }

        else if (index === 2) {
            arr[2].c.currentTime = 0;
            arr[2].c.play()
        }
        else if (index === 3) {
            arr[3].d.currentTime = 0;
            arr[3].d.play()
        }
        else if (index === 4) {
            arr[4].e.currentTime = 0;
            arr[4].e.play()
        }

        else if (index === 5) {
            arr[5].f.currentTime = 0;
            arr[5].f.play()
        }

        else if (index === 6) {
            arr[6].g.currentTime = 0;
            arr[6].g.play()
        }

        else if (index === 7) {
            arr[7].h.currentTime = 0;
            arr[7].h.play()

        }
        else if (index === 8) {
            arr[8].j.currentTime = 0;
            arr[8].j.play()

        }
        else if (index === 9) {
            arr[9].k.currentTime = 0;
            arr[9].k.play()

        }


    })

})





// let arr = [
//     { a: new Audio("./28.mp3") },
//     { b: new Audio("./29.mp3") },
//     { c: new Audio("./30.mp3") },
//     { d: new Audio("./31.mp3") },
//     { e: new Audio("./32.mp3") },
//     { f: new Audio("./33.mp3") },
//     { g: new Audio("./34.mp3") },
//     { h: new Audio("./35.mp3") }
// ];

// let p = document.querySelectorAll("p");

// p.forEach(function (val, index) {
//     val.addEventListener("click", function () {

//         if (index === 0) {
//             arr[0].a.play();
//         }
//         else if (index === 1) {
//             arr[1].b.play();
//         }
//         else if (index === 2) {
//             arr[2].c.play();
//         }
//         else if (index === 3) {
//             arr[3].d.play();
//         }
//         else if (index === 4) {
//             arr[4].e.play();
//         }
//         else if (index === 5) {
//             arr[5].f.play();
//         }
//         else if (index === 6) {
//             arr[6].g.play();
//         }
//         else if (index === 7) {
//             arr[7].h.play();
//         }

//     });
// });
