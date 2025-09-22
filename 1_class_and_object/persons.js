//{}

const Person = require(`./person.js`)
const bob = new Person()
const brian = new Person()
const Alice = new Person()

while (bob.getAge() < 15){
    bob.getolder()
};

bob.setName("bob");
brian.setName("brian")
Alice.setName("Alice")

bob.setheight(1.70)
brian.setheight(1.75)
Alice.setheight(1.80)

bob.setweight("100")
brian.setweight("90")
Alice.setweight("80")

console.log(bob.getBMI())

bob.printperson();
brian.printperson();
Alice.printperson();

