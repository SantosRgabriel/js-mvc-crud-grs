const formComponent = {
  render: () => {
    const root = document.getElementById("root");
    const formTemplate = document.createElement("form");
    formTemplate.className = "form-control";
    formTemplate.setAttribute("id", "signForm");
    formTemplate.innerHTML = `
            <label for="nome" class="form-label">Nome</label> 
            <input class="form-control" type="text" id="nome" >

            <label for="idade" class="form-label">Idade</label>
            <input class="form-control" type="number" id="idade" >

            <label for="login" class="form-label">Login</label>
            <input class="form-control" type="text" id="login" >

            <label for="senha" class="form-label">Senha</label>
            <input class="form-control" type="password" id="senha" >

            <button id="btnSub" type="submit" class="btn btn-primary mt-4">Salvar</button>
        `;
    root.appendChild(formTemplate);
  },
  update: (user) => {
    nome.value = user.getNome();
    idade.value = user.getIdade();
    login.value = user.getLogin();
    senha.value = user.getSenha();
  },
};

export { formComponent};
