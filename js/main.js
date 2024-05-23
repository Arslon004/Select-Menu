const selectField=document.getElementById("selectField");
const selectText=document.getElementById("selectText");
const options=document.querySelectorAll(".options");
const hide=document.querySelector(".hide");
const arrowIcon=document.getElementById("arrowIcon");

options.forEach((option)=>{
  option.addEventListener("click",()=>{
    selectText.innerHTML=option.textContent;
    hide.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
  })
})

selectField.addEventListener('click',()=>{
  hide.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
})