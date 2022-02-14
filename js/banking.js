// add event handler on deposite button

document.getElementById('deposite-btn').addEventListener('click', function () {
    // get the deposite input amount 
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmount = depositeInput.value;

    // update deposite
    const totalDeposite = document.getElementById('total-deposite');
    const prevDepositeAmount = totalDeposite.innerText;
    const totalDepositeAmount = parseFloat(prevDepositeAmount) + parseFloat(newDepositeAmount);

    totalDeposite.innerText = totalDepositeAmount;

    // update account balance

    const totalBalance = document.getElementById('total-balance');
    const currentBalanceAmount = parseFloat(totalBalance.innerText);
    const totalBalanceAmount = currentBalanceAmount + parseFloat(newDepositeAmount);

    totalBalance.innerText = totalBalanceAmount;

    // clear the deposite input
    depositeInput.value = '';
})

// add event handler on withdraw button

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get the withdraw input amount 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputAmount = parseFloat(withdrawInput.value);

    // update withdraw
    const totalWithdraw = document.getElementById('total-withdraw');
    const currentWithdrawAmount = parseFloat(totalWithdraw.innerText);
    const newTotalWithdrawAmount = currentWithdrawAmount + withdrawInputAmount;

    totalWithdraw.innerText = newTotalWithdrawAmount;

    //  update personal balance

    const totalBalance = document.getElementById('total-balance');
    const currentBalanceAmount = parseFloat(totalBalance.innerText);
    const balanceAmountLeft = currentBalanceAmount - withdrawInputAmount;

    totalBalance.innerText = balanceAmountLeft;

    if (currentBalanceAmount < withdrawInputAmount) {
        totalWithdraw.onclick(alert('Insufficient Balance'))
    }

    // clear the deposite input

    withdrawInput.value = '';
})