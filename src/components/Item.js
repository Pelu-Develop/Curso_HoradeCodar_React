/* Importamos o PropTypes do próprio react para o meu componente */
import PropTypes from "prop-types";

function Item({ marca, ano_lancamento }) {
  return (
    <>
      <li>
        {marca} - {ano_lancamento}
      </li>
    </>
  );
}

/* E uma maneira de fazer validações no React, caso não seja atendida irar imprimir um erro no console */
/* Estamos dizendo aqui que vamos definir types para a nossa função Item */
Item.propTypes = {
  /* Aqui estamos definindo que marca tem que receber um valor do tipo string */
  /* isRequired estamos definindo que precisa ter algum tipo de valor, não pode ter um conteúdo vazio */
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number,
};

/* Caso não seja passado nenhum valor, será exibido essa mensagem no lugar */
Item.defaultProps = {
  marca: "Faltou a marca",
  ano_lancamento: 0,
};

export default Item;
