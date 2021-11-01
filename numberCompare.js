function compare(numOne, numTwo) {
  if(numOne > numTwo) {
    alert("The first number, " + numOne + ", is greater than the second number, " + numTwo + ".");
  } else if (numTwo > numOne) {
    alert("The second number, " + numTwo + ", is greater than the first number, " + numOne + ".");
  } else {
    alert("Both numbers, " + numOne + " and " + numTwo + ", are the same.");
  }
}
compare(1, 1);
