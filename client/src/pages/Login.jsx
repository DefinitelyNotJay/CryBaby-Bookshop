import { useForm } from "react-hook-form";
import { registerHandler, registerSchema } from "../utils/register";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Navigate } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    isSubmitting,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  return (
    <div className="">
      {/* {isSubmitSuccessful && <Navigate to={"/"} />} */}
      {console.log(errors)}
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="mx-auto bg-zinc-300 max-w-[400px] p-4 mt-52 rounded-lg"
      >
        <h1 className="text-center text-2xl mb-4">เข้าสู่ระบบ</h1>
        <div className="flex flex-col ">
          <label htmlFor="">ชื่อผู้ใช้งาน</label>
          <input
            type="text"
            placeholder="username"
            name="username"
            className="rounded-md px-2 py-1 mb-2"
            {...register("username")}
          />
          <p className="text-red-500">{errors.username && errors.username.message}</p>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="">รหัสผ่าน</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="rounded-md px-2 py-1 mb-2"
            {...register("password")}
          />
          <p className="text-red-500">
            {errors.password && errors.password.message}
          </p>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-slate-100 rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "กำลังดำเนินการ" : "ยืนยัน"}
        </button>
      </form>
    </div>
  );
}
