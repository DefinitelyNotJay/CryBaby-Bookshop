export default function SelectedCategory({ title, setSelectedCategories }) {
  return (
    <span
      className="hover:bg-tertiary hover:text-[#333] bg-primary text-white px-2 py-1 cursor-pointer"
      onClick={() => {
        setSelectedCategories((prev) => {
          return prev.filter((category) => category !== title);
        });
      }}
    >
      {title}
    </span>
  );
}
