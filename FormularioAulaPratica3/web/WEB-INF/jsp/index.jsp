<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html lang="pt-br">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Formulário de Cadastro</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>

    <body>
        <div class="container">
            <nav data-bs-theme="dark" class="navbar bg-body-tertiary py-3">
                <div class="container-fluid px-4">
                    <a class="navbar-brand" href="#">Formulário de Cadastro</a>
                </div>
            </nav>

            <form class="px-4 mt-4">
                <h5>Informações Pessoais</h5>
                
                <div class="row gx-3 mb-3">
                    <div class="col">
                        <div>
                            <label for="nome" class="form-label">Nome</label>
                            <input type="text" required class="form-control" id="nome" placeholder="Nome" aria-describedby="nome">
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <label for="sobrenome" class="form-label">Sobrenome</label>
                            <input type="text" required class="form-control" id="sobrenome" placeholder="Sobrenome" aria-describedby="sobrenome">
                        </div>
                    </div>
                </div>
                
                <div class="row gx-3 mb-3">
                    <div class="col">
                        <div>
                            <label for="email" class="form-label">Email</label>
                            <input type="email" required class="form-control" id="email" placeholder="Email" aria-describedby="email">
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <label for="senha" class="form-label">Senha</label>
                            <input type="password" required class="form-control" id="senha" placeholder="Senha" aria-describedby="senha">
                        </div>
                    </div>
                </div>
                
                <h5>Endereço</h5>
                
                <div class="row gx-3 mb-3">
                    <div class="col">
                        <div>
                            <label for="cep" class="form-label">CEP</label>
                            <input type="text" required class="form-control" id="cep" placeholder="CEP" aria-describedby="cep">
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <label for="cidade" class="form-label">Cidade</label>
                            <input type="text" required class="form-control" id="cidade" placeholder="Cidade" aria-describedby="cidade">
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <label for="rua" class="form-label">Rua</label>
                            <input type="text" required class="form-control" id="rua" placeholder="Rua" aria-describedby="rua">
                        </div>
                    </div>
                </div>
                
                <div class="row gx-3 mb-3">
                    <div class="col">
                        <div>
                            <label for="bairro" class="form-label">Bairro</label>
                            <input type="text" class="form-control" id="bairro" placeholder="Bairro" aria-describedby="bairro">
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <label for="complemento" class="form-label">Complemento</label>
                            <input type="text" class="form-control" id="complemento" placeholder="Complemento" aria-describedby="complemento">
                        </div>
                    </div>
                </div>
                
                <div class="row gx-3 mb-3">
                    <div class="col">
                        <div>
                            <label for="uf" class="form-label">UF</label>
                            <input type="text" required class="form-control" id="uf" placeholder="UF" aria-describedby="uf">
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <label for="numero" class="form-label">Número</label>
                            <input type="text" required class="form-control" id="numero" placeholder="Número" aria-describedby="numero">
                        </div>
                    </div>
                </div>
                
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </form>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
</html>
