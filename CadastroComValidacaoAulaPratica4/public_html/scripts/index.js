/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
async function fillFields() {
    const cep = $("#cep").val();
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const addressData = await response.json();
    
    if (addressData) {
        $("#rua").val(addressData.logradouro);
        $("#cidade").val(addressData.localidade);
        $("#bairro").val(addressData.bairro);
        $("#uf").val(addressData.uf);
        $("#complemento").val(addressData.complemento);
    }
    
    return addressData;
}

