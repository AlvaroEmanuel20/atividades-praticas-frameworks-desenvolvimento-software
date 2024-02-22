/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const validations = {
    nome: (nomeVal) => {
        if (!nomeVal) {
            $("#nome-erro").text("Campo obrigatório");
            return false;
        } else if (nomeVal.length < 2) {
            $("#nome-erro").text("Nome inválido");
            return false;
        }
        
        return true;
    },
    email: (emailVal) => {
        const emailRegex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
        
        if (!emailVal) {
            $("#email-erro").text("Campo obrigatório");
            return false;
        } else if (!emailRegex.test(emailVal)) {
            $("#email-erro").text("Email inválido");
            return false;
        }
        
        return true;
    },
    senha: (senhaVal) => {
        if (!senhaVal) {
            $("#senha-erro").text("Campo obrigatório");
            return false;
        } else if (senhaVal.length < 8) {
            $("#senha-erro").text("Senha muito curta");
            return false;
        }
        
        return true;
    },
    cep: (cepVal) => {
        if (!cepVal) {
            $("#cep-erro").text("Campo obrigatório");
            return false;
        } else if (cepVal.length !== 8) {
            $("#cep-erro").text("CEP inválido");
            return false;
        }
        
        return true;
    },
    cidade: (cidadeVal) => {
        if (!cidadeVal) {
            $("#cidade-erro").text("Campo obrigatório");
            return false;
        }
        
        return true;
    },
    rua: (ruaVal) => {
        if (!ruaVal) {
            $("#rua-erro").text("Campo obrigatório");
            return false;
        }
        
        return true;
    },
    uf: (ufVal) => {
        if (!ufVal) {
            $("#uf-erro").text("Campo obrigatório");
            return false;
        } else if (ufVal.length !== 2) {
            $("#uf-erro").text("UF inválido");
            return false;
        }
        
        return true;
    },
    numero: (numeroVal) => {
        if (!numeroVal) {
            $("#numero-erro").text("Campo obrigatório");
            return false;
        }
        
        return true;
    }
};

$("#form").on("submit", (event) => {
    event.preventDefault();

    let errors = 0;
    if (!validations.nome($("#nome").val())) errors++;
    if (!validations.email($("#email").val())) errors++;
    if (!validations.senha($("#senha").val())) errors++;
    if (!validations.cep($("#cep").val())) errors++;
    if (!validations.cidade($("#cidade").val())) errors++;
    if (!validations.rua($("#rua").val())) errors++;
    if (!validations.uf($("#uf").val())) errors++;
    if (!validations.numero($("#numero").val())) errors++;
    
    if (errors > 0) return false;

    console.log("Formulário enviado com sucesso");
});
