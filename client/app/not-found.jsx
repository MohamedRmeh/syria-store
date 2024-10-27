"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Error() {
  useEffect(() => {
    document.title = "Error 404 - Not founded page !";
  }, []);

  return (
    <div className="flex justify-center items-center gap-10 flex-wrap mt-64">
      <div className="image flex ">
        <img src="/images/error.png" />
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl">Oops...</h1>

        <p className="text-slate-600 text-sm">
          <span>We can't find that page.</span>
          <br />
          <span>Let's get you back on the right track.</span>
          <br />
          <span>Try another search, or click below.</span>
        </p>
        <div className="mb-20 sm:mb-0">
          <Link
            href="/"
            className="bg-red-600 py-2 px-8 text-white text-sm text-center rounded-md font-semibold"
          >
            Take me home
          </Link>
        </div>
      </div>
    </div>
  );
}
