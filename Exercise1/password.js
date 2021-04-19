function password(){
    var p1 = document.getElementById("password_1");
    var p2 = document.getElementById("password_2");
    if (p1.value.length < 8 && p1.value !== p2.value){
        alert("The passwords doesn't match.\nThe length of the passowrd less than 8.")
    }
    else if (p1.value !== p2.value){
        alert("The re-enter passwords doesn't match");
    }
    else if (p1.value.length < 8){
        alert("The length of the password less than 8.");
    }
    else{
        alert("Valid.")
    }
}