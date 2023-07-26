/* Para usamos o props, precisamos indicar na função um nome para ela, normalmente de digite props mesmo. */
function SayMyName(props) {
  return (
    <div>
      {/* dentro da função, fazemos uma chamada dela e colocamos qual propriedade que queremos puxar dentro dela, porque por default, é importado tudo */}
      <p>Fala ai {props.nome}, suave? </p>
    </div>
  );
}

export default SayMyName;
