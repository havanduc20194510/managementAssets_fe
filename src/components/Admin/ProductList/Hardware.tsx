import React, { useState } from 'react'
import { Form, Input, Pagination } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import avatar from '../../../assets/avatar.jpg'
import { Link } from 'react-router-dom'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function Hardware() {
  return (
    <div className='bg-[#F5F6FA] mt-[100px] w-full'>
      <div className='flex mt-8 mx-8 w-full '>
        <h1 className='w-3/4 text-2xl mt-3'>Hardware List</h1>
        <div className='w-1/5'>
          <Form className='w-full'>
            <Form.Item>
              <Input
                className='rounded-full h-[30px] mt-4'
                placeholder='Search product name'
                prefix={<SearchOutlined />}
              />
            </Form.Item>
            {/* <Form.Item>
                            <Button type='primary' htmlType='submit'>
                            Log in
                            </Button>
                        </Form.Item> */}
          </Form>
        </div>
      </div>
      <div className='mx-8 mb-1 h-[48px] border-[1px] border-[#D5D5D5] '>
        <div className='flex pt-2.5 mx-12 justify-between text-sm font-bold'>
          <p>Image</p>
          <p className='w-[20%] -ml-5'>Product Name</p>
          <p>Manufacture</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Code</p>
          <p>Location</p>
          <p>Action</p>
        </div>
      </div>
      <div className='mx-7 h-[100px] border-b-2 border-b-[#D5D5D5] text-sm'>
        <div className='flex justify-between mx-10 pt-3.5'>
          <img src={avatar} className='w-[60px] h-[60px] rounded-lg' alt='product img' />
          <Link to='' className='w-[20%] -ml-10 mt-4'>
            DELL XPS 13 9320 Plus
          </Link>
          <p className='mt-4'>DELL</p>
          <p className='mt-4'>$690.00</p>
          <p className='mt-4'>63</p>
          <p className='mt-4'>HW001</p>
          <p className='mt-4 '>HB1</p>
          <div className='flex mt-5 w-[4%]'>
            <Link to=''>
              <FaRegEdit />
            </Link>
            <Link to='' className='text-red-600 pl-2'>
              <RiDeleteBin6Line />
            </Link>
          </div>
        </div>
      </div>
      <div className=''>
        {/* <Pagination current={current} onChange={onChange} total={50} className="mt-5 ml-96" /> */}
      </div>
    </div>
  )
}
