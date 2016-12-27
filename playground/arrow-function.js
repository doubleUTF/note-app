var square=x=>x*x;
console.log(square(5));

var user={
  name:'Jh0n',
  sayHi:()=>{
    console.log(`YO WTF. I'm ${this.name}`);
  },
  sayHiAlt(){
    console.log(arguments);
    console.log(`YO WTF. I'm ${this.name}`);
  }
};

user.sayHi(1,2,3);
