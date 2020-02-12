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
//     if (a == 5 || b == 5) return true;
//     if(a + b == 5) return true;
//     return false
// }
// const result = c(2, 3);
// console.log(result);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// tresais uzdevums

// const sum = [1, 2, 3].reduce(add,0); // with initial value to avoid when the array is empty
// function add(accumulator, a) {
//     return accumulator + a;
// }
// console.log(sum); // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ceturtais uzdevums

// const masivs = array =>
// {
// if (array.length == 0) return "Masīvs ir tukšs";
// if (array.length >3) return "Masīvā ir pārāk daudz vērtību";
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
//     if (a == b) return 3*(a+b);
//     else return a+b;
    
// }
// const result = c(3, 3);
// console.log(result);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// sestais uzdevums

// const paswd = (lietotajs, parole) =>
// {
//     if (lietotajs == null) return "Ievadiet lietotajvardu";
//     if (parole == null) return "Ievadiet paroli";
//     if (parole.length <12) return "Ievadiet garāku paroli";
//     return "Done";
// }
// const result = paswd("Janis", "Dimitrijevs123456");
// console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// septitais uzdevums

// const getLastAndFirsElFromArray = array => {
//     if(array.length == 0) return "Array is empty";
//     if(array.length == 1 || array.length == 2) return array;
//     return [array[0], array[array.length - 1]];
// }
// const result = getLastAndFirsElFromArray([1, 3, 2 ,4, 8]);
// console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


