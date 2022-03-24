const addCommas = (num) => {
    num = num.toString();
    if (num.length <= 3) return num;
    
    let strArr = [];
    let count = 0;

    for (let i = num.length - 1; i >= 0; i--) {
        if (count !== 3) {
            strArr.unshift(num[i]);
            count++;

        } else {
            strArr.unshift(',');
            count = 0;
        };
    };

    return strArr.join('');
};

module.exports = {
    addCommas
};