import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Navigate } from "react-router-dom";
import { loginSchema, loginHandler } from "../utils/authentication";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    isSubmitting,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  return (
    <div className="w-screen h-screen flex items-center bg-primary">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="mx-auto bg-white min-w-[400px] px-16 py-4 rounded-lg"
      >
        <div className="flex flex-col gap-2 mt-4">
          <h1 className="text-center text-3xl font-semibold text-[#333]">
            CryBaby
          </h1>
          <div className="w-[161px] mx-auto border border-b-black"></div>
          <h3 className="text-[14px] font-semibold text-center text-[#555]">
            ร้านหนังสือออนไลน์
          </h3>
        </div>
        <h1 className="text-center text-3xl font-semibold mt-10 text-[#333]">
          เข้าสู่ระบบ
        </h1>
        <div className="flex flex-col mt-6">
          <input
            type="text"
            placeholder="ชื่อผู้ใช้งาน"
            name="username"
            className="rounded-md px-3 py-2 border border-[#E8E8E8] text-[14px]"
            {...register("username")}
          />
          <p className="text-red-500">
            {errors.username && errors.username.message}
          </p>
        </div>
        <div className="flex flex-col mt-4">
          <input
            type="password"
            placeholder="รหัสผ่าน"
            name="password"
            className="rounded-md px-3 py-2 border border-[#E8E8E8] text-[14px]"
            {...register("password")}
          />
          <p className="text-red-500">
            {errors.password && errors.password.message}
          </p>
        </div>
        <button
          type="submit"
          className="px-4 py-2 w-full bg-primary hover:bg-secondary shadow-md text-slate-100 rounded-xl mt-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? "กำลังดำเนินการ" : "เข้าสู่ระบบ"}
        </button>
        <p className="text-[#555] text-[14px] text-center mt-4">
          ยังไม่มีบัญชี?{" "}
          <Link to="/register" className="underline">
            สมัครได้ที่นี่
          </Link>
        </p>
      </form>
    </div>
  );
}
