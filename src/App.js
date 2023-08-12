import "./App.css";
/* Para utilizamos o componente, precisamos importar ele, usando o import, depois colocar um nome para nosso import que no caso 
geralmente é o mesmo nome do arquivo da onde estou importando, depois colocar from para indicar da onde estou pegando e entre aspas
o local da onde o arquivo estar exportando */
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Pessoa2 from "./components/Pessoa2";
import List from "./components/List";
import Evento from "./components/Evento";
import Form from "./components/Form";

function App() {
  /* Loca na nossa JSX que podemos colocar variáveis para utilizar no HTML */
  const nome = "Gabrielle";

  /* Podemos fazer modificações normalmente nas nossas variáveis como se fosse JS normal */
  const newnome = nome.toLocaleUpperCase();

  /* Podemos ter uma função dentro da nossa "funtion app()" */

  function sum(a, b) {
    return a + b;
  }

  /* Maneira de colocar uma imagem dinâmica */
  const url = "https://via.placeholder.com/150";

  return (
    /* Temos que tudo que vamos mandar para o React colocar numa div */
    /* O (className="app") se refere ao meu arquivo CSS, no caso o arquivo App.css */
    /* É importante a gente usar className ao invés de class, por causa que é uma palavra reservada no react, é importante para não acontecer algum erro */
    <div className="App">
      <h2>Alterando o JSX</h2>
      {/* Abaixo uma maneira da gente colocar uma variável dentro do nosso código HTML */}
      <p>Olá, {newnome}</p>
      {/* Podemos fazer operações com variáveis dentro das chaves */}
      <p>Soma por operação ( 2 + 2 ): {2 + 2}</p>
      {/* Aqui vamos estar utilizando a função criada na parte da JS  */}
      <p>Soma por função ( 15 + 30 ): {sum(15, 30)}</p>
      {/* Como colocar uma imagem dinâmica no meu HTML */}
      <img src={url} alt="Minha imagem" />
      {/* Para executar o nosso componente, ele precisa ser chamado para a nossa função, logo colocamos uma tag com o nome que definimos no import la em cima com tags */}
      <HelloWorld />
      {/* Precisamos colocar um propriedade na chamada para ser reconhecida la no meu componente */}
      <SayMyName nome="Pedro" />
      {/* Poremos reaproveitar e fazer inúmeras chamadas com props diferentes */}
      <SayMyName nome="Matheus" />
      {/* Podemos colocar uma const anterior e alocar um valor a ela, e depois passar na chamada. */}
      <SayMyName nome={nome} />
      {/* Podemos passar infinitas props para os nossos componentes */}
      <Pessoa nome="Jose" idade="35" profissao="bombeiro" foto="https://via.placeholder.com/150" />

      <Pessoa2 nome="Maria" idade="40" profissao="Modelo" foto="https://via.placeholder.com/300" />
      <List />
      <h1>Testando Evento</h1>
      <Evento numero="1" />
      <Evento numero="2" />
      <Form />
    </div>
  );
}

export default App;
