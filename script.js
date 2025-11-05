function isPalindrome(s) {
  // Step 1: Remove all non-alphanumeric characters and convert to lowercase
  let cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Step 2: Reverse the cleaned string
  let reversed = cleaned.split('').reverse().join('');

  // Step 3: Compare cleaned and reversed versions
  return cleaned === reversed;
}

// Example Test
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("raceCAR")); // true
