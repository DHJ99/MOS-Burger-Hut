const adminUsers = [
    { username: 'admin1', password: 'password1' },
    { username: 'admin2', password: 'password2' },
    
];

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const username = usernameInput.value;
    const password = passwordInput.value;

    const adminUser = adminUsers.find(user => user.username === username && user.password === password);

    if (adminUser) {
        alert('Login successful!');
        window.location.href ='../../AdminHomePage/index.html', '_blank';

    } else {

        alert('Invalid username or password. Please try again.');

        usernameInput.value = '';
        passwordInput.value = '';
    }
});

const cashierLoginLink = document.getElementById('cashierLoginLink');
cashierLoginLink.addEventListener('click',function(event){
    event.preventDefault();
    window.location.href ='../CashierLogin/index.html', '_blank';
    
});
