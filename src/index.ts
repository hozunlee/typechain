export {};

const name = "hoya",
    age = 24,
    gender = "male";

const sayHi = (name: string, age: number, gender: string): void => {
    console.log(`hello ${name}, your ${age}, you are a ${gender}`);
};

sayHi(name, age, gender);
