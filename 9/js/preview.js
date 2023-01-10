let ImgInput = document.querySelector("#img");
let ImgPreview = document.querySelector(".img-preview");
let divImg = document.querySelector(".img-input>div");
let labelImg = document.querySelector(".img-input");
let loadbar = document.querySelector(".progressbar")


let xhr = new XMLHttpRequest();

ImgInput.onchange = function(){
    uploadFile(ImgInput.files[0]);
};

function uploadFile(file){
    let size = file.size / 1024 / 1024;
    var reader = new FileReader();
    loadbar.setAttribute('max', file.size);

    xhr.open('POST', 'https://isidea.ru/rgups_file.php', true);
   
    xhr.upload.onprogress = e => {
        loadbar.value = e.loaded;
      }

    xhr.upload.onload = () => {
        reader.onload = function(event){
            loadbar.classList.remove("none");
            labelImg.style.color = "#005F17";
            labelImg.style.borderColor = "#005F17";
            divImg.innerText = file.name + " [" + size.toFixed(2) + "Мб]"
            ImgPreview.innerHTML = `<img src="${event.target.result}">`;
        };
        reader.onerror = function(event){
            alert('Ошибка');
        };
        reader.readAsDataURL(file);
    }
    xhr.send(file);
}