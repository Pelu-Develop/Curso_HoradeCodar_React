/* Preciso importar meu pacote useState do react */
import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    /* document.getElementById.value para pegar o valor encontrado dentro da nosso formulário */
    console.log(`Cadastrou o Usuário com o nome! ${document.getElementById("nome").value}`);
    console.log(`Usuario ${name} tem a senha ${password}`);
  }

  /* vamos trabalhar com 2 constantes, uma que no caso a gente vai ler e o outro que vai ser para modificar a constante anterior
  no exemplo abaixo, "name" é o que vai ser utilizado por ai, e "setName" vai ser da onde vai vim a modificação */
  /* Eu posso declarar um valor default para minha useState, é ó colocar entre os parenteses */
  const [name, setName] = useState("Pedro");
  const [password, setPassowd] = useState();

  return (
    <div>
      <h1>Meu Cadastro:</h1>
      {/* Maneira de escutar um evento de formulário, só quando ele é enviado */}
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="nome">Nome: </label>
          <input
            type="text"
            placeholder="Digite o seu nome"
            id="nome"
            name="nome"
            /* Posso imprimir ja direto na minha pagina um valor default */
            value={name}
            /* aqui colocamos um evento de onchange para dizer que vai ser quando for algum elemento for alterado vai ser disparado um evento
            no caso aqui, o "e" estar na função puxando todos os dados do input, e estar colocando o valor de "setName" do value presente no input a cada vez que tem uma mudança  */
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="nome">Senha: </label>
          <input
            type="password"
            placeholder="Digite a sua senha"
            id="password"
            name="password"
            onChange={(e) => setPassowd(e.target.value)}
          />
        </div>
        <br></br>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
