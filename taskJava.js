function getUniqueValues(arr) {
  const uniqueValues = [];

  // Iterating over the array
  for (let i = 0; i < arr.length; i++) {
    // Checking if the current value is not already in the uniqueValues array
    if (uniqueValues.indexOf(arr[i]) === -1) {
      // Adding the current value to the uniqueValues array
      uniqueValues.push(arr[i]);
    }
  }

  return uniqueValues;
}
