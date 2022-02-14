// common functions

// get value from both input
function inputFieldAmount (input) {
    const inputField = document.getElementById(input);
    const inputAmountText = inputField.value;
    const inputAmountNumber = parseFloat(inputAmountText);
    inputField.value = '';
    
    return inputAmountNumber;
}
// update both deposite and withdraw field
function totalAmount(totalFeildId, inputAmount) {
    const totalFeild = document.getElementById(totalFeildId);
    const currentAmountText = totalFeild.innerText;
    const currentAmountNumber = parseFloat(currentAmountText);

    totalFeild.innerText = currentAmountNumber + inputAmount;
}
function getCurrentBalance () {
    const balanceField = document.getElementById('total-balance');
    const totalBalanceText = balanceField.innerText;
    const currentTotalBalance = parseFloat(totalBalanceText);
    
    return currentTotalBalance
}

function updateTotalBalance (inputAmount, isAdd) {
    const balanceField = document.getElementById('total-balance');
    const currentTotalBalance = getCurrentBalance ();
    if (isAdd == true) {
        balanceField.innerText = currentTotalBalance + inputAmount;
    }
    else if (isAdd == false){
        balanceField.innerText = currentTotalBalance - inputAmount;
    }
}

document.getElementById('deposite-btn').addEventListener('click', function () {

    // get input value
    const depositeInputAmount = inputFieldAmount ('deposite-input');

    const depositeError = document.getElementById('deposite-input-error');
    if (depositeInputAmount > 0) {
        // update total deposite
        totalAmount('total-deposite', depositeInputAmount);

        // update total balance
        updateTotalBalance (depositeInputAmount, true);

        depositeError.innerText = '';
    }
    else if (depositeInputAmount < 0) {
        depositeError.innerText = 'Negetive amount is an error';
    }
    else {
        depositeError.innerText = 'Amount is reqired';
    }
})
document.getElementById('withdraw-btn').addEventListener('click', function () {

    // get input value
    const withdrawInputAmount = inputFieldAmount ('withdraw-input');

    // get current balance amount
    const currentTotalBalance = getCurrentBalance ();
    const withdrawError = document.getElementById('withdraw-input-error');

    if (withdrawInputAmount > 0 && withdrawInputAmount < currentTotalBalance) {
        // update total withdraw
        totalAmount('total-withdraw', withdrawInputAmount);

        // update total balance
        updateTotalBalance (withdrawInputAmount, false);

        withdrawError.innerText = '';
    }
    else if (withdrawInputAmount > currentTotalBalance) {
        withdrawError.innerText = 'Insufficient Balance';
    }
    
    else if (withdrawInputAmount < 0) {
        withdrawError.innerText = 'Negetive amount is an error';
    }
    else {
        withdrawError.innerText = 'Amount is reqired';
    }
    
})