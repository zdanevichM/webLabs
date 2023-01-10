let links = document.querySelectorAll(".cat-list a");

let iteam = document.getElementsByClassName("iteam");

links.forEach(btn => {
    btn.addEventListener('click', () => sorted_post(btn, iteam));
})

function sorted_post(btn, iteam){
    let category_link = btn.innerHTML;
    
    for(let i = 0; i<iteam.length; i++){
       let category = iteam[i].lastElementChild.lastElementChild;
       console.log(category);
        if(category.children.length > 1){
            for(let j = 0; j<category.children.length-1; j++){
                if(category.children[j].textContent == category_link || category.lastElementChild.textContent == category_link){
                    iteam[i].style.display = "flex"
                }else{
                    iteam[i].style.display = "none"
                }
            }
        }else{
            if(category.children[0].textContent == category_link){
                iteam[i].style.display = "flex"
            }else{
                iteam[i].style.display = "none"
            }
        }
    }
}
function getCategory(i){
    let category = null;
    category = iteam[i].lastElementChild.lastElementChild.children[j].textContent
}