/* Para usar o CSS precisamos fazer a importação dele */
import styles from "./Frase.module.css";

function Frase() {
  return (
    /* Cada classe criada no CSS vai ser igual a props, vamos colocar na propriedade className do nosso HTML e invoca e usar o nome que colocamos da importação
    mais um "." e o nome da classe que queremos associar */
    <div className={styles.fraseContainer}>
      <p className={styles.frase_Content}>Este é um componente com uma frase!</p>
    </div>
  );
}

export default Frase;
