let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let calculate = document.getElementById("equal");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let num0 = document.getElementById("num0");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let division = document.getElementById("division");
let cross = document.getElementById("cross");
let ac = document.getElementById("ac");
let dot = document.getElementById("dot");
let negatif = document.getElementById("negatif");
let mod = document.getElementById("mod");
let number1 = 0;
let number2 = 0;
let oparator = "";

//------------- addEventListener ------------------//

// Numbers -------------------------------

num1.addEventListener("click", () => {
  screen2.innerHTML += num1.innerHTML;
});
num2.addEventListener("click", () => {
  screen2.innerHTML += num2.innerHTML;
});
num3.addEventListener("click", () => {
  screen2.innerHTML += num3.innerHTML;
});
num4.addEventListener("click", () => {
  screen2.innerHTML += num4.innerHTML;
});
num5.addEventListener("click", () => {
  screen2.innerHTML += num5.innerHTML;
});
num6.addEventListener("click", () => {
  screen2.innerHTML += num6.innerHTML;
});
num7.addEventListener("click", () => {
  screen2.innerHTML += num7.innerHTML;
});
num8.addEventListener("click", () => {
  screen2.innerHTML += num8.innerHTML;
});
num9.addEventListener("click", () => {
  screen2.innerHTML += num9.innerHTML;
});
num0.addEventListener("click", () => {
  screen2.innerHTML += num0.innerHTML;
});

// Oparators --------------------------------
plus.addEventListener("click", () => {
  number1 = Number(screen2.innerHTML);
  oparator = plus.innerHTML;
  screen2.innerHTML += plus.innerHTML;
  screen1.innerHTML = screen2.innerHTML;
  screen2.innerHTML = "";
});

minus.addEventListener("click", () => {
  number1 = Number(screen2.innerHTML);
  oparator = minus.innerHTML;
  screen2.innerHTML += minus.innerHTML;
  screen1.innerHTML = screen2.innerHTML;
  screen2.innerHTML = "";
});
division.addEventListener("click", () => {
  number1 = Number(screen2.innerHTML);
  oparator = division.innerHTML;
  screen2.innerHTML += division.innerHTML;
  screen1.innerHTML = screen2.innerHTML;
  screen2.innerHTML = "";
});
cross.addEventListener("click", () => {
  number1 = Number(screen2.innerHTML);
  oparator = cross.innerHTML;
  screen2.innerHTML += cross.innerHTML;
  screen1.innerHTML = screen2.innerHTML;
  screen2.innerHTML = "";
});
mod.addEventListener("click", () => {
  number1 = Number(screen2.innerHTML);
  oparator = mod.innerHTML;
  screen2.innerHTML += mod.innerHTML;
  screen1.innerHTML = screen2.innerHTML;
  screen2.innerHTML = "";
});
// Calculate -----------------------------------
calculate.addEventListener("click", () => {
  number2 = Number(screen2.innerHTML);
  screen1.innerHTML = "";
  let result = 0;
  if (isNaN(number1) && isNaN(number2)) {
    results.innerHTML = `lütfen bir sayı giriniz`;
  } else {
    switch (oparator) {
      case "+":
        result = number1 + number2;
        screen2.innerHTML = result;
        break;
      case "-":
        result = number1 - number2;
        screen2.innerHTML = result;
        break;
      case "x":
        result = number1 * number2;
        screen2.innerHTML = result;
        break;
      case "÷":
        result = number1 / number2;
        screen2.innerHTML = result;
        break;
      case "%":
        result = number1 % number2;
        screen2.innerHTML = result;
        break;
    }
  }
});

// Clear Screen ----------------------------------------

ac.addEventListener("click", () => {
  screen1.innerHTML = "";
  screen2.innerHTML = "";
});

// Dot -----------------------------------------------

dot.addEventListener("click", () => {
  screen2.innerHTML += dot.innerHTML;
});

// +/- ----------------------------------------------

negatif.addEventListener("click", () => {
  if (screen2.innerHTML.includes("-") == false) {
    screen2.innerHTML = "-" + screen2.innerHTML;
  } else screen2.innerHTML = screen2.innerHTML.slice(1);
});

// header icons and time ----------------------------------
const updateTime = () => {
  let clock = document.querySelector(".clock");
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  clock.innerHTML = currentHour + ":" + currentMinute;
};

setInterval(updateTime, 1000);
updateTime();
