import { CONTRACT } from "shared/src";

/** Simple component that renders an image */
const Image = ({ src }: typeof CONTRACT.image.data) => (
  <img
    className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
    src={src}
    alt="image description"
  />
);

export default Image;
