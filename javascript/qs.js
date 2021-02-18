var radioClick = document.querySelectorAll("input.radio1");

var inputs = document.querySelectorAll("input[type='radio']");
var labels = document.querySelectorAll('label');
activeInput();

let i = 0;
while (i < labels.length) {
    labels[i].addEventListener("click", activeInput);
    i++;
}

function activeInput() {
    let actives = document.getElementsByClassName("active");
    let j = 0;
    while (j < actives.length) {
        actives[j].className -= " active";
    }

    let i = 0;
    while (i < inputs.length) {
        if (inputs[i].checked) {
            labels[i].className += " active";
        }
        i++;
    }
}


document.querySelector("div.box-azmon").style.display = "none";



var spanBtn = document.querySelector("span.btn-success");
spanBtn.addEventListener("click", myspan);

function myspan() {
    document.querySelector("label.m").classList.remove("glow-on-hover");
    document.querySelector("label.m1").classList.remove("glow-on-hover");
    document.querySelector("label.m1").classList.remove("m1");
}




var radioClick = document.querySelectorAll("input.radio1");




function startb() {
    document.querySelector("div.box-azmon").style.display = "block";

    document.querySelector("div.top-content").classList.add("header");
    document.querySelector("div.start-azmon").classList.add("scroll");
    document.querySelector("div.top-top-raght").style.display = "none";
    document.querySelector("div.top-left").style.display = "none";
    document.querySelector("div.top-content").classList.add("start-sh");
    document.getElementById("button-start").style.display = "none";

    document.querySelector("div.top-content").style.width = "100%";
    document.querySelector("div.top-content").style.boxSizing = "border-box";









    window.onscroll = function() { myFunction() };
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {

        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");

            document.querySelector("div.topall").style.height = "0px";
        } else {
            header.classList.remove("sticky");

            document.querySelector("div.topall").style.height = "94%";
        }
    }


    func()
}
// --------------------random color ------------------

// ------------------ time --------------------
function func() {

    var minute = 20;
    var sec = 0;

    var timestartt = setInterval(my1, 1000)

    function my1() {
        if (sec > 0) {
            sec--;
        }
        if (sec == 0 && minute > 0) {
            minute--;
            sec = 60;
        }
        document.getElementById("time-start").innerHTML = minute + ":" + sec;

        if (sec == 0 && minute == 0) {

            document.getElementById("time-start").innerHTML = " آزمون پایان یافت";

            clearInterval(randomColor, 1000);
            document.querySelector("span.btn-success").style.display = "none";
            post();

        }
        var stoptime = document.querySelector("span.btn-success");
        if (stoptime.click) {
            clearInterval(timestartt)
        }
    }
}
var randomColor = setInterval(my2, 1000);




function my2() {



    var red = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var yeloow = Math.floor(Math.random() * 255);
    var randomColor = "rgb(" + red + "," + blue + "," + yeloow + ")"
    var pTime = document.getElementById("time-start");
    pTime.style.color = randomColor;


}











var tr30 = document.getElementById("q12");
var tr29 = document.getElementById("q21");
var tr28 = document.getElementById("q34");
var tr27 = document.getElementById("q43");
var tr26 = document.getElementById("q51");
var tr25 = document.getElementById("q62");
var tr24 = document.getElementById("q74");
var tr23 = document.getElementById("q84");
var tr22 = document.getElementById("q92");
var tr21 = document.getElementById("q01");
var tr20 = document.getElementById("qz3");
var tr19 = document.getElementById("qx2");
var tr18 = document.getElementById("qc4");
var tr17 = document.getElementById("qv2");
var tr16 = document.getElementById("qb4");
var tr15 = document.getElementById("qn1");
var tr14 = document.getElementById("qn1");
var tr13 = document.getElementById("qa3");
var tr12 = document.getElementById("qs1");
var tr11 = document.getElementById("qd2");
var tr10 = document.getElementById("qf3");
var tr9 = document.getElementById("qg4");
var tr8 = document.getElementById("qh2");
var tr7 = document.getElementById("qj4");
var tr6 = document.getElementById("qk1");
var tr5 = document.getElementById("ql3");
var tr4 = document.getElementById("qy2");
var tr3 = document.getElementById("qo4");
var tr2 = document.getElementById("qp3");
var tr1 = document.getElementById("q1");


function post() {






    clearInterval(randomColor);
    clearInterval(func);
    document.getElementById("time-start").innerHTML = " آزمون پایان یافت";

    $("input").click(false)

    window.onscroll = function() { myFunction() };
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {

        if (window.pageYOffset > sticky) {
            header.classList.remove("sticky");
            document.querySelector("div.topall").style.height = "94%"
        }
    }

    document.querySelectorAll("div.radioall").forEach((el) => {
        el.classList.add('card1');
    });
    document.querySelectorAll("label.m1").forEach((el) => {
        el.classList.add('green');
    });

    document.querySelector("div.start-azmon").classList.remove("scroll")
    document.querySelector("div#natayeg").style.display = "block"
    document.querySelector("span.btn-success").style.display = " none";



    // -----------------------click input ---------

    var i = 0;
    if (tr1.checked) {
        i++;
    }
    if (tr2.checked) {
        i++;
    }
    if (tr3.checked) {
        i++;
    }
    if (tr4.checked) {
        i++;
    }
    if (tr5.checked) {
        i++;
    }
    if (tr6.checked) {
        i++;
    }
    if (tr7.checked) {
        i++;
    }
    if (tr8.checked) {
        i++;
    }
    if (tr9.checked) {
        i++;
    }
    if (tr10.checked) {
        i++;
    }
    if (tr11.checked) {
        i++;
    }
    if (tr12.checked) {
        i++;
    }
    if (tr13.checked) {
        i++;
    }
    if (tr14.checked) {
        i++;
    }
    if (tr15.checked) {
        i++;
    }
    if (tr16.checked) {
        i++;
    }
    if (tr17.checked) {
        i++;
    }
    if (tr18.checked) {
        i++;
    }
    if (tr19.checked) {
        i++;
    }
    if (tr20.checked) {
        i++;
    }
    if (tr21.checked) {
        i++;
    }
    if (tr22.checked) {
        i++;
    }
    if (tr23.checked) {
        i++;
    }
    if (tr24.checked) {
        i++;
    }
    if (tr25.checked) {
        i++;
    }
    if (tr26.checked) {
        i++;
    }
    if (tr27.checked) {
        i++;
    }
    if (tr28.checked) {
        i++;
    }
    if (tr29.checked) {
        i++;
    }

    if (tr30.checked) {
        i++;
    }















    document.querySelector("i.true1").innerHTML = i;
    var y = 30;
    var iy = y - i;
    document.querySelector("i.false1").innerHTML = iy;
    if (iy <= 4) {
        var natige1 = document.querySelector("i.natige1").innerHTML = "قبولی";
        document.querySelector("p.nati").style.color = "green"

    } else {
        var natige1 = document.querySelector("i.natige1").innerHTML = "مردود";
        document.querySelector("p.nati").style.color = "red"
    }

    console.log(i);

}

document.querySelector("button.info").addEventListener("click", function() {
    document.querySelector("div.start-azmon").style.position = "relative";
    document.querySelector("button.info").style.display = "none";
})