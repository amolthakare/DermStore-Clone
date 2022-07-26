var hairData = JSON.parse(localStorage.getItem("hairData"));
//console.log(data)
 
hairData.map(function(elem)
{
    var box = document.createElement("div");
    box.setAttribute("style","margin-top:40px;" );

    var img = document.createElement("img");
    img.setAttribute("src", elem.img);
    img.setAttribute("style","width:90%");

    var h4Div=document.createElement("div");
    h4Div.setAttribute("class","h4Tag")
    var head = document.createElement("h4");
    head.innerText = elem.title;

    var rating = document.createElement("h4");
    rating.innerText = elem.review;

    var price = document.createElement("h4");
    price.innerText = elem.price

   

    var btn = document.createElement("button");
    btn.innerText = "QUICK BUY";
    btn.setAttribute("style","width:100%;height:40px; color:wight; background-color: #222222; margin-top:-10px;");
    btn.addEventListener("click" ,function()
    {
      addToCard(elem);
    });

     h4Div.append(head,rating,price,btn);
    box.append(img,  h4Div);
    document.querySelector("#product").append(box);

    // document.querySelector("#num").innerText = index +1 + " " + "results";
  });
  var cartDetailsArr = JSON.parse(localStorage.getItem("cartDetails")) || [];
  function addToCard(elem){

    document.querySelector("#totalItem").innerText=cartDetailsArr.length;
    elem.quant = 1;
    cartDetailsArr.push(elem);

    localStorage.setItem("cartDetails",JSON.stringify(cartDetailsArr));
  }

  