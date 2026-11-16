const fs = require("fs");
const readline = require("readline-sync");

// =========================== record by text
// function saveInputs(name, gender) {
//   const data = `${name} ${gender}`;

//   fs.writeFile("record.txt", data, function (err) {
//     if (err) {
//       console.log(err);
//     }
//   });
// }

// /**
//  * Read saved inputs
//  * @param {({name: string, gender: string}) => void} callback
//  */
// function readSavedInputs(callback) {
//   fs.readFile("record.txt", "utf-8", function (err, data) {
//     if (err && err.code === "ENOENT") {
//       callback(undefined);
//     } else {
//       const [name, gender] = data.split(" ");
//       callback({ name, gender });
//     }
//   });
// }

// readSavedInputs(function (inputs) {
//   let name;
//   let gender;

//   if (!inputs) {
//     name = readline.question("Input your name: ");
//     gender = readline.question("Input your gender: ");

//     saveInputs(name, gender);
//   } else {
//     name = inputs.name;
//     gender = inputs.gender;
//   }

//   const title = gender === "male" ? "Mr" : "Mrs";

//   console.log(`Welcome ${title}. ${name}`);
// });

// =========================== record by json -> javascript object notation

// stringify -> merubah object menjadi string
// parse -> merubah string menjadi object
// json itu adalah string

function saveInputs(name, gender) {
  //   const data = `{"name": "${name}","gender": "${gender}"}`;
  const data = JSON.stringify({ name, gender });

  fs.writeFile("record.json", data, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

/**
 * Read saved inputs
 * @param {({name: string, gender: string}) => void} callback
 */
function readSavedInputs(callback) {
  fs.readFile("record.json", "utf-8", function (err, data) {
    if (err && err.code === "ENOENT") {
      callback(undefined);
    } else {
      const record = JSON.parse(data);
      callback(record);
    }
  });
}

readSavedInputs(function (inputs) {
  let name;
  let gender;

  if (!inputs) {
    name = readline.question("Input your name: ");
    gender = readline.question("Input your gender: ");

    saveInputs(name, gender);
  } else {
    name = inputs.name;
    gender = inputs.gender;
  }

  const title = gender === "male" ? "Mr" : "Mrs";

  console.log(`Welcome ${title}. ${name}`);
});
