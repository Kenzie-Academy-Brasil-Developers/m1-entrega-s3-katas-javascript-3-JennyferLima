const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let array1 = [];

    for(let i = 1; i <= 25; i++){
        array1.push(i);
    }
    return array1;
}
console.log(kata1())

/*
OUTRAS MANEIRAS:

function kata1(a, b){
    let array = [];

    for(let i = a; i <= b; i++){
        array.push(i);
    }
    return array;
}
console.log(kata1(1,25))


function kata1(){
    let array = [];

    let valorInicial = parseInt(prompt("Qual o primeiro valor do intervalo?"));

    let valorFinal = parseInt(prompt("Qual o último valor do intervalo?"));

    for(let i = valorInicial; i <= valorFinal; i++){
        array.push(i);
    }

    return array;
}
console.log(kata1())
*/


function kata2(c,d) {
    
    let array2 = [];

    for(let i = c; i >= d; --i){
        array2.push(i);
    }
    return array2;
}
console.log(kata2(25,1))


function kata3(e,f) {
    let array3 = [];

    for(let i = e; i >= f; --i){
        array3.push(i);
    }
    return array3;
}
console.log(kata3(-1,-25))


function kata4(g,h) {
    let array4 = [];

    for(let i = g; i <= h; ++i){
        array4.push(i);
    }
    return array4;
}
console.log(kata4(-25,-1))



function kata5(j,k) {
    let array5 = [];

    for(let i = j; i >= k; --i){
        if(i % 2 != 0){
            array5.push(i);
        }
    }
    return array5;
}
console.log(kata5(25,-25))


function kata6() {
    let array6 = [];

    for(let i = 3; i < 100; i++){
        if(i % 3 == 0){
            array6.push(i);
        }
    }
    return array6;
}
console.log(kata6())


function kata7() {
    let array7 = [];

    for(let i = 7; i < 100; i++){
        if(i % 7 == 0){
            array7.push(i);
        }
    }
    return array7;
}
console.log(kata7())


function kata8() {
    let array8 = [];

    for(let i = 100; i > 0 ; i--){
        if(i % 3 == 0 || i % 7 == 0){
            array8.push(i);
        }
    }
    return array8;
}
console.log(kata8())


function kata9() {
    let array9 = [];

    for(let i = 5; i < 100; i++){
        if(i % 5 == 0){
            array9.push(i);
        }
    }
    return array9;
}
console.log(kata9())


function kata10(sampleArray) {
    
    console.log(sampleArray);

}
console.log(kata10(sampleArray))

/*
OUTRA MANEIRA:
function kata10(sampleArray) {
    
    for(let i = 0; i < sampleArray.length; i++){
        console.log(sampleArray[i]);
    }
    
  }
console.log(kata10([sampleArray]))
*/


function kata11(sampleArray) {
    let paresSampleArray = [];

    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 == 0){
            //console.log(sampleArray[i]);
            paresSampleArray.push(sampleArray[i]);
        }
    }
    return paresSampleArray;
}
console.log(kata11(sampleArray))


function kata12(array) {

    let imparesSampleArray = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 != 0){
            imparesSampleArray.push(array[i]);
        }
    }
    return imparesSampleArray;
}
console.log(kata12(sampleArray))


function kata13(arr) {
    let divisiveisPor8 = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 8 == 0){
            divisiveisPor8.push(arr[i])
        }
    }
    return divisiveisPor8;
}
console.log(kata13(sampleArray))


function kata14(array1) {
       
    for(let i = 0; i < array1.length; i++){
        //console.log(array1[i]*array1[i])
        //console.log(Math.pow(array1[i], 2))
        //console.log(array1[i] ** 2) //** - Operador exponencial
        array1[i] = array1[i] ** 2;
    }
    return array1;
}
console.log(kata14(sampleArray))


const arrayUmaAvinte = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function kata15(array2) {
    let soma = 0

    for(let i = 0; i < array2.length; i++){
        soma += array2[i]
    }
    return soma;
}
console.log(kata15(arrayUmaAvinte))


function kata16(sampleArray) {
    let soma = 0

    for(let i = 0; i < sampleArray.length; i++){
        soma += sampleArray[i]
    }
    return soma;
}
console.log(kata15(sampleArray))


function kata17() {
    let menorElemento = sampleArray.sort((a,b) => a-b); //(a, b) => a - b - Dizendo à função .sort() para classificar os números em ordem crescente.

    return menorElemento[0];
}
console.log(kata17(sampleArray))

/*
OUTRA MANEIRA:
function kata17() {
    let menorElemento = sampleArray[0]; 

    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] < menorElemento)
        {
            menorElemento = sampleArray[i];
        }
    
    }
    return menorElemento;
}
console.log(kata17(sampleArray))
*/

function kata18() {
    let maiorElemento = sampleArray[0]; 

    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] > maiorElemento)
        {
            maiorElemento = sampleArray[i];
        }
    
    }
    return maiorElemento;
}
console.log(kata18(sampleArray))


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
