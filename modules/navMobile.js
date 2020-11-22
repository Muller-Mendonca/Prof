
   export default function NavMobile(){

       const btnNav = document.querySelector('[data-js="navIcon"]');
       const menuMobile = document.querySelector('[data-js="menuMobile"]');

       function handleClick(){
           menuMobile.classList.toggle('ativa')
           console.log('ativado')
       }

       btnNav.addEventListener('click', handleClick);

}