const header = document.querySelector(".header");

const bars = document.querySelector(".fa-bars");
let show = false;
const toggle = ()=>{
    header.classList.toggle("active");
    if(show===false){
        bars.classList = "fa-solid fa-xmark";
        show = true;
    }else{
        bars.classList = "fa-sharp fa-solid fa-bars";
        show = false;
    }
}
bars.addEventListener("click",toggle);