document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.getElementById('customerTableBody').getElementsByTagName('tr');
    
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
    const rows = document.getElementById('customerTableBody').getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = '';
    }
};

//------------back btn Action----------------
document.getElementById('btn-back').addEventListener('click', () => {
    window.location.href ='../CashierHomePage/index.html', '_blank';
});