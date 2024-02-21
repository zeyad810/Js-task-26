const countTrue = arr => arr.filter(Boolean).length;
console.log(countTrue([true, false, true, true, false, false, true, false])); // 4
console.log(countTrue([true, false, true, false]));
console.log(countTrue([]));