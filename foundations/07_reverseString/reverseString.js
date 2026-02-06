const reverseString = function(string) {
    let array = string.split(" ").reverse()
    let reverseArrayString = array.map(word => {
        return word.split("").reverse().join("");
    })
    return reverseArrayString.join(" ");
};

// Do not edit below this line
module.exports = reverseString;
