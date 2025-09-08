import { useParams, useSearchParams } from "react-router";

export default function Detail() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <section className="sectionMain">
        <h1>DETALHES</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          ullam corporis cum voluptas labore ipsum quam et eaque fugit
          doloribus, exercitationem animi blanditiis architecto repudiandae,
          earum ex! Sunt, nesciunt enim!
        </p>
        <p>
          {id} {searchParams.get("filter")}
        </p>
        <p></p>
      </section>
    </>
  );
}
