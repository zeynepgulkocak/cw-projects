// definitions --------------------------------------
let check = document.querySelector(".btn-check");
let attempt = document.querySelector("#attempt");
let txt_result = document.querySelector(".txt-result");
let guess_num = document.getElementById("num");
let guess_numbers = document.getElementById("guess-numbers");
let refresh = document.querySelector(".btn-refresh");

let counter = 5;
let lowest = 1;
let highest = 100;
let random_num = Math.floor(Math.random() * 100 + 1);
console.log(random_num);
// addEventListener ---------------------------------
check.addEventListener("click", () => {
  txt_result.style.display = "block";
  if (guess_num.value != "" && guess_num.value <= 100 && guess_num.value > 0) {
    if (counter > 0) {
      guess_numbers.innerHTML += guess_num.value + " ";
      attempt.innerHTML = counter;

      if (guess_num.value == random_num) {
        guess_num.readOnly = true;
        guess_num.style.backgroundColor = "gray";
        txt_result.innerText = "Kazandınız :)";
      } else if (guess_num.value > random_num) {
        if(guess_num.value>random_num&& guess_num.value<highest){
          highest =guess_num.value;
          txt_result.innerText = `Daha küçük bir sayı giriniz (${lowest} - ${highest})` ;
        }
      } else if (guess_num.value < random_num){   
          if(guess_num.value>lowest){
            lowest=guess_num.value;
          txt_result.innerText = `Daha büyük bir sayı giriniz (${lowest} - ${highest})` ;
          }
      }
      counter--;
    } else {
      guess_numbers.innerHTML += guess_num.value + " ";
      attempt.innerHTML = counter;
      guess_num.readOnly = true;
      guess_num.style.backgroundColor = "rgb(206, 206, 206)";
      txt_result.innerText = "Kaybettiniz :(";
    }
  } else if (
    guess_num.value == "" ||
    guess_num.value < 1 ||
    guess_num.value > 100
  ) {
    txt_result.innerText = `Lütfen bir sayı giriniz (${lowest} - ${highest})`;
  }

  guess_num.value = "";
});

refresh.addEventListener("click", () => {
  window.location.reload(false);
});
