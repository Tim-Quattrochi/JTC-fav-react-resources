import { useEffect } from "react";
import {
  Outlet,
  useLoaderData,
  Form,
  useNavigation,
  useSubmit,
  NavLink,
} from "react-router-dom";
import { resources, Resource } from "../resources";

export type LoaderData = {
  result: Resource[] | undefined;
  resource: Resource;
  q: string | null;
};

export function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");

  const result = resources.filter((resource) =>
    resource.name.toLowerCase().includes(q?.toLowerCase() || "")
  );

  if (result.length === 0) {
    return { resources, q };
  } else {
    return { result, q };
  }
}

export default function Root() {
  const { result, q } = useLoaderData() as LoaderData;

  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q")
      ? true
      : false;

  useEffect(() => {
    const inputElement = document.getElementById(
      "q"
    ) as HTMLInputElement | null;

    if (inputElement) {
      inputElement.value = q ?? "";
    }
  }, [q]);

  function getFilteredResources(
    result: Resource[] | undefined
  ): Resource[] | undefined {
    if (result && result?.length > 0) {
      return result;
    } else {
      return undefined;
    }
  }

  const data = getFilteredResources(result);

  return (
    <>
      <div id="sidebar">
        <h1>React Resources</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q ?? ""}
              onChange={(event) => {
                const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
            />
            <div id="search-spinner" hidden={!searching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
        </div>
        <nav>
          {data !== undefined ? (
            <ul>
              {data.map((resource: Resource) => (
                <li key={resource.name}>
                  <NavLink
                    to={`resource/${resource.name}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {resource.name ? resource.name : <i>No Name</i>}{" "}
                    {resource.url && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No Resources</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}
