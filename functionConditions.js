function conditions(guess) {
  if(typeof guess != "string") {
    alert("Try guessing a string.");
  } else if(guess == "Password") {
      alert("You have found the secret code!");
    }
    else {
      alert("Try a different string.");
    }
}
conditions("Password");
