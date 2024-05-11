import { URL } from "../app/(home)/page";
import styles from "../public/styles/movie-info.module.css";

export async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  const res = await fetch(`${URL}/${id}`);
  return await res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_black"}>
          to homepage
        </a>
      </div>
    </div>
  );
}
