const btn = document.getElementById("colorChanger");
const colorTxt = document.querySelector(".color");
const infoSection = document.querySelector(".information");

btn.addEventListener("click", function () {
  console.log("Button Clicked");
  let randomHex = getRandomHex();
  infoSection.style.backgroundColor = randomHex;
  colorTxt.textContent = randomHex;
});

function getRandomHex() {
  let hexValue = "#";
  const hexChars = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    hexValue += hexChars[Math.floor(Math.random() * 16)];
  }
  console.log(hexValue);
  return hexValue;
}
