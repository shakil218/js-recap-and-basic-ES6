// Problem:- 1

// A
const getMultiplicationOfNumbers = (number1, number2, number3) => number1 * number2 * number3;

// console.log(multiplicationOfNumbers(4,3,5));

// B
const dynamicMultipleLineSentence = `I am a web developer. I love to code. I love to eat biriyani.`

// console.log(dynamicMultipleLineSentence);

// C
const getSumOfNumbers = (number1, number2 = 25) => number1 + number2;

// console.log(getSumOfNumbers(30));


// Problem:-2
const getArrayWithEvenLengthOfFriends = friends => {
  let evenLengthOfFriends = []
  for(const friend of friends){
    if(friend.length % 2 === 0){
      evenLengthOfFriends.push(friend)
    }
  }
  return evenLengthOfFriends
}

const friends = ['Manik','Foysal','Sakib','Limon','Shakil','Merajul']
// console.log(getArrayWithEvenLengthOfFriends(friends));


// Problem:-3

const calculateAverageOfTheSumOfSquaredElements = array => {
  let sum = 0;
  let result = []
  for(const element of array){
    const square = element * element
    sum += square
    const average = sum / array.length 
    result.push(average.toFixed(2))
  }
  return result
}

const numbers = [10,5, 8, 12, 9, 6,20]
// console.log(calculateAverageOfTheSumOfSquaredElements(numbers));


// Problem:-4

const getMaximumNUmberOfAnArray = (array1, array2) => {
  const combinedTwoArray = [...array1, ...array2]
  const maximumNumber = Math.max(...combinedTwoArray)
  return maximumNumber
}

const arrayOfNumbers1 = [3,5,7,9]
const arrayOfNumbers2 = [2,4,6,8]
// console.log(getMaximumNUmberOfAnArray(arrayOfNumbers1,arrayOfNumbers2));