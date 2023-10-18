import React, { Suspense } from "react";
import { Button } from "../components/Button";
import Navbar from "../components/Navbar";
import { ContextToRemoteStructure } from "../CONSTANTS";

const Image = React.lazy(() => import("remote1/Image"));

const CONTEXTS = Object.keys(ContextToRemoteStructure);

function loadComponent(url: string) {
  const Component = React.lazy(() => import(url));
  return Component;
}

const RenderContext = ({
  context,
}: {
  context: keyof typeof ContextToRemoteStructure;
}) => {
  const Component = loadComponent(ContextToRemoteStructure[context].remote);

  if (!Component) {
    return <div>no context</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...ContextToRemoteStructure[context].mockData} />
    </Suspense>
  );
};

function Index() {
  const [activeContext, setActiveContext] = React.useState<string | null>(null);

  const onClick = () => {
    const nextContextIndex = Math.floor(Math.random() * CONTEXTS.length);

    setActiveContext(CONTEXTS[nextContextIndex]);
  };

  return (
    <>
      <Navbar />

      <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mt-6 text-lg leading-8 text-gray-300">
          A backend driven UI built using Module Federation and Vite.
        </p>
        <Button onClick={onClick} label="Dynamically inject a remote module" />
        <br />
        {activeContext ? (
          <RenderContext context={activeContext} />
        ) : (
          <div>no active context</div>
        )}
      </div>
    </>
  );
}

export default Index;
