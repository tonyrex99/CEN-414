
 var sub_total = 0;
 var cartitem = 0;
 var cart = {};
$(document).ready(function() {
   

drawcart();

    

    $("#empty-cart").click(function() {
        cart = {};
        localStorage.setItem("cart", JSON.stringify(cart));
		
    });



});
function drawcart(){
    sub_total = 0;
    cartitem = 0;
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
    let tbody = $("#tbody");
	tbody.empty();

    for (let id in cart) {
        let item = cart[id];
        if (item.qty == 0) {
            delete cart[id];
            localStorage.setItem("cart", JSON.stringify(cart));

        }
        let tr = $("<tr></tr>");
		
		let icon_td = $("<td></td>").prepend(`<img class="card-img-top" ` + `src="` + item.icon + `" style="width:70px; height:70px;">`);
        tr.append(icon_td);
		
        let title_td = $("<td></td>").text(item.title);
        tr.append(title_td);

        let price_td = $("<td></td>").text("₦ " + item.price.toLocaleString("en-US"));
        tr.append(price_td);

        if (item.qty < 10) {

            var qty_td = $("<td></td>").text(item.qty + ` .`);
        } else {
            var qty_td = $("<td></td>").text(item.qty);
        }
        qty_td.prepend(` <span class="badge badge-primary" target="reduce" data-id="` + id + `">&minus;</span>  `);
        qty_td.append(` <span class="badge badge-primary" target="increase" data-id="` + id + `">&plus;</span>`);
        tr.append(qty_td);


        let total_td = $("<td></td>").text("₦ " + item.total.toLocaleString("en-US"));
        tr.append(total_td);

        let delete_td = $("<td></td>").text(`Delete`);
        delete_td.attr("data-id", id);
        delete_td.attr("deleter", "delete");
        delete_td.addClass("btn btn-outline-danger");
        delete_td.attr("style", "font-size: 20px;text-align: center;border: none;");
        tr.append(delete_td);

        tbody.append(tr);
           sub_total += item.total;
       cartitem = cartitem + Number(cart[id].qty);
	

   
    }
	 console.log("There are " + cartitem + " items in cart");
    if (cartitem != 0) {
        $("#cartbadge").text(cartitem);
    }else{
		$("#cartbadge").empty();
	}
	
	$("[target='reduce']").click(function() {
        let value = $(this).attr("data-id");
        qtychanger(value, "reduce");
    });

    $("[target='increase']").click(function() {
        let value = $(this).attr("data-id");
        qtychanger(value, "increase");
    });
	
	$("[deleter='delete']").click(function() {
        let value = $(this).attr("data-id");
        delete cart[value];
        localStorage.setItem("cart", JSON.stringify(cart));
     drawcart();
    });
  
   $("#stotal").text("₦ " + sub_total.toLocaleString("en-US"));
}	
    function qtychanger(value, type) {
        (type == "increase") ? cart[value].qty++ : cart[value].qty--;
        cart[value].total = cart[value].price * cart[value].qty;
        if (cart[value].qty == 0) {
            delete cart[value];
        }
        localStorage.setItem("cart", JSON.stringify(cart));
       drawcart();
    }