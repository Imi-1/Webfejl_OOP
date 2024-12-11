/**
 * Create a row for the companions table;
 * 
 * @param {Companion} companion 
 */
function createRow(companion){
    const table = document.getElementById('companions');
    const tbody = table.querySelector('tbody');
    const tableRow = document.createElement('tr');
    tableRow.id = companion.id;
    tbody.appendChild(tableRow);


    const td1 = createCell(tableRow);
    td1.innerHTML = companion.getName();
    const td2 = createCell(tableRow);
    td2.innerHTML = companion.reszleg;

   // TODO 7

    const action = createCell(tableRow)
    const button = document.createElement('button');
    button.innerHTML = 'Megtekint';
    action.appendChild(button)
    button.addEventListener('click', checkEventListener)
}

/**
 * Create a new td cell
 * 
 * @param {HTMLTableRowElement} parentElement 
 * @returns {HTMLTableCellElement}
 */
function createCell(parentElement){
    const newCell = document.createElement('td');
    parentElement.appendChild(newCell);
    return newCell;
}

/**
 * 
 * Append a new companion to the selector
 * 
 */
function appendToSelector(mano){
    const productForm = document.getElementById('product')
    const selector = productForm.querySelector('#companionlist');

    const option = document.createElement('option');
    // TODO 11.
    option.text = mano.getName();
    option.value = mano.id;

    selector.appendChild(option);
}


/**
 * 
 * Refresh the productlist table
 * 
 * @param {Companion} companion 
 */
function refreshProductList(companion){ //TODO

    const companionName = document.getElementById('companion_name');
    // TODO 10
    companionName.innerHTML = companion.getName();
    companionName.style.display = 'block';
    const productTable = document.getElementById('products');
    productTable.style.display = 'table';
    const productTableBody = productTable.querySelector('tbody')
    productTableBody.innerHTML = '';

    for(let i = 0; i <companion.products.length; i ++)
        {
            const product = companion.products[i];
            const sor = document.createElement('tr');
            const td = document.createElement('td');
            td.innerHTML = product;
            sor.appendChild(td);
            productTableBody.appendChild(sor);
        }
    // TODO 10
}

/**
 * 
 * Add companion function for the companion formelement
 * 
 * @param {HTMLFormElement} form 
 */
function addCompanion(form, factory){ //TODO 
    const firstName =form.querySelector('#cfirstname')
    const lastname =form.querySelector('#clastname')
    const area = form.querySelector('#carea')
    const firstNameValue = firstName.value;
    const lastNameValue = lastname.value;
    const areaValue = area.value;
    

    const id = factory.createId();
    const comp = new Companion(id, firstNameValue, lastNameValue, areaValue);
    factory.addMano(comp);
    // TODO 6
}

/**
 * 
 * Add product function for the productformelement
 * 
 * @param {HTMLFormElement} form 
 */

function addProductForm(form, factory){ // TODO
    const selector =form.querySelector('#companionlist')
    const productName = form.querySelector('#productname')
    const companionId = selector.value;
    const product = productName.value;
    // 12
    factory.addProductToMano(product, companionId);
    console.log(factory);
}