import axios from "axios";
import { Outlet, Link } from "react-router-dom";

export default function ManagerNavbar() {
  const logoutHandler = async () => {
    await axios.get("http://localhost:3000/api/auth/logout", {
      withCredentials: true,
    });
  };
  return (
    <>
      <div className="w-screen bg-[#333] fixed flex items-center justify-center px-8 py-4 top-0">
        <Link to={"/home"}>
          <div className="flex flex-col gap-2">
            <h1 className="text-center text-3xl font-semibold text-[#F8F9FA]">
              CryBaby
            </h1>
            <div className="w-[161px] mx-auto border "></div>
            <h3 className="text-[14px] font-semibold text-center text-[#F8F9FA]">
              ร้านหนังสือออนไลน์
            </h3>
          </div>
        </Link>
        {/* <button
          className="px-3 py-1 rounded-[20px] h-10 text-lg border border-white bg-secondary text-[#E7E7E7]"
          onClick={() => {
            logoutHandler();
          }}
        >
          ออกจากระบบ
        </button> */}
      </div>
      {/* <section className="w-[800px] border-b border-b-[#333] mt-[106px] mx-auto z-99 h-16 flex items-center justify-between gap-2 px-12">
        <NavButton text={"หน้าแรก"} name="home"/>
        <NavButton text={"ขายดี"} name="bestseller" />
        <NavButton text={"มาใหม่"} name="new" />
        <NavButton text={"ฟรีกระจาย"} name="free" />
        <NavButton text={"โปรโมชั่น"} name="promotion" />
        <NavButton text={"ฮิตขึ้นหึ้ง"} name="hit" />
      </section> */}
      <Outlet />
    </>
  );
}

// function NavButton({ text, name }) {
//   async function getData() {
//     await axios.get(`http://localhost:3000/api/book/customer/${name}`)
//     .then(res => alert(res.data));
//   }
//   return (
//     <button
//       className="hover:underline"
//       onClick={() => {
//         getData();
//       }}
//     >
//       {text}
//     </button>
//   );
// }
