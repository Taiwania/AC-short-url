// Define the method to generate suffix
function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function generateSuffix() {
  // Set the characters lake
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLetters = upperCaseLetters.toLocaleLowerCase();
  const numbers = "0123456789";

  let charLake = [];
  charLake = charLake.concat(
    upperCaseLetters.split(""),
    lowerCaseLetters.split(""),
    numbers.split("")
  );

  // Generate the suffix
  let suffix = "";
  for (i = 0; i < 5; i++) {
    suffix += sample(charLake);
  }

  return suffix;
}

// Export the suffix
module.exports = generateSuffix;
