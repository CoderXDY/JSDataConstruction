

var BinarySearchTree = function(){

	var Node = function(value){

		this.elem = value;
		this.left = null;
		this.right = null;

	};

	var root = null;

	this.insert = function(value){

		var node = new Node(value);

		if(root == null)
			root = node;
		else
			insertNode(root, node);

	};

	this.find = function(value){

		if(root == null)
			return false;
		else
			findNode(root, value);

	};

	this.print = function(){

		if(root == null)
			
			console.log("the BinarySearchTree is empty.");
		
		else

			printNode(root);
	}

	var insertNode = function(parent, node){

		var pos = parent;

		if(pos.elem >= node.elem){

			if(pos.left == null){

				pos.left = node;
				return;
			
			}else{

				insertNode(pos.left, node);
			}

		}else{

			if(pos.right == null){

				pos.right = node;
				
				return;
			}
			else
				insertNode(pos.right, node); 
		}

	};

	var findNode = function(parent, value){

		//

	};

	var printNode = function(node){

		if(node == null)
			return;
		
		printNode(node.left);

		console.log(node.elem);

		printNode(node.right);

	};

};

var tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);
tree.insert(6);
tree.insert(1);
tree.insert(8);
tree.insert(2);

tree.print();