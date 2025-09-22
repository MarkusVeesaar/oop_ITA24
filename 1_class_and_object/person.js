class  Person {
    #height = 0
    #weight = 0
    #name = ""
    #age = 0
    printperson(name){
        console.log(this.#name + " age " + this.#age +" years"+ " height: "+ this.height+"m weight: "+ this.weight + "kg")
    }
    getBMI(){
        let number = Number(this.weight) / (Number(this.height)*Number(this.height))
        return number.toFixed(2)
    }
    getheight(){
        return this.height
    }
    setheight(height){
        this.height = height
    }
    gainheight(){
        this.height++
    }
    getweight(){
        return this.weight
    }
    setweight(weight){
        this.weight = weight
    }
    grow(){
        this.height++
    }
    getolder(){
        this.#age++
    }
    setName(name){
        this.#name = name
    }
    getName(){
        return this.#name
    }
    setAge(age){
        this.#age = age
    }
    getAge(){
        return this.#age
    }
};

module.exports = Person