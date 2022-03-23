export {};

interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "hoya",
    age: 24,
    gender: "male",
};

const sayHi = (person: Human): void => {
    console.log(
        `hello ${person.name}, your ${person.age}, you are a ${person.gender}`
    );
};

sayHi(person);
