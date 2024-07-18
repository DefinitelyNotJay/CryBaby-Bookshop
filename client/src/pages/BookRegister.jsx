import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { axios } from 'axios';

export default function BookRegister() {
  const schema = z.object({
    book_name: z.string().max(20),
    description: z.string().nullable(),
    cost: z.coerce.number().min(1),
    author: z.string(),
    edition: z.coerce.number(),
  });

  async function bookRegister(formData) {
    await axios.post("http://localhost:3000/api/")
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    isSubmitting,
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <section className="w-full flex bg-purple-300 p-12 h-[calc(100vh-144px)]">
      <div className="w-7/12 bg-base h-full p-4 rounded-xl">
        <div className="w-full h-full bg-white rounded-xl p-4">
          <h1 className="text-center text-xl font-semibold">
            ลงทะเบียนหนังสือ
          </h1>
          <form onSubmit={handleSubmit(bookRegister)}>
            <div className="ml-52">
              <label htmlFor="">ชื่อหนังสือ: </label>
              <input
                className="rounded-md px-2 py-1 mb-2 border bg-base"
                type="text"
                name="book_name"
                {...register("book_name")}
              />
              {errors.book_name && errors.book_name.message}
            </div>
            <div className="ml-52">
              <label htmlFor="">คำอธิบาย: </label>
              <input
                className="rounded-md px-2 py-1 mb-2 border bg-base"
                type="text"
                name="description"
                {...register("description")}
              />
              {errors.description && errors.description.message}
            </div>
            <div className="ml-52">
              <label htmlFor="">ผู้แต่ง: </label>
              <input
                className="rounded-md px-2 py-1 mb-2 border bg-base"
                type="text"
                name="author"
                {...register("author")}
              />
            </div>
            <div className="ml-52">
              <label htmlFor="">ราคา: </label>
              <input
                className="rounded-md px-2 py-1 mb-2 border bg-base"
                type="number"
                name="cost"
                {...register("cost")}
              />
              {errors.cost && errors.cost.message}
            </div>
            <div className="ml-52">
              <label htmlFor="">พิมพ์ครั้งที่: </label>
              <input
                defaultValue={1}
                className="rounded-md px-2 py-1 mb-2 border bg-base"
                type="number"
                name="edition"
                {...register("edition")}
              />
              {errors.edition && errors.edition.message}
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-slate-100 rounded-md ml-52"
            >
              ยืนยัน
            </button>
          </form>
        </div>
      </div>
      <div className="w-5/12 bg-base rounded-r-xl">d;asdjfaklsdfj</div>
    </section>
  );
}
