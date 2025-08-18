function ButtonProps({ valorButton, idButton, funcaoClick, classeBotao }) {
  return (
    <>
      <button
        className={classeBotao}
        id={idButton}
        onClick={() => funcaoClick()}
      >
        {valorButton}
      </button>
    </>
  );
}

export default ButtonProps;
