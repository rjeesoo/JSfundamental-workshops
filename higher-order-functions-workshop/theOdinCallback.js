function myEach(array, callback) {
	array.forEach(function(item){
		callback(item);
	})
}

function myMap(array, callback) {
	var newArray = [];
	function pushFunction(a){
		newArray.push(callback(a));
		return newArray;
	}
	myEach(array,pushFunction);
/*	array.forEach(function(item){
		newArray.push(callback(item));
		return newArray
	})*/
	return newArray;
}

myMap([1,2,3,4], function(item){
  return item * 2;
});
