import { useState } from "react";

export default function Likes() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <>
      <section id="atividade">
        <button onClick={() => setLike(like + 1)}>likes = {like}</button>
        <button onClick={() => setDislike(dislike + 1)}>
          dislikes = {dislike}
        </button>
      </section>
    </>
  );
}
