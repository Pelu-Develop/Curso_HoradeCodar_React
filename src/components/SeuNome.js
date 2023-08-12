import Saudação from "./Saudação";

function SeuNome({ setNome, name }) {
  return (
    <div>
      <p>Digite o seu nome:</p>
      <input
        type="text"
        placeholder="Qual é o seu nome?"
        onChange={(e) => setNome(e.target.value)}
      />
      <Saudação nome={name} />
    </div>
  );
}

export default SeuNome;
