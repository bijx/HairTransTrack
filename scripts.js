function FormValidation(){
    //Name Validation
    var name=document.getElementById('name').value;
    if (name === "") {
        alert('Please Enter a Name.');
        document.getElementById('name').style.borderColor = "red";
    }
    else if(name.length <=2){
        alert('Your Name is To Short.');
        document.getElementById('name').style.borderColor = "red";
    }
    else{
        document.getElementById('name').style.borderColor = "green";
    }

    //Phone Validation
    var phoneNumber = document.getElementById('phone').value;
    if (phoneNumber === "") {
        alert('Please Enter a Phone Number.');
        document.getElementById('name').style.borderColor = "red";
    }
    else{
        document.getElementById('name').style.borderColor = "green";
    }
}