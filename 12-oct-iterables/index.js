// const range = {
//     from: 1,
//     to: 3, 
// };

// for (const num of range){
//     console.log(num)
// }

// 1 =====================

// const animals = ['cat','dog','tiger'];

// for(const animal of animals){
//     console.log(animal);
// }

// same with / work in background ----

// const iterator = animals[Symbol.iterator]();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// if we check with bool 
// console.log(iterator.next().done);
// console.log(iterator.next().done);
// console.log(iterator.next().done);
// console.log(iterator.next().done);

// 2 =====================

// const range = {
//     from: 1,
//     to: 3, 
//     [Symbol.iterator]: function(){
//         let current = this.from;
//         let last = this.to;

//         return {
//             next: function() {
//                 if (current <= last){
//                     const ret = { done: false, value: current };
//                     current++
//                     return ret;
//                 }else{
//                     return {done: true, value: undifined};
//                 }
//             }
//         }

//     }
// };

// 3 =====================
// function Arr(){
//     this.length = 0;
//     this.push = function(element){
//         this[this.length] = element;
//         this.length++;
//     };

// }

// const animals = new Arr();
// animals.push('cat');
// animals.push('dog');
// animals.push('tiger');

// console.log(animals[1]);

// if use for loop ----

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// if use for of -----
// for (const animal of animals) {
//      console.log(animal);
// }

// 4 =====================
// const range = {
//     from: 1,
//     to: 3, 
// };

function Range(from, to){
    this.from = from;
    this.to = to;
    this[Symbol.iterator] = function(){
        let curr = this.from;

        return {
            next: () => {
                if (curr <= this.to) {
                    return { done: false, value: curr++ };
                }else{
                    return { done: true, value: undefined };
                }
            }
        };
    };
}

const range1 = new Range(1, 3 );
const range2 = new Range(5, 10 );
const range3 = new Range(20, 30 );

for (const value of range2) {
     console.log(value);
}