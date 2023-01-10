let login = document.querySelector("#login");
let password = document.querySelector("#password");
let check_password = document.querySelector("#check-password");
let errors = document.querySelectorAll(".error");
let checkBox = document.querySelector("#check");
let submit_btn = document.querySelector("button[type=submit]");


login.onkeyup = function(){
    if(login.value.match(/[a-zA-Z@+-_]+/)){
        checked_err(0,0,"ok");        
    }else{
        checked_err(0,0,"not")
    }

    if(login.value.length <=150){
        checked_err(0,1,"ok");        
    }else{
        checked_err(0,1,"not")
    }
}

password.onkeyup = function(){

    if(password.value.length >=8){
        checked_err(1,0,"ok");        
    }else{
        checked_err(1,0,"not")
    }

    if(password.value.match(/^[\d]+$/)) {  
        checked_err (1, 1, "not")
    } else {    
        checked_err (1, 1, "ok")
    }

    if(password.value != login.value){
        checked_err(1,2,"ok");        
    }else{
        checked_err(1,2,"not")
    }
}

check_password.onkeyup = function(){
    if(password.value == check_password.value){
        checked_err(2,0,"ok");        
    }else{
        checked_err(2,0,"not")
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
}