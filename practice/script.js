let arr = [1, 2, 8, 6, 4, 9];
let arrAsc = arr.sort((a, b) => { return a - b });
console.log(arrAsc);
let maxVal = function (arr) {
    return Math.max.apply(null,arr);
}
console.log(maxVal(arr));
let minVal = Math.min(...arr);
console.log(minVal);

let arrChar = ['a', 'b', 'c', 'd'];
console.log(arrChar.splice(2, 0, 'ab', 'cd'));
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
let removed = myFish.splice(2, 0, 'drum', 'guitar');
console.log(removed);