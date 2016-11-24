var thenum;
var product;

window.onload = function() {
	cardTitle();
	clicky();
};
// };
// function productt() {
// 	for (var key in products) {
// 	   if (products.hasOwnProperty(key)) {
// 	      	var obj = products[key];
// 	      for (var prop in obj) {
// 	         if (obj.hasOwnProperty(prop)) {
// 	            // console.log(prop + " = " + obj[prop]);
// 	            // console.log(obj.price);
// 	            // var _price = obj.price;
// 	            // thenum = _price.match(/\d+/)[0];
// 	            // listen('click', product, transfer);           
// 	            product = obj[prop];
// 	 			// transfer(product);
// 	         }
//          }
//       }
// 	}
// }

// function cards() {
// 	var ul, li, i;
// 	ul = document.getElementById('pdt');
//     li = ul.getElementsByTagName("li");
//     	for (i = 0; i < li.length; i++) {
//     		listen('click', li[i], transfer);
//     		transfer(li[i]);
//     		console.log(li[i]);
//     	}
// }
function cardTitle() {
	var ul, h3, i;
	ul = document.getElementById('pdt');
	h3 = ul.getElementsByTagName('h3');
		for (i = 0; i < h3.length; i++) {
			listen('click', h3[i], transfer);
			transfer(h3[i]);
		}
}
function transfer(card) {
	var grid, productNum, obj;
	open();
	console.log('tranfer()');
	 productNum = card.innerHTML.match('/\d+/')[0];
	 console.log(productNum);
	for (var key in products) {
	   if (products.hasOwnProperty(key)) {
	      	obj = products[key];
      }
      if (productNum == obj.id) {
      	grid = document.getElementById('grid1');
      	grid.getElementsByTagName('p')[0].value = obj.title;
      	grid.getElementsByTagName('p')[1].value = obj.price;
      	grid.getElementsByTagName('p')[2].value = obj.desc;
      }
	}


	// console.log(product);
	// var like, tired;
	// var its = listItem.foreach(getElementsByTagName('h3').value.match(/\d+/)[0]);
		// var nice = listItem.getElementsByTagName('h3');
		// for (i = 0; i < nice.length; ++i) {
	 //    var newValue = nice[i].innerHTML.match(/\d+/)[0];

	// }
	// var listItem = thenum.getElementsByTagName('li');
	// console.log(listItem);


}

function clicky() {
	var closeBtn = document.getElementById('close');
	listen('click', closeBtn, close);
}
function close() {
	document.getElementById('grid1').style.display = "none";
}

function open() {
    document.getElementById('grid1').style.display = 'block'; // Show;
}


 function filter() {
	var _selected, se, op, p, list, ul, li, plus;
	var e = document.getElementById("mySelect");
	console.log(e.selectedIndex);
    	ul = document.getElementById('pdt');
    	li = ul.getElementsByTagName("li");
    		console.log(li.length);
    		for (plus = 0; plus < li.length; plus++) {
    			console.log(li[plus]);
    			p = li[plus].getElementsByTagName('p')[0].innerText.match(/\d+/)[0];
    			// p = li[plus].getElementsByTagName('p')[0];
    			// console.log(p.innerHTML.match(/\d+/)[0]);
    			if(e.selectedIndex == 0) {
    					li[plus].style.display = "";
    			}
    			if(e.selectedIndex == 1) {
    				if (p < 500) {      
    					li[plus].style.display = "";
    				} else {
    					li[plus].style.display = "none";
    				}
    			}
    			if(e.selectedIndex == 2) {
    				if (p <= 1000) {
    					li[plus].style.display = "";
    				} else {
    					li[plus].style.display = "none";
    				}
    			}
    			if(e.selectedIndex == 3) {
    				if (p <= 2000) {
    					li[plus].style.display = "";
    				} else {
    					li[plus].style.display = "none";
    				}
    			}
    			if(e.selectedIndex == 4) {
    				if( p > 2000) {
    					li[plus].style.display = "";
    				} else {
    					li[plus].style.display = "none";
    				}
    			}

    		}
	}	

	
