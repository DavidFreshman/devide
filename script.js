function showEvenNumbers() {
  const resultDiv = document.getElementById("result");
  let evens = [];

  // Example: get even numbers from 1 to 20
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }

  resultDiv.innerHTML = "Even Numbers: " + evens.join(", ");
}
function ShowEvenNumbers(){
  const resultDiv = document.getElementById("result");
  let evens = [];

  // Example: get even numbers from 1 to 20
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }

  resultDiv.innerHTML = "Even Numbers: " + evens.join(", ");
}
