'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * 
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: takes in a given value and returns that value, unaltered.
 * 
 * @param {Any Datatype} value: Any value, any datatype, to be returned as 
 * itself.
 * 
 * @return {Any Datatype}: Any value, any datatype as determined from our 
 * input value. If passsed in an even number, return "High Ho Silver"
 */
 
function identity (value) {
    return value
}
module.exports.identity = identity;

/**
 * typeOf: Designed to take in any value and return the data type of
 * that value as a string
 * 
 * @param {Any Datatype} value: Any value, any datatype, with it's datatype
 * returned as a string.
 * 
 * @return {String}: The datatype of the input value.
 */
 
 function typeOf (value) {
    if(Array.isArray(value) === true) {
        return "array"
    } else if(value === null) {
        return "null";
    } return typeof value;
 }
 
 module.exports.typeOf = typeOf;
 
 /**
  * first: takes in an array and a number and returns the first <number>
  * elements of that array. So if the number is 2, first will return the 
  * first two elements of the array. If <array> is not an array, it will
  * return an empty array. If <number> is not given or is not a number, 
  * first will return just the first element of the array.
  * 
  * @param {Array} array: An array.
  * 
  * @param {Number} number: Any number.
  * 
  * @return {Array}: The array
  * 
  */
  
function first(array, number) {
    let arr = [];
    if(typeOf(array) === "array" && typeOf(number) === "number") {
        if(number < 0) {
            return arr;
        } else if(number > array.length) {
            return array
        } else {for(let i = 0; i < number; i++) {
            arr.push(array[i]);
        } return arr;}
    } else if (typeOf(array) !== "array") {
        return arr
    } else return array[0]
}

 module.exports.first = first;

/**
 * last: takes in an array and a number and returns the last <number> of elements
 * of that <array>. If the inputs are either not an array or number, or the 
 * <number> is negative, the function will return an empty array. If the <number> 
 * is greater than the length of the array, it will return the full <array>.
 *  
 * @param {Array} array: An array.
 * 
 * @param {Number} number: A number.
 * 
 * @return {Array}: The array
 * 
 */
 
 function last(array,number) {
    let arr = [];
    if(typeOf(array) === "array" && typeOf(number) === "number") {
        if(number < 0) {
            return arr;
        } else if(number > array.length) {
            return array
        } else {for(let i = array.length - 1; i >= number - 1; i--) {
            arr.unshift(array[i]);
        } return arr;}
    } else if (typeOf(array) !== "array") {
        return arr
    } else return array[array.length - 1]; 
    
    
    
}

module.exports.last = last;

/**
 * indexOf:takes in an array and a value and if that value is within the <array>,
 * it will return the index of that element. If the <value> is not within the 
 * <array>, the function will return -1.
 * 
 * @param {Array} array: An array.
 * 
 * @param {Value} value: A value:
 * 
 * @return {Index} i
 * 
 * @return {-1} 
 * 
 */
 
function indexOf(array, value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i
        }
    }
    return -1
}

module.exports.indexOf = indexOf;

/**
 * contains: takes in an array and a value and, using the indexOf function, 
 * will return true if that value is within the array and false otherwise.
 * 
 * @param {Array} array: An array.
 * 
 * @param {Value} value: A value.
 * 
 * @return {Boolean} true or false
 * 
 * 
 * 
 */
 
function contains(array,value) {
    
    return (indexOf(array, value) !== -1 ? true : false)
}

module.exports.contains = contains;

/**
 * each: takes in either an array or object and any function and calls that
 * function for each element in the <array> or each property in the 
 * <object>.
 * 
 * @param {Array or Object} collection: An array or object.
 * 
 * @param {Function} test: Any function.
 * 
 * 
 */
 
 function each(collection, test) {
    if(typeOf(collection) === "array") {
        for(let i = 0; i < collection.length; i++) {
            test(collection[i], i, collection);
        }
    } else for(var key in collection) {
        test(collection[key], key, collection);
    }
}

module.exports.each = each;

/**
 * unique: takes in an array and, using a for loop and the indexOf function, 
 * will return a new array that contains all the unique elements within
 * the input array.
 * 
 * @param {Array} array: An array.
 * 
 * @return {Result Array}
 */
 
function unique (array) {
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
    if(indexOf(newArr, array[i]) === -1) {
        newArr.push(array[i]);
    }
    } return newArr;
}

module.exports.unique = unique;



/**
 * filter: takes in an array and a function and calls that <function> for each
 * element in that array, using the function named each. If an element 
 * resolves to true, that will be added to a new array. Once all elements 
 * are tested, the new array will be returned.
 * 
 * @param {Array} array: An array.
 * 
 * @param {Function} test: A function.
 * 
 * @return {Result Array} 
 * 
 */
 
function filter(array, test) {

let newArr = [];

let myFunction = function(element, index, array) {
    if(test(element, index, array)) {
        newArr.push(element);
    }
}    
    
each(array, myFunction);
     
     return newArr;
}

module.exports.filter = filter;

