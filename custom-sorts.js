function ageSort(users) {  
  // console.log('the arr we have: ' + arr)
    // Iterate through the array
    let i =0
    let swapped;
    // console.log(arr.join(","));
    do{      
      swapped = false;  // Reset swapped to false at the beginning of each iteration
      for (let i = 0; i < users.length - 1; i++) {  // Iterate through the array        
        if (users[i].age > users[i + 1].age) { 
          // Swap those values
          [users[i], users[i + 1]] = [users[i + 1], users[i]];
          swapped = true;  // Set swapped to true if a swap occurred
      }
      // console.log(arr.join(","));
          // Do not move this console.log        
           // If the current value is greater than its neighbor to the right
      }
      // If no swaps occurred, the array is sorted and we can exit the loop
      // 2,4,6,8,1,3,5,7,9
    }while(swapped)
      for (let i = 0; i < users.length - 1; i++){
        console.log('final: ' + users[i].age)
      }      
      // return arr;





}

function oddEvenSort(arr) {
  // Your code here 
}

function validAnagrams(s, t) {
  // Your code here 
}

function reverseBaseSort(arr) {
  // Your code here 
}

function frequencySort(arr) {
  // Your code here 
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];



const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Engineer",
    friends: [2, 3, 4],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    occupation: "Data Scientist",
    friends: [1, 4],
  },
  {
    id: 3,
    firstName: "Mary",
    lastName: "Smith",
    age: 32,
    occupation: "UX Designer",
    friends: [2, 4],
  },
  {
    id: 4,
    firstName: "James",
    lastName: "Johnson",
    age: 55,
    occupation: "CTO",
    friends: [1, 2, 3],
  }
]



// const sortedNames = ageSort(users).map((u) => u.firstName);


ageSort(users)