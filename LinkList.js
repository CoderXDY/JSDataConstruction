/**
a linkList
*/

var LinkList = function(){

	var ptr = {
		value : "",
		next : null
	};

	return {
		append : function(elem){

			var pos = ptr;

			while(pos.next != null)
				pos = pos.next;

			pos.next = {
				value : elem,
				next : null
			};

		},
		remove : function(elem){

			var pre = ptr,
				pos = ptr.next;

			if(pos == null) return false;


			if(pos.next == null){

				if(pos.value == elem){
					
					ptr.next = null;
					return true;
				
				}else{
					return false;
				}
			}

			while(pos.next != null){

					if(pos.value == elem){
						
						pre.next = pos.next;
						pos = null;	
						return true;
					
					}else{
						pos = pos.next;
						pre = pre.next;
					}

			}

			if(pos.value == elem){

				pre.next = null;
				pos = null;
				return true;

			}else{
				return false;
			}



		},
		print : function(){

			var pos = ptr;

			while(pos.next != null){

				pos = pos.next;
				console.log(pos.value);
			}

		}
	};

};
