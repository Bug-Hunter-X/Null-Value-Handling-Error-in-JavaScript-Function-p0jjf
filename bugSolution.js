function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Return a default value instead of null
    // Or throw an error: throw new Error('Null values not allowed');
  }
  // ... rest of the function
}