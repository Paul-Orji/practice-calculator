let display = document.getElementById("input");

let calculate = (number) => {
  display.value += number;
};

let Result = () => {
  try {
    display.value = eval(result.value);
  } catch (err) {
    alert("invalid input");
  }
};

let clr = () => {
  display.value = " ";
};

let del = () => {
  display.value = result.value.slice(0, -1);
};
