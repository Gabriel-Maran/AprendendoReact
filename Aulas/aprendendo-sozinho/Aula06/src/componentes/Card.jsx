export default function Card({ title, children }) {
  return (
    //children é reservado, usado para informar que o componenete pode receber outros valores de seu filho(como componentes outr escritas....)
    <>
      <div id="cardContainer">
        <h2>{title}</h2>
        <section>{children}</section>
        <footer>Footer</footer>
      </div>
    </>
  );
}
