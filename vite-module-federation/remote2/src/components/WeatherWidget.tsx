import React from "react";

/** Self-container component that performs (simulated) data-fetching */
const WeatherWidget = () => {
  const [data, setData] = React.useState<null | {
    weather: string;
    temperature: number;
  }>();
  React.useEffect(() => {
    new Promise((r) => setTimeout(r, 3000)).then(() =>
      setData({ weather: "sunny ☀️", temperature: 28 })
    );
  }, []);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 pt-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {data?.weather || "loading weather data"}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {data?.temperature && `${data.temperature} degrees`}
        </span>
      </div>
    </div>
  );
};

export default WeatherWidget;
