// console.log("1. program started");

// function bark() {
//   console.log("2. woof");
// }

// ================= set time out menampilkan setelah sekian ms
// setTimeout(bark, 3000);

// ================= set time out menampilkan setiap sekian ms
// setInterval(() => {
//   console.log("2. woof");
// }, 3000);

// console.log("3. program ended");

// ===================== menjalankan date time dengan setInterval

console.log("1. program started");

setInterval(() => {
  console.log(formatTime(Date.now()));
}, 1000);

function formatTime(ms) {
  const date = new Date(ms);

  let formattedTime = "";
  formattedTime += String(date.getHours()).padStart(2, "0");
  formattedTime += ":";
  formattedTime += String(date.getMinutes()).padStart(2, "0");
  formattedTime += ":";
  formattedTime += String(date.getSeconds()).padStart(2, "0");

  return formattedTime;
}

console.log("3. program ended");
