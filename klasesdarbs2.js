function atz (a, b, c) {
    if(a<=10 && a>=0 && b<=10 && b>=0 && c<=10 && c>=0 ){
        if (((a+b+c)/3) >=4){
            return console.log('Ieskaitits', (a+b+c)/3)
        }
        else{
            return console.log('Neieskaitits', (a+b+c)/3)
        }
    } return console.log('Atzime var but tikai no 0 līdz 10')
}
atz(10,0,2)