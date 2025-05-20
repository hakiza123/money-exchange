const rates = {
  USD: 1,       
  RWF: 1300,     
  EUR: 0.92,     
  GBP: 0.78,     
  KES: 145       
};

function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const resultBox = document.getElementById("result");

  
  if (isNaN(amount) || amount <= 0) {
    resultBox.textContent = "Enter a valid amount.";
    return;
  }

  
  if (!rates[from] || !rates[to]) {
    resultBox.textContent = "Unsupported currency selected.";
    return;
  }

  const amountInUSD = amount / rates[from];    
  const converted = (amountInUSD * rates[to]).toFixed(2);  

  resultBox.textContent = `${amount} ${from} = ${converted} ${to}`;
}
 const calcDisplay = document.getElementById('calc-display');
    const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
        'C', 'DEL' // Backspace and All Clear
]; 

    const buttonContainer = document.getElementById('calc-buttons');
    buttons.forEach(b => {
      const btn = document.createElement('input');
      btn.type = 'button';
      btn.value = b;
      btn.onclick = () => {
        if (b === '=') {
          try {
            calcDisplay.value = eval(calcDisplay.value);
          } catch {
            calcDisplay.value = "Error";
          }
        } else {
          calcDisplay.value += b;
        }
      };
      
      buttonContainer.appendChild(btn);
    });
 