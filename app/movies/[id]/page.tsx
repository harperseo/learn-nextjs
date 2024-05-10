import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideo from "../../../components/movie-video";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Movie</h1>
      <Suspense fallback="loading...">
        <MovieVideo id={id} />
      </Suspense>
      <h1>Video</h1>
      <Suspense fallback="loading...">
        <MovieInfo id={id} />
      </Suspense>
    </div>
  );
}
