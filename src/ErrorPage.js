import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-7xl my-3">Oops!</h1>
      <p className="text-2xl my-3">Sorry, an unexpected error has occurred.</p>
      <p className="text-2xl my-3">
        <i className="text-2xl my-3">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
