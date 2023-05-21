// Define the method to generate suffix
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateSuffix() {
  
  // Set the characters lake
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCaseLetters = upperCaseLetters.toLocaleLowerCase()
  const numbers = '0123456789'

  let charLake = []
  charLake = charLake.concat(upperCaseLetters.split(''), lowerCaseLetters.split(''), numbers.split(''))

  // Generate the suffix (and compare the existed suffix on the mongoDB)
  let suffix = ''
  for (i = 0; i < 5; i++) {
    suffix += sample(charLake)
  }
  
  // Return the suffix
  return suffix
}

// Export the suffix
module.exports = generateSuffix