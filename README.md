# Array methods
#
### repo auf Github
- [07-arrays](https://github.com/dci-fbw-wd-tz-24-d01/programming-basic/tree/main/07-arrays)
- 
#

### weiteres Lesematerial;
📚️ [w3 schools link](https://www.w3schools.com/js/js_array_methods.asp)
- [array-cheatsheet](https://clubmate.fi/array-cheat-sheet)
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
## [.forEach() ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* array.forEach() ; wie eine **for loop**  ;  macht selber (noch) nichts ; Kombi m function (ausgabe m console.log):

```javascript
array.forEach(function(){})
```
Beispielsweise (s. auch ../for-Assessment24sep24/map-filter-forEach.js)
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
## [.indexOf()](https://clubmate.fi/array-cheat-sheet)	
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
## .push() 
* .push()	Add anything to the end of an array.	

```javascript
let a = []
let b = {}
a.push(b)
console.log(a[0] === b) // true
```
#
## .reduce() 
* [array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
mdn web docs array.prototype.reduce()
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
#
## .slice() vs. .splice()
* slice() kopiert einen Teil des Arrays und returns den kopierten Teil als ein neues Array. Das Orginal Array wird nicht verändert.
* splice() adds oder removes elemente vom Orginalarray. Wir ändern das array.
#
## [.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* array method
* [MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort):
 kompliziert

* - aus der Aufgabe:
 *PB_Aufgaben/240910-pb-function-2-sort-basic:*

```javascript
function descendingRating(bookA, bookB) {
  return bookB.rating - bookA.rating;
}
let result = [...books].sort(descendingRating);
console.log(result);
```
#
## .trim()
* entfernt Lesezeichen vor und nach String