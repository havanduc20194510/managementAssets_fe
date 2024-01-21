interface Props {
  topic?: string
  productType?: string
}
export default function ProductList({ topic, productType }: Props) {
  return (
    <div>
      <h2 className='relative font-bold text-2xl mt-24 mb-20 ml-12'>
        {topic}
        <span className='absolute h-1 w-48 bg-orange bottom-[-10px] left-0'></span>
      </h2>
      <div className='grid grid-cols-12 gap-8 px-24 mb-12'>
        {Array(8)
          .fill(0)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .map((_, index) => (
            // eslint-disable-next-line react/jsx-key
            <div className='lg:col-span-3 sm:col-span-1 md:col-span-2 product-card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition border-2'>
              <img
                className='w-full h-56 object-cover hover:scale-105 transition duration-200'
                src='https://laptop88.vn/media/product/8427_lenovo_legion_5_2023_15arp8_83ef0002us.jpg'
                alt='card img'
              />
              <div className='pt-4 pb-3 px-4'>
                <h3 className='text-lg font-semibold text-gray-800'>Gaming Mouse</h3>
                <p className='text-sm text-gray-500 mt-1'>Gaming mouse with 6 buttons...</p>

                <div className='mt-3 flex items-end justify-between'>
                  <p className='text-lg font-bold text-indigo-500'>{productType == 'hardware' ? 'Price' : 'Set'}</p>

                  <button className='bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600'>
                    Add to request
                  </button>
                </div>

                <div className='text-sm text-gray-500 mt-4 flex items-center'>
                  <svg
                    className='w-4 h-4 text-yellow-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>

                  <span className='ml-1 text-sm'>4.8 </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
