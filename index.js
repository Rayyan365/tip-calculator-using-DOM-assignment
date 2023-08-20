const calculateButton = document.querySelector('#calculateButton');
calculateButton.addEventListener('click', calculateTip);

function calculateTip() {
  const billAmount = parseFloat(document.querySelector('#billAmount').value);
  const tipPercentage = parseFloat(document.querySelector('#tipPercentage').value);
  const tipAmount = billAmount * (tipPercentage / 100);

  document.querySelector('#tipAmount').innerText = Tip Amount: $${tipAmount.toFixed(2)};
}