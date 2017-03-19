var productContainer = document.getElementById("productContainer"); 

    function productDom(xhrData) {
        var productString = "";
        var currentProduct;
        for (var i = 0; i < xhrData.products.length; i++) {
        currentProduct = xhrData.products[i];

        productString += `<div class="col-sm-6 col-md-4">`;
        productString += `<h3>${currentProduct.name}</h3>`;
        productString += `<p>is a ${currentProduct.price}</p>`;
        // productString += `<p>is a ${currentProduct.category_id}</p>`;
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
        departmentString += `<h3>${currentDepartment.name}</h3>`;
        departmentString += `<p>is a ${currentDepartment.season_discount}</p>`;
        departmentString += `<p>is a ${currentDepartment.discount}</p>`;
        departmentString += `</div></div></div>`;

        departmentContainer.innerHTML = departmentString;

    };
}

function useIfWorks() {

    var data = JSON.parse(this.responseText);
    productDom(data);
    console.log(xhrData);
}

function useIfDoesntWork() {


}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", useIfWorks);
myRequest.addEventListener("error", useIfDoesntWork);
myRequest.open("GET", "department.json");
myRequest.send();

var myRequestTwo = new XMLHttpRequest();
myRequestTwo.addEventListener("load", useIfWorks);
myRequestTwo.addEventListener("error", useIfDoesntWork);
myRequestTwo.open("GET", "main.json");
myRequestTwo.send();