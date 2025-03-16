const handleSubmit=(event)=>{
    event.preventDefault();
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    removeAlert();
    let validate=true;
    if(username===""){
        document.getElementById('username').insertAdjacentElement('afterend',customAlert("Username cannot be Empty"));
        validate=false;
    }
    if(!/^[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(password)){
        document.getElementById('password').insertAdjacentElement('afterend',customAlert("Password must be at least 8 characters long."));
        validate=false;
    }
    if (validate){
        location.replace("/Welcome.html")
    }
};

function customAlert(message){
    let span=document.createElement('span');
    span.textContent=message;
    span.classList.add('alert');
    return span;
}

function removeAlert(){
    let alerts=document.querySelectorAll('.alert');
    alerts.forEach((alert)=>{
        alert.remove();
    });
}