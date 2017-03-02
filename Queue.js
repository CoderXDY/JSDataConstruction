var Queue = function(){

	var q = new Array();

	this.enqueue = function(elem){

		q.push(elem);
	};

	this.dequeue = function(){

		return q.shift();
	};

	this.size = function(){
		
		return q.length;

	};

	this.isEmpty = function(){

		return q.length == 0;
	}

	this.clear = function(){

		q = new Array();
	}

	this.print = function(){

		console.log(q.toString());
	}
};

var q = new Queue();

q.enqueue(5);
q.enqueue(10);
q.enqueue(1);
q.enqueue(12);
console.log(q.size());
console.log(q.dequeue());
q.print();
q.clear();
console.log(q.isEmpty());