 /*Kata 1*/ 

function reverseString(str){
    let result = ""
    for(let i = str.length-1; i >= 0; i--){
        result += str[i]
    }
    return result
    
}

function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testeReverseString2() {
    let result = reverseString("dog loko73");
    let expected = "37okol god";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

 testeReverseString1()
 testeReverseString2()

 /*Kata 2*/ 

function reverseSentence(str){
     let frase = str.split(" ")
     let result = []
     for(let i = frase.length -1 ; i >= 0; i--){
         result.push(frase[i]) 
     }  
     return result.join(" ")
 }

function testeReverseSentence1(){
     let result = reverseSentence("bob likes dogs")
     let expected = "dogs likes bob"
     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
    }

function testeReverseSentence2(){
    let result = reverseSentence("Maria Eduarda Rubini")
    let expected = "Rubini Eduarda Maria"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
    }

 testeReverseSentence1()
 testeReverseSentence2()

  /*Kata 3*/ 

function minimumValue(arr){
  return Math.min(...arr)
}

function testMinimumValue1(){
      let result = minimumValue([6,3,5,9,8,7,12,17,0,3])
      let expected = 0
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMinimumValue2(){
    let result = minimumValue([-2,4,98,98759874,-98148521,0,3,2,3254.4])
    let expected = -98148521
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
  testMinimumValue1()
  testMinimumValue2()

    /*Kata 4*/ 

function maxValue(arr){
    return Math.max(...arr)
}

function testMaxValue1(){
    let result = maxValue([-2,3,258,9876,-987530,988759.2,988759.25])
    let expected = 988759.25
    console.assert(result === expected, `espetado: ${expected}, obtido: ${result}`)
}

function testMaxValue2(){
    let result = maxValue([-2,0,258,9876,-987530,988759.2,988759.25, 1000000,999999.99])
    let expected = 1000000
    console.assert(result === expected, `espetado: ${expected}, obtido: ${result}`)
}
testMaxValue1()
testMaxValue2()