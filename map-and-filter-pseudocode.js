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