/**
 * reject:
 * 
 * @param {Array} array: An array.
 * 
 * @param {Function} test: A function.
 * 
 * @return {Result Array} newArr
 * 
 */
 
 function reject(array, test) {
    let newArr = [];
    
    let myFunction = function(element, index, array) {
        if(!test(element, index, array)) {
            newArr.push(element);
        }
   
    }
    filter(array, myFunction);
    
    return newArr;
}

module.exports.reject = reject;

/**
 * partition:
 * 
 * @param {Array} array: An array.
 * 
 * @param {Function} test: A function.
 * 
 * @return {Reult Array} result: The result array.
 * 
 */
 
 function partition(array, test) {
     
    let result = [];
    
    let truthy = filter(array, test);
    let falsy = reject(array, test);
    
    result.push(truthy);
    result.push(falsy);
    
    return result;
     
     
     
 }
 
 module.exports.partition = partition;
 
 /**
  * map:
  * 
  * @param {Array or Object} collection: An array or object.
  * 
  * @param {Function} test: A function.
  * 
  * @return {Result Array} resultArr
  * 
  */
  
  function map(collection, test) {
      
    let resultArr = [];
    each(collection, function(element, index, collection) {
        resultArr.push(test(element, index, collection));
    })
    return resultArr;
     
  }
  
  module.exports.map = map;
  
/**
 * pluck:
 * 
 * @param {Array or Object} collection: An array or object.
 * 
 * @param {Property} property: A property.
 * 
 * @return {Value} collection[property]
 * 
 */
 
 function pluck(collection, property) {
    
    return map(collection, function (collection, index) {
        
        return collection[property];
    })
    
    
}

  module.exports.pluck = pluck;

/**
 * every:
 * 
 * @param {Array or Object} collection: An array or object.
 * 
 * @param {Function} test: A function.
 * 
 * @return {test or true or false}
 * 
 */
 
 function every(collection, test) {
    //check if <test> is a function
    if (typeOf(test) === "function") {
        // if it's a function
        // run map on it, calling test on the element, index, collection
        let arrWFunc = map(collection, function(e, i , c){
        return test(e, i, c)
        })
        // set up if statement to check if array contains false
        // if it contains false, return false
        // else return true
        if (contains(arrWFunc, false)) {
            return false;
        } else {
            return true;
        }
    } else {
        // if it's not a function
        // using map:
        // return true if element is truthy, otherwise return false
        let arrWOFunc = map(collection, function(e, i, c){
            if(e){
                return true;
            } else {
                return false;
            }
        })
        // set up if statement to check if array contains false
        // if it contains false, return false
        // else return true
         if (contains(arrWOFunc, false)) {
            return false;
        } else {
            return true;
        }
    }
}

module.exports.every = every;

/**
 * some:
 * 
 * @param {Array or Object} collection: An array or object.
 * 
 * @param {Function} test: A function.
 * 
 * @return {test or true or false}
 * 
 * 
 */
 
 function some(collection, test) {
 
     //check if <test> is a function
    if (typeOf(test) === "function") {
        // if it's a function
        // run map on it, calling test on the element, index, collection
        let arrWFunc = map(collection, function(e, i , c){
        return test(e, i, c)
        })
        // set up if statement to check if array contains false
        // if it contains false, return false
        // else return true
        if (contains(arrWFunc, true)) {
            return true;
        } else {
            return false;
        }
    } else {
        // if it's not a function
        // using map:
        // return true if element is truthy, otherwise return false
        let arrWOFunc = map(collection, function(e, i, c){
            if(e){
                return true;
            } else {
                return false;
            }
        })
        // set up if statement to check if array contains false
        // if it contains false, return false
        // else return true
         if (contains(arrWOFunc, true)) {
            return true;
        } else {
            return false;
        }
    }
 
}

module.exports.some = some;

/**
 * reduce:
 * 
 * @param {Array or Object} collection: An array or collection.
 * 
 * @param {Function} test: A function.
 * 
 * @param {A value} seed: A seed.
 * 
 * @return {Result} previousResult
 * 
 * 
 */
 
 function reduce(collection, test, seed) {
    // if there is a seed
    let previousResult;
    if(seed !== undefined) {
        previousResult = seed;
        // use each to gain access to each value in the array
        each(collection, function(e, i, a){
            // calling function for every element, passing in previous, element
            previousResult = test(previousResult, e, i, a);
            
        })
        // if there is no seed
    } else {
        // use the first element of the array as the seed
        previousResult = collection[0];
        // implement a for loop to start iterating at my first index
        for(let i = 1; i < collection.length; i++) {
            previousResult = test(previousResult, collection[i], i, collection);
        }
        
        
    }
    
    return previousResult;
    
    
}

module.exports.reduce = reduce;

/**
 * extend:
 * 
 * @param {Object} object1: An object.
 * 
 * @param {Object} ...objects: An array of objects.
 * 
 *
 */
 
 function extend(object1, ...objects) {
    for(let i = 0; i < objects.length; i++) {
        for(var key in objects[i]) {
            object1[key] = objects[i][key];
        }
        
    }
    return object1;
}

module.exports.extend = extend;