process.stdin.resume();
process.stdin.setEncoding("utf-8");

let input = "";

process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  input = input.trim();
  console.log(isPalindrome(input));
});

function isPalindrome(s) {
  // Remove non-alphanumeric chars and convert to lowercase
  const cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Compare the cleaned string with its reverse
  return cleanStr === cleanStr.split("").reverse().join("");
}
