/**
 * File containing the bare-bones logic to orchestrate the loading or remote modules using Vite's module federation.
 * If maps from a given context, to a given remote's exposed module.
 */
export const ContextToRemoteStructure = {
  image: {
    remote: "remote1/Image",
    mockData: {
      src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
    },
  },
  // table: {
  //   remote: "remote1/Table",
  //   mockData: {},
  // },
  "weather-widget": {
    remote: "remote2/WeatherWidget",
    mockData: {},
  },
};
