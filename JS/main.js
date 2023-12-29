var myHttp = new XMLHttpRequest();
myHttp.open('GET', 'https://fakestoreapi.com/products');
myHttp.send();
var allItems = [];
myHttp.addEventListener('readystatechange' , function(){
    if(myHttp.readyState == 4){
     allItems = JSON.parse(myHttp.response);
     displayProduct();
    }
});

function displayProduct(){
    var cartoona = ``;
    for(var i=0; i < allItems.length; i++){
        cartoona += `
        <div class="col-md-3">
        <div class="items">
          <img class="w-100" src="${allItems[i].image}"/>
          <h1>${allItems[i].title}</h1>
          <p>${allItems[i].description}</p>
        </div>
    </div>
        ` 
    }
    document.getElementById('rowData').innerHTML = cartoona;
}