$(document).ready(function(){
let cart = {};



if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

var item=0;	
	
    for(id in cart){
		
		item =item + Number(cart[id].qty);
		
	}
	if(item !=0){
	$("#cartbadge").text(item);  
	}
console.log("There are "+item+" items in cart");

		$("[product]").click(function(){
	
    let price = Number($(this).attr("data-price"));
    let title = $(this).attr("data-title");
    let id = $(this).attr("data-id");
	let icon = $(this).attr("data-icon");

if (id in cart) {
	
    cart[id].qty++;
	cart[id].total = cart[id].qty * cart[id].price;
} else {
	
    let cartItem = {
		icon:  icon,
        title: title,
        price: price,
        qty: 1,
		total: price
    };
    cart[id] = cartItem;
}
 
	item++;
	$("#cartbadge").text(item); 
	
    console.log(cart);


    localStorage.setItem("cart", JSON.stringify(cart));
	
    	
});

		});