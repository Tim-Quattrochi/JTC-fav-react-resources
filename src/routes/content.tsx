import { useLoaderData, useFetcher } from "react-router-dom";
import type { Params } from "react-router-dom";
import { Resource } from "../resources";
import { resources } from "../resources";
import { LoaderData } from "./root";

export function loader({ params }: { params: Params }) {
  const resource = resources.find(
    (resource) => resource.name === params.name
  );

  if (!resource) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { resource };
}

export async function action({ params }: { params: Params }) {
  const favItem = resources.find(
    (resource) => resource.name === params.name
  );

  if (favItem) {
    favItem.favorite = true;
  }

  return favItem;
}

export default function Technology() {
  const { resource } = useLoaderData() as LoaderData;

  return (
    <div id="resource">
      <div>
        <img key={resource.name} src={resource.image} />
      </div>

      <div>
        <h1>
          {resource.name ? <>{resource.name}</> : <i>No Name</i>}
          <Favorite resource={resource} />
        </h1>
        <p>{resource.description}</p>
        <a
          href={resource.url}
          rel="noreferrer noopener"
          target="_blank"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

function Favorite({ resource }: { resource: Resource }) {
  const fetcher = useFetcher();
  let favorite = resource.favorite;

  if (fetcher.formData) {
    favorite = fetcher.formData.get("favorite") === "true";
  }

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite ? "Remove from favorites" : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
