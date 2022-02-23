function reverseString(str) {
  
  const new_array = []

  const array = str.split('')

  array.forEach(char => {
    new_array.unshift(char)
  });

  const new_word = new_array.join('')

  return new_word

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
  
  console.log("");

  console.log("Expecting: 'leahciM'");
  console.log("=>", reverseString("Michael"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
