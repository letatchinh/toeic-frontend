import { Button, Form, Image, Input } from 'antd'
import React from 'react'

export default function PageDangKy() {
    const [form] = Form.useForm()
    const onFinish = (values) => {
        console.log(values);
    }
  return (
    <div className='salePage--DangKy'>
    <div  className='salePage--DangKy__bg'>

    </div>
    <div className='salePage--DangKy__left'>
    <p className='salePage--DangKy__left__title'>
    Cuối cùng nếu bạn muốn đăng ký thì phải làm sao?
    </p>
    <div className='salePage--DangKy__left__content'>

   
    <p >
    Điền thông tin dưới đây để tham gia cùng <br />Hoàng Toeic
  
    </p>
    <Form form={form} onFinish={onFinish} labelCol={{lg : 4 , md : 4 , sm : 4 , xs : 6}} labelAlign='left'>
        <Form.Item label='Họ và tên'>
        <Input placeholder='_ _ _ _ _ _ _ _ _ _ _' bordered={false}/>
        </Form.Item>
        <Form.Item label='Email'>
        <Input placeholder='_ _ _ _ _ _ _ _ _ _ _' bordered={false}/>
        </Form.Item>
        <Button htmlType='submit' className='submit'>Tham gia ngay</Button>
    </Form>
    </div>
    </div>
    <div className='salePage--DangKy__right'>
   <Image preview={false} src='/assets/images/salePage/IMG_0291.png'/>
    </div>
    </div>
  )
}
