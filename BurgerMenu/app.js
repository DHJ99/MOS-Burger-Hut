// Sample menu data
const menuData = {
    burgers: [
        { name: "Reindeer burger", price: 1200, image:'img/burgers/img1.webp' },
        { name: "Hamburgesas Mexicanas", price: 1250, image: "img/burgers/img2.jpg" },
        { name: "Cheese burger", price: 1350, image: "img/burgers/img3.webp" },
        { name: "Crispy Fried burger", price: 1400, image: "img/burgers/img4.webp" },
        { name: "Smash burger", price: 1200, image: "img/burgers/img5.webp" },
        { name: "Gourmet burger", price: 1300, image: "img/burgers/img6.webp" }
    ],
    submarine: [
        { name: "Salami, ham and cheeses", price: 1500, image:'img/submarine/img1.jpg' },
        { name: "Pastrami grinders", price: 1350, image: "img/submarine/img2.jpeg" },
        { name: "Crispy Chicken Submarine", price: 1350, image: "img/submarine/img3.jpeg" },
        { name: "Beef blast", price: 1450, image: "img/submarine/img4.jpeg" },
        { name: "Double chicken sub", price: 1400, image: "img/submarine/img5.jpeg" },
        { name: "Tandoori Chicken", price: 1300, image: "img/submarine/img6.jpg" }
    ],
    drinks: [
        { name: "Cold Soft Drink", price: 500, image:'img/drinks/img1.jpeg' },
        { name: "Lime Fizz", price: 500, image: "img/drinks/img4.jpeg" },
        { name: "Pomegranate Fizz", price: 550, image: "img/drinks/img2.jpeg" },
        { name: "Strawberry Fizz", price: 500, image: "img/drinks/img3.jpg" },
        { name: "Raspberry Fizz", price: 550, image: "img/drinks/img5.jpeg" },
        { name: "Gunshop Fizz", price: 550, image: "img/drinks/img6.jpeg" }
    ]
};

let currentOrder = [];

function displayMenuItems(category) {
    const menuItemsContainer = document.getElementById('menuItems');
    menuItemsContainer.innerHTML = '';

    menuData[category].forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'menu-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>LKR ${item.price.toFixed(2)}</p>
            <button onclick="addToOrder('${item.name}', ${item.price})">ADD</button>
        `;
        menuItemsContainer.appendChild(itemElement);
    });
}

function addToOrder(name, price) {
    currentOrder.push({ name, price });
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderItems = document.getElementById('orderItems');
    const subTotal = document.getElementById('subTotal');
    const total = document.getElementById('total');

    orderItems.innerHTML = '';
    let sum = 0;

    currentOrder.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - LKR ${item.price.toFixed(2)}`;
        orderItems.appendChild(itemElement);
        sum += item.price;
    });

    subTotal.textContent = sum.toFixed(2);
    total.textContent = sum.toFixed(2);  // Assuming no discount for now
}

// Event listeners
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const category = e.target.dataset.category;
        displayMenuItems(category);
    });
});

document.getElementById('searchButton').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const allItems = [...menuData.burgers, ...menuData.submarine, ...menuData.drinks];
    const filteredItems = allItems.filter(item => item.name.toLowerCase().includes(searchTerm));
    
    const menuItemsContainer = document.getElementById('menuItems');
    menuItemsContainer.innerHTML = '';

    filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'menu-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>LKR ${item.price.toFixed(2)}</p>
            <button onclick="addToOrder('${item.name}', ${item.price})">ADD</button>
        `;
        menuItemsContainer.appendChild(itemElement);
    });
});

document.getElementById('billButton').addEventListener('click', () => {
    alert('Bill generated!');  // Replace with actual billing logic
});

document.getElementById('backButton').addEventListener('click', () => {
    // Implement back functionality
});

// Initialize with burgers
displayMenuItems('burgers');