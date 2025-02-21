//////Elements

const bmiFormEle = document.querySelector(".bmi-form");
const genderCard = Array.from(document.querySelectorAll(".gender-card"));
const maleCard = document.getElementById("male-card");
const femaleCard = document.getElementById("female-card");
const heightRangeInput = document.getElementById("height-range");
const heightRangeValue = document.querySelector(".height-value");
const btnNegative = document.querySelectorAll(".btn-negative");
const ageValueEle = document.querySelector(".age-value");
const weightValueEle = document.querySelector(".weight-value");
const btnPositive = document.querySelectorAll(".btn-positive");
const calulateBtnEle = document.querySelector(".btn-calculate");
const resultValueEle = document.querySelector(".result-value");
const resultConditionEle = document.querySelector(".result-condition");

//////events
calulateBtnEle.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedGender = document.querySelector('input[name="gender"]:checked');
  const genderValue = selectedGender.value;
  const height = heightRangeInput.value / 100;
  const weight = Number(weightValueEle.textContent);

  //calculate bmi
  const bmiValue = (weight / Math.pow(height, 2)).toFixed(2);
  switch (true) {
    case bmiValue <= 18.5:
      resultConditionEle.textContent = "Underweight";
      break;
    case bmiValue > 18.5 && bmiValue <= 24.9:
      resultConditionEle.textContent = "Normal weight";
      break;
    case bmiValue > 24.9 && bmiValue <= 29.9:
      resultConditionEle.textContent = "Overweight";
      break;
    case bmiValue >= 30:
      resultConditionEle.textContent = "Obesity";
      break;
    default:
      resultConditionEle.textContent = "Invalid BMI";
      break;
  }

  resultValueEle.textContent = bmiValue;

  reset();
});

genderCard.forEach((card) => {
  card.addEventListener("click", () => {
    toogleActiveGender();
  });
});

//Rendering range value
heightRangeInput.addEventListener("input", (event) => {
  heightRangeValue.textContent = event.target.value;
});

///btn for changing age and weight values
btnPositive.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (btn.classList.contains("weight-btn")) {
      const weightValue = Number(weightValueEle.textContent);
      weightValueEle.textContent = weightValue + 1;
    } else {
      const ageValue = Number(ageValueEle.textContent);
      ageValueEle.textContent = ageValue + 1;
    }
  });
});

btnNegative.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("weight-btn")) {
      const weightValue = Number(weightValueEle.textContent);
      if (weightValue > 0) weightValueEle.textContent = weightValue - 1;
    } else {
      const ageValue = Number(ageValueEle.textContent);
      if (ageValue > 0) ageValueEle.textContent = ageValue - 1;
    }
  });
});

//////functions

const init = () => {
  ageValueEle.textContent = 0;
  weightValueEle.textContent = 0;
  heightRangeInput.value = 0;
  resultConditionEle.textContent = "Calculate first..";
  resultValueEle.textContent = "";
};

const reset = () => {
  ageValueEle.textContent = 0;
  weightValueEle.textContent = 0;
  heightRangeInput.value = 0;
};

//toggle active gender class
const toogleActiveGender = () => {
  if (maleCard.classList.contains("gender-card-active")) {
    maleCard.classList.remove("gender-card-active");
    femaleCard.classList.add("gender-card-active");
  } else {
    maleCard.classList.add("gender-card-active");
    femaleCard.classList.remove("gender-card-active");
  }
};

init();
