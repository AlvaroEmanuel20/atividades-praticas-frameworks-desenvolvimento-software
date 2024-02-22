/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

async function fillFields() {
    const cep = document.getElementById("cep").value;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const addressData = await response.json();
    
    if (addressData) {
        document.getElementById("rua").value = addressData.logradouro;
        document.getElementById("cidade").value = addressData.localidade;
        document.getElementById("bairro").value = addressData.bairro;
        document.getElementById("uf").value = addressData.uf;
        document.getElementById("complemento").value = addressData.complemento;
    }
    
    return addressData;
}

