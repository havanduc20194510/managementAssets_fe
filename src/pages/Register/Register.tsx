import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/Imput'
import { getRules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()
  const onSubmit = handleSubmit(
    (data) => {
      //console.log(data)
    },
    (data) => {
      const password = getValues('password')
      console.log(password)
    }
  )
  const rules = getRules(getValues)

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng ký</div>
              <Input
                type='email'
                placeholder='Email'
                className='mt-8'
                name='email'
                register={register}
                rules={rules.email}
                errorMessage={errors.email?.message}
              />
              <Input
                type='password'
                placeholder='Password'
                className='mt-2'
                name='password'
                register={register}
                autoComplete='on'
                rules={rules.password}
                errorMessage={errors.password?.message}
              />
              <Input
                type='password'
                placeholder='Confirm password'
                className='mt-2'
                name='confirm_password'
                register={register}
                autoComplete='on'
                rules={rules.confirm_password}
                errorMessage={errors.confirm_password?.message}
              />
              <div className='mt-5'>
                <button
                  type='submit'
                  className='flex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'
                >
                  Đăng ký
                </button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link className='ml-1 text-red-400' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
