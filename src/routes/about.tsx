import { useLoaderData } from "react-router-dom";
import api from "../api";

export const loader = async () => api.getUser();

function About() {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <>
      <div>About page</div>
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
