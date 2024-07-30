document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.getElementById('customerTableBody').getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        const customerId = rows[i].getElementsByTagName('td')[0].textContent.toLowerCase();
        if (customerId.includes(searchInput)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
});