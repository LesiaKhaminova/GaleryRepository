const btn = document.querySelector(".btn-send");
btn.setAttribute("disabled", "true");
var correctEmail = false;
var correctPhone = false;
function Check() {
  if (correctPhone && correctEmail) {
    btn.removeAttribute("disabled");
    btn.style.backgroundColor = "#33cc33";
    btn.style.color = "#051405";
    btn.style.border = "3px solid #051405";
  }
}

function CheckEmail() {
  let email = document.querySelector("#email").value.toLowerCase();
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(email)) {
    var tldRegex = /\.(com|net|org|gov|ua)$/i;
    if (tldRegex.test(email)) {
      correctEmail = true;
      document.querySelector("#chekEmail").style.backgroundColor = "#33cc33";
      document.querySelector("#chekEmail").style.color = "#051405";
      alert("Email валідний.");
    } else {
      correctEmail = false;
      alert("Email має невірний TLD.");
    }
  } else {
    alert("Введіть правильний email.");
    correctEmail = false;
    btn.setAttribute("disabled", "true");
  }
  Check();
}
function CheckPhone() {
  var reg = new RegExp("^\\+\\d{1,3}\\d{9}$");
  var wrongReg = new RegExp("^\\+0{9,12}$");
  var wrongReg2 = new RegExp("^\\+0{3}\\d{9}$");
  const phone = document.querySelector("#phone").value;
  if (wrongReg.test(phone)) {
    alert("Телефон не може містити тільки нулі");
    correctEmail = false;
  } else if (wrongReg2.test(phone)) {
    alert("Телефон не може починатися з трьох нулей");
    correctEmail = false;
  } else if (reg.test(phone)) {
    alert("Телефон введений правильно");
    correctPhone = true;
    document.querySelector("#chekNumber").style.backgroundColor = "#33cc33";
    document.querySelector("#chekNumber").style.color = "#051405";
  }
  Check();
}

document.querySelector("#chekEmail").addEventListener("click", CheckEmail);
document.querySelector("#chekNumber").addEventListener("click", CheckPhone);
