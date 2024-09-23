//## Pseudo-Map Method  :  *** array.map() ***

function myMapArray(array, callFunction) {
    let result = []   // *pseudo-map*; hier ein Array
    for (let i = 0; i < array.length; i++){
        let temp = callFunction(array[i]);  // optional, kann man auch sein lassen
        result.push(temp);       // direkt **result.push(callFunction(array[i]))** geht auch
    }                       // push das ganze **callback(array[i])**;
                        // array[i] hat sich geändert in callback(array[i])
    return result
}
const double = num => num * 2  // callback function
const half = num => num / 2
console.log(myMapArray([3, 6,2,15], double));  // [ 6, 12, 4, 30 ]
console.log(myMapArray([3, 6,2,15], half));  // [  1.5, 3, 1, 7.5   ]

const chars = [ "abc", "ghi", " kjmno"]
const keinBockMehr = str => str.slice(2)
console.log(myMapArray(chars, keinBockMehr));  // [ 'c', 'i', 'jmno' ]


function zuSpät (str) {
    return str.slice(2)
}
console.log(myMapArray(chars, zuSpät));  // [ 'c', 'i', 'jmno' ]



/**
 * was braucht man noch alles:
 * 
 * array als input
 * callback functions
 */
//## Pseudo-Filter method : *** array.filter() ***
const myFiltered = (array, callFunction) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (callFunction(array[i])) {   // function anwenden
            result.push(array[i])           // push nur array[i]
                                        // array[i] hat s n geändert !!!
                                    // callback(array[i]) ist hier nur eine condition!!!!
        }
    }
    return result
}