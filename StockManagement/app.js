document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.getElementById('itemTableBody').getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        const reportId = rows[i].getElementsByTagName('td')[0].textContent.toLowerCase();
        if (reportId.includes(searchInput)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
});

window.onload = function() {
    const rows = document.getElementById('itemTableBody').getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = '';
    }
};  