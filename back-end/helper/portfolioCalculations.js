const getTotalAssets = (assetObj) => {
    const bankAccountsTotal = calculateTotal(assetObj.bankAccounts);
    const investmentsTotal = calculateTotal(assetObj.investments);
    const propertiesTotal = calculateTotal(assetObj.properties);
    const totalAssetAmount = bankAccountsTotal + investmentsTotal + propertiesTotal;
  
    return {
        assetsTotal: totalAssetAmount.toFixed(2),
        bankAccountsTotal: bankAccountsTotal.toFixed(2),
        investmentsTotal: investmentsTotal.toFixed(2),
        propertiesTotal: propertiesTotal.toFixed(2)
    };
};

const getTotalDebts = (debtObj) => {
    const billsTotal = calculateTotal(debtObj.bills);
    const creditsTotal = calculateTotal(debtObj.credits);
    const loansTotal = calculateTotal(debtObj.loans);
    const expensesTotal = calculateTotal(debtObj.expenses);
    const totalDebtAmount = billsTotal + creditsTotal + loansTotal + expensesTotal;
   
    return {
        debtTotal: totalDebtAmount.toFixed(2),
        billsTotal: billsTotal.toFixed(2),
        creditsTotal: creditsTotal.toFixed(2),
        loansTotal: loansTotal.toFixed(2),
        expensesTotal: expensesTotal.toFixed(2)
    };
};

const calculateTotal = (array) => {
    let total = 0.00;
    array.forEach(el => total += Number(el.amount));
    return total;
};

module.exports = {
    getTotalAssets,
    getTotalDebts,
};