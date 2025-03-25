// Function to register user
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let contact = document.getElementById("contact").value;
            let address = document.getElementById("address").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];

            users.push({ name, email, contact, address });

            localStorage.setItem("users", JSON.stringify(users));

            alert("User registered successfully!");
            form.reset();
        });
    }

    // Function to display users
    const tableBody = document.getElementById("userTable");
    if (tableBody) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.forEach((user) => {
            let row = tableBody.insertRow();
            row.insertCell(0).textContent = user.name;
            row.insertCell(1).textContent = user.email;
            row.insertCell(2).textContent = user.contact;
            row.insertCell(3).textContent = user.address;
        });
    }
});
