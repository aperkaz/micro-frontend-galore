import React from "react";
import Navbar from "../components/Navbar";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const WeatherWidget = React.lazy(() => import("remote2/WeatherWidget"));

function Weather() {
  return (
    <div className="min-h-full">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mt-6 text-lg leading-8 text-gray-300">
          The component below is loaded from a remote.
        </p>
      </div>
      <React.Suspense fallback={<div>loading remote module...</div>}>
        <p className="mt-6 ">Remote2: WeatherWidget</p>
        <WeatherWidget />
      </React.Suspense>
      <div></div>
    </div>
  );
}

export default Weather;
