    
    var cart=JSON.parse(localStorage.getItem("cartDetails")) ||[];
    console.log(cart);

    function cardDetails(cart)
    {
        cart.map(function(elem,index){
        
            document.querySelector("#maindata").innerHTML="";
            var row = document.createElement("tr");
    
            var title = document.createElement("td");
            title.innerText = elem.title;
    
            var price = document.createElement("td");
            price.innerText = elem.price;
            price.setAttribute("id", "str")
    
            var quantity = document.createElement("td");
            
            var div = document.createElement("div");
            div.setAttribute("id", "qty1")
    
            var div1 = document.createElement("div");
            div1.innerText = "-";
            div1.setAttribute("id", "min")
            div1.addEventListener("click",function()
            {
            decreaseItem(index);
    
            });
    
            var div2 = document.createElement("div");
            div2.innerText =elem.quant;
            div2.setAttribute("id", "value")
    
            var div3 = document.createElement("div");
            div3.innerText = "+";
            div3.setAttribute("id", "max");
            div3.addEventListener("click",function(){
    
                increaseItem(index);
             });
    
            div.append(div1, div2, div3)
            quantity.append(div)
    
     
            var subTotal = document.createElement("td");
            subTotal.setAttribute("id", "sub")
            
    
           var removeDetails = document.createElement("td");
            removeDetails.innerText = "x"
             row.append(title, price, quantity,subTotal, removeDetails);
            document.querySelector("#maindata").append(row)
    });
    
    }
    cardDetails(cart);

function decreaseItem(index)
{
    if(cart[index].quant>1)
    {
        cart[index].quant--;
    }
    localStorage.setItem("cardDetails",JSON.stringify(cart));
    cardDetails(cart);
    totalDetails();


}
function increaseItem(index)
{
    cart[index].quant++;
    
    localStorage.setItem("cardDetails",JSON.stringify(cart));
    cardDetails(cart);
    totalDetails();
   
}

 // . for sub total..........................................................

function totalDetails()
{
    
    var total=cart.reduce(function(acc,elem){
        var price=elem.price;
        let arr=price.split("");
        arr.splice(0,1);
        let x=+arr.join("");
        return acc+(x)*elem.quant;
    },0);
    console.log(total);
    document.querySelector("#sub").innerText="$."+total+".00";
}
totalDetails();

 // . for sub total..........................................................

document.querySelector("#cupanButton").addEventListener("click",applyPromo);
    
function applyPromo()
 {
    var promo=document.querySelector("#descountCupon").value;
        if(promo=='masai30')
        {
            var total=cart.reduce(function(acc,elem){
                var price=elem.price;
                let arr=price.split("");
                arr.splice(0,1);
                let x=+arr.join("");

                return (acc+((x)*elem.quant)*30)/100;
            },0);
          
        }
        else{
            var total=cart.reduce(function(acc,elem){
                var price=elem.price;
                let arr=price.split("");
                arr.splice(0,1);
                let x=+arr.join("");
                return acc+(x)*elem.quant;
            },0);
        }
        
        document.getElementById("total").innerText="$."+total;
        // cardDetails(cart);
        
}
document.querySelector("#checkout").addEventListener("click",function(){

    window.location.href="paymentGetWay.html";
})


