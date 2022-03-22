const getTotalAssets = (assetObj) => {
    const bankAccountsTotal = calculateTotal(assetObj.bankAccounts);
    const investmentsTotal = calculateTotal(assetObj.investments);
    const propertiesTotal = calculateTotal(assetObj.properties);
    const totalAssetAmount = bankAccountsTotal + investmentsTotal + propertiesTotal;
  
    return {
        assetsTotal: totalAssetAmount,
        bankAccountsTotal: bankAccountsTotal,
        investmentsTotal: investmentsTotal,
        propertiesTotal: propertiesTotal
    };
};

const getTotalDebts = (debtObj) => {
    const billsTotal = calculateTotal(debtObj.bills);
    const creditsTotal = calculateTotal(debtObj.credits);
    const loansTotal = calculateTotal(debtObj.loans);
    const expensesTotal = calculateTotal(debtObj.expenses);
    const totalDebtAmount = billsTotal + creditsTotal + loansTotal + expensesTotal;
   
    return {
        debtTotal: totalDebtAmount,
        billsTotal: billsTotal,
        creditsTotal: creditsTotal,
        loansTotal: loansTotal,
        expensesTotal: expensesTotal
    };
};

const calculateTotal = (array) => {
    let total = 0;
    array.forEach(el => total += Number(el.amount));
    return total;
};

module.exports = {
    getTotalAssets,
    getTotalDebts,
};