import search from '../../../../assets/search.png'
import logo_3d from '../../../../assets/logo_3d.png'
import user_avatar from '../../../../assets/user_avatar.png'
export default function Navbar() {
  return (
    <div className='self-stretch bg-white overflow-hidden shrink-0 text-left text-sm text-medium-dark font-poppins px-4 py-4'>
      <div className='w-full overflow-hidden grid grid-cols-12 gap-4 items-center justify-center'>
        <div className='col-span-2 flex flex-row items-center justify-center text-13xl text-teal gap-2'>
          <img className='' alt='logo' src={logo_3d} />
          <div className='leading-[100%] inline-block shrink-0 text-[#3468C0] font-bold font-mono text-3xl'>Assets</div>
        </div>
        <div className='col-span-4 overflow-hidden flex flex-row items-center justify-between bg-white px-4'>
          <div className='flex-1 text-center text-[20px] hover:cursor-pointer'>Home</div>
          <div className='flex-1 text-center text-[20px] hover:cursor-pointer'>Hardware</div>
          <div className='flex-1 text-center text-[20px] hover:cursor-pointer'>Software</div>
          <div className='flex-1 text-center text-[20px] hover:cursor-pointer'>Request list</div>
        </div>
        <form className='bg-white border col-span-4 rounded-full rounded-18xl bg-lavenderblush [backdrop-filter:blur(10px)] flex flex-row items-center justify-between py-2 px-6 text-palevioletred gap-2'>
          <input
            className='bg-white w-[80%] items-center shrink-0 p-2 border-none focus:border-none focus:outline-none'
            placeholder='Search product name'
          />
          <img className='col-span-1 w-6 h-6 overflow-hidden shrink-0 hover:cursor-pointer' alt='' src={search} />
        </form>
        <div className='col-span-2 flex flex-row items-start justify-center box-border gap-2'>
          <img className='w-11 h-11' alt='' src={user_avatar} />
          <b className='font-nunito-sans text-darkslategray-100'>Moni Roy</b>
        </div>
      </div>
    </div>
  )
}
