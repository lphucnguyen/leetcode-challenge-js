
var TimeConvert = (num) => {
    let challengeCode = 'fybil6wxg0';
    let hours = Math.floor(num / 60);
    let minutes = num % 60;

    challengeCode = challengeCode.split('').reverse().join('');
    hours = hours.toString().split('').reverse().join('');
    minutes = minutes.toString().split('').reverse().join('');

    return `${minutes}:${hours}:${challengeCode}`;
}

console.log(TimeConvert(126)); // 6:2:0xgw6libyf
console.log(TimeConvert(45)); // 54:0:0xgw6libyf
