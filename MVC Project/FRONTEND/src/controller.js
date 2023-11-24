import { view } from "./view/view.js";
import { Usuario } from "./model/usuario.model.js";
import { dataService } from "./api/data.service.js";

let users = [];
let userId = null;
const nullUser = new Usuario("",null,"","");
let submitType = { NEW: 0, UPDATE: 1 };
let submitState = submitType.NEW;

const loadData = async () =>{
  const data = await dataService.load();
  user = data.map(
    (user) =>
    new Usuario(user.nome,user.idade,user.login,user.senha)
  );
  view.update(data, nullUser);

};

const getFormInputs = () => {
  new Usuario(nome.value, idade.value, login.value, senha.value)
}

function validaLogin(login) {
  return data.some((data) => data.login === login);
};



const handleSubmit = (event) => {
  event.preventDefault();

  if (
    nome.value == "" ||
    idade.value == "" ||
    login.value == "" ||
    senha.value == ""
  ) {
    alert("Preencha todos os campos");
  } else if (validaLogin(login.value) && submitState == submitType.NEW) {
    alert("Esse Login já está sendo utilizado");
  } else {
    const user = getFormInputs() ;
    if (submitState == submitType.NEW) {
      addUser(user);
    } else if (submitState == submitType.UPDATE) {
      updateUser(userIdId, user);
      submitState = submitType.NEW;
      login.disabled = false;
      senha.disabled = false;
      btnSub.innerText = "Salvar";
      
    }
    view.update(users, nullUser);
  }
};

const addUser = (newUser) => {
  users.push(newUser);
  dataService.save(users);
};

const updateUser = (index, userToUpdate) => {
  users[index] = userToUpdate;
  dataService.save(users);
};

const deleteUser = (index) => {
  users.splice(index, 1);
  dataService,save(users);
};


// handle click vai verificar qual botão foi clickado!
const handleClick = (event) => {
  userIdId = event.target.closest('tr').id.split("")[4];
  if(event.type == 'click'){
    const confirmUpdate = window.confirm(
      `Deseja habilitar ${users[userId].getNome().toUpperCase()} para edição?`
    );
  
    if (confirmUpdate) {
      view.updateForm(users[userId]);
      login.disabled = true;
      senha.disabled = true;
      submitState = submitType.UPDATE;
      btnSub.innerText = "Update";
    }
  } else if (event.type == 'contextmenu'){
    event.preventDefault();
    const confirmDlet = window.confirm(
      `Deseja deletar ${data[currentId].getNome().toUpperCase()} ?`
    );

    if (confirmDlet) {
      deleteUser(userIdId);
      view.update(users,nullUser);
    }
  }

};
// fim do handle click

const setEventsListerners = () => {
const form = document.getElementById("signForm");
form.addEventListener("submit", handleSubmit);
const userList = document.getElementById("users-result");
userList.addEventListener("click", handleClick);
userList.addEventListener("contextmenu", handleClick)
};

const controller = {
  run: () => {
    view.render();
    setEventsListerners();
    window.onload = () => {
      loadData();
    }

  },
};

export { controller };
