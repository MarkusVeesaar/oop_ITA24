 const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

class MyDate{
    constructor(day,month,year){

        this.day = day;
        this.month = month;
        this.year = year;

        this.isValid;
    }

    isValid() {
        if (!Number.isInteger(this.day) || !Number.isInteger(this.month) || !Number.isInteger(this.year)){
            console.log("not valid numbers");
            return false;
        }
        else if (this.month < 1 || this.month > 12){
            console.log("month is not valid");
            return false;
        }
        else if (this.day < 0 || this.day > daysInMonth[this.month - 1]){
            console.log("not a valid day");
            return false;
        }
    }
    printdate(){
        return `${this.day}.${this.month}.${this.year}`;
    }
    earlier(compared) {
    if (!(compared instanceof MyDate)) {
      console.log("viga");
      return false;
    }

    if (this.year < compared.year) return true;
    if (this.year > compared.year) return false;

    if (this.month < compared.month) return true;
    if (this.month > compared.month) return false;

    return this.day < compared.day;
  }
    
};
module.exports = MyDate