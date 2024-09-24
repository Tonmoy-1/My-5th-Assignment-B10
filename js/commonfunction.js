function getInputById(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}

function getAmountByID(id) {
  const amount = parseFloat(document.getElementById(id).innerText);
  return amount;
}
