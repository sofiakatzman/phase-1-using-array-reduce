const batteryBatches = [4, 5, 3, 4, 4, 6, 5];



let totalBatteries = batteryBatches.reduce(function (accumulator, element){
    return element + accumulator;
}, 0);
/*
// Code your solution here
let totalBatteries = batteryBatches.reduce(function (countObj, currentBat) {
    if (currentBat in countObj) {
        countObj[currentBat]++;
    } else {
        countObj[currentBat] = 1;
    }
    return countObj;
}, {});

console.log(totalBatteries);

*/