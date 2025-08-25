//داله تاخذ كلمة واحدة وتتحقق اذا كانت palindrome
function isPalindrome(word) {
  let reversedWord = "";
  // تحويل الكلمة الى حروف صغيرة
  let lowerCaseWord = word.toLowerCase();
  //عكس الكلمة بواسطة اللوب
  for (let i = lowerCaseWord.length - 1; i >= 0; i--) {

    reversedWord += lowerCaseWord[i];
  }
  // التحقق من كون الكلمة هي palindrome
  return reversedWord === lowerCaseWord;
}
//امر الطباعة
console.log(isPalindrome("Racecar"));