/* Maneira de transformar o props ja nas propriedades dentro dele, assim não precisando repetir varias vezes o props na chamada */
function Pessoa2({ nome, idade, profissao, foto }) {
  return (
    <div>
      <img src={foto} alt={nome} />
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão {profissao}</p>
    </div>
  );
}

export default Pessoa2;
