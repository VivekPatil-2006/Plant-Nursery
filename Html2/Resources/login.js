
document.onbutt
function validation() {
     document.getElementById("username").innerText = "";
      document.getElementById("password").innerText = "";
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Username and Password cannot be empty");
        return false;
    }

    if (username === "admin" && password === "admin123") {
        alert("Login successful");
        return true; 
    } else {
        alert("Login failed. Invalid credentials.");
        return false; 
    }
}
