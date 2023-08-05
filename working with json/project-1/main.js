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
    .then(convertedJson => productsPage(convertedJson));


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

