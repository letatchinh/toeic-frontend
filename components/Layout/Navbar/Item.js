import { DownOutlined, RightOutlined } from '@ant-design/icons'
import React from 'react'

export default function Item({ label, labelPath, menuItems }) {
    return (
        <li className='navbar--list__menu'>
            <span className='navbar--list__menu--label'>
                {label}
            </span>
            {menuItems && <DownOutlined className='navbar--list__menu--arrow' />}
            <ul className='navbar--list__menu--dropdown'>
                {menuItems?.map(({ label, path, submenu }, index) => <li key={index} className='navbar--list__menu--dropdown__item'>
                    <span>
                        {label}
                    </span>
                    {submenu && <RightOutlined className='navbar--list__menu--arrow'/>}
                    {submenu && <ul className='navbar--list__menu--dropdown__item--subMenu'>
                        {submenu?.map(({ label: labelSubmenu, path: pathSubmenu }, i) => <li key={i} className='navbar--list__menu--dropdown__item--subMenu__item'>
                            <span>
                            {labelSubmenu}
                            </span>
                        </li>)}

                    </ul>}

                </li>)}
            </ul>
        </li>

    )
}
