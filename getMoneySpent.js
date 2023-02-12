function getMoneySpent(keyboards, drives, b) {
  let arr = [];
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let sum = keyboards[i] + drives[j];
      if (sum <= b) {
        arr.push(sum);
      }
    }
  }
  return !arr.length ? -1 : Math.max(...arr);
}
