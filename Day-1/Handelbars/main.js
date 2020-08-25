// // turn our "template" into html
// let source = $('#store-template').html();

// // compile our template html using handlebars
// let template = Handlebars.compile(source);

// // fill our template with information
// let newHTML = template({item: "bread", price: "3"});

// // append our new html to the page
// $('.items').append(newHTML);

// let newHTML2 = template({item: "Cheese", price: "10"});

// $('.items').append(newHTML2);


// const items = [
// { item:"cake" , price: 20 },
// { item:"pen" , price: 20 },
// { item:"wallet" , price: 40 },
// { item:"computer" , price: 200 },
// ]

// // // turn our "template" into html
// let source = $('#store-template').html();
// // // compile our template html using handlebars
// let template = Handlebars.compile(source);

// for(let i of items){
// let newHTML = template(i);
// $('.items').append(newHTML);
// }

// const menuData = {
//   menu: [
//     { name: "Google", link: "http://google.com" , socialNetwork: false },
//     { name: "Facebook", link: "http://facebook.com", socialNetwork: true },
//     { name: "Instagram", link: "http://nstagram.com", socialNetwork: false },
//     { name: "Twitter", link: "http://twitter.com", socialNetwork: false },
//   ]
// };

// const source = $('#menu-template').html();
// const template = Handlebars.compile(source);
// const newHTML = template(menuData);

// // // append our new html to the page
// $('.menu').append(newHTML);


// let classData = {
//   classmates: [
//       {name: "That on gal", description: "Always has the ansswer"},
//       {name: "The weird dude", description: "Quick with a smile"},
//       {name: "Taylor", description: "Just Taylor"}
//   ]
// }

// const source = $('#classmates-template').html();
// const template = Handlebars.compile(source);
// const newHTML = template(classData);
// $('.classroom').append(newHTML);


// let fashionBlog = {
//   fashionlist : [
//     {product : "T-shirt" , color: "White" , mayShow: false},
//     {product : "Jacket" , color: "Green", mayShow: true},
//     {product : "Jeans" , color: "Black", mayShow: true},
//     {product : "Hat" , color: "Blue", mayShow: false},
//   ]
// }
// const source = $('#fashion-template').html();
// const template = Handlebars.compile(source);
// const newHTML = template(fashionBlog);
// $('.fashion').append(newHTML);


const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

// const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const source = $('#store-template').html();

const template = Handlebars.compile(source)

const newHTML = template({item: "bread", price: "15"});

$('.items').append(newHTML);


// const source = $('#animals').html()
// console.log(source)
// const template = Handlebars.compile(source)
// console.log(template)
// const newHTML = template(animals)
// console.log(newHTML)
// $('body').append(newHTML)
// const renderSecond = function(){
//   const source = $('#second-template').html()
//   const template = Handlebars.compile(source);
//   let newHTML = template({ moreText: "This also gets rendered" });
//   $('#special').append(newHTML);  
// }

// renderFirst()
// renderSecond()


