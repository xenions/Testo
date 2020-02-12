function greeting(){
    console.log("Sveiki!");

}
greeting();
let gr = () => console.log("Sveiki, vēlreiz!");
gr();

function day(index)
{
    let dienas=["Pirmdiena", "Otrdiena", "Tresdiena", "ceturtdiena", "Piektdiena", "Sestdiena", "Svetdiena"];
    return console.log(dienas[index]);
}
let d = new Date();
day(d.getDay());

let weekDay = index => {
    let dienas=["Pirmdiena", "Otrdiena", "Tresdiena", "ceturtdiena", "Piektdiena", "Sestdiena", "Svetdiena"];
    return console.log(dienas[index]);
}
weekDay(5);

function summa(a,b){
    return a+b;
}
console.log('skaitļu summa', summa(1,2));
let sum = (a,b) => {
    let sum=a+b;
    console.log('Skaitļu summa:', sum);
}
sum(2,3);