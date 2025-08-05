function register() {
      document.getElementById("username").innerText = "";
      document.getElementById("password").innerText = "";
      document.getElementById("password1").innerText = "";
      document.getElementById("address").innerText = "";
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const password1 = document.getElementById("password1").value.trim();
    const address = document.getElementById("address").value.trim();

    if (username === "" || password === "" || password1 === "" || address === "") {
        alert("Username and Password cannot be empty");
        return false;
    }
    if (password !== password1) {
        alert("Passwords do not match");
        return false;
    }
      alert("Registration successful");
    return true;
}