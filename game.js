let score = 0;
let cookieElement = document.getElementById("cookie");
let scoreElement = document.getElementById("score");

cookieElement.addEventListener("click", function()
{ score ++;
  scoreElement.textContent = score + " targets hit";
});


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}