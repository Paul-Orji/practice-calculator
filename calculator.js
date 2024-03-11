let display = document.getElementById("input");

let calculate = (number) => {
  display.value += number;
};

let Result = () => {
  try {
    display.value = eval(display.value);
  } catch (err) {
    alert("invalid input");
  }
};

let clr = () => {
  display.value = " ";
};

let del = () => {
  display.value = display.value.slice(0, -1);
};
