import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div className="min-h-full flex gap-2 flex-col items-center justify-center">
      <h1 className="text-heading-md text-gray-100">Oops!</h1>
      <p>Sorry, something unexpected happened.</p>
      <p>
        <span className="italic text-gray-200">{errorMessage}</span>
      </p>
      <Link className="mt-2 underline underline-offset-2 text-gray-100" to="/">
        Go back to home page
      </Link>
    </div>
  );
}
