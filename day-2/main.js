// // $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
// //     console.log(result)
// // })

// // $.get("https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind", function(result){
// //   console.log(result.items[0].volumeInfo.description)
// // })


// // const useData = function(data){
// //   console.log(data)
// // }

// // $.ajax({
// //     method: "GET",
// //     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
// //     success: useData
// // //   }); 
// // const fetch = function (queryType,queryValue){
// //   $.ajax({
// //     method: "GET",
// //     url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
// //     success: function (data) {
// //       console.log(data.items[0].volumeInfo); 
// //     },
// //     error: function (xhr, text, error) {
// //         console.log(text);
// //     }
// //   })
// // }

// // fetch("isbn", 9789814561778),
// // fetch("title", "How to Win Friends and Influence People")

// // const fetch = function (queryType,queryValue){
// //   $.ajax({
// //     method: "GET",
// //     url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
// //     success: function (data) {
// //     data.forEach(data => console.log(data.title.volumeInfo.autor , data.title , + isbn))
// //     },
// //     error: function (xhr, text, error) {
// //         console.log(text);
// //     }}
// //   )}
// // fetch("isbn", 9789814561778)

// const getUrl = function(queryType, queryValue){
// return `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`
// }
// const fetch = function (queryType, queryValue){
//   $.ajax({
//     method: “GET”,
//     url: getUrl(queryType, queryValue),
//     success: function(data){
//     //  console.log(data)
//     for(let dataIndex in data.items){
//       // console.log(data.items[dataIndex])
//       const book = (data.items[dataIndex])
//       console.log(book.volumeInfo.title)
//       console.log(book.volumeInfo.authors)
//      }
//     }
//   })
// }
// fetch(“title, “The Wise Man’s Fears”)


//ex4 //

