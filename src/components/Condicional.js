import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  /* Aqui estamos colocando um useState dentro de outro userState para que no caminho ele faça uma validação */
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function limparEmail() {
    setUserEmail("");
    const zerar = document.getElementById("email");
    zerar.value = "";
  }

  return (
    <div>
      <h2>Cadastre o seu e-mail:</h2>
      <form>
        <input
          type="email"
          placeholder="Digite o seu e-mail..."
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        ></input>
        <button onClick={enviarEmail}>Enviar e-mail </button>
        {/* Criando a condicional para que a operação seja executada */}
        {userEmail && (
          <div>
            <p>O e-mail do usuário é: {userEmail}</p>
            <button onClick={limparEmail}>limpar o e-mail</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
