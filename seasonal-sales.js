
var productContainer = document.getElementById("productContainer");

function productDom(xhrData) {
    var productString = "";
    var currentProduct;
    for (var i = 0; i < xhrData.products.length; i++) {
        currentProduct = xhrData.products[i];

        productString += `<div class="col-sm-6 col-md-4">`;
        productString += `<h3><br><br>${currentProduct.name}<br></h3>`;
        productString += `<p>${currentProduct.price}</p>`;
        productString += `</div></div></div>`;

        productContainer.innerHTML = productString;

    };
}

var departmentContainer = document.getElementById("departmentContainer");

function departmentDom(xhrData) {
    var departmentString = "";
    var currentDepartment;
    for (var j = 0; j < xhrData.categories.length; j++) {
        currentDepartment = xhrData.categories[j];

        departmentString += `<div class="col-sm-6 col-md-4">`;
        departmentString += `<h1>${currentDepartment.name}</h1>`;
        departmentString += `<p><button class="discount"id="discount-${currentDepartment.season_discount}">${currentDepartment.season_discount}</button></p>`;
        departmentString += `</div></div></div>`;

        departmentContainer.innerHTML = departmentString;

    };
    discountInfo();
}

function useIfWorks() {

    var data = JSON.parse(this.responseText);
    productDom(data);

}



function useForDepartment() {

    var data = JSON.parse(this.responseText);
    departmentDom(data);

}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", useForDepartment);
myRequest.open("GET", "department.json");
myRequest.send();

var myRequestTwo = new XMLHttpRequest();
myRequestTwo.addEventListener("load", useIfWorks);
myRequestTwo.open("GET", "main.json");
myRequestTwo.send();

function discountInfo() {

var sDiscount = document.getElementsByClassName("discount");
for (var k = 0; k < sDiscount.length; k++) {
sDiscount[k].addEventListener("click", seasonalDiscount);
}

        var winter = "";
        function seasonalDiscount(season) {
            if (season.value === winter.getElementById(1)); {
                
            console.log(season);
        }
    }

}

























