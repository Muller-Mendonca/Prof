    
    export default function Contatos(){
        const name = document.querySelector('[data-js="name"]');
        const email = document.querySelector('[data-js="email"]')
        const message = document.querySelector('[data-js="message"]')
        const send = document.querySelector('[data-js="send"]')


        send.addEventListener('click', () => {
            
            verificarFormulario()
            limpaFormulario();
            
        });
    
        const verificarFormulario = () =>{
            name.value === '' || email.value === '' 
            ? alert('Preencha os dados')
            : alert('Enviamos seu contato!');
        }
    
        const limpaFormulario = () =>{
           name.value = "";
           email.value = "";
           message.value = "";
        }
    } 

    

