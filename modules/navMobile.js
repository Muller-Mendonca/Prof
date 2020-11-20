
   export default function NavMobile(){

       const btnNav = document.querySelector('[data-js="navIcon"]');
       const navUl = document.querySelector('[data-js="navUl"]');

       function handleClick(){
           navUl.classList.toggle('ativa-nav')
           console.log('ativado')
       }

       btnNav.addEventListener('click', handleClick);

}