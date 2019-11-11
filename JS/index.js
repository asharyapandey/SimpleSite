let phoneNumber = document.querySelector('#phoneNumber');
let password = document.querySelector("#password");
const btnSignup = document.querySelector('.signin');
console.log("event");
btnSignup.addEventListener("click", event => {
    if (phoneNumber.value ==="999" && password.value ==="wat") {
        alert("Welcome");
    } else if(phoneNumber.value ==="" && password.value ==="") {
        password.classList.add("wrong");
        phoneNumber.classList.add("wrong");
        
    } else {
        alert("wrong mu");
    }
});
password.addEventListener("keyup", event =>{
    if (password.classList.contains("wrong")) {
        password.classList.remove("wrong");
        password.classList.add("right");
    }
});
phoneNumber.addEventListener("keyup", event =>{
    if (phoneNumber.classList.contains("wrong")) {
        phoneNumber.classList.remove("wrong");
        phoneNumber.classList.add("right");
    }
});