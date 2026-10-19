'use strict';

const person = {
  name: "Viandry",
  age: 25,
  city: 'Jakarta'
};

// default itu true semua
// const descriptor = {
//   value: "Jakarta",
//   writable: true,
//   enumerable: true,
//   configurable: true,
// };

// console.log(Object.getOwnPropertyDescriptor(person,'name'));
// console.log(Object.getOwnPropertyDescriptor(person,'age'));
// console.log(Object.getOwnPropertyDescriptor(person,'city'));

// sanitasi object / object sanitation
// Object.defineProperty(person, 'city', descriptor);

// console.log(person);

// anti delete
Object.getOwnPropertyDescriptor(person,'name',{ configurable: false});
delete person.name

console.log(person);

// jika configurable sudah di set false tidak bisa di rubah kembali



// ===================================

// const person = {};
// ObObject.defineProperty(person,'name',
//     {
//         value: 'Edward',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// );

// console.log(Object.getOwnPropertyDescriptor(person,'name'));


// ===============================
// const animal = {
//     0: 'cat',
//     1: 'cat',
//     2: 'cat',
//     length: 3,
// };

// ===============================

// Object.defineProperty(person,'name',
//     {
//         value: 'Edward',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// );

// console.log(Object.getOwnPropertyDescriptor(person,'name'));

// =============================================================
// use case nya apa?
// jika masuk ke enum patern tidak bisa di ubah2

// enum patern
const Menu = {
    CHECK_BALACE: 0,
    DEPOSIT: 1,
    WITHDRAW: 2,
    EXIT: 3
}

function freeze(){
    for ( key in Menu ){
            Object.defineProperty(Menu, key,
            {
                writable: false,
                configurable: false
            }
        );
    }
}

// untuk mengubah writable dan configuration jadi false Object.freeze() 

// untuk mengubah configurable saja ke false Object.seal()

// ada juga getOwnPropertyDescriptor(obj)

// 1 enumerable bsia di ubah Object.defineProperty
// semua enumerable bisa di ubah Object.defineProperties(ob)



// termasuk http status itu enum patern
