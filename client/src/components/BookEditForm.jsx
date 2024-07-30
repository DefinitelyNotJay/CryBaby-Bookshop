import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import axios from "axios";
import { useEffect, useState } from "react";
import SelectedCategory from "./SelectCategory";
const id = location.pathname.split("/")[2] || undefined;
export default function BookEditForm() {
  const [bookInfo, setBookInfo] = useState({});
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const editBookSchema = z.object({
    name: z.string().max(50),
    description: z.string().nullable(),
    cost: z.coerce.number().min(1),
    author: z.string(),
    edition: z.coerce.number(),
    imageSrc: z.string(),
    category: z.any(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    isSubmitting,
  } = useForm({
    resolver: zodResolver(editBookSchema),
    defaultValues: async () => {
      const data = await axios.get(`http://localhost:3000/api/book/${id}`);
      const { data: bookData } = data;
      setBookInfo(bookData);
      return {
        name: bookData.name,
        cost: bookData.cost,
        imageSrc: bookData.imageSrc,
        author: bookData.author,
        description: bookData.description,
        edition: bookData.edition,
      };
    },
  });

  async function bookEdit(formData) {
    formData.category = selectedCategories;
    await axios
      .post(
        "http://localhost:3000/api/book/edit",
        { ...formData, id: id },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        alert("แก้ไขหนังสือสำเร็จ");
        window.location.reload();
      });
  }

  async function getCategoryOptions() {
    await axios
      .get("http://localhost:3000/api/book/categories", {
        withCredentials: true,
      })
      .then((res) => {
        setCategories(res.data);
      });
  }

  useEffect(() => {
    getCategoryOptions();
    setSelectedCategories(bookInfo?.categories);
  }, [bookInfo]);

  return (
    <>
      <h1 className="text-center ml-24 text-3xl mb-6">{bookInfo.name}</h1>
      <form
        onSubmit={handleSubmit(bookEdit)}
        className="ml-52 flex flex-col gap-2 w-full"
      >
        <div>
          <label htmlFor="">ชื่อหนังสือ: </label>
          <input
            className="rounded-md px-2 py-1 border bg-base w-64"
            type="text"
            name="name"
            {...register("name")}
          />
        </div>
        <p className="text-red-500">{errors.name && errors.name.message}</p>
        <div className="flex">
          <label htmlFor="">คำอธิบาย: </label>
          <textarea
            className="rounded-md px-2 py-1 border bg-base w-64 resize-none"
            name="description"
            {...register("description")}
          />
        </div>
        <p className="text-red-500">
          {errors.description && errors.description.message}
        </p>
        <div>
          <label htmlFor="">รูปภาพ: </label>
          <input
            className="rounded-md py-1 px-2 border bg-base"
            type="string"
            name="imageSrc"
            {...register("imageSrc")}
          />
        </div>
        <div>
          <label htmlFor="">ประเภท: </label>
          <select
            name="category"
            {...register("category")}
            className="px-4 py-1 bg-base rounded-lg"
            onChange={(ev) => {
              setSelectedCategories((prev) => {
                if (
                  ev.target.value === "" ||
                  selectedCategories.includes(ev.target.value)
                )
                  return prev;
                return [...prev, ev.target.value];
              });
            }}
          >
            <option selected value="">
              เลือกประเภท
            </option>
            {categories &&
              categories.map((category) => (
                <option
                  key={category.id}
                  value={category.value}
                  className="font-base"
                >
                  {category.name}
                </option>
              ))}
          </select>
          <div className="flex mt-2 gap-2">
            {selectedCategories &&
              selectedCategories.map((category) => (
                <SelectedCategory
                  key={category}
                  title={category}
                  setSelectedCategories={setSelectedCategories}
                />
              ))}
          </div>
        </div>
        <p className="text-red-500">{errors.image && errors.image.message}</p>
        <div>
          <label htmlFor="">ผู้แต่ง: </label>
          <input
            className="rounded-md px-2 py-1 border bg-base w-64"
            type="text"
            name="author"
            {...register("author")}
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
          />
        </div>
        <p className="text-red-500">{errors.cost && errors.cost.message}</p>
        <div>
          <label htmlFor="">พิมพ์ครั้งที่: </label>
          <input
            className="rounded-md px-2 py-1 border bg-base w-64"
            type="number"
            name="edition"
            {...register("edition")}
          />
        </div>
        <p className="text-red-500">
          {errors.edition && errors.edition.message}
        </p>
        <button
          type="submit"
          className="px-4 py-2 ml-24 w-24 bg-gray-700 hover:bg-gray-800 text-slate-100 rounded-md"
        >
          {isSubmitting ? "กำลังดำเนินการ" : "ยืนยัน"}
        </button>
      </form>
    </>
  );
}
