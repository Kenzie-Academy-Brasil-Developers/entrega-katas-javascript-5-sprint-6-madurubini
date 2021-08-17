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
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMaxValue2(){
    let result = maxValue([-2,0,258,9876,-987530,988759.2,988759.25, 1000000,999999.99])
    let expected = 1000000
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMaxValue1()
testMaxValue2()

/*Kata 5*/

function calculateRemainder(num1,num2){
    return num1%num2
}

function testCalculateRemainder1(){
    let result = calculateRemainder(10,3)
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}

function testCalculateRemainder2(){
    let result = calculateRemainder(4,5)
    let expected = 4
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
testCalculateRemainder1()
testCalculateRemainder2()

/*Kata 6*/

function distinctValues(arr){    
    let result = arr.filter((numero,index,arr) => arr.indexOf(numero) === index)
    return result
}

function testDistinctValues1(){
    let result = distinctValues([5,5,9,8,6,5,4,9,7,7])
    let expected = [5,9,8,6,4,7]
    console.assert(result === expected , `esperado: ${expected} obtido: ${result}`)
}

function testDistinctValues2(){
    let result = distinctValues([1,1,2,2,3,3,1,2,3])
    let expected = [1,2,3]
    console.assert(result === expected , `esperado: ${expected} obtido: ${result}`)
}
testDistinctValues1()
testDistinctValues2()

/*Kata 7*/

function countValues(arr){
    const result = []
    for( let number of arr){
        if(!result[number]){
            result[number] = 1
        }
        else{
            result[number] += 1
            
        }
    }
   
    return result 
}

function testCountValues1(){
      let result = countValues([1,1,1,2,2,3,3])
      let expected = "1(3) 2(2) 3(2)"
      console.assert(expected === result  , `esperado: ${expected} obtido: ${result}`)
    }

    function testCountValues2(){
    let result = countValues([4,4,5,6,7,4,7,5,6,7])
    let expected = "4(3) 5(2) 6(2) 7(3)"
     console.assert(expected === result  , `esperado: ${expected} obtido: ${result}`)
}

testCountValues1()
testCountValues2()

  /*Kata 8*/

  function evaluateExpression(str,obj){
    let expressao = str.split(" ")  
    let result = obj[expressao[0]]
      for(let i = 0; i< expressao.length; i++){
          let indiceAtual = expressao[i]
          if(indiceAtual === "+"){
              result += obj[expressao[i+1]]
          }
          if(indiceAtual === "-"){
              result -= obj[expressao[i+1]]
          }

      }
      
      return result
  }

  function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testEvaluateExpression2() {
    let result = evaluateExpression("a - b + c - d", {a: 1, b: 2, c: 3, d: 4});
    let expected = -2
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
  testEvaluateExpression1()
  testEvaluateExpression2()