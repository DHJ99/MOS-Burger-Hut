document.getElementById('searchButtonCasherH').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInputCashierH').value.toLowerCase();
    const rows = document.getElementById('customerTableBodyCashierH').getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        const phoneNumber = rows[i].getElementsByTagName('td')[2].textContent.toLowerCase();
        if (phoneNumber.includes(searchInput)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
});

window.onload = function() {
    const rows = document.getElementById('customerTableBodyCashierH').getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = '';
    }
};

//-----------Add new Customer btn- Action--------------
const addNewCust = document.getElementById('addNewCust');
addNewCust.addEventListener('click',function(event){
    event.preventDefault();
    window.location.href ='../AddCustomerFrom/index.html', '_blank';
    
});

//-----------Order History btn- Action----------------
const orderHist = document.getElementById('orderHist');
orderHist.addEventListener('click',function(event){
    event.preventDefault();
    window.location.href ='../OrderHistory/index.html', '_blank';
    
});

//-----------Logout btn- Action--------------
const logoutbtn = document.getElementById('logoutbtn');
logoutbtn.addEventListener('click',function(event){
    event.preventDefault();
    window.location.href ='../CashierLogin/index.html', '_blank';
    
});

//-----------Make Order btn- Action--------------
const makeOrder = document.getElementById('makeOrder');
makeOrder.addEventListener('click',function(event){
    event.preventDefault();
    window.location.href ='../BurgerMenu/index.html', '_blank';
    
});
