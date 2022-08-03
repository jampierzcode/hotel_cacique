const buttonToggle=document.getElementById('button-toggle'),
    menuContainer=document.getElementById('menu-container'),
    menuToggle=document.getElementById('menu-toggle')

const XD=()=>{
    buttonToggle.classList.toggle('active')
    menuContainer.classList.toggle('menu-container__active')
    menuToggle.classList.toggle('menu-toggle__active')
}
buttonToggle.addEventListener('click',(e)=>{
    XD()
    const ulToggle=document.getElementById('ul-menu')
    ulToggle.addEventListener('click',()=>{
        if(buttonToggle.classList[1]){
            XD()
        }
    })
})
