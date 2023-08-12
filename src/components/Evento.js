import Button from "./evento/Button";

function Evento({ numero }) {
  /* o que a função vai ser executada quando ele ouvir o evento */
  function meuEvento() {
    console.log(`Opa, fui ativado! ${numero}`);
  }
  return (
    <div>
      <p>Clique para disparar o {numero}</p>
      <Button event={meuEvento} text={`clique aqui para disparar ${numero}`} />
      <br></br>
      {/* Para colocar um evento listen, precisamos colocar o método no local adequado, tipo onClick e o nome da função que vamos chamar */}
      <button onClick={meuEvento}>Clique para disparar um evento</button>
    </div>
  );
}

export default Evento;
