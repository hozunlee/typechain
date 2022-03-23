export {};

class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "female");

// const person = {
//     name: "hoya",
//     age: 24,
//     gender: "male",
// } as Human;

const sayHi = (person: Human): void => {
    console.log(
        `hello ${person.name}, your ${person.age}, you are a ${person.gender}`
    );
};

sayHi(lynn);
