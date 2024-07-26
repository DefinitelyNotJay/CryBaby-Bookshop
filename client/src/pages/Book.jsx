import BookEditForm from "../components/book-edit-form";
export default function Book() {
  return (
    <div className="h-full w-screen p-14">
      <div className="bg-base rounded-xl p-8">
        <div className="bg-white rounded-xl p-8">
          <div className="flex items-center">
            <div className="bg-secondary w-80 h-96"></div>
            <div>
              {(<BookEditForm/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
