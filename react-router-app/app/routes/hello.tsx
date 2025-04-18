import type { Route } from "./+types/hello";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export function loader({}: Route.LoaderArgs) {
  return fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => response.json());
}

export default function Page({ loaderData }: Route.ComponentProps) {
  return <pre>{JSON.stringify(loaderData, null, 2)}</pre>;
}
