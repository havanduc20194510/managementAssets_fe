import { Form, Input, Space, Dropdown } from 'antd'
import { SearchOutlined, DownOutlined } from '@ant-design/icons'
import { FiAlignJustify } from 'react-icons/fi'
import { FaBell } from 'react-icons/fa'

import avatar from '../../../../assets/avatar.jpg'

// const { Search } = Input;
export default function Header() {
  const items = [
    {
      key: '1',
      label: <p className=''>Login</p>
    }
  ]

  return (
    <div className='h-[70px] float-right flex bg-white w-4/5 fixed top-0 right-0 z-10'>
      <div className='flex w-2/3 mx-10 my-auto'>
        <FiAlignJustify className='my-auto mr-[25px] text-black' />
        <Form className='w-full'>
          <Form.Item>
            <Input className='rounded-full w-2/3 h-[40px] mt-4' placeholder='Search' prefix={<SearchOutlined />} />
          </Form.Item>
          {/* <Form.Item>
            <Button type='primary' htmlType='submit'>
              Log in
            </Button>
          </Form.Item> */}
        </Form>
      </div>

      <div className='w-1/3 flex'>
        <FaBell className='my-auto ml-10 mr-[37px]' />
        <div className='my-auto mr-4'>
          <img src={avatar} className='rounded-full w-[50px] h-[50px]' alt='avatar admin'></img>
        </div>
        <div className='my-auto text-black'>
          <p className='text-base'>Hi, Admin</p>
          <p className='text-sm'>Admin</p>
        </div>

        <Dropdown
          menu={{ items }}
          trigger={['click']}
          className='my-auto mr-[30px] ml-[26px] border-[1px] rounded-full w-[25px] h-[25px] pl-1.5'
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <DownOutlined className='w-[10px]' />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  )
}
