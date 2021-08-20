const btn = document.getElementById('login');
btn.addEventListener('click', function() {
    //console.log('Amar pichona click marcha')
    const Addarea = document.getElementById('login-area')
    Addarea.style.display = 'none';
    const transationArea = document.getElementById('transaction-area')
    transationArea.style.display = 'block';
    
})

           // Deposit button event handler
const depositBtn = document.getElementById('login2');
depositBtn.addEventListener('click',function () {
    const depositNumber = getInputNumber("depositAmount")

    updateSpanText('currentDeposit',depositNumber)
    updateSpanText('currentBalance',depositNumber)

    document.getElementById('depositAmount').value = "";
})
              // Withdraw button event handler 
const addWithdrawBtn = document.getElementById('addWithdraw');
addWithdrawBtn.addEventListener('click',function() {
 const withdrawNumber = getInputNumber('withdrawAmount')
 console.log(withdrawNumber);
    
})

function  getInputNumber (id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}


function updateSpanText(id, depositeNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositeNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;  
}