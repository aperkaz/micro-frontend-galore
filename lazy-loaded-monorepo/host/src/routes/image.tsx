import React from "react";
import Navbar from "../components/Navbar";
import Image from "domain1/src/components/Image";
// const Image = React.lazy(() => import("domain1"));

function About() {
  return (
    <div className="min-h-full">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mt-6 text-lg leading-8 text-gray-300">
          The components below is loaded from a remote.
        </p>
      </div>
      <React.Suspense fallback={<div>loading remote modules...</div>}>
        <p className="mt-6">Remote1: Image</p>
        <Image src="https://www.thelabradorsite.com/wp-content/uploads/2015/07/black-lab-puppy.jpg" />
      </React.Suspense>
      <div></div>
    </div>
  );
}

export default About;
