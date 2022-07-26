var skindata = JSON.parse(localStorage.getItem("skinproduct"));

skindata.map(function(elem,index)
{
    
    var box=document.createElement("div");

    var image_url=document.createElement("img");
    image_url.setAttribute("src",elem.image_url);
    var name=document.createElement("h4");
    name.innerText=elem.name
    var gift=document.createElement("h4")
    gift.innerText="SkinCeuticals Gift";
    gift.addEventListener("click",function()
    {
        addtoc(elem)
    })
    var price=document.createElement("h4");
    price.innerText=elem.price;

    var buy=document.createElement("button");
    buy.innerText="QUICK BUY";
    buy.addEventListener("click" ,function()
    {
        addtocart(elem)
    })
    box.append(image_url,name,gift,price,buy);
    document.querySelector("#skin").append(box)
})

