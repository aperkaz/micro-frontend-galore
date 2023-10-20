import React, { Suspense } from "react";
import Navbar from "../components/Navbar";

const CONTRACT = {
  image: {
    url: "domain1/src/components/Image.tsx",
    component: React.lazy(() => import("domain1/src/components/Image.tsx")),
    data: {
      src: "https://www.thelabradorsite.com/wp-content/uploads/2015/07/black-lab-puppy.jpg",
    },
  },
  weatherWidget: {
    url: "domain2/src/components/WeatherWidget.tsx",
    component: React.lazy(() => import("domain2/src/components/WeatherWidget")),
    data: {},
  },
} as const;
type Modules = keyof typeof CONTRACT;

const Renderer = ({ module }: { module: Modules }) => {
  // const LazyComponent = React.lazy(() => import(`${CONTRACT[module].url}`));
  const LazyComponent = CONTRACT[module].component;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...CONTRACT[module]?.data} />
    </Suspense>
  );
};

function Index() {
  const [module, setModule] = React.useState<Modules | null>(null);

  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mt-6 text-lg leading-8 text-gray-300">
          This is a micro-frontend, built with Vite Module Federation and React.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          The remote modules are loaded in the other routes.
        </p>
        <button
          onClick={() => setModule("image")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Lazy load Image component
        </button>
        <button
          onClick={() => setModule("weatherWidget")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Lazy load WeatherWidget component
        </button>

        {module && <Renderer module={module} />}
      </div>
    </>
  );
}

export default Index;
