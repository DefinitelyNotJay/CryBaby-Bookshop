export default function Book({ name, cost, author }) {
  return (
    <div className="w-full flex flex-col justify-center justify-self-center">
      {/* <img src={"/" + name} /> */}
      <div className="w-32 h-44 bg-primary"></div>
      <p>{name}</p>
      <p className="text-neutral-400">{author}</p>
    </div>
  );
}
