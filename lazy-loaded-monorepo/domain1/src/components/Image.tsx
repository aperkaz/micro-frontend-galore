/** Simple component that renders an image */
const Image = ({
  src,
}: {
  /** Yoo */
  src: string;
}) => (
  <img
    className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
    src={src}
    alt="image description"
  />
);

export default Image;
