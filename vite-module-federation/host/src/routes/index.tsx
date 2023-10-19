import Navbar from "../components/Navbar";

function Index() {
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
      </div>
    </>
  );
}

export default Index;
