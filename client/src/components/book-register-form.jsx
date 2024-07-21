import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import axios from "axios";
export default function BookRegisterForm({ bookInfo }) {
  async function bookRegister(formData) {
    await axios.post("http://localhost:3000/api/book/create", formData, {
      withCredentials: true,
    });
  }

  async function bookEdit(formData) {
    const editData = {...formData, id: bookInfo.id}
    await axios.post("http://localhost:3000/api/book/edit", editData, {
      withCredentials: true,
    });
  }

  const schema = z.object({
    name: z.string().max(50),
    description: z.string().nullable(),
    cost: z.coerce.number().min(1),
    author: z.string(),
    edition: z.coerce.number(),
    image: z.any(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    isSubmitting,
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(bookInfo ? bookEdit : bookRegister)}
      className="ml-52 flex flex-col gap-2 w-7/12"
    >
      <div>
        <label htmlFor="">ชื่อหนังสือ: </label>
        <input
          className="rounded-md px-2 py-1 border bg-base w-64"
          type="text"
          name="name"
          {...register("name")}
          defaultValue={bookInfo?.name}
        />
      </div>
      <p className="text-red-500">{errors.name && errors.name.message}</p>
      <div className="flex">
        <label htmlFor="">คำอธิบาย: </label>
        <textarea
          className="rounded-md px-2 py-1 border bg-base w-64 resize-none"
          name="description"
          {...register("description")}
          defaultValue={bookInfo?.description}
        />
      </div>
      <p className="text-red-500">
        {errors.description && errors.description.message}
      </p>
      <div>
        <label htmlFor="">รูปภาพ: </label>
        <input
          className="rounded-md py-1 px-2 border bg-base"
          type="file"
          accept="image/png, image/gif, image/jpeg"
          name="image"
          {...register("image")}
          defaultValue={bookInfo?.image}
        />
      </div>
      <p className="text-red-500">{errors.image && errors.image.message}</p>
      <div>
        <label htmlFor="">ผู้แต่ง: </label>
        <input
          className="rounded-md px-2 py-1 border bg-base w-64"
          type="text"
          name="author"
          {...register("author")}
          defaultValue={bookInfo?.author}
        />
      </div>
      <p className="text-red-500">{errors.author && errors.author.message}</p>
      <div>
        <label htmlFor="">ราคา: </label>
        <input
          className="rounded-md px-2 py-1 border bg-base w-64"
          type="number"
          name="cost"
          {...register("cost")}
          defaultValue={bookInfo?.cost}
        />
      </div>
      <p className="text-red-500">{errors.cost && errors.cost.message}</p>
      <div>
        <label htmlFor="">พิมพ์ครั้งที่: </label>
        <input
          defaultValue={1}
          className="rounded-md px-2 py-1 border bg-base w-64"
          type="number"
          name="edition"
          {...register("edition")}
        />
      </div>
      <p className="text-red-500">{errors.edition && errors.edition.message}</p>
      <button
        type="submit"
        className="px-4 py-2 ml-24 w-24 bg-gray-700 hover:bg-gray-800 text-slate-100 rounded-md"
      >
        {isSubmitting ? "กำลังดำเนินการ" : "ยืนยัน"}
      </button>
    </form>
  );
}
