'use strict';

function thousands_separators(num) {
    var stringArray = num.toString().split('.');
    var positiveIntegerString = bulidPositiveIntegerString(stringArray);
    var numarray = buildNumArray(stringArray,positiveIntegerString);

    return numarray;
}

function bulidPositiveIntegerString(stringArray) {
    var positiveIntegerArray = stringArray[0].split('');
    var positiveIntegerString = addComma(positiveIntegerArray);

    return positiveIntegerString;
}

function addComma(positiveIntegerArray) {
    var j = 0;
    var n = 0;
    var array = [];
    for(var i = positiveIntegerArray.length-1;i>=0;i--){
        if(j%3 === 0 && j != 0){
            array[n] = ',';
            n++;
        }
        j++;
        array[n] = positiveIntegerArray[i];
        n++;
    }

    return reversionArray(array);
}

function reversionArray(array) {
    var n = 0;
    var reversion = [];
    for(var i = array.length-1 ; i>=0;i--){
        reversion[n] = array[i];
        n++;
    }

    return reversion;
}

function buildNumArray(stringArray, charArray) {
    var numArray = '';
    for(var i = 0 ;i<charArray.length;i++){
        numArray += charArray[i];
    }
    if(stringArray.length != 1){
        numArray += '.' + stringArray[1];
    }

    return numArray;
}

module.exports = thousands_separators;
