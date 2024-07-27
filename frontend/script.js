const API_URL = 'http://localhost:3000/api';

const login = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.status === 200) {
            document.getElementById('login').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
            document.getElementById('username').innerText = data.user.username;
            document.getElementById('balance').innerText = data.user.balance;
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred while logging in.');
    }
};

const deposit = async () => {
    const userId = 1; // Replace with the actual user ID from your logic
    const amount = document.getElementById('amount').value;

    try {
        const response = await fetch(`${API_URL}/transactions/deposit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, amount })
        });

        const data = await response.json();
        document.getElementById('balance').innerText = parseFloat(document.getElementById('balance').innerText) + parseFloat(amount);
    } catch (error) {
        console.error('Error making deposit:', error);
        alert('An error occurred while making a deposit.');
    }
};

const withdraw = async () => {
    // Implement the withdraw function similarly to the deposit function
};
