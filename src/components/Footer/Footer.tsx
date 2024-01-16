export default function Footer() {
  return (
    <footer className='py-16 bg-neutral-100'>
      <div className='max-width-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
          <div className='lg:col-span-1 mx-auto'>
            <div className='text-2xl font-bold mb-5'>Hỗ trợ khách hàng</div>
            <div className='text-neutral-600 mb-2'>Hotline: 1900 1000</div>
            <div className='text-neutral-600 mb-2'>Email: abc@gmail.com </div>
          </div>
          <div className='lg:col-span-1 mx-auto'>
            <div className='text-2xl font-bold mb-5'>Về chúng tôi</div>
            <div className='text-neutral-600 mb-2'>Giới thiệu</div>
            <div className='text-neutral-600 mb-2'>Tuyển dụng</div>
            <div className='text-neutral-600 mb-2'>Điều khoản</div>
          </div>

          <div className='lg:col-span-1 mx-auto'>
            <div className='text-2xl font-bold mb-5'>Kết nối với chúng tôi</div>
            <div className='text-neutral-600 mb-2'>Facebook</div>
            <div className='text-neutral-600 mb-2'>Instagram</div>
            <div className='text-neutral-600 mb-2'>Twitter</div>
          </div>

          <div className='lg:col-span-1 mx-auto'>
            <div className='text-2xl font-bold mb-5'>Đa ngôn ngữ</div>
            <div className='text-neutral-600 mb-2'>Tiếng Anh</div>
            <div className='text-neutral-600 mb-2'>Tiếng Việt</div>
            <div className='text-neutral-600 mb-2'>Tiếng Nhật</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
