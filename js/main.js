let mainBody = document.getElementById('main-body');
let accBtn = document.getElementById('acc-btn');
let addBtn = document.getElementById('add-btn');
let editBtn = document.getElementById('edit-btn');
let saveBtn = document.getElementById('save-btn');

// HTML Views
let accView = document.getElementById('acc-view');
let addView = document.getElementById('add-view');

// Input Field
let inputName = document.getElementById('input-name');
let inputDeposit = document.getElementById('input-deposit');
let inputCard = document.getElementById('input-card');

// Database functions
function database() {
    DB.getAll().then(data => createTable(data), err => {console.log(err)});
}
database();


// Listeners
addBtn.addEventListener('click',displayAddView);
accBtn.addEventListener('click', displayAccView);
saveBtn.addEventListener('click', saveNewAccount);

// Display Acc View function
function displayAccView() {
    addView.style.display = 'none';
    accView.style.display = 'flex';
}

// Save New Account function
function saveNewAccount() {

    // Write validation here...

    let newAccount = {
        name: inputName.value,
        deposit: inputDeposit.value,
        credit_card: inputCard.value
    };

    DB.save(newAccount).then(res => {
        //console.log(res); // success from QueryBuilder func save
        database();
        displayAccView();
        inputName.value = '';
        inputDeposit.value = '';
        inputCard.value = '';
    }, err => {
      //console.log(err); // error from QueryBuilder func save
    })
}

// Display Add View function
function displayAddView() {
    accView.style.display = 'none';
    addView.style.display = 'flex';
}

// Create Table function
function createTable(data) {
    let text = '';

    data.forEach((el) => {
        text += `
<tr>
    <th scope="row">${el.id}</th>
    <td>${el.name}</td>
    <td>${el.deposit}</td>
    <td>${el.credit_card}</td>
</tr>
`;

    })
    mainBody.innerHTML = text;
}

