/* Fragments possibilita que não precisamos izolar os nossos componentes em varias div's */

import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" ano_lacamento={1985} />
        <Item marca="Mercedes" ano_lacamento={1964} />
        <Item marca="Fiat" ano_lacamento={1915} />
        <Item />
      </ul>
    </>
  );
}

export default List;
