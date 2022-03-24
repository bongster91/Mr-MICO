const addCommas = (num) => {
    //num = num.toString();
    let strArr = [];
    let count = 1;

    if (num.length <= 6) return num;
      
    for (let i = num.length - 1; i >= 0; i--) {
 
        if (i >= num.length - 4) {
            strArr.unshift(num[i]);

        } else if (count !== 3) {
            strArr.unshift(num[i]);
            count++;

        } else {
            strArr.unshift(',');
            strArr.unshift(num[i]);
            count = 1;
        };
    };

    return strArr.join('');
};

module.exports = {
    addCommas
};