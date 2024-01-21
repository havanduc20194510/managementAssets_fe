export default function FilterGroup() {
  return (
    <div className='w-full grid grid-cols-3 px-6 py-2 gap-8'>
      <div className='relative border-[0.1px] rounded-lg flex flex-row justify-center items-center'>
        <input
          type='text'
          name='price'
          id='price'
          className='block w-full rounded-md border-0 py-2 pl-7 pr-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6'
          placeholder='Search by category'
        />
        <div className='absolute inset-y-0 right-1 flex items-center'>
          <label htmlFor='category' className='sr-only'>
            Category
          </label>
          <select
            id='category'
            name='category'
            className='h-full py-2 rounded-md border-0 bg-transparent text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
          >
            <option>Software</option>
            <option>Hardware</option>
            <option>Data</option>
          </select>
        </div>
      </div>
      <div className='relative border-[0.1px] rounded-lg flex flex-row justify-center items-center'>
        <input
          type='text'
          name='price'
          id='price'
          className='w-full rounded-md border-0 py-2 pl-7 pr-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6'
          placeholder='Search by category'
        />
        <div className='absolute inset-y-0 right-1 flex items-center'>
          <label htmlFor='category' className='sr-only'>
            Category
          </label>
          <select
            id='category'
            name='category'
            className='h-full py-2 rounded-md border-0 bg-transparent text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
          >
            <option>Software</option>
            <option>Hardware</option>
            <option>Data</option>
          </select>
        </div>
      </div>
      <div className='relative border-[1px] rounded-lg flex flex-row justify-center items-center'>
        <input
          type='text'
          name='price'
          id='price'
          className='w-full rounded-md py-2 pl-7 pr-0 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6'
          placeholder='Search by category'
        />
        <div className='absolute inset-y-0 right-1 flex items-center'>
          <label htmlFor='category' className='sr-only'>
            Category
          </label>
          <select
            id='category'
            name='category'
            className='h-full py-2 rounded-md border-none focus:border-none active:border-none bg-transparent text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
          >
            <option>Software</option>
            <option>Hardware</option>
            <option>Data</option>
          </select>
        </div>
      </div>
    </div>
  )
}
