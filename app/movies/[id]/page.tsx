import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideo from "../../../components/movie-video";
import { getMovie } from "../../../components/movie-info";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}
export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback="loading...">
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback="loading...">
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
