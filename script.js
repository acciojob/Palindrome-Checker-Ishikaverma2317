function isPalindrome(s) {
    // Remove all non-alphanumeric characters and convert to lowercase
    let cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Reverse the cleaned string
    let reversed = cleaned.split("").reverse().join("");

    // Check if palindrome
    return cleaned === reversed;
}
