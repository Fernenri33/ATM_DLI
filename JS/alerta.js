function showAlert() {
    // Check if the alert already exists and remove it
    var existingAlert = document.getElementById("scheduled-alert");
    if (existingAlert) {
        existingAlert.remove();
    }

    // Create the alert element
    var alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-danger";
    alertDiv.role = "alert";
    alertDiv.id = "scheduled-alert";
    alertDiv.innerHTML = "Problema en el ATM 1 <a href='alerta.html' class='alert-link'>Click aquí para más detalles.</a>";

    // Find the navbar element
    var navbar = document.querySelector(".navbar");

    if (navbar) {
        // Insert the alert after the navbar
        navbar.insertAdjacentElement('afterend', alertDiv);
    } else {
        // Fallback: Insert the alert at the top of the body if the navbar is not found
        var body = document.body;
        if (body.firstChild) {
            body.insertBefore(alertDiv, body.firstChild);
        } else {
            body.appendChild(alertDiv);
        }
    }

}

// Set an interval to show the alert every 10 seconds
setInterval(showAlert, 30000);



