// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// }

//class는 코드를 컨트롤 할 수 있도록 해줌
class Human {
    public name: string;
    private age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "female");

const sayHi = (person: Human): string => {
    return `Hello, your are ${person.name}, right?. you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(lynn));


export {};
// 이 파일이 모듈이 된다는 것을 이해시킴
