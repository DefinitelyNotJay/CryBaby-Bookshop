
export default function CustomerNavbar() {
    return (
      <>
        <div className="w-screen h-[72px] bg-primary fixed flex items-center justify-evenly px-8 top-0">
          <div className="w-10">Icon</div>
          <input type="text" className="w-[678px] h-10 rounded-xl px-4" />
          <div className="flex justify-between gap-2">
            <button className="px-3 py-1 rounded-lg bg-base">รายได้</button>
            <button className="px-3 py-1 rounded-lg bg-tertiary">ออกจากระบบ</button>
          </div>
        </div>
        <section className="w-screen bg-[#e7e7e7] h-9 mt-[72px] z-99">
          <div>1</div>
        </section>
      </>
    );
  }