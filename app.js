const menuBtn = document.querySelector('.menu-btn');

let menuOpen = false; // do not use const here

menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('menu-btn__open');
        menuOpen= true; // add event listener is a async function, so the first click execute .menu-btn__open and for second click we have to declare menuOpen=true, otherwise it will not close cross symbol.
    }else{
        menuBtn.classList.remove('menu-btn__open');
        menuOpen= false;
    }
})