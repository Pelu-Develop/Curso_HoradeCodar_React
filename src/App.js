import "./App.css";

function App() {
  /* Loca na nossa JSX que podemos colocar variáveis para utilizar no HTML */
  const nome = "Pedro";

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
    </div>
  );
}

export default App;
