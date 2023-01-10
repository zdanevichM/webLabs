let phone = document.querySelectorAll("input[rel=phone]");
phone.forEach(iteam => {
    iteam.addEventListener("input", function(){
        let digit = this.value.replace(/[\D]/g, "");

        this.value = "+";

        if(digit.substr(0,1) != 7){
            this.value += "7";
        }

        else this.value += digit.substr(0,1);

        if(digit.length > 1){
        this.value += "-("+digit.substr(1,3);
        }

        if(digit.length > 4){
        this.value += ")-" + digit.substr(4,3);
        }

        if(digit.length > 7){
        this.value += "-" + digit.substr(7,2);
        }

        if(digit.length > 9){
        this.value += "-" + digit.substr(9,2);
        }
    })
});