class Human {
    constructor(name, sex, age, height){
        this.name=name;
        this.sex=sex;
        this.age=age;
        this.height=height;
    }
    sayHi(){
        console.log('Sveiki! Mani sauc ${this.name}');
    };
    setAge(newage){
        this.age=newage;
    }
}
    let Peteris=new Human('Peteris', 'Vīr', 35, 189);
    Peteris.sayHi();
    Peteris.setAge(38);
    console.log(Peteris.age);

    class Famale extends Human{
        constructor(name, age, height, eyeColor){
            super(name, 'Siev', age, height);
            this.eyeColor=eyeColor;
        }
        getData(){
            console.log(this.name, 'dzimums', this.sex, 'vecums:', this.age, 'Garums', this.height, 'acu krasa', this.eyeColor);

        }
    }
    let Baiba = new Famale('Baiba', 31, 170, 'zila');
    Baiba.getData();
    let Baby = new Famale('Lelde',1, 51, 'Bruna');
    Baby.getData();
