emailjs.init({
  publicKey: "Im-f4aFQVRwUiIWQb",
});

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

let emailInput = document.querySelector(".mail");
let msg = document.querySelector("#msg");