import cachorroChupetao from "../assets/cachorroChupetao.jfif";

export default function ImagemDesc() {
  return (
    <>
      <figure id="imagemDesc">
        <img src={cachorroChupetao} alt="EITA" />
        <figcaption>
          <h3>Desenvolvedor de software, focado em Back End</h3>
          <p id="breveDesc">
            Sempre amei programação e fui muito curioso, como é possivel ver em
            meu github, dedico muito tempo aos meus estudos
          </p>
        </figcaption>
      </figure>
    </>
  );
}
