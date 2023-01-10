let login = document.querySelector("#login");
let password = document.querySelector("#password");
let check_password = document.querySelector("#check-password");
let errors = document.querySelectorAll(".error")

let checkBox = document.getElementById("check");

let submit_btn = document.querySelector("button[type=submit]");

let pass = pass_check = login_check = false
login.onkeyup = function(){
    let login1 = login2 = false;
    if(login.value.match(/[a-zA-Z@+-_]+/)){
        checked_err(0,0,"ok",);
        login1 =true;      
    }else{
        checked_err(0,0,"not")
        login1 =false; 
    }

    if(login.value.length <=150){
        checked_err(0,1,"ok");
        login2 = true;    
    }else{
        checked_err(0,1,"not")
        login2 = false;   
    }
    
    if(login1 == login2){
        login_check = true;
    }
}

password.onkeyup = function(){

    let pass1 = pass2 = pass3 =  false;

    if(password.value.length >=8){
        checked_err(1,0,"ok");
        pass1 = true;
    }else{
        checked_err(1,0,"not")
        pass1 = false;
    }

    if(password.value.match(/^[\d]+$/)) {  
        checked_err (1, 1, "not")
        pass2 = false;
    } else {    
        checked_err (1, 1, "ok")
        pass2 = true;
    }

    if(password.value != login.value){
        checked_err(1,2,"ok");
        pass3 = true;
    }else{
        checked_err(1,2,"not")
        pass3 = false;
    }

    if(pass1 == pass2 == pass3){
        pass = true;
    }
}

check_password.onkeyup = function(){
    if(password.value == check_password.value){
        checked_err(2,0,"ok");
        pass_check = true;
    }else{
        checked_err(2,0,"not");
        pass_check = false;
    }
}

checkBox_ivite();
checkBox.onchange = function(){
    checkBox_ivite();
}

function checkBox_ivite(){
    if(checkBox.checked){
            submit_btn.removeAttribute("disabled", "disabled");
        }else{
            submit_btn.setAttribute("disabled", "disabled");
        }
}

function checked_err (number_err_blok, num_err, sost){
    if(sost == "ok"){
        errors[number_err_blok].children[num_err].classList.add("ok")
        errors[number_err_blok].children[num_err].classList.remove("not")
    }else{
        errors[number_err_blok].children[num_err].classList.add("not")
        errors[number_err_blok].children[num_err].classList.remove("ok")
    }
};


//Лабораторная 10
let form = document.querySelector('.form');
let inputArray = form.elements;

function SaveLocaleStarage(){
    if (pass == pass_check == login_check == true) {
        let preregistation  = {
            name: inputArray[0].value,
            lastName: inputArray[1].value,
            login: inputArray[2].value,
            eMail: inputArray[3].value,
            pass: inputArray[4].value
        };

        localStorage.setItem("preregistation", JSON.stringify(preregistation));
        alert("Данные успешно загруженны в LocalStorage")
    } else {
        alert("Ошибка ввода данных")
    }
};

window.onload = function(){
    let preregistation = JSON.parse(localStorage.getItem("preregistation"));
    console.log(preregistation);
    if (preregistation) {
        inputArray[0].value = preregistation.name;
        inputArray[1].value = preregistation.LastName;
        inputArray[2].value = preregistation.login;
        inputArray[3].value = preregistation.eMail;
        inputArray[4].value = preregistation.pass;
    }
};


submit_btn.onclick = function(e){
    e.preventDefault();
    SaveLocaleStarage();
}