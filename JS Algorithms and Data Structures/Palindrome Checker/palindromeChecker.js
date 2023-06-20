function palindrome(str) {
  let regex = /[A-Za-z0-9]/gi;

  let extracted = str.match(regex).join("").toLowerCase();

  let reverse = extracted.split("").reverse().join("");

  return extracted === reverse;
}

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("A man, a plan, a canal: Panama");
palindrome("not a palindrome");
