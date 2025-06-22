function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const [delimiterLine, ...rest] = numbers.split("\n");
    delimiter = new RegExp(delimiterLine.slice(2));
    numbers = rest.join("\n");
  }

  const numArray = numbers.split(delimiter).map(Number);
  const negatives = numArray.filter((num) => num < 0);

  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
