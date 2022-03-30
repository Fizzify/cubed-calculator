var cubedPrompt = prompt("What number do you want to be cubed?");
var cubedNumber = cubed(cubedPrompt);
var cubedNumberText = document.querySelector(".cubed-number");

function cubed(num) {
  return num ** 3;
}

cubedNumberText.innerHTML = cubedPrompt + " cubed is equal to " + cubedNumber + "🎉";
