# Array methods
#
### repo auf Github
- [07-arrays](https://github.com/dci-fbw-wd-tz-24-d01/programming-basic/tree/main/07-arrays)
- 
#

### Nutzliche Links, weiteres Lesematerial, CHEATSHEETS !;
📚️ [w3 schools link](https://www.w3schools.com/js/js_array_methods.asp)
- [array-cheatsheet](https://clubmate.fi/array-cheat-sheet) : sehr nutzlich; durchsuchbar. N.B. besser im Brave-Browser
- [codecademy](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-arrays/cheatsheet)
#
## [.concat()](https://clubmate.fi/array-cheat-sheet?s=concat)
* array method - Create a new array from two arrays.	

```javascript
let x = ['a', 'b', 'c']
let y = ['d', 'e', 'f']
let z = x.concat(y)
console.log(z) // ['a', 'b', 'c', 'd', 'e', 'f']
```

#
## .filter() 
 *  array.filter()  => newArr ; maximal so lang wie original array (Auswahl)
 * die angewandte function ist ein Auswahlkriterium

-  Beispiele aus Aufgaben; 

PB_Aufgaben/240909-pb-function-2-filter-general:

```javascript
const cheaperThan10 = products.filter(item => item.price < 10);
console.log("Cheaper than 10:", cheaperThan10);
```
#
## [.find()](https://clubmate.fi/array-cheat-sheet?s=find)	
* Finds the first item in an array that matches.	

```javascript
let a = [5, 12, 8, 130, 44]
let b = a.find(v => v > 10)
console.log(b) // 12
```
#
## [.findIndex()](https://clubmate.fi/array-cheat-sheet?s=find)
* Like **.find()** , but instead of returning the item, it returns the index.	

```javascript
let a = [5, 12, 8, 130, 44]
let b = a.findIndex(v => v > 13)
console.log(b) // 3 
```
#
## [.flat ()](https://clubmate.fi/array-cheat-sheet?s=flat)
* array method -	Flatten a **nested** array.	

```javascript
let a = [0, 1, 2, [3, 4]]
let b = a.flat()
console.log(b) // [0, 1, 2, 3, 4]
```
#
## .flatMap()
* array method -	Same as map but it flattens the array, same as: [[]].map(v => v).flat().	

```javascript
let a = [1, 2, 3, 4]
let b = a.flatMap(v => [v * 2])
console.log() // 2, 4, 6, 8
```
#
## [.forEach()](https://clubmate.fi/array-cheat-sheet?s=foreach)
* array method - Executes a function for every element in array, does not return anything.	
```javascript
let a = [1, 2]
a.forEach(x => console.log(x))
// 1
// 2
```
### [.forEach() ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

* array.forEach() ; wie eine **for loop**  ;  macht selber (noch) nichts ; Kombi m function (ausgabe m console.log):

```javascript
array.forEach(function(){})
```
Beispielsweise (s. auch [../for-Assessment24sep24/map-filter-forEach.js](https://github.com/Marga-Lensen/for-Assessment24sep24/blob/main/map-filter-forEach.js))
```javascript
const arr = numbers.forEach((item) => console.log(item * 2));

console.log(arr);
```
#

## [.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
* aus der Aufgabe ***PB_Aufgaben/240819-pb-function-challenges-2***

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
console.log(removeVowels("JavaScript")); // "JvScrpt"
console.log(removeVowels("AEIOU")); // ""
console.log(removeVowels("ABCDe")); // "BCD"
```
#
## [.indexOf()](https://clubmate.fi/array-cheat-sheet?s=index)	
* Finds the first index of an element. Returns -1 if not found.	

```javascript
let a = ['foo', 'bar', 'baz']
console.log(a.indexOf('baz')) // 2
console.log(a.indexOf('quix')) // -1
```
#
## [.join() ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
* array method; makes string out of array
💡 useful in combination with .split() ; a string method that makes an array out of a string;
 ```javascript
string.split("").reverse().join("")
```
#
## [.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)  /   .values()   /   .entries()
* OBJECT METHODS !!!!!
#
## .map() 
*  array.map()   => newArr ; genauso lang wie original array (jedes Element w transformiert und wieder ausgegeben)
* die angewandte function macht das gleiche mit jedem element

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
## .Math.max(...array)
- Erklärung von Aria (Opera-Browser):
    Du kannst Math.max auch mit einem Array von Zahlen verwenden, indem du die ***Spread-Syntax (...)*** verwendest:

```javascript
let zahlen = [10, 5, 20, 15];
let größteZahl = Math.max(...zahlen);
console.log(größteZahl); // Gibt 20 aus
```
#
## .pop()
* array method - ***Removes*** the last element from array and returns it. Changes the length of the array.	
```javascript
let a = ['a', 'b', 'c']
console.log(a.pop()) // c
console.log(a) // ["a", "b"]
```
#
## .push() 
* .push()	***Add*** anything to the end of an array.	

```javascript
let a = []
let b = {}
a.push(b)
console.log(a[0] === b) // true
```
#
## [.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* array method
```javascript
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

```
#
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
## [.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
* array method; reverses the order of all array elements
* Anwendung auf string: **string.split("").reverse("").join("")**
#
## [.shift()](https://clubmate.fi/array-cheat-sheet?s=shift)
* array method - Like pop but ***removes*** the first element from array and returns it. Also changes the length of the array.	
```javascript
let a = ['a', 'b', 'c']
console.log(a.shift()) // a
console.log(a) // ["b", "c"]
```
#
## .slice() vs. .splice()
* slice() kopiert einen Teil des Arrays und returns den kopierten Teil als ein neues Array. Das Orginal Array wird nicht verändert.
* [.slice()](https://clubmate.fi/array-cheat-sheet?s=slice)	Returns a portion of an array selected with the start and end parameters.	
```javascript
let a = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(animals.slice(2)) // ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)) // ["camel", "duck"]
```
* [splice()](https://clubmate.fi/array-cheat-sheet?s=splice) adds oder removes elemente vom Orginalarray. Wir ändern das array.
- - **adding**
- - ***reorganizing***
- - ***removing***: Remove elements from the middle of an array. Param 1: index to start removing. Param 2: index to stop removing.	

```javascript
let a = ['a', 'b', 'c', 'd', 'e']
a.splice(1, 3)
console.log(a) // ["a", "e"]
```
#
## [.sort()]()
* array method
* .sort()	Sort numerically.	
```javascript
let a = [5, 10, 7, 1, 3, 2]
a.sort((a, b) => a - b)   // a - b : ascending; default
console.log(a) // [ 1, 2, 3, 5, 7, 10]
```
* .sort().reverse()	Sort in reversed alphabetical order.	
```javascript
let a = ['d', 'j', 'a', 'b', 'c', 'g']
a.sort().reverse()
console.log(a) // [ "j", "g", "d", "c", "b", "a"]
```
* .sort()	Descending numerical sort (flip the `a` anb `b` around).	
```javascript
let a = [5, 10, 7, 1, 3, 2]
a.sort((a, b) => b - a)
console.log(a) // [10, 7, 5 ,3, 2, 1]
```
* - aus der Aufgabe:
 *PB_Aufgaben/240910-pb-function-2-sort-basic:*

```javascript
function descendingRating(bookA, bookB) {
  return bookB.rating - bookA.rating;       // b - a : descending
}
let result = [...books].sort(descendingRating);
console.log(result);
```
#
## [.toString()](https://clubmate.fi/array-cheat-sheet?s=string)
* array method - Turn array or any other object into a string.	
```javascript
let a = ['foo', 'bar', 'baz']
a.join() // foo,bar,baz
```
# 
## .toLocaleString()
* array method -	Stringifies an array in a locale sensitive way.	
```javascript
let a = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')]
a.toLocaleString('en', { timeZone: 'UTC' }) // 1,a,12/21/1997, 2:12:00 PM
a.toLocaleString('de') // '1,a,21.12.1997, 15:12:00'
```
#
## .trim()
* entfernt Lesezeichen vor und nach String
#
## [.unshift()](https://clubmate.fi/array-cheat-sheet?s=unshift)
* array method -	Add to the beginning of array and **returns the new length of the array**.	
```javascript
let x = ['c', 'd']
x.unshift('a', 'b') // 4        // aufpassen, hier kommt x.length 
console.log(x) // ['a', 'b', 'c', 'd']    // array x ausgeben
```
