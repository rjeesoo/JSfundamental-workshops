// 1.Write a function, funcCaller, that takes a func (a function) and an arg (any data type).
// The function returns the func called with arg(as an argument).

function funcCaller(func, arg){
	return func(arg);
}

// Example

var func =  function (arg){
  console.log(arg);
}

funcCaller(5,func);





// 2.Write a function, firstVal, that takes an array, arr, and a function, func, 
// and calls func with the first index of the arr, the index # and the whole array.

var firstVal = function(arr, func) {
	return func(arr[0],array.length,arr);
}


// Example

var func = function (value, index, obj)
{
  console.log(value);
  console.log(index);
  console.log(obj);
}

var myArray = [1,2,3,4,5,6,7,8,9];

firstVal(myArray,func);




// 3.Change firstVal to work not only with arrays but also objects. 
// Since objects are not ordered, you can use any key-value pair on the object.

var firstVal = function(obj, func) {
	if (Array.isArray(obj)) {
		func(obj[0], 0, obj);
	} else if (typeof obj === "object") {
		var count = 0;
		var node = true;
		var firstObj = 0;
		for (var key in obj) {
			if (node) {
				firstObj = obj[key];
				node = false;
			}
			count++;
		}
		return func(firstObj,count,obj);
	}
};

// Example

var func = function (value, index, obj)
{
  console.log(value);
  console.log(index);
  console.log(obj);
}

var myObj =  {0: 'A',
  1: 'B',
  2: 'C',
  3: 'D'
};
/*
var myObj =  {'a': 'A',
  'b': 'B',
  'c': 'C',
  'd': 'D'
};
*/
firstVal(myObj,func);

var myArray = [1,2,3,4,5,6,7,8,9];

firstVal(myArray,func);




// 4.[Extra Credit] Write a function, once, (see: http://underscorejs.org/#once) 
// that takes a function and returns a version of that function which can only be called once. 
// [Hint: you need a closure] You probably don't want to be able to 
// double charge someone's credit card. Here is an example of how to use it:
/*
	var chargeCreditCard = function(num, price){
		charges credit card for a certain price
  	};
	var processPaymentOnce = once(chargeCreditCard);
	processPaymentOnce(123456789012, 200);
*/

/* underscorejs - Once
_.once(function) 
Creates a version of the function that can only be called one time. Repeated calls to the modified function will have no effect, returning the value from the original call. Useful for initialization functions, instead of having to set a boolean flag and then check it later.
var initialize = _.once(createApplication);
initialize();
initialize();
// Application is only created once.
*/


function once(callback) {
	var first = true;
	function firstOpperation() {
		if (first) {
			first = false;
			return callback.apply(this, arguments);
		} else {
			console.log("This function has been called before")
		}
	}
	return firstOpperation;
}

//Example

  var chargeCreditCard = function(num, price){
    console.log(num*price);
  };
  var processPaymentOnce = once(chargeCreditCard);
  processPaymentOnce(123456789012, 200);
  processPaymentOnce(123456789012, 200);
  processPaymentOnce(123456789012, 201);