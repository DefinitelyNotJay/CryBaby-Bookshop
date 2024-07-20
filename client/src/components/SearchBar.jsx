import { X } from "lucide-react";

export default function SearchBar({ searchText, setSearchText }) {
  const clearText = () => {
    setSearchText("");
  };
  return (
    <div className="relative">
      <input
        type="text"
        className="border border-secondary w-full px-6 h-8 rounded-full"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        value={searchText}
      />
      {searchText && (
        <X
          className="absolute top-1 right-2 cursor-pointer stroke-stone-700"
          onClick={() => {
            clearText();
          }}
        />
      )}
    </div>
  );
}
