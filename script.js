
var username = document.forms['frm1']['username'];
var email = document.forms['frm1']['email'];
var password = document.forms['frm1']['password'];
var phone = document.forms['frm1']['phone'];

var error_box = document.getElementsByClassName('alert')[0];

function validation(){
    if( username.value == "" || email.value == "" || password.value == "" || phone.value == ""){
        error_box.style.opacity = 1;
        error_box.innerHTML = '<strong>Error! </strong>';
        error_box.innerHTML += ' Please Fill the Blank Fields!';
        return false;
    }

    var reg_email = /[a-z0-9]+\@+[a-z]+\.+[a-z]/;

    if( !reg_email.test(email.value) ){
        error_box.style.opacity = 1;
        error_box.innerHTML = '<strong>Error! </strong>';
        error_box.innerHTML += ' Please Enter a Valid Email!!!';
        return false;
    }

    var reg_lower = /[a-z]/g;
    var reg_upper = /[A-Z]/g;
    var reg_numbers = /[0-9]/g;

    if(!password.value.match(reg_lower)){
        error_box.style.opacity = 1;
        error_box.innerHTML = '<strong>Error! </strong>';
        error_box.innerHTML += ' Please use Lowercase Letters For Password!';
        return false;
    }

    if(!password.value.match(reg_upper)){
        error_box.style.opacity = 1;
        error_box.innerHTML = '<strong>Error! </strong>';
        error_box.innerHTML += ' Please use Uppercase Letters For Password!';
        return false;
    }

    if(!password.value.match(reg_numbers)){
        error_box.style.opacity = 1;
        error_box.innerHTML = '<strong>Error! </strong>';
        error_box.innerHTML += ' Please use Numbers For Password!';
        return false;
    }

    if( password.value.length < 8){
        error_box.style.opacity = 1;
        error_box.innerHTML = '<strong>Error! </strong>';
        error_box.innerHTML += ' Your Password is too Short!';
        return false;
    }

    var reg_phone = /[^0-9]/g;

    if(reg_phone.test(phone.value)){
        error_box.style.opacity = 1;
        error_box.innerHTML = '<strong>Error! </strong>';
        error_box.innerHTML += ' Please Enter Only Numbers For Your PhoneNumber!';
        return false;
    }

}
