class Person{
  constructor(first, last, age, gender){
  
    this.name = {
      first,
      last
    };
    this.age= age;
    this.gender= gender;
}

async greeting(){
  return await Promise.resolve(`hi i am ${this.name.first}`);

}

farewell(){
   console.log(`${this.name.first} ${this.name.last} left the party! bye`)
};

}

let chetan =new Person('chetan', 'suresh', 23, 'male');


chetan.greeting().then((r)=>console.log(r));
chetan.farewell();


