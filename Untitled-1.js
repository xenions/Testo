// pirmais uzdevums

// var s ="Tests";
// function reverse(s){
//     return s.split("").reverse().join("");
// }
// console.log(reverse(s));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// otrais uzdevums

// const c = (a, b) =>
// {
//     if(a == 5 || b == 5) return true;
//     if(a + b == 5) return true;
//     return false
// }
// const result = c(3, 3);
// console.log(result);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// tresais uzdevums

// const sum = [1, 2, 3].reduce(add,0); // with initial value to avoid when the array is empty
// function add(accumulator, a) {
//     return accumulator + a;
// }
// console.log(sum); // 6
// function summa(mas){
//     let sum=0;
//     mas.forEach(el => {
//         sum=sum+el;
//     })
//     return sum;
// }
// console.log(summa([1,2,3]));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ceturtais uzdevums

// const masivs = array =>
// {
// if(array.length == 0) return "Masīvs ir tukšs";
// if(array.length >3) return "Masīvā ir pārāk daudz vērtību";
// else 
// {
//     {
//         var sum = 0;
//         for(var i = 0; i < 3; i++) {
//             if(!isNaN(array[i]))
//             {sum += array[i]}
//             else {
//                 return "Masīvā ir neskaitlis";
//                 }
           
//         }
//         return sum
//     }
// }
// }
// const result = masivs([1, 2, "b"]);
// console.log(result);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// piektais uzdevums

// const c = (a, b) =>
// {
//     if(a == b) return 3*(a+b);
//     else return a+b;
    
// }
// const result = c(3, 3);
// console.log(result);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// sestais uzdevums

// const paswd = (lietotajs, parole) =>
// {
//     if(lietotajs == null) return "Ievadiet lietotajvardu";
//     if(parole == null) return "Ievadiet paroli";
//     if(parole.length <12) return "Ievadiet garāku paroli";
//     return "Done";
// }
// const result = paswd("Janis", "Dimitrijevs123456");
// console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// septitais uzdevums

// const sept = array => {
//     if(array.length == 0) return "Masīvs ir tukšs";
//     if(array.length == 1 || array.length == 2) return array;
//     return [array[0], array[array.length - 1]];
// }
// const result = sept([1, 3, 2 ,4, 8]);
// console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// astotais uzdevums

// let Raksts = {
//     virsraksts: "Clocks",
//     autors: "Wikipedia",
//     saturs: "Clockmakers developed their art in various ways. Building smaller clocks was a technical challenge, as was improving accuracy and reliability. Clocks could be impressive showpieces to demonstrate skilled craftsmanship, or less expensive, mass-produced items for domestic use. The escapement in particular was an important factor affecting the clock's accuracy, so many different mechanisms were tried.",
//     patik: [],
    
//     lasisanasilgums: () => {
//         return Raksts.saturs.length / 1500
//     },
//     pieskirtpatik: id => {
//         Raksts.patik.push(id);
//         return Raksts.patik;
//     },
//     nonemtpatik: id => {
//         const nonemt = Raksts.patik.indexOf(id)
//         Raksts.patik.splice(nonemt, 1);
//         return Raksts.patik
//     }
// }
// console.log(Raksts.lasisanasilgums());
// console.log(Raksts.pieskirtpatik(1));
// console.log(Raksts.pieskirtpatik(2));
// console.log(Raksts.pieskirtpatik(3));
// console.log(Raksts.pieskirtpatik(4));
// console.log(Raksts.nonemtpatik(3));
// console.log(Raksts);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// devitais uzdevums

class uznemums {
    constructor(nosaukums, forma, reg_nr, reg_dat, adr_iela, adr_nr, adr_city, adr_nov, adr_valsts, adr_indekss, phone, tax_paradi, data_renew)
    {
        this.nosaukums = nosaukums;
        this.forma = forma;
        this.regist_nr = reg_nr;
        this.regist_dat = reg_dat;
        this.adrese_iela = adr_iela;
        this.adrese_nr = adr_nr;
        this.adrese_city = adr_city;
        this.adrese_nov = adr_nov;
        this.adrese_valsts = adr_valsts;
        this.adrese_indekss = adr_indekss;
        this.talrunis = phone;
        this.nodoklu_paradi = tax_paradi;
        this.datu_atjaunin = data_renew;


        this.getparadi = function(){
            console.log("Datu atjaunošanas datums: "+this.datu_atjaunin +" Nodokļu parāds: " +this.nodoklu_paradi);
        };
        this.pedejais = function(){
            console.log("Uzņēmuma nosaukums: " + this.nosaukums + " Uzņēmuma dibināšanas datums: " + this.regist_dat);
        };
        
        this.setparadi = function(nodokluparadi, datuatjaunin){
            this.nodoklu_paradi = nodokluparadi;
            this.datu_atjaunin = datuatjaunin;
        };
    }
}
uznemums_new = new uznemums("Grifons", "SIA", "015422541125", "2019-15-4", " liela iela", "15", "Jelgava", "Jelgavas", "Latvija", "LV-3014", "28637093", "150 Euro", "2019");
function UznemumaIzvade(uznemums){
    console.log(uznemums.nosaukums);
console.log(uznemums.forma);
console.log(uznemums.reg_nr);
console.log(uznemums.reg_dat);
console.log(uznemums.adr_iela);
console.log(uznemums.adr_nr);
console.log(uznemums.adr_city);
console.log(uznemums.adr_nov);
console.log(uznemums.adr_valsts);
console.log(uznemums.adr_indekss);
console.log(uznemums.phone);
console.log(uznemums.tax_paradi);
console.log(uznemums.data_renew);
}
uznemums_new.getparadi();
uznemums_new.setparadi("100 Euro", 2009);
uznemums_new.getparadi();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//desmitais uzdevums

class SIA extends uznemums{
    constructor (forma, nosaukums, reg_dat,pamatkapitals){
        super(forma, nosaukums, reg_dat);
        this.pamkap = pamatkapitals;
        this.vards;
        this.uzvards;
        this.personas_kods;
        
        
        this.pievienotDibinataju = function (dibin_vards,dibin_uzvards,dibin_person) { 
            this.vards=dibin_vards;
            this.uzvards=dibin_uzvards;
            this.personas_kods=dibin_person;
            
          };
           this.dibinatajuSaraksts = function () { 
             console.log( uznemums_new.pedejais(), this.vards +" "+this.uzvards+ " "+this.personas_kods);
           };
    
      
  }
}

jaunafirma=new  SIA;
jaunafirma.pievienotDibinataju("Janis","Dimitrijevs","111111-11111");
jaunafirma.dibinatajuSaraksts();

