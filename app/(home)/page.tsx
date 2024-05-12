import Movie from "../../components/movie";
import styles from "../../public/styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "home",
};

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return await fetch(API_URL).then((res) => res.json());
}
export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
