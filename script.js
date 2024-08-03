const clear = document.getElementById("ac");
const value = document.getElementById("displayValue");

function displayAllClear() {
  value.innerHTML = "";
}
clear.addEventListener("click", displayAllClear);

// // Insert number on displayValue
const insertNum = function (num) {
  value.innerHTML = value.innerHTML + num;
  console.log(value);
};

// evaluate the number
const equalTo = function () {
  value.innerHTML = eval(value.innerHTML);
};

//remove 1 number!
const remove = document.getElementById("remove");
function removeNum() {
  value.innerHTML = value.innerHTML.substring(0, value.innerHTML.length - 1);
}
remove.addEventListener("click", removeNum);
