function calculateAverage(...numbers) {
  if (numbers.length === 0) {
    return 0; // Return 0 if no arguments are provided
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number; // Calculate the sum of all numbers
  }

  return sum / numbers.length; // Calculate and return the average
}

// Example usage:
console.log(calculateAverage(2, 4, 6)); // Expected output: 4
