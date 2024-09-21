# Array methods
#
### repo auf Github
- [07-arrays](https://github.com/dci-fbw-wd-tz-24-d01/programming-basic/tree/main/07-arrays)
- 
#

## .slice() vs. .splice()
* slice() kopiert einen Teil des Arrays und returns den kopierten Teil als ein neues Array. Das Orginal Array wird nicht verändert.
* splice() adds oder removes elemente vom Orginalarray. Wir ändern das array.

### weiteres Lesematerial;
📚️ [w3 schools link](https://www.w3schools.com/js/js_array_methods.asp)
#
## .forEach() 
* array.forEach()  => nix (gibt kein Array aus)
* [MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)


```javascript
array.forEach(function(){})
```

## .map() 
*  array.map()   => newArr      
- genauso lang wie original array

💡wenn kein return => undefined

- return item => alle unverändert zurückgegeben; auch falsy (NaN, false)
- return true => [true, true, true, ...]
#

-  Beispiele aus Aufgaben; 

PB_Aufgaben/240909-pb-function-2-map-general:

```javascript
const productsWithDescription = products.map(function(item){
  item.description = item.color+ " " + item.type          
            // item.description w zu jedem Object hinzugefügt !!!!!!
  return item   // hier nur return item (nicht return item.description)
} ); 
console.log("Products with description:", productsWithDescription);
```

#
## .filter() 
 *  array.filter()  => newArr    
 maximal so lang wie original array (Auswahl)


alle Werte, die true sind, bekommt man; alle falsy nicht (NaN, false)
wenn keins dabei ist, dann leeres Array

return item => alle zurückgegeben
return true => auch so
-  Beispiele aus Aufgaben; 

PB_Aufgaben/240909-pb-function-2-filter-general:

```javascript
const cheaperThan10 = products.filter(item => item.price < 10);

console.log("Cheaper than 10:", cheaperThan10);
```
#
## .reverse()
* array method; reverses the order of all array elements
* [MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
#
## .join() 
* array method; makes string out of array
💡 useful in combination with .split() ; a string method that makes an array out of a string;
 ```javascript
string.split("").reverse().join("")
```
* [MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
#
## .includes()
* [MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
* aus der Aufgabe
- PB_Aufgaben/240819-pb-function-challenges-2

```javascript
const removeVowels = string => {
    let result = "";
    let vowels = "aeiou";
    string = string.toLowerCase();      

    for(let i = 0 ; i < string.length ; i++){
        if (!vowels.includes(string[i])){    // negation; Antonio's Geschmacksache
            result += string[i];
        }
    }
    return result;
}
console.log(removeVowels("table")); // "tbl"
console.log(removeVowels("JavaScript")); // "JvScrpt"
console.log(removeVowels("AEIOU")); // ""
console.log(removeVowels("ABCDe")); // "BCD"
```
#
## .reduce() 
* array method
* [MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
mdn web docs array.prototype.reduce()

## .reduce() um zu sortieren
* [repo; 21-reduce-sort/livecoding/reduce-02.js:](https://github.com/dci-fbw-wd-tz-24-d01/programming-basic/blob/main/21-reduce-sort/livecoding/reduce-02.js) 

```javascript
const mostExpensive = shoppingBasket.reduce((prev,next)=>{
   // shorter: return (prev.price > next.price) ? prev : next;
  if(prev.price  > next.price ){
      return prev;
  }
  return next;
});
```
#
## .sort() 
* array method
* [MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

* - aus der Aufgabe:
 *PB_Aufgaben/240910-pb-function-2-sort-basic:*

```javascript
function descendingRating(bookA, bookB) {
  return bookB.rating - bookA.rating;
}
let result = [...books].sort(descendingRating);
console.log(result);
```

* [Lesematerial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) kompliziert
#
## .keys()
* [MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
#
### Copied from cheatsheet
- https://clubmate.fi/array-cheat-sheet

## .push() 
* .push()	Add anything to the end of an array.	

```javascript
let a = []
let b = {}
a.push(b)
console.log(a[0] === b) // true
```

## .indexOf()	
* Finds the first index of an element. Returns -1 if not found.	

```javascript
let a = ['foo', 'bar', 'baz']
console.log(a.indexOf('baz')) // 2
console.log(a.indexOf('quix')) // -1
```



