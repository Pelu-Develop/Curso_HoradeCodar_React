/* Podemos importar componentes de outros componentes */
import Frase from "./Frase";

/* Para fazer um componente, precisamos colocar ele numa função, tem o jeito que é por classe tbm */
function HelloWorld() {
  /* precisamos colocar um return para indicar que nossa função o que queremos retornar */
  return (
    /* precisamos incapsular o que quisemos passar numa div */
    <div>
      {/* Chamada normal de um componente */}
      <Frase />
      {/* Conteúdo que queremos passar */}
      <h1>Meu primeiro Componente</h1>
      <Frase />
      <Frase />
    </div>
  );
}

/* No final temos que indicar o que queremos exportar. */
export default HelloWorld;
