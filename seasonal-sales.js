var productContainer = document.getElementById("productContainer"); {

    function productDom(xrhData) {
        var productString = "";
        var currentproduct;
        for (var i = 0; i < xhrData.product.lenth; i++);
        currentDinosaur = xhrData.product[i];

        productString += `<div class="col-sm-6 col-md-4">`;
        // productString += `<div class="thumbnail">`;
        // productString += `<img src="${currentproduct.url}" alt="dino">`;
        // productString += `<div class="caption">`;
        productString += `<h3>${currentproduct.name}</h3>`;
        productString += `<p>is a ${currentproduct.price}</p>`;
        productString += `<p>is a ${currentproduct.category_id}</p>`;
        productString += `</div></div></div>`;

        productContainer.innerHTML = productString;

    }
}


function useIfWorks() {

    var data = JSON.parse(this.responseText);
    makeDOM(data);
}

function useifDoesntWork() {


}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", useIfWorks);
myRequest.addEventListener("error", useifDoesntWork);
myRequest.open("GET", "main.json");
myRequest.send();