const logBtn = document.getElementById('log');
logBtn.addEventListener('click', fetchData);

async function fetchData() {
    const response = await fetch('http://localhost:3000/users/');
    const data = await response.json();

    data.forEach((obj) => {
        Object.entries(obj).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });
        console.log('----------------------');
    });
}
