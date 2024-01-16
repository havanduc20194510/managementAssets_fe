import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
export default function RegisterHeader() {
  return (
    <header className='py-5 px-20'>
      <div className='mx-auto px-4'>
        <div className='flex items-end'>
          <Link to='/'>
            <img src={logo} alt='logo' className='h-8 lg:h-11' />
          </Link>
          <div className='ml-5 text-xl lg:text-3xl '>Đăng ký</div>
        </div>
      </div>
    </header>
  )
}
