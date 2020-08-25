// let vegetables = [
//   { name: "Eggplant", color: "purple" },
//   { name: "Carrot", color: "orange" },
//   { name: "Squash", color: "orange" },
//   { name: "Tomatoe", color: "red" },
//   { name: "Onion", color: "white" },
//   { name: "Sweet Potato", color: "orange" }]

// const orangeVeg = vegetables.filter((veg) => veg.color === 'orange')

// console.log(orangeVeg)

// let people = [
//   { salary: 1300, goodPerformance: false },
//   { salary: 1500, goodPerformance: true },
//   { salary: 1200, goodPerformance: true },
//   { salary: 1700, goodPerformance: false },
//   { salary: 1600, goodPerformance: true },
// ]

// const increaseSalary = function (person) {
//   if (person.goodPerformance){
//     person.salary += 300
//   }
// }


// people.forEach((p) => {
//   increaseSalary(p)

//   console.log(p.salary)
// }) 


// let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]

// const lowerCaseMessagesFromDad = messagesFromDad.map((message) => message.toLowerCase())

// console.log(lowerCaseMessagesFromDad)


let posts = [
  {
      id: 0, text: "I'm not here",
      comments: [{ id: 0, text: "support that" }]
  },
  {
      id: 1, text: "Find me",
      comments: [
          { id: 0, text: "here I am" },
          { id: 1, text: "rock you like a hurricane" },
          { id: 2, text: "dum dum" }]
  },
  {
      id: 2, text: "Where's waldo anyway",
      comments: [
          { id: 0, text: "who's waldo" },
          { id: 1, text: "he's called Effi" }]
  },
  {
      id: 3, text: "Poof",
      comments: [{ id: 0, text: "like magic" }]
  }
]

// const findCommentById = function (postId, commmentId) {
//   const post = posts.find((post) => post.id === postId)

//   const comments = post.comments

//   const comment = comments.find((comment) => comment.id === commmentId) 

//   return comment
// }

// console.log(findCommentById(1,0))


// let movies = [
//   { title: "Dareangel", studio: "Marvel", year: 2023 },
//   { title: "Batterfly", studio: "Fox", year: 2021 },
//   { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
//   { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
// ]


// const isThereMarvelMovies = movies.some((movie) => movie.studio === 'Marvel')

// isThereMarvelMovies ? console.log('Let\'s go watch some movies') : console.log('Let\'s stay home')

// const areWeInTheFuture = movies.every((movie) => movie.year > 2020)

// areWeInTheFuture ? console.log('Futuristic stuff') : console.log('Yawn')



const names = ['Nisan Semo', 'Yarin Amrani', 'Omer Benafshi']

const newNames = names.map((name) => {
  return {
    firstName: name.split(' ')[0],
    lastName: name.split(' ')[1]
  }
})

console.log(newNames)