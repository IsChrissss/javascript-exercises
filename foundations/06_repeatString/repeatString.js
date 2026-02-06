const repeatString = function(string, num) {
    let result = ''
    if (num < 0) {
        return 'ERROR'
    } else if (num === 0) {
        return ''
    }
    while (num > 0) {
        result += string
        num--
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
