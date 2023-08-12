function OutraLista({ itens }) {
  return (
    <>
      <h3>Lista de coisas boas</h3>
      {/* Utilizamos o map para percorrer no nosso array */}
      {itens.map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
}

export default OutraLista;
