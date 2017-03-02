var Set = function(){

	var items = {};
	
	var length = 0;

	this.has = function(elem){

		return items.hasOwnProperty(elem);

	};

	this.add = function(elem){

		if(! this.has(elem)){

			items[elem] = elem;
			
			length ++;
			
			return true;
		
		}else{

			return false;
		}

	};

	this.remove = function(elem){

		if(this.has(elem)){

			if(delete items[elem]){

				length --;
				return true;
			}else return false;
		}
			
		else return false;
	};

	this.size = function(){

		return length;
	};


	this.values = function(){

		var elems = new Array();

		for(var elem in items){

			elems.push(elem);
		}

		return elems;
	};

	this.print = function(){

		console.log(this.values().toString());
	}


	this.union = function(otherSet){

		var elems = this.values();

		var other = otherSet.values();

		var result = new Set();

		for(var i = 0; i < elems.length; i ++)

			result.add(elems[i]);

		for(var i = 0; i < other.length; i ++)

			result.add(other[i]);

		return result;

	};

	this.intersection = function(otherSet){

		var result = new Set();

		var elems = this.values();

		for(var i = 0; i < elems.length; i ++){

			if(otherSet.has(elems[i]))

				result.add(elems[i]);

		}

		return result;
	};

	this.difference = function(otherSet){

		var result = new Set();

		var elems = this.values();

		for(var i = 0; i < elems.length; i ++){

			if(! otherSet.has(elems[i]))

				result.add(elems[i]);
		}


		return result;

	};

};

var set = new Set();

set.add(5);
set.add(5);
set.add(4);
set.add(32);

set.print();

set.remove(32);

console.log(set.size());

var set2 = new Set();

set2.add(6);
set2.add(4);
set2.add(1);

var result = set.union(set2);

result.print();

var set3 = new Set();

set3.add(7);
set3.add(5);
set3.add(6);

var set4 = result.intersection(set3);

set4.print();

var set5 = new Set();

set5.add(6);
set5.add(7);
set5.add(8);
set5.add(9);

var set6 = set4.difference(set5);

set6.print();