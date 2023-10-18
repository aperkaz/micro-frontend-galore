import React from "react";
import { useLoaderData } from "react-router-dom";
import api from "../api";
import Navbar from "../components/Navbar";

const Image = React.lazy(() => import("remote1/Image"));

export const loader = async () => api.getUser();

/** Route showcasing the loader patter, with react-router */
function About() {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <>
      <Navbar />
      <div className="flex items-center space-x-4 m-10">
        <img
          className="w-10 h-10 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt=""
        />
        <div className="font-medium dark:text-white">
          <div>{data.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {data.age} years old
          </div>
        </div>
      </div>

      <div>Image gallery</div>
      <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" />
      <a
        href="/"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Index page
      </a>
    </>
  );
}

export default About;
