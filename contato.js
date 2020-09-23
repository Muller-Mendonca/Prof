(function(){
    "use strict"

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const send = document.getElementById('send');


    send.addEventListener('click', () => {
        
        verificarFormulario()
        limpaFormulario();
        
    });

    const verificarFormulario = () =>{
        nome.value === '' || email.value === '' 
        ? alert('Preencha os dados')
        : alert('Enviamos seu contato!');
    }

    const limpaFormulario = () =>{
       nome.value = "";
       email.value = "";
       message.value = "";
    }

})();