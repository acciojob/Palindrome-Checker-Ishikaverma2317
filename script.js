function isPalindrome(s) {
    // Remove all non-alphanumeric characters and convert to lowercase
    let cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Reverse the cleaned string
    let reversed = cleaned.split("").reverse().join("");

    // Compare
    return cleaned === reversed;
}

// Test
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("raceCAR")); // true
