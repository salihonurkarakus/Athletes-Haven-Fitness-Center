const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Lütfen boş alanları doldurun.");
    return;
  }

  // BMI = weight in KG / (height in m * height in m)

  height = height / 100;

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "Zayıf";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "Normal";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "Fazla kilolu";
  }
  if (BMI >= 30) {
    status = "Obez";
  }
  document.querySelector(
    ".comment"
  ).innerHTML = `<span id="comment">${status}</span>`;
});
