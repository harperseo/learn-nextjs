import { URL } from "../app/(home)/page";

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Fetching movies: ${Date.now()}`);
  const res = await fetch(`${URL}/${id}`);
  return await res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h5>{JSON.stringify(movie)}</h5>;
}
