function checkpassword() {
    let p = document.getElementById('pass').value;
    let cp = document.getElementById('cpass').value;
    if (p === cp & p !== "" & cp !== "") {
        alert("passwords match");
        document.getElementById("button").disabled = true;
    } else
        alert("Your passwords MUST match.");

}

function checkForBlank() {
    if (document.getElementById('username', 'pass', 'cpass').value == "") {
        alert('Please fill in your fields');
        return false;


    }
}