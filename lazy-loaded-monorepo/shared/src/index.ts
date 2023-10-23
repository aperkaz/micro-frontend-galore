import React from "react";

export const CONTRACT = {
  image: {
    url: "domain1/src/components/Image.tsx",
    component: () => React.lazy(() => import("domain1/src/components/Image")),
    data: {
      src: "https://www.thelabradorsite.com/wp-content/uploads/2015/07/black-lab-puppy.jpg",
    },
  },
  weatherWidget: {
    url: "domain2/src/components/WeatherWidget.tsx",
    component: () =>
      React.lazy(() => import("domain2/src/components/WeatherWidget")),
    data: {},
  },
};

export type ContractModules = keyof typeof CONTRACT;
