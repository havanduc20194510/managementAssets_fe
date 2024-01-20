import React from 'react'
import { Form, Input, Space, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { FiAlignJustify } from "react-icons/fi"
import { FaBell } from "react-icons/fa"
import { DownOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'

import avatar from "../../assets/avatar.jpg"

// const { Search } = Input;
const Header = () => {
    const items = [
        {
            key: '1',
            label: (
                <p className=''>Login</p>
            ),
        },
    ]

    return (
        <div className="w-full h-[70px] bg-white float-right flex">
            <div className='flex w-2/3 mx-10 my-auto'>
                <FiAlignJustify className='my-auto mr-[25px] text-black' />
                <Form className='w-full'>
                    <Form.Item>
                        <Input
                            className='rounded-full w-2/3 h-[40px] mt-4'
                            placeholder="Search"
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

            <div className='w-1/3 flex'>
                <FaBell className='my-auto ml-10 mr-[37px]' />
                <div className='my-auto mr-4'>
                    <img src={avatar} className='rounded-full w-[50px] h-[50px]'></img>
                </div>
                <div className='my-auto text-black'>
                    <p className='text-base'>Hi, Admin</p>
                    <p className='text-sm'>Admin</p>
                </div>

                <Dropdown menu={{ items, }} trigger={['click']} className='my-auto mr-[30px] ml-[26px] border-[1px] rounded-full w-[25px] h-[25px] pl-1.5'>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <DownOutlined className='w-[10px]' />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </div >
    );
};

export default Header;