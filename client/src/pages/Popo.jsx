import React from 'react'

export default function Popo() {
    return (
    <div className='component flex flex-col gap-5' style={{margin: "20px"}}>
        <h3>Owner Website developer</h3>
        <button className = "bg-black p-3 text-white rounded-md w-16 " onClick={()=>{console.log("test")}}>Back </button>
        <img src="https://scontent.fbkk6-1.fna.fbcdn.net/v/t1.18169-9/14570435_1125220134238784_1971174454972411132_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHJabbc0Tk7WZpKiwOXOKLc6x0VeVJkV7brHRV5UmRXtv2RQtw7b_Z3Z3S-suVvX_TpjyWFixg-2VQDS6xjg96v&_nc_ohc=OWOwUEsGx9kQ7kNvgFSl1aa&_nc_ht=scontent.fbkk6-1.fna&oh=00_AYCB4pVtJ8HOWh6XSx9odf_i5h5CuDcYzMbdm_RoE5_rUA&oe=66C988EF" alt="" />
        <p></p>
    </div>
  )
}
