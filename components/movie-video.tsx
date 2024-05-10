import { URL } from "../app/(home)/page";

async function getVideo(id: string) {
  console.log(`Fetching video: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 500));
  const res = await fetch(`${URL}/${id}/videos`);
  return res.json();
}

export default async function MovieVideo({ id }: { id: string }) {
  const video = await getVideo(id);
  return <h5>{JSON.stringify(video)}</h5>;
}
