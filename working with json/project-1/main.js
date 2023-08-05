//# PRODUCT PAGE CODE STARTS HERE
const createProductsPage = (array) => {
    array.forEach(obj => {
        const element = `<div class="card">
                            <img class="card-img" src="${obj.Image}" alt="">
                            <div class="card-body">
                                <p class="title">${obj.Title}</p>
                                <p class="shortDescription">
                                    ${obj.ShortDescription}
                                    </p>
                                <p class="price-detail">
                                    <span class="offerPrice">
                                    <span class="currency">${obj.Currency}</span> 
                                    ${obj.OfferPrice}
                                    </span>
                                    <span class="originalprice">
                                        <span class="currency">${obj.Currency}</span>
                                        ${obj.OrignalPrice}
                                    </span>
                                    <span class="discountPercentage">${obj.DiscountPercentage}</span>
                                    </p>
                                    <p class="DeliveryDetails">${obj.DeliveryDetails}</p>
                                    </div>
                                    </div>`;
                                    document.querySelector('.wrapper').insertAdjacentHTML('beforeend', element);
    });
}

fetch('./product.json')
.then(jsonContent => jsonContent.json())
.then(convertedJson => createProductsPage(convertedJson));

/* 
1. add event listener to wrapper that takes you to prduct show case page.
2. add details of the the product to the html page through which target was clicked
*/

const wrapper = document.querySelector('.wrapper');

const addProduct = (event) => {
    let element = event.target
    console.log(element)
    let closestCard = element.closest(".card");
    console.log(closestCard) //#The output in the console will show the div element itself.
    let htmlContent = closestCard.outerHTML;
    console.log(htmlContent) //#The output in the console will show the HTML markup as a string.
    document.querySelector('.container').innerHTML = htmlContent;
};
  
wrapper.addEventListener("click", addProduct);



//# PRODUCT PAGE CODE ENDS HERE.


//# CODE FOR TABLE STARTS HERE.
const combineUniqueProperties = (arrayOfObj,array) => {
    for (const obj of arrayOfObj) {
        for (const key in obj) {
            if (!array.includes(key)) {
               array.push(key);
            }
        }
    }
    return array;
}

const createTableHeader = (array) => {
    array.forEach(element => {
        const headerElement =`<th>${element}</th>`
        document.querySelector('.mock-headers').insertAdjacentHTML('beforeend', headerElement);
    });
}


const createTable = (array) => {
    let tableHeader = [];
    tableHeader= combineUniqueProperties(array,tableHeader);
    createTableHeader(tableHeader);
    array.forEach(obj => {
        const element = `<tr id="row${obj.id}"></tr>`
        document.querySelector('.mock-table').insertAdjacentHTML('beforeend', element);
    })
    array.forEach(obj => {
        for (const key in obj) {
            let content =`<td> ${obj[key]}</td>`
            let id =`row${obj.id}`
            document.getElementById(id).insertAdjacentHTML('beforeend', content);
            
        }
    })
} 


fetch('./todo.json')
.then(response => response.json())
.then(mockData => createTable(mockData))
// .catch((error) => console.error('Error fetching data:', error));


//# CODE FOR TABLE ENDS HERE.