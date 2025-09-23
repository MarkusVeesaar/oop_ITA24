const MyDate = require(`./mydate.js`)
const date1 = new MyDate(1, 13 ,2022)
const date2 = new MyDate(25, 13, 2022)

console.log(date1.printdate());

console.log(date1.earlier(date2));