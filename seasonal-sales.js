var departments =[];
var products = [];

var dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", function(event){
    var optionsArray = event.target.options;
    var selecctedOption = optionsArray[event.target.options.selectedIndex];
    productDom(selecctedOption.value);
});


var productContainer = document.getElementById("productContainer");

function productDom(discountSeason) {
    var productBuilder = "";
    var currentProduct;
    for (var i = 0; i < products.length; i++) {
        currentProduct = products[i];

        productBuilder += `<div class="col-sm-6 col-md-4">`;
        productBuilder += `<h3>${currentProduct.name}</h3>`;
        productBuilder += `</div>`;
    if(discountSeason === products[i].catagory_season_discount){
        productBuilder += `<div class="price">${products[i].season_price}</div>`
    }
        else {
            productBuilder += `<div class="price">${products[i].price}</div>`
        }
    }

        productContainer.innerHTML = productBuilder;

    };




function useForProducts() {

    products = JSON.parse(this.responseText).products;
    products.forEach(function(product){
            for(var j = 0; j < departments.length; j++){
                if(product.category_id === departments[j].id){
                    product["catagory_name"] = departments[j].name;
                    product["catagory_discount"] = departments[j].discount;
                    product["catagory_season_discount"] = departments[j].season_discount;
                    product["season_price"] = product.price-(product.price * departments[j].discount)
                }

            }
        });

    productDom("none");

}



function useForDepartment() {

    departments = JSON.parse(this.responseText).departments;
    productXHR();
}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", useForDepartment);
myRequest.open("GET", "department.json");
myRequest.send();

function productXHR(){
    var myRequestTwo = new XMLHttpRequest();
    myRequestTwo.addEventListener("load", useForProducts);
    myRequestTwo.open("GET", "main.json");
    myRequestTwo.send();

}























