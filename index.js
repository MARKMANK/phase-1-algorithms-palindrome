function isPalindrome(word) {
  // Write your algorithm here
  const makeArray = word.split('');
  const reverseArray = makeArray.reverse();
  const reverseWord = reverseArray.join('');
  if(word === reverseWord){
    return true;
  } else {
    return false;
  }
}

/* 
  //convert the sumbitted string to an array
  //reverse the string
  //convert array back to a string
  //compare strings
*/

/*
  The isPalindrome function take a string, converts it to an array, reverses it, and converts it back to a string. Then it compares it to the orignal string. It will return true if the two are deeply equal.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
