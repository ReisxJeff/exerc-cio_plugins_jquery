        // remoção de arrows para ecoomizar espaço,auterei a id que estava errada, de "carousel" para "carousel-imagens", agora o carousel esta funcionando 

$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

      //inseri as mascaras dendo da função e corrigi a semantica da escrita que estava em portuques .

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(12) 34567-8910'
    })
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    });
        //alteração na sintax do validate,estava 'requeirdo' correção para 'required'
    $('form').validate({
        rules: {
            name: {
                required: true
            },
            eMail: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            enderecoUsuario: {
                required: true
            },
            cepUsuario: {
                required: true
            },
            cpfUsuario: {
                required: true
            },
        },
            //inseri as partes da messages,submit handler,invalid handler em document para garantir que o código só execute após o DOM estar pronto 
        messages: {
            name: 'por favor,insira seu nome',
            eMail: 'por favor,insira seu e-mail',
            tel: 'por favor,insira seu telefone',
            enderecoUsuario: 'por favor,insira seu endereço',
            cepUsuario: 'por favor,insira seu CEP',
            cpfUsuario: 'por favor,insira seu CPF',
        },
    
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (evento, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Por favor, preencha os ${camposIncorretos} campos para prosseguir com a compra!`);
            }

    },
    })
})



