// Step-1: Add eventListener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //console.log('deposit button clicked');
    // Step-2: Get the deposit amount from the deposit input field
    // For input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //console.log(typeof newDepositAmount);
    //console.log(depositAmount);
    // Step-3: Get the current deposit total
    // for non-input (element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    console.log(typeof previousDepositTotal);
    //console.log(depositTotal);

    // Step-4: Add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    // Set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // Step-5: Get ballance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-6: Calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    // Set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;


    // Step-7: Clear the deposit field
    depositField.value = '';
})

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('withdraw button clicked');
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawField.value;
    //console.log(withdrawAmount);
})