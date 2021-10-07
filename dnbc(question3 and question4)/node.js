// ------------------> question 3 start <------------------
const fs = require("fs");

fs.readFile("./test.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const datas = data.split(/\n/);

  let values = 0;
  for (let i = 0; i < datas.length; i++) {
    values += parseInt(datas[i].split(",").splice(-1));
  }
  console.log(values);
});
// ------------------> question 3 end <------------------

// ------------------> question 4 start <------------------
// if (province == "ONTARIO") {
//   rate = ONTARIO_RATE;
//   amt = base * rate;  //******  I changed ONTARIO_RATE as rate ******/
//   calc = 2 * basis(amt) + extra(amt) * 1.05;
// } else if (province == "QUEBEC" || province == "ALBERTA") {
//   rate = province == "QUEBEC" ? QUEBEC_RATE : ALBERTA_RATE;
//   amt = base * rate;
//   calc = 2 * basis(amt) + extra(amt) * 1.05;
//   if (province == "QUEBEC") {
//     points = 2;
//   }
// } else {
//   rate = 1;
//   amt = base;
//   calc = 2 * basis(amt) + extra(amt) * 1.05;
// }

// ------------------> question 4 end <------------------
