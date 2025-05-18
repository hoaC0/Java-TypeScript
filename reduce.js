// .reduce() = reduces an array to a single value

const prices = [10, 20, 30, 40, 50];

const total = prices.reduce(sum);

function sum(accumulator, element) { // [] + [0], [0] + [1], [1] + [2], [2] + [3], [3] + [4]
  return accumulator + element;
}

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

console.log(prices.reduce(getMax)); // 50