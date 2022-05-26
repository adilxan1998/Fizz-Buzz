const elInput = document.querySelector(".form-input");
const elForm = document.querySelector(".site-form");
const elResult = document.querySelector(".result");

elForm.addEventListener("submit", function (o) {
  o.preventDefault();

  const inputValue = elInput.value;

  if(inputValue % 3 ===0 && inputValue % 5 ===0){
    elResult.textContent = "FizzBuzz";
  }else if(inputValue % 3 === 0){
    elResult.textContent = "Fizz";
  }else if(inputValue % 5 ===0){
    elResult.textContent ="Buzz";
  }else if(inputValue % 3 !== 0 && inputValue % 5 !==0){
    elResult.textContent = `${inputValue}`;
  }
})