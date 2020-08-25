

// // class Animal {
// //   constructor(name, numLegs) {
// //       this.name = name
// //       this.numLegs = numLegs
// //   }
// // }
// // const cat = new Animal("Puss", 4)
// // console.log("Hi , my name is " + cat.name + "i have " + cat.numLegs +  " legs")

// // this = {}
// // this.name = "Puss"
// // this.numLegs = 4
// // const cat = this

// //spotcheck 1//
// // class Animal {
// //   constructor(name , age) {
// //     this.name = name
// //     this.age = age
// //   }
// // }

// // const dog = new Animal ("happy" , 17)
// // console.log("my dog's name is " + dog.name + " and he is " + dog.age + " years old " )

// // //spotcheck 2//

// // class Human {
// //   constructor(name,age,isFriendly) {
// //     this.name = name
// //     this.age = age
// //     this.isFriendly = isFriendly
// //   }
// // }

// // const newHuman = new Human ("Yarin" , 23 , true)
// // // console.log('${newHuman.name} + ${newHuman.age}  +  ${newHuman.isFriendly}')\
// //  console.log(`${newHuman.name}, who is ${newHuman.age} years old, is ${newHuman.isFriendly ? 'friendly' : 'not friendly'}`)



 class Animal {
  constructor(name, numLegs) {
      this.name = name
      this.numLegs = numLegs
      this.children = []
// //   }

  giveBirth(name){
      console.log("Boom. Birthed " + name)
      this.children.push(name)

// //   }
// // }
// // const cat = new Animal("Puss", 4)
// // cat.giveBirth("Dolly")
// // console.log(cat.children) // should print an array with 1 item: ["Dolly"]﻿ 


// // class Vehicle{
// //   constructor (x, y, speed) {
// //     this.x = x
// //     this.y = y
// //     this.speed = speed
// //     Vehicle.carsSold++

// //  }
// //   static getInfo(){
// //   console.log("We've sold " + Vehicle.carsSold + " vehicles.");
// //  }
// //  static calculateMoney(){
// //    console.log("We've Made " +  30000 * Vehicle.carsSold + " Euros.")
// //  }
// // }
// //   Vehicle.carsSold = 0;
// // const car = new Vehicle(1,1,100)
// // const car2 = new Vehicle(2,2,100)
// // const car3 = new Vehicle(2,4,120)
// //   Vehicle.getInfo()
// //   Vehicle.calculateMoney()



// class Vehicle {
//   constructor(x, y, speed, fuel) {
//       this.x = x;
//       this.y = y;
//       this._speed = speed;
//       this._fuel = fuel
//   }

//   get fuel() {
//       return this._fuel
//   }

//   set fuel(amount) {
//       if (amount > 150) { return console.log("Too much") }
//       if (amount < 0) { return console.log("Not reasonable") }
//       this._fuel = amount
//   }
// }

// const car = new Vehicle()
// car.x = 3
// car.y = 1
// car.speed = 10 // at this point, we'll get the console log saying speed needs to be positive
// console.log(car.speed) // prints undefined
// car.fuel = 151
// console.log(car.fuel)

class Zoo {
  constructor() {
      this.animals = []
  }

  addAnimal(animal) {
      this.animals.push(animal)
      console.log("Added " + animal.name + " to the zoo")
  }

  showAnimals() {
      this.animals.forEach(a => console.log(a.name))

  }
}

class Animal {
  constructor(name, numLegs) {
      this.name = name
      this.numLegs = numLegs
  }
}

const cat = new Animal("Puss", 4)
const zoo = new Zoo()

zoo.addAnimal(cat) // prints "Added Puss to the zoo"
zoo.showAnimals() // prints "Puss"