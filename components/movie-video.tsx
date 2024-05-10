import { URL } from "../app/(home)/page";

async function getVideo(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log(`Fetching video: ${Date.now()}`);
  const res = await fetch(`${URL}/${id}/videos`);
  return res.json();
}

export default async function MovieVideo({ id }: { id: string }) {
  const video = await getVideo(id);
  return <h5>{JSON.stringify(video)}</h5>;
}
