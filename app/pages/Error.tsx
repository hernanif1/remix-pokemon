import { Link, Links, Meta, Scripts, useCatch } from "remix";

export default function Error() {
  const caught = useCatch();

  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="w-full h-full bg-red-800 flex justify-center items-center text-white">
          <div className="flex flex-col text-center">
            <img
              className="self-center"
              src="https://user-images.githubusercontent.com/1771727/154727379-53a56d67-4bae-4dd1-bb6e-7b33d9f3852b.png"
              width={300}
            />
            <h1 className="mb-4 text-7xl font-bold text-center">
              Something went wrong <br />
            </h1>
            <p className="mb-4 text-5xl font-bold text-center text-red-300">
              {caught.status} {caught.statusText}
            </p>
            <Link className="poke-button py-5" to="/">
              go to home
            </Link>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
