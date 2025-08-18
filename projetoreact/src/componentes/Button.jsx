function Button({ children }) {
  /*
    children -> pega o valor filho do elemento
    se eu colocar em outro componente que importa este: <Button>Gabriel</Button> e <Button>Cleiton</Button>, 
        vão aparecer dois botões, com seus respectivos nomes
    o children entra nessa de atribuir o valor ao que o filho passa
    
    */
  return (
    <>
      <button id="botao">{children}</button>
    </>
  );
}

export default Button;
