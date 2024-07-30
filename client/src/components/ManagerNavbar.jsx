import axios from "axios";
import NavButton from "./NavButton";
import { Outlet, Link } from "react-router-dom";

export default function ManagerNavbar() {
  const logoutHandler = async () => {
    await axios.get("http://localhost:3000/api/auth/logout", {
      withCredentials: true,
    });
  };
  return (
    <>
      <div className="w-screen h-[72px] bg-primary fixed flex items-center justify-between px-8 top-0">
        <Link to={"/book-register"}>
          <p className="font-semibold text-3xl text-[#fefae0]">CryBaby</p>
        </Link>

        <button
          className="px-3 py-1 rounded-[20px] h-10 text-lg border border-white bg-secondary text-[#E7E7E7]"
          onClick={() => {
            logoutHandler();
          }}
        >
          ออกจากระบบ
        </button>
      </div>
      <section className="w-screen bg-tertiary mt-[72px] z-99 h-16 flex items-center gap-2 px-4">
        <NavButton title={"หน้าหลัก"} link={"/book-register"} />
        <NavButton title={"โปรโมชั่น"} link={"/promotion"} />
        <NavButton title={"พนักงาน"} link={"/staff"} />
      </section>
      <Outlet />
    </>
  );
}
