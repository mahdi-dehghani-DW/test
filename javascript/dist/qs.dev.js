"use strict";

$(".box-azmon").css("display", "none");
$("span.btn-success").click(function () {
  $("label.m").removeClass("glow-on-hover");
  $("label.m1").removeClass("glow-on-hover");
  $("label.m1").addClass("toggelt").removeClass("m1");
});
var radioClick = document.querySelectorAll("input.radio1");
var inputs = $("input[type='radio']");
var labels = $('label');
labels.on('click', function () {
  $('.ara').removeClass('ara');
  var i = 0;

  while (i < inputs.length) {
    if (inputs[i].checked) {
      $(inputs[i]).parent().addClass('ara');
    }

    i++;
  }
});
$(document).ready(function () {
  $('.ara').removeClass('ara');
  var i = 0;

  while (i < inputs.length) {
    if (inputs[i].checked) {
      $(inputs[i]).parent().addClass('ara');
    }

    i++;
  }
});

function startb() {
  window.onscroll = function () {
    myFunction();
  };

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      $("div.topall").css("height", "0px");
    } else {
      header.classList.remove("sticky");
      $("div.topall").css("height", "94%");
    }
  }

  $("div.top-content").addClass("header");
  $("div.start-azmon").addClass("scroll");
  $("div.top-top-raght").css("display", "none");
  $("div.top-left").css("display", "none");
  $("div.box-azmon").css("display", "block");
  $("div.top-content").addClass("start-sh");
  $("#button-start").css("display", "none");
  $("#p-azmon").html(" پایان آزمون تا...");
  $("div.top-content").css("width", "100%");
  $("div.top-content").css("box-sizing", "border-box");
  $(document).ready(function () {
    var minute = 20;
    var sec = 0;
    var timestart = setInterval(function () {
      if (sec > 0) {
        sec = sec - 1;
      }

      if (sec == 0 && minute > 0) {
        minute = minute - 1;
        sec = 60;
      }

      $('#time-start').html(minute + ":" + sec);
      var pm = document.querySelector("span.btn-success");

      if (sec == 0 && minute == 0) {
        $("input").click(false);
        $('#time-start').html(" آزمون پایان یافت");
        $("#p-azmon").html("");
        clearInterval(colorRandom, 100);
        $("span.btn-success").css("display", "none");
        post();
        clearInterval(v);
      }
    }, 1000);
    var colorRandom = setInterval(v, 1000);
    $("span.btn-success").click(function () {
      $("input").click(false);
      $('#time-start').html(" آزمون پایان یافت");
      $("#p-azmon").html("");
      clearInterval(timestart, 100);
      clearInterval(colorRandom, 100);
      $("span.btn-success").css("display", "none");
      post();
      clearInterval(v);
    });
    console.log(sec);
  });
}

function v() {
  var red = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var yeloow = Math.floor(Math.random() * 255);
  var randomColor = "rgb(" + red + "," + blue + "," + yeloow + ")";
  var pTime = document.getElementById("time-start");
  pTime.style.color = randomColor;
  $("span.btn-success").click(function () {
    clearInterval(v);
  });
}

var radioClick = document.querySelectorAll("input.radio1");
var inputs = $("input[type='radio']");
var labels = $('label');
labels.on('click', function () {
  $('.glow-on-hoverr').removeClass('glow-on-hoverr');
  var i = 0;

  while (i < inputs.length) {
    if (inputs[i].checked) {
      $(inputs[i]).parent().addClass('glow-on-hoverr');
    }

    i++;
  }
});
$(document).ready(function () {
  $('.glow-on-hoverr').removeClass('glow-on-hoverr');
  var i = 0;

  while (i < inputs.length) {
    if (inputs[i].checked) {
      $(inputs[i]).parent().addClass('glow-on-hoverr');
    }

    i++;
  }
});
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
  window.onscroll = function () {
    myFunction();
  };

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.remove("sticky");
      $("div.topall").css("height", "94%");
    }
  }

  $("div.radioall").addClass("card1");
  $("div.start-azmon").removeClass("scroll");
  document.querySelector("div#natayeg").style.display = "block";
  document.querySelector("span.btn-success").style.display = " none";
  $("input").click(false);
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
    document.querySelector("p.nati").style.color = "green";
  } else {
    var natige1 = document.querySelector("i.natige1").innerHTML = "مردود";
    document.querySelector("p.nati").style.color = "red";
  }

  console.log(i);
  var radioClick = document.querySelectorAll("input.radio1");
  var inputs = $("input[type='radio']");
  var labels = $('label');
  labels.on('click', function () {
    $('.active2').removeClass('active2');
    var i = 0;

    while (i < inputs.length) {
      if (inputs[i].checked) {
        $(inputs[i]).parent().addClass('active2');
      }

      i++;
    }
  });
  $(document).ready(function () {
    $('.active2').removeClass('active2');
    var i = 0;

    while (i < inputs.length) {
      if (inputs[i].checked) {
        $(inputs[i]).parent().addClass('active2');
      }

      i++;
    }
  });
}

$("button.info").click(function () {
  $("div.start-azmon").css("position", "relative");
  $("button.info").hide();
});