import React from 'react'
import Item from './Item'
const itemsNews = [
    {
        label: 'Các cuộc thi',
        path: '',
    },
    {
        label: 'Sự kiện và hợp tác',
        path: '',
    },
    {
        label: 'Quy định và thông báo',
        path: '',
    },
];

const itemsTest = [
    {
        label: 'Các bài thi tiếng anh',
        path: '',
        submenu : [
            {
                label : "TOEIC",
                path : '',
            },
            {
                label : "TOEIC SW",
                path : '',
            },
            {
                label : "TOEIC Bridge",
                path : '',
            },
            {
                label : "TOEIC SP",
                path : '',
            },
        ]
    },
    {
        label: 'Các bài thi tin học',
        path: '',
    },
    {
        label: 'Các bài thi khác',
        path: '',
        submenu : [
            {
                label : "TOEIC",
                path : '',
            },
            {
                label : "TOEIC SW",
                path : '',
            },
            {
                label : "TOEIC Bridge",
                path : '',
            },
            {
                label : "TOEIC SP",
                path : '',
            },
        ]
    },
];

const ToChucThi = [
    {
        label: 'Đăng ký thi',
        path: '',
    },
    {
        label: 'lịch thi và trả kết quá',
        path: '',
    },
    {
        label: 'Địa điểm thi',
        path: '',
    },
];

const Contact = [
    {
        label: 'Thông tin liên hệ',
        path: '',
    },
    {
        label: 'Hỏi đáp',
        path: '',
    },
];

export default function index() {
    return (
        <div className='navbar'>
            <ul className='navbar--list'>
                <Item
                    label={"Trang chủ"}
                />
                <Item
                    label={"Giới thiệu"}
                />
                <Item
                    label={'Tin tức'}
                    menuItems={itemsNews}

                />
                <Item
                    label={'Bài thi'}
                    menuItems={itemsTest}

                />
                <Item
                    label={'Tổ chức thi'}
                    menuItems={ToChucThi}

                />
                <Item
                    label={"Thi thử"}
                />
                <Item
                    label={"Ôn luyện"}
                />
                <Item
                    label={"Tuyển dụng"}
                />
                <Item
                    label={"Liên hệ"}
                    menuItems={Contact}
                />
            </ul>
        </div>
    )
}
