/* Fragments possibilita que não precisamos izolar os nossos componentes em varias div's */

import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" />
        <Item marca="Mercedes" />
      </ul>
    </>
  );
}

export default List;
