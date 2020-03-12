'use strict';

// YOU KNOW WHAT TO DO //


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
  * @return {Array}: The array.
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
 * @return {Number} index: The index of the value within the input array.
 * 
 * @return {Number} -1 : The number that will be returned if the input value
 *                          is not within the array.
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
 * unique: takes in an array and, using a for loop and the indexOf function, 
 * will return a new array that contains all the unique elements within
 * the input array.
 * 
 * @param {Array} array: An array.
 * 
 * @return {Array} newArr: A new array of all elements that are unique to the
 * original input array.
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
 * element, index, and the entire collection, using the function named each. 
 * If an element resolves to true, that will be added to a new array. Once all
 * elements are tested, the new array will be returned.
 * 
 * @param {Array} array: An array.
 * 
 * @param {Function} test: A function.
 * 
 * @return {Array} newArr: An array of all elements that resolve to true after
 * being invoked by the input test function.
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
 * reject: takes in an array and a function and calls that <function> for each
 * element, index, and the entire collection, using the function named each. 
 * If an element resolves to false, that will be added to a new array. Once all
 * elements are tested, the new array will be returned.
 * 
 * @param {Array} array: An array.
 * 
 * @param {Function} test: A function.
 * 
 * @return {Array} newArr: An array of all elements that resolve to false after
 * being invoked by the input test function.
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
 * partition: takes in an array and a function and returns a single array, which
 * is made up of two sub-arrays. The first sub-array is made up of all elements
 * that are truthy after being passed through the input function. The second 
 * sub-array is made up of all elements that resolve to a falsy value.
 * 
 * @param {Array} array: An array.
 * 
 * @param {Function} test: A function.
 * 
 * @return {Array} result: An array of two sub-arrays, one for truthy values and
 * one for falsy values.
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
  * map: takes in a collection and a function and returns an array of all of
  * return values of each element once passed through the input function.
  * 
  * @param {Array or Object} collection: An array or object.
  * 
  * @param {Function} test: A function.
  * 
  * @return {Array} resultArr: An array of all the returned elements after
  * being passed through the test function.
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
 * pluck: takes in an array of objects and a string. It loops through each
 * object to see if that string is a key in any of the objects. If the key
 * does exist, the value is pushed into an array. Once complete, the function
 * will return an array of all the values that are at that key within
 * the respective objects.
 * 
 * @param {Array} collection: An array of objects.
 * 
 * @param {String} property: A string that will be used to see if the input
 * object has the string as a property within the object.
 * 
 * @return {Array} collection[property] : An array of all values within the array
 * of objects, if an object has the input property as a property within 
 * the respective object.
 * 
 */
 
 function pluck(collection, property) {
    
    return map(collection, function (collection, index) {
        
        return collection[property];
    })
    
    
}

  module.exports.pluck = pluck;

/**
 * every: takes in a collection and a function and calls upon each element in
 * the collection and if all of the returned values are true, will return true.
 * If any of the returned values resolve to false, it will return false. If a
 * test function is not provided, the collection will be looped over and will
 * return true if all values are truthy. If any values are false, it will return
 * false.
 * 
 * @param {Array or Object} collection: An array or object.
 * 
 * @param {Function} test: A function.
 * 
 * @return {Boolean} true or false
 * 
 */
 
 function every(collection, test) {

    if (typeOf(test) === "function") {

        let arrWFunc = map(collection, function(e, i , c){
        return test(e, i, c)
        })

        if (contains(arrWFunc, false)) {
            return false;
        } else {
            return true;
        }
    } else {

        let arrWOFunc = map(collection, function(e, i, c){
            if(e){
                return true;
            } else {
                return false;
            }
        })

         if (contains(arrWOFunc, false)) {
            return false;
        } else {
            return true;
        }
    }
}

module.exports.every = every;

/**
 * some: takes in a collection and a function and calls that function for each
 * element. Returns a boolean of true if any or all of the elements resolve to 
 * true after the function call. If no test function is provided, the collection
 * will be looped over and return true if any or all values are truthy. If all
 * values are false, it will return false.
 * 
 * @param {Array or Object} collection: An array or object.
 * 
 * @param {Function} test: A function.
 * 
 * @return {Boolean} true or false
 * 
 * 
 */
 
 function some(collection, test) {
 
  
    if (typeOf(test) === "function") {

        let arrWFunc = map(collection, function(e, i , c){
        return test(e, i, c)
        })
    
        if (contains(arrWFunc, true)) {
            return true;
        } else {
            return false;
        }
    } else {
 
        let arrWOFunc = map(collection, function(e, i, c){
            if(e){
                return true;
            } else {
                return false;
            }
        })

         if (contains(arrWOFunc, true)) {
            return true;
        } else {
            return false;
        }
    }
 
}

module.exports.some = some;

/**
 * reduce: takes in a collection, a function and a seed and returns a single
 * value after looping all elements within that collection. The callback function
 * takes in the arguments of previousResults, element, and index. Each time the
 * callback function is returned, that return value becomes the previousResult
 * for the next iteration. If no seed is given in the initial funciton call, the
 * first element of the collection will take on the value of the previousResult.
 * After the last function iteration, the final value of previousResult will
 * be returned.
 * 
 * @param {Array or Object} collection: An array or collection.
 * 
 * @param {Function} test: A function.
 * 
 * @param {A value} seed: A seed.
 * 
 * @return {A value} previousResult
 * 
 * 
 */
 
 function reduce(collection, test, seed) {
    // if there is a seed
    let previousResult;
    if(seed !== undefined) {
        previousResult = seed;
        each(collection, function(e, i, a){
            previousResult = test(previousResult, e, i, a);
        })
    } else {
        previousResult = collection[0];
        for(let i = 1; i < collection.length; i++) {
            previousResult = test(previousResult, collection[i], i, collection);
        }
    }
    
    return previousResult;
    
    
}

module.exports.reduce = reduce;

/**
 * extend: takes in one object and multiple other objects and updates the first
 * object's value with another object's value if they have the same key. If a
 * key does not exist in the first object, the key/value pair will be added to 
 * the first object. The completely updated object will be returned.
 * 
 * @param {Object} object1: An object.
 * 
 * @param {Object} ...objects: An array of objects.
 * 
 * @return {Object} object1: The updated object.
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