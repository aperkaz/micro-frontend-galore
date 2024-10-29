export default function Button() {
  return (
    <button
      onClick={() => {
        // @ts-ignore
        console.log(window.should.crash);
        // throw new Error("pasta la vista! ☠️");
      }}
    >
      Provider button, throw error!
    </button>
  );
}
