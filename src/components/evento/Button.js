function Button(props) {
  /* Se formos ter só uma linha de código, não precisamos usar o () no return */
  return <button onClick={props.event}>{props.text}</button>;
}

export default Button;
