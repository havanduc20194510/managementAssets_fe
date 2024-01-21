import FilterGroup from './FilterGroup'
import Navbar from './NavBar'

export default function UserHeader() {
  return (
    <div className='fixed top-0 left-0 right-0 z-10 shadow-[1px_2px_2px_rgba(0,_0,_0,_0.25)] py-4 bg-white'>
      <Navbar />
      <FilterGroup />
    </div>
  )
}